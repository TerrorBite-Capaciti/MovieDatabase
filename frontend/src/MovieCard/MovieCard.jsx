import "./MovieCard.css"; // Add styles here
import PropTypes from 'prop-types';

const MovieCard = ({ movies }) => {
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={movie.image}
            alt={movie.title}
            className="movie-poster"
          />
          <div className="movie-hover">
            <button className="trailer-btn">View Trailer</button>
            <i
              className="info-icon"
              onClick={() => window.location.href = `/movie/${movie.id}`}
            >
              ℹ️
            </i>
          </div>
        </div>
      ))}
    </div>
  );
};

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieCard;
