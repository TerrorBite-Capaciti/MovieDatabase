import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookmark, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.png';
import MovieCard from "../MovieCard/MovieCard"; // Import MovieCard component


//mock data for movies
const mockMovies = [
  {
    id: 1,
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/8h58BL2Fg9Rlj5tBXGojJ3LgNkJ.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
];

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
          <li>
            <Link to="/home" className="nav-item">
              <span className="nav-text"></span>
            </Link>
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

      {/* Movie cards section */}
      <div>
        <h2>Available Movies</h2>
        {/* Render MovieCard component and pass mockMovies as props */}
        <MovieCard movies={mockMovies} />
      </div>
    
    </div>
  );
};

// Styling
const homeScreenStyles = `
  .home-screen {
    background: black;
    color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Arial', sans-serif;
  }

  /* Navbar Styling */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.85);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }

  .logo-image {
    height: 80px;
    width: 70%;
    filter: drop-shadow(0 0 8px #19FB7);
  }

  .nav-links {
    display: flex;
    gap: 30px;
    align-items: center;
    list-style-type: none; 
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .nav-icon {
    font-size: 1.5rem;
    color: #19FB7;
    transition: transform 0.2s, color 0.3s;
  }

  .nav-text {
    transition: color 0.3s ease;
  }

  .nav-item:hover .nav-icon {
    color: #FFD700;
    transform: scale(1.2);
  }

  .nav-item:hover .nav-text {
    color: #FFD700;
    text-shadow: 0 0 8px #FFD700;
  }

  /* Profile Dropdown */
  .profile-dropdown {
    position: relative;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.8);
    overflow: hidden;
  }

  .profile-dropdown:hover .dropdown-menu {
    display: block;
  }

  .dropdown-menu li {
    list-style: none;
    padding: 10px 20px;
    text-align: left;
  }

  .dropdown-menu a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    display: block;
    transition: color 0.3s ease;
  }

  .dropdown-menu a:hover {
    color: #19FB7;
    text-shadow: 0 0 10px #19FB7;
  }

  /* Main Content */
  .main-content {
    margin-top: 120px;
    text-align: center;
  }

  .main-content h1 {
    font-size: 3rem;
    color: #19FB7;
    margin-bottom: 30px;
    text-shadow: 0 4px 8px #050000;
  }

  .search-container {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .search-input {
    padding: 15px;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    width: 400px;
    background-color: #c4c4c4;
    color: #050000;
  }

  .search-button {
    padding: 15px 25px;
    background: linear-gradient(135deg, #19FB7, #AAABAB);
    color: grey;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${homeScreenStyles}</style>`);

export default HomeScreen;
