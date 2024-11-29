import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle, FaPlayCircle, FaInfoCircle } from 'react-icons/fa';
import { fetchMoviesByTitle } from '../api/omdb'; // Import your API function
import MovieDetailsModal from './MovieDetailsModal'; // Import the Modal
import '../styles/moviecard.css';

const MovieCard = ({ movie }) => {
  const [flipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [movieDetails, setMovieDetails] = useState(null);

  const handleCardClick = (e) => {
    if (!e || !e.target) return;
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
      return; // Ignore clicks on buttons
    }
    setFlipped((prevState) => !prevState); // Toggle the flip state
  };

  const handleMoreInfo = async () => {
    const details = await fetchMoviesByTitle(movie.Title);
    if (details && details.Plot) {
      setMovieDetails(details); // Set movie details in the state
      setShowModal(true); // Show the modal
    } else {
      alert('Failed to fetch movie details.');
    }
  };

  const handleWatchTrailer = async () => {
    console.log("Trailer URL:", movie.Trailer); // Log the trailer URL for debugging

    if (movie.Trailer) {
      // If trailer URL exists in the movie object, open it
      window.open(movie.Trailer, '_blank');
    } else {
      // If there's no trailer URL, fetch it from OMDb
      const details = await fetchMoviesByTitle(movie.Title);
      if (details && details.Trailer) {
        // Log the fetched trailer URL to verify
        console.log("Fetched Trailer URL:", details.Trailer);
        window.open(details.Trailer, '_blank');
      } else {
        alert('Trailer not available for this movie.');
      }
    }
  };

  // Placeholder for the "Add to Watchlist" functionality
  const handleAddToWatchlist = () => {
    console.log(`${movie.Title} added to watchlist!`); // Log a message for now
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div
      className={`movie-card ${flipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
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

      {/* Modal for Movie Details */}
      {showModal && <MovieDetailsModal movie={movieDetails} closeModal={handleCloseModal} />}
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
