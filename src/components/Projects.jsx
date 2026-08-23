const projectImages = {
  philosophers: philosophersImage,
  libft: libftImage,
  so_long: soLongImage,
  cube3d: cub3dImage,
  minishell: minishellImage,
  webserv: webservImage,
  antidebug: antidebugImage,
};
import philosophersImage from "../assets/philosophers42.webp";
import libftImage from "../assets/libft42.webp";
import soLongImage from "../assets/so_long.webp";
import cub3dImage from "../assets/cub3d.webp";
import minishellImage from "../assets/minishell.webp";
import webservImage from "../assets/webserv_42.webp";
import antidebugImage from "../assets/antidebug.webp";
import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaFile, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS_DATA, FILE_PROJECT_MAPPING } from "../constants";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";

const ProjectCard = ({ title, description, image, tags, liveLink }) => {
  const hasValidLiveLink = liveLink && !liveLink.includes("matteo-murru.com");
  return (
    <Card hoverable padding="none" className="overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="h-60 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-medium text-white">{title}</h3>
        <p className="mb-4 text-sm text-gray-300">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {tags && tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
        {hasValidLiveLink && (
          <div className="flex gap-4">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-accent hover:text-accent-light"
            >
              <span>Voir le projet</span>
              <FaExternalLinkAlt aria-hidden="true" className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </Card>
  );
};

const Projects = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  let displayedProjects = PROJECTS_DATA;
  if (selectedPath) {
    if (FILE_PROJECT_MAPPING[selectedPath]) {
      displayedProjects = PROJECTS_DATA.filter((project) => project.id === FILE_PROJECT_MAPPING[selectedPath]);
    } else if (selectedPath === "42/common_core") {
      displayedProjects = PROJECTS_DATA.filter((project) => project.type === "42");
    } else if (selectedPath === "42") {
      displayedProjects = PROJECTS_DATA.filter((project) => project.type === "42");
    } else if (selectedPath === "side_projects") {
      displayedProjects = PROJECTS_DATA.filter((project) => project.type === "side_projects");
    } else if (selectedPath === "side_projects/la_voie_de_la_pierre.jsx") {
      displayedProjects = PROJECTS_DATA.filter((project) => project.id === "la_voie_de_la_pierre");
    } else if (selectedPath === "contributions") {
      displayedProjects = PROJECTS_DATA.filter((project) => project.type === "contribution");
    }
  }

  const handleReset = () => setSelectedPath(null);
  const toggleFolder = (folder) => setSelectedPath(folder);

  const FolderRow = ({ path, children, indent = "ml-2" }) => (
    <button
      type="button"
      aria-pressed={selectedPath === path}
      onClick={() => toggleFolder(path)}
      className={`flex w-full items-center gap-2 rounded px-1 py-1 text-left mb-2 transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${indent} ${selectedPath === path ? "text-accent" : ""}`}
    >
      <FaFolderOpen className="text-yellow-400" aria-hidden="true" />
      <span>{children}</span>
    </button>
  );

  const FileRow = ({ path, children, indent = "ml-4" }) => (
    <button
      type="button"
      aria-pressed={selectedPath === path}
      onClick={() => setSelectedPath(path)}
      className={`flex w-full items-center gap-2 rounded px-1 py-1 text-left mb-2 transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${indent} ${selectedPath === path ? "text-accent" : ""}`}
    >
      <FaFile className="text-gray-400" aria-hidden="true" />
      <span>{children}</span>
    </button>
  );

  return (
    <div className="pb-24">
      <SectionHeading align="center">Projets</SectionHeading>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Panneau de navigation de fichiers à gauche */}
        <Card padding="md" surface="60" className="md:w-1/4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white">Projects</span>
            <Button variant="neutral" size="sm" onClick={handleReset}>
              Reset
            </Button>
          </div>
          {/* Dossier 42 */}
          <div className="mt-2">
            <FolderRow path="42">42</FolderRow>
            <div className="ml-4">
              {/* Common Core */}
              <FolderRow path="42/common_core">common_core</FolderRow>
              <div className="ml-4">
                {["webserv.cpp", "philosophers.c", "libft.c", "cube3d.c", "minishell.c", "so_long.c"].map((file) => (
                  <FileRow key={file} path={`42/common_core/${file}`} indent="">
                    {file}
                  </FileRow>
                ))}
              </div>
            </div>
          </div>
          {/* Dossier contributions */}
          <div className="mt-2">
            <FolderRow path="contributions">contributions</FolderRow>
            <div className="ml-4">
              <FileRow path="contributions/antidebug.cpp" indent="">
                antidebug.cpp
              </FileRow>
            </div>
          </div>
          {/* Dossier side_projects */}
          <div className="mt-2">
            <FolderRow path="side_projects">side_projects</FolderRow>
            <div className="ml-4">
              <FileRow path="side_projects/la_voie_de_la_pierre.jsx" indent="">
                la_voie_de_la_pierre.jsx
              </FileRow>
            </div>
          </div>
        </Card>
        {/* Projets à droite */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {displayedProjects.length > 0 ? (
              displayedProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  image={projectImages[project.id] || project.image}
                />
              ))
            ) : (
              <div className="col-span-2 text-center text-gray-400 py-20">
                <p>Aucun projet à afficher. Sélectionnez un fichier dans la structure à gauche.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
