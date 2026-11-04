// Génère public/og-fr.png et public/og-en.png (1200 x 630) avec Chromium.
// Usage : CHROME_PATH=/chemin/vers/chrome node scripts/og-image.mjs
import { chromium } from "playwright-core";
import { readFile } from "node:fs/promises";

const ROOT = new URL("../", import.meta.url).pathname;
const font = (await readFile(ROOT + "node_modules/@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2")).toString("base64");
const logo = (await readFile(ROOT + "public/icon-512.png")).toString("base64");

const TEXT = {
  fr: {
    role: "Alternance DevOps / Cloud / SRE",
    where: "Nice, Sophia Antipolis, Monaco",
    tags: ["App en production", "Postmortem d'incident", "CI, Docker, supervision"],
  },
  en: {
    role: "DevOps / Cloud / SRE work-study",
    where: "Nice, Sophia Antipolis, Monaco",
    tags: ["App in production", "Incident postmortem", "CI, Docker, monitoring"],
  },
};

const html = (t) => `<!doctype html><html><head><style>
@font-face{font-family:M;src:url(data:font/woff2;base64,${font}) format("woff2");font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#000;color:#f5f5f4;font-family:M,sans-serif;padding:72px 80px;display:flex;flex-direction:column;position:relative;overflow:hidden}
.bar{position:absolute;left:0;top:0;bottom:0;width:14px;background:#f97316}
.top{display:flex;align-items:center;gap:22px}
.top img{width:84px;height:84px;border-radius:18px}
.site{font-size:30px;font-weight:600;color:#b3aca7}
h1{font-size:92px;font-weight:800;letter-spacing:-0.03em;margin-top:56px;line-height:1}
.role{font-size:46px;font-weight:700;color:#f97316;margin-top:22px}
.where{font-size:30px;color:#d6d3d1;margin-top:14px;font-weight:500}
.tags{display:flex;gap:14px;margin-top:auto}
.tags span{border:2px solid #3a3532;border-radius:12px;padding:10px 18px;font-size:24px;font-weight:600;color:#e7e5e4}
</style></head><body><div class="bar"></div>
<div class="top"><img src="data:image/png;base64,${logo}"><span class="site">zapz.work</span></div>
<h1>Matteo Murru</h1><div class="role">${t.role}</div><div class="where">${t.where}</div>
<div class="tags">${t.tags.map((x) => `<span>${x}</span>`).join("")}</div></body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const lang of ["fr", "en"]) {
  await page.setContent(html(TEXT[lang]), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${ROOT}public/og-${lang}.png` });
  console.log(`public/og-${lang}.png`);
}
await browser.close();
