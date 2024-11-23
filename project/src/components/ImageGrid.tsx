import React from 'react';
import { Heart } from 'lucide-react';

interface Image {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
}

interface ImageGridProps {
  images: Image[];
  onFavorite?: (image: Image) => void;
}

export default function ImageGrid({ images, onFavorite }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image) => (
        <div key={image.id} className="neumorphic p-4 image-card">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {onFavorite && (
              <button
                onClick={() => onFavorite(image)}
                className="absolute top-4 right-4 neumorphic-button p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-[var(--accent)]"
              >
                <Heart size={20} />
              </button>
            )}
          </div>
          <p className="mt-4 text-sm text-center">Photo by {image.user.name}</p>
        </div>
      ))}
    </div>
  );
}