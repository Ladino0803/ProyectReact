import React from 'react';
import { Camera } from 'lucide-react';

export default function About() {
  return (
    <div className="neumorphic p-8 max-w-2xl mx-auto">
      <div className="flex justify-center mb-6">
        <Camera size={48} className="text-[var(--accent)]" />
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">About Unsplash Gallery</h1>
      <p className="mb-4">
        Welcome to our Unsplash Gallery! This application allows you to search and explore
        beautiful images from Unsplash's extensive collection. With our neumorphic design,
        we provide a unique and modern user experience.
      </p>
      <p className="mb-4">
        Features:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Search images by keyword</li>
        <li>Save your favorite images</li>
        <li>Responsive neumorphic design</li>
        <li>Dark mode for comfortable viewing</li>
      </ul>
      <p>
        Built with React, TypeScript, and Tailwind CSS. Images provided by the
        Unsplash API.
      </p>
    </div>
  );
}