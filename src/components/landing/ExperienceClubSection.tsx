import { Sparkles, MapPin, CreditCard, Gift, Star, MessageCircle, Quote, ChevronRight, Clock, Compass, Mountain, Crown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const planos = [
  {
    nome: 'Descobridor(a)',
    descricao: 'Para quem quer dar o primeiro passo e experimentar vivências locais com leveza.',
    valor: 'R$ 30',
    icon: Compass,
    popular: false,
    beneficios: [
      'Acesso a experiências do nível Descobridor',
      'Descontos progressivos',
      'Grupo WhatsApp da comunidade',
    ],
  },
  {
    nome: 'Explorador(a)',
    descricao: 'Para quem quer participar com frequência das vivências locais e passeios regionais.',
    valor: 'R$ 50',
    icon: MapPin,
    popular: false,
    beneficios: [
      'Tudo do Descobridor',
      'Acesso a experiências de maior duração',
      'Prioridade nas vagas',
      'Sorteios mensais',
    ],
  },
  {
    nome: 'Aventureiro(a)',
    descricao: 'Para quem busca experiências completas, viagens fora da cidade e aventuras de verdade.',
    valor: 'R$ 75',
    icon: Mountain,
    popular: true,
    beneficios: [
      'Tudo do Explorador',
      'Viagens regionais inclusas nos créditos',
      'Acesso antecipado às novas experiências',
      'Transporte incluso em experiências selecionadas',
    ],
  },
  {
    nome: 'Lenda Mahaflow',
    descricao: 'Para os que fazem do Mahaflow um estilo de vida e querem prioridade e exclusividade em tudo.',
    valor: 'R$ 100',
    icon: Crown,
    popular: false,
    beneficios: [
      'Tudo do Aventureiro',
      'Prioridade absoluta nas vagas',
      'Acesso VIP a experiências exclusivas',
      'Convites para eventos especiais',
      'Nome na comunidade Lenda',
    ],
  },
];

const dores = [
  'Quero fazer coisas diferentes, mas sempre acabo no mesmo lugar',
  'Até quero ir, mas transporte sempre é um problema',
  'Quando vejo, já passou mais um ano',
  'Não tenho companhia',
  'Tudo fica caro quando deixo pra decidir em cima da hora',
];

const passos = [
  { num: '1', text: 'Você escolhe seu nível e paga um valor fixo todo mês' },
  { num: '2', text: 'Acumula créditos mensalmente' },
  { num: '3', text: 'Usa em experiências Mahaflow de acordo com o seu plano' },
  { num: '4', text: 'E ainda pode participar de sorteios exclusivos' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

export const ExperienceClubSection = () => {
  const getWhatsappUrl = (planName: string) =>
    `https://wa.me/5522981602212?text=${encodeURIComponent(`Olá! Quero saber mais sobre o plano ${planName} do Mahaflow Experience! 🌿`)}`;

  const ctaWhatsappUrl = `https://wa.me/5522981602212?text=${encodeURIComponent('Olá! Quero entrar para o Mahaflow Experience! 🌿')}`;

  return (
    <section id="experience-club" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 space-y-24">
        {/* Bloco 1 — Introdução */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1.5 text-sm">
            <Sparkles size={14} className="mr-1.5" /> Mahaflow Experience
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Mahaflow Experience
          </h2>
          <p className="text-primary font-semibold text-xl">Natureza em Movimento</p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Um clube de experiências onde você contribui mensalmente e acumula créditos para viver viagens, trilhas, passeios e vivências organizadas pela Mahaflow.
          </p>
          <p className="text-primary font-semibold text-lg italic">
            Sem pressa. Sem culpa. Sem pesar no bolso.
          </p>
        </motion.div>

        {/* Bloco 2 — Como funciona */}
        <motion.div {...fadeUp} className="space-y-10">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Como funciona?</h3>
            <p className="text-muted-foreground text-lg">Simples. Leve. Possível.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {passos.map((passo) => (
              <Card key={passo.num} className="bg-card/80 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="pt-8 pb-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto">
                    {passo.num}
                  </div>
                  <p className="text-foreground font-medium">{passo.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Bloco 3 — Dores */}
        <motion.div {...fadeUp} className="max-w-2xl mx-auto space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Se identifica com isso?
          </h3>
          <div className="space-y-4">
            {dores.map((dor, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40">
                <Quote size={20} className="text-primary/60 mt-0.5 shrink-0" />
                <p className="text-muted-foreground italic">{dor}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bloco 4 — Planos */}
        <motion.div {...fadeUp} className="space-y-10">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Escolha seu plano</h3>
            <p className="text-muted-foreground text-lg">Invista em você. Todo mês.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {planos.map((plano) => {
              const Icon = plano.icon;
              return (
                <Card
                  key={plano.nome}
                  className={`relative bg-card/80 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1 ${
                    plano.popular
                      ? 'border-primary shadow-glow ring-1 ring-primary/20'
                      : 'border-border/50'
                  }`}
                >
                  {plano.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs">
                        Mais popular ⭐
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8 pb-2">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{plano.nome}</CardTitle>
                    <CardDescription className="text-sm mt-2">{plano.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pb-2 space-y-4">
                    <div className="text-3xl font-bold text-foreground">
                      {plano.valor}
                      <span className="text-sm font-normal text-muted-foreground">/mês</span>
                    </div>
                    <ul className="text-left space-y-2">
                      {plano.beneficios.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check size={14} className="text-primary mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="justify-center pb-6">
                    <a href={getWhatsappUrl(plano.nome)} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant={plano.popular ? 'default' : 'outline'}
                        size="sm"
                        className="gap-1.5"
                      >
                        <MessageCircle size={14} />
                        Quero esse plano
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Bloco 5 — CTA Final */}
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto space-y-6 py-8">
          <p className="text-xl text-muted-foreground italic">
            Essas experiências e muito mais. Venha nos conhecer!
          </p>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground">
            Sua próxima experiência começa agora
          </h3>
          <a href={ctaWhatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-glow gap-2 mt-4">
              <MessageCircle size={20} />
              Fale com a Dani
              <ChevronRight size={18} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
