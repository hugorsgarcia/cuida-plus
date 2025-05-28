import React from 'react';
import { Shield, Search, Star, Award, Clock, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Profissionais Verificados',
    description: 'Todos os cuidadores passam por um rigoroso processo de verificação de antecedentes e credenciais.'
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'Busca Personalizada',
    description: 'Encontre cuidadores com base em localização, especialização, preço e disponibilidade.'
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Sistema de Avaliação',
    description: 'Consulte avaliações e comentários reais de outras famílias sobre os cuidadores.'
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Cuidadores Qualificados',
    description: 'Acesso a profissionais com formação específica para cuidados com idosos.'
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Agendamento Flexível',
    description: 'Contrate cuidadores para períodos curtos ou longos, conforme sua necessidade.'
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: 'Especialidades Diversas',
    description: 'Cuidadores especializados em Alzheimer, Parkinson, mobilidade reduzida e mais.'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por Que Escolher o <span className="text-primary">Cuida+</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Nossa plataforma oferece benefícios exclusivos para garantir o melhor cuidado para seus entes queridos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="bg-primary/10 rounded-full inline-flex p-3 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;