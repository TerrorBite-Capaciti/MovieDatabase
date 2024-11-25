import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'; 

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
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/watchlist">Watchlist</Link></li>
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

        {/* Additional Buttons */}
        <div className="action-buttons">
          <button className="btn">Recommended Movies</button>
          <button className="btn">Coming Soon</button>
        </div>
      </div>
    </div>
  );
};

// HomeScreen Styling (futuristic vibe with your color palette)
const homeScreenStyles = `
  .home-screen {
    background: linear-gradient(135deg, #050000, #909292);
    color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Arial', sans-serif;
  }

  /* Navbar */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #19FB7;
    padding: 20px 40px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }

  .navbar .logo-image {
    height: 50px;
    width: auto;
  }

  .navbar .nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
  }

  .navbar .nav-links li a {
    text-decoration: none;
    color: #050000;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .navbar .nav-links li a:hover {
    color: #AAABAB;
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
    text-shadow: 0 2px 5px #050000;
  }

  /* Search Section */
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
  }

  .search-input {
    padding: 15px;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    width: 400px;
    outline: none;
    background-color: #c4c4c4;
    color: #050000;
    transition: background-color 0.3s ease;
  }

  .search-input:focus {
    background-color: #909292;
  }

  .search-button {
    padding: 15px 25px;
    background-color: #19FB7;
    color: #050000;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.2rem;
    transition: background-color 0.3s ease, transform 0.2s;
  }

  .search-button:hover {
    background-color: #AAABAB;
    transform: scale(1.05);
  }

  /* Action Buttons */
  .action-buttons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .btn {
    padding: 15px 30px;
    background-color: #19FB7;
    color: #050000;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s;
  }

  .btn:hover {
    background-color: #AAABAB;
    transform: scale(1.05);
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${homeScreenStyles}</style>`);

export default HomeScreen;
