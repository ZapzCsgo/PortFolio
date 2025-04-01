import React, { useState, useEffect, useRef } from 'react';
import { FaExpand, FaTimes } from 'react-icons/fa';

// Import des images depuis votre dossier assets
import binaryNinjaLogo from '../assets/binary-ninja-logo.webp';
import cheatEngine from '../assets/cheat_engine.webp';
import comcyberMarine from '../assets/comcyber_marine.webp';
import cub3d from '../assets/cub3d.webp';
import libft42 from '../assets/libft42.webp';
import minishell from '../assets/minishell.webp';
import philosophers42 from '../assets/philosophers42.webp';
import soLong from '../assets/so_long.webp';
import x64dbgLogo from '../assets/x64dbg_logo.webp';
import zapzProfilePicture from '../assets/zapzProfilePicture.webp';

const MosaicGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoverStates, setHoverStates] = useState({});
  const galleryRef = useRef(null);
  
  // Configuration des images avec les imports
  const images = [
    {
      id: 1,
      src: zapzProfilePicture,
      alt: "Photo de profil Zapz",
      caption: "Développeur et passionné de reverse engineering"
    },
    {
      id: 2,
      src: cub3d,
      alt: "Projet Cube3D",
      caption: "Projet Cube3D - Moteur de rendu 3D minimaliste"
    },
    {
      id: 3,
      src: philosophers42,
      alt: "Projet Philosophers",
      caption: "Philosophers - Synchronisation des threads"
    },
    {
      id: 4,
      src: minishell,
      alt: "Projet Minishell",
      caption: "Minishell - Implémentation d'un shell minimaliste"
    },
    {
      id: 5,
      src: soLong,
      alt: "Projet So_long",
      caption: "So_long - Petit jeu 2D avec la MiniLibX"
    },
    {
      id: 6,
      src: libft42,
      alt: "Projet Libft",
      caption: "Libft - Bibliothèque de fonctions C personnalisée"
    },
    {
      id: 7,
      src: comcyberMarine,
      alt: "CTF COMCYBER X MARINE",
      caption: "Participation au CTF COMCYBER X MARINE"
    },
    {
      id: 8,
      src: cheatEngine,
      alt: "Cheat Engine",
      caption: "Analyse avec Cheat Engine"
    },
    {
      id: 9,
      src: binaryNinjaLogo,
      alt: "Binary Ninja",
      caption: "Reverse engineering avec Binary Ninja"
    },
    {
      id: 10,
      src: x64dbgLogo,
      alt: "x64dbg",
      caption: "Débogage avec x64dbg"
    }
  ];
  
  // Animation des tuiles au chargement
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Gestion de l'ouverture d'une image
  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  // Gestion de la fermeture d'une image
  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  // Mise à jour des états de survol
  const handleMouseEnter = (id) => {
    setHoverStates(prev => ({...prev, [id]: true}));
  };
  
  const handleMouseLeave = (id) => {
    setHoverStates(prev => ({...prev, [id]: false}));
  };
  
  // Empêcher la propagation des clics dans la modal
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="py-16 relative overflow-hidden" id="personal-mosaic">
      <div className="container mx-auto px-4">
        {/* Titre amélioré */}
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl font-bold text-white relative inline-block">
            À propos de moi
            <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-green-500"></div>
          </h2>
        </div>
        
        {/* Grille de mosaïque */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {images.map((image, index) => (
            <div 
              key={image.id}
              className={`overflow-hidden rounded-xl relative ${
                index === 0 || index === 6 ? 'col-span-2 row-span-2' : ''
              } ${
                isAnimating ? 'animate-fade-in' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: `scale(${isAnimating ? 0.8 : 1})`,
                opacity: isAnimating ? 0 : 1,
                transition: 'transform 0.5s ease, opacity 0.5s ease'
              }}
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={() => handleMouseLeave(image.id)}
              onClick={() => openImage(image)}
            >
              <div className="relative w-full h-0 pb-[100%] group">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 flex flex-col justify-end p-3 ${
                    hoverStates[image.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <span className="text-white font-medium text-sm">{image.caption}</span>
                  <div className="absolute top-3 right-3">
                    <FaExpand className="text-white text-lg opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Overlay d'image plein écran */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={handleModalContentClick}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-sm p-4 text-white">
              <p className="text-lg">{selectedImage.caption}</p>
            </div>
          </div>
          
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeImage}
          >
            <FaTimes size={24} />
          </button>
        </div>
      )}
      
      {/* CSS pour l'animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default MosaicGallery;