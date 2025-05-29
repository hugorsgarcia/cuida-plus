import { Caregiver } from '../lib/types';

// Mock data for caregivers
export const caregivers: Caregiver[] = [
  {
    id: '1',
    name: 'Ana Silva',
    photo: 'https://images.pexels.com/photos/29372720/pexels-photo-29372720/free-photo-of-cuidados-para-idosos-na-aconchegante-sala-de-estar-de-praga.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    name: 'Carla dos Santos',
    photo: 'https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    photo: 'https://images.pexels.com/photos/8415690/pexels-photo-8415690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    photo: 'https://images.pexels.com/photos/18429373/pexels-photo-18429373/free-photo-of-feliz-alegre-contente-sorridente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    photo: 'https://images.pexels.com/photos/32254523/pexels-photo-32254523/free-photo-of-enfermeira-confiante-em-uniforme-azul-posando-em-ambiente-fechado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    name: 'Pietra Costa',
    photo: 'https://images.pexels.com/photos/18429370/pexels-photo-18429370/free-photo-of-comida-alimento-refeicao-mulheres.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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