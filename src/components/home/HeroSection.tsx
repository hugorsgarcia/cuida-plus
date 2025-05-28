import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Clock, Award } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/7551651/pexels-photo-7551651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
      <div className="container-custom py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Encontre o <span className="text-primary">cuidador ideal</span> para seu ente querido
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              O Cuida+ conecta famílias a cuidadores profissionais de idosos de forma segura e confiável. 
              Encontre ajuda especializada para necessidades específicas.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/cuidadores" className="btn-primary text-base px-6 py-3">
                Encontrar Cuidadores
              </Link>
              <Link to="/cadastro" className="btn-outline text-base px-6 py-3">
                Sou Cuidador
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-3 mb-2">
                  <Shield size={20} className="text-primary" />
                </div>
                <span className="text-sm text-gray-700">Profissionais Verificados</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-3 mb-2">
                  <Award size={20} className="text-primary" />
                </div>
                <span className="text-sm text-gray-700">Qualidade Garantida</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-3 mb-2">
                  <Clock size={20} className="text-primary" />
                </div>
                <span className="text-sm text-gray-700">Agendamento Flexível</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 rounded-full p-3 mb-2">
                  <Search size={20} className="text-primary" />
                </div>
                <span className="text-sm text-gray-700">Busca Personalizada</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7551590/pexels-photo-7551590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Cuidador e idoso" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;