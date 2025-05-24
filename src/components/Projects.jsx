import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaFile, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS_DATA, FILE_PROJECT_MAPPING } from "../constants";

// Import des images
import philosophersImage from "../assets/philosophers42.webp";
import libftImage from "../assets/libft42.webp";
import soLongImage from "../assets/so_long.webp";
import cub3dImage from "../assets/cub3d.webp";
import minishellImage from "../assets/minishell.webp";

// Mapping des noms de fichiers aux images importées
const imageMapping = {
  "philosophers42.webp": philosophersImage,
  "libft42.webp": libftImage,
  "so_long.webp": soLongImage,
  "cub3d.webp": cub3dImage,
  "minishell.webp": minishellImage
};

const ProjectCard = ({ title, description, image, tags, githubLink, liveLink }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm transition-all hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="h-60 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
      </div>
      
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-medium text-white">{title}</h3>
        <p className="mb-4 text-sm text-gray-300">{description}</p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="rounded-md bg-gray-800 px-3 py-1 text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <span>Voir le projet</span>
            <FaExternalLinkAlt />
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-white hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({
    "42": true,
    "42/common_core": true,
    "side_projects": true,
  });

  // Mapper les données de projet avec les images importées
  const projectsData = PROJECTS_DATA.map(project => ({
    ...project,
    image: imageMapping[project.image]
  }));

  // Filtrer les projets en fonction du chemin sélectionné
  const displayedProjects = selectedPath 
    ? projectsData.filter(project => project.id === FILE_PROJECT_MAPPING[selectedPath])
    : projectsData;

  const handleReset = () => {
    setSelectedPath(null);
  };
  
  const toggleFolder = (folder) => {
    setExpandedFolders({
      ...expandedFolders,
      [folder]: !expandedFolders[folder]
    });
  };

  return (
    <div className="pb-24">
      <h2 className="my-10 text-center text-4xl text-white">Projets</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Panneau de navigation de fichiers à gauche */}
        <div className="md:w-1/4 bg-gray-900/60 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white">Projects</span>
            <button 
              onClick={handleReset}
              className="bg-gray-800 text-white px-3 py-1 rounded text-sm hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
          
          {/* Dossier 42 */}
          <div className="ml-2 mt-2">
            <div 
              className="flex items-center mb-2 cursor-pointer" 
              onClick={() => toggleFolder("42")}
            >
              {expandedFolders["42"] 
                ? <FaFolderOpen className="text-yellow-400 mr-2" /> 
                : <FaFolder className="text-yellow-400 mr-2" />
              }
              <span>42</span>
            </div>
            
            {expandedFolders["42"] && (
              <div className="ml-4">
                {/* Common Core */}
                <div 
                  className="flex items-center mb-2 cursor-pointer" 
                  onClick={() => toggleFolder("42/common_core")}
                >
                  {expandedFolders["42/common_core"] 
                    ? <FaFolderOpen className="text-yellow-400 mr-2" /> 
                    : <FaFolder className="text-yellow-400 mr-2" />
                  }
                  <span>common_core</span>
                </div>
                
                {expandedFolders["42/common_core"] && (
                  <div className="ml-4">
                    <div 
                      className={`flex items-center mb-2 cursor-pointer ${selectedPath === '42/common_core/philosophers.c' ? 'text-blue-400' : ''}`}
                      onClick={() => setSelectedPath('42/common_core/philosophers.c')}
                    >
                      <FaFile className="text-gray-400 mr-2" />
                      <span>philosophers.c</span>
                    </div>
                    
                    <div 
                      className={`flex items-center mb-2 cursor-pointer ${selectedPath === '42/common_core/libft.c' ? 'text-blue-400' : ''}`}
                      onClick={() => setSelectedPath('42/common_core/libft.c')}
                    >
                      <FaFile className="text-gray-400 mr-2" />
                      <span>libft.c</span>
                    </div>
                    
                    <div 
                      className={`flex items-center mb-2 cursor-pointer ${selectedPath === '42/common_core/cube3d.c' ? 'text-blue-400' : ''}`}
                      onClick={() => setSelectedPath('42/common_core/cube3d.c')}
                    >
                      <FaFile className="text-gray-400 mr-2" />
                      <span>cube3d.c</span>
                    </div>
                    
                    <div 
                      className={`flex items-center mb-2 cursor-pointer ${selectedPath === '42/common_core/minishell.c' ? 'text-blue-400' : ''}`}
                      onClick={() => setSelectedPath('42/common_core/minishell.c')}
                    >
                      <FaFile className="text-gray-400 mr-2" />
                      <span>minishell.c</span>
                    </div>
                    
                    <div 
                      className={`flex items-center mb-2 cursor-pointer ${selectedPath === '42/common_core/so_long.c' ? 'text-blue-400' : ''}`}
                      onClick={() => setSelectedPath('42/common_core/so_long.c')}
                    >
                      <FaFile className="text-gray-400 mr-2" />
                      <span>so_long.c</span>
                    </div>
                  </div>
                )}
                
                {/* Post-Common Core (vide) */}
                <div 
                  className="flex items-center mb-2 cursor-pointer" 
                  onClick={() => toggleFolder("42/post_common_core")}
                >
                  {expandedFolders["42/post_common_core"] 
                    ? <FaFolderOpen className="text-yellow-400 mr-2" /> 
                    : <FaFolder className="text-yellow-400 mr-2" />
                  }
                  <span>post_common_core</span>
                </div>
                
                {expandedFolders["42/post_common_core"] && (
                  <div className="ml-4">
                    {/* Dossier vide - aucun contenu */}
                    <span className="text-gray-500 text-sm italic">Dossier vide</span>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Dossier side_projects (vide) */}
          <div className="ml-2 mt-2">
            <div 
              className="flex items-center mb-2 cursor-pointer" 
              onClick={() => toggleFolder("side_projects")}
            >
              {expandedFolders["side_projects"] 
                ? <FaFolderOpen className="text-yellow-400 mr-2" /> 
                : <FaFolder className="text-yellow-400 mr-2" />
              }
              <span>side_projects</span>
            </div>
            
            {expandedFolders["side_projects"] && (
              <div className="ml-4">
                {/* Dossier vide - aucun contenu */}
                <span className="text-gray-500 text-sm italic">Dossier vide</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Projets à droite */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
            
            {displayedProjects.length === 0 && (
              <div className="col-span-2 text-center text-gray-400 py-20">
                <p>Aucun projet à afficher. Sélectionnez un fichier dans la structure à gauche.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;