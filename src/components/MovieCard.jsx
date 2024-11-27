import React, { useState } from 'react';
import { FaPlusCircle, FaPlayCircle, FaInfoCircle } from 'react-icons/fa'; // Added FaInfoCircle for more information
import '../styles/components.css'; // Styling for the footer

const MovieCard = ({ movie }) => {
  const [flipped, setFlipped] = useState(false); // Track card flip state

  const handleCardClick = (e) => {
    // Prevent flip on button clicks
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
      return;
    }
    setFlipped(!flipped); // Toggle the flipped state
  };

  const handleAddToWatchlist = () => {
    console.log(`${movie.Title} added to watchlist!`);
  };

  const handleWatchTrailer = () => {
    if (movie.Trailer) {
      window.open(movie.Trailer, '_blank');
    } else {
      alert('Trailer not available for this movie.');
    }
  };

  const handleMoreInfo = () => {
    alert(`Summary: ${movie.Plot || 'No summary available.'}`);
  };

  return (
    <div
      className={`movie-card ${flipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
    >
      {/* Front of the card */}
      <div className="movie-card-front">
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
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
            onClick={handleMoreInfo}
          >
            <FaInfoCircle /> More Info
          </button>

          <button
            className="trailer-btn"
            onClick={handleWatchTrailer}
          >
            <FaPlayCircle /> Watch Trailer
          </button>

          <button
            className="watchlist-btn"
            onClick={handleAddToWatchlist}
          >
            <FaPlusCircle /> Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
