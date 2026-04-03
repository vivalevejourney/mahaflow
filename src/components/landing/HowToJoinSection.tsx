import { UserPlus, Search, CreditCard, Mountain, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Crie sua conta',
    description: 'Cadastre-se gratuitamente e faça parte da comunidade Mahaflow',
  },
  {
    number: '02',
    icon: Search,
    title: 'Explore experiências',
    description: 'Navegue pelo calendário e escolha a aventura perfeita para você',
  },
  {
    number: '03',
    icon: CreditCard,
    title: 'Reserve sua vaga',
    description: 'Dê um sinal para garantir seu lugar na experiência escolhida',
  },
  {
    number: '04',
    icon: Mountain,
    title: 'Viva a aventura',
    description: 'Conecte-se com a natureza e com a tribo Maha!',
  },
];

const trustBadges = [
  { icon: CheckCircle2, text: 'Inscrição organizada e segura' },
  { icon: Shield, text: 'Dados protegidos' },
  { icon: CheckCircle2, text: 'Comunicação direta' },
];

export const HowToJoinSection = () => {
  return (
    <section id="como-participar" className="section-padding relative overflow-hidden">
      {/* Background gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-primary/5" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-secondary/50 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Primeiros passos
          </span>
          <h2 className="heading-2 text-foreground mt-4 mb-6">
            Como participar?
          </h2>
          <p className="body-large">
            É simples fazer parte da tribo Mahaflow. Siga os passos e embarque 
            na próxima aventura!
          </p>
          
          {/* Trust badges - i9 Experience */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary"
              >
                <badge.icon size={16} />
                {badge.text}
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-primary/20">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info box - i9 Experience */}
        <div className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/30 border border-primary/20">
          <div className="text-center space-y-3">
            <h4 className="font-semibold text-foreground">Organização profissional por i9 Experience</h4>
            <p className="text-sm text-muted-foreground">
              Cada experiência é organizada de forma simples, segura e profissional, 
              com todas as informações centralizadas em um único lugar. Menos mensagens, mais clareza.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/cadastro">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 rounded-xl shadow-glow group"
            >
              VEM SER MAHA!
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
