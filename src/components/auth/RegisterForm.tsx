import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const [userType, setUserType] = useState<'client' | 'caregiver'>('client');
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex border-b">
        <button
          className={`flex-1 py-4 font-medium text-center transition-colors ${
            userType === 'client' 
            ? 'bg-primary text-white' 
            : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
          }`}
          onClick={() => setUserType('client')}
        >
          Família/Contratante
        </button>
        <button
          className={`flex-1 py-4 font-medium text-center transition-colors ${
            userType === 'caregiver' 
            ? 'bg-primary text-white' 
            : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
          }`}
          onClick={() => setUserType('caregiver')}
        >
          Cuidador
        </button>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">
          {userType === 'client' ? 'Cadastre-se como Contratante' : 'Cadastre-se como Cuidador'}
        </h2>
        
        <form className="space-y-4">
          {/* Basic Information - Both Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input
                type="text"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <input
                type="password"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Sua senha"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Senha</label>
              <input
                type="password"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Confirme sua senha"
                required
              />
            </div>
          </div>

          {/* Conditional Fields - Caregiver */}
          {userType === 'caregiver' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Especialidades</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['Alzheimer', 'Parkinson', 'Mobilidade Reduzida', 'Pós-operatório', 'Diabetes', 'Cuidados Paliativos'].map((spec) => (
                    <div key={spec} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`spec-${spec}`}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={`spec-${spec}`} className="ml-2 text-sm text-gray-700">
                        {spec}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Valor por Hora (R$)</label>
                <input
                  type="number"
                  min="0"
                  step="5"
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experiência</label>
                <textarea
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  rows={4}
                  placeholder="Descreva sua experiência como cuidador, formação e especialidades..."
                ></textarea>
              </div>
            </>
          )}

          {/* Conditional Fields - Client */}
          {userType === 'client' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Necessidades Específicas</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['Alzheimer', 'Parkinson', 'Mobilidade Reduzida', 'Pós-operatório', 'Diabetes', 'Cuidados Paliativos'].map((need) => (
                    <div key={need} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`need-${need}`}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={`need-${need}`} className="ml-2 text-sm text-gray-700">
                        {need}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Localização</label>
                <input
                  type="text"
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="Cidade, Estado"
                />
              </div>
            </>
          )}
          
          <div className="mt-2">
            <button
              type="submit"
              className="w-full btn-primary py-3"
            >
              Cadastrar
            </button>
          </div>
          
          <p className="text-center text-sm text-gray-600">
            Já tem uma conta? <Link to="/login" className="text-primary font-semibold">Faça login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;