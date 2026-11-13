// Worker Cloudflare du portfolio (site statique Astro servi par les « static assets » du Worker, dossier dist/).
// Reprend vercel.json + middleware.js : redirections, slash final (308), www -> apex (301), http -> https (308),
// en-têtes de sécurité, Vary: Accept sur les pages, cache immuable de /_astro, page 404,
// et négociation Markdown (« Accept: text/markdown » -> même page en Markdown, 404 en Markdown).
import { htmlToMarkdown, wantsMarkdown, notFoundMarkdown, MD_HEADERS } from '../lib/agent-md.js';

const APEX = 'zapz.work';
const SECURITY = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'DENY',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};
// vercel.json « redirects » (permanent: true = 308 chez Vercel)
const REDIRECTS = [
  [/^\/about\/?$/, '/a-propos/'],
  [/^\/certifications\/?$/, '/a-propos/'],
  [/^\/ctf-blog(\/.*)?$/, '/'],
];
// Pages retirées (301) : l'ancien postmortem renvoie vers la page Agents IA, qui décrit les garde-fous.
const MOVED = [
  [/^\/projets\/incident-base-de-donnees\/?$/, '/projets/agents-ia/'],
  [/^\/en\/projects\/database-incident\/?$/, '/en/projects/ai-agents/'],
];
// pages = ni /_astro/, ni fichier avec extension (même motif que le matcher du middleware Vercel)
const isPage = (p) => !p.startsWith('/_astro/') && !/\.[a-zA-Z0-9]+$/.test(p);

function redirect(location, status) {
  return new Response(null, { status, headers: { Location: location, ...SECURITY } });
}

function finish(res, path) {
  const r = new Response(res.body, res);
  for (const [k, v] of Object.entries(SECURITY)) r.headers.set(k, v);
  if (path.startsWith('/_astro/') && r.status === 200) r.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  if (isPage(path)) r.headers.set('Vary', 'Accept');
  return r;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (url.hostname === 'www.' + APEX) return redirect(`https://${APEX}${path}${url.search}`, 301);
    if (url.protocol === 'http:' && url.hostname === APEX) return redirect(`https://${APEX}${path}${url.search}`, 308);
    for (const [re, to] of MOVED) if (re.test(path)) return redirect(to + url.search, 301);
    for (const [re, to] of REDIRECTS) if (re.test(path)) return redirect(to + url.search, 308);
    if (isPage(path) && !path.endsWith('/')) return redirect(path + '/' + url.search, 308);

    const get = request.method === 'GET' || request.method === 'HEAD';
    if (get && isPage(path) && wantsMarkdown(request.headers.get('accept'))) {
      const page = await env.ASSETS.fetch(new Request(url.href, { headers: { accept: 'text/html' }, redirect: 'manual' }));
      if (page.status >= 300 && page.status < 400) return finish(page, path);
      if (page.status === 404) {
        return finish(new Response(notFoundMarkdown(url.origin, path), { status: 404, headers: { ...MD_HEADERS, 'Cache-Control': 'no-store' } }), path);
      }
      if (page.ok && (page.headers.get('content-type') || '').includes('text/html')) {
        const html = await page.text();
        const h = { ...MD_HEADERS, Link: `<${url.origin}${path}>; rel="canonical"` };
        if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) h['X-Robots-Tag'] = 'noindex';
        return finish(new Response(request.method === 'HEAD' ? null : htmlToMarkdown(html, url.href), { status: 200, headers: h }), path);
      }
      return finish(page, path);
    }
    return finish(await env.ASSETS.fetch(request), path);
  },
};
