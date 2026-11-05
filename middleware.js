// Vercel Routing Middleware (site statique Astro). Plus utilisé en production depuis le 05/11/2026 : cloudflare/worker.js.
// Négociation de contenu : une page demandée avec « Accept: text/markdown » est renvoyée en Markdown
// (même contenu que la page HTML), une adresse inconnue reçoit un 404 en Markdown.
// Toute autre requête continue telle quelle (rien n'est renvoyé). Vary: Accept des pages HTML : vercel.json.
import { htmlToMarkdown, wantsMarkdown, notFoundMarkdown, MD_HEADERS } from './lib/agent-md.js';

export const config = {
  // pages seulement : ni /_astro, ni fichiers avec extension
  matcher: ['/((?!_astro/|.*\\.[a-zA-Z0-9]+$).*)'],
};

export default async function middleware(request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return;
  if (!wantsMarkdown(request.headers.get('accept'))) return;
  const url = new URL(request.url);
  let page;
  try {
    page = await fetch(url.href, { headers: { accept: 'text/html' }, redirect: 'manual' });
  } catch {
    return;
  }
  if (page.status >= 300 && page.status < 400) {
    const h = new Headers(page.headers);
    h.set('Vary', 'Accept');
    return new Response(null, { status: page.status, headers: h });
  }
  if (page.status === 404) {
    return new Response(notFoundMarkdown(url.origin, url.pathname), { status: 404, headers: { ...MD_HEADERS, 'Cache-Control': 'no-store' } });
  }
  if (!page.ok || !(page.headers.get('content-type') || '').includes('text/html')) return;
  const html = await page.text();
  const h = { ...MD_HEADERS, Link: `<${url.origin}${url.pathname}>; rel="canonical"` };
  if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) h['X-Robots-Tag'] = 'noindex';
  return new Response(request.method === 'HEAD' ? null : htmlToMarkdown(html, url.href), { status: 200, headers: h });
}
