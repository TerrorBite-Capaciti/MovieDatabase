import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png'; // Make sure the logo file is in the correct directory

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Play the speech synthesis (Text-to-Speech) sound saying "FlickFinder"
    const utterance = new SpeechSynthesisUtterance('FlickFinder');
    utterance.pitch = 1.5; // Adjust the pitch for the desired sound
    utterance.rate = 1.2;  // Speed of the voice
    utterance.volume = 1;  // Volume (0.0 to 1.0)
    
    // Speak the phrase "FlickFinder"
    window.speechSynthesis.speak(utterance);

    // Timeout for navigating to the home screen after the splash screen
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000); // 5 seconds timeout

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="logo">
        <img src={logo} alt="FlickFndr Logo" className="logo-image" />
      </div>
      <div className="particles"></div> {/* Particle container */}
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
    position: relative;
    animation: fadeIn 3s ease-in-out, scaleUp 2s ease-in-out;
    overflow: hidden;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: textSlideIn 2s ease-in-out;
  }

  .logo-image {
    max-width: 500px; /* Increased logo size */
    animation: logoBounce 1s infinite, glow 1.5s infinite alternate, float 3s ease-in-out infinite;
  }

  /* Glowing text and logo animation */
  @keyframes float {
    0% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 5px #19FB7, 0 0 10px #19FB7, 0 0 15px #19FB7;
    }
    100% {
      box-shadow: 0 0 20px #19FB7, 0 0 30px #19FB7, 0 0 50px #19FB7;
    }
  }

  @keyframes textSlideIn {
    0% {
      transform: translateY(-30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.3));
    animation: particleMove 5s infinite;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes particleMove {
    0% {
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.6));
    }
    50% {
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.4));
    }
    100% {
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.6));
    }
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);
