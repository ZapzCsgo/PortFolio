// Texte du CV (page /cv et PDF). Faits vérifiés uniquement.
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
  print: string;
}

export const CV: Record<Lang, Cv> = {
  fr: {
    seoTitle: "CV de Matteo Murru, alternance DevOps / Cloud / SRE",
    description: "CV de Matteo Murru : étudiant à 42 Nice, alternance DevOps / Cloud / SRE à Nice, Sophia Antipolis ou Monaco.",
    heading: "Alternance DevOps / Cloud / SRE",
    location: "Nice",
    profileTitle: "Profil",
    profile:
      "Étudiant à 42 Nice (tronc commun validé, branche Unix et bas niveau). Je fais tourner une app en production avec des utilisateurs réels : déploiement contrôlé avec retour arrière, supervision, et un incident de base de données réparé par point-in-time restore.",
    skillsTitle: "Compétences",
    skills: [
      { label: "En prod", text: "Linux (VPS, systemd, cron), Bash, Git, Vercel, Cloudflare (Pages, Tunnel), PostgreSQL (Neon) et Prisma, Redis (Upstash), TypeScript / Node.js, Python" },
      { label: "En apprentissage", text: "Docker et Docker compose, Ansible, GitHub Actions, AWS (Cloud Practitioner en cours), HashiCorp Vault" },
      { label: "Bas niveau", text: "C (certification CodinGame), C++, assembleur x86-64 (NASM), appels système, ELF" },
    ],
    projectsTitle: "Projets",
    projects: [
      {
        title: "GaijinToSensei : app d'apprentissage du japonais en production",
        where: "gajintosensei.com",
        points: [
          "Next.js, PostgreSQL serverless (Neon) avec Prisma, Upstash Redis, Resend, hébergement Vercel. Utilisateurs réels.",
          "Chaîne d'agents Claude Code qui codent, testent (QA Playwright), fusionnent et déploient, avec verrous anti-conflits et déploiements groupés pour tenir le quota de la plateforme.",
          "Mise en prod par script verrouillé : préversion, contrôles HTTP, promotion, nouveau contrôle et retour arrière automatique. Garde de prod planifiée toutes les 10 minutes.",
          "Supervision : route de santé (base, Redis, e-mail, stockage), erreurs serveur enregistrées en base. Limitation de débit par fenêtres glissantes.",
          "Incident du 29/10/2026 (base de prod vidée par une migration) : restauration par point-in-time restore, postmortem sans reproche, migrations additives uniquement et commandes destructives interdites sur la prod.",
        ],
      },
      {
        title: "Infra perso",
        points: [
          "VPS Linux : agents de nuit en service systemd sous un utilisateur dédié sans root, exécuteur root à liste fermée, 25 tâches planifiées (garde de prod, publications, surveillance d'un bot, alertes).",
          "Hub perso exposé par un tunnel Cloudflare, sans port ouvert, derrière un proxy edge sur Vercel (PBKDF2, cookie HMAC, anti force brute, HSTS).",
          "5 sites statiques publiés automatiquement sur Cloudflare Pages (intégration Git ou wrangler depuis le VPS).",
        ],
      },
      {
        title: "Projets 42 système et infra",
        points: [
          "Cloud-1 (en cours, en binôme) : déploiement automatisé d'un site sur le cloud avec Ansible et Docker.",
          "ft_transcendence (équipe) : HashiCorp Vault en conteneur pour les secrets, Docker compose, nginx en TLS.",
          "ft_strace (traçage des appels système), woody_woodpacker (chiffrement de binaires ELF64), libasm (NASM x86-64), ft_ls, AntiDebug (anti-débogage Windows x86_64).",
          "Tronc commun : Minishell, Webserv (serveur HTTP en C++98), Philosophers, Libft.",
        ],
      },
      {
        title: "Apps Overwolf MetaAOE et MetaDBD",
        points: ["Livraison par une boucle d'agents sur le VPS et publication automatique des sites sur Cloudflare Pages."],
      },
    ],
    workTitle: "Expérience",
    work: [
      {
        title: "Testeur de localisation (LQA)",
        where: "Keywords Studios, Tokyo",
        when: "Juin à octobre 2026",
        points: [],
      },
      { title: "Équipier polyvalent", where: "McDonald's", points: [] },
    ],
    eduTitle: "Formation",
    edu: [
      { title: "42 Nice", when: "Depuis janvier 2025", points: ["Tronc commun validé en 2025. Branche Unix et bas niveau, vers le titre RNCP niveau 7 de 42."] },
      { title: "42 Tokyo (échange), puis PVT au Japon", when: "Mars à octobre 2026", points: [] },
      { title: "Bac pro Commercialisation et services en restauration", points: [] },
    ],
    certTitle: "Certifications",
    certs: [
      { text: "CodinGame : C (juin 2025)", href: CODINGAME_URL },
      { text: "AWS Certified Cloud Practitioner : en cours" },
    ],
    langTitle: "Langues",
    langs: "Français, anglais, japonais (pratiqué au quotidien au Japon en 2026)",
    download: "Télécharger le PDF",
    print: "Imprimer",
  },
  en: {
    seoTitle: "Resume of Matteo Murru, DevOps / Cloud / SRE work-study",
    description: "Resume of Matteo Murru: 42 Nice student, looking for a DevOps / Cloud / SRE work-study contract in Nice, Sophia Antipolis or Monaco.",
    heading: "DevOps / Cloud / SRE work-study",
    location: "Nice, France",
    profileTitle: "Profile",
    profile:
      "42 Nice student (common core completed, Unix and low-level branch). I run an app in production with real users: checked releases with rollback, monitoring, and a database incident fixed with point-in-time restore.",
    skillsTitle: "Skills",
    skills: [
      { label: "In production", text: "Linux (VPS, systemd, cron), Bash, Git, Vercel, Cloudflare (Pages, Tunnel), PostgreSQL (Neon) and Prisma, Redis (Upstash), TypeScript / Node.js, Python" },
      { label: "Learning", text: "Docker and Docker compose, Ansible, GitHub Actions, AWS (Cloud Practitioner in progress), HashiCorp Vault" },
      { label: "Low level", text: "C (CodinGame certification), C++, x86-64 assembly (NASM), system calls, ELF" },
    ],
    projectsTitle: "Projects",
    projects: [
      {
        title: "GaijinToSensei: a Japanese learning app in production",
        where: "gajintosensei.com",
        points: [
          "Next.js, serverless PostgreSQL (Neon) with Prisma, Upstash Redis, Resend, hosted on Vercel. Real users.",
          "A Claude Code agent pipeline that writes code, tests (Playwright QA), merges and deploys, with locks against conflicts and batched deployments to fit the platform quota.",
          "Releases through a locked script: preview, HTTP checks, promotion, a second check and automatic rollback. A scheduled production guard every 10 minutes.",
          "Monitoring: health route (database, Redis, email, storage), server errors stored in the database. Sliding-window rate limits.",
          "Incident on 29/10/2026 (production database wiped by a migration): point-in-time restore, blameless postmortem, additive-only migrations and destructive commands banned on production.",
        ],
      },
      {
        title: "Personal infrastructure",
        points: [
          "Linux VPS: night agents as a systemd service under a dedicated non-root user, a closed-list root executor, 25 scheduled jobs (production guard, publishing, bot watchdog, alerts).",
          "Personal hub exposed through a Cloudflare tunnel with no open port, behind an edge proxy on Vercel (PBKDF2, HMAC cookie, brute-force delay, HSTS).",
          "5 static sites published automatically to Cloudflare Pages (Git integration or wrangler from the VPS).",
        ],
      },
      {
        title: "42 systems and infrastructure projects",
        points: [
          "Cloud-1 (in progress, in a pair): automated deployment of a website to the cloud with Ansible and Docker.",
          "ft_transcendence (team): HashiCorp Vault in a container for secrets, Docker compose, nginx with TLS.",
          "ft_strace (system call tracing), woody_woodpacker (ELF64 binary encryption), libasm (NASM x86-64), ft_ls, AntiDebug (Windows x86_64 anti-debugging).",
          "Common core: Minishell, Webserv (HTTP server in C++98), Philosophers, Libft.",
        ],
      },
      {
        title: "Overwolf apps MetaAOE and MetaDBD",
        points: ["Shipped by an agent loop on the VPS, with sites published automatically to Cloudflare Pages."],
      },
    ],
    workTitle: "Experience",
    work: [
      {
        title: "Localization QA tester (LQA)",
        where: "Keywords Studios, Tokyo",
        when: "June to October 2026",
        points: [],
      },
      { title: "Crew member", where: "McDonald's", points: [] },
    ],
    eduTitle: "Education",
    edu: [
      { title: "42 Nice", when: "Since January 2025", points: ["Common core completed in 2025. Unix and low-level branch, towards 42's RNCP level 7 degree."] },
      { title: "42 Tokyo (exchange), then working holiday in Japan", when: "March to October 2026", points: [] },
      { title: "Vocational high school diploma in restaurant service (bac pro)", points: [] },
    ],
    certTitle: "Certifications",
    certs: [
      { text: "CodinGame: C (June 2025)", href: CODINGAME_URL },
      { text: "AWS Certified Cloud Practitioner: in progress" },
    ],
    langTitle: "Languages",
    langs: "French, English, Japanese (used every day in Japan in 2026)",
    download: "Download the PDF",
    print: "Print",
  },
};
