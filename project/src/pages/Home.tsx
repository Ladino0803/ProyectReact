import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ImageGrid from '../components/ImageGrid';

const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'quYMqiifj0TcGJ4ZJggMueXMsPtOcGJJD6pjh3qLGZE';

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchImages = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(UNSPLASH_API_URL, {
        params: {
          query,
          client_id: ACCESS_KEY,
          per_page: 30,
        },
      });
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    setLoading(false);
  };

  const handleFavorite = (image: any) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.find((fav: any) => fav.id === image.id)) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, image]));
    }
  };

  useEffect(() => {
    searchImages('nature');
  }, []);

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <ImageGrid images={images} onFavorite={handleFavorite} />
      )}
    </div>
  );
}