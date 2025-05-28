import { CheckCircle } from 'lucide-react';
import React from 'react';

const VerifiedBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
      <CheckCircle size={12} className="fill-green-500 text-white" />
      <span>Verificado</span>
    </div>
  );
};

export default VerifiedBadge;