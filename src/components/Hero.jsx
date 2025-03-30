import React from "react";
import { Link } from "react-router-dom";
import profilePicture from "../assets/zapzProfilePicture.webp";
import { FaExternalLinkAlt, FaCircle } from "react-icons/fa";

const Hero = () => {
    const HERO_CONTENT = "Software engineer en C et C++, enthusiast à l'idée de devenir reverse engineer. Je partage ici mes write-ups, mes projets et side projects. Très intéressé par le game hacking et les CTF, j'aimerais un jour mettre mes compétences au service d'une cause utile";
    
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img src={profilePicture} alt="zapz pp" className="border border-stone-900 rounded-3xl"/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl text-white">Zapz</h2>
                        <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Student 42 & Reverse Engineer</span>
                        
                        <div className="flex items-center mt-2">
                            <FaCircle className="text-green-500 text-xs mr-2 animate-pulse" />
                            <span className="text-green-400 text-sm">Actuellement dans le common core de 42</span>
                        </div>
                        
                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-gray-300">
                            {HERO_CONTENT}
                        </p>
                        <Link 
                            to="/ctf-blog" 
                            className="mt-2 mb-8 group flex items-center gap-2 border-2 border-orange-500 bg-transparent px-6 py-3 font-medium text-orange-500 transition-colors duration-300 hover:bg-orange-500/10"
                        >
                            Voir mon blog de writeup CTF
                            <FaExternalLinkAlt className="transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;