// Mentions légales et confidentialité. Un champ à null n'est jamais affiché (pas de « à compléter » en ligne).
// À renseigner par Matteo s'il le souhaite : adresse postale de l'éditeur (POSTAL_ADDRESS), téléphone (PHONE).
import { EMAIL, NAME, type Lang } from "./site";

export const POSTAL_ADDRESS: string | null = null;
export const PHONE: string | null = null;

const HOST = {
  name: "Vercel Inc.",
  address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
  url: "https://vercel.com",
  privacy: "https://vercel.com/legal/privacy-notice",
};

export type Block = { title: string; lines: (string | null)[]; link?: { href: string; label: string } };
export type LegalPage = { seoTitle: string; description: string; title: string; updated: string; blocks: Block[] };

const opt = (label: string, value: string | null) => (value ? `${label} : ${value}` : null);
const optEn = (label: string, value: string | null) => (value ? `${label}: ${value}` : null);

export const LEGAL: Record<Lang, LegalPage> = {
  fr: {
    seoTitle: "Mentions légales",
    description: "Éditeur, hébergeur et contact du site zapz.work.",
    title: "Mentions légales",
    updated: "Mise à jour le 5 novembre 2026",
    blocks: [
      {
        title: "Éditeur",
        lines: [
          `${NAME}, particulier. Site personnel, sans activité commerciale.`,
          opt("Adresse", POSTAL_ADDRESS),
          opt("Téléphone", PHONE),
          `E-mail : ${EMAIL}`,
          `Directeur de la publication : ${NAME}`,
        ],
      },
      {
        title: "Hébergeur",
        lines: [HOST.name, HOST.address],
        link: { href: HOST.url, label: "vercel.com" },
      },
      {
        title: "Contenus",
        lines: [`Les textes, captures et schémas du site sont de ${NAME}, sauf mention contraire. Pour les réutiliser, écrivez-moi.`],
      },
    ],
  },
  en: {
    seoTitle: "Legal notice",
    description: "Publisher, host and contact of zapz.work.",
    title: "Legal notice",
    updated: "Updated on 5 November 2026",
    blocks: [
      {
        title: "Publisher",
        lines: [
          `${NAME}, private individual. Personal website, no commercial activity.`,
          optEn("Address", POSTAL_ADDRESS),
          optEn("Phone", PHONE),
          `Email: ${EMAIL}`,
          `Publication director: ${NAME}`,
        ],
      },
      {
        title: "Host",
        lines: [HOST.name, HOST.address],
        link: { href: HOST.url, label: "vercel.com" },
      },
      {
        title: "Content",
        lines: [`Texts, screenshots and diagrams on this site are by ${NAME} unless stated otherwise. To reuse them, email me.`],
      },
    ],
  },
};

export const PRIVACY: Record<Lang, LegalPage> = {
  fr: {
    seoTitle: "Confidentialité",
    description: "Quelles données le site zapz.work traite : aucun cookie, aucune mesure d'audience.",
    title: "Confidentialité",
    updated: "Mise à jour le 5 novembre 2026",
    blocks: [
      {
        title: "En bref",
        lines: ["Ce site ne pose aucun cookie, n'a aucun formulaire et ne mesure pas l'audience. Les polices sont servies par le site lui-même."],
      },
      {
        title: "Responsable",
        lines: [`${NAME}, ${EMAIL}`],
      },
      {
        title: "Journaux de l'hébergeur",
        lines: [
          "Pour afficher les pages et protéger le site, l'hébergeur Vercel reçoit à chaque visite les données techniques de la requête (adresse IP, navigateur, page demandée). Il les traite selon sa propre politique.",
        ],
        link: { href: HOST.privacy, label: "Politique de confidentialité de Vercel" },
      },
      {
        title: "E-mails",
        lines: [
          `Si vous écrivez à ${EMAIL}, votre message passe par le service de transfert ImprovMX puis arrive dans ma boîte. Il sert seulement à vous répondre.`,
        ],
      },
      {
        title: "Liens externes",
        lines: ["Les liens vers GitHub, LinkedIn ou mes autres sites mènent à des services qui ont leurs propres règles."],
      },
      {
        title: "Vos droits",
        lines: [
          `Vous pouvez demander l'accès, la correction ou l'effacement de vos données en écrivant à ${EMAIL}. Vous pouvez aussi saisir la CNIL.`,
        ],
        link: { href: "https://www.cnil.fr/fr/plaintes", label: "cnil.fr" },
      },
    ],
  },
  en: {
    seoTitle: "Privacy",
    description: "What data zapz.work handles: no cookies, no analytics.",
    title: "Privacy",
    updated: "Updated on 5 November 2026",
    blocks: [
      {
        title: "In short",
        lines: ["This site sets no cookies, has no forms and does not track visits. Fonts are served by the site itself."],
      },
      {
        title: "Controller",
        lines: [`${NAME}, ${EMAIL}`],
      },
      {
        title: "Host logs",
        lines: [
          "To serve pages and protect the site, the host Vercel receives the technical data of each request (IP address, browser, requested page). It handles them under its own policy.",
        ],
        link: { href: HOST.privacy, label: "Vercel privacy notice" },
      },
      {
        title: "Emails",
        lines: [`If you write to ${EMAIL}, your message goes through the ImprovMX forwarding service and then reaches my inbox. It is only used to reply to you.`],
      },
      {
        title: "External links",
        lines: ["Links to GitHub, LinkedIn or my other sites lead to services with their own rules."],
      },
      {
        title: "Your rights",
        lines: [`You can ask to access, correct or delete your data by writing to ${EMAIL}. You can also contact the CNIL, the French data protection authority.`],
        link: { href: "https://www.cnil.fr/en/", label: "cnil.fr" },
      },
    ],
  },
};
