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
  Smartphone,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const benefitCategories = [
  {
    title: 'CONEXÃO',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
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
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
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
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
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
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    items: [
      { icon: Gift, text: 'Garrafa Shaker Mahaflow personalizada' },
      { icon: Camera, text: 'Acesso a todas as fotos dos eventos' },
      { icon: Star, text: 'Convites para trazer amigos' },
    ],
  },
];

// Apenas 3 perfis
const matchCards = [
  { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop', name: 'Marina', age: 28, interests: ['Trekking', 'Yoga'] },
  { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop', name: 'Lucas', age: 32, interests: ['Rafting', 'Camping'] },
  { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop', name: 'Julia', age: 25, interests: ['Trilhas', 'Meditação'] },
];

export const VemSerMahaSection = () => {
  return (
    <section id="vem-ser-maha" className="relative overflow-hidden">
      {/* Hero Section - Dark with gradient */}
      <div className="bg-foreground py-16 md:py-24 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full text-primary text-sm font-bold mb-6 border border-primary/30 animate-pulse">
              <Sparkles size={18} />
              MOVIMENTO 2026
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-background mb-6 leading-tight">
              VEM SER{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-pink-500 bg-clip-text text-transparent">
                MAHA
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-background/70 leading-relaxed max-w-3xl mx-auto">
              Faça parte da comunidade que te conecta com <span className="text-primary font-bold">aventuras</span> e 
              pessoas da sua vibe.
            </p>
          </div>

          {/* Pricing Card + MahaTinder Preview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Pricing Card - Destaque Principal */}
            <div className="order-1">
              <div className="relative bg-gradient-to-br from-primary/20 via-accent/10 to-pink-500/10 rounded-3xl p-8 md:p-10 border-2 border-primary/40 text-center backdrop-blur-sm">
                {/* Badge */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-glow">
                    <Crown size={18} />
                    MAHA VIP
                    <Crown size={18} />
                  </div>
                </div>
                
                {/* Price */}
                <div className="mt-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-background/60 text-2xl">R$</span>
                    <span className="text-7xl md:text-8xl font-black text-background">20</span>
                    <span className="text-background text-3xl font-bold">,00</span>
                  </div>
                  <p className="text-primary text-lg mt-1 font-bold">VALOR ÚNICO</p>
                </div>
                
                {/* Highlight - Shaker */}
                <div className="mt-6 py-4 px-6 bg-background/10 rounded-2xl border border-background/10">
                  <p className="text-background text-lg font-medium">
                    🎁 <span className="text-primary font-bold">Garrafa Shaker</span> personalizada
                  </p>
                  <p className="text-background/60 text-sm mt-1">
                    + Todos os benefícios VIP da comunidade
                  </p>
                </div>

                {/* Quick Benefits */}
                <ul className="mt-6 space-y-3 text-left">
                  {[
                    { icon: MessageCircle, text: 'Entrada no grupo VIP WhatsApp' },
                    { icon: Smartphone, text: 'Pagamento pelo app (PIX, semanal, mensal)' },
                    { icon: Percent, text: 'Descontos em TODAS as experiências' },
                    { icon: Trophy, text: 'Prioridade nas vagas limitadas' },
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-background/80">
                      <span className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                        <benefit.icon size={14} className="text-primary" />
                      </span>
                      {benefit.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to="/cadastro" className="block mt-8">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 text-primary-foreground text-xl py-8 rounded-2xl shadow-glow group font-bold"
                  >
                    <Crown className="mr-2" size={24} />
                    QUERO SER MAHA
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                  </Button>
                </Link>
                
                <p className="text-background/40 text-sm mt-4">
                  Sem cartão de crédito • Pagamento facilitado pelo app
                </p>
              </div>
            </div>

            {/* MahaTinder Preview - Menor e menos destaque */}
            <div className="relative h-[280px] md:h-[320px] order-2">
              <div className="absolute top-0 left-0 right-0 text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-500/10 rounded-full text-pink-400/80 text-xs font-medium border border-pink-500/20">
                  <Heart size={12} className="fill-current" />
                  MahaTinder
                </span>
              </div>
              
              <div className="relative h-full pt-10 flex items-center justify-center">
                {matchCards.map((card, index) => (
                  <div
                    key={index}
                    className="absolute w-40 md:w-48 rounded-xl overflow-hidden shadow-xl bg-card border border-pink-500/10 transform transition-all duration-500 hover:scale-105 hover:z-50"
                    style={{
                      left: `${50 + (index - 1) * 28}%`,
                      transform: `translateX(-50%) rotate(${(index - 1) * 8}deg)`,
                      zIndex: matchCards.length - Math.abs(index - 1),
                    }}
                  >
                    <div className="aspect-[3/4] relative">
                      <img src={card.image} alt={card.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-sm font-bold text-white">{card.name}, {card.age}</h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {card.interests.map((interest, i) => (
                            <span key={i} className="px-1.5 py-0.5 bg-pink-500/30 backdrop-blur-sm rounded-full text-white text-[10px]">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
                        <Heart className="w-4 h-4 text-pink-500 fill-current" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="absolute bottom-0 left-0 right-0 text-center text-background/40 text-xs">
                Encontre pessoas da sua vibe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section - Light */}
      <div className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tudo que você ganha sendo <span className="text-primary">MAHA</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma entrada, infinitas possibilidades. Veja o que te espera.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefitCategories.map((category, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 ${category.bgColor} border ${category.borderColor} hover:scale-105 transition-transform duration-300`}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${category.color} rounded-full text-white text-xs font-bold mb-4`}>
                  <category.icon size={14} />
                  {category.title}
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <item.icon size={18} className="text-foreground/70 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              <span className="text-foreground font-semibold">2026 será o ano MAHA.</span> Não fique de fora.
            </p>
            <Link to="/cadastro">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 rounded-xl font-bold group"
              >
                <Sparkles className="mr-2" size={18} />
                FAZER PARTE AGORA
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
