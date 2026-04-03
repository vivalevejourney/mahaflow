import { Users, Shield, Leaf, Heart, CheckCircle2 } from 'lucide-react';
import aboutImage1 from '@/assets/mahaflow-celebracao.jpg';
import aboutImage2 from '@/assets/mahaflow-expedicao-4x4.jpg';
import aboutImage3 from '@/assets/mahaflow-grupo-pico.jpg';

const highlights = [
  {
    icon: Users,
    title: 'Atividades Acessíveis',
    description: 'Experiências para todos os níveis, do iniciante ao aventureiro.',
  },
  {
    icon: Shield,
    title: 'Guias Experientes',
    description: 'Profissionais certificados que garantem sua segurança.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Práticas de turismo responsável e preservação ambiental.',
  },
  {
    icon: Heart,
    title: 'Comunidade',
    description: 'Conexões reais entre pessoas que amam a natureza.',
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* Background gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-primary/5" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-secondary/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Sobre a Mahaflow
              </span>
              <h2 className="heading-2 text-foreground">
                Experiências que conectam você à natureza e a outras pessoas
              </h2>
            </div>

            <p className="body-large">
              A Mahaflow cria experiências ao ar livre que conectam pessoas à natureza, 
              ao movimento e umas às outras. Trilhas, rafting, vivências e encontros 
              pensados para saúde mental, bem-estar e comunidade.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Nascemos em Campos dos Goytacazes com a missão de mostrar que a aventura 
              está mais perto do que você imagina. Cada experiência é cuidadosamente 
              planejada para proporcionar momentos únicos, seguros e transformadores.
            </p>

            {/* Trust badge - RotaFácil */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Tudo sob controle.</strong> Organização profissional por i9 Experience.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={aboutImage1}
                    alt="Celebração da comunidade Mahaflow"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src={aboutImage2}
                    alt="Expedição 4x4 Mahaflow"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={aboutImage3}
                    alt="Grupo no pico ao nascer do sol"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glow">
              <div className="text-3xl font-bold">3+</div>
              <div className="text-sm opacity-90">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
