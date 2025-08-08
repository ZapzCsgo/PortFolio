import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-8">Blog de Writeups CTF</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map(post => (
          <div 
            key={post.id} 
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
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
            <Link
              to={`/ctf-blog/${post.slug}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Lire la suite →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTFBlog;