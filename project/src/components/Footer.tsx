import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="neumorphic mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[var(--accent)] mb-2">Unsplash Gallery</h3>
            <p className="text-sm opacity-75">Beautiful images powered by Unsplash API</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="social-icon-link">
              <Github size={24} />
            </a>
            <a href="#" className="social-icon-link">
              <Twitter size={24} />
            </a>
            <a href="#" className="social-icon-link">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-[#353535] text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} Unsplash Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}