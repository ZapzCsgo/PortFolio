// Génère public/cv.pdf et public/cv-en.pdf à partir des pages /cv/ et /en/cv/ du site construit.
// Usage : npm run build:site && CHROME_PATH=/chemin/vers/chrome node scripts/cv-pdf.mjs && npm run build:site
import { chromium } from "playwright-core";
import { serve } from "./serve.mjs";

const ROOT = new URL("../", import.meta.url).pathname;
const PORT = 4399;
const server = await serve(PORT);
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, args: ["--no-sandbox"] });
const page = await browser.newPage();
for (const [path, out] of [
  ["/cv/", "cv.pdf"],
  ["/en/cv/", "cv-en.pdf"],
]) {
  await page.goto(`http://127.0.0.1:${PORT}${path}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: "print", colorScheme: "light" });
  await page.pdf({ path: `${ROOT}public/${out}`, format: "A4", printBackground: true, preferCSSPageSize: true });
  console.log(`public/${out}`);
}
await browser.close();
server.close();
