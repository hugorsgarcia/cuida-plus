export interface Caregiver {
  id: string;
  name: string;
  photo: string;
  location: string;
  specializations: string[];
  experience: number;
  bio: string;
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  isVerified: boolean;
}

export interface Review {
  id: string;
  caregiverId: string;
  clientId: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'caregiver' | 'client';
}

export interface FilterOptions {
  location: string;
  specialization: string;
  gender: string;
  priceRange: [number, number];
  minRating: number;
  onlyVerified: boolean;
}