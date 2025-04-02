import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mmurru421337@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FaEnvelope className="text-orange-500 text-lg mr-2" />
            <span className="text-gray-300 text-sm mr-2">mmurru421337@gmail.com</span>
            <button 
              onClick={handleCopyEmail} 
              className="text-xs py-1 px-2 bg-gray-800 hover:bg-gray-700 text-white rounded"
            >
              {copied ? 'Copié!' : 'Copier'}
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:mmurru421337@gmail.com" 
              className="text-sm py-1 px-3 bg-gray-800 hover:bg-orange-600 text-white rounded transition-colors"
            >
              Me contacter
            </a>
            <div className="flex gap-2">
              <a 
                href="https://github.com/ZapzCsgo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-orange-500 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/matteo-murru-775720274/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-orange-500 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;