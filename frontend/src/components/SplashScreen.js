// SplashScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

const SplashScreen = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Set timeout to navigate after 3 seconds
    const timer = setTimeout(() => {
      navigate('/home'); // Redirect to HomeScreen after 3 seconds
    }, 3000); // 3000ms = 3 seconds

    // Clean up timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]); // Dependency array ensures it only runs once

  return (
    <div
      className="splash-screen flex justify-center items-center h-screen bg-[#050000]"
      style={{ backgroundColor: '#050000' }}
    >
      <div
        className="logo text-white font-bold text-5xl"
        style={{ color: '#19FB7' }}
      >
        MovieDB
      </div>
    </div>
  );
};

export default SplashScreen;
