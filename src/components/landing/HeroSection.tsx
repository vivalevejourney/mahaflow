import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImagesSlider } from '@/components/ui/images-slider';

// Hero background images
import grupoTopo from '@/assets/mahaflow-grupo-topo.jpg';
import trekkingAltitude from '@/assets/mahaflow-trekking-altitude.jpg';
import cachoeiraGrupo from '@/assets/mahaflow-cachoeira-grupo.jpg';
import raftingAction from '@/assets/mahaflow-rafting-action.jpg';
import viaLactea from '@/assets/mahaflow-via-lactea.jpg';
import mahaflowLogo from '@/assets/mahaflow-logo-white.png';

export const HeroSection = () => {
  const scrollToExperiences = () => {
    const element = document.getElementById('experiencias');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroImages = [
    grupoTopo,
    trekkingAltitude,
    cachoeiraGrupo,
    raftingAction,
    viaLactea,
  ];

  return (
    <ImagesSlider
      images={heroImages}
      overlay={true}
      overlayClassName="bg-gradient-to-b from-black/70 via-black/50 to-black/80"
      className="min-h-screen"
      autoplay={true}
      direction="up"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-50 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-24 sm:pt-28 md:pt-32"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 sm:mb-6"
        >
          <img
            src={mahaflowLogo}
            alt="Mahaflow Logo"
            className="w-36 sm:w-44 md:w-56 lg:w-64 h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Campos dos Goytacazes – RJ
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Conexão com a natureza.
          <br />
          <span className="text-primary drop-shadow-glow">Movimento. Bem-estar real.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mb-8 leading-relaxed"
        >
          Ecoturismo, trilhas, rafting e experiências que unem corpo, mente e pessoas.
        </motion.p>

        {/* CTA Próxima Experiência */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55 }}
          className="mb-6"
        >
          <Link to="/experiencias/cachoeira-bicuda">
            <div className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-amber-500/40 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/20">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-amber-300 font-bold text-xs sm:text-sm uppercase">Próxima:</span>
              </span>
              <span className="text-white font-semibold text-sm sm:text-base">Cachoeira da Bicuda Grande</span>
              <span className="text-white/60 text-xs sm:text-sm hidden sm:inline">31/01</span>
              <Badge className="bg-red-500/90 text-white text-[10px] sm:text-xs px-2 py-0.5 animate-pulse">
                Poucas vagas!
              </Badge>
              <ArrowRight size={16} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
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
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-xl w-full sm:w-auto shadow-lg"
            >
              VEM SER MAHA!
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-3 gap-8 sm:gap-12 pt-8 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
            <div className="text-sm text-white/60">Participantes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
            <div className="text-sm text-white/60">Experiências</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">4.9</div>
            <div className="text-sm text-white/60">Avaliação</div>
          </div>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
};
