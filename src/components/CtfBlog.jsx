import React from 'react';
import { Link } from 'react-router-dom';

// Données des articles avec images ajoutées
const blogPosts = [
  {
    id: "COMCYBER_X_MARINE",
    title: "⚓️ COMCYBER X MARINE",
    date: "15 mars 2023",
    excerpt: "Dans ce writeup, j'analyse étape par étape comment j'ai résolu les challenges du CTF COMCYBER X MARINE",
    slug: "comcyber_marine",
    image: "/src/assets/comcyber_marine.webp", // Vous devrez créer/ajouter cette image
    altText: "Logo du CTF COMCYBER X MARINE"
  }
  // Vous pourrez ajouter d'autres articles ici dans le futur
];

const CTFBlog = () => {
  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-8">Blog de Writeups CTF</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div className="mb-4 overflow-hidden rounded-lg">
              {post.image ? (
                <img 
                  src={post.image} 
                  alt={post.altText || post.title} 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
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