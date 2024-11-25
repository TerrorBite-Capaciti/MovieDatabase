import React, { useState, useEffect } from 'react';
import { fetchRecommended, fetchComingSoon } from '../api';
import MovieCard from './MovieCard';
import { motion } from 'framer-motion';

const HomeScreen = () => {
  const [recommended, setRecommended] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recData = await fetchRecommended();
        setRecommended(recData?.data || []);  // Ensure default to empty array
        const comingSoonData = await fetchComingSoon();
        setComingSoon(comingSoonData?.data || []); // Ensure default to empty array
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold text-center mb-4">Discover Your Next Movie</h1>

      {/* Search Bar */}
      <motion.div
        className="search-bar mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          placeholder="Search for movies..."
          className="w-full p-3 rounded-full border-2 border-gray-300"
        />
      </motion.div>

      {/* Recommended Movies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Recommended Movies</h2>
        <div className="movie-carousel flex overflow-x-scroll space-x-4 py-4">
          {recommended?.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Coming Out Soon</h2>
        <div className="movie-carousel flex overflow-x-scroll space-x-4 py-4">
          {comingSoon?.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
