import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Button from './ui/Button';
import IconLink from './ui/IconLink';

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
            <FaEnvelope className="text-accent text-lg mr-2" aria-hidden="true" />
            <span className="text-gray-300 text-sm mr-2">mmurru421337@gmail.com</span>
            <Button
              variant="neutral"
              size="sm"
              onClick={handleCopyEmail}
              aria-live="polite"
              aria-atomic="true"
            >
              {copied ? 'Copié!' : 'Copier'}
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button as="a" href="mailto:mmurru421337@gmail.com" variant="solid" size="sm">
              Me contacter
            </Button>
            <div className="flex gap-2">
              <IconLink href="https://github.com/ZapzCsgo" icon={FaGithub} label="Github" />
              <IconLink href="https://www.linkedin.com/in/matteo-murru-775720274/" icon={FaLinkedin} label="Linkedin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;