import React from 'react';
import { Link } from 'react-router-dom';

// Données des articles
const blogPosts = [
  {
    id: "COMCYBER_X_MARINE",
    title: "⚓️COMCYBER X MARINE",
    date: "15 mars 2023",
    excerpt: "Dans ce writeup, j'analyse étape par étape comment j'ai résolu les challenges du CTF COMCYBER X MARINE",
    slug: "comcyber_marine",
  }
];

const CTFBlog = () => {
  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-8">Blog de Writeups CTF</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-2xl text-white mb-2">{post.title}</h2>
            <p className="text-gray-300 mb-4">Publié le {post.date}</p>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            <Link to={`/ctf-blog/${post.slug}`} className="text-blue-400 hover:text-blue-300">
              Lire la suite →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTFBlog;