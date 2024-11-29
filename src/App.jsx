import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./pages/HomeScreen";
import GenrePage from "./pages/GenrePage";
import TrendingPage from "./pages/TrendingPage";
import SearchResults from "./pages/SearchResults";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar"; // Global Navbar component
import Footer from "./components/Footer"; // Global Footer component
import Slideshow from "./components/Slideshow";
import Watchlist from "./pages/Watchlist";



const API_KEY = "f4e3711c";
const API_URL = "https://www.omdbapi.com/?s=popular&type=movie&apikey=" + API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL); // Perform the fetch request
        const data = await response.json(); // Convert response to JSON

        if (data.Response === "True") {
          setMovies(data.Search); // Update state with fetched movies
        } else {
          setError(data.Error); // Handle API error response
        }
      } catch (error) {
        setError("Error fetching data."); // Handle other errors
      } finally {
        setLoading(false); // Finished loading
      }
    };

    fetchMovies(); // Call the function to fetch movies
  }, []); // Empty dependency array ensures it runs only once

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      // Avoid duplicate entries
      if (!prevWatchlist.find((item) => item.imdbID === movie.imdbID)) {
        return [...prevWatchlist, movie];
      }
      return prevWatchlist;
    });
  };

  if (loading) return <div>Loading...</div>; // Show loading text
  if (error) return <div>{error}</div>; // Show error message

  return (
    <>
      <Navbar /> {/* Global Navbar */}
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/search" element={<SearchResults movies={movies} />} /> {/* Pass movies to SearchResults */}
        <Route 
          path="/movies" 
          element={
            <div className="movie-container">
              <MovieCard movies={movies} />
            </div>
          } 
        />
        <Route path="/genres" element={<GenrePage movies={movies} />} /> {/* Pass movies to GenrePage */}
        <Route path="/trending" element={<TrendingPage movies={movies} />} /> {/* Pass movies to TrendingPage */}
        <Route path="/watchlist"
        element={<Watchlist watchlist={watchlist} />} /> {/* Pass watchlist to Watchlist page */}
      </Routes>
      <Footer /> {/* Global Footer */}
    </>
  );
};



export default App;
