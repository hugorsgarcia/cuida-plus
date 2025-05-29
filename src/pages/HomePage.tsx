import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importe useLocation
import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import FeatureSection from '../components/home/FeatureSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  const location = useLocation(); // Obtenha o objeto location

  useEffect(() => {
    // Verifique se há um hash na URL e role para o elemento correspondente
    // Isso garante que, ao carregar a página, o usuário seja levado ao elemento correto
    // quando a URL contiver um hash (por exemplo, #como-funciona)
    if (location.hash) {
      // Remove o '#' do hash e encontra o elemento correspondente
      // e rola suavemente para ele com scrollIntoView
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Re-execute o efeito quando a location (incluindo o hash) mudar

  return (
    <div>
      <HeroSection />
      <HowItWorks /> {/* Seu componente com id="como-funciona" */}
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default HomePage;