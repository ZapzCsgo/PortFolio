import React from "react";
import Card from "./ui/Card";
import SectionHeading from "./ui/SectionHeading";
import useInView from "../hooks/useInView";

const TIMELINE = [
  {
    date: "Nov. 2022",
    title: "Bac pro Commercialisation et Services en Restauration",
    description: "Début en parallèle du poste d'équipier polyvalent chez McDonald's.",
  },
  {
    date: "Jan. 2025",
    title: "Intégration du Common Core à l'École 42 Nice",
    description: "Cursus intensif de programmation par projets, en C puis C++.",
  },
  {
    date: "2025",
    title: "Common Core validé",
    description: "Projets clés : Minishell (interpréteur de commandes), Webserv (serveur HTTP en C++), Woody_Woodpacker (packer ELF 64 bits).",
  },
  {
    date: "Mars 2026",
    title: "Départ pour 42 Tokyo",
    description: "Un an d'échange académique au sein du réseau international de 42.",
  },
  {
    date: "Août 2026",
    title: "LQA chez Keywords Studio Tokyo",
    description: "Poste de Localization QA en parallèle des études, à Tokyo.",
  },
];

const Timeline = () => {
  const [ref, isInView] = useInView();

  return (
    <ol ref={ref} className="relative ml-3 border-l-2 border-accent/30">
      {TIMELINE.map((item, index) => (
        <li
          key={item.title}
          className={`relative pb-10 pl-8 last:pb-0 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: isInView ? `${index * 90}ms` : undefined }}
        >
          <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-black" aria-hidden="true" />
          <span className="text-sm font-medium text-accent">{item.date}</span>
          <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-base text-gray-400">{item.description}</p>
        </li>
      ))}
    </ol>
  );
};

const About = () => {
  return (
    <div className="pb-24 pt-8">
      <SectionHeading as="h1" align="left">À propos</SectionHeading>

      <Card padding="lg" hoverable={false} className="max-w-3xl">
        <div className="space-y-6 text-xl leading-relaxed tracking-tight text-gray-300">
          <p>
            Ingénieur en formation, j'ai validé le tronc commun de l'École 42 Nice en 2025 avant
            de partir poursuivre mon cursus à 42 Tokyo pour une année d'échange depuis mars 2026.
            En parallèle, je travaille chez Keywords Studio Tokyo en tant que LQA (Localization
            QA), où rigueur et sens du détail sont essentiels au quotidien.
          </p>
          <p>
            Curieux et rigoureux, je suis passionné par la compréhension profonde des systèmes :
            reverse engineering, game hacking, anti-debug, et plus largement tout ce qui touche au
            fonctionnement interne des logiciels. Je code principalement en C et C++, avec une
            préférence pour les problèmes qui demandent de la précision et de la persévérance.
          </p>
          <p>
            En dehors de l'écran, je m'intéresse à l'histoire et à la philosophie — comprendre le
            « pourquoi » des choses, qu'il s'agisse d'un système ou d'une idée, est ce qui me
            motive le plus. J'aime aussi voyager : l'Italie, l'Espagne et la République Tchèque
            font partie des pays que j'ai eu la chance de découvrir.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="mb-10 text-2xl font-semibold text-white">Parcours</h2>
          <Timeline />
        </div>
      </Card>
    </div>
  );
};

export default About;
