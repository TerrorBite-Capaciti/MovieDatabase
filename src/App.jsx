import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./pages/HomeScreen";
import SearchResults from "./pages/SearchResults";
import MovieCard from "./MovieCard/MovieCard";
import Navbar from "./components/Navbar"; // Corrected import

const API_KEY = "f4e3711c";
const API_URL = "https://www.omdbapi.com/?s=popular&type=movie&apikey=" + API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL); // Perform the fetch request
        const data = await response.json(); // Convert response to JSON

        if (data.Response === "True") {
          setMovies(data.Search); // Update state with fetched movies
        } else {
          console.error("Error fetching movies:", data.Error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies(); // Call the function to fetch movies
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <Navbar /> {/* Added Navbar component */}
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movies" element={<MovieCard movies={movies} />} />
      </Routes>
    </>
  );
};

export default App;
