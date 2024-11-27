import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import { fetchAll } from '../utils/fetchAll';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // storing all randomised movie data
  // const [allMovieData, setAllMovieData] = useState(null);

  const [_, setError] = useState(null)

  // Fetch popular movies from API
  // useEffect(() => {
  //   const fetchPopularMovies = async () => {
  //     try {
  //       const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f4e3711c&language=en-US&page=1');
  //       const data = await response.json();
  //       setMovies(data.results); // Assuming the API response has a 'results' array
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchPopularMovies();
  // }, []);

  useEffect(() => {
    try {
      const results = fetchAll();

      if (results && results.Response === "True") {
        setMovies(JSON.stringify(results.Search) || [])
      } else {
        setMovies([])
      }
    } catch (error) {
      setError("Unable to fetch featured list: " + error)
    }
  }, [])

  return (
    <div className="home-screen">
      {/* Main Content */}
      <div className="main-content">
        <h1>Discover Movies and TV Shows</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for movies or TV shows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <Link to={`/search?query=${searchQuery}`} className="search-button">
            Search
          </Link>
        </div>
      </div>
 {/* Popular Movies Section */}
 <div className="popular-movies">
        <h2>Popular Movies</h2>
        <div className="movie-scroller">
          {/* Loading state */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            movies.length > 0 && (
              <div className="movie-list">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            )
          )}
        </div>
      </div>

    </div>
  );
};

export default HomeScreen;
