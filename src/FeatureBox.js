import React from 'react';
import './FeatureBox.css';

const FeatureBox = ({ icon, title, subtitle, description }) => {
  return (
    <div className="feature-box">
      <div className="feature-icon">
        <img src={icon} alt={`${title} Icon`} />
      </div>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <h4 className="feature-subtitle">{subtitle}</h4>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
