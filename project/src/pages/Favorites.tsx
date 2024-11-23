import React, { useState, useEffect } from 'react';
import ImageGrid from '../components/ImageGrid';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Your Favorites</h1>
      {favorites.length > 0 ? (
        <ImageGrid images={favorites} />
      ) : (
        <p className="text-center neumorphic p-8">
          No favorite images yet. Start adding some from the home page!
        </p>
      )}
    </div>
  );
}