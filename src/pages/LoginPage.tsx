import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Entrar no Cuida+</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;