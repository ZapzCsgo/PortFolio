// Relecture automatique des textes : pas de tiret cadratin, pas de jargon creux, pas de « actuellement ».
import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = new URL("../", import.meta.url).pathname;
const BANNED = [
  ["tiret cadratin", /\u2014/],
  ["jargon", /\b(passionn[ée]e?s?|innovant[es]*|innovation|synergie|disruptif|passionate|innovative|synergy|cutting[- ]edge|game[- ]changer|leverage|seamless)\b/i],
  ["date périmée", /\b(actuellement|currently)\b/i],
  ["sujet retiré (incident, alternance)", /postmortem|base de prod vidée|wiped|29 octobre 2026|29 October 2026|29\/10\/2026|\balternance\b|work-study/i],
  ["sujet retiré", /cheat engine|anti-?cheat|game hacking|AgeOfMoney|trenches|Voie de la Pierre|Counter-Strike|\bCS2\b/i],
];

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(ts|astro|md)$/.test(e.name)) out.push(p);
  }
  return out;
}

let hits = 0;
const files = [...(await walk(join(ROOT, "src"))), join(ROOT, "README.md")];
for (const f of files) {
  const s = await readFile(f, "utf8").catch(() => "");
  s.split("\n").forEach((line, i) => {
    for (const [name, re] of BANNED) {
      const m = line.match(re);
      if (m) {
        console.error(`${name} : ${relative(ROOT, f)}:${i + 1} : « ${m[0]} »`);
        hits++;
      }
    }
  });
}
if (hits) {
  console.error(`lint-texte : ${hits} problème(s)`);
  process.exit(1);
}
console.log(`lint-texte : OK (${files.length} fichiers)`);
