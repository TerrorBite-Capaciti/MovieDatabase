import React, { useState } from "react";
import { fetchMoviesByTitle } from "../api/omdb";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search term!");
      return;
    }
    const movieData = await fetchMoviesByTitle(searchQuery);
    if (movieData && movieData.Response === "True") {
      onSearch(movieData);
    } else {
      alert("No results found. Try another search!");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie or series..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;