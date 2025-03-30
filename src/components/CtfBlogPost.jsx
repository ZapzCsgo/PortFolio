import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

// Importez directement le fichier MD pour Vite
import comcyberMarine from '../posts/comcyber_marine.md?raw';

const CTFBlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mapping des slugs aux contenus importés
    const postContents = {
      'comcyber_marine': comcyberMarine
    };
    
    // Récupérer le contenu correspondant au slug
    const content = postContents[slug];
    
    if (content) {
      setPost(content);
      setLoading(false);
    } else {
      setError(`Post '${slug}' non trouvé`);
      setLoading(false);
    }
  }, [slug]);

  if (loading) return <div className="text-white text-center py-20">Chargement de l'article...</div>;
  if (error) return <div className="text-white text-center py-20">Erreur: {error}</div>;
  if (!post) return <div className="text-white text-center py-20">Article non trouvé.</div>;

  return (
    <div className="container mx-auto px-8 py-16">
      <Link to="/ctf-blog" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
        ← Retour aux articles
      </Link>
      
      <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg prose prose-invert max-w-none">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeHighlight]}
        >
          {post}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default CTFBlogPost;