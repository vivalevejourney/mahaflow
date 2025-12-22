// Dados centralizados das programações 2026 Mahaflow

export interface Programacao {
  id: string;
  slug: string;
  nome: string;
  data: string;
  dataCompleta: string;
  descricaoResumida: string;
  descricaoCompleta: string;
  incluso: string[];
  naoIncluso?: string[];
  valor: number;
  valorFormatado: string;
  pagamento: {
    pix?: string;
    pixParcelado?: string;
    pixDesconto?: string;
    cartao?: string;
    especial?: string;
  };
  dadosTecnicos?: {
    distancia?: string;
    tempo?: string;
    altimetria?: string;
    altitudeMinima?: string;
    bioma?: string;
    conservacao?: string[];
    nivel?: string;
  };
  informacoesImportantes?: string[];
  horarioSaida?: string;
  vagas?: {
    limite?: number;
    minimo?: number;
  };
  imagem: string;
  categoria: 'agua' | 'trilha' | 'expedicao' | 'vivencia';
}

export const WHATSAPP_NUMBER = '5522981602212';
export const WHATSAPP_MESSAGE_PREFIX = 'Olá! Tenho interesse na experiência';

export const programacoes2026: Programacao[] = [
  {
    id: 'catamara-sao-joao',
    slug: 'catamara-sao-joao',
    nome: 'Passeio de Catamarã',
    data: '11 de janeiro',
    dataCompleta: '11 de janeiro de 2026 (domingo)',
    descricaoResumida: 'Uma experiência leve, contemplativa e perfeita para começar o ano com energia boa, sol, água e conexão.',
    descricaoCompleta: 'Uma experiência leve, contemplativa e perfeita para começar o ano com energia boa, sol, água e conexão. Navegue pelas águas cristalinas de São João da Barra em um catamarã confortável.',
    incluso: [
      'Transporte saindo de Campos',
      'Passeio de catamarã',
      'Guiamento Mahaflow',
    ],
    valor: 135,
    valorFormatado: 'R$ 135,00',
    pagamento: {
      pixParcelado: '50% em dezembro + 50% em janeiro (estilo consórcio, sem cartão)',
    },
    imagem: 'mahaflow-praia.jpg',
    categoria: 'agua',
  },
  {
    id: 'trilha-urca',
    slug: 'trilha-urca',
    nome: 'Rio de Janeiro – Morro da Urca',
    data: '17 de janeiro',
    dataCompleta: '17 de janeiro de 2026 (sábado)',
    descricaoResumida: 'Trilha clássica, visual incrível e aquele dia com clima de Rio que todo mundo ama.',
    descricaoCompleta: 'Trilha clássica, visual incrível e aquele dia com clima de Rio que todo mundo ama. Uma das trilhas mais icônicas do Rio de Janeiro com vistas deslumbrantes.',
    incluso: [
      'Transporte saindo de Campos',
      'Trilha Morro da Urca',
      'Guiamento Mahaflow',
    ],
    valor: 300,
    valorFormatado: 'R$ 300,00',
    pagamento: {
      pixParcelado: 'PIX parcelado (estilo consórcio), sem cartão de crédito',
    },
    imagem: 'mahaflow-grupo-trilha.jpg',
    categoria: 'trilha',
  },
  {
    id: 'carnaval-caparao',
    slug: 'carnaval-caparao',
    nome: 'Expedição Carnaval no Caparaó',
    data: '14 a 17 de fevereiro',
    dataCompleta: '14 a 17 de fevereiro de 2026 – 3 diárias',
    descricaoResumida: 'Carnaval Alternativo Mahaflow. Para quem quer fugir do carnaval tradicional e viver natureza, cachoeiras e experiências reais.',
    descricaoCompleta: 'Carnaval Alternativo Mahaflow. Para quem quer fugir do carnaval tradicional e viver natureza, cachoeiras e experiências reais. Uma imersão completa no Parque Nacional do Caparaó.',
    incluso: [
      'Transporte Campos → Caparaó → Campos',
      'Transporte 4x4 para Rio Claro / Iúna',
      '3 diárias em pousada no Centro de Caparaó (quartos compartilhados)',
      'Café da manhã – domingo e segunda',
      'Almoço – sábado e terça',
      'Entrada Parque das Andorinhas',
      'Entrada Poço do Egito',
      'Cachoeira do Rogério ou Poço das Antas',
      'Guiamento completo Mahaflow',
    ],
    naoIncluso: [
      'Alimentações não citadas',
      'Despesas pessoais',
      'Itens não mencionados',
    ],
    valor: 1650,
    valorFormatado: 'R$ 1.650,00',
    pagamento: {
      pixParcelado: '3x de R$ 550,00 (Dezembro | Janeiro | Fevereiro)',
      especial: '4x de R$ 450,00 (participantes Mahaflow)',
      pixDesconto: '5% OFF à vista (PIX 2025)',
      cartao: 'Até 10x com juros da operadora',
    },
    horarioSaida: '6h',
    informacoesImportantes: [
      'Antas: trilha 40–45 min (nível intermediário)',
      'Rogério: nível leve/iniciante',
    ],
    imagem: 'mahaflow-cachoeira-grupo.jpg',
    categoria: 'expedicao',
  },
  {
    id: 'dia-namaste',
    slug: 'dia-namaste',
    nome: 'Dia Namastê – Pós-Carnaval',
    data: '28 de fevereiro',
    dataCompleta: '28 de fevereiro de 2026 (sábado)',
    descricaoResumida: 'Uma pausa consciente para reorganizar corpo, mente e energia após o Carnaval.',
    descricaoCompleta: 'Uma pausa consciente para reorganizar corpo, mente e energia após o Carnaval. Vivência holística completa com práticas de bem-estar e conexão.',
    incluso: [
      'Transporte',
      'Vivência holística Mahaflow',
      'Guiamento',
    ],
    valor: 0,
    valorFormatado: 'Valor a definir',
    pagamento: {},
    informacoesImportantes: ['Valor e detalhes serão divulgados em breve'],
    imagem: 'mahaflow-conexao.jpg',
    categoria: 'vivencia',
  },
  {
    id: 'travessia-joatinga',
    slug: 'travessia-joatinga',
    nome: 'Travessia Joatinga – Paraty',
    data: '27 a 29 de março',
    dataCompleta: '27 a 29 de março de 2026',
    descricaoResumida: 'Uma das travessias de praias mais lindas do Brasil. Vivência exclusiva, intensa e transformadora.',
    descricaoCompleta: 'Uma das travessias de praias mais lindas do Brasil. Vivência exclusiva, intensa e transformadora. Percorra praias paradisíacas em uma jornada inesquecível.',
    incluso: [
      'Transporte saindo de Campos até Paraty',
      'Transporte local (Rio de Janeiro / Paraty)',
      'Guiamento credenciado',
      'Guia local (Cadastur)',
      'Trechos de barco inclusos',
      'Seguro aventura',
      'Dormitórios / casas inclusos',
    ],
    valor: 1500,
    valorFormatado: 'R$ 1.500,00',
    pagamento: {},
    dadosTecnicos: {
      distancia: '~40 km',
      tempo: '8 a 10h por dia',
      altimetria: 'até 525 m',
      altitudeMinima: 'nível do mar',
      bioma: 'Mata Atlântica',
      conservacao: ['Reserva Estadual da Juatinga', 'APA Federal do Cairuçu'],
      nivel: 'Caminhada pesada (recomendável experiência)',
    },
    vagas: {
      limite: 12,
      minimo: 8,
    },
    informacoesImportantes: [
      'Não será possível reservar vagas sem pagamento de entrada',
      'Vagas limitadas: 12 pessoas',
      'Mínimo: 8 pessoas (caso não feche, valor devolvido)',
    ],
    imagem: 'mahaflow-praia-grupo.jpg',
    categoria: 'expedicao',
  },
  {
    id: 'semana-santa-macacu',
    slug: 'semana-santa-macacu',
    nome: 'Semana Santa – Cachoeira de Macacu',
    data: '03 a 05 de abril',
    dataCompleta: '03 a 05 de abril de 2026',
    descricaoResumida: 'Imersão em natureza com camping, cachoeiras e vivência coletiva.',
    descricaoCompleta: 'Imersão em natureza com camping, cachoeiras e vivência coletiva. Perfeito para quem busca desconexão e contato profundo com a natureza.',
    incluso: [
      '2 noites – Camping Toca do Au Au',
      'Acesso total à área',
      '2 cafés da manhã',
      '1 churrasco / luau',
      'Transporte saindo de Campos',
      'Guiamento Mahaflow',
    ],
    valor: 790,
    valorFormatado: 'R$ 790,00',
    pagamento: {
      pixParcelado: '4x de R$ 200,00 (parcelamento até abril)',
    },
    informacoesImportantes: [
      'Garantia da vaga até março (30 dias antes do evento)',
      'Roteiro: Sexta - Cachoeiras Terceira Dimensão e Gravatá',
      'Roteiro: Sábado - Jequitibá e Banheira Natural',
    ],
    imagem: 'mahaflow-cachoeira.jpg',
    categoria: 'expedicao',
  },
  {
    id: 'pico-caledonia',
    slug: 'pico-caledonia',
    nome: 'Pico da Caledônia',
    data: '15 a 16 de maio',
    dataCompleta: '15 a 16 de maio de 2026 (sexta e sábado)',
    descricaoResumida: 'Experiência clássica de montanha, superação e visual absurdo.',
    descricaoCompleta: 'Experiência clássica de montanha, superação e visual absurdo. Conquiste um dos picos mais bonitos da região serrana.',
    incluso: [
      'Transporte saindo de Campos',
      'Transporte 4x4',
      'Guiamento Mahaflow',
    ],
    valor: 420,
    valorFormatado: 'R$ 420,00',
    pagamento: {},
    imagem: 'mahaflow-topo-montanha.jpg',
    categoria: 'trilha',
  },
  {
    id: 'rafting-sapucaia',
    slug: 'rafting-sapucaia',
    nome: 'Rafting em Sapucaia',
    data: '23 de maio',
    dataCompleta: '23 de maio de 2026 (sábado)',
    descricaoResumida: 'Adrenalina, diversão e conexão em grupo.',
    descricaoCompleta: 'Adrenalina, diversão e conexão em grupo. Descida emocionante pelas corredeiras de Sapucaia com toda a segurança.',
    incluso: [
      'Transporte',
      'Rafting',
      'Guiamento',
      'Seguro aventura',
    ],
    valor: 435,
    valorFormatado: 'R$ 435,00',
    pagamento: {},
    imagem: 'mahaflow-rafting-action.jpg',
    categoria: 'agua',
  },
];

export const getCategoriaLabel = (categoria: Programacao['categoria']) => {
  const labels = {
    agua: 'Água',
    trilha: 'Trilha',
    expedicao: 'Expedição',
    vivencia: 'Vivência',
  };
  return labels[categoria];
};

export const getCategoriaColor = (categoria: Programacao['categoria']) => {
  const colors = {
    agua: 'bg-blue-100 text-blue-700 border-blue-200',
    trilha: 'bg-green-100 text-green-700 border-green-200',
    expedicao: 'bg-orange-100 text-orange-700 border-orange-200',
    vivencia: 'bg-purple-100 text-purple-700 border-purple-200',
  };
  return colors[categoria];
};
