import { ArrowRight, Handshake, MessageCircle, Building2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Placeholder slots para patrocinadores
const sponsorSlots = [
  { id: 1, category: 'Outdoor & Aventura' },
  { id: 2, category: 'Bem-estar & Saúde' },
  { id: 3, category: 'Equipamentos' },
  { id: 4, category: 'Esportes' },
  { id: 5, category: 'Lifestyle' },
  { id: 6, category: 'Ecoturismo' },
];

export const SponsorsSection = () => {
  const whatsappLink = 'https://wa.me/5522981602212?text=Olá! Tenho interesse em ser patrocinador/parceiro da Mahaflow';

  return (
    <section id="patrocinadores" className="section-padding bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Patrocinadores
          </span>
          <h2 className="heading-2 text-foreground mt-4 mb-6">
            Sua marca pode estar aqui
          </h2>
          <p className="body-large">
            Estamos em busca de parceiros que acreditam em ecoturismo responsável, 
            bem-estar e conexão com a natureza.
          </p>
        </div>

        {/* Placeholder Slots Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
          {sponsorSlots.map((slot) => (
            <a
              key={slot.id}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-[3/2] flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-card/50 border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:bg-primary/5"
            >
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                <Building2 className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {slot.category}
              </span>
              <span className="text-xs text-muted-foreground/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Disponível
              </span>
            </a>
          ))}
        </div>

        {/* Seja Patrocinador CTA */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-nature rounded-3xl opacity-50" />
          <div className="relative p-8 md:p-12 rounded-3xl border border-primary/20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Sparkles size={16} />
              Oportunidade Exclusiva
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Quero ser um Patrocinador
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Conecte sua marca com uma comunidade apaixonada por natureza, 
              bem-estar e experiências transformadoras. Entre em contato e 
              vamos construir algo incrível juntos!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl group"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Entre em Contato
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Participantes ativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Eventos por ano</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground/70 mt-6">
              <Handshake size={14} className="inline mr-1" />
              Benefícios exclusivos para patrocinadores: visibilidade em eventos, 
              redes sociais e muito mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
