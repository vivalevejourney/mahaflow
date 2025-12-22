import { ArrowRight, MapPin, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

// Image mapping by experience ID - CORRIGIDO
const experienceImages: Record<string, string> = {
  'rafting': raftingAction,
  'remo-vaa': remoVaa,
  'flutuacao': flutuacao,
  'trilha-urca': grupoTrilha,
  'sup': praiaGrupo,
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
}

const experiences: Experience[] = [
  {
    id: 'rafting',
    name: 'Rafting Aventura',
    description: 'Descida emocionante em corredeiras com equipamento completo e guias experientes.',
    location: 'Rio Paraíba do Sul',
    category: 'Aventura',
    difficulty: 'moderado',
    duration: '4 horas',
  },
  {
    id: 'remo-vaa',
    name: "Remo Va'a - Canoa Havaiana",
    description: 'Remada em grupo com canoa havaiana tradicional. União, ritmo e conexão com o mar.',
    location: 'Praia do Farol, RJ',
    category: 'Água',
    difficulty: 'fácil',
    duration: '2 horas',
  },
  {
    id: 'flutuacao',
    name: 'Flutuação Contemplativa',
    description: 'Experiência meditativa flutuando em águas cristalinas. Relaxamento profundo.',
    location: 'Arraial do Cabo',
    category: 'Bem-estar',
    difficulty: 'fácil',
    duration: '2 horas',
  },
  {
    id: 'trilha-urca',
    name: 'Trilha da Urca',
    description: 'Caminhada panorâmica com vistas deslumbrantes e conexão com a natureza.',
    location: 'Morro da Urca, RJ',
    category: 'Trilhas',
    difficulty: 'fácil',
    duration: '3 horas',
  },
  {
    id: 'sup',
    name: 'Stand Up Paddle (SUP)',
    description: 'Remada em pé com prancha SUP. Equilíbrio, força e contemplação da natureza.',
    location: 'Lagoa de Araruama',
    category: 'Água',
    difficulty: 'fácil',
    duration: '2 horas',
  },
  {
    id: 'rafting-extremo',
    name: 'Rafting Extremo',
    description: 'Para quem busca adrenalina máxima! Corredeiras classe III e IV.',
    location: 'Rio Paraíba do Sul',
    category: 'Aventura',
    difficulty: 'desafiador',
    duration: '6 horas',
  },
  {
    id: 'trekking-altitude',
    name: 'Trekking de Altitude',
    description: 'Conquiste o topo da montanha e descubra vistas que transformam.',
    location: 'Serra dos Órgãos',
    category: 'Trilhas',
    difficulty: 'desafiador',
    duration: '8 horas',
  },
  {
    id: 'trekking-sunset',
    name: 'Trekking Pôr do Sol',
    description: 'Trilha ao entardecer com vista panorâmica e momento contemplativo.',
    location: 'Serra da Mantiqueira',
    category: 'Trilhas',
    difficulty: 'moderado',
    duration: '4 horas',
  },
];

const difficultyColors = {
  fácil: 'bg-green-100 text-green-700 border-green-200',
  moderado: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  desafiador: 'bg-red-100 text-red-700 border-red-200',
};

export const ExperiencesSection = () => {
  return (
    <section id="experiencias" className="section-padding relative overflow-hidden">
      {/* Background gradiente verde */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-primary/5 to-secondary/30" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-secondary/60 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossas Experiências
          </span>
          <h2 className="heading-2 text-foreground mt-4 mb-6">
            Aventuras para todos os estilos
          </h2>
          <p className="body-large">
            Do rafting cheio de adrenalina ao yoga contemplativo, temos a experiência 
            perfeita para você.
          </p>
          {/* Microtexto RotaFácil */}
          <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Experiências bem organizadas do início ao fim
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <article
              key={experience.id}
              className="group card-elevated overflow-hidden animate-fade-in-up bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={experienceImages[experience.id] || experienceImages['rafting']}
                  alt={experience.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white">
                  {experience.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {experience.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {experience.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
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

                {/* CTA */}
                <Button className="w-full group/btn">
                  Inscrever-se
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            Ver todas as experiências
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
