import React from 'react';
import PropTypes from 'prop-types';
import '../styles/movieDetailsModal.css';  // Add your custom styling for the modal

const MovieDetailsModal = ({ movie, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>X</button>
        <h2>{movie.Title}</h2>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Genres:</strong> {movie.Genre || 'N/A'}</p>
        <p><strong>Rating:</strong> {movie.imdbRating || 'Unrated'}</p>
        <p><strong>Cast:</strong> {movie.Actors || 'N/A'}</p>
        <p><strong>Release Date:</strong> {movie.Released || 'N/A'}</p>
      </div>
    </div>
  );
};

MovieDetailsModal.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Genre: PropTypes.string,
    imdbRating: PropTypes.string,
    Actors: PropTypes.string,
    Released: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default MovieDetailsModal;
