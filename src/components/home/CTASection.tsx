import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para encontrar o cuidador perfeito?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Junte-se a milhares de famílias que já encontraram o cuidador ideal para seus entes queridos.
              Comece sua busca hoje mesmo e proporcione o melhor cuidado possível.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/cadastro" 
                className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-medium transition-all"
              >
                Cadastre-se Gratuitamente
              </Link>
              <Link 
                to="/como-funciona" 
                className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full"></div>
              <img 
                src="https://images.pexels.com/photos/7551661/pexels-photo-7551661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Cuidador e idoso" 
                className="relative z-10 rounded-xl shadow-lg object-cover h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;