// Mock data for Mahaflow platform
// Ready for backend integration - just replace with API calls

export interface Experience {
  id: string;
  name: string;
  description: string;
  location: string;
  includes: string[];
  image: string;
  category: string;
  difficulty?: 'fácil' | 'moderado' | 'desafiador';
  duration?: string;
  price?: number;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  spots: number;
  spotsLeft: number;
  price: number | 'Gratuito';
  image: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  sustainability: string;
  price: number;
  image: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  interests: string[];
  bio: string;
  location: string;
  experiences: number;
}

export interface FeedPost {
  id: string;
  user: UserProfile;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  createdAt: string;
}

// Experiences
export const experiences: Experience[] = [
  {
    id: 'rafting',
    name: 'Rafting Aventura',
    description: 'Descida emocionante em corredeiras com equipamento completo e guias experientes.',
    location: 'Rio Paraíbuna',
    includes: ['Equipamento', 'Guia', 'Transporte', 'Lanche'],
    image: '/src/assets/mahaflow-rafting-amarelo.jpg',
    category: 'Aventura',
    difficulty: 'moderado',
    duration: '4 horas',
    price: 180,
  },
  {
    id: 'remo-vaa',
    name: 'Remo Va\'a - Canoa Havaiana',
    description: 'Remada em grupo com canoa havaiana tradicional. União, ritmo e conexão com o mar.',
    location: 'Praia do Farol, RJ',
    includes: ['Canoa', 'Instrutor', 'Colete', 'Hidratação'],
    image: '/src/assets/mahaflow-remo-vaa.jpg',
    category: 'Água',
    difficulty: 'fácil',
    duration: '2 horas',
    price: 120,
  },
  {
    id: 'flutuacao',
    name: 'Flutuação Contemplativa',
    description: 'Experiência meditativa flutuando em águas cristalinas. Relaxamento profundo.',
    location: 'Arraial do Cabo',
    includes: ['Equipamento', 'Guia', 'Meditação guiada'],
    image: '/src/assets/mahaflow-flutuacao.jpg',
    category: 'Bem-estar',
    difficulty: 'fácil',
    duration: '2 horas',
    price: 150,
  },
  {
    id: 'trilha-urca',
    name: 'Trilha da Urca',
    description: 'Caminhada panorâmica com vistas deslumbrantes e conexão com a natureza.',
    location: 'Morro da Urca, RJ',
    includes: ['Guia', 'Seguro', 'Hidratação'],
    image: '/src/assets/mahaflow-trilha.jpg',
    category: 'Trilhas',
    difficulty: 'fácil',
    duration: '3 horas',
    price: 120,
  },
  {
    id: 'sup',
    name: 'Stand Up Paddle (SUP)',
    description: 'Remada em pé com prancha SUP. Equilíbrio, força e contemplação da natureza.',
    location: 'Lagoa de Araruama',
    includes: ['Prancha', 'Remo', 'Colete', 'Instrutor'],
    image: '/src/assets/mahaflow-praia-grupo.jpg',
    category: 'Água',
    difficulty: 'fácil',
    duration: '2 horas',
    price: 100,
  },
  {
    id: 'rafting-extremo',
    name: 'Rafting Extremo',
    description: 'Para quem busca adrenalina máxima! Corredeiras classe III e IV.',
    location: 'Rio Paraíbuna',
    includes: ['Equipamento profissional', 'Guia especializado', 'Transporte', 'Almoço'],
    image: '/src/assets/mahaflow-rafting-vermelho.jpg',
    category: 'Aventura',
    difficulty: 'desafiador',
    duration: '6 horas',
    price: 280,
  },
  {
    id: 'trekking-altitude',
    name: 'Trekking Pôr do Sol – Pico da Bandeira',
    description: 'Conquiste o terceiro ponto mais alto do Brasil e veja o pôr do sol acima das nuvens.',
    location: 'Caparaó, MG/ES',
    includes: ['Guia', 'Equipamento', 'Café da manhã', 'Seguro'],
    image: '/src/assets/mahaflow-montanha-azul.jpg',
    category: 'Trilhas',
    difficulty: 'desafiador',
    duration: '8 horas',
    price: 220,
  },
  {
    id: 'trekking-sunset',
    name: 'Trekking Pôr do Sol',
    description: 'Trilha ao entardecer com vista panorâmica e momento contemplativo.',
    location: 'Serra da Mantiqueira',
    includes: ['Guia', 'Lanche', 'Hidratação'],
    image: '/src/assets/mahaflow-trekking-sunset.jpg',
    category: 'Trilhas',
    difficulty: 'moderado',
    duration: '4 horas',
    price: 150,
  },
  {
    id: 'domingao',
    name: 'Domingão do Bem-Estar',
    description: 'Yoga, meditação, piquenique e roda de conversa em meio à natureza.',
    location: 'Parque Natural Municipal',
    includes: ['Yoga', 'Meditação', 'Lanche saudável', 'Roda de conversa'],
    image: '/src/assets/mahaflow-conexao.jpg',
    category: 'Bem-estar',
    difficulty: 'fácil',
    duration: '5 horas',
    price: 80,
  },
  {
    id: 'canoagem',
    name: 'Canoagem',
    description: 'Remada tranquila em águas calmas, perfeita para contemplação.',
    location: 'Lagoa Feia',
    includes: ['Caiaque', 'Colete', 'Instrutor', 'Lanche'],
    image: '/src/assets/mahaflow-canoagem.jpg',
    category: 'Água',
    difficulty: 'fácil',
    duration: '2 horas',
    price: 100,
  },
  {
    id: 'camping',
    name: 'Camping na Natureza',
    description: 'Acampamento com fogueira, céu estrelado e desconexão total.',
    location: 'Serra da Mantiqueira',
    includes: ['Barraca', 'Saco de dormir', 'Refeições', 'Atividades'],
    image: '/src/assets/mahaflow-camping-noturno.jpg',
    category: 'Camping',
    difficulty: 'moderado',
    duration: '2 dias',
    price: 320,
  },
  {
    id: 'observacao-estrelas',
    name: 'Observação de Estrelas',
    description: 'Noite de contemplação do céu noturno com guia astronômico.',
    location: 'Serra dos Órgãos',
    includes: ['Telescópio', 'Guia', 'Lanche noturno', 'Transporte'],
    image: '/src/assets/mahaflow-via-lactea.jpg',
    category: 'Contemplação',
    difficulty: 'fácil',
    duration: '4 horas',
    price: 180,
  },
  {
    id: 'grupo-trilha',
    name: 'Expedição em Grupo',
    description: 'Aventura coletiva com conquista de pico e bandeira Mahaflow.',
    location: 'Pico da Bandeira',
    includes: ['Guia', 'Transporte', 'Alimentação', 'Hospedagem'],
    image: '/src/assets/mahaflow-grupo-trilha.jpg',
    category: 'Trilhas',
    difficulty: 'desafiador',
    duration: '3 dias',
    price: 890,
  },
  {
    id: 'mahaflow-kids',
    name: 'Mahaflow Kids',
    description: 'Aventuras lúdicas e educativas para crianças. Brincadeiras, jogos na natureza e muita diversão!',
    location: 'Parque Natural Municipal',
    includes: ['Monitores', 'Atividades', 'Lanche', 'Brindes'],
    image: '/src/assets/mahaflow-kids-roda.jpg',
    category: 'Kids',
    difficulty: 'fácil',
    duration: '4 horas',
    price: 80,
  },
  {
    id: 'expedicao-4x4',
    name: 'Expedição 4x4',
    description: 'Aventura off-road por trilhas desafiadoras com chegada em mirantes incríveis.',
    location: 'Serra da Mantiqueira',
    includes: ['Veículo 4x4', 'Guia', 'Lanche', 'Seguro'],
    image: '/src/assets/mahaflow-expedicao-4x4.jpg',
    category: 'Aventura',
    difficulty: 'moderado',
    duration: '6 horas',
    price: 250,
  },
  {
    id: 'pico-bandeira',
    name: 'Pico da Bandeira',
    description: 'Conquiste o terceiro ponto mais alto do Brasil e veja o nascer do sol acima das nuvens.',
    location: 'Divisa MG/ES',
    includes: ['Guia', 'Transporte', 'Hospedagem', 'Alimentação'],
    image: '/src/assets/mahaflow-placa-pico.jpg',
    category: 'Trilhas',
    difficulty: 'desafiador',
    duration: '2 dias',
    price: 650,
  },
];

