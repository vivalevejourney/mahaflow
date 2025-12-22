import { Heart, Music, Sun, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import meetingImage from '@/assets/mahaflow-conexao.jpg';
import meetingImage2 from '@/assets/mahaflow-kids-roda.jpg';

const activities = [
  { icon: Heart, label: 'Yoga ao ar livre' },
  { icon: Sun, label: 'Piquenique' },
  { icon: Music, label: 'Rodas de conversa' },
  { icon: Camera, label: 'Galeria de fotos' },
];

export const MeetingsSection = () => {
  return (
    <section id="encontros" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={meetingImage}
                alt="Encontro da comunidade Mahaflow"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Second image floating */}
            <div className="absolute -bottom-8 -right-4 w-48 md:w-56 aspect-square rounded-2xl overflow-hidden shadow-elevated border-4 border-background">
              <img
                src={meetingImage2}
                alt="Mahaflow Kids em atividade"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-2xl shadow-elevated border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">200+</div>
                  <div className="text-xs text-muted-foreground">Conexões feitas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Comunidade
              </span>
              <h2 className="heading-2 text-foreground">
                Encontros bimestrais
              </h2>
            </div>

            <p className="body-large">
              A cada dois meses, reunimos nossa comunidade para momentos especiais 
              de conexão, bem-estar e celebração da vida ao ar livre.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              São encontros descontraídos com yoga, piquenique, música e conversas 
              que criam laços duradouros. Porque a Mahaflow é mais do que experiências 
              — é uma família que cresce a cada aventura.
            </p>

            {/* Activities */}
            <div className="grid grid-cols-2 gap-4">
              {activities.map((activity) => (
                <div
                  key={activity.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <activity.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{activity.label}</span>
                </div>
              ))}
            </div>

            {/* Next Meeting */}
            <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-sm opacity-90 mb-1">Próximo encontro</div>
                  <div className="text-xl font-semibold">Janeiro 2026 — Em breve!</div>
                </div>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
