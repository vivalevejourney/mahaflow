import { ArrowRight, Calendar, MapPin, Users, Clock, Sparkles, CheckCircle2, Shield, Camera, ChevronDown, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { programacoes2026, getCategoriaLabel, getCategoriaColor, getProgramacoesPorMes, WHATSAPP_NUMBER } from '@/data/programacao2026';
import { getExperienciaMedia } from '@/data/experienciasImages';
import { differenceInDays, parseISO, isToday, isTomorrow, isPast } from 'date-fns';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';
import { ShareButtons } from '@/components/landing/ShareButtons';

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

// Função para cor do badge baseado em palavras-chave
const getBadgeColor = (badge: string) => {
  const lower = badge.toLowerCase();
  if (lower.includes('feriado')) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
  if (lower.includes('semana santa')) return 'bg-pink-100 text-pink-700 border-pink-300';
  if (lower.includes('mulheres')) return 'bg-purple-100 text-purple-700 border-purple-300';
  if (lower.includes('confirmada')) return 'bg-green-100 text-green-700 border-green-300';
  if (lower.includes('almoço') || lower.includes('almoco')) return 'bg-amber-100 text-amber-700 border-amber-300';
  return 'bg-muted text-muted-foreground border-border';
};

export const Programacao2026Section = () => {
  const programacoesPorMes = getProgramacoesPorMes();
  const mesesOrdenados = Object.keys(programacoesPorMes);
  const [expandedPast, setExpandedPast] = useState<Record<string, boolean>>({});

  // Encontrar a próxima experiência (primeira que ainda não passou)
  const proximaExperiencia = programacoes2026.find(prog => {
    const data = parseISO(prog.dataISO);
    return !isPast(data) || isToday(data);
  });

  const toggleExpanded = (id: string) => {
    setExpandedPast(prev => ({ ...prev, [id]: !prev[id] }));
  };

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
                  const media = getExperienciaMedia(prog.slug);
                  const isExpanded = expandedPast[prog.id] || false;
                  
                  // Experiência já realizada - layout compacto e retrátil
                  if (countdown.passada) {
                    return (
                      <Collapsible
                        key={prog.id}
                        open={isExpanded}
                        onOpenChange={() => toggleExpanded(prog.id)}
                        className="col-span-1"
                      >
                        <div className="rounded-2xl border border-border/30 bg-muted/20 overflow-hidden">
                          {/* Header compacto - sempre visível */}
                          <CollapsibleTrigger className="w-full">
                            <div className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <Badge className="bg-muted/80 text-muted-foreground shrink-0 text-xs">
                                  ✅ Realizada
                                </Badge>
                                <span className="font-medium text-muted-foreground truncate">
                                  {prog.nome}
                                </span>
                                <span className="text-sm text-muted-foreground/60 hidden sm:inline shrink-0">
                                  {prog.data}
                                </span>
                              </div>
                              <ChevronDown 
                                size={20} 
                                className={`text-muted-foreground transition-transform duration-200 shrink-0 ml-2 ${isExpanded ? 'rotate-180' : ''}`} 
                              />
                            </div>
                          </CollapsibleTrigger>
                          
                          {/* Conteúdo expandido */}
                          <CollapsibleContent>
                            <div className="border-t border-border/30">
                              {/* Imagem de Capa */}
                              <div className="relative aspect-[16/10] overflow-hidden">
                                <img 
                                  src={media.capa} 
                                  alt={prog.nome}
                                  className="w-full h-full object-cover grayscale-[30%]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                
                                {/* Badges no topo da imagem */}
                                <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                                  <Badge className={`${getCategoriaColor(prog.categoria)} shrink-0`}>
                                    {getCategoriaLabel(prog.categoria)}
                                  </Badge>
                                  
                                  {/* Indicador de Galeria ou Vídeo */}
                                  <div className="flex items-center gap-2">
                                    {media.video && (
                                      <div className="flex items-center gap-1.5 bg-red-500/90 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                                        🎬 Vídeo
                                      </div>
                                    )}
                                    {media.galeria && media.galeria.length > 0 && (
                                      <div className="flex items-center gap-1.5 bg-black/70 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                                        <Camera size={12} />
                                        {media.galeria.length} fotos
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="p-4 space-y-3">
                                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                  <MapPin size={14} className="text-primary shrink-0" />
                                  Saída: {prog.localPartida}
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <p className="text-lg font-bold text-muted-foreground">{prog.valorFormatado}</p>
                                </div>

                                {/* CTA + Share */}
                                <div className="flex items-center justify-between">
                                  <Link to={`/experiencias/${prog.slug}`} className="flex-1 mr-2">
                                    <Button 
                                      className="w-full group/btn font-semibold" 
                                      size="sm"
                                      variant="outline"
                                    >
                                      Ver Galeria
                                      <ArrowRight
                                        size={16}
                                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                                      />
                                    </Button>
                                  </Link>
                                  <ShareButtons nome={prog.nome} data={prog.data} valorFormatado={prog.valorFormatado} slug={prog.slug} />
                                </div>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </div>
                      </Collapsible>
                    );
                  }

                  // Experiência futura - layout completo
                  return (
                    <article
                      key={prog.id}
                      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl ${
                        prog.id === proximaExperiencia?.id 
                          ? 'border-amber-400/60 ring-2 ring-amber-400/40 shadow-xl shadow-amber-500/20' 
                          : 'border-border/50 hover:border-primary/40 hover:shadow-primary/10'
                      }`}
                      style={{ animationDelay: `${(mesIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      {/* Badge PRÓXIMA EXPERIÊNCIA */}
                      {prog.id === proximaExperiencia?.id && !prog.emBreve && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 px-4 py-1.5 text-sm font-bold animate-pulse whitespace-nowrap">
                            ⭐ PRÓXIMA EXPERIÊNCIA
                          </Badge>
                        </div>
                      )}
                      {/* Badge EM BREVE */}
                      {prog.emBreve && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                          <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30 px-5 py-2 text-sm font-bold whitespace-nowrap">
                            🔜 EM BREVE
                          </Badge>
                        </div>
                      )}
                      {/* Imagem de Capa */}
                      <div className={`relative overflow-hidden ${
                        prog.id === proximaExperiencia?.id 
                          ? 'aspect-[4/3] md:aspect-[16/10]' 
                          : 'aspect-[4/3] md:aspect-[16/10]'
                      }`}>
                        <img 
                          src={media.capa} 
                          alt={prog.nome}
                          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                            prog.slug === 'cachoeira-bicuda' ? 'object-[center_30%]' : ''
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Badges no topo da imagem */}
                        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                          <Badge className={`${getCategoriaColor(prog.categoria)} shrink-0`}>
                            {getCategoriaLabel(prog.categoria)}
                          </Badge>
                          
                          {/* Indicador de Galeria ou Vídeo */}
                          <div className="flex items-center gap-2">
                            {media.video && (
                              <div className="flex items-center gap-1.5 bg-red-500/90 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                                🎬 Vídeo
                              </div>
                            )}
                            {media.galeria && media.galeria.length > 0 && (
                              <div className="flex items-center gap-1.5 bg-black/70 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                                <Camera size={12} />
                                {media.galeria.length} fotos
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Info na parte inferior da imagem */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-12 rounded-lg bg-white/95 flex flex-col items-center justify-center">
                              <span className="text-[10px] font-medium text-primary uppercase leading-none">
                                {prog.diaSemana.slice(0, 3)}
                              </span>
                              <span className="text-lg font-bold text-foreground leading-none">
                                {prog.data.split(' ')[0]}
                              </span>
                            </div>
                            <div className="text-white">
                              <p className="text-sm font-semibold">{prog.data}</p>
                              <p className="text-xs opacity-80">{prog.dataCompleta?.split(' de ').slice(1).join(' de ') || '2026'}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Countdown */}
                      <div className="px-4 pt-3">
                        <div className={`${countdown.className} rounded-lg px-3 py-2 flex items-center justify-between text-sm`}>
                          <div className="flex items-center gap-2">
                            <Clock size={14} />
                            <span className="font-semibold">
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

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Título e Local */}
                        <div>
                          <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {prog.nome}
                          </h4>
                          
                          {/* Badges customizados */}
                          {prog.badges && prog.badges.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {prog.badges.map((badge, i) => (
                                <Badge
                                  key={i}
                                  className={`text-xs font-medium ${getBadgeColor(badge)}`}
                                >
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                          )}
                          
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
                        <div className="pt-2">
                          {prog.opcoes && prog.opcoes.length > 0 ? (
                            <div className="space-y-2">
                              {prog.opcoes.map((opcao, i) => (
                                <div key={i} className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                                  opcao.destaque 
                                    ? 'bg-orange-50 border border-orange-200' 
                                    : 'bg-secondary/30'
                                }`}>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-medium text-foreground">{opcao.nome}</span>
                                    {opcao.destaque && (
                                      <span className="text-xs font-semibold text-orange-600 flex items-center gap-1 mt-0.5">
                                        <Clock size={10} />
                                        {opcao.destaque}
                                      </span>
                                    )}
                                  </div>
                                  <span className={`text-lg font-bold ${opcao.destaque ? 'text-orange-600' : 'text-primary'}`}>
                                    {opcao.valorFormatado}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex items-center justify-between">
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
                              {prog.vagas?.limite && (
                                <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">
                                  <Users size={12} className="mr-1" />
                                  {prog.vagas.limite} vagas
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>

                        {/* CTA + Share */}
                        {prog.emBreve ? (
                          <div className="pt-2 space-y-2">
                            <a
                              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse na experiência de ${prog.nome} e quero ser avisado quando abrir as inscrições! 🌿`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block"
                            >
                              <Button className="w-full group/btn font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white" size="lg">
                                <Bell size={18} className="mr-2" />
                                Quero ser avisado
                              </Button>
                            </a>
                            <div className="flex justify-center">
                              <ShareButtons nome={prog.nome} data={prog.data} valorFormatado={prog.valorFormatado} slug={prog.slug} />
                            </div>
                          </div>
                        ) : (
                          <div className="pt-2 space-y-2">
                            <Link to={`/experiencias/${prog.slug}`} className="block">
                              <Button 
                                className="w-full group/btn font-semibold" 
                                size="lg"
                              >
                                Detalhes / Reservar
                                <ArrowRight
                                  size={18}
                                  className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                                />
                              </Button>
                            </Link>
                            <div className="flex justify-center">
                              <ShareButtons nome={prog.nome} data={prog.data} valorFormatado={prog.valorFormatado} slug={prog.slug} />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Urgência badge para últimas vagas */}
                      {countdown.urgente && (
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
