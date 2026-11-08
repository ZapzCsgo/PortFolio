import { execSync } from "node:child_process";

function sha(): string {
  const env = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || process.env.SOURCE_COMMIT;
  if (env) return env.slice(0, 7);
  try {
    return execSync("git rev-parse --short=7 HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "local";
  }
}

export const BUILD = {
  sha: sha(),
  date: new Date(),
};

export function buildDate(lang: "fr" | "en"): string {
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(BUILD.date);
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Échappe le texte puis rend `ceci` en <code> et **ceci** en <strong>.
export function rich(s: string): string {
  return esc(s)
    .replace(/`([^`]+)`/g, '<code translate="no">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>');
}
