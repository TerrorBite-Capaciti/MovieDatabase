import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./pages/HomeScreen";
import SearchResults from "./pages/SearchResults";
import MovieCard from "./MovieCard/MovieCard";


const API_KEY = "f4e3711c";
const API_URL = "https://www.omdbapi.com/?s=popular&type=movie&" + API_KEY;

//defined mock data for movies
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
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch data from OMDb API
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
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/search" element={<SearchResults />} />

    {/* Route for Movie Card */}
        <Route path="/movies" element={<MovieCard movies={movies} />} /> 
    </Routes>
  );
};

export default App;
