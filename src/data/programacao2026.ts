// Dados centralizados das programações 2026 Mahaflow

export interface Programacao {
  id: string;
  slug: string;
  nome: string;
  data: string;
  dataISO: string; // Formato YYYY-MM-DD para cálculos de data
  dataCompleta: string;
  diaSemana: string;
  localPartida: string;
  conceito: string; // Texto emocional que define a experiência
  oQueVaiViver: string[]; // Lista de vivências
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
  roteiro?: string[];
  informacoesImportantes?: string[];
  horarioSaida?: string;
  vagas?: {
    limite?: number;
    minimo?: number;
  };
  imagem: string;
  galeria?: string[];
  video?: string; // Vídeo da experiência (opcional)
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
    dataISO: '2026-01-11',
    dataCompleta: '11 de janeiro de 2026',
    diaSemana: 'Domingo',
    localPartida: 'Campos dos Goytacazes',
    conceito: 'Começar o ano do jeito certo: água, sol, vento no rosto e mente leve. Uma experiência contemplativa, social e perfeita para abrir o calendário Mahaflow com o pé direito.',
    oQueVaiViver: [
      'Navegação tranquila pelo litoral',
      'Conexão com o grupo',
      'Clima leve, boas conversas e fotos absurdas',
      'Energia de início de ano renovada',
    ],
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
    imagem: '/src/assets/experiencias/catamara-sao-joao/capa.png',
    video: '/src/assets/experiencias/catamara-sao-joao/video.mp4',
    categoria: 'agua',
  },
  {
    id: 'trilha-urca',
    slug: 'trilha-urca',
    nome: 'Rio de Janeiro – Morro da Urca',
    data: '17 de janeiro',
    dataISO: '2026-01-17',
    dataCompleta: '17 de janeiro de 2026',
    diaSemana: 'Sábado',
    localPartida: 'Campos dos Goytacazes',
    conceito: 'Trilha clássica, visual icônico e aquele dia que parece cena de filme. Para quem quer natureza, cidade e sensação de conquista — tudo no mesmo dia.',
    oQueVaiViver: [
      'Trilha com visual progressivo',
      'Chegada no Morro da Urca',
      'Vista icônica do Rio de Janeiro',
      'Dia completo com clima carioca raiz',
    ],
    descricaoResumida: 'Trilha clássica, visual incrível e aquele dia com clima de Rio que todo mundo ama.',
    descricaoCompleta: 'Trilha clássica, visual incrível e aquele dia com clima de Rio que todo mundo ama. Uma das trilhas mais icônicas do Rio de Janeiro com vistas deslumbrantes da Baía de Guanabara.',
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
    imagem: '/src/assets/experiencias/trilha-urca/capa.png',
    galeria: [
      '/src/assets/experiencias/trilha-urca/galeria-1.jpg',
      '/src/assets/experiencias/trilha-urca/galeria-2.jpg',
    ],
    categoria: 'trilha',
  },
  {
    id: 'carnaval-caparao',
    slug: 'carnaval-caparao',
    nome: 'Expedição Carnaval no Caparaó',
    data: '14 a 17 de fevereiro',
    dataISO: '2026-02-14',
    dataCompleta: '14 a 17 de fevereiro de 2026',
    diaSemana: 'Sábado a Terça',
    localPartida: 'Campos dos Goytacazes',
    conceito: 'Enquanto o mundo grita, você mergulha. Carnaval alternativo Mahaflow — natureza, cachoeiras, trilhas e conexão real. Desconexão do caos urbano.',
    oQueVaiViver: [
      'Cachoeiras icônicas do Caparaó',
      'Trilhas em diferentes níveis',
      'Convivência intensa em grupo',
      'Desconexão total do caos urbano',
      '3 diárias de imersão na natureza',
    ],
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
    imagem: '/src/assets/experiencias/carnaval-caparao/capa.jpeg',
    galeria: [
      '/src/assets/experiencias/carnaval-caparao/galeria-1.jpg',
    ],
    categoria: 'expedicao',
  },
  {
    id: 'dia-namaste',
    slug: 'dia-namaste',
    nome: 'Dia Namastê – Pós-Carnaval',
    data: '28 de fevereiro',
    dataISO: '2026-02-28',
    dataCompleta: '28 de fevereiro de 2026',
    diaSemana: 'Sábado',
    localPartida: 'Campos dos Goytacazes',
    conceito: 'Depois do excesso, pausa. Depois do barulho, silêncio. Uma vivência para reorganizar corpo, mente e energia.',
    oQueVaiViver: [
      'Vivência holística completa',
      'Práticas de respiração e meditação',
      'Conexão consigo mesmo',
      'Reorganização de energia pós-carnaval',
    ],
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
    imagem: '/src/assets/experiencias/dia-namaste/capa.png',
    galeria: [
      '/src/assets/experiencias/dia-namaste/galeria-1.png',
    ],
    categoria: 'vivencia',
  },
  {
    id: 'travessia-joatinga',
    slug: 'travessia-joatinga',
    nome: 'Travessia Joatinga – Paraty',
    data: '27 a 29 de março',
    dataISO: '2026-03-27',
    dataCompleta: '27 a 29 de março de 2026',
    diaSemana: 'Sexta a Domingo',
    localPartida: 'Campos dos Goytacazes',
    conceito: 'Uma das travessias mais lindas do Brasil. Pesada? Sim. Transformadora? Muito mais. Experiência exclusiva, intensa e para quem já tem preparo físico e mental.',
    oQueVaiViver: [
      'Travessia por praias desertas',
      'Trilhas costeiras de tirar o fôlego',
      '~40 km de caminhada em 3 dias',
      'Dormida em comunidades locais',
      'Trechos de barco pelo mar',
      'Superação pessoal',
    ],
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
    dataISO: '2026-04-03',
    dataCompleta: '03 a 05 de abril de 2026',
    diaSemana: 'Sexta a Domingo',
    localPartida: 'Campos dos Goytacazes',
    conceito: 'Imersão em natureza com camping, cachoeiras e convivência real. Simples, intenso e memorável.',
    oQueVaiViver: [
      'Camping em meio à natureza',
      'Cachoeiras Terceira Dimensão e Gravatá',
      'Jequitibá e Banheira Natural',
      'Churrasco e luau sob as estrelas',
      'Conexão real com o grupo',
    ],
    roteiro: [
      'Sexta: Cachoeiras Terceira Dimensão e Gravatá',
      'Sábado: Jequitibá e Banheira Natural',
    ],
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
    ],
    imagem: 'mahaflow-cachoeira.jpg',
    categoria: 'expedicao',
  },
  {
    id: 'pico-caledonia',
    slug: 'pico-caledonia',
    nome: 'Pico da Caledônia',
    data: '15 a 16 de maio',
    dataISO: '2026-05-15',
    dataCompleta: '15 a 16 de maio de 2026',
    diaSemana: 'Sexta e Sábado',
    localPartida: 'Campos dos Goytacazes',
    conceito: 'Montanha clássica. Superação física. Visual que humilha qualquer wallpaper.',
    oQueVaiViver: [
      'Conquista de um dos picos mais bonitos da região',
      'Vista de 360° no topo',
      'Trilha desafiadora e recompensadora',
      'Nascer do sol inesquecível',
    ],
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
    dataISO: '2026-05-23',
    dataCompleta: '23 de maio de 2026',
    diaSemana: 'Sábado',
    localPartida: 'Campos dos Goytacazes',
    conceito: 'Adrenalina, risadas e espírito de equipe. Aqui não tem pose — só experiência real.',
    oQueVaiViver: [
      'Descida emocionante pelas corredeiras',
      'Trabalho em equipe no bote',
      'Adrenalina pura',
      'Diversão garantida com o grupo',
    ],
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

// Agrupar programações por mês
export const getProgramacoesPorMes = () => {
  const porMes: Record<string, Programacao[]> = {};
  
  programacoes2026.forEach(prog => {
    const mes = new Date(prog.dataISO).toLocaleDateString('pt-BR', { month: 'long' });
    const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
    
    if (!porMes[mesCapitalizado]) {
      porMes[mesCapitalizado] = [];
    }
    porMes[mesCapitalizado].push(prog);
  });
  
  return porMes;
};
