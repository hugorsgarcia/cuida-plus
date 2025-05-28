import React from 'react';
import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import FeatureSection from '../components/home/FeatureSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default HomePage;