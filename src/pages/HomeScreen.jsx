import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeScreen.css'; 
import MovieCard from '../components/MovieCard';
import { fetchAll, fetchTrending, fetchComingSoon, fetchCategories } from '../utils/fetchAll'; // Fetch functions from utils

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch Movies, Trending, and Categories data
  useEffect(() => {
    const getMoviesData = async () => {
      try {
        // Fetch Random Featured Movies
        const results = await fetchAll();
        if (results.Response === "True") {
          setMovies(results.Search || []);
        }

        // Fetch Trending Movies
        const trendingResults = await fetchTrending();
        if (trendingResults.Response === "True") {
          setTrendingMovies(trendingResults.Search || []);
        }

        // Fetch Coming Soon Movies
        const comingSoonResults = await fetchComingSoon();
        if (comingSoonResults.Response === "True") {
          setComingSoonMovies(comingSoonResults.Search || []);
        }

        // Fetch Movie Categories (Genres)
        const categoryResults = await fetchCategories();
        if (categoryResults.Response === "True") {
          setCategories(categoryResults.Genres || []);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    getMoviesData();
  }, []);

  return (
    <div className="home-screen">
      {/* Main Content */}
      <div className="hero-section">
        <h1 className="hero-title">Discover Movies and TV Shows</h1>
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
            

      {/* Featured Movies Section */}
      <div className="featured-movies">
        <h2>Featured Movies</h2>
        <div className="movie-scroller">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="movie-list">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>



      {/* Coming Soon Section */}
      <div className="coming-soon">
        <h2>Coming Soon</h2>
        <div className="movie-scroller">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="movie-list">
              {comingSoonMovies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Trending Movies Section */}
      <div className="trending-movies">
        <h2>Trending Movies</h2>
        <div className="movie-scroller">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="movie-list">
              {trendingMovies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Watchlist Section */}
      <div className="watchlist-section">
        <h2>Your Watchlist</h2>
        <p>This is a placeholder for your watchlist functionality.</p>
      </div>

      {/* Scroll-to-Top Button */}
      {/* Add the ScrollToTopButton here */}
    </div>
  );
};

export default HomeScreen;
