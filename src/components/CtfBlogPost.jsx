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
      
      <style>{`
        /* Styles communs */
        .markdown-content {
          color: #f8f9fa;
          max-width: none;
          overflow-wrap: break-word;
        }
        
        /* Titres */
        .markdown-content h1 {
          font-size: ${isMobile ? '1.75rem' : '2.5rem'};
          font-weight: 700;
          margin-top: ${isMobile ? '1.5rem' : '2.5rem'};
          margin-bottom: ${isMobile ? '1rem' : '1.5rem'};
          color: #ffffff;
          border-bottom: 2px solid #4299e1;
          padding-bottom: 0.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .markdown-content h2 {
          font-size: ${isMobile ? '1.5rem' : '2rem'};
          font-weight: 700;
          margin-top: ${isMobile ? '1.5rem' : '2rem'};
          margin-bottom: ${isMobile ? '1rem' : '1.25rem'};
          color: #f0f0f0;
          border-left: 4px solid #3182ce;
          padding-left: 0.75rem;
        }
        
        .markdown-content h3 {
          font-size: ${isMobile ? '1.25rem' : '1.5rem'};
          font-weight: 600;
          margin-top: ${isMobile ? '1.25rem' : '1.75rem'};
          margin-bottom: ${isMobile ? '0.75rem' : '1rem'};
          color: #e0e0e0;
          display: flex;
          align-items: center;
        }
        
        .markdown-content h3:before {
          content: "";
          width: 6px;
          height: 6px;
          background-color: #4299e1;
          border-radius: 50%;
          margin-right: 0.5rem;
          display: inline-block;
        }
        
        /* Paragraphes et texte */
        .markdown-content p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.7;
          font-size: ${fontSize}px;
        }
        
        /* Listes */
        .markdown-content ul, 
        .markdown-content ol {
          margin-top: 1rem;
          margin-bottom: 1rem;
          padding-left: ${isMobile ? '1.25rem' : '2rem'};
        }
        
        .markdown-content li {
          margin-bottom: 0.5rem;
          font-size: ${fontSize}px;
        }
        
        /* Blocs de code */
        .markdown-content pre {
          background-color: #1a202c;
          padding: 1rem;
          margin: 1.25rem 0;
          border-radius: 0.375rem;
          overflow-x: auto;
          border: 1px solid #2d3748;
        }
        
        .markdown-content code {
          font-family: 'Fira Code', monospace;
          font-size: ${Math.max(fontSize - 2, 12)}px;
          background-color: #2d3748;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          color: #f59e0b;
        }
        
        .markdown-content pre code {
          background-color: transparent;
          padding: 0;
          color: inherit;
          font-size: ${Math.max(fontSize - 1, 13)}px;
        }
        
        /* Citations */
        .markdown-content blockquote {
          border-left: 4px solid #4299e1;
          padding: 0.5rem 0 0.5rem 1rem;
          margin: 1.5rem 0;
          background-color: rgba(66, 153, 225, 0.1);
          border-radius: 0 0.25rem 0.25rem 0;
        }
        
        .markdown-content blockquote p {
          font-style: italic;
          margin: 0.5rem 0;
        }
        
        /* Liens */
        .markdown-content a {
          color: #63b3ed;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .markdown-content a:hover {
          color: #90cdf4;
          text-decoration: underline;
        }
        
        /* Images */
        .markdown-content img {
          max-width: 100%;
          height: auto;
          margin: 1.5rem auto;
          border-radius: 0.5rem;
          display: block;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        /* Séparateurs */
        .markdown-content hr {
          border: 0;
          height: 2px;
          background-image: linear-gradient(to right, rgba(66, 153, 225, 0), rgba(66, 153, 225, 0.75), rgba(66, 153, 225, 0));
          margin: 2rem 0;
        }
        
        /* Tables */
        .markdown-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          overflow-x: auto;
          display: block;
        }
        
        .markdown-content table th {
          background-color: #2d3748;
          padding: 0.75rem;
          font-weight: 600;
          border: 1px solid #4a5568;
        }
        
        .markdown-content table td {
          padding: 0.75rem;
          border: 1px solid #4a5568;
        }
        
        .markdown-content table tr:nth-child(even) {
          background-color: rgba(45, 55, 72, 0.5);
        }
        
        /* Styles spécifiques pour les emojis */
        .markdown-content p:has(img.emoji) {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .markdown-content img.emoji {
          display: inline;
          margin: 0;
          vertical-align: middle;
          height: 1.2em;
          width: auto;
          box-shadow: none;
        }
      `}</style>
      
      <div className="bg-gray-900/70 backdrop-blur-sm p-4 sm:p-8 rounded-lg shadow-xl">
        <article className="markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default CTFBlogPost;