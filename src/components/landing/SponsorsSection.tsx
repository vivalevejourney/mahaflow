import { ArrowRight, Handshake, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sponsor logos as SVG components with brand colors
const sponsors = [
  { 
    id: 1, 
    name: 'Natura', 
    category: 'Bem-estar',
    color: '#2E7D32',
    hoverBg: 'hover:bg-green-50',
    logo: (
      <svg viewBox="0 0 120 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-2xl font-bold" fill="#2E7D32">
          NATURA
        </text>
      </svg>
    )
  },
  { 
    id: 2, 
    name: 'North Face', 
    category: 'Outdoor',
    color: '#C62828',
    hoverBg: 'hover:bg-red-50',
    logo: (
      <svg viewBox="0 0 120 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-lg font-black" fill="#C62828">
          THE NORTH FACE
        </text>
      </svg>
    )
  },
  { 
    id: 3, 
    name: 'Patagonia', 
    category: 'Ecoturismo',
    color: '#1565C0',
    hoverBg: 'hover:bg-blue-50',
    logo: (
      <svg viewBox="0 0 120 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-xl font-bold tracking-wider" fill="#1565C0">
          PATAGONIA
        </text>
      </svg>
    )
  },
  { 
    id: 4, 
    name: 'REI', 
    category: 'Equipamentos',
    color: '#388E3C',
    hoverBg: 'hover:bg-green-50',
    logo: (
      <svg viewBox="0 0 120 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-3xl font-black" fill="#388E3C">
          REI
        </text>
      </svg>
    )
  },
  { 
    id: 5, 
    name: 'Decathlon', 
    category: 'Esportes',
    color: '#0277BD',
    hoverBg: 'hover:bg-blue-50',
    logo: (
      <svg viewBox="0 0 120 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-xl font-bold" fill="#0277BD">
          DECATHLON
        </text>
      </svg>
    )
  },
  { 
    id: 6, 
    name: 'Havaianas', 
    category: 'Lifestyle',
    color: '#F57F17',
    hoverBg: 'hover:bg-amber-50',
    logo: (
      <svg viewBox="0 0 120 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-xl font-medium italic" fill="#F57F17">
          Havaianas
        </text>
      </svg>
    )
  },
  { 
    id: 7, 
    name: 'Salomon', 
    category: 'Trail Running',
    color: '#B71C1C',
    hoverBg: 'hover:bg-red-50',
    logo: (
      <svg viewBox="0 0 120 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-xl font-bold uppercase" fill="#B71C1C">
          Salomon
        </text>
      </svg>
    )
  },
  { 
    id: 8, 
    name: 'Oakley', 
    category: 'Acessórios',
    color: '#212121',
    hoverBg: 'hover:bg-gray-100',
    logo: (
      <svg viewBox="0 0 120 40" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-xl font-black uppercase" fill="#212121">
          OAKLEY
        </text>
      </svg>
    )
  },
];

export const SponsorsSection = () => {
  const whatsappLink = 'https://wa.me/5522999999999?text=Olá! Tenho interesse em ser parceiro da Mahaflow';

  return (
    <section id="patrocinadores" className="section-padding bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Parceiros
          </span>
          <h2 className="heading-2 text-foreground mt-4 mb-6">
            Marcas que acreditam na Mahaflow
          </h2>
          <p className="body-large">
            Empresas comprometidas com ecoturismo responsável, bem-estar e conexão com a natureza.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-20">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`group aspect-[3/2] flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-card border-2 border-border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg ${sponsor.hoverBg}`}
              style={{
                ['--sponsor-color' as string]: sponsor.color,
              }}
            >
              <div 
                className="w-full h-8 md:h-10 transition-transform duration-300 group-hover:scale-110"
              >
                {sponsor.logo}
              </div>
              <span 
                className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium"
                style={{ color: sponsor.color }}
              >
                {sponsor.category}
              </span>
            </div>
          ))}
        </div>

        {/* Seja Parceiro CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-nature rounded-3xl opacity-50" />
          <div className="relative p-8 md:p-12 rounded-3xl border border-primary/20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Handshake size={16} />
              Oportunidade
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Quer ser parceiro da Mahaflow?
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Conecte sua marca com uma comunidade apaixonada por natureza, 
              bem-estar e experiências transformadoras. Vamos construir algo incrível juntos!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl group"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Falar pelo WhatsApp
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
          </div>
        </div>
      </div>
    </section>
  );
};
