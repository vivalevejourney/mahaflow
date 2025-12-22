import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Polaroid images
import grupoPico from '@/assets/mahaflow-grupo-pico.jpg';
import topoNuvens from '@/assets/mahaflow-topo-nuvens.jpg';
import cachoeiraGrupo from '@/assets/mahaflow-cachoeira-grupo.jpg';
import raftingAction from '@/assets/mahaflow-rafting-action.jpg';
import remoVaa from '@/assets/mahaflow-remo-vaa.jpg';
import campingNoturno from '@/assets/mahaflow-camping-noturno.jpg';
import mahaflowLogo from '@/assets/mahaflow-logo-hero.png';

interface PolaroidProps {
  src: string;
  alt: string;
  caption: string;
  rotation: string;
  position: string;
  size: 'small' | 'medium' | 'large';
  delay: string;
}

const Polaroid = ({ src, alt, caption, rotation, position, size, delay, hideOnMobile }: PolaroidProps & { hideOnMobile?: boolean }) => {
  const sizeClasses = {
    small: 'w-20 sm:w-24 md:w-36',
    medium: 'w-24 sm:w-32 md:w-44',
    large: 'w-28 sm:w-36 md:w-56',
  };

  return (
    <div
      className={`absolute ${position} ${sizeClasses[size]} bg-white p-1.5 sm:p-2 pb-6 sm:pb-8 rounded-sm shadow-xl hover:scale-110 hover:z-30 transition-all duration-300 cursor-pointer animate-fade-in ${hideOnMobile ? 'hidden sm:block' : ''}`}
      style={{
        transform: `rotate(${rotation})`,
        animationDelay: delay,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full aspect-square object-cover"
      />
      <p className="text-[10px] sm:text-xs text-center text-gray-600 mt-1 sm:mt-2 font-handwriting truncate">
        {caption}
      </p>
    </div>
  );
};

export const HeroSection = () => {
  const scrollToExperiences = () => {
    const element = document.getElementById('experiencias');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const polaroids: (Omit<PolaroidProps, 'delay'> & { hideOnMobile?: boolean })[] = [
    {
      src: grupoPico,
      alt: 'Grupo no pico ao nascer do sol',
      caption: 'Pico da Bandeira ⛰️',
      rotation: '-6deg',
      position: 'top-2 left-2 sm:top-4 sm:left-4 md:top-8 md:left-8',
      size: 'large',
    },
    {
      src: topoNuvens,
      alt: 'Pessoa contemplando nuvens',
      caption: 'Acima das nuvens ☁️',
      rotation: '4deg',
      position: 'top-8 right-0 sm:top-16 sm:right-2 md:top-12 md:right-16',
      size: 'medium',
    },
    {
      src: cachoeiraGrupo,
      alt: 'Grupo na cachoeira',
      caption: 'Refrescando! 💦',
      rotation: '-3deg',
      position: 'top-32 sm:top-48 md:top-52 left-16 sm:left-24 md:left-32',
      size: 'medium',
      hideOnMobile: true,
    },
    {
      src: raftingAction,
      alt: 'Rafting em ação',
      caption: 'Adrenalina pura! 🚣',
      rotation: '7deg',
      position: 'bottom-24 sm:bottom-32 md:bottom-28 right-4 sm:right-8 md:right-24',
      size: 'medium',
    },
    {
      src: remoVaa,
      alt: 'Remo Va\'a canoa havaiana',
      caption: 'Juntos no mar 🌊',
      rotation: '-5deg',
      position: 'bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-4 md:left-16',
      size: 'medium',
      hideOnMobile: true,
    },
    {
      src: campingNoturno,
      alt: 'Camping noturno',
      caption: 'Noite estrelada ✨',
      rotation: '3deg',
      position: 'bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-4',
      size: 'small',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen lg:min-h-[90vh]">
          {/* Left Side - Text Content */}
          <div className="space-y-8 lg:pr-8 order-2 lg:order-1 z-10">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Campos dos Goytacazes – RJ
            </div>

            {/* Heading */}
            <h1 className="heading-1 text-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Conexão com a natureza.
              <br />
              <span className="text-primary">Movimento. Bem-estar real.</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Ecoturismo, trilhas, rafting e experiências que unem corpo, mente e pessoas.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <Button
                size="lg"
                onClick={scrollToExperiences}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-glow group"
              >
                Explorar experiências
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Link to="/cadastro">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-xl w-full sm:w-auto"
                >
                  VEM SER MAHA!
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Participantes</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Experiências</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Right Side - Polaroid Collage */}
          <div className="relative order-1 lg:order-2 h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            {polaroids.map((polaroid, index) => (
              <Polaroid
                key={index}
                {...polaroid}
                delay={`${0.2 + index * 0.1}s`}
                hideOnMobile={polaroid.hideOnMobile}
              />
            ))}
            
            {/* Mahaflow Logo - Central */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-24 sm:w-32 md:w-40 lg:w-48 bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img
                  src={mahaflowLogo}
                  alt="Mahaflow Logo"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
