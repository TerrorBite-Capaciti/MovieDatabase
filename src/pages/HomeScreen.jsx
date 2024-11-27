import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // const [data, setData] = useState(null);

  const [allMovieData, setAllMovieData] = useState(null);

  const [error, setError] = useState(null)

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

      <section className="featured-section">
        <h1>Featured</h1>

        <div className="media-display">
          <MovieCard movie={setAllMovieData}></MovieCard>
        </div>
      </section>

    </div>
  );
};

export default HomeScreen;
