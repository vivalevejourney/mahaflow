import { ArrowLeft, Calendar, MapPin, Clock, Users, CheckCircle, XCircle, CreditCard, AlertTriangle, Mountain, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { programacoes2026, getCategoriaLabel, getCategoriaColor, WHATSAPP_NUMBER } from '@/data/programacao2026';
import { differenceInDays, parseISO, isToday, isPast } from 'date-fns';

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

// Função para calcular countdown
const getCountdownInfo = (dataISO: string) => {
  const dataEvento = parseISO(dataISO);
  const dias = differenceInDays(dataEvento, new Date());

  if (isPast(dataEvento) && !isToday(dataEvento)) {
    return { texto: 'Realizada', passada: true, dias: 0 };
  }
  if (isToday(dataEvento)) {
    return { texto: 'É HOJE! 🎉', passada: false, dias: 0 };
  }
  return { texto: `Faltam ${dias} dias`, passada: false, dias };
};

const ExperienciaTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const experiencia = programacoes2026.find(p => p.slug === slug);

  if (!experiencia) {
    return <Navigate to="/404" replace />;
  }

  const countdown = getCountdownInfo(experiencia.dataISO);
  const whatsappMessage = `Olá! Tenho interesse na experiência: ${experiencia.nome} (${experiencia.data}). Gostaria de mais informações e reservar minha vaga.`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image - Fullscreen */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={imageMap[experiencia.imagem] || praiaImg}
          alt={experiencia.nome}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/30" />
        
        {/* Back button */}
        <Link to="/#calendario" className="absolute top-24 left-6 z-10">
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm hover:bg-white">
            <ArrowLeft size={16} className="mr-2" />
            Voltar ao Calendário
          </Button>
        </Link>

        {/* Countdown Badge */}
        {!countdown.passada && (
          <div className="absolute top-24 right-6 z-10">
            <Badge className={`px-4 py-2 text-sm font-bold ${countdown.dias <= 7 ? 'bg-red-500 text-white animate-pulse' : 'bg-primary text-primary-foreground'}`}>
              <Clock size={14} className="mr-2" />
              {countdown.texto}
            </Badge>
          </div>
        )}

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={`${getCategoriaColor(experiencia.categoria)} text-sm`}>
                {getCategoriaLabel(experiencia.categoria)}
              </Badge>
              <Badge variant="outline" className="bg-white/90 text-foreground">
                {experiencia.diaSemana}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {experiencia.nome}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2 text-lg">
                <Calendar size={20} className="text-primary" />
                {experiencia.dataCompleta}
              </span>
              {experiencia.horarioSaida && (
                <span className="flex items-center gap-2 text-lg">
                  <Clock size={20} className="text-primary" />
                  Saída: {experiencia.horarioSaida}
                </span>
              )}
              <span className="flex items-center gap-2 text-lg">
                <MapPin size={20} className="text-primary" />
                {experiencia.localPartida}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Conceito da Experiência - NOVO */}
            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
              <div className="pl-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold text-foreground">Conceito da Experiência</h2>
                </div>
                <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                  "{experiencia.conceito}"
                </blockquote>
              </div>
            </section>

            <Separator />

            {/* O que você vai viver - NOVO */}
            <section>
              <div className="flex items-center gap-2 mb-6">
                <Heart className="text-primary" size={24} />
                <h2 className="text-2xl font-bold text-foreground">O que você vai viver</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {experiencia.oQueVaiViver.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <Separator />

            {/* O que está incluso */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="text-green-500" size={24} />
                O que está incluso
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {experiencia.incluso.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* O que não está incluso */}
            {experiencia.naoIncluso && experiencia.naoIncluso.length > 0 && (
              <>
                <Separator />
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <XCircle className="text-red-500" size={24} />
                    Não incluso
                  </h2>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {experiencia.naoIncluso.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                        <XCircle className="text-red-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            )}

            {/* Roteiro (se existir) */}
            {experiencia.roteiro && experiencia.roteiro.length > 0 && (
              <>
                <Separator />
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Calendar className="text-primary" size={24} />
                    Roteiro
                  </h2>
                  <div className="space-y-3">
                    {experiencia.roteiro.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-primary font-bold">{index + 1}</span>
                        </div>
                        <span className="text-foreground pt-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* Dados Técnicos */}
            {experiencia.dadosTecnicos && (
              <>
                <Separator />
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Mountain className="text-primary" size={24} />
                    Dados Técnicos
                  </h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {experiencia.dadosTecnicos.nivel && (
                      <div className="p-4 bg-secondary/30 rounded-xl border border-border/50">
                        <p className="text-sm text-muted-foreground">Nível</p>
                        <p className="font-semibold text-foreground">{experiencia.dadosTecnicos.nivel}</p>
                      </div>
                    )}
                    {experiencia.dadosTecnicos.distancia && (
                      <div className="p-4 bg-secondary/30 rounded-xl border border-border/50">
                        <p className="text-sm text-muted-foreground">Distância</p>
                        <p className="font-semibold text-foreground">{experiencia.dadosTecnicos.distancia}</p>
                      </div>
                    )}
                    {experiencia.dadosTecnicos.tempo && (
                      <div className="p-4 bg-secondary/30 rounded-xl border border-border/50">
                        <p className="text-sm text-muted-foreground">Tempo</p>
                        <p className="font-semibold text-foreground">{experiencia.dadosTecnicos.tempo}</p>
                      </div>
                    )}
                    {experiencia.dadosTecnicos.altimetria && (
                      <div className="p-4 bg-secondary/30 rounded-xl border border-border/50">
                        <p className="text-sm text-muted-foreground">Altimetria</p>
                        <p className="font-semibold text-foreground">{experiencia.dadosTecnicos.altimetria}</p>
                      </div>
                    )}
                    {experiencia.dadosTecnicos.bioma && (
                      <div className="p-4 bg-secondary/30 rounded-xl border border-border/50">
                        <p className="text-sm text-muted-foreground">Bioma</p>
                        <p className="font-semibold text-foreground">{experiencia.dadosTecnicos.bioma}</p>
                      </div>
                    )}
                  </div>
                  {experiencia.dadosTecnicos.conservacao && (
                    <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-100">
                      <p className="text-sm text-muted-foreground mb-2">Unidades de Conservação:</p>
                      <ul className="space-y-1">
                        {experiencia.dadosTecnicos.conservacao.map((uc, i) => (
                          <li key={i} className="text-foreground flex items-center gap-2">
                            <CheckCircle size={14} className="text-green-500" />
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              </>
            )}

            {/* Informações Importantes */}
            {experiencia.informacoesImportantes && experiencia.informacoesImportantes.length > 0 && (
              <>
                <Separator />
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <AlertTriangle className="text-amber-500" size={24} />
                    Informações Importantes
                  </h2>
                  <ul className="space-y-3">
                    {experiencia.informacoesImportantes.map((info, index) => (
                      <li key={index} className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                        <AlertTriangle className="text-amber-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-foreground">{info}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            )}
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl overflow-hidden bg-card border border-border/50 shadow-xl">
                {/* Header do Card */}
                <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-center">
                  <p className="text-primary-foreground/80 text-sm font-medium">Investimento</p>
                  {experiencia.valor > 0 ? (
                    <p className="text-4xl font-bold text-primary-foreground">{experiencia.valorFormatado}</p>
                  ) : (
                    <p className="text-xl font-semibold text-primary-foreground/80">{experiencia.valorFormatado}</p>
                  )}
                  {experiencia.valor > 0 && (
                    <p className="text-primary-foreground/70 text-sm mt-1">por pessoa</p>
                  )}
                </div>

                <div className="p-6 space-y-6">
                  {/* Payment Options */}
                  {Object.keys(experiencia.pagamento).length > 0 && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <CreditCard size={18} className="text-primary" />
                        Formas de Pagamento
                      </h3>
                      <div className="space-y-3">
                        {experiencia.pagamento.pixParcelado && (
                          <div className="p-4 bg-secondary/30 rounded-xl">
                            <p className="text-sm font-medium text-foreground flex items-center gap-2">
                              💰 PIX Parcelado
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">{experiencia.pagamento.pixParcelado}</p>
                          </div>
                        )}
                        {experiencia.pagamento.especial && (
                          <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                            <p className="text-sm font-medium text-primary flex items-center gap-2">
                              ⭐ Especial Mahaflow
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">{experiencia.pagamento.especial}</p>
                          </div>
                        )}
                        {experiencia.pagamento.pixDesconto && (
                          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                            <p className="text-sm font-medium text-green-700 flex items-center gap-2">
                              🎉 PIX à Vista
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">{experiencia.pagamento.pixDesconto}</p>
                          </div>
                        )}
                        {experiencia.pagamento.cartao && (
                          <div className="p-4 bg-secondary/30 rounded-xl">
                            <p className="text-sm font-medium text-foreground flex items-center gap-2">
                              💳 Cartão de Crédito
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">{experiencia.pagamento.cartao}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Vagas */}
                  {experiencia.vagas && (
                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                      <div className="flex items-center gap-2 text-orange-700 font-medium">
                        <Users size={18} />
                        Vagas Limitadas
                      </div>
                      {experiencia.vagas.limite && (
                        <p className="text-sm text-orange-600 mt-1">Máximo: {experiencia.vagas.limite} pessoas</p>
                      )}
                      {experiencia.vagas.minimo && (
                        <p className="text-sm text-orange-600">Mínimo: {experiencia.vagas.minimo} pessoas</p>
                      )}
                    </div>
                  )}

                  {/* CTA Button */}
                  {!countdown.passada && (
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full group" size="lg">
                        Reservar Agora
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  )}
                  
                  <p className="text-xs text-center text-muted-foreground">
                    📱 (22) 98160-2212 · Atendimento via WhatsApp
                  </p>
                </div>
              </div>

              {/* Countdown Card */}
              {!countdown.passada && countdown.dias > 0 && (
                <div className={`p-6 rounded-2xl text-center ${countdown.dias <= 7 ? 'bg-red-500 text-white' : 'bg-primary/10'}`}>
                  <Clock size={24} className={`mx-auto mb-2 ${countdown.dias <= 7 ? 'text-white' : 'text-primary'}`} />
                  <p className={`text-3xl font-bold ${countdown.dias <= 7 ? 'text-white' : 'text-primary'}`}>{countdown.dias}</p>
                  <p className={countdown.dias <= 7 ? 'text-white/80' : 'text-muted-foreground'}>dias restantes</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton message={whatsappMessage} />
    </div>
  );
};

export default ExperienciaTemplate;
