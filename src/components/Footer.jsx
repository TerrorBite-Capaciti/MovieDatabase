import React from 'react';
import { Link } from 'react-router-dom';
//import './styles/components.css';
import '../styles/components.css'   // styling for footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} FlickFndr. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

