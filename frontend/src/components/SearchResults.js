// SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query'); // Get the search query

  return (
    <div className="search-results">
      <h1>Search Results for "{query}"</h1>
      {/* Add logic to display results based on query */}
    </div>
  );
};

export default SearchResults;
