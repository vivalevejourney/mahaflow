import { MapPin, Clock, TrendingUp, Camera } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Import images as ES6 modules
import raftingAction from '@/assets/mahaflow-rafting-action.jpg';
import remoVaa from '@/assets/mahaflow-remo-vaa.jpg';
import flutuacao from '@/assets/mahaflow-flutuacao.jpg';
import grupoTrilha from '@/assets/mahaflow-grupo-trilha.jpg';
import praiaGrupo from '@/assets/mahaflow-praia-grupo.jpg';
import raftingVermelho from '@/assets/mahaflow-rafting-vermelho.jpg';
import trekkingAltitude from '@/assets/mahaflow-trekking-altitude.jpg';
import trekkingSunset from '@/assets/mahaflow-trekking-sunset.jpg';

// Image mapping by experience ID
const experienceImages: Record<string, string> = {
  'rafting': raftingAction,
  'remo-vaa': remoVaa,
  'flutuacao': flutuacao,
  'trilha-urca': grupoTrilha,
  'escalada-pico': praiaGrupo,
  'rafting-extremo': raftingVermelho,
  'trekking-altitude': trekkingAltitude,
  'trekking-sunset': trekkingSunset,
};

interface Experience {
  id: string;
  name: string;
  description: string;
  location: string;
  category: string;
  difficulty?: 'fácil' | 'moderado' | 'desafiador';
  duration?: string;
  year?: string;
}

const experiences: Experience[] = [
  {
    id: 'rafting',
    name: 'Rafting Aventura',
    description: 'Descida emocionante em corredeiras com equipamento completo e guias experientes.',
    location: 'Rio Paraíbuna',
    category: 'Aventura',
    difficulty: 'moderado',
    duration: '4 horas',
    year: '2024',
  },
  {
    id: 'remo-vaa',
    name: "Remo Va'a - Canoa Havaiana",
    description: 'Remada em grupo com canoa havaiana tradicional. União, ritmo e conexão com o mar.',
    location: 'Praia do Farol, RJ',
    category: 'Água',
    difficulty: 'fácil',
    duration: '2 horas',
    year: '2024',
  },
  {
    id: 'flutuacao',
    name: 'Flutuação Contemplativa',
    description: 'Experiência meditativa flutuando em águas cristalinas. Relaxamento profundo.',
    location: 'Arraial do Cabo',
    category: 'Bem-estar',
    difficulty: 'fácil',
    duration: '2 horas',
    year: '2024',
  },
  {
    id: 'trilha-urca',
    name: 'Trilha da Urca',
    description: 'Caminhada panorâmica com vistas deslumbrantes e conexão com a natureza.',
    location: 'Morro da Urca, RJ',
    category: 'Trilhas',
    difficulty: 'fácil',
    duration: '3 horas',
    year: '2024',
  },
  {
    id: 'escalada-pico',
    name: 'Escalada ao Pico',
    description: 'Conquiste o topo da montanha e viva a emoção de alcançar o cume. Superação, paisagens incríveis e conexão com a natureza.',
    location: 'Região Serrana, RJ',
    category: 'Trilhas',
    difficulty: 'desafiador',
    duration: '1-2 dias',
    year: '2024',
  },
  {
    id: 'rafting-extremo',
    name: 'Rafting Extremo',
    description: 'Para quem busca adrenalina máxima! Corredeiras classe III e IV.',
    location: 'Rio Paraíbuna',
    category: 'Aventura',
    difficulty: 'desafiador',
    duration: '6 horas',
    year: '2025',
  },
  {
    id: 'trekking-altitude',
    name: 'Trekking Pôr do Sol – Pico da Bandeira',
    description: 'Conquiste o terceiro ponto mais alto do Brasil e veja o pôr do sol acima das nuvens.',
    location: 'Caparaó, MG/ES',
    category: 'Trilhas',
    difficulty: 'desafiador',
    duration: '8 horas',
    year: '2025',
  },
  {
    id: 'trekking-sunset',
    name: 'Trekking Pôr do Sol',
    description: 'Trilha ao entardecer com vista panorâmica e momento contemplativo.',
    location: 'Serra da Mantiqueira',
    category: 'Trilhas',
    difficulty: 'moderado',
    duration: '4 horas',
    year: '2025',
  },
];

const difficultyColors = {
  fácil: 'bg-green-100 text-green-700 border-green-200',
  moderado: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  desafiador: 'bg-red-100 text-red-700 border-red-200',
};

export const ExperiencesSection = () => {
  return (
    <section id="experiencias-passadas" className="section-padding section-dark relative overflow-hidden">
      {/* Background overlay premium */}
      <div className="section-dark-overlay" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4 bg-white/10 text-white/80 border-white/20 hover:bg-white/20">
            <Camera size={14} className="mr-1" />
            Memórias
          </Badge>
          <h2 className="heading-2 text-white mt-4 mb-6">
            Memórias Mahaflow
          </h2>
          <p className="body-large text-white/70">
            Relembre as aventuras incríveis que já vivemos juntos. Cada experiência é única 
            e transforma quem participa.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <article
              key={experience.id}
              className="group overflow-hidden animate-fade-in-up bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={experienceImages[experience.id] || experienceImages['rafting']}
                  alt={experience.name}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white">
                  {experience.category}
                </Badge>

                {/* Year Badge */}
                {experience.year && (
                  <Badge className="absolute top-4 right-4 bg-black/60 text-white border-transparent">
                    {experience.year}
                  </Badge>
                )}

                {/* Realizada overlay */}
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm text-white/80 rounded-lg px-3 py-1.5 text-sm font-medium border border-white/10">
                  ✅ Realizada
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {experience.name}
                  </h3>
                  <p className="text-sm text-white/60 mt-1 line-clamp-2">
                    {experience.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-xs text-white/50">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-primary" />
                    {experience.location}
                  </div>
                  {experience.duration && (
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-primary" />
                      {experience.duration}
                    </div>
                  )}
                </div>

                {/* Difficulty */}
                {experience.difficulty && (
                  <Badge
                    variant="outline"
                    className={cn(
                      'text-xs',
                      difficultyColors[experience.difficulty]
                    )}
                  >
                    <TrendingUp size={12} className="mr-1" />
                    {experience.difficulty}
                  </Badge>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12">
          <p className="text-white/60">
            🌟 Essas são algumas das experiências que já marcaram nossa jornada. 
            <br />
            <span className="text-primary font-medium">
              Confira o calendário 2026 para as próximas aventuras!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
