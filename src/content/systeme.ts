// Page « Système » : projets 42 et apps Overwolf. Lien GitHub seulement si le dépôt est public et contient le code.
import type { Lang } from "./site";

export interface Item {
  name: string;
  text: string;
  status?: string;
  href?: string;
  hrefLabel?: string;
}

export interface SystemPage {
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  groups: { title: string; intro?: string; items: Item[] }[];
}

export const SYSTEME: Record<Lang, SystemPage> = {
  fr: {
    title: "Système, conteneurs et projets 42",
    seoTitle: "Projets 42 : système, conteneurs et bas niveau",
    description:
      "Mes projets 42 côté Unix et bas niveau : Cloud-1 (Ansible, Docker), ft_strace, woody_woodpacker, libasm, ft_ls, ft_transcendence (Docker compose, Vault, nginx/TLS), et deux apps Overwolf.",
    lead: "À 42 Nice, j'ai fini le tronc commun et je suis la branche Unix et bas niveau. Ces projets m'apprennent ce qui se passe sous les outils que j'utilise en prod.",
    groups: [
      {
        title: "Déploiement et conteneurs",
        items: [
          {
            name: "Cloud-1",
            status: "En cours, en binôme",
            text: "Déployer automatiquement un site sur une instance cloud avec Ansible et Docker.",
          },
          {
            name: "ft_transcendence",
            status: "Projet d'équipe",
            text: "J'ai ajouté HashiCorp Vault en conteneur pour gérer les secrets, avec Docker compose, nginx en TLS et un Makefile qui démarre Vault avant les services.",
          },
        ],
      },
      {
        title: "Unix et bas niveau",
        items: [
          { name: "ft_strace", text: "Tracer les appels système d'un programme, comme strace." },
          { name: "woody_woodpacker", text: "Un packer qui chiffre des binaires ELF64." },
          {
            name: "libasm",
            text: "Des fonctions de la libc réécrites en assembleur x86-64 (NASM) : strlen, strcmp, strcpy, strdup, read, write.",
            href: "https://github.com/ZapzCsgo/Libasm",
            hrefLabel: "Code sur GitHub",
          },
          { name: "ft_ls", text: "Réécrire la commande ls en C." },
        ],
      },
      {
        title: "Tronc commun",
        items: [
          {
            name: "Projets validés",
            text: "Minishell (un shell Unix), Webserv (un serveur HTTP en C++98), Philosophers (threads et mutex), Libft (une partie de la libc en C).",
          },
        ],
      },
      {
        title: "Apps Overwolf : MetaAOE et MetaDBD",
        intro: "Deux apps pour Age of Empires (IV et II) et Dead by Daylight, codées la nuit par des agents.",
        items: [
          {
            name: "MetaAOE",
            status: "En cours de QA chez Overwolf",
            text: "Stats, build orders et overlay en jeu, et un site avec comptes utilisateurs (OIDC) pour partager ses builds. Une boucle d'agents sur le VPS avance la nuit sur une branche dédiée, la branche principale n'avance qu'en avance rapide, et le site est publié sur Cloudflare Pages à chaque push. Partenariat prévu avec le Discord Age of Empires France une fois l'app validée.",
            href: "https://metaaoe.app",
            hrefLabel: "metaaoe.app",
          },
          {
            name: "MetaDBD",
            text: "Le site est publié depuis le VPS sur Cloudflare Pages par une tâche planifiée toutes les 15 minutes.",
            href: "https://metadbd.pages.dev",
            hrefLabel: "metadbd.pages.dev",
          },
        ],
      },
    ],
  },
  en: {
    title: "Systems, containers and 42 projects",
    seoTitle: "42 projects: systems, containers and low level",
    description:
      "My 42 projects on the Unix and low-level side: Cloud-1 (Ansible, Docker), ft_strace, woody_woodpacker, libasm, ft_ls, ft_transcendence (Docker compose, Vault, nginx/TLS), and two Overwolf apps.",
    lead: "At 42 Nice, I finished the common core and I follow the Unix and low-level branch. These projects teach me what happens under the tools I use in production.",
    groups: [
      {
        title: "Deployment and containers",
        items: [
          {
            name: "Cloud-1",
            status: "In progress, in a pair",
            text: "Deploy a website to a cloud instance automatically with Ansible and Docker.",
          },
          {
            name: "ft_transcendence",
            status: "Team project",
            text: "I added HashiCorp Vault in a container to manage secrets, with Docker compose, nginx with TLS and a Makefile that starts Vault before the services.",
          },
        ],
      },
      {
        title: "Unix and low level",
        items: [
          { name: "ft_strace", text: "Trace the system calls of a program, like strace." },
          { name: "woody_woodpacker", text: "A packer that encrypts ELF64 binaries." },
          {
            name: "libasm",
            text: "libc functions rewritten in x86-64 assembly (NASM): strlen, strcmp, strcpy, strdup, read, write.",
            href: "https://github.com/ZapzCsgo/Libasm",
            hrefLabel: "Code on GitHub",
          },
          { name: "ft_ls", text: "Rewrite the ls command in C." },
        ],
      },
      {
        title: "Common core",
        items: [
          {
            name: "Validated projects",
            text: "Minishell (a Unix shell), Webserv (an HTTP server in C++98), Philosophers (threads and mutexes), Libft (part of the libc in C).",
          },
        ],
      },
      {
        title: "Overwolf apps: MetaAOE and MetaDBD",
        intro: "Two apps for Age of Empires (IV and II) and Dead by Daylight, built at night by agents.",
        items: [
          {
            name: "MetaAOE",
            status: "Going through Overwolf QA",
            text: "Stats, build orders and an in-game overlay, and a site with user accounts (OIDC) to share builds. An agent loop on the VPS moves forward at night on a dedicated branch, the main branch only moves by fast-forward, and the site is published to Cloudflare Pages on every push. A partnership with the Age of Empires France Discord is planned once the app is approved.",
            href: "https://metaaoe.app",
            hrefLabel: "metaaoe.app",
          },
          {
            name: "MetaDBD",
            text: "The site is published from the VPS to Cloudflare Pages by a scheduled job every 15 minutes.",
            href: "https://metadbd.pages.dev",
            hrefLabel: "metadbd.pages.dev",
          },
        ],
      },
    ],
  },
};
