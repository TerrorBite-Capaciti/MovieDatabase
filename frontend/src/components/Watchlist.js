// Watchlist.js
import React from 'react';

const Watchlist = () => {
  const watchlist = []; // Placeholder for watchlist items

  return (
    <div className="watchlist">
      <h1>Your Watchlist</h1>
      <div className="watchlist-items">
        {watchlist.length === 0 ? (
          <p>Your watchlist is empty</p>
        ) : (
          watchlist.map((item, index) => (
            <div className="watchlist-item" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Watchlist;

// Watchlist Styling (included within the file)
const watchlistStyles = `
  .watchlist {
    background-color: #050000;
    color: #fff;
    padding: 20px;
  }

  .watchlist-items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .watchlist-item {
    background-color: #909292;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    width: 200px;
    transition: transform 0.3s ease;
  }

  .watchlist-item:hover {
    transform: scale(1.05);
  }

  .watchlist-item img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .watchlist-item h3 {
    color: #fff;
    font-size: 1rem;
    margin-top: 10px;
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${watchlistStyles}</style>`);
