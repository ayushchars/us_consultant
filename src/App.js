import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardsSection from './components/CardsSection';
import TrustedSection from './components/TrustedSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustedSection/>
      <Footer/>
    </div>
  );
};

export default App;
