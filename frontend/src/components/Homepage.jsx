import React from 'react';
import HeroSection from './HeroSection';
import FooterSection from './FooterSection';
import Register from '../pages/register';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Register />
      <FooterSection />
    </div>
  )
}

export default Homepage;