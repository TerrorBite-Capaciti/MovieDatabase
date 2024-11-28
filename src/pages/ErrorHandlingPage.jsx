import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; 

const ErrorHandlingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Error Occurred</h1>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        Something went wrong. Please try again later.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.3s',
        }}
      >
        Retry
      </button>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <p>Suggestions:</p>
        <ul>
          <li>Check your internet connection</li>
          <li>Try reloading the page</li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorHandlingPage;
