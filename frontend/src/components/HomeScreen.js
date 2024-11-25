// HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <h1 className="text-center text-4xl text-[#19FB7]">Welcome to MovieDB</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies or TV shows..."
          className="search-input"
        />
        <button className="search-button">
          <Link to="/search">Search</Link>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
