import React from "react";
import { FaGraduationCap, FaPlaneDeparture } from "react-icons/fa";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import SectionHeading from "./ui/SectionHeading";
import useInView from "../hooks/useInView";

const CERTIFICATIONS = [
  {
    icon: FaGraduationCap,
    title: "Common Core",
    issuer: "École 42 Nice",
    date: "2025",
    status: "Validé",
    description:
      "Cursus intensif de programmation par projets (peer-to-peer learning) en C et C++, couvrant systèmes, réseaux et sécurité bas-niveau. Projets clés : Minishell, Webserv, Woody_Woodpacker.",
  },
  {
    icon: FaPlaneDeparture,
    title: "Échange international",
    issuer: "42 Tokyo",
    date: "Depuis mars 2026",
    status: "En cours",
    description:
      "Une année d'échange académique au sein du réseau international de 42, en poursuite de la spécialisation en systèmes et sécurité.",
  },
];

const Certifications = () => {
  const [ref, isInView] = useInView();

  return (
    <div className="pb-24 pt-8">
      <SectionHeading as="h1" align="left">Certifications</SectionHeading>

      <div ref={ref} className="grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert, index) => (
          <Card
            key={cert.title}
            hoverable
            className={isInView ? "animate-fade-in-up" : "opacity-0"}
            style={{ animationDelay: isInView ? `${index * 90}ms` : undefined }}
          >
            <div className="flex items-start justify-between gap-3">
              <cert.icon className="text-3xl text-accent" aria-hidden="true" />
              <Badge>{cert.status}</Badge>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{cert.title}</h2>
            <p className="text-sm text-gray-400">{cert.issuer} — {cert.date}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">{cert.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
