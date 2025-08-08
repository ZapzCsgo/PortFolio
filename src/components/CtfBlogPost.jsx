import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

import comcyberMarine from '../posts/comcyber_marine.md?raw';
import cs2EntityList from '../posts/cs2_entity_list.md?raw';

const CTFBlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [postMeta, setPostMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fontSize, setFontSize] = useState(16);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const postContents = {
      'comcyber_marine': comcyberMarine,
      'cs2_entity_list': cs2EntityList
    };

    const postMetadata = {
      'comcyber_marine': {
        title: "⚓️ COMCYBER X MARINE ROOT ME",
        image: "/comcyber_marine.webp",
        altText: "Logo du CTF COMCYBER X MARINE"
      },
      'cs2_entity_list': {
        title: "🎯 Counter-Strike 2 - Reverse Entity List",
        image: "/Counter-Strike-2.jpg",
        altText: "Counter-Strike 2"
      }
    };
    
    // Récupérer le contenu correspondant au slug
    const content = postContents[slug];
    const metadata = postMetadata[slug];
    
    if (content && metadata) {
      setPost(content);
      setPostMeta(metadata);
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
    <div className={`container mx-auto py-8 sm:py-16 ${isMobile ? 'px-2' : 'px-4 sm:px-8'}`}>
      <Link to="/ctf-blog" className="text-blue-400 hover:text-blue-300 mb-4 sm:mb-8 inline-block px-2">
        ← Retour aux articles
      </Link>
      
      <div className="mb-4 flex justify-between items-center bg-gray-800 p-3 rounded-lg mx-2">
        <h3 className="text-white text-sm">Contrôles de lecture</h3>
        <div className="flex space-x-3">
          <button 
            onClick={decreaseFontSize} 
            className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors"
            aria-label="Diminuer la taille du texte"
          >
            A-
          </button>
          <button 
            onClick={increaseFontSize} 
            className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors"
            aria-label="Augmenter la taille du texte"
          >
            A+
          </button>
        </div>
      </div>

      {/* Image d'en-tête du post */}
      {postMeta && postMeta.image && (
        <div className="mb-8 flex justify-center">
          <img
            src={postMeta.image}
            alt={postMeta.altText || postMeta.title}
            className="max-w-sm w-full h-auto object-contain rounded-lg shadow-lg"
          />
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
          padding: ${isMobile ? '0.75rem' : '1rem'};
          margin: 1.25rem 0;
          border-radius: 0.375rem;
          overflow-x: auto;
          border: 1px solid #2d3748;
          font-size: ${isMobile ? '12px' : '14px'};
          line-height: 1.4;
        }
        
        .markdown-content code {
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: ${Math.max(fontSize - 2, 12)}px;
          background-color: #2d3748;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          color: #f59e0b;
          word-break: break-all;
          overflow-wrap: anywhere;
        }
        
        .markdown-content pre code {
          background-color: transparent;
          padding: 0;
          color: inherit;
          font-size: ${isMobile ? '11px' : Math.max(fontSize - 1, 13) + 'px'};
          word-break: normal;
          overflow-wrap: normal;
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
          max-width: 70%;
          width: auto;
          height: auto;
          margin: 1.5rem auto;
          border-radius: 0.5rem;
          display: block;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        /* Images sur mobile - encore plus petites */
        @media (max-width: 768px) {
          .markdown-content img {
            max-width: 85%;
          }
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
          display: ${isMobile ? 'block' : 'table'};
          white-space: ${isMobile ? 'nowrap' : 'normal'};
        }
        
        .markdown-content table th {
          background-color: #2d3748;
          padding: ${isMobile ? '0.5rem' : '0.75rem'};
          font-weight: 600;
          border: 1px solid #4a5568;
          font-size: ${isMobile ? '14px' : '16px'};
        }
        
        .markdown-content table td {
          padding: ${isMobile ? '0.5rem' : '0.75rem'};
          border: 1px solid #4a5568;
          font-size: ${isMobile ? '14px' : '16px'};
        }
        
        .markdown-content table tr:nth-child(even) {
          background-color: rgba(45, 55, 72, 0.5);
        }
        
        /* Amélioration mobile pour le contenu général */
        @media (max-width: 768px) {
          .markdown-content {
            overflow-x: hidden;
          }
          
          .markdown-content pre {
            margin-left: -0.5rem;
            margin-right: -0.5rem;
            border-radius: 0;
          }
          
          .markdown-content table {
            margin-left: -0.5rem;
            margin-right: -0.5rem;
            width: calc(100% + 1rem);
          }
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
      
      <div className={`bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-xl ${isMobile ? 'p-3 mx-1' : 'p-4 sm:p-8'}`}>
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