import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="relative group">
        {/* Tooltip / Chat Bubble */}
        <div className="absolute bottom-full right-0 mb-4 w-48 bg-white dark:bg-bg-secondary p-3 rounded-xl shadow-xl border border-border-color transform transition-all duration-300 origin-bottom-right scale-0 group-hover:scale-100">
          <p className="text-sm text-text-primary font-medium">Ada pertanyaan? Chat Admin sekarang!</p>
          <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-4 h-4 bg-white dark:bg-bg-secondary border-r border-b border-border-color"></div>
        </div>

        {/* Button */}
        <a 
          href="https://t.me/inba_admin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-brand-emerald text-white rounded-full shadow-lg shadow-brand-emerald/30 hover:bg-brand-emerald-dark hover:scale-110 transition-all duration-300 animate-bounce-slow"
          aria-label="Chat with Admin on Telegram"
        >
          <MessageCircle className="w-7 h-7" />
        </a>

        {/* Close Button (Optional if too intrusive) */}
        {/* <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -right-2 bg-text-secondary text-bg-primary rounded-full p-0.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X size={12} />
        </button> */}
      </div>
    </div>
  );
};

export default FloatingCTA;
