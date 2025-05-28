import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Cadastre-se no Cuida+</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;