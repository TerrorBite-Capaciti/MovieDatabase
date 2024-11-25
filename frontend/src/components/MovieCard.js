import React from 'react';
import { motion } from 'framer-motion';

const MovieCard = ({ movie }) => {
  return (
    <motion.div
      className="movie-card relative w-40 h-60 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      <div className="overlay absolute inset-0 bg-black opacity-50 flex items-center justify-center text-center">
        <p className="text-xl">{movie.title}</p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
