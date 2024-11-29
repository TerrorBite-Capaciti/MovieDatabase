import React, { useState, useEffect } from 'react';
import '../styles/HomeScreen.css';
import MovieCard from '../components/MovieCard';
import Slideshow from '../components/Slideshow'; // Import Slideshow
import { fetchAll, fetchTrending, fetchComingSoon, fetchCategories } from '../utils/fetchAll';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const results = await fetchAll();
        if (results.Response === "True") {
          setMovies(results.Search || []);
        }
        const trendingResults = await fetchTrending();
        if (trendingResults.Response === "True") {
          setTrendingMovies(trendingResults.Search || []);
        }
        const comingSoonResults = await fetchComingSoon();
        if (comingSoonResults.Response === "True") {
          setComingSoonMovies(comingSoonResults.Search || []);
        }
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

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      window.location.href = `/search?query=${searchQuery}`;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="home-screen">
      <Slideshow /> {/* Place Slideshow behind the search bar */}

      {/* Main Content */}
      <div className="hero-section">
        <h1 className="hero-title">Discover Movies and TV Shows</h1><br />
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for movies or TV shows..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
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
    </div>
  );
};

export default HomeScreen;
