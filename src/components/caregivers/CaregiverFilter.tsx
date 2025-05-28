import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { FilterOptions } from '../../lib/types';

interface CaregiverFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const CaregiverFilter: React.FC<CaregiverFilterProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    location: '',
    specialization: '',
    gender: '',
    priceRange: [0, 100],
    minRating: 0,
    onlyVerified: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      setFilters({
        ...filters,
        [name]: (e.target as HTMLInputElement).checked
      });
    } else if (name === 'minPrice' || name === 'maxPrice') {
      const priceIndex = name === 'minPrice' ? 0 : 1;
      const newPriceRange = [...filters.priceRange];
      newPriceRange[priceIndex] = Number(value);
      
      setFilters({
        ...filters,
        priceRange: newPriceRange as [number, number]
      });
    } else {
      setFilters({
        ...filters,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const clearFilters = () => {
    const resetFilters = {
      location: '',
      specialization: '',
      gender: '',
      priceRange: [0, 100],
      minRating: 0,
      onlyVerified: false
    };
    
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      {/* Search Bar - Always Visible */}
      <div className="p-4 border-b border-gray-100">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="relative flex-grow">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="location"
              placeholder="Buscar por localização..."
              value={filters.location}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary"
            />
          </div>
          
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
          >
            <Filter size={20} className="text-gray-700" />
          </button>
          
          <button 
            type="submit"
            className="btn-primary"
          >
            Buscar
          </button>
        </form>
      </div>
      
      {/* Filter Section - Responsive */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block border-b border-gray-100 p-4`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-800 flex items-center">
            <Filter size={18} className="mr-2" />
            Filtros
          </h3>
          
          <div className="flex items-center gap-3">
            <button 
              type="button" 
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-primary flex items-center"
            >
              <X size={14} className="mr-1" />
              Limpar
            </button>
            
            <button 
              type="button"
              onClick={() => setIsOpen(false)}
              className="md:hidden"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Especialização
            </label>
            <select
              name="specialization"
              value={filters.specialization}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary"
            >
              <option value="">Todas</option>
              <option value="Alzheimer">Alzheimer</option>
              <option value="Parkinson">Parkinson</option>
              <option value="Mobilidade Reduzida">Mobilidade Reduzida</option>
              <option value="Pós-operatório">Pós-operatório</option>
              <option value="Cuidados Paliativos">Cuidados Paliativos</option>
              <option value="Diabetes">Diabetes</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gênero
            </label>
            <select
              name="gender"
              value={filters.gender}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary"
            >
              <option value="">Todos</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preço por hora
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                min="0"
                value={filters.priceRange[0]}
                onChange={handleChange}
                className="w-full py-2 px-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                min="0"
                value={filters.priceRange[1]}
                onChange={handleChange}
                className="w-full py-2 px-3 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="onlyVerified"
            name="onlyVerified"
            checked={filters.onlyVerified}
            onChange={handleChange}
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="onlyVerified" className="ml-2 block text-sm text-gray-700">
            Mostrar apenas cuidadores verificados
          </label>
        </div>
      </div>
    </div>
  );
};

export default CaregiverFilter;