import React, { useState } from 'react';
import { searchMovies } from '../api';
import MovieCard from './MovieCard';

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const { data } = await searchMovies(query);
      setResults(data);
      setError("");
    } catch (err) {
      setError("No results found. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-full border-2 border-gray-300 mb-4"
      />
      <button onClick={handleSearch} className="p-3 bg-pink-500 text-white rounded-full mb-4">
        Search
      </button>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
