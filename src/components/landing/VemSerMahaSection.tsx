import { 
  Crown, 
  Heart, 
  Users, 
  Gift, 
  Percent, 
  Calendar, 
  Camera, 
  Dumbbell,
  Waves,
  Mountain,
  Sparkles,
  ArrowRight,
  Star,
  Trophy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefitCategories = [
  {
    title: 'CONEXÃO',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    items: [
      { icon: Heart, text: 'MahaTinder - Encontre sua tribo' },
      { icon: Users, text: 'Grupo VIP WhatsApp exclusivo' },
      { icon: Calendar, text: 'Encontros bimestrais da comunidade' },
    ],
  },
  {
    title: 'ATIVIDADES',
    icon: Dumbbell,
    color: 'from-primary to-accent',
    items: [
      { icon: Dumbbell, text: 'Corridas organizadas pela cidade' },
      { icon: Waves, text: 'Canoagem e SUP em grupo' },
      { icon: Mountain, text: 'Trilhas e trekkings semanais' },
    ],
  },
  {
    title: 'ECONOMIA',
    icon: Percent,
    color: 'from-emerald-500 to-teal-500',
    items: [
      { icon: Percent, text: 'Descontos em todas experiências' },
      { icon: Trophy, text: 'Prioridade nas vagas limitadas' },
      { icon: Gift, text: 'Preços especiais na loja MAHA' },
    ],
  },
  {
    title: 'EXCLUSIVO',
    icon: Crown,
    color: 'from-amber-500 to-orange-500',
    items: [
      { icon: Gift, text: 'Garrafa Shaker Mahaflow personalizada' },
      { icon: Camera, text: 'Acesso a todas as fotos dos eventos' },
      { icon: Star, text: 'Convites para trazer amigos' },
    ],
  },
];

export const VemSerMahaSection = () => {
  const scrollToExperience = () => {
    document.getElementById('experience-club')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="vem-ser-maha" className="relative overflow-hidden">
      {/* Benefits Section - Premium Dark */}
      <div className="section-dark py-16 md:py-20 relative overflow-hidden">
        <div className="section-dark-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full text-primary text-sm font-bold mb-6 border border-primary/30">
              <Sparkles size={18} />
              MOVIMENTO 2026
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tudo que você ganha sendo <span className="text-primary">MAHA</span>
            </h3>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Uma entrada, infinitas possibilidades. Veja o que te espera.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefitCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${category.color} rounded-full text-white text-xs font-bold mb-4`}>
                  <category.icon size={14} />
                  {category.title}
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <item.icon size={18} className="text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 text-sm font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-white/60 mb-4">
              <span className="text-white font-semibold">2026 será o ano MAHA.</span> Não fique de fora.
            </p>
            <Button
              size="lg"
              onClick={scrollToExperience}
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-xl font-bold group"
            >
              <Sparkles className="mr-2" size={18} />
              Escolha seu plano
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
