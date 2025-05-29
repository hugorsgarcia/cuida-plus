import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const [userType, setUserType] = useState<'client' | 'caregiver'>('client');
  
  // Lista de estados brasileiros para o dropdown
  const brazilianStates = [
    { value: 'AC', label: 'Acre' }, { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' }, { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' }, { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' }, { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' }, { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' }, { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' }, { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' }, { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' }, { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' }, { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' }, { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' }, { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' }, { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' }
  ];

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
              <div> {/* Especialidades */}
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
              
              {/* START OF NEW FIELDS */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-lg font-medium text-gray-800 mt-4 mb-0">Endereço Completo</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Rua</label>
                  <input type="text" name="street" id="street" placeholder="Av. Brasil" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required />
                </div>
                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                  <input type="text" name="number" id="number" placeholder="123" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="complement" className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
                  <input type="text" name="complement" id="complement" placeholder="Apto 101, Bloco A" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                  <input type="text" name="neighborhood" id="neighborhood" placeholder="Centro" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                  <input type="text" name="city" id="city" placeholder="Rio de Janeiro" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                  <select name="state" id="state" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required>
                    <option value="">Selecione o Estado</option>
                    {brazilianStates.map(state => (
                      <option key={state.value} value={state.value}>{state.label}</option>
                    ))}
                  </select>
                </div>
              </div>
               <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                  <input type="text" name="zipCode" id="zipCode" placeholder="00000-000" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required />
                </div>


              <div className="col-span-1 md:col-span-2">
                <h3 className="text-lg font-medium text-gray-800 mt-4 mb-0">Informações Pessoais</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
                  <input type="date" name="dateOfBirth" id="dateOfBirth" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required />
                </div>
                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                  <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary" required />
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <h3 className="text-lg font-medium text-gray-800 mt-4 mb-0">Documentos</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="idDocument" className="block text-sm font-medium text-gray-700 mb-1">Doc. de Identificação (RG/CNH)</label>
                  <input 
                    type="file" 
                    name="idDocument" 
                    id="idDocument" 
                    className="w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-primary focus:border-primary file:mr-3 file:py-2 file:px-3 file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" 
                    accept="image/*,.pdf" 
                    required 
                  />
                  <p className="mt-1 text-xs text-gray-500">Envie imagem ou PDF (max. 5MB).</p>
                </div>
                <div>
                  <label htmlFor="proofOfResidence" className="block text-sm font-medium text-gray-700 mb-1">Comprovante de Residência</label>
                  <input 
                    type="file" 
                    name="proofOfResidence" 
                    id="proofOfResidence" 
                    className="w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-primary focus:border-primary file:mr-3 file:py-2 file:px-3 file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" 
                    accept="image/*,.pdf" 
                    required 
                  />
                  <p className="mt-1 text-xs text-gray-500">Conta de água, luz, etc. (max. 5MB).</p>
                </div>
              </div>
              {/* END OF NEW FIELDS */}
              
              <div> {/* Valor por Hora */}
                <label className="block text-sm font-medium text-gray-700 mb-1">Valor por Hora (R$)</label>
                <input
                  type="number"
                  min="0"
                  step="5"
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="50"
                />
              </div>
              
              <div> {/* Experiência */}
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