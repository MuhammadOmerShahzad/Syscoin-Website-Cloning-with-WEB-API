import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import heroImage from './hero-img.svg'; 

const HeroSection = () => {
  const texts = ['Execution Layer', 'Data Availability Layer', 'Network'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeClass('fade-in');
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={heroImage} alt="Network Illustration" />
        </div>
        <div className="hero-text">
          <h1>
            <span className="highlight">Bitcoin’s</span> Only Modular
          </h1>
          <h2 className={`changing-line ${fadeClass}`}>{texts[currentTextIndex]}</h2>
          <p>
            A Bitcoin-Powered ecosystem securing rollups with unmatched data availability and scalability.
          </p>
          <div className="hero-buttons">
            <button className="btn learn-btn">Learn About Syscoin</button>
            <button className="btn discord-btn">Join Discord</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
