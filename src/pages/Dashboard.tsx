import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  MapPin,
  Clock,
  QrCode,
  Settings,
  LogOut,
  Bell,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  Heart,
  X,
  AlertTriangle,
  Info,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { useGestor } from '@/contexts/GestorContext';
import { events, experiences, formatDate, formatPrice } from '@/data/mockData';

// Import images for activities
import raftingImage from '@/assets/mahaflow-rafting.jpg';
import grupoImage from '@/assets/mahaflow-grupo.jpg';
import raftingVermelho from '@/assets/mahaflow-rafting-vermelho.jpg';
import remoVaa from '@/assets/mahaflow-remo-vaa.jpg';
import flutuacao from '@/assets/mahaflow-flutuacao.jpg';
import trilha from '@/assets/mahaflow-trilha.jpg';
import praiaGrupo from '@/assets/mahaflow-praia-grupo.jpg';
import montanhaAzul from '@/assets/mahaflow-montanha-azul.jpg';

// Mock user data
const mockUser = {
  name: 'João Silva',
  email: 'joao@email.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  memberSince: '2024-03-15',
  totalExperiences: 8,
  upcomingEvents: 2,
  points: 450,
  level: 'Explorador',
};

const upcomingActivities = [
  {
    id: '1',
    name: 'Rafting de Verão',
    date: '2025-11-30',
    location: 'Rio Paraíba do Sul',
    status: 'confirmed',
    image: raftingImage,
  },
  {
    id: '2',
    name: 'Domingão do Bem-Estar',
    date: '2025-12-07',
    location: 'Parque Natural Municipal',
    status: 'pending',
    image: grupoImage,
  },
];

// Map experience IDs to imported images
const experienceImages: Record<string, string> = {
  'rafting': raftingVermelho,
  'remo-vaa': remoVaa,
  'flutuacao': flutuacao,
  'trilha-urca': trilha,
  'sup': praiaGrupo,
  'rafting-extremo': raftingVermelho,
  'trekking-altitude': montanhaAzul,
  'trekking-sunset': trilha,
};

const pastActivities = [
  {
    id: '1',
    name: 'Trilha da Urca',
    date: '2025-10-15',
    location: 'Morro da Urca, RJ',
    rating: 5,
  },
  {
    id: '2',
    name: 'Canoagem',
    date: '2025-09-20',
    location: 'Lagoa Feia',
    rating: 4,
  },
  {
    id: '3',
    name: 'Camping na Natureza',
    date: '2025-08-10',
    location: 'Serra da Mantiqueira',
    rating: 5,
  },
];

const recommendations = experiences.slice(0, 3).map(exp => ({
  ...exp,
  image: experienceImages[exp.id] || exp.image,
}));

