import { Review } from '../lib/types';

export const reviews: Review[] = [
  {
    id: '1',
    caregiverId: '1',
    clientId: '101',
    clientName: 'Fernanda Lima',
    rating: 5,
    comment: 'A Ana é uma cuidadora exemplar. Minha mãe a adora e notamos grandes melhoras na qualidade de vida dela desde que a Ana começou a cuidá-la. Muito atenciosa e profissional.',
    date: '2025-03-15'
  },
  {
    id: '2',
    caregiverId: '1',
    clientId: '102',
    clientName: 'João Pereira',
    rating: 4,
    comment: 'Excelente profissional, sempre pontual e atenciosa. Recomendo!',
    date: '2025-02-28'
  },
  {
    id: '3',
    caregiverId: '2',
    clientId: '103',
    clientName: 'Márcia Santos',
    rating: 5,
    comment: 'O Carlos é incrível com meu pai. Tem muita paciência e conhecimento técnico. Estamos muito satisfeitos com o serviço.',
    date: '2025-03-10'
  },
  {
    id: '4',
    caregiverId: '3',
    clientId: '104',
    clientName: 'Roberto Silva',
    rating: 4,
    comment: 'A Mariana é muito dedicada. Ajudou minha mãe na recuperação pós-cirúrgica de forma exemplar.',
    date: '2025-01-20'
  },
  {
    id: '5',
    caregiverId: '4',
    clientId: '105',
    clientName: 'Antônia Gomes',
    rating: 5,
    comment: 'O Ricardo transformou a vida do meu pai com suas sessões de fisioterapia. Profissional extremamente qualificado e atencioso.',
    date: '2025-02-05'
  }
];