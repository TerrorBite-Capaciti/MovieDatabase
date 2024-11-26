import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookmark, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const logo = '/assets/logo.png'; // Correct path to the logo in public/assets

  return (
    <div className="home-screen">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="FlickFndr Logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/home" className="nav-item">
              <FontAwesomeIcon icon={faHome} className="nav-icon" />
              <span className="nav-text">HOME</span>
            </Link>
          </li>
          <li>
            <Link to="/watchlist" className="nav-item">
              <FontAwesomeIcon icon={faBookmark} className="nav-icon" />
              <span className="nav-text">WATCHLIST</span>
            </Link>
          </li>
          <li className="profile-dropdown">
            <div className="nav-item">
              <FontAwesomeIcon icon={faUserCircle} className="nav-icon" />
              <span className="nav-text">Profile</span>
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link to="/profile">View Profile</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

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