// Events
export const events: Event[] = [
  {
    id: 'rafting-nov',
    name: 'Rafting de Verão',
    date: '2025-12-28',
    location: 'Rio Paraíbuna',
    spots: 20,
    spotsLeft: 8,
    price: 180,
    image: '/src/assets/mahaflow-rafting-vermelho.jpg',
    description: 'Última descida do ano! Venha encerrar 2025 com adrenalina.',
  },
  {
    id: 'domingao-dez',
    name: 'Domingão do Bem-Estar',
    date: '2026-01-05',
    location: 'Parque Natural Municipal',
    spots: 30,
    spotsLeft: 15,
    price: 'Gratuito',
    image: '/src/assets/mahaflow-grupo-topo.jpg',
    description: 'Edição especial de início de ano com yoga e piquenique.',
  },
  {
    id: 'remo-vaa-jan',
    name: 'Remo Va\'a - Canoa Havaiana',
    date: '2026-01-12',
    location: 'Praia do Farol',
    spots: 16,
    spotsLeft: 10,
    price: 120,
    image: '/src/assets/mahaflow-remo-vaa.jpg',
    description: 'Remada em grupo com canoa havaiana. Ritmo, união e mar!',
  },
  {
    id: 'trekking-jan',
    name: 'Trekking de Altitude',
    date: '2026-01-19',
    location: 'Serra dos Órgãos',
    spots: 12,
    spotsLeft: 5,
    price: 220,
    image: '/src/assets/mahaflow-topo-montanha.jpg',
    description: 'Conquiste o topo e descubra vistas que transformam.',
  },
  {
    id: 'flutuacao-jan',
    name: 'Flutuação Contemplativa',
    date: '2026-01-26',
    location: 'Arraial do Cabo',
    spots: 20,
    spotsLeft: 18,
    price: 150,
    image: '/src/assets/mahaflow-flutuacao.jpg',
    description: 'Experiência meditativa flutuando em águas cristalinas.',
  },
];

