// MovieCard.js

import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card bg-[#909292] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="movie-info p-4 text-center">
        <h3 className="text-xl font-semibold text-[#050000]">{movie.title}</h3>
        <p className="text-sm text-[#c4c4c4]">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
