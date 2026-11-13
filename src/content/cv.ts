// Texte du CV (page /cv et PDF). Positionnement (13/11/2026) : développeur IA, web et DevOps, stage de 6 mois.
// Faits vérifiés uniquement (cv adaptés validés par Matteo, dépôt, confirmations du 13/11/2026).
import type { Lang } from "./site";
import { CODINGAME_URL } from "./pages";

export interface CvEntry {
  title: string;
  where?: string;
  when?: string;
  points: string[];
}

export interface Cv {
  seoTitle: string;
  description: string;
  heading: string;
  sub: string;
  location: string;
  profileTitle: string;
  profile: string;
  skillsTitle: string;
  skills: { label: string; text: string }[];
  projectsTitle: string;
  projects: CvEntry[];
  workTitle: string;
  work: CvEntry[];
  eduTitle: string;
  edu: CvEntry[];
  certTitle: string;
  certs: { text: string; href?: string }[];
  langTitle: string;
  langs: string;
  download: string;
}

export const CV: Record<Lang, Cv> = {
  fr: {
    seoTitle: "CV de Matteo Murru, développeur IA, web et DevOps (stage de 6 mois)",
    description: "CV de Matteo Murru : étudiant à 42 Nice, stage de 6 mois en IA, web ou DevOps, à Nice / Côte d'Azur ou en télétravail, disponible début décembre 2026.",
    heading: "Développeur IA, web et DevOps | stage de 6 mois",
    sub: "Nice / Côte d'Azur ou télétravail | disponible début décembre 2026",
    location: "Nice",
    profileTitle: "Profil",
    profile:
      "Étudiant à 42 Nice. Je construis et fais tourner de vrais produits avec des agents IA, de l'idée à la prod. J'utilise Claude Code tous les jours : je découpe le besoin en tâches, je les confie à plusieurs agents en parallèle, puis je relis, je teste et je mets en ligne, avec des garde-fous pour que rien de cassé ne reste en prod.",
    skillsTitle: "Compétences",
    skills: [
      { label: "IA", text: "Claude Code (plusieurs agents en parallèle), Codex, OpenCode, Gemini CLI, skills, MCP, Hermes Agent, LangGraph, Pydantic, modèles Claude et GPT" },
      { label: "Web", text: "TypeScript, Next.js, React, Node.js, PostgreSQL, Prisma, Redis, authentification OIDC, sites multilingues, SEO technique" },
      { label: "DevOps", text: "Linux (VPS, systemd, cron), Bash, Git, Cloudflare (Workers, Pages, Tunnel), Vercel, déploiement avec retour arrière, supervision, PITR ; en apprentissage : Docker, Ansible, GitHub Actions, AWS" },
      { label: "Qualité", text: "Playwright, tests par branche, préversion contrôlée, migrations additives, pytest, revue de code" },
    ],
    projectsTitle: "Projets",
    projects: [
      {
        title: "GaijinToSensei, app web pour apprendre le japonais",
        where: "gajintosensei.com",
        points: [
          "En production avec des utilisateurs réels, en français, anglais et japonais : Next.js, TypeScript, PostgreSQL avec Prisma, Redis, Cloudflare Workers (migré depuis Vercel, TTFB 0,26-0,30 s -> 0,07-0,09 s).",
          "3 agents Claude Code en parallèle, chacun sur sa branche, tests Playwright avant fusion : ils ont écrit 479 des 724 commits.",
          "Mise en prod par script : préversion, contrôles HTTP, retour arrière automatique, garde de prod toutes les 10 min. Aucun droit destructif des agents sur la prod, base restaurable à la minute près (PITR).",
        ],
      },
      {
        title: "Zapz Forge, mon atelier d'agents pour jeux Roblox",
        where: "roblox-ts, MCP",
        points: [
          "Claude Code, Codex, OpenCode et Gemini CLI sur un même jeu, reliés à Roblox Studio et Blender par MCP. Doc Roblox indexée en local, banque d'assets avec recherche sémantique.",
          "24 skills écrits pour les agents (code, game design, équilibrage, UI, playtest, performance), dont une « barre de qualité » qui oblige l'agent à se noter sur 10 face à de vrais jeux avant de montrer son travail.",
        ],
      },
      {
        title: "MetaAOE, app Overwolf et site pour Age of Empires IV et II",
        where: "metaaoe.app",
        points: [
          "Stats, build orders, overlay en jeu, site avec comptes utilisateurs (OIDC) pour partager ses builds. Codé la nuit par des agents. En QA chez Overwolf pour leur store.",
        ],
      },
      {
        title: "Automatisations et infra sur VPS",
        where: "Hermes Agent, configuré et exploité",
        points: [
          "25 tâches planifiées : usine à vidéos courtes qui programme des posts YouTube, Instagram et TikTok, boucle SEO qui met en ligne une amélioration mesurée par jour, réponses aux commentaires, garde de prod avec alertes Telegram.",
          "Agents en service systemd sous un utilisateur sans root, hub derrière un tunnel Cloudflare sans port ouvert, 5 sites publiés seuls sur Cloudflare Pages. zapz.work : CI GitHub Actions, image Docker, Cloudflare Workers.",
        ],
      },
      {
        title: "steam-roblox-agents, système multi-agents",
        where: "Python, LangGraph",
        points: [
          "Un agent critique renvoie la note quand elle ne tient pas. Sur 21 cas : 61,9 % de verdicts exacts avec Claude, contre 33,3 % pour une règle naïve.",
        ],
      },
      {
        title: "Projets 42",
        points: [
          "Cloud-1 (Ansible, Docker, en cours), ft_transcendence (Vault, Docker compose, nginx TLS), ft_strace, libasm (assembleur x86-64), Webserv (C++98), Minishell.",
        ],
      },
    ],
    workTitle: "Expérience",
    work: [
      {
        title: "Localization QA (LQA)",
        where: "Keywords Studios, Tokyo",
        when: "juin 2026 à octobre 2026",
        points: ["Tests de jeux Konami : bugs reproduits puis décrits avec précision pour que les devs les corrigent."],
      },
    ],
    eduTitle: "Formation",
    edu: [
      { title: "42 Nice", when: "depuis janvier 2025", points: ["Titre RNCP niveau 7 en cours, tronc commun validé."] },
      { title: "42 Tokyo (échange)", when: "mars 2026 à octobre 2026", points: [] },
    ],
    certTitle: "Certifications",
    certs: [
      { text: "CodinGame : C (juin 2025)", href: CODINGAME_URL },
      { text: "AWS Certified Cloud Practitioner : en cours" },
    ],
    langTitle: "Langues",
    langs: "Français (langue maternelle) | anglais professionnel | japonais JLPT N5",
    download: "Télécharger le PDF",
  },
  en: {
    seoTitle: "Resume of Matteo Murru, AI, web and DevOps developer (6-month internship)",
    description: "Resume of Matteo Murru: 42 Nice student, 6-month internship in AI, web or DevOps, in Nice / the French Riviera or remote, available from early December 2026.",
    heading: "AI, web and DevOps developer | 6-month internship",
    sub: "Nice / French Riviera or remote | available from early December 2026",
    location: "Nice, France",
    profileTitle: "Profile",
    profile:
      "42 Nice student. I build and run real products with AI agents, from the idea to production. I use Claude Code every day: I split the need into tasks, hand them to several agents in parallel, then review, test and ship, with guardrails so nothing broken stays live.",
    skillsTitle: "Skills",
    skills: [
      { label: "AI", text: "Claude Code (several agents in parallel), Codex, OpenCode, Gemini CLI, skills, MCP, Hermes Agent, LangGraph, Pydantic, Claude and GPT models" },
      { label: "Web", text: "TypeScript, Next.js, React, Node.js, PostgreSQL, Prisma, Redis, OIDC authentication, Astro, multilingual sites, technical SEO" },
      { label: "DevOps", text: "Linux (VPS, systemd, cron), Bash, Git, Cloudflare (Workers, Pages, Tunnel), Vercel, deploys with rollback, monitoring, PITR; learning: Docker, Ansible, GitHub Actions, AWS" },
      { label: "Quality", text: "Playwright, per-branch tests, checked previews, additive migrations, pytest, code review" },
    ],
    projectsTitle: "Projects",
    projects: [
      {
        title: "GaijinToSensei, a web app to learn Japanese",
        where: "gajintosensei.com",
        points: [
          "In production with real users, in French, English and Japanese: Next.js, TypeScript, PostgreSQL with Prisma, Redis, Cloudflare Workers (moved from Vercel, TTFB 0.26-0.30 s -> 0.07-0.09 s).",
          "3 Claude Code agents in parallel, each on its own branch, Playwright tests before merge: they wrote 479 of the 724 commits.",
          "Releases through a script: preview, HTTP checks, automatic rollback, a production guard every 10 min. Agents have no destructive rights on production, database restorable to the minute (PITR).",
        ],
      },
      {
        title: "Zapz Forge, my agent workshop for Roblox games",
        where: "roblox-ts, MCP",
        points: [
          "Claude Code, Codex, OpenCode and Gemini CLI on the same game, connected to Roblox Studio and Blender through MCP. Roblox docs indexed locally, an asset bank with semantic search.",
          "24 skills written for the agents (code, game design, balancing, UI, playtesting, performance), including a \"quality bar\" that makes the agent score itself out of 10 against real games before showing its work.",
        ],
      },
      {
        title: "MetaAOE, an Overwolf app and site for Age of Empires IV and II",
        where: "metaaoe.app",
        points: [
          "Stats, build orders, in-game overlay, a site with user accounts (OIDC) to share builds. Built at night by agents. In QA at Overwolf for their store.",
        ],
      },
      {
        title: "Automations and infrastructure on a VPS",
        where: "Hermes Agent, configured and run",
        points: [
          "25 scheduled jobs: a short video factory that schedules YouTube, Instagram and TikTok posts, an SEO loop that ships one measured improvement a day, replies to comments, a production guard with Telegram alerts.",
          "Agents as a systemd service under a non-root user, a hub behind a Cloudflare tunnel with no open port, 5 sites published automatically to Cloudflare Pages. zapz.work: GitHub Actions CI, Docker image, Cloudflare Workers.",
        ],
      },
      {
        title: "steam-roblox-agents, a multi-agent system",
        where: "Python, LangGraph",
        points: [
          "A critic agent sends back a score that does not hold up. On 21 cases: 61.9% exact verdicts with Claude vs 33.3% for a naive rule.",
        ],
      },
      {
        title: "42 projects",
        points: [
          "Cloud-1 (Ansible, Docker, in progress), ft_transcendence (Vault, Docker compose, nginx TLS), ft_strace, libasm (x86-64 assembly), Webserv (C++98), Minishell.",
        ],
      },
    ],
    workTitle: "Experience",
    work: [
      {
        title: "Localization QA (LQA)",
        where: "Keywords Studios, Tokyo",
        when: "June 2026 to October 2026",
        points: ["Tested Konami games: reproduced bugs and reported them precisely so the developers could fix them."],
      },
    ],
    eduTitle: "Education",
    edu: [
      { title: "42 Nice", when: "since January 2025", points: ["RNCP level 7 degree (master's level) in progress, common core completed."] },
      { title: "42 Tokyo (exchange)", when: "March 2026 to October 2026", points: [] },
    ],
    certTitle: "Certifications",
    certs: [
      { text: "CodinGame: C (June 2025)", href: CODINGAME_URL },
      { text: "AWS Certified Cloud Practitioner: in progress" },
    ],
    langTitle: "Languages",
    langs: "French (native) | English (professional) | Japanese JLPT N5",
    download: "Download the PDF",
  },
};
