import { Crown, Calendar, Trophy, Ticket, Percent, Users, Gift, Video, Camera, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Calendar,
    title: 'Encontros Bimestrais',
    description: 'Acesso exclusivo aos encontros da comunidade VIP',
  },
  {
    icon: Trophy,
    title: 'Atividades Semanais',
    description: 'Dinâmicas exclusivas toda semana para membros',
  },
  {
    icon: Ticket,
    title: 'Prioridade nas Vagas',
    description: 'Reserve antes de todos nas experiências',
  },
  {
    icon: Percent,
    title: 'Descontos Especiais',
    description: 'Preços diferenciados na loja e eventos',
  },
  {
    icon: Users,
    title: 'Grupo VIP WhatsApp',
    description: 'Comunidade fechada para networking',
  },
  {
    icon: Gift,
    title: 'Brindes Mensais',
    description: 'Surpresas exclusivas para membros VIP',
  },
  {
    icon: Video,
    title: 'Aulas Online',
    description: 'Yoga, meditação e bem-estar exclusivos',
  },
  {
    icon: Camera,
    title: 'Galeria Completa',
    description: 'Acesso a todas as fotos dos eventos',
  },
];

export const MahaVIPSection = () => {
  return (
    <section id="maha-vip" className="section-padding bg-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Crown size={16} />
            Exclusivo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
            Seja um <span className="text-primary">MAHA VIP</span>
          </h2>
          <p className="text-xl text-background/70 leading-relaxed">
            Faça parte do grupo seleto da Mahaflow. Acesso exclusivo a dinâmicas semanais, 
            encontros bimestrais e benefícios especiais.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 border-2 border-primary/30 text-center">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
                <Gift size={14} />
                Melhor custo-benefício
              </div>
            </div>
            
            {/* Price */}
            <div className="mt-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-background/70 text-2xl">R$</span>
                <span className="text-6xl md:text-7xl font-bold text-background">24</span>
                <span className="text-background text-2xl font-medium">,90</span>
              </div>
              <p className="text-background/60 text-lg mt-1">/mês</p>
            </div>
            
            {/* Highlight */}
            <div className="mt-6 py-3 px-4 bg-background/10 rounded-xl">
              <p className="text-background font-medium">
                Menos de <span className="text-primary">R$ 1 por dia</span> para ter acesso a tudo!
              </p>
            </div>

            {/* Features List */}
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center gap-2 text-background/80 text-sm">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </span>
                Encontros bimestrais exclusivos
              </li>
              <li className="flex items-center gap-2 text-background/80 text-sm">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </span>
                Atividades semanais para membros
              </li>
              <li className="flex items-center gap-2 text-background/80 text-sm">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </span>
                Descontos em todas as experiências
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-background mb-1 text-sm md:text-base">
                {benefit.title}
              </h3>
              <p className="text-background/60 text-xs md:text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/cadastro">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 rounded-xl shadow-glow group"
            >
              <Crown className="mr-2" size={20} />
              QUERO SER MAHA VIP
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
          <p className="text-background/50 text-sm mt-4">
            Vagas limitadas para manter a exclusividade da comunidade
          </p>
        </div>
      </div>
    </section>
  );
};