const Dashboard = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [dismissedAvisos, setDismissedAvisos] = useState<string[]>([]);
  const { avisos, dispensarAviso } = useGestor();

  const avisosAtivos = avisos.filter((a) => a.ativo && !dismissedAvisos.includes(a.id));

  const handleDismissAviso = (id: string) => {
    setDismissedAvisos((prev) => [...prev, id]);
    dispensarAviso(id);
  };

  const getAvisoStyles = (tipo: string) => {
    switch (tipo) {
      case 'urgente':
        return 'bg-red-500/10 border-red-500/30 text-red-600';
      case 'alerta':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-600';
      default:
        return 'bg-blue-500/10 border-blue-500/30 text-blue-600';
    }
  };

  const getAvisoIcon = (tipo: string) => {
    switch (tipo) {
      case 'urgente':
        return <AlertCircle size={18} />;
      case 'alerta':
        return <AlertTriangle size={18} />;
      default:
        return <Info size={18} />;
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                  <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    Olá, {mockUser.name.split(' ')[0]}! 👋
                  </h1>
                  <p className="text-muted-foreground">
                    Bem-vindo de volta à sua jornada na natureza
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Bell size={20} />
                </Button>
                <Link to="/configuracoes">
                  <Button variant="outline" size="icon">
                    <Settings size={20} />
                  </Button>
                </Link>
                <Button variant="outline" className="text-destructive hover:text-destructive">
                  <LogOut size={18} className="mr-2" />
                  Sair
                </Button>
              </div>
            </div>

          {/* Avisos do Organizador */}
          {avisosAtivos.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Bell size={20} className="text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Avisos</h2>
              </div>
              <div className="space-y-3">
                {avisosAtivos.map((aviso) => (
                  <div
                    key={aviso.id}
                    className={`p-4 rounded-xl border flex items-start justify-between gap-4 ${getAvisoStyles(aviso.tipo)}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">{getAvisoIcon(aviso.tipo)}</div>
                      <div>
                        <div className="font-medium">{aviso.titulo}</div>
                        <div className="text-sm opacity-80">{aviso.mensagem}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDismissAviso(aviso.id)}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {mockUser.totalExperiences}
                    </div>
                    <div className="text-xs text-muted-foreground">Experiências</div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CalendarDays className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {mockUser.upcomingEvents}
                    </div>
                    <div className="text-xs text-muted-foreground">Próximos</div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {mockUser.points}
                    </div>
                    <div className="text-xs text-muted-foreground">Pontos</div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">
                      {mockUser.level}
                    </div>
                    <div className="text-xs text-muted-foreground">Nível</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Activities */}
              <section className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">
                    Próximas Atividades
                  </h2>
                  <Link to="/#calendario">
                    <Button variant="ghost" size="sm" className="text-primary">
                      Ver calendário
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>

                {upcomingActivities.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <img
                          src={activity.image}
                          alt={activity.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-foreground">
                              {activity.name}
                            </h3>
                            <Badge
                              variant={activity.status === 'confirmed' ? 'default' : 'secondary'}
                            >
                              {activity.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                            </Badge>
                          </div>
                          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <CalendarDays size={14} className="text-primary" />
                              {formatDate(activity.date)}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={14} className="text-primary" />
                              {activity.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <CalendarDays size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Nenhuma atividade agendada</p>
                    <Link to="/#experiencias">
                      <Button className="mt-4">Explorar experiências</Button>
                    </Link>
                  </div>
                )}
              </section>

              {/* Past Activities */}
              <section className="bg-card rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Histórico de Participações
                </h2>

                <div className="space-y-3">
                  {pastActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div>
                        <h3 className="font-medium text-foreground">{activity.name}</h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span>{formatDate(activity.date)}</span>
                          <span>{activity.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        {Array.from({ length: activity.rating }).map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* QR Code Check-in */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <QrCode size={20} className="text-primary" />
                  QR Code de Check-in
                </h3>
                <div
                  className="aspect-square rounded-xl bg-secondary flex items-center justify-center cursor-pointer hover:bg-secondary/80 transition-colors"
                  onClick={() => setShowQRCode(!showQRCode)}
                >
                  {showQRCode ? (
                    <div className="w-32 h-32 bg-foreground rounded-lg" />
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <QrCode size={48} className="mx-auto mb-2" />
                      <p className="text-sm">Clique para mostrar</p>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Apresente este código no dia da atividade
                </p>
              </div>

              {/* Level Progress */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Progresso de Nível
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Explorador</span>
                    <span className="font-medium text-primary">450/500 pts</span>
                  </div>
                  <Progress value={90} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Faltam 50 pontos para o próximo nível: <strong>Aventureiro</strong>
                  </p>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart size={20} className="text-primary" />
                  Recomendados para você
                </h3>
                <div className="space-y-3">
                  {recommendations.map((exp) => (
                    <div
                      key={exp.id}
                      className="flex gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
                    >
                      <img
                        src={exp.image}
                        alt={exp.name}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground text-sm truncate">
                          {exp.name}
                        </h4>
                        <p className="text-xs text-muted-foreground truncate">
                          {exp.location}
                        </p>
                        <p className="text-xs font-medium text-primary mt-1">
                          {formatPrice(exp.price || 0)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/#experiencias">
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    Ver todas
                  </Button>
                </Link>
              </div>

              {/* Community Link */}
              <Link to="/feed">
                <div className="bg-primary text-primary-foreground rounded-2xl p-6 hover:opacity-90 transition-opacity">
                  <h3 className="font-semibold mb-2">Comunidade Mahaflow</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Veja o que outros membros estão compartilhando
                  </p>
                  <Button variant="secondary" size="sm">
                    Acessar Feed
                    <ChevronRight size={16} className="ml-1" />
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Dashboard;
