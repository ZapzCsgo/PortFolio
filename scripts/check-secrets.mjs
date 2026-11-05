// Cherche dans dist/ (et, avec --repo, dans les fichiers suivis par git) ce qui ne doit jamais être publié :
// secrets, adresses IP, chemins privés, noms d'hôtes internes, ports, identifiants de projet ou de conteneur.
import { execSync } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = new URL("../", import.meta.url).pathname;
const REPO = process.argv.includes("--repo");

const RULES = [
  ["clé privée", /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
  ["jeton GitHub", /\b(ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}/],
  ["clé AWS", /\bAKIA[0-9A-Z]{16}\b/],
  ["clé Stripe", /\b(sk|rk)_(live|test)_[A-Za-z0-9]{8,}|whsec_[A-Za-z0-9]{8,}/],
  ["clé Anthropic/OpenAI", /\bsk-(ant-)?[A-Za-z0-9_-]{20,}/],
  ["jeton Slack", /\bxox[abpr]-[A-Za-z0-9-]{10,}/],
  ["JWT", /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/],
  ["URL avec identifiants", /[a-z]+:\/\/[^\s:/"'@]+:[^\s@/"']+@[^\s"']+/i],
  ["variable sensible", /\b[A-Z][A-Z0-9_]*_(SECRET|TOKEN|PASSWORD|API_KEY|DATABASE_URL)\b|\bDATABASE_URL\b/],
  ["adresse IPv4", /(?<![\w.-])(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)(?![\w.])/],
  ["chemin privé", /(?:^|[\s"'`(=])\/(?:opt|home|root|srv|var\/lib|etc)\/[A-Za-z0-9._-]+/],
  ["chemin Windows", /\b[A-Z]:\\Users\\/],
  ["hôte interne", /\b[a-z0-9-]+\.(?:internal|local|lan|ts\.net)\b|trycloudflare\.com|\bhub\.zapz\.work\b/i],
  ["URL avec port", /\bhttps?:\/\/[^\s/"']+:\d{2,5}\b/],
  ["identifiant Vercel", /\b(?:prj|team)_[A-Za-z0-9]{16,}\b/],
  ["identifiant de conteneur", /\b(?:docker|container|conteneur)\b[^\n]{0,40}\b[0-9a-f]{12}\b/i],
  ["e-mail privé", /\b[a-z0-9._%+-]+@gmail\.com\b/i],
];

// Faux positifs connus (versions, motifs de ce script, exemples sans danger).
const ALLOW = [/^GITHUB_TOKEN$/, /^CLOUDFLARE_API_TOKEN$/, /\/etc\/nginx$/, /0\.0\.0\.0/, /127\.0\.0\.1/, /^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/];

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const TEXT = /\.(html|xml|txt|js|mjs|cjs|ts|astro|css|json|md|yml|yaml|svg|conf|toml)$|Dockerfile$|\.dockerignore$|\.gitignore$/;
let files;
if (REPO) {
  files = execSync("git ls-files -co --exclude-standard", { cwd: ROOT })
    .toString()
    .split("\n")
    .filter(Boolean)
    .filter((f) => !f.startsWith("dist/") && f !== "package-lock.json")
    .map((f) => join(ROOT, f));
} else {
  files = await walk(join(ROOT, "dist"));
}

const SELF = join(ROOT, "scripts/check-secrets.mjs");
let hits = 0;
for (const f of files.filter((f) => TEXT.test(f) && f !== SELF)) {
  const s = await readFile(f, "utf8").catch(() => "");
  s.split("\n").forEach((raw, i) => {
    // Les tracés SVG (d="...") contiennent des suites de nombres qui ressemblent à des IP.
    const line = raw.replace(/\sd="[^"]*"/g, "");
    for (const [name, re] of RULES) {
      const m = line.match(re);
      if (m && !ALLOW.some((a) => a.test(m[0]))) {
        console.error(`${name} : ${relative(ROOT, f)}:${i + 1} : ${m[0].slice(0, 60)}`);
        hits++;
      }
    }
  });
}

if (hits) {
  console.error(`check-secrets : ${hits} problème(s)`);
  process.exit(1);
}
console.log(`check-secrets : OK (${files.length} fichiers, ${REPO ? "dépôt" : "dist"})`);
