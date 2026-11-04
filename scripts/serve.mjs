// Petit serveur statique pour dist/ (captures, PDF du CV, Lighthouse en local).
// Usage : node scripts/serve.mjs [port]   (port par défaut 4321)
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = new URL("../dist/", import.meta.url).pathname;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".pdf": "application/pdf",
  ".json": "application/json",
};

export function serve(port = 4321) {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, "http://x");
    let p = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
    let file = join(ROOT, p);
    try {
      const s = await stat(file);
      if (s.isDirectory()) {
        if (!p.endsWith("/")) {
          res.writeHead(308, { Location: p + "/" });
          return res.end();
        }
        file = join(file, "index.html");
      }
      const body = await readFile(file);
      res.writeHead(200, { "Content-Type": TYPES[extname(file)] || "application/octet-stream" });
      res.end(body);
    } catch {
      const body = await readFile(join(ROOT, "404.html")).catch(() => "404");
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(body);
    }
  });
  return new Promise((ok) => server.listen(port, "127.0.0.1", () => ok(server)));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.argv[2] || 4321);
  await serve(port);
  console.log(`dist/ servi sur le port ${port}`);
}
