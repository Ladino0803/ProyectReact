import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, Info } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="neumorphic p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[var(--accent)]">
          Unsplash Gallery
        </Link>
        <div className="flex gap-6">
          <Link
            to="/"
            className={`neumorphic-button p-3 ${
              isActive('/') ? 'text-[var(--accent)]' : ''
            }`}
          >
            <Home size={20} />
          </Link>
          <Link
            to="/favorites"
            className={`neumorphic-button p-3 ${
              isActive('/favorites') ? 'text-[var(--accent)]' : ''
            }`}
          >
            <Heart size={20} />
          </Link>
          <Link
            to="/about"
            className={`neumorphic-button p-3 ${
              isActive('/about') ? 'text-[var(--accent)]' : ''
            }`}
          >
            <Info size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}