// Products - images are imported in components
export const products: Product[] = [
  {
    id: 'camiseta-verde',
    name: 'Camiseta Mahaflow Verde',
    description: 'Camiseta 100% algodão orgânico com logo bordado.',
    sustainability: '100% algodão orgânico certificado GOTS.',
    price: 119,
    image: 'product-camiseta-verde',
    category: 'Vestuário',
  },
  {
    id: 'camiseta-cinza',
    name: 'Camiseta Mahaflow Cinza',
    description: 'Camiseta mescla com estampa exclusiva Mahaflow.',
    sustainability: 'Feita com algodão reciclado e tingimento ecológico.',
    price: 109,
    image: 'product-camiseta-cinza',
    category: 'Vestuário',
  },
  {
    id: 'camiseta-offwhite',
    name: 'Camiseta Dryfit Off-White',
    description: 'Camiseta dry-fit com tecnologia anti-odor, perfeita para trilhas.',
    sustainability: 'Feita com materiais reciclados de garrafas PET.',
    price: 139,
    image: 'product-camiseta-offwhite',
    category: 'Vestuário',
  },
  {
    id: 'regata-offwhite',
    name: 'Regata Mahaflow Off-White',
    description: 'Regata leve e confortável para suas aventuras.',
    sustainability: '100% algodão orgânico e tingimento natural.',
    price: 89,
    image: 'product-regata-offwhite',
    category: 'Vestuário',
  },
  {
    id: 'regata-preta',
    name: 'Regata Mahaflow Preta',
    description: 'Regata fitness com tecido respirável.',
    sustainability: 'Produzida com tecido reciclado de alta qualidade.',
    price: 89,
    image: 'product-regata-preta',
    category: 'Vestuário',
  },
  {
    id: 'bone',
    name: 'Boné Mahaflow',
    description: 'Boné esportivo com proteção solar e design exclusivo.',
    sustainability: 'Produzido com algodão orgânico e tinta ecológica.',
    price: 69,
    image: 'product-bone',
    category: 'Acessórios',
  },
  {
    id: 'bucket-hat',
    name: 'Bucket Hat Mahaflow',
    description: 'Chapéu bucket com logo bordado, proteção UV.',
    sustainability: 'Feito com algodão orgânico certificado.',
    price: 79,
    image: 'product-bucket-hat',
    category: 'Acessórios',
  },
  {
    id: 'viseira',
    name: 'Viseira Mahaflow',
    description: 'Viseira esportiva com proteção UV50+ e ajuste confortável.',
    sustainability: 'Feita com materiais reciclados de garrafas PET.',
    price: 59,
    image: 'product-viseira-new',
    category: 'Acessórios',
  },
  {
    id: 'chaveiro',
    name: 'Chaveiro Folha Mahaflow',
    description: 'Chaveiro em formato de folha com acabamento premium.',
    sustainability: 'Feito com materiais sustentáveis e couro vegetal.',
    price: 39,
    image: 'product-chaveiro',
    category: 'Acessórios',
  },
];

