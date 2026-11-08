// Texte du CV (page /cv et PDF). Positionnement DevOps / Cloud / SRE. Faits vérifiés uniquement.
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
    seoTitle: "CV de Matteo Murru, alternance DevOps / Cloud / SRE",
    description: "CV de Matteo Murru : étudiant à 42 Nice, alternance DevOps / Cloud / SRE d'1 an à Nice, Sophia Antipolis ou Monaco.",
    heading: "Alternance DevOps / Cloud / SRE (1 an)",
    location: "Nice",
    profileTitle: "Profil",
    profile:
      "Étudiant à 42 Nice, je cherche une alternance d'1 an à Nice, Sophia Antipolis ou Monaco. Je fais tourner seul une app en production (utilisateurs réels) : mises en prod contrôlées, supervision, base restaurée après un incident.",
    skillsTitle: "Compétences",
    skills: [
      { label: "Utilisé en prod", text: "Linux (VPS, systemd, cron), Bash, Git, Cloudflare (Workers, Pages, Tunnel), Vercel (CLI, edge), PostgreSQL (Neon) avec Prisma, Redis (Upstash), Node.js / TypeScript, Python" },
      { label: "Exploitation en prod", text: "route de santé, alertes planifiées, déploiement avec retour arrière automatique, migrations additives, restauration point-in-time (PITR)" },
      { label: "IA agentique", text: "Claude Code (3 agents en parallèle), Hermes Agent sur VPS ; en apprentissage : LangGraph" },
      { label: "En apprentissage", text: "Docker, Docker compose, Ansible, GitHub Actions, AWS (Cloud Practitioner en cours), HashiCorp Vault" },
      { label: "Sécurité système et bas niveau", text: "C (certification CodinGame), C++, assembleur x86-64, format ELF, appels système" },
    ],
    projectsTitle: "Projets",
    projects: [
      {
        title: "GaijinToSensei, app d'apprentissage du japonais",
        where: "gajintosensei.com",
        points: [
          "En production avec des utilisateurs réels : Next.js, PostgreSQL (Neon) avec Prisma, Redis (Upstash), Resend, Cloudflare Workers (migré depuis Vercel ; TTFB 0,26-0,30 s -> 0,07-0,09 s).",
          "3 agents Claude Code en parallèle, un par branche, auteurs de 479 des 724 commits : code, QA Playwright, fusion.",
          "Mise en prod par script verrouillé : préversion, contrôles HTTP, promotion, nouveau contrôle, retour arrière automatique. Garde de prod planifiée toutes les 10 minutes.",
          "Supervision : route de santé (base, Redis, e-mail, stockage), erreurs serveur enregistrées en base.",
          "Incident du 29/10/2026 : une migration lancée par un agent a visé la base de prod et l'a vidée. Restaurée par point-in-time restore, postmortem sans reproche, plus aucun droit destructif pour les agents sur la prod.",
        ],
      },
      {
        title: "Infra perso",
        points: [
          "VPS Linux : agents de nuit en service systemd sous un utilisateur dédié sans root, exécuteur root à liste fermée, 25 tâches planifiées (garde de prod, publications, surveillance d'un bot, alertes).",
          "Hub perso derrière un tunnel Cloudflare sans port ouvert et un proxy d'authentification edge (mot de passe PBKDF2, cookie HMAC, délai anti force brute, HSTS).",
          "5 sites statiques publiés automatiquement sur Cloudflare Pages (intégration Git ou wrangler depuis le VPS).",
          "zapz.work : CI GitHub Actions (lint, build, tests, Lighthouse), image Docker publiée sur GHCR, Cloudflare Workers (assets statiques, redirections et en-têtes par le Worker), mise en ligne par script, contrôle de disponibilité.",
        ],
      },
      {
        title: "steam-roblox-agents, système multi-agents (IA agentique)",
        points: [
          "LangGraph en Python : collecte, recherche de clones, analyste LLM (Pydantic) et agent critique qui renvoie la note. Évaluation sur 21 cas passés, CI hors ligne.",
        ],
      },
      {
        title: "Projets 42 (système et infra)",
        points: [
          "Cloud-1, en cours, en binôme : déploiement automatisé d'un site sur le cloud avec Ansible et Docker.",
          "ft_transcendence, en équipe : HashiCorp Vault en conteneur pour les secrets, Docker compose, nginx en TLS.",
          "ft_strace (traçage des appels système), woody_woodpacker (chiffrement de binaires ELF64), libasm (assembleur x86-64), ft_ls.",
        ],
      },
    ],
    workTitle: "Expérience",
    work: [
      {
        title: "Localization QA (LQA)",
        where: "Keywords Studios, Tokyo",
        when: "Juin 2026 à octobre 2026",
        points: [
          "Tests de jeux du studio Konami : vérification du français en jeu, bugs techniques reproduits puis décrits avec précision pour les devs.",
        ],
      },
      { title: "Équipier polyvalent", where: "McDonald's", points: [] },
    ],
    eduTitle: "Formation",
    edu: [
      { title: "42 Nice", when: "Depuis janvier 2025", points: ["Tronc commun validé en 2025, branche Unix et bas niveau, vers le titre RNCP niveau 7 de 42."] },
      { title: "42 Tokyo (échange)", when: "Mars 2026 à octobre 2026", points: [] },
      { title: "Bac pro Commercialisation et services en restauration", points: [] },
    ],
    certTitle: "Certifications",
    certs: [
      { text: "CodinGame : C (juin 2025)", href: CODINGAME_URL },
      { text: "AWS Certified Cloud Practitioner : en cours" },
    ],
    langTitle: "Langues",
    langs: "Français (langue maternelle) | anglais professionnel et conversationnel | japonais JLPT N5",
    download: "Télécharger le PDF",
  },
  en: {
    seoTitle: "Resume of Matteo Murru, DevOps / Cloud / SRE work-study",
    description: "Resume of Matteo Murru: 42 Nice student, looking for a 1-year DevOps / Cloud / SRE work-study contract in Nice, Sophia Antipolis or Monaco.",
    heading: "DevOps / Cloud / SRE work-study (1 year)",
    location: "Nice, France",
    profileTitle: "Profile",
    profile:
      "42 Nice student looking for a 1-year work-study contract in Nice, Sophia Antipolis or Monaco. I run an app in production with real users on my own: checked releases, monitoring, database restored after an incident.",
    skillsTitle: "Skills",
    skills: [
      { label: "Used in production", text: "Linux (VPS, systemd, cron), Bash, Git, Cloudflare (Workers, Pages, Tunnel), Vercel (CLI, edge), PostgreSQL (Neon) with Prisma, Redis (Upstash), Node.js / TypeScript, Python" },
      { label: "Operations in production", text: "health route, scheduled alerts, deployments with automatic rollback, additive migrations, point-in-time restore (PITR)" },
      { label: "Agentic AI", text: "Claude Code (3 agents in parallel), Hermes Agent on a VPS; learning: LangGraph" },
      { label: "Learning", text: "Docker, Docker compose, Ansible, GitHub Actions, AWS (Cloud Practitioner in progress), HashiCorp Vault" },
      { label: "Systems security and low level", text: "C (CodinGame certification), C++, x86-64 assembly, ELF format, system calls" },
    ],
    projectsTitle: "Projects",
    projects: [
      {
        title: "GaijinToSensei, a Japanese learning app",
        where: "gajintosensei.com",
        points: [
          "In production with real users: Next.js, PostgreSQL (Neon) with Prisma, Redis (Upstash), Resend, Cloudflare Workers (moved from Vercel; TTFB 0.26-0.30 s -> 0.07-0.09 s).",
          "3 Claude Code agents in parallel, one per branch, authors of 479 of the 724 commits: code, Playwright QA, merge.",
          "Releases through a locked script: preview, HTTP checks, promotion, a second check, automatic rollback. A scheduled production guard every 10 minutes.",
          "Monitoring: health route (database, Redis, email, storage), server errors stored in the database.",
          "Incident on 29/10/2026: a migration started by an agent hit the production database and wiped it. Restored with point-in-time restore, blameless postmortem, agents no longer have any destructive rights on production.",
        ],
      },
      {
        title: "Personal infrastructure",
        points: [
          "Linux VPS: night agents as a systemd service under a dedicated non-root user, a closed-list root executor, 25 scheduled jobs (production guard, publishing, bot watchdog, alerts).",
          "Personal hub behind a Cloudflare tunnel with no open port and an edge authentication proxy (PBKDF2 password, HMAC cookie, brute-force delay, HSTS).",
          "5 static sites published automatically to Cloudflare Pages (Git integration or wrangler from the VPS).",
          "zapz.work: GitHub Actions CI (lint, build, tests, Lighthouse), Docker image published to GHCR, Cloudflare Workers (static assets, redirects and headers in the Worker), release script, uptime check.",
        ],
      },
      {
        title: "steam-roblox-agents, a multi-agent system (agentic AI)",
        points: [
          "LangGraph in Python: data collection, clone search, an LLM analyst (Pydantic) and a critic agent that sends the score back. Evaluation on 21 past cases, offline CI.",
        ],
      },
      {
        title: "42 projects (systems and infrastructure)",
        points: [
          "Cloud-1, in progress, in a pair: automated deployment of a website to the cloud with Ansible and Docker.",
          "ft_transcendence, team project: HashiCorp Vault in a container for secrets, Docker compose, nginx with TLS.",
          "ft_strace (system call tracing), woody_woodpacker (ELF64 binary encryption), libasm (x86-64 assembly), ft_ls.",
        ],
      },
    ],
    workTitle: "Experience",
    work: [
      {
        title: "Localization QA (LQA)",
        where: "Keywords Studios, Tokyo",
        when: "June 2026 to October 2026",
        points: [
          "Tested Konami games: checked the French language in game, reproduced technical bugs and reported them precisely to the developers.",
        ],
      },
      { title: "Crew member", where: "McDonald's", points: [] },
    ],
    eduTitle: "Education",
    edu: [
      { title: "42 Nice", when: "Since January 2025", points: ["Common core completed in 2025, Unix and low-level branch, towards 42's RNCP level 7 degree (master's level)."] },
      { title: "42 Tokyo (exchange)", when: "March 2026 to October 2026", points: [] },
      { title: "Vocational high school diploma in restaurant service (bac pro)", points: [] },
    ],
    certTitle: "Certifications",
    certs: [
      { text: "CodinGame: C (June 2025)", href: CODINGAME_URL },
      { text: "AWS Certified Cloud Practitioner: in progress" },
    ],
    langTitle: "Languages",
    langs: "French (native) | English (professional and conversational) | Japanese JLPT N5",
    download: "Download the PDF",
  },
};
