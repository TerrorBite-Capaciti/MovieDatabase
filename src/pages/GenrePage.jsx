import React, {useEffect, useState} from "react";
import MovieCard from "../components/MovieCard"; // Assuming you have a MovieCard component

const GenrePage = () => {
  const [genres, setGenres] = useState(["Action", "Comedy", "Drama", "Thriller", "Horror"]);
  const [moviesByGenre, setMoviesByGenre] = useState({});

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
        moviesGrouped[genre] = await fetchMoviesByGenre(genre);
      }

      setMoviesByGenre(moviesGrouped);
    };

    loadMoviesByGenre();
  }, [genres]);

  return (
    <div className="genre-page">
      <h1>Genres</h1>
      {genres.map((genre) => (
        <div key={genre} className="genre-section">
          <h2>{genre}</h2>
          <div className="movie-scroller">
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
        </div>
      ))}
    </div>
  );
};

export default GenrePage;
