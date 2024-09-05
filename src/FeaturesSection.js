import React from 'react';
import FeatureBox from './FeatureBox';
import './FeaturesSection.css';


import iconDataAvailability from './link-chain-10474.png';
import iconBitcoinMining from './bitcoin.png';
import iconSmartContracts from './eth.webp';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <FeatureBox
        icon={iconDataAvailability}
        title="Data Availability"
        subtitle="Proof of Data Availability (PoDA) Secured by Bitcoin"
        description="Fortify your network with Bitcoin security and streamline your rollup stack while reducing L1 settlement cost."
      />
      <FeatureBox
        icon={iconBitcoinMining}
        title="Bitcoin Mining"
        subtitle="First-of-its-kind security for EVM contracts"
        description="Learn more about how Syscoin is merged-mined with Bitcoin to provide state-of-the-art security to EVM Smart Contracts."
      />
      <FeatureBox
        icon={iconSmartContracts}
        title="Smart Contracts"
        subtitle="Super fast EVM execution and solidity-based coding"
        description="Syscoin EVM contracts are based in solidity, allowing you and your team to seamlessly integrate into your latest project."
      />
    </section>
  );
};

export default FeaturesSection;
