import React, { useState, useEffect } from "react";
import "../styles/Slideshow.css";

const Slideshow = () => {
  const movies = [
    "/assets/sq.jpg",
    "/assets/luci.jpg",
    "/assets/wicked.jpeg",
    "/assets/movie4.png",
    "/assets/the lion.jpg",
    "/assets/blood.jpg",
    "/assets/movie7.png",
    "/assets/movie8.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [movies.length]);

  return (
    <div className="slideshow">
      {movies.map((movie, index) => (
        <div
          className={`slide ${index === currentSlide ? "active" : ""}`}
          key={index}
        >
          <img
            src={movie}
            alt={`Movie ${index + 1}`}
            loading="lazy" // Add lazy loading
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;