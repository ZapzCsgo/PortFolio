// Postmortem de l'incident base de données du 29/10/2026 (GaijinToSensei).
// Faits vérifiés : journal du 29/10, historique git (migration créée à 03:54:10 UTC, commit mis de côté,
// correctif des pages /app à 05:13 UTC, réintégration à 11:10 UTC). Durée et données perdues non chiffrées.
import type { Lang } from "./site";

export interface Postmortem {
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  facts: { label: string; value: string }[];
  summaryTitle: string;
  summary: string[];
  timelineTitle: string;
  timelineNote: string;
  timeline: { time: string; text: string }[];
  causeTitle: string;
  cause: string[];
  impactTitle: string;
  impact: string[];
  helpedTitle: string;
  helped: string[];
  fixTitle: string;
  fix: string[];
  learnedTitle: string;
  learned: string[];
}

export const INCIDENT: Record<Lang, Postmortem> = {
  fr: {
    title: "Postmortem : la base de prod vidée par une migration",
    seoTitle: "Postmortem : base de données de prod vidée puis restaurée",
    description:
      "Postmortem sans reproche de l'incident du 29 octobre 2026 sur GaijinToSensei : une commande de migration a vidé la base PostgreSQL de prod, restaurée par point-in-time restore.",
    lead: "Le 29 octobre 2026, une commande de migration mal ciblée a vidé la base de production de GaijinToSensei. Voici ce qui s'est passé et ce qui a changé depuis. Ce postmortem est sans reproche : on cherche ce qui a permis l'erreur, pas un coupable.",
    facts: [
      { label: "Date", value: "29 octobre 2026, 03:54 UTC" },
      { label: "Service", value: "GaijinToSensei, base PostgreSQL de production (Neon)" },
      { label: "Cause", value: "`prisma migrate dev` avec une base shadow qui pointait sur la prod" },
      { label: "Réparation", value: "Point-in-time restore (PITR) de Neon" },
    ],
    summaryTitle: "Résumé",
    summary: [
      "Un agent préparait une nouvelle fonctionnalité qui ajoutait deux tables. Pour créer la migration, il a lancé `prisma migrate dev`. La base « shadow » de Prisma était réglée sur la base de production. La commande l'a réinitialisée : les tables de prod ont été vidées.",
      "La base a été restaurée avec le point-in-time restore de Neon, à un instant antérieur à la commande.",
    ],
    timelineTitle: "Chronologie",
    timelineNote: "Heures en UTC, tirées de l'historique git et du journal du jour.",
    timeline: [
      { time: "03:54", text: "L'agent lance `prisma migrate dev` pour créer la migration des révisions espacées. La base shadow pointe sur la prod : elle est réinitialisée." },
      { time: "03:55", text: "L'agent met son travail de côté sans l'intégrer et le signale. La chaîne d'agents est mise en pause." },
      { time: "Ensuite", text: "Restauration de la base par point-in-time restore de Neon, à un instant antérieur à 03:54." },
      { time: "05:13", text: "Correctif des pages de l'app qui plantaient quand un cookie de session pointait vers un compte absent de la base." },
      { time: "11:10", text: "La fonctionnalité est réintégrée avec une nouvelle migration, créée sans toucher à la prod, et mise en ligne." },
    ],
    causeTitle: "Cause",
    cause: [
      "`prisma migrate dev` est une commande de développement. Elle utilise une base « shadow » jetable qu'elle peut effacer. Ici, la base shadow désignait la base de production.",
      "Rien n'empêchait un agent de lancer une commande destructive avec les accès de la prod. C'est ce manque de garde-fou qui a permis l'incident.",
    ],
    impactTitle: "Impact",
    impact: [
      "La base de production était vide entre 03:54 et la fin de la restauration. Pendant ce temps, l'app ne pouvait pas servir les comptes des utilisateurs.",
      "Après la restauration, des sessions pointaient vers des comptes absents et faisaient planter des pages de l'app, jusqu'au correctif de 05:13.",
    ],
    helpedTitle: "Ce qui a aidé",
    helped: [
      "Neon garde un historique qui permet de revenir à un instant précis. La restauration n'a demandé aucune sauvegarde manuelle.",
      "L'agent s'est arrêté au lieu de continuer, et la chaîne a été mise en pause tout de suite.",
    ],
    fixTitle: "Correctifs et règles ajoutées",
    fix: [
      "Toute commande destructive est interdite sur la base de prod : pas de `migrate dev`, pas de reset, pas de suppression.",
      "Migrations additives uniquement. Le script de mise en prod refuse une migration qui contient DROP, RENAME, TRUNCATE, DELETE, UPDATE ou ALTER COLUMN, et n'applique jamais de migration lui-même.",
      "La mise en prod passe par un script verrouillé : préversion, contrôles, promotion, nouveau contrôle et retour arrière automatique en cas d'échec.",
      "Les pages de l'app vérifient que le compte existe encore et renvoient sinon vers la connexion.",
    ],
    learnedTitle: "Ce que j'ai appris",
    learned: [
      "Une commande de développement avec un accès de prod, c'est une commande de prod. Les accès doivent être séparés.",
      "Une sauvegarde qu'on sait restaurer vite vaut plus que n'importe quelle procédure écrite.",
      "Quand un agent fait une erreur, la question utile est : quel garde-fou manquait ? Puis on l'ajoute dans le code, pas dans une consigne.",
    ],
  },
  en: {
    title: "Postmortem: the production database wiped by a migration",
    seoTitle: "Postmortem: production database wiped, then restored",
    description:
      "Blameless postmortem of the 29 October 2026 incident on GaijinToSensei: a migration command wiped the production PostgreSQL database, restored with point-in-time restore.",
    lead: "On 29 October 2026, a mis-targeted migration command wiped the GaijinToSensei production database. Here is what happened and what changed since. This postmortem is blameless: we look for what allowed the mistake, not for someone to blame.",
    facts: [
      { label: "Date", value: "29 October 2026, 03:54 UTC" },
      { label: "Service", value: "GaijinToSensei, production PostgreSQL database (Neon)" },
      { label: "Cause", value: "`prisma migrate dev` with a shadow database pointing at production" },
      { label: "Fix", value: "Neon point-in-time restore (PITR)" },
    ],
    summaryTitle: "Summary",
    summary: [
      "An agent was building a new feature that added two tables. To create the migration, it ran `prisma migrate dev`. The Prisma shadow database was set to the production database. The command reset it: the production tables were wiped.",
      "The database was restored with Neon point-in-time restore, to a moment before the command.",
    ],
    timelineTitle: "Timeline",
    timelineNote: "Times in UTC, taken from the git history and that day's log.",
    timeline: [
      { time: "03:54", text: "The agent runs `prisma migrate dev` to create the spaced repetition migration. The shadow database points at production: it gets reset." },
      { time: "03:55", text: "The agent sets its work aside without merging it and reports it. The agent pipeline is paused." },
      { time: "Then", text: "The database is restored with Neon point-in-time restore, to a moment before 03:54." },
      { time: "05:13", text: "Fix for app pages that crashed when a session cookie pointed to an account missing from the database." },
      { time: "11:10", text: "The feature is merged again with a new migration, created without touching production, and released." },
    ],
    causeTitle: "Cause",
    cause: [
      "`prisma migrate dev` is a development command. It uses a throwaway shadow database that it may erase. Here, the shadow database was the production database.",
      "Nothing stopped an agent from running a destructive command with production access. That missing guardrail is what allowed the incident.",
    ],
    impactTitle: "Impact",
    impact: [
      "The production database was empty from 03:54 until the restore finished. During that time, the app could not serve user accounts.",
      "After the restore, some sessions pointed to missing accounts and crashed app pages, until the 05:13 fix.",
    ],
    helpedTitle: "What helped",
    helped: [
      "Neon keeps a history that lets you go back to an exact moment. The restore needed no manual backup.",
      "The agent stopped instead of carrying on, and the pipeline was paused right away.",
    ],
    fixTitle: "Fixes and new rules",
    fix: [
      "Any destructive command is forbidden on the production database: no `migrate dev`, no reset, no deletion.",
      "Additive migrations only. The release script rejects a migration that contains DROP, RENAME, TRUNCATE, DELETE, UPDATE or ALTER COLUMN, and never applies a migration itself.",
      "Releases go through a locked script: preview, checks, promotion, a second check and automatic rollback on failure.",
      "App pages check that the account still exists and otherwise send the user back to login.",
    ],
    learnedTitle: "What I learned",
    learned: [
      "A development command with production access is a production command. Access has to be separated.",
      "A backup you know how to restore quickly is worth more than any written procedure.",
      "When an agent makes a mistake, the useful question is: which guardrail was missing? Then add it in code, not in an instruction.",
    ],
  },
};
