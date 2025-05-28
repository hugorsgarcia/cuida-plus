import React, { useState, useEffect } from 'react';
import { caregivers } from '../data/caregivers';
import CaregiverCard from '../components/caregivers/CaregiverCard';
import CaregiverFilter from '../components/caregivers/CaregiverFilter';
import { Caregiver, FilterOptions } from '../lib/types';

const CuidadoresPage: React.FC = () => {
  const [filteredCaregivers, setFilteredCaregivers] = useState<Caregiver[]>(caregivers);
  
  const handleFilterChange = (filters: FilterOptions) => {
    let filtered = [...caregivers];
    
    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(caregiver => 
        caregiver.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    // Filter by specialization
    if (filters.specialization) {
      filtered = filtered.filter(caregiver => 
        caregiver.specializations.includes(filters.specialization)
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(caregiver => 
      caregiver.hourlyRate >= filters.priceRange[0] && 
      caregiver.hourlyRate <= filters.priceRange[1]
    );
    
    // Filter by minimum rating
    if (filters.minRating > 0) {
      filtered = filtered.filter(caregiver => caregiver.rating >= filters.minRating);
    }
    
    // Filter by verification status
    if (filters.onlyVerified) {
      filtered = filtered.filter(caregiver => caregiver.isVerified);
    }
    
    setFilteredCaregivers(filtered);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Encontre Cuidadores</h1>
          <p className="text-gray-600">
            Busque entre nossos cuidadores qualificados e encontre o profissional perfeito para suas necessidades.
          </p>
        </div>
        
        <CaregiverFilter onFilterChange={handleFilterChange} />
        
        {filteredCaregivers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaregivers.map(caregiver => (
              <CaregiverCard key={caregiver.id} caregiver={caregiver} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-medium mb-2">Nenhum cuidador encontrado</h3>
            <p className="text-gray-600">
              Não encontramos cuidadores com os filtros selecionados. Por favor, tente ajustar seus critérios de busca.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CuidadoresPage;