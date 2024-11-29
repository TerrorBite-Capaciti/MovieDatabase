import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle, FaPlayCircle, FaInfoCircle } from 'react-icons/fa';
import { fetchMoviesByTitle } from '../api/omdb';  // Importing your API function
import '../styles/moviecard.css';

const MovieCard = ({ movie }) => {
  const [flipped, setFlipped] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const handleCardClick = (e) => {
    if (!e || !e.target) return; // Ensure 'e' and 'e.target' are valid
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
      return; // Ignore clicks on buttons
    }
    setFlipped((prevState) => !prevState); // Toggle the flip state
  };

  const handleMoreInfo = async () => {
    // Fetch additional movie details from the API
    const details = await fetchMoviesByTitle(movie.Title);
    if (details && details.Plot) {
      alert(`Movie Summary: ${details.Plot || 'No summary available.'}`);
    } else {
      alert('Failed to fetch movie details.');
    }
  };

  const handleWatchTrailer = async () => {
    // If no trailer URL is present in the movie object, fetch from OMDb API
    if (movie.Trailer) {
      window.open(movie.Trailer, '_blank');
    } else {
      const details = await fetchMoviesByTitle(movie.Title);
      if (details && details.Trailer) {
        window.open(details.Trailer, '_blank');
      } else {
        alert('Trailer not available for this movie.');
      }
    }
  };

  const handleAddToWatchlist = () => {
    alert(`${movie.Title} added to watchlist!`); // Placeholder functionality for adding to watchlist
  };

  return (
    <div
      className={`movie-card ${flipped ? 'flipped' : ''}`}
      onClick={handleCardClick} // Pass handleCardClick correctly
    >
      {/* Front of the card */}
      <div className="movie-card-front">
        <h2>{movie.Title}</h2>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/250x400'}
          alt={movie.Title}
          className="movie-poster"
        />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Type:</strong> {movie.Type}</p>
      </div>

      {/* Back of the card */}
      <div className="movie-card-back">
        <h2>{movie.Title}</h2>
        <p><strong>Genres:</strong> {movie.Genre || 'N/A'}</p>
        <p><strong>Rating:</strong> {movie.imdbRating || 'Unrated'}</p>

        <div className="movie-card-actions">
          <button
            className="more-info-btn"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering card flip
              handleMoreInfo();
            }}
          >
            <FaInfoCircle /> More Info
          </button>

          <button
            className="trailer-btn"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering card flip
              handleWatchTrailer();
            }}
          >
            <FaPlayCircle /> Watch Trailer
          </button>

          <button
            className="watchlist-btn"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering card flip
              handleAddToWatchlist();
            }}
          >
            <FaPlusCircle /> Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Genre: PropTypes.string,
    imdbRating: PropTypes.string,
    Plot: PropTypes.string,
    Poster: PropTypes.string.isRequired,
    Trailer: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
