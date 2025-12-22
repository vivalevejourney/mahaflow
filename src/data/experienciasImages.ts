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
};

// Função para obter mídia de uma experiência
export const getExperienciaMedia = (slug: string): ExperienciaMedia => {
  return experienciasMedia[slug] || {
    capa: defaultImage,
    galeria: [],
  };
};
