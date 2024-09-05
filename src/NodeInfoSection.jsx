import React from 'react';
import './NodeInfoSection.css';
import circleImage from './circle.png'; 

const NodeInfoSection = () => {
  return (
    <section className="node-info-section">
      <div className="info-box">
        <h2>
          <span className="highlight-secondary">Finality</span> and <span className="highlight-primary">Rewards</span>
        </h2>
        <p className="bold-text">
          Our robust Sentry Node network provides full finality that boosts security.
        </p>
        <p>
          Syscoin has a mature node network that's supported by a wide community of holders. With a multi-quorum protocol, Syscoin Sentry Nodes add additional protection against state attacks.
        </p>
        <a href="/" className="learn-more">Learn more &gt;</a>
      </div>
      
      <div className="info-box">
        <h2>
          <span className="highlight-secondary">Decentralized</span> <span className="highlight-primary">Governance</span>
        </h2>
        <p className="bold-text">
          Syscoin’s Sentry Node network incentivizes long-term community engagement.
        </p>
        <p>
          With a ladder of seniority that matures over 2.5 years, Sentry Node holders are incentivized to maintain their collateral to support the network.
        </p>
        <a href="/" className="learn-more">Learn more &gt;</a>
      </div>

      <div className="info-box image-container">
        <div className="circle-image-wrapper">
          <img src={circleImage} alt="Circle with Nodes Info" className="circle-image" />
          <div className="circle-text">
            <span className="number">2564</span>
            <span className="description">Live Sentry Nodes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NodeInfoSection;
