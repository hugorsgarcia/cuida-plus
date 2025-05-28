import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart size={28} className="text-primary fill-primary" />
            <span className="text-xl font-bold text-primary">Cuida<span className="text-secondary">+</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Início
            </Link>
            <Link to="/como-funciona" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Como Funciona
            </Link>
            <Link to="/cuidadores" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Cuidadores
            </Link>
            <Link to="/cadastro" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Cadastre-se
            </Link>
            <Link to="/login" className="btn-outline">
              Entrar
            </Link>
            <Link to="/cadastro" className="btn-primary">
              Começar
            </Link>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/como-funciona" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Como Funciona
              </Link>
              <Link 
                to="/cuidadores" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Cuidadores
              </Link>
              <Link 
                to="/cadastro" 
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Cadastre-se
              </Link>
              <div className="flex space-x-3">
                <Link 
                  to="/login" 
                  className="btn-outline flex-1"
                  onClick={() => setIsOpen(false)}
                >
                  Entrar
                </Link>
                <Link 
                  to="/cadastro" 
                  className="btn-primary flex-1 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Começar
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;