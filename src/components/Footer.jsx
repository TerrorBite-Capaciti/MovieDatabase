import React from 'react';
import { Link } from 'react-router-dom';
//import './styles/components.css';
import '../styles/components.css'   // styling for footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} FlickFndr. All rights reserved.</p><br></br>
        <div className="footer-info">
          <p>FlickFndr - Search Movies and Tv Shows. This is the best page to search full HD Movies and TV Shows online<br></br>wherever you are. FlickFndr has the largest catalog of movies updated daily.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

