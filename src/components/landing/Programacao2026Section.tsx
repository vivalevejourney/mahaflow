import { ArrowRight, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { programacoes2026, getCategoriaLabel, getCategoriaColor } from '@/data/programacao2026';
import { differenceInDays, parseISO, isToday, isTomorrow, isPast } from 'date-fns';

// Import images
import praiaImg from '@/assets/mahaflow-praia.jpg';
import grupoTrilhaImg from '@/assets/mahaflow-grupo-trilha.jpg';
import cachoeiraGrupoImg from '@/assets/mahaflow-cachoeira-grupo.jpg';
import conexaoImg from '@/assets/mahaflow-conexao.jpg';
import praiaGrupoImg from '@/assets/mahaflow-praia-grupo.jpg';
import cachoeiraImg from '@/assets/mahaflow-cachoeira.jpg';
import topoMontanhaImg from '@/assets/mahaflow-topo-montanha.jpg';
import raftingActionImg from '@/assets/mahaflow-rafting-action.jpg';

const imageMap: Record<string, string> = {
  'mahaflow-praia.jpg': praiaImg,
  'mahaflow-grupo-trilha.jpg': grupoTrilhaImg,
  'mahaflow-cachoeira-grupo.jpg': cachoeiraGrupoImg,
  'mahaflow-conexao.jpg': conexaoImg,
  'mahaflow-praia-grupo.jpg': praiaGrupoImg,
  'mahaflow-cachoeira.jpg': cachoeiraImg,
  'mahaflow-topo-montanha.jpg': topoMontanhaImg,
  'mahaflow-rafting-action.jpg': raftingActionImg,
};

// Função para calcular e formatar dias restantes
const getCountdownInfo = (dataISO: string) => {
  const dataEvento = parseISO(dataISO);
  const hoje = new Date();
  const dias = differenceInDays(dataEvento, hoje);

  if (isPast(dataEvento) && !isToday(dataEvento)) {
    return {
      texto: 'Realizada',
      emoji: '✅',
      className: 'bg-muted text-muted-foreground',
      urgente: false,
      passada: true,
    };
  }
  
  if (isToday(dataEvento)) {
    return {
      texto: 'É HOJE!',
      emoji: '🎉',
      className: 'bg-green-500 text-white animate-pulse',
      urgente: true,
      passada: false,
    };
  }
  
  if (isTomorrow(dataEvento)) {
    return {
      texto: 'AMANHÃ!',
      emoji: '⚡',
      className: 'bg-orange-500 text-white animate-pulse',
      urgente: true,
      passada: false,
    };
  }
  
  if (dias <= 7) {
    return {
      texto: `Faltam ${dias} dias`,
      emoji: '🔥',
      className: 'bg-red-500 text-white',
      urgente: true,
      passada: false,
    };
  }
  
  if (dias <= 30) {
    return {
      texto: `Faltam ${dias} dias`,
      emoji: '⏰',
      className: 'bg-yellow-500 text-yellow-900',
      urgente: false,
      passada: false,
    };
  }
  
  return {
    texto: `Faltam ${dias} dias`,
    emoji: '📅',
    className: 'bg-primary/10 text-primary',
    urgente: false,
    passada: false,
  };
};

export const Programacao2026Section = () => {
  // Ordenar por data (mais próximas primeiro)
  const programacoesOrdenadas = [...programacoes2026].sort((a, b) => 
    parseISO(a.dataISO).getTime() - parseISO(b.dataISO).getTime()
  );

  return (
    <section id="calendario" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Calendar size={14} className="mr-1" />
            Calendário 2026
          </Badge>
          <h2 className="heading-2 text-foreground mb-6">
            Calendário Mahaflow 2026
          </h2>
          <p className="body-large text-muted-foreground">
            Transporte incluso em todos os passeios. Escolha sua próxima aventura e 
            reserve sua vaga com antecedência.
          </p>
        </div>

        {/* Timeline / Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programacoesOrdenadas.map((prog, index) => {
            const countdown = getCountdownInfo(prog.dataISO);
            
            return (
              <article
                key={prog.id}
                className={`group card-elevated overflow-hidden animate-fade-in-up bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 ${countdown.passada ? 'opacity-60' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={imageMap[prog.imagem] || praiaImg}
                    alt={prog.nome}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <p className="text-xs font-bold text-primary uppercase tracking-wide">
                      {prog.data}
                    </p>
                  </div>

                  {/* Category badge */}
                  <Badge 
                    className={`absolute top-4 right-4 ${getCategoriaColor(prog.categoria)}`}
                  >
                    {getCategoriaLabel(prog.categoria)}
                  </Badge>

                  {/* Countdown badge */}
                  <div className={`absolute bottom-4 left-4 ${countdown.className} rounded-lg px-3 py-1.5 font-bold text-sm shadow-lg flex items-center gap-1.5`}>
                    <Clock size={14} />
                    {countdown.emoji} {countdown.texto}
                  </div>

                  {/* Price overlay */}
                  {prog.valor > 0 && !countdown.passada && (
                    <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-lg px-3 py-1.5 font-bold text-sm shadow-lg">
                      {prog.valorFormatado}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {prog.nome}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {prog.descricaoResumida}
                    </p>
                  </div>

                  {/* Incluso preview */}
                  <div className="flex flex-wrap gap-1.5">
                    {prog.incluso.slice(0, 2).map((item, i) => (
                      <span key={i} className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded-full">
                        ✓ {item.length > 20 ? item.substring(0, 20) + '...' : item}
                      </span>
                    ))}
                    {prog.incluso.length > 2 && (
                      <span className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded-full">
                        +{prog.incluso.length - 2} mais
                      </span>
                    )}
                  </div>

                  {/* Vagas info */}
                  {prog.vagas?.limite && !countdown.passada && (
                    <div className="flex items-center gap-1.5 text-xs text-orange-600 font-medium">
                      <Users size={14} />
                      Vagas limitadas: {prog.vagas.limite} pessoas
                    </div>
                  )}

                  {/* CTA */}
                  <Link to={`/experiencias/${prog.slug}`} className="block">
                    <Button 
                      className="w-full group/btn" 
                      size="sm"
                      variant={countdown.passada ? "outline" : "default"}
                    >
                      {countdown.passada ? 'Ver Galeria' : 'Ver Detalhes'}
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Button>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            📱 Dúvidas? Entre em contato pelo WhatsApp
          </p>
          <a
            href="https://wa.me/5522981602212?text=Olá! Gostaria de saber mais sobre as experiências Mahaflow 2026."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="group">
              <MapPin size={18} className="mr-2" />
              (22) 98160-2212
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
