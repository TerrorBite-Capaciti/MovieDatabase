// SearchResults.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  // Here you would fetch the search results from an API and render them
  const results = []; // Placeholder for actual search results

  return (
    <div className="search-results">
      <h1>Results for "{query}"</h1>
      <div className="results-grid">
        {results.length === 0 ? (
          <p>No results found</p>
        ) : (
          results.map((result, index) => (
            <div className="result-card" key={index}>
              <img src={result.image} alt={result.title} />
              <h3>{result.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;

// SearchResults Styling (included within the file)
const searchResultsStyles = `
  .search-results {
    background-color: #050000;
    color: #fff;
    padding: 20px;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .result-card {
    background-color: #909292;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    padding: 10px;
    transition: transform 0.3s ease;
  }

  .result-card:hover {
    transform: scale(1.05);
  }

  .result-card img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .result-card h3 {
    color: #fff;
    font-size: 1.1rem;
    margin-top: 10px;
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${searchResultsStyles}</style>`);
