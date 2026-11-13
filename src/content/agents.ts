// Éléments visuels de la page Agents IA : chiffres clés (HTML statique, aucun compteur animé) et libellés des schémas.
import type { Lang } from "./site";

export interface AgentsVisuals {
  stats: { value: string; sub?: string; label: string }[];
  chainLabel: string;
  graphLabel: string;
}

export const AGENTS_VISUALS: Record<Lang, AgentsVisuals> = {
  fr: {
    stats: [
      { value: "479", sub: "/ 724", label: "commits de GaijinToSensei écrits par des agents" },
      { value: "3", label: "agents Claude Code en parallèle" },
      { value: "24", label: "skills écrits pour les agents de Zapz Forge" },
      { value: "25", label: "tâches planifiées sur le VPS" },
    ],
    chainLabel:
      "Chaîne GaijinToSensei : les agents w1, w2 et w3 passent par la QA Playwright, une fusion en avance rapide, puis le script de mise en prod (préversion, contrôles, retour arrière automatique) avant la prod. Une migration destructive est refusée par le script.",
    graphLabel:
      "Graphe steam-roblox-agents : collecte des données Steam, recherche des clones Roblox, analyste, critique qui peut renvoyer la note à l'analyste deux fois au plus, score calculé par du code, rapport. Chaque étape écrit ses sources dans un journal JSONL.",
  },
  en: {
    stats: [
      { value: "479", sub: "/ 724", label: "GaijinToSensei commits written by agents" },
      { value: "3", label: "Claude Code agents in parallel" },
      { value: "24", label: "skills written for the Zapz Forge agents" },
      { value: "25", label: "scheduled jobs on the VPS" },
    ],
    chainLabel:
      "GaijinToSensei pipeline: agents w1, w2 and w3 go through Playwright QA, a fast-forward merge, then the release script (preview, checks, automatic rollback) before production. A destructive migration is rejected by the script.",
    graphLabel:
      "steam-roblox-agents graph: Steam data collection, Roblox clone search, analyst, critic that can send the score back to the analyst at most twice, score computed by code, report. Every step writes its sources to a JSONL log.",
  },
};
