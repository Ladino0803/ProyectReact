import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="neumorphic-inset flex items-center p-4 transition-all duration-300 focus-within:shadow-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for images..."
          className="flex-1 bg-transparent outline-none transition-colors duration-300 placeholder-gray-500 focus:placeholder-[var(--accent)]"
        />
        <button
          type="submit"
          className="neumorphic-button p-3 ml-4 text-[var(--accent)] hover:scale-105 transition-transform duration-300"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
}