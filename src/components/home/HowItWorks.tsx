import React from 'react';
import { UserPlus, Search, Eye, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="h-8 w-8 text-white" />,
    title: 'Cadastre-se',
    description: 'Crie uma conta como família ou como cuidador profissional. O processo é rápido e seguro.'
  },
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: 'Encontre Cuidadores',
    description: 'Busque cuidadores por localização, especialização, preço e disponibilidade.'
  },
  {
    icon: <Eye className="h-8 w-8 text-white" />,
    title: 'Avalie Perfis',
    description: 'Veja detalhes, especialidades e avaliações dos cuidadores para escolher o melhor.'
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: 'Contrate',
    description: 'Entre em contato, agende uma entrevista e contrate o cuidador ideal para suas necessidades.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white\" id="como-funciona">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona o <span className="text-primary">Cuida+</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Encontrar o cuidador ideal para seu ente querido é fácil e seguro com nossa plataforma.
            Siga os passos abaixo para começar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-5 mb-6 shadow-lg">
                {step.icon}
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-2 left-full w-12 border-t-2 border-dashed border-primary/30 transform translate-x-4"></div>
                )}
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-gray-700 text-lg">
            Pronto para encontrar o cuidador perfeito para suas necessidades?
          </p>
          <a href="/cadastro" className="btn-primary text-base px-6 py-3 inline-block">
            Comece Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;