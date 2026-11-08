// Éléments visuels de la page Agents IA : chiffres clés (HTML statique, aucun compteur animé), chronologie de
// l'incident du 29/10/2026 (détail : content/incident.ts) et libellés des schémas.
import type { Lang } from "./site";

export interface AgentsVisuals {
  stats: { value: string; sub?: string; label: string }[];
  chainLabel: string;
  graphLabel: string;
  timelineLabel: string;
  timeline: { phase: string; text: string; bad?: boolean }[];
  postmortem: string;
}

export const AGENTS_VISUALS: Record<Lang, AgentsVisuals> = {
  fr: {
    stats: [
      { value: "479", sub: "/ 724", label: "commits de GaijinToSensei écrits par des agents" },
      { value: "3", label: "agents Claude Code en parallèle" },
      { value: "Refusée", label: "toute migration destructive, par le script, depuis le 29/10/2026" },
      { value: "21", label: "cas d'évaluation pour steam-roblox-agents" },
    ],
    chainLabel:
      "Chaîne GaijinToSensei : les agents w1, w2 et w3 passent par la QA Playwright, une fusion en avance rapide, puis le script de mise en prod (préversion, contrôles, retour arrière automatique) avant la prod. Une migration destructive est refusée par le script.",
    graphLabel:
      "Graphe steam-roblox-agents : collecte des données Steam, recherche des clones Roblox, analyste, critique qui peut renvoyer la note à l'analyste deux fois au plus, score calculé par du code, rapport. Chaque étape écrit ses sources dans un journal JSONL.",
    timelineLabel: "L'incident du 29 octobre 2026",
    timeline: [
      { phase: "03:54 UTC", text: "Une migration vise la base de prod", bad: true },
      { phase: "Impact", text: "Base de prod vidée", bad: true },
      { phase: "Réparation", text: "Restauration PITR chez Neon" },
      { phase: "Analyse", text: "Postmortem sans reproche" },
      { phase: "Prévention", text: "Règle ajoutée au script de mise en prod" },
    ],
    postmortem: "Lire le postmortem",
  },
  en: {
    stats: [
      { value: "479", sub: "/ 724", label: "GaijinToSensei commits written by agents" },
      { value: "3", label: "Claude Code agents in parallel" },
      { value: "Rejected", label: "any destructive migration, by the script, since 29/10/2026" },
      { value: "21", label: "evaluation cases for steam-roblox-agents" },
    ],
    chainLabel:
      "GaijinToSensei pipeline: agents w1, w2 and w3 go through Playwright QA, a fast-forward merge, then the release script (preview, checks, automatic rollback) before production. A destructive migration is rejected by the script.",
    graphLabel:
      "steam-roblox-agents graph: Steam data collection, Roblox clone search, analyst, critic that can send the score back to the analyst at most twice, score computed by code, report. Every step writes its sources to a JSONL log.",
    timelineLabel: "The 29 October 2026 incident",
    timeline: [
      { phase: "03:54 UTC", text: "A migration hits the prod database", bad: true },
      { phase: "Impact", text: "Prod database wiped", bad: true },
      { phase: "Repair", text: "Point-in-time restore on Neon" },
      { phase: "Review", text: "Blameless postmortem" },
      { phase: "Prevention", text: "Rule added to the release script" },
    ],
    postmortem: "Read the postmortem",
  },
};