// Blog posts
export const blogPosts: BlogPost[] = [
  {
    id: 'primeira-trilha',
    title: 'Sua Primeira Trilha: Guia Completo',
    excerpt: 'Tudo que você precisa saber para iniciar no mundo das trilhas com segurança e confiança.',
    author: 'Equipe Mahaflow',
    date: '2025-11-15',
    image: '/src/assets/mahaflow-trilha.jpg',
    category: 'Guias',
    readTime: '8 min',
  },
  {
    id: 'beneficios-rafting',
    title: 'Os Benefícios do Rafting para Corpo e Mente',
    excerpt: 'Descubra como a adrenalina das corredeiras pode transformar sua saúde mental.',
    author: 'Dr. Lucas Mendes',
    date: '2025-11-10',
    image: '/src/assets/mahaflow-rafting.jpg',
    category: 'Saúde',
    readTime: '6 min',
  },
  {
    id: 'saude-mental-natureza',
    title: 'Natureza e Saúde Mental: A Conexão Essencial',
    excerpt: 'Estudos comprovam: passar tempo na natureza reduz ansiedade e melhora o humor.',
    author: 'Dra. Ana Beatriz',
    date: '2025-11-05',
    image: '/src/assets/mahaflow-cachoeira.jpg',
    category: 'Bem-estar',
    readTime: '10 min',
  },
  {
    id: 'sustentabilidade',
    title: 'Ecoturismo Responsável: Deixe Apenas Pegadas',
    excerpt: 'Práticas essenciais para preservar os lugares que amamos visitar.',
    author: 'Equipe Mahaflow',
    date: '2025-10-28',
    image: '/src/assets/mahaflow-canoagem.jpg',
    category: 'Sustentabilidade',
    readTime: '5 min',
  },
];

// Mock users for MahaTinder
export const mockUsers: UserProfile[] = [
  {
    id: '1',
    name: 'Marina Costa',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    interests: ['Trilhas', 'Yoga', 'Fotografia'],
    bio: 'Apaixonada por natureza e novas experiências. Sempre em busca da próxima aventura!',
    location: 'Campos dos Goytacazes',
    experiences: 12,
  },
  {
    id: '2',
    name: 'Pedro Almeida',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    interests: ['Rafting', 'Camping', 'Surf'],
    bio: 'Aventureiro de fim de semana. Adoro conhecer gente nova nas trilhas.',
    location: 'Macaé',
    experiences: 8,
  },
  {
    id: '3',
    name: 'Juliana Santos',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    interests: ['Canoagem', 'Bem-estar', 'Meditação'],
    bio: 'Buscando equilíbrio entre a vida urbana e a conexão com a natureza.',
    location: 'Campos dos Goytacazes',
    experiences: 15,
  },
  {
    id: '4',
    name: 'Lucas Ferreira',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    interests: ['Trilhas', 'Rafting', 'Escalada'],
    bio: 'Guia de turismo certificado. Amo compartilhar a natureza com outras pessoas.',
    location: 'Rio de Janeiro',
    experiences: 45,
  },
  {
    id: '5',
    name: 'Camila Rodrigues',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    interests: ['Yoga', 'Surf', 'Fotografia'],
    bio: 'Fotógrafa de natureza. Cada trilha é uma oportunidade de capturar a beleza.',
    location: 'Búzios',
    experiences: 20,
  },
];

// Mock feed posts
export const feedPosts: FeedPost[] = [
  {
    id: '1',
    user: mockUsers[0],
    content: 'Que trilha incrível hoje! A vista do topo compensou cada gota de suor. Obrigada Mahaflow por mais essa experiência inesquecível! 🌿',
    image: '/src/assets/mahaflow-trilha.jpg',
    likes: 24,
    comments: 5,
    createdAt: '2025-11-18T14:30:00',
  },
  {
    id: '2',
    user: mockUsers[1],
    content: 'Primeira vez no rafting e já quero repetir! A equipe é sensacional e a adrenalina é viciante. Quem vem na próxima?',
    image: '/src/assets/mahaflow-rafting.jpg',
    likes: 32,
    comments: 8,
    createdAt: '2025-11-17T16:45:00',
  },
  {
    id: '3',
    user: mockUsers[2],
    content: 'Domingão do Bem-Estar foi renovador. Yoga ao ar livre + piquenique + gente incrível = receita perfeita para recarregar as energias.',
    likes: 18,
    comments: 3,
    createdAt: '2025-11-16T11:20:00',
  },
  {
    id: '4',
    user: mockUsers[3],
    content: 'Ontem levei um grupo de iniciantes para a cachoeira. Ver a alegria nos olhos de quem descobre a natureza pela primeira vez não tem preço!',
    image: '/src/assets/mahaflow-cachoeira.jpg',
    likes: 45,
    comments: 12,
    createdAt: '2025-11-15T18:00:00',
  },
];

// Navigation items
export const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Experiências', href: '/#experiencias' },
  { label: 'Calendário', href: '/#calendario' },
  { label: 'Experience', href: '/#experience-club' },
  { label: 'Vem Ser Maha', href: '/#vem-ser-maha' },
  { label: 'Blog', href: '/blog' },
];

// Format helpers
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

export const formatPrice = (price: number | 'Gratuito'): string => {
  if (price === 'Gratuito') return 'Gratuito';
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return 'Agora mesmo';
  if (diffHours < 24) return `${diffHours}h atrás`;
  if (diffDays < 7) return `${diffDays}d atrás`;
  return formatDate(dateString);
};
