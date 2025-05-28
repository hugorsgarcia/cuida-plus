import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxStars = 5,
  size = 16 
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center">
      {Array.from({ length: maxStars }).map((_, i) => {
        if (i < fullStars) {
          return (
            <Star
              key={i}
              size={size}
              className="text-yellow-500 fill-yellow-500"
            />
          );
        } else if (i === fullStars && hasHalfStar) {
          return (
            <div key={i} className="relative">
              <Star size={size} className="text-gray-300" />
              <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                <Star size={size} className="text-yellow-500 fill-yellow-500" />
              </div>
            </div>
          );
        } else {
          return <Star key={i} size={size} className="text-gray-300" />;
        }
      })}
      <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;