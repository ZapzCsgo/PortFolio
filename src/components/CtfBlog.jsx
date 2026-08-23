import React from 'react';
import { Link } from 'react-router-dom';
import Card from './ui/Card';
import Button from './ui/Button';
import SectionHeading from './ui/SectionHeading';
import useInView from '../hooks/useInView';

const blogPosts = [
  {
    id: "CS2_ENTITY_LIST",
    title: "🎯 Counter-Strike 2 - Reverse Entity List",
    date: "19 juillet 2025",
    excerpt: "Analyse dynamique pour la récupération de l'entity_list sur Counter-Strike 2 via Cheat Engine",
    slug: "cs2_entity_list",
    image: "/Counter-Strike-2.jpg",
    altText: "Counter-Strike 2"
  },
  {
    id: "COMCYBER_X_MARINE",
    title: "⚓️ COMCYBER X MARINE ROOT ME",
    date: "1 mars 2025",
    excerpt: "Dans ce writeup, j'analyse étape par étape comment j'ai résolu les challenges du CTF COMCYBER X MARINE",
    slug: "comcyber_marine",
    image: "/comcyber_marine.webp",
    altText: "Logo du CTF COMCYBER X MARINE"
  }
];

const CTFBlog = () => {
  const [ref, isInView] = useInView();

  return (
    <div className="container mx-auto px-8 py-16">
      <SectionHeading as="h1" align="left">Blog de Writeups CTF</SectionHeading>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <Card
            key={post.id}
            hoverable
            className={isInView ? "animate-fade-in-up" : "opacity-0"}
            style={{ animationDelay: isInView ? `${index * 80}ms` : undefined }}
          >
            <div className="mb-6 overflow-hidden rounded-xl h-64 flex items-center justify-center">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.altText || post.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-500">Image non disponible</span>
                </div>
              )}
            </div>
            <h2 className="text-2xl text-white mb-2 font-bold">{post.title}</h2>
            <p className="text-gray-300 mb-4 text-sm">{post.date}</p>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            <Button as={Link} to={`/ctf-blog/${post.slug}`} variant="solid" size="sm">
              Lire la suite →
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CTFBlog;