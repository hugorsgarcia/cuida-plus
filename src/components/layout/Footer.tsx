import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2">
              <Heart size={24} className="text-primary fill-primary" />
              <span className="text-xl font-bold text-primary">Cuida<span className="text-secondary">+</span></span>
            </div>
            <p className="mt-4 text-gray-600">
              Conectamos cuidadores qualificados a famílias que precisam de assistência para seus entes queridos.
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Explorar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-gray-600 hover:text-primary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/cuidadores" className="text-gray-600 hover:text-primary transition-colors">
                  Encontrar Cuidadores
                </Link>
              </li>
              <li>
                <Link to="/cadastro" className="text-gray-600 hover:text-primary transition-colors">
                  Cadastre-se
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-gray-600 hover:text-primary transition-colors">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-600 hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-600">(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-600">contato@cuidamais.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-gray-600">Av. Paulista, 1000, São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cuida+. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;