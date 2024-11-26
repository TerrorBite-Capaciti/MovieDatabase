// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import for React Router v6
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import SearchResults from './components/SearchResults';
import Watchlist from './components/Watchlist';
import MovieCard from "./MovieCard/MovieCard"; // Import MovieCard component

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

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Splash Screen */}
        <Route path="/" element={<SplashScreen />} />

        {/* Route for Home Screen */}
        <Route path="/home" element={<HomeScreen />} />

        {/* Route for Search Results */}
        <Route path="/search" element={<SearchResults />} />

        {/* Route for Movie Card */}
        <Route path="/movies" element={<MovieCard movies={mockMovies} />} /> 

        {/* Route for Watchlist */}
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Router>
  );
};

export default App;
