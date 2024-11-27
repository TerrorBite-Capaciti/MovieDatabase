import React, { useState } from 'react';
import { FaPlusCircle, FaPlayCircle } from 'react-icons/fa'; // Import icons for the watchlist and trailer
import '../styles/components.css'; // Styling for the footer

const MovieCard = ({ movie }) => {
  const [flipped, setFlipped] = useState(false); // Track card flip state

  const handleCardClick = () => {
    setFlipped(!flipped); // Toggle the flipped state when the card is clicked
  };

  const handleAddToWatchlist = () => {
    // Logic to add the movie to a watchlist can go here
    console.log(`${movie.Title} added to watchlist!`);
  };

  const handleWatchTrailer = () => {
    // If the trailer URL is available, open it; otherwise, log an error
    if (movie.Trailer) {
      window.open(movie.Trailer, '_blank');
    } else {
      console.log("Trailer not available for this movie.");
    }
  };

  return (
    <div className={`movie-card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      {/* Front of the card */}
      <div className="movie-card-front">
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Type:</strong> {movie.Type}</p>
      </div>

      {/* Back of the card (flipped side) */}
      <div className="movie-card-back">
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <div className="movie-card-actions">
          <button className="watchlist-btn" onClick={handleAddToWatchlist}>
            <FaPlusCircle /> Add to Watchlist
          </button>
          <button className="trailer-btn" onClick={handleWatchTrailer}>
            <FaPlayCircle /> Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
