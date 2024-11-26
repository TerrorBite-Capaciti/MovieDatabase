import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [searchResult, setSearchResult] = useState(null);

  return (
    <div className="home-page">
      <h1>Movie Database</h1>
      <SearchBar onSearch={setSearchResult} />
      {searchResult ? (
        <MovieCard movie={searchResult} />
      ) : (
        <p>Start searching to discover movies and TV shows!</p>
      )}
    </div>
  );
};

export default HomePage;
