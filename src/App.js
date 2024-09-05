import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutSyscoinSection from './AboutSyscoinSection'
import DataAvailabilitySection from './DataAvailabilitySection'
import NodeInfoSection from './NodeInfoSection'
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DataAvailabilitySection/>
      <NodeInfoSection/>
      <AboutSyscoinSection />
      <Footer />
    </div>
  );
}

export default App;
