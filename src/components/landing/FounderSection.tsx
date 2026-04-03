import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import videoDanilla from '@/assets/mahaflow-video-danilla.mp4';
import posterDanilla from '@/assets/mahaflow-conexao.jpg';

export const FounderSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section id="fundadora" className="section-padding relative overflow-hidden">
      {/* Background gradiente bege/cream */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-secondary/30" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video */}
          <div className="group relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] max-w-sm mx-auto">
                <video
                  ref={videoRef}
                  src={videoDanilla}
                  poster={posterDanilla}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop={false}
                  playsInline
                  preload="none"
                  onEnded={handleVideoEnd}
                />

                {/* Overlay when paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
                    <button
                      onClick={togglePlay}
                      className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300"
                      aria-label="Iniciar vídeo"
                    >
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </button>
                  </div>
                )}

                {/* Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={togglePlay}
                      size="icon"
                      className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                    </Button>
                    <Button
                      onClick={toggleMute}
                      size="icon"
                      variant="outline"
                      className="w-10 h-10 rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Fundadora & CEO
            </span>
            
            <h2 className="heading-2 text-foreground">
              Danilla de Oliveira
            </h2>
            
            <blockquote className="text-2xl font-display text-primary italic">
              "Construindo caminhos únicos com paixão ✨"
            </blockquote>
            
            <p className="body-large leading-relaxed">
              Empreendedora no ramo de Bem-Estar, apaixonada por vidas ao ar livre e atividades variadas. 
              A Mahaflow reflete sua paixão por conectar pessoas à natureza.
            </p>
            
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Profissional de Educação Física</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Engenheira de Produção</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Formação em Coaching</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span>Estudante de Gestão de Turismo</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                #vemsermaha
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                #eusoumaha
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                #mahaflow
              </span>
            </div>

            <a
              href="https://instagram.com/danilladeoliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors mt-4"
            >
              <Instagram size={20} />
              @danilladeoliveira
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
