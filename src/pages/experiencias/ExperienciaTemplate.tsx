import { ArrowLeft, Calendar, MapPin, Clock, Users, CheckCircle, XCircle, CreditCard, AlertTriangle, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { programacoes2026, getCategoriaLabel, getCategoriaColor, WHATSAPP_NUMBER } from '@/data/programacao2026';

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

const ExperienciaTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const experiencia = programacoes2026.find(p => p.slug === slug);

  if (!experiencia) {
    return <Navigate to="/404" replace />;
  }

  const whatsappMessage = `Olá! Tenho interesse na experiência: ${experiencia.nome} (${experiencia.data}). Gostaria de mais informações e reservar minha vaga.`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={imageMap[experiencia.imagem] || praiaImg}
          alt={experiencia.nome}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Back button */}
        <Link to="/#programacao-2026" className="absolute top-24 left-6 z-10">
          <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
            <ArrowLeft size={16} className="mr-2" />
            Voltar
          </Button>
        </Link>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <Badge className={`mb-4 ${getCategoriaColor(experiencia.categoria)}`}>
              {getCategoriaLabel(experiencia.categoria)}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
              {experiencia.nome}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                {experiencia.dataCompleta}
              </span>
              {experiencia.horarioSaida && (
                <span className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  Saída: {experiencia.horarioSaida}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Sobre a Experiência</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {experiencia.descricaoCompleta}
              </p>
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
                  <li key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
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
                      <li key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                        <XCircle className="text-red-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
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
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">Nível</p>
                        <p className="font-semibold text-foreground">{experiencia.dadosTecnicos.nivel}</p>
                      </div>
                    )}
                    {experiencia.dadosTecnicos.distancia && (
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">Distância</p>
                        <p className="font-semibold text-foreground">{experiencia.dadosTecnicos.distancia}</p>
                      </div>
                    )}
                    {experiencia.dadosTecnicos.tempo && (
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">Tempo</p>
                        <p className="font-semibold text-foreground">{experiencia.dadosTecnicos.tempo}</p>
                      </div>
                    )}
                    {experiencia.dadosTecnicos.altimetria && (
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">Altimetria</p>
                        <p className="font-semibold text-foreground">{experiencia.dadosTecnicos.altimetria}</p>
                      </div>
                    )}
                    {experiencia.dadosTecnicos.bioma && (
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">Bioma</p>
                        <p className="font-semibold text-foreground">{experiencia.dadosTecnicos.bioma}</p>
                      </div>
                    )}
                  </div>
                  {experiencia.dadosTecnicos.conservacao && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
                      <p className="text-sm text-muted-foreground mb-2">Unidades de Conservação:</p>
                      <ul className="space-y-1">
                        {experiencia.dadosTecnicos.conservacao.map((uc, i) => (
                          <li key={i} className="text-foreground">• {uc}</li>
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
                      <li key={index} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
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
              <div className="card-elevated p-6 bg-card border border-border/50">
                {/* Price */}
                <div className="text-center mb-6">
                  {experiencia.valor > 0 ? (
                    <>
                      <p className="text-sm text-muted-foreground">Valor</p>
                      <p className="text-4xl font-bold text-primary">{experiencia.valorFormatado}</p>
                    </>
                  ) : (
                    <p className="text-xl font-semibold text-muted-foreground">Valor a definir</p>
                  )}
                </div>

                <Separator className="my-6" />

                {/* Payment Options */}
                {Object.keys(experiencia.pagamento).length > 0 && (
                  <div className="space-y-4 mb-6">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <CreditCard size={18} className="text-primary" />
                      Formas de Pagamento
                    </h3>
                    <div className="space-y-3">
                      {experiencia.pagamento.pixParcelado && (
                        <div className="p-3 bg-secondary/30 rounded-lg">
                          <p className="text-sm font-medium text-foreground">💰 PIX Parcelado</p>
                          <p className="text-xs text-muted-foreground mt-1">{experiencia.pagamento.pixParcelado}</p>
                        </div>
                      )}
                      {experiencia.pagamento.especial && (
                        <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                          <p className="text-sm font-medium text-primary">⭐ Especial Mahaflow</p>
                          <p className="text-xs text-muted-foreground mt-1">{experiencia.pagamento.especial}</p>
                        </div>
                      )}
                      {experiencia.pagamento.pixDesconto && (
                        <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                          <p className="text-sm font-medium text-green-700">🎉 PIX à Vista</p>
                          <p className="text-xs text-muted-foreground mt-1">{experiencia.pagamento.pixDesconto}</p>
                        </div>
                      )}
                      {experiencia.pagamento.cartao && (
                        <div className="p-3 bg-secondary/30 rounded-lg">
                          <p className="text-sm font-medium text-foreground">💳 Cartão de Crédito</p>
                          <p className="text-xs text-muted-foreground mt-1">{experiencia.pagamento.cartao}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Vagas */}
                {experiencia.vagas && (
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-100 mb-6">
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
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full" size="lg">
                    Reservar pelo WhatsApp
                  </Button>
                </a>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  📱 (22) 98160-2212
                </p>
              </div>
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
