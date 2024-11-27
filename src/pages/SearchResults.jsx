import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMoviesByTitle } from '../utils/fetchMovies'; // Import the function from utils
import '../styles/Search.css'; 

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null); // Track which card is flipped
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const results = await fetchMoviesByTitle(query);  // Fetch from the API
        
        if (results && results.Response === "True") {
          setMovies(results.Search || []);  // Set the results (array of movies)
        } else {
          setMovies([]);  // Handle no results case
        }
      } catch (error) {
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData(); // Trigger fetch when query changes
    }
  }, [query]);

  // Flip the card by setting the flipped index
  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="search-results">
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {movies.length > 0 ? (
        <div className="movie-list">
          {movies.map((movie, index) => (
            <div
              key={index}
              className={`movie-item ${flippedIndex === index ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)} // Trigger flip on click
            >
              <div className="movie-card">
                {/* Front of the card */}
                <div className="movie-card-front">
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "/path/to/default-image.jpg"}
                    alt={movie.Title}
                    className="movie-poster"
                  />
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </div>

                {/* Back of the card */}
                <div className="movie-card-back">
                  <h3>{movie.Title}</h3>
                  <p><strong>Plot:</strong> {movie.Plot}</p>
                  <div className="movie-card-actions">
                    <button className="add-to-watchlist">Add to Watchlist</button>
                    <a href={`https://www.youtube.com/results?search_query=${movie.Title} trailer`} target="_blank" rel="noopener noreferrer">
                      <button className="watch-trailer">Watch Trailer</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
