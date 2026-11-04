// HTML -> Markdown, sans dépendance (Workers, Edge, Node).
// Sert la version Markdown d'une page aux agents qui envoient « Accept: text/markdown ».
// Même contenu que la page HTML (main de préférence), rien d'ajouté.

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—', hellip: '…', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', laquo: '«', raquo: '»', middot: '·', copy: '©', eacute: 'é', egrave: 'è', agrave: 'à', ccedil: 'ç', times: '×', rarr: '→', larr: '←', bull: '•', euro: '€', deg: '°' };

function decode(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') {
      const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      try { return String.fromCodePoint(n); } catch { return m; }
    }
    return ENT[e.toLowerCase()] ?? m;
  });
}

function attr(tag, name) {
  const m = tag.match(new RegExp('\\s' + name + '\\s*=\\s*("([^"]*)"|\'([^\']*)\'|([^\\s>]+))', 'i'));
  return m ? decode(m[2] ?? m[3] ?? m[4] ?? '') : null;
}

function abs(href, base) {
  if (!href || /^(javascript:|data:)/i.test(href)) return null;
  if (href.startsWith('#')) return null;
  try { return new URL(href, base).href; } catch { return href; }
}

// Retire un élément et tout son contenu (non imbriqué pour ces balises).
function drop(html, tags) {
  for (const t of tags) html = html.replace(new RegExp('<' + t + '\\b[^>]*>[\\s\\S]*?</' + t + '>', 'gi'), '');
  return html;
}

// Retire les éléments marqués hidden / aria-hidden="true" (gère l'imbrication du même nom).
function dropHidden(html) {
  const re = /<([a-z][a-z0-9-]*)\b[^>]*\s(?:hidden(?=[\s>=])|aria-hidden\s*=\s*["']?true["']?)[^>]*>/gi;
  let out = '', last = 0, m;
  while ((m = re.exec(html))) {
    const tag = m[1].toLowerCase();
    if (/^(img|br|hr|input|meta|link|source|use|path|circle|rect)$/.test(tag) || m[0].endsWith('/>')) {
      out += html.slice(last, m.index); last = m.index + m[0].length; continue;
    }
    const open = new RegExp('<' + tag + '\\b|</' + tag + '\\s*>', 'gi');
    open.lastIndex = m.index + m[0].length;
    let depth = 1, mm, end = html.length;
    while ((mm = open.exec(html))) {
      if (mm[0][1] === '/') { if (--depth === 0) { end = mm.index + mm[0].length; break; } } else depth++;
    }
    out += html.slice(last, m.index); last = end; re.lastIndex = end;
  }
  return out + html.slice(last);
}

export function htmlToMarkdown(html, baseUrl) {
  const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [, ''])[1].trim());
  const descTag = html.match(/<meta[^>]+name=["']description["'][^>]*>/i);
  const desc = descTag ? attr(descTag[0], 'content') : '';
  const canonTag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
  const canonical = canonTag ? attr(canonTag[0], 'href') : baseUrl;

  let body = (html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i) || html.match(/<body\b[^>]*>([\s\S]*)<\/body>/i) || [, html])[1];
  body = body.replace(/<!--[\s\S]*?-->/g, '');
  body = drop(body, ['script', 'style', 'noscript', 'template', 'svg', 'iframe', 'canvas', 'video', 'audio', 'select', 'button', 'form', 'dialog']);
  body = dropHidden(body);

  // Liens : [texte](url)
  body = body.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (m, a, inner) => {
    const href = abs(attr('<a ' + a + '>', 'href'), baseUrl);
    const text = inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() || attr('<a ' + a + '>', 'aria-label') || '';
    if (!text) return '';
    return href ? ` [${text}](${href}) ` : ` ${text} `;
  });
  body = body.replace(/<img\b[^>]*>/gi, (t) => {
    const alt = attr(t, 'alt');
    return alt ? ` ${alt} ` : '';
  });
  body = body.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (m, n, inner) => `\n\n${'#'.repeat(+n)} ${inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}\n\n`);
  body = body.replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (m, t, i) => (i.trim() ? `**${i.trim()}**` : ''));
  body = body.replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (m, t, i) => (i.trim() ? `*${i.trim()}*` : ''));
  body = body.replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');
  body = body.replace(/<li\b[^>]*>/gi, '\n- ');
  body = body.replace(/<(th|td)\b[^>]*>/gi, ' | ');
  body = body.replace(/<\/tr>/gi, ' |\n');
  body = body.replace(/<summary\b[^>]*>([\s\S]*?)<\/summary>/gi, '\n\n**$1**\n\n');
  body = body.replace(/<br\s*\/?>/gi, '\n');
  body = body.replace(/<\/?(p|div|section|article|aside|header|footer|nav|ul|ol|table|thead|tbody|tr|figure|figcaption|blockquote|details|dl|dt|dd|h[1-6]|pre)\b[^>]*>/gi, '\n\n');
  body = body.replace(/<[^>]+>/g, ' ');
  body = decode(body);

  const lines = body.split('\n').map((l) => l.replace(/[ \t\u00a0]+/g, ' ').trim());
  const out = [];
  for (const l of lines) {
    if (l === '|' || l === '| |') continue;
    const fixed = l.replace(/^\|\s*\|/, '|').replace(/\|\s*\|$/, '|');
    if (!fixed) { if (out.length && out[out.length - 1] !== '') out.push(''); continue; }
    out.push(fixed);
  }
  let md = out.join('\n').replace(/^- *\n+(?=\S)/gm, '- ').replace(/\n{3,}/g, '\n\n').trim();

  const head = [];
  const h1 = md.match(/^# .*$/m);
  if (h1 && md.indexOf(h1[0]) === 0) { head.push(h1[0], ''); md = md.slice(h1[0].length).trim(); }
  else head.push(`# ${title}`, '');
  if (desc) head.push(`> ${desc}`, '');
  head.push(`URL: ${canonical || baseUrl}`, '');
  return head.join('\n') + '\n' + md + '\n';
}

// L'agent veut-il du Markdown plutôt que du HTML ?
export function wantsMarkdown(accept) {
  if (!accept || !/text\/markdown/i.test(accept)) return false;
  const q = (type) => {
    let best = -1;
    for (const part of accept.split(',')) {
      const [t, ...params] = part.trim().split(';');
      if (t.trim().toLowerCase() !== type) continue;
      const qp = params.find((p) => p.trim().startsWith('q='));
      best = Math.max(best, qp ? parseFloat(qp.trim().slice(2)) || 0 : 1);
    }
    return best;
  };
  const md = q('text/markdown');
  return md > 0 && md >= q('text/html');
}

export function notFoundMarkdown(origin, path, lang) {
  return `# 404 – Page not found\n\nThe page \`${path}\` does not exist on ${origin.replace(/^https?:\/\//, '')}.\n\n- Home: ${origin}/\n- Sitemap: ${origin}/sitemap.xml\n- Site summary for agents: ${origin}/llms.txt\n`;
}

export const MD_HEADERS = {
  'Content-Type': 'text/markdown; charset=utf-8',
  Vary: 'Accept',
  'Cache-Control': 'public, max-age=300',
  'X-Content-Type-Options': 'nosniff',
};
