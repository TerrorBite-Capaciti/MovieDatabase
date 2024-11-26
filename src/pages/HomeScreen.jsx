import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookmark, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import MovieCard from "../MovieCard/MovieCard"; // Import MovieCard component

/mock data for movies
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
  {
    id: 4,
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/w500/cp1VbIptTHjc1GR13mdBRujtyk7.jpg",
  },
{
  id: 5,
  title: "Titanic",
  image: "https://image.tmdb.org/t/p/w500/kxeMxh9gVNY7NFS3FhH8Gr6Rf6v.jpg",
},
{
  id: 6,
  title: "The Shawshank Redemption",
  image: "https://image.tmdb.org/t/p/w500/6Bq8aBCu69jlq6A1LGA90tFuZkE.jpg",
},
{
  id: 7,
  title: "The Godfather",
  image: "https://image.tmdb.org/t/p/w500/mCoaqvJlJ3zD2C4J2GZ0CpRzm9v.jpg",
},
{
  id: 8,
  title: "Pulp Fiction",
  image: "https://image.tmdb.org/t/p/w500/cKzHfjJvM5VrmgyI3wHJkNjta7e.jpg",
},
];

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
