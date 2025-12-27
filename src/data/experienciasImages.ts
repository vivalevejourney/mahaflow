// Mapeamento de imagens das experiências - importadas como módulos ES6

// Catamarã São João
import catamaraCapa from '@/assets/experiencias/catamara-sao-joao/capa.png';
import catamaraVideo from '@/assets/experiencias/catamara-sao-joao/video.mp4';

// Trilha Urca
import urcaCapa from '@/assets/experiencias/trilha-urca/capa.png';
import urcaGaleria1 from '@/assets/experiencias/trilha-urca/galeria-1.jpg';
import urcaGaleria2 from '@/assets/experiencias/trilha-urca/galeria-2.jpg';

// Carnaval Caparaó
import caparaoCapa from '@/assets/experiencias/carnaval-caparao/capa.jpeg';
import caparaoGaleria1 from '@/assets/experiencias/carnaval-caparao/galeria-1.jpg';

// Dia Namastê
import namasteCapa from '@/assets/experiencias/dia-namaste/capa.png';
import namasteGaleria1 from '@/assets/experiencias/dia-namaste/galeria-1.png';

// Pico da Caledônia
import caleCapa from '@/assets/experiencias/pico-caledonia/capa.jpg';
import caleGaleria1 from '@/assets/experiencias/pico-caledonia/galeria-1.jpg';

// Travessia Joatinga
import joatingaCapa from '@/assets/experiencias/travessia-joatinga/capa.jpg';
import joatingaGaleria1 from '@/assets/experiencias/travessia-joatinga/galeria-1.png';
import joatingaGaleria2 from '@/assets/experiencias/travessia-joatinga/galeria-2.jpg';
import joatingaGaleria3 from '@/assets/experiencias/travessia-joatinga/galeria-3.jpg';
import joatingaGaleria4 from '@/assets/experiencias/travessia-joatinga/galeria-4.jpg';
import joatingaVideo from '@/assets/experiencias/travessia-joatinga/video.mp4';

// Semana Santa Macacu
import semanaSantaCapa from '@/assets/experiencias/semana-santa-macacu/capa.jpg';

// Rafting Sapucaia
import raftingGaleria1 from '@/assets/experiencias/rafting-sapucaia/galeria-1.jpg';

// Imagem padrão
import defaultImage from '@/assets/mahaflow-grupo-trilha.jpg';

export interface ExperienciaMedia {
  capa: string;
  galeria: string[];
  video?: string;
}

// Mapeamento por slug
export const experienciasMedia: Record<string, ExperienciaMedia> = {
  'catamara-sao-joao': {
    capa: catamaraCapa,
    galeria: [],
    video: catamaraVideo,
  },
  'trilha-urca': {
    capa: urcaCapa,
    galeria: [urcaGaleria1, urcaGaleria2],
  },
  'carnaval-caparao': {
    capa: caparaoCapa,
    galeria: [caparaoGaleria1],
  },
  'dia-namaste': {
    capa: namasteCapa,
    galeria: [namasteGaleria1],
  },
  'pico-caledonia': {
    capa: caleCapa,
    galeria: [caleGaleria1],
  },
  'travessia-joatinga': {
    capa: joatingaCapa,
    galeria: [joatingaGaleria1, joatingaGaleria2, joatingaGaleria3, joatingaGaleria4],
    video: joatingaVideo,
  },
  'semana-santa-macacu': {
    capa: semanaSantaCapa,
    galeria: [],
  },
  'rafting-sapucaia': {
    capa: defaultImage,
    galeria: [raftingGaleria1],
  },
};

// Função para obter mídia de uma experiência
export const getExperienciaMedia = (slug: string): ExperienciaMedia => {
  return experienciasMedia[slug] || {
    capa: defaultImage,
    galeria: [],
  };
};
