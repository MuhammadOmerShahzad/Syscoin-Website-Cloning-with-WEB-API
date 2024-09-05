import React from 'react';
import './Footer.css';


import facebookIcon from './facebook.png';
import twitterIcon from './twitter.png';  
import linkedinIcon from './linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">About Us</a>
        <a href="/">Contact</a>
        <a href="/">Privacy Policy</a>
      </div>
      <div className="footer-social">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
