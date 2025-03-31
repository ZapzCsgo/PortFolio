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
  const [fontSize, setFontSize] = useState(16);
  const [isMobile, setIsMobile] = useState(false);

  // Détection des appareils mobiles
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérification initiale
    checkIfMobile();
    
    // Écouter les changements de taille d'écran
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 14));
  };

  if (loading) return <div className="text-white text-center py-20">Chargement de l'article...</div>;
  if (error) return <div className="text-white text-center py-20">Erreur: {error}</div>;
  if (!post) return <div className="text-white text-center py-20">Article non trouvé.</div>;

  // Styles personnalisés appliqués directement via une classe CSS
  const markdownClass = isMobile 
    ? "prose prose-sm prose-invert max-w-none mobile-markdown" 
    : "prose prose-invert max-w-none";
  
  return (
    <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
      <Link to="/ctf-blog" className="text-blue-400 hover:text-blue-300 mb-4 sm:mb-8 inline-block">
        ← Retour aux articles
      </Link>
      
      {isMobile && (
        <div className="mb-4 flex justify-between items-center bg-gray-800 p-3 rounded-lg">
          <h3 className="text-white text-sm">Contrôles de lecture</h3>
          <div className="flex space-x-3">
            <button 
              onClick={decreaseFontSize} 
              className="bg-gray-700 text-white px-3 py-1 rounded text-sm"
              aria-label="Diminuer la taille du texte"
            >
              A-
            </button>
            <button 
              onClick={increaseFontSize} 
              className="bg-gray-700 text-white px-3 py-1 rounded text-sm"
              aria-label="Augmenter la taille du texte"
            >
              A+
            </button>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .mobile-markdown {
          font-size: ${fontSize}px;
        }
        .mobile-markdown h1 {
          margin-top: 2rem;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: bold;
        }
        .mobile-markdown h2 {
          margin-top: 1.75rem;
          margin-bottom: 1.25rem;
          font-size: 1.3rem;
          font-weight: bold;
        }
        .mobile-markdown h3 {
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: bold;
        }
        .mobile-markdown p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        .mobile-markdown ul, .mobile-markdown ol {
          padding-left: 1.25rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .mobile-markdown li {
          margin-bottom: 0.5rem;
        }
        .mobile-markdown pre {
          padding: 1rem;
          overflow-x: auto;
          background-color: #1e293b;
          border-radius: 0.375rem;
        }
        .mobile-markdown code {
          background-color: #1e293b;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          color: #fbbf24;
        }
        .mobile-markdown blockquote {
          border-left: 4px solid #4b5563;
          padding-left: 1rem;
          font-style: italic;
          margin-left: 0;
          margin-right: 0;
        }
        .mobile-markdown img {
          max-width: 100%;
          height: auto;
          margin: 1rem auto;
          border-radius: 0.375rem;
        }
      `}</style>
      
      <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-8 rounded-lg">
        <div className={markdownClass}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default CTFBlogPost;