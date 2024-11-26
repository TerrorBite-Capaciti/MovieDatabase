import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();
  const logo = '/assets/logo.png'; // Correct path to the logo in public/assets

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
