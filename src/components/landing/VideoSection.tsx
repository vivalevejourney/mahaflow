import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import videoExperiencia from '@/assets/mahaflow-video-experiencia.mp4';
import videoCanoa from '@/assets/mahaflow-video-canoa.mp4';
import videoMontanha from '@/assets/mahaflow-video-montanha.mp4';

interface VideoData {
  src: string;
  title: string;
  quote: string;
  description: string;
}

interface VideoPlayerProps {
  video: VideoData;
  isMain?: boolean;
}

const VideoPlayer = ({ video, isMain = false }: VideoPlayerProps) => {
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
    <div className={`group ${isMain ? 'col-span-2 lg:col-span-1' : ''}`}>
      {/* Quote */}
      <h3 className={`font-display text-center mb-4 text-background leading-tight ${isMain ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-lg md:text-xl'}`}>
        "{video.quote}"
      </h3>
      
      {/* Video Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm p-1.5">
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <video
            ref={videoRef}
            src={video.src}
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
                className={`${isMain ? 'w-20 h-20 md:w-24 md:h-24' : 'w-14 h-14 md:w-16 md:h-16'} bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300`}
                aria-label="Iniciar vídeo"
              >
                <Play className={`${isMain ? 'w-8 h-8 md:w-10 md:h-10' : 'w-6 h-6'} text-primary-foreground ml-1`} />
              </button>
            </div>
          )}

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  onClick={togglePlay}
                  size="icon"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </Button>
                <Button
                  onClick={toggleMute}
                  size="icon"
                  variant="outline"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                  aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </Button>
              </div>
              
              <div className="text-white/80 text-xs md:text-sm font-medium hidden sm:block">
                {video.title}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className={`text-background/70 text-center mt-4 ${isMain ? 'text-base md:text-lg' : 'text-sm'}`}>
        {video.description}
      </p>
    </div>
  );
};

export const VideoSection = () => {
  const videos: VideoData[] = [
    {
      src: videoExperiencia,
      title: 'Experiências • Mahaflow',
      quote: 'Viva momentos únicos. Conecte-se com a natureza.',
      description: 'Cada aventura é uma oportunidade de transformação.',
    },
    {
      src: videoCanoa,
      title: 'Canoa Havaiana • Mahaflow',
      quote: 'Sinta a liberdade. Viva cada remada.',
      description: 'O mar nos ensina que juntos, remamos mais longe.',
    },
    {
      src: videoMontanha,
      title: 'Trekking • Mahaflow',
      quote: 'A montanha nos ensina: um passo de cada vez.',
      description: 'Conquiste o topo e descubra o que existe além das nuvens.',
    },
  ];

  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            Sinta a experiência
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
            Viva cada momento.
            <br />
            <span className="text-primary">VEM SER MAHA!</span>
          </h2>
          <p className="text-xl text-background/70 leading-relaxed">
            Assista e sinta a energia das nossas aventuras. Cada remada, cada trilha, cada conexão com a natureza é uma oportunidade de transformação.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <VideoPlayer
              key={index}
              video={video}
              isMain={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
