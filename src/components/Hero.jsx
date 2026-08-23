import React from "react";
import { Link } from "react-router-dom";
import profilePicture from "../assets/zapzProfilePicture.webp";
import { FaExternalLinkAlt, FaCircle } from "react-icons/fa";
import Button from "./ui/Button";

const Hero = () => {
    const HERO_CONTENT = "Software engineer en C et C++, orienté vers le reverse engineering. Je partage ici mes write-ups, mes projets et side projects. Très intéressé par le game hacking et les CTF, j'aimerais mettre mes compétences au service d'une cause utile ou d'un projet ambitieux qui me passionne.";

    return (
        <div className="animate-fade-in-up pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img
                            src={profilePicture}
                            alt="zapz pp"
                            className="rounded-3xl"
                            style={{
                                maskImage: "radial-gradient(ellipse 62% 65% at 50% 38%, black 35%, transparent 100%)",
                                WebkitMaskImage: "radial-gradient(ellipse 62% 65% at 50% 38%, black 35%, transparent 100%)",
                            }}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl text-white">Zapz</h2>
                        <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Student 42 & Reverse Engineer</span>
                        
                        <div className="flex items-center mt-2">
                            <FaCircle className="text-green-500 text-xs mr-2 animate-pulse" aria-hidden="true" />
                            <span className="text-green-400 text-sm">Actuellement à 42 Tokyo & LQA chez Keywords Studio</span>
                        </div>

                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-gray-300">
                            {HERO_CONTENT}
                        </p>
                        <Button as={Link} to="/ctf-blog" variant="outline" icon={FaExternalLinkAlt} className="mt-2 mb-8">
                            Voir mon blog de writeup CTF
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;