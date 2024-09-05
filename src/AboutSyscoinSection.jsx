import React from 'react';
import './AboutSyscoinSection.css';


import icon1 from './gear.svg'; 
import icon2 from './bulb.svg'; 
import icon3 from './layer.svg'; 

const AboutSyscoinSection = () => {
  return (
    <section className="about-syscoin">
      <h2>A little more about <span className="highlight">Syscoin</span></h2>
      <div className="about-cards">
        <div className="card">
          <img src={icon1} alt="Blockchain Icon" className="card-icon" />
          <p>Blockchain as a coordinated global Von Neumann architecture</p>
        </div>
        <div className="card">
          <img src={icon2} alt="Idea Icon" className="card-icon" />
          <p>Blockchain Idealisms</p>
        </div>
        <div className="card">
          <img src={icon3} alt="Layer Icon" className="card-icon" />
          <p>Syscoin and The Ideal Layer-1 Design</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSyscoinSection;
