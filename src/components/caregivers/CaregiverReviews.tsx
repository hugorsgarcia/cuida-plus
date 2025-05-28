import React from 'react';
import { reviews } from '../../data/reviews';
import StarRating from '../ui/StarRating';

interface CaregiverReviewsProps {
  caregiverId: string;
}

const CaregiverReviews: React.FC<CaregiverReviewsProps> = ({ caregiverId }) => {
  const caregiverReviews = reviews.filter(review => review.caregiverId === caregiverId);
  
  if (caregiverReviews.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-500">Este cuidador ainda não possui avaliações.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {caregiverReviews.map((review) => {
        const date = new Date(review.date);
        const formattedDate = date.toLocaleDateString('pt-BR', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        });
        
        return (
          <div key={review.id} className="bg-white rounded-lg shadow-sm p-6 transition-shadow hover:shadow-md">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold">{review.clientName}</h4>
                <p className="text-sm text-gray-500">{formattedDate}</p>
              </div>
              <StarRating rating={review.rating} />
            </div>
            
            <p className="text-gray-700">{review.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CaregiverReviews;