import { Caregiver } from '../lib/types';

// Mock data for caregivers
export const caregivers: Caregiver[] = [
  {
    id: '1',
    name: 'Ana Silva',
    photo: 'https://images.pexels.com/photos/5328918/pexels-photo-5328918.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'São Paulo, SP',
    specializations: ['Alzheimer', 'Mobilidade Reduzida'],
    experience: 5,
    bio: 'Sou enfermeira há 5 anos, especializada em cuidados com idosos com Alzheimer. Trabalho com amor e dedicação para proporcionar qualidade de vida aos meus pacientes.',
    hourlyRate: 50,
    rating: 4.8,
    reviewCount: 24,
    isVerified: true
  },
  {
    id: '2',
    name: 'Carlos Santos',
    photo: 'https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Rio de Janeiro, RJ',
    specializations: ['Parkinson', 'Cuidados Paliativos'],
    experience: 7,
    bio: 'Técnico de enfermagem com especialização em idosos com Parkinson. Ofereço cuidados humanizados, focando no bem-estar físico e emocional.',
    hourlyRate: 60,
    rating: 4.6,
    reviewCount: 18,
    isVerified: true
  },
  {
    id: '3',
    name: 'Mariana Oliveira',
    photo: 'https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Belo Horizonte, MG',
    specializations: ['Pós-operatório', 'Diabetes'],
    experience: 4,
    bio: 'Cuidadora com experiência em acompanhamento pós-operatório de idosos. Sou atenciosa e paciente, buscando sempre o melhor cuidado.',
    hourlyRate: 45,
    rating: 4.5,
    reviewCount: 12,
    isVerified: false
  },
  {
    id: '4',
    name: 'Ricardo Almeida',
    photo: 'https://images.pexels.com/photos/5407038/pexels-photo-5407038.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Porto Alegre, RS',
    specializations: ['Fisioterapia', 'Mobilidade Reduzida'],
    experience: 8,
    bio: 'Fisioterapeuta especializado em reabilitação de idosos. Trabalho com exercícios personalizados para melhorar a mobilidade e qualidade de vida.',
    hourlyRate: 70,
    rating: 4.9,
    reviewCount: 30,
    isVerified: true
  },
  {
    id: '5',
    name: 'Juliana Mendes',
    photo: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'São Paulo, SP',
    specializations: ['Alzheimer', 'Demência'],
    experience: 6,
    bio: 'Cuidadora especializada em pacientes com demência. Ofereço atividades de estímulo cognitivo e apoio emocional para melhorar o dia a dia.',
    hourlyRate: 55,
    rating: 4.7,
    reviewCount: 22,
    isVerified: true
  },
  {
    id: '6',
    name: 'Pedro Costa',
    photo: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Recife, PE',
    specializations: ['Acamados', 'Sonda'],
    experience: 9,
    bio: 'Enfermeiro com vasta experiência no cuidado de pacientes acamados. Realizo todos os procedimentos necessários com técnica e empatia.',
    hourlyRate: 65,
    rating: 4.9,
    reviewCount: 27,
    isVerified: true
  }
];