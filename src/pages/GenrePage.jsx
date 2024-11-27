import React, { useState, useEffect, useRef } from "react";
import MovieCard from "../components/MovieCard"; // Assuming you have a MovieCard component
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icons for the arrows

const GenrePage = () => {
  const [genres, setGenres] = useState(["Action", "Comedy", "Drama", "Thriller", "Horror"]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const genreRefs = useRef({}); // To store the references of the genre scrollers

  const API_KEY = "f4e3711c";
  const BASE_URL = "https://www.omdbapi.com/";

  // Fetch movies by genre
  const fetchMoviesByGenre = async (genre) => {
    try {
      const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${genre}&type=movie`
      );
      const data = await response.json();

      if (data.Response === "True") {
        return data.Search; // Return movies related to this genre
      } else {
        console.error("Error fetching movies:", data.Error);
        return [];
      }
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
      return [];
    }
  };

  useEffect(() => {
    const loadMoviesByGenre = async () => {
      const moviesGrouped = {};

      // Fetch movies for each genre and store in state
      for (const genre of genres) {
        const movies = await fetchMoviesByGenre(genre);
        moviesGrouped[genre] = movies;
      }

      setMoviesByGenre(moviesGrouped);
    };

    loadMoviesByGenre();
  }, [genres]);

  // Function to handle scrolling
  const handleScroll = (direction, genre) => {
    const scroller = genreRefs.current[genre];
    if (scroller) {
      const scrollAmount = direction === "left" ? -200 : 200; // Adjust the amount scrolled
      scroller.scrollLeft += scrollAmount; // Scroll horizontally
    }
  };

  return (
    <div className="genre-page">
      <h1>Genres</h1>
      {genres.map((genre) => (
        <div key={genre} className="genre-section">
          <h2>{genre}</h2>
          <div className="genre-scroller-container">
            {/* Left Scroll Arrow */}
            <button
              className="scroll-arrow scroll-arrow-left"
              onClick={() => handleScroll("left", genre)}
            >
              <FaArrowLeft />
            </button>

            {/* Movie Scroller */}
            <div
              className="movie-scroller"
              ref={(el) => (genreRefs.current[genre] = el)} // Set reference for the genre
            >
              {moviesByGenre[genre] ? (
                <div className="movie-scroller-inner">
                  {moviesByGenre[genre].map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                  ))}
                </div>
              ) : (
                <p>Loading {genre} movies...</p>
              )}
            </div>

            {/* Right Scroll Arrow */}
            <button
              className="scroll-arrow scroll-arrow-right"
              onClick={() => handleScroll("right", genre)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenrePage;
