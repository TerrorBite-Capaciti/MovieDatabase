import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"; 
import '../styles/TrendingPage.css'; 

const TrendingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "f4e3711c";
  const BASE_URL = "https://www.omdbapi.com/";

  // Define fetchTrendingMovies function here
  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}?s=popular&type=movie&apikey=${API_KEY}`);
      const data = await response.json();
      console.log("Fetched Data:", data); // Log the fetched data

      if (data.Response === "True") {
        setMovies(data.Search); // Set the movies to the state
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError("Error fetching trending movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies(); // Call the function when the component mounts
  }, []);

  // Debugging loading and error states
  if (loading) return <div>Loading trending movies...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="trending-page">
      <h1>Trending Movies</h1>
      <div className="movie-scroller">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>No movies found!</p>
        )}
      </div>
    </div>
  );
};

export default TrendingPage;
