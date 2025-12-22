import { User, Camera, Award, Heart, MessageCircle, History, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: History,
    title: 'Histórico de experiências',
    description: 'Acompanhe todas as aventuras que você já viveu',
  },
  {
    icon: Camera,
    title: 'Galeria pessoal',
    description: 'Fotos exclusivas de cada experiência que participou',
  },
  {
    icon: Award,
    title: 'Certificados e badges',
    description: 'Conquistas e reconhecimentos da comunidade',
  },
  {
    icon: Heart,
    title: 'Conexões MahaTinder',
    description: 'Gerencie suas conexões e amizades da tribo',
  },
  {
    icon: MessageCircle,
    title: 'Grupo da comunidade',
    description: 'Acesso ao grupo exclusivo de membros Mahaflow',
  },
  {
    icon: User,
    title: 'Perfil personalizado',
    description: 'Mostre seus interesses e esportes favoritos',
  },
];

export const MyAccountSection = () => {
  return (
    <section id="minha-conta" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Área do membro
            </span>
            
            <h2 className="heading-2 text-foreground">
              Sua conta <span className="text-primary">Mahaflow</span>
            </h2>
            
            <p className="body-large leading-relaxed">
              Tenha tudo em um só lugar: histórico de aventuras, fotos exclusivas, 
              conexões e muito mais. Sua jornada Maha documentada.
            </p>

            <Link to="/cadastro">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl mt-4 group"
              >
                VEM SER MAHA!
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
