import { ArrowRight, Calendar, MapPin, Users, Clock, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { programacoes2026, getCategoriaLabel, getCategoriaColor, getProgramacoesPorMes } from '@/data/programacao2026';
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

// Função para calcular e formatar dias restantes com mensagens aprimoradas
const getCountdownInfo = (dataISO: string) => {
  const dataEvento = parseISO(dataISO);
  const hoje = new Date();
  const dias = differenceInDays(dataEvento, hoje);

  if (isPast(dataEvento) && !isToday(dataEvento)) {
    return {
      texto: 'Realizada',
      emoji: '✅',
      className: 'bg-muted/80 text-muted-foreground',
      urgente: false,
      passada: true,
      subtexto: 'Ver galeria',
    };
  }
  
  if (isToday(dataEvento)) {
    return {
      texto: 'É HOJE!',
      emoji: '🎉',
      className: 'bg-green-500 text-white animate-pulse shadow-lg shadow-green-500/30',
      urgente: true,
      passada: false,
      subtexto: 'Experiência acontecendo agora',
    };
  }
  
  if (isTomorrow(dataEvento)) {
    return {
      texto: 'AMANHÃ!',
      emoji: '⚡',
      className: 'bg-amber-500 text-white animate-pulse shadow-lg shadow-amber-500/30',
      urgente: true,
      passada: false,
      subtexto: 'Últimas horas para garantir',
    };
  }
  
  if (dias <= 7) {
    return {
      texto: `${dias} dias`,
      emoji: '🚨',
      className: 'bg-red-500 text-white shadow-lg shadow-red-500/30',
      urgente: true,
      passada: false,
      subtexto: 'ÚLTIMAS VAGAS!',
    };
  }

  if (dias <= 14) {
    return {
      texto: `${dias} dias`,
      emoji: '🔥',
      className: 'bg-orange-500 text-white',
      urgente: true,
      passada: false,
      subtexto: 'Garanta sua vaga',
    };
  }
  
  if (dias <= 30) {
    return {
      texto: `${dias} dias`,
      emoji: '⏰',
      className: 'bg-yellow-400 text-yellow-900',
      urgente: false,
      passada: false,
      subtexto: 'Reserve com antecedência',
    };
  }
  
  return {
    texto: `${dias} dias`,
    emoji: '📅',
    className: 'bg-primary/20 text-primary',
    urgente: false,
    passada: false,
    subtexto: 'Inscrições abertas',
  };
};

export const Programacao2026Section = () => {
  const programacoesPorMes = getProgramacoesPorMes();
  const mesesOrdenados = Object.keys(programacoesPorMes);

  return (
    <section id="calendario" className="section-padding relative overflow-hidden">
      {/* Background gradiente premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header Premium */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-2 text-sm">
            <Sparkles size={16} className="mr-2" />
            Calendário Oficial 2026
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Experiências Mahaflow 2026
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Transporte incluso em todas as experiências. Escolha sua próxima aventura e 
            reserve sua vaga com antecedência.
          </p>
        </div>

        {/* Credibilidade e Regras */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Reservas pela plataforma Mahaflow</p>
                  <p className="text-sm text-muted-foreground">Cadastro obrigatório · Vagas limitadas · Confirmação mediante pagamento</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-sm text-muted-foreground">Inscrições organizadas e seguras</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline por Mês */}
        <div className="space-y-16">
          {mesesOrdenados.map((mes, mesIndex) => (
            <div key={mes} className="animate-fade-in-up" style={{ animationDelay: `${mesIndex * 0.1}s` }}>
              {/* Cabeçalho do Mês */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                    <Calendar className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{mes}</h3>
                    <p className="text-sm text-muted-foreground">{programacoesPorMes[mes].length} experiência{programacoesPorMes[mes].length > 1 ? 's' : ''}</p>
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
              </div>

              {/* Cards do Mês */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programacoesPorMes[mes].map((prog, index) => {
                  const countdown = getCountdownInfo(prog.dataISO);
                  
                  return (
                    <article
                      key={prog.id}
                      className={`group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${countdown.passada ? 'opacity-70' : ''}`}
                      style={{ animationDelay: `${(mesIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={imageMap[prog.imagem] || praiaImg}
                          alt={prog.nome}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        
                        {/* Data + Dia da Semana */}
                        <div className="absolute top-4 left-4">
                          <div className="bg-white rounded-xl px-4 py-3 shadow-xl">
                            <p className="text-xs font-bold text-primary uppercase tracking-wider">
                              {prog.diaSemana}
                            </p>
                            <p className="text-sm font-bold text-foreground">
                              {prog.data}
                            </p>
                          </div>
                        </div>

                        {/* Category badge */}
                        <Badge 
                          className={`absolute top-4 right-4 ${getCategoriaColor(prog.categoria)} shadow-lg`}
                        >
                          {getCategoriaLabel(prog.categoria)}
                        </Badge>

                        {/* Countdown - Redesenhado */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className={`${countdown.className} rounded-xl px-4 py-3 flex items-center justify-between`}>
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span className="font-bold">
                                {countdown.emoji} {countdown.texto}
                              </span>
                            </div>
                            {countdown.subtexto && (
                              <span className="text-xs opacity-90 hidden sm:block">
                                {countdown.subtexto}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Título e Local */}
                        <div>
                          <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {prog.nome}
                          </h4>
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <MapPin size={14} className="text-primary shrink-0" />
                            Saída: {prog.localPartida}
                          </div>
                        </div>

                        {/* Conceito - Citação Emocional */}
                        <div className="relative pl-4 border-l-2 border-primary/30">
                          <p className="text-sm text-muted-foreground italic line-clamp-2">
                            "{prog.conceito.split('.')[0]}."
                          </p>
                        </div>

                        {/* Incluso preview */}
                        <div className="flex flex-wrap gap-1.5">
                          {prog.incluso.slice(0, 2).map((item, i) => (
                            <span key={i} className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded-full flex items-center gap-1">
                              <CheckCircle2 size={10} className="text-green-500" />
                              {item.length > 18 ? item.substring(0, 18) + '...' : item}
                            </span>
                          ))}
                          {prog.incluso.length > 2 && (
                            <span className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded-full">
                              +{prog.incluso.length - 2}
                            </span>
                          )}
                        </div>

                        {/* Preço + Vagas */}
                        <div className="flex items-center justify-between pt-2">
                          <div>
                            {prog.valor > 0 ? (
                              <>
                                <p className="text-2xl font-bold text-primary">{prog.valorFormatado}</p>
                                <p className="text-xs text-muted-foreground">por pessoa</p>
                              </>
                            ) : (
                              <p className="text-lg font-semibold text-muted-foreground">{prog.valorFormatado}</p>
                            )}
                          </div>
                          {prog.vagas?.limite && !countdown.passada && (
                            <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">
                              <Users size={12} className="mr-1" />
                              {prog.vagas.limite} vagas
                            </Badge>
                          )}
                        </div>

                        {/* CTA */}
                        <Link to={`/experiencias/${prog.slug}`} className="block pt-2">
                          <Button 
                            className="w-full group/btn font-semibold" 
                            size="lg"
                            variant={countdown.passada ? "outline" : "default"}
                          >
                            {countdown.passada ? 'Ver Galeria' : 'Reservar Agora'}
                            <ArrowRight
                              size={18}
                              className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                            />
                          </Button>
                        </Link>
                      </div>

                      {/* Urgência badge para últimas vagas */}
                      {countdown.urgente && !countdown.passada && (
                        <div className="absolute -top-1 -right-1">
                          <span className="flex h-6 w-6">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500"></span>
                          </span>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Manifesto Mahaflow */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/30 to-primary/5 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed mb-4">
                "Mahaflow não vende passeio.<br />
                <span className="text-primary">Vende estado mental.</span>"
              </blockquote>
              <p className="text-muted-foreground">
                Cada experiência é uma oportunidade de transformação.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA WhatsApp */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Dúvidas sobre as experiências? Fale com a gente!
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
