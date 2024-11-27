import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
    </div>
  );
};

export default HomeScreen;
