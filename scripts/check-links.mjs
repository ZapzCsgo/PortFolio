// Vérifie les liens internes de dist/ : chaque href/src local doit exister, chaque ancre #id aussi.
import { readFile, readdir, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const exists = (p) => stat(p).then(() => true, () => false);
const files = await walk(DIST);
const html = files.filter((f) => f.endsWith(".html"));
const ids = new Map();
for (const f of html) {
  const s = await readFile(f, "utf8");
  ids.set(f, new Set([...s.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

function target(fromFile, url) {
  const base = "/" + relative(DIST, fromFile).replace(/index\.html$/, "");
  const u = new URL(url, "https://example.invalid" + base);
  return u;
}

let errors = 0;
let checked = 0;
for (const f of html) {
  const s = await readFile(f, "utf8");
  const refs = [...s.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  const srcsets = [...s.matchAll(/\ssrcset="([^"]+)"/g)].flatMap((m) => m[1].split(",").map((x) => x.trim().split(/\s+/)[0]));
  for (const ref of [...refs, ...srcsets]) {
    if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue;
    checked++;
    const u = target(f, ref);
    let path = join(DIST, decodeURIComponent(u.pathname));
    let file = path;
    if (u.pathname.endsWith("/")) file = join(path, "index.html");
    if (!(await exists(file))) {
      console.error(`Lien cassé : ${relative(DIST, f)} -> ${ref}`);
      errors++;
      continue;
    }
    if (u.hash && file.endsWith(".html")) {
      const id = decodeURIComponent(u.hash.slice(1));
      if (!ids.get(file)?.has(id)) {
        console.error(`Ancre absente : ${relative(DIST, f)} -> ${ref}`);
        errors++;
      }
    }
  }
}

for (const need of ["sitemap-index.xml", "robots.txt", "404.html", "og-fr.png", "og-en.png", "cv.pdf", "cv-en.pdf"]) {
  if (!(await exists(join(DIST, need)))) {
    console.error(`Fichier attendu absent : ${need}`);
    errors++;
  }
}

if (errors) {
  console.error(`check-links : ${errors} erreur(s) sur ${checked} liens internes`);
  process.exit(1);
}
console.log(`check-links : OK (${html.length} pages, ${checked} liens internes)`);
