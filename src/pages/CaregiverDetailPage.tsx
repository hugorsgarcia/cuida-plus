import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caregivers } from '../data/caregivers';
import { MapPin, Clock, Calendar, Send, Phone, ArrowLeft, Calendar as CalendarIcon } from 'lucide-react';
import StarRating from '../components/ui/StarRating';
import VerifiedBadge from '../components/ui/VerifiedBadge';
import CaregiverReviews from '../components/caregivers/CaregiverReviews';

const CaregiverDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'about' | 'reviews'>('about');
  
  const caregiver = caregivers.find(c => c.id === id);
  
  if (!caregiver) {
    return (
      <div className="container-custom py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Cuidador não encontrado</h2>
        <p className="mb-6">O cuidador que você está procurando não foi encontrado.</p>
        <Link to="/cuidadores" className="btn-primary">
          Voltar para a lista de cuidadores
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container-custom">
        <Link to="/cuidadores" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Voltar para cuidadores
        </Link>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-primary to-secondary">
            <div className="absolute -bottom-16 left-8">
              <div className="rounded-full border-4 border-white overflow-hidden h-32 w-32 shadow-md">
                <img 
                  src={caregiver.photo} 
                  alt={caregiver.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="pt-20 pb-6 px-8">
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">{caregiver.name}</h1>
                  {caregiver.isVerified && <VerifiedBadge />}
                </div>
                
                <div className="flex items-center mt-2">
                  <MapPin size={16} className="text-gray-500 mr-1" />
                  <span className="text-gray-500">{caregiver.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {caregiver.specializations.map((spec, index) => (
                    <span 
                      key={index} 
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-bold text-2xl text-gray-900">
                  R${caregiver.hourlyRate}<span className="text-base font-normal text-gray-500">/hora</span>
                </div>
                
                <div className="flex items-center mt-1 mb-3">
                  <StarRating rating={caregiver.rating} size={20} />
                  <span className="text-sm text-gray-500 ml-2">({caregiver.reviewCount} avaliações)</span>
                </div>
                
                <button className="w-full btn-primary mb-2">
                  Entrar em contato
                </button>
                <button className="w-full btn-outline flex items-center justify-center">
                  <Phone size={16} className="mr-2" />
                  Solicitar ligação
                </button>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex border-b">
              <button 
                className={`flex-1 py-4 font-medium text-center ${
                  activeTab === 'about' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('about')}
              >
                Sobre
              </button>
              <button 
                className={`flex-1 py-4 font-medium text-center ${
                  activeTab === 'reviews' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Avaliações ({caregiver.reviewCount})
              </button>
            </div>
            
            <div className="p-8">
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Sobre {caregiver.name}</h2>
                    <p className="text-gray-700 whitespace-pre-line">{caregiver.bio}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Experiência</h2>
                    <div className="flex items-center text-gray-700">
                      <Clock size={18} className="mr-2 text-primary" />
                      <span>{caregiver.experience} anos de experiência como cuidador</span>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Disponibilidade</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <CalendarIcon size={18} className="mr-2 text-primary" />
                        <span>Disponível em: <strong>Seg - Sex</strong></span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={18} className="mr-2 text-primary" />
                        <span>Horário: <strong>08:00 - 18:00</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && <CaregiverReviews caregiverId={caregiver.id} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverDetailPage;