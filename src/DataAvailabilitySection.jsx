import React from 'react';
import './DataAvailabilitySection.css';
import dataImage from './box.svg'; 

const DataAvailabilitySection = () => {
  return (
    <section className="data-availability">
      <div className="data-content">
        <h2>
          <span className="highlight-main">Multi-layered</span> <span className="highlight-secondary">Data Availability</span>
        </h2>
        <p>
          With Syscoin’s PoDA, the network is ready to serve critical applications. With zkDA coming soon, rollups will interconnect and unite with Bitcoin. DA Rollups may be used to increase the throughput, giving a notion of multiple layers of DA available on SYS.
        </p>
        <ul>
          <li>Secured by Bitcoin’s PoW</li>
          <li>Quantum Secure</li>
          <li>Cheaper Transactions</li>
          <li>Infinite Throughput</li>
          <li>More network resilience</li>
        </ul>
        <a href="/" className="learn-more">Learn more &gt;</a>
      </div>
      <div className="data-image">
        <img src={dataImage} alt="Multi-layered Data Illustration" />
      </div>
    </section>
  );
};

export default DataAvailabilitySection;
