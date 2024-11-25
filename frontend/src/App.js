// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import for React Router v6
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import SearchResults from './components/SearchResults';
import Watchlist from './components/Watchlist';

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

        {/* Route for Watchlist */}
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Router>
  );
};

export default App;
