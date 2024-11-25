// SplashScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png'

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // 3 seconds timeout

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="logo">
        <img src={logo} alt="FlickFndr Logo" className="logo-image" />
        <h1>FlickFndr</h1>
      </div>
    </div>
  );
};

export default SplashScreen;

// SplashScreen Styling (included within the file)
const styles = `
  .splash-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #050000;
    animation: fadeIn 5s ease-in-out;
    text-align: center;
  }

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #19FB7;
    font-size: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .logo-image {
    max-width: 200px;
    margin-bottom: 20px;
    animation: glow 1.5s infinite alternate;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 5px #19FB7, 0 0 10px #19FB7, 0 0 15px #19FB7;
    }
    100% {
      box-shadow: 0 0 15px #19FB7, 0 0 25px #19FB7, 0 0 30px #19FB7;
    }
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);
