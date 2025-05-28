import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Bem-vindo de volta</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            placeholder="seu@email.com"
            required
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <Link to="/recuperar-senha" className="text-xs text-primary hover:underline">
              Esqueceu sua senha?
            </Link>
          </div>
          <input
            type="password"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            placeholder="Sua senha"
            required
          />
        </div>
        
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Lembrar de mim
          </label>
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full btn-primary py-3"
          >
            Entrar
          </button>
        </div>
      </form>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Ou continue com</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Google
          </button>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Facebook
          </button>
        </div>
      </div>
      
      <p className="mt-6 text-center text-sm text-gray-600">
        Não tem uma conta? <Link to="/cadastro" className="text-primary font-semibold">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default LoginForm;