import React from 'react';
import { MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Caregiver } from '../../lib/types';
import StarRating from '../ui/StarRating';
import VerifiedBadge from '../ui/VerifiedBadge';

interface CaregiverCardProps {
  caregiver: Caregiver;
}

const CaregiverCard: React.FC<CaregiverCardProps> = ({ caregiver }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative">
        <img 
          src={caregiver.photo} 
          alt={caregiver.name} 
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
          <Heart size={20} className="text-gray-400 hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold">{caregiver.name}</h3>
          {caregiver.isVerified && <VerifiedBadge />}
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{caregiver.location}</span>
        </div>
        
        <div className="mb-3">
          <StarRating rating={caregiver.rating} />
          <span className="text-sm text-gray-500 ml-2">({caregiver.reviewCount} avaliações)</span>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {caregiver.specializations.map((spec, index) => (
              <span 
                key={index} 
                className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{caregiver.bio}</p>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="font-semibold text-lg">
            R${caregiver.hourlyRate}<span className="text-sm text-gray-500 font-normal">/hora</span>
          </div>
          <Link 
            to={`/cuidadores/${caregiver.id}`} 
            className="btn-primary"
          >
            Ver Perfil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaregiverCard;