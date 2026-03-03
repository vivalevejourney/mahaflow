import { Sparkles, Users, MapPin, CreditCard, Gift, Truck, Star, MessageCircle, Quote, ChevronRight, Clock, Compass, Mountain, Crown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const planos = [
  {
    nome: 'Descobridor(a)',
    descricao: 'Para iniciantes que querem dar o primeiro passo e viver novas experiências.',
    valor: 'R$ 30',
    icon: Compass,
    popular: false,
  },
  {
    nome: 'Explorador(a)',
    descricao: 'Para quem quer participar com frequência das vivências locais.',
    valor: 'R$ 50',
    icon: MapPin,
    popular: false,
  },
  {
    nome: 'Aventureiro(a)',
    descricao: 'Para quem busca experiências completas e viagens fora da cidade.',
    valor: 'R$ 75',
    icon: Mountain,
    popular: true,
  },
  {
    nome: 'Lenda',
    descricao: 'Para os que fazem do Mahaflow um estilo de vida e querem prioridade em tudo.',
    valor: 'R$ 100',
    icon: Crown,
    popular: false,
  },
];

const dores = [
  'Quero fazer coisas diferentes, mas sempre acabo no mesmo lugar',
  'Até quero ir, mas transporte sempre é um problema',
  'Quando vejo, já passou mais um ano',
  'Não tenho companhia',
  'Tudo fica caro quando deixo pra decidir em cima da hora',
];

const beneficios = [
  { icon: Mountain, text: 'Experiências na natureza que você não faria sozinho(a)' },
  { icon: MapPin, text: 'Novos lugares, novos cenários, novas histórias' },
  { icon: Star, text: 'Vagas exclusivas e acesso antecipado' },
  { icon: CreditCard, text: 'Valores mais acessíveis' },
  { icon: Clock, text: 'Pagamento facilitado (sem juros e sem cartão)' },
  { icon: Truck, text: 'Transporte incluso' },
  { icon: Gift, text: 'Sorteios e benefícios exclusivos' },
];

const passos = [
  { num: '1', text: 'Você escolhe quanto investir por mês' },
  { num: '2', text: 'Acumula créditos mensalmente' },
  { num: '3', text: 'Usa em experiências Mahaflow' },
  { num: '4', text: 'E ainda pode participar de sorteios' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

export const ExperienceClubSection = () => {
  const whatsappUrl = `https://wa.me/5522981602212?text=${encodeURIComponent('Olá! Quero saber mais sobre o Mahaflow Experience! 🌿')}`;

  return (
    <section id="experience-club" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 space-y-24">
        {/* Bloco 1 — Introdução emocional */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="outline" className="text-primary border-primary/30 px-4 py-1.5 text-sm">
            <Sparkles size={14} className="mr-1.5" /> Mahaflow Experience
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Quando foi que viver experiências virou algo tão distante?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            O Mahaflow Experience nasceu para tornar o bem-estar, o ecoturismo e a conexão com a natureza acessíveis a todos.
          </p>
          <p className="text-primary font-semibold text-lg italic">
            Sem pressa. Sem culpa. Sem pesar no bolso.
          </p>
        </motion.div>

        {/* Bloco 2 — O que é */}
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            O que é o Mahaflow Experience?
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Um clube de experiências onde você contribui mensalmente e acumula créditos para viver viagens, trilhas, passeios e vivências organizadas pela Mahaflow.
          </p>
          <p className="text-primary/80 font-medium italic">
            "Viver deixa de ser exceção e passa a fazer parte do caminho."
          </p>
        </motion.div>

        {/* Bloco 3 — Como funciona */}
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
          <p className="text-center text-primary/80 font-medium italic">
            "Aqui, constância vale mais que pressa."
          </p>
        </motion.div>

        {/* Bloco 4 — Dores */}
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

        {/* Bloco 5 — Planos */}
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
                  <CardContent className="text-center pb-2">
                    <div className="text-3xl font-bold text-foreground">
                      {plano.valor}
                      <span className="text-sm font-normal text-muted-foreground">/mês</span>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center pb-6">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant={plano.popular ? 'default' : 'outline'}
                        size="sm"
                        className="gap-1.5"
                      >
                        <MessageCircle size={14} />
                        Quero esse
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Bloco 6 — Benefícios */}
        <motion.div {...fadeUp} className="max-w-3xl mx-auto space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            Ao entrar, você se torna Maha 🌿
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {beneficios.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <p className="text-foreground text-sm font-medium">{b.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bloco 7 — CTA Final */}
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto space-y-6 py-8">
          <h3 className="text-2xl md:text-4xl font-bold text-foreground">
            Sua próxima experiência começa agora
          </h3>
          <p className="text-muted-foreground text-lg">
            Viva aos poucos e intensamente. Faça parte do Mahaflow Experience.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-glow gap-2 mt-4">
              <MessageCircle size={20} />
              Fale com a gente
              <ChevronRight size={18} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
