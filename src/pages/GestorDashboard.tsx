import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Users,
  CalendarDays,
  DollarSign,
  Search,
  Download,
  MessageCircle,
  CheckCircle,
  Clock,
  XCircle,
  MoreHorizontal,
  Plus,
  TrendingUp,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  QrCode,
  Mail,
  Send,
  UserCheck,
  UserX,
  MapPin,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  AlertTriangle,
  Info,
  AlertCircle,
  Save,
  Globe,
  Instagram,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { useGestor } from '@/contexts/GestorContext';


// Mock participants data
const participants = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '(22) 99999-1234',
    event: 'Rafting de Verão',
    eventDate: '2025-12-28',
    status: 'confirmed',
    registeredAt: '2025-12-15',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    paid: true,
  },
  {
    id: '2',
    name: 'Maria Costa',
    email: 'maria@email.com',
    phone: '(22) 99999-5678',
    event: 'Rafting de Verão',
    eventDate: '2025-12-28',
    status: 'pending',
    registeredAt: '2025-12-14',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    paid: false,
  },
  {
    id: '3',
    name: 'Pedro Lima',
    email: 'pedro@email.com',
    phone: '(22) 99999-9012',
    event: 'Trekking de Altitude',
    eventDate: '2026-01-19',
    status: 'confirmed',
    registeredAt: '2025-12-13',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    paid: true,
  },
  {
    id: '4',
    name: 'Ana Souza',
    email: 'ana@email.com',
    phone: '(22) 99999-3456',
    event: 'Domingão do Bem-Estar',
    eventDate: '2026-01-05',
    status: 'confirmed',
    registeredAt: '2025-12-12',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    paid: true,
  },
  {
    id: '5',
    name: 'Lucas Oliveira',
    email: 'lucas@email.com',
    phone: '(22) 99999-7890',
    event: 'Rafting de Verão',
    eventDate: '2025-12-28',
    status: 'cancelled',
    registeredAt: '2025-12-11',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    paid: false,
  },
  {
    id: '6',
    name: 'Carla Mendes',
    email: 'carla@email.com',
    phone: '(22) 99999-2345',
    event: "Remo Va'a - Canoa Havaiana",
    eventDate: '2026-01-12',
    status: 'pending',
    registeredAt: '2025-12-10',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    paid: false,
  },
];

const GestorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [messageText, setMessageText] = useState('');
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);
  
  // Configurações form state
  const [novaViagem, setNovaViagem] = useState({
    nome: '',
    descricao: '',
    data: '',
    local: '',
    vagas: 20,
    preco: 0,
  });
  const [novoAviso, setNovoAviso] = useState({
    titulo: '',
    mensagem: '',
    tipo: 'info' as 'info' | 'alerta' | 'urgente',
  });

  const { toast } = useToast();
  const navigate = useNavigate();
  const {
    viagens,
    avisos,
    configuracoes,
    isAuthenticated,
    logout,
    adicionarViagem,
    removerViagem,
    togglePublicarViagem,
    adicionarAviso,
    removerAviso,
    atualizarConfiguracoes,
  } = useGestor();

  const filteredParticipants = participants.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEvent = selectedEvent === 'all' || p.event === selectedEvent;
    const matchesStatus = selectedStatus === 'all' || p.status === selectedStatus;
    return matchesSearch && matchesEvent && matchesStatus;
  });

  const totalRevenue = viagens.reduce((acc, v) => acc + v.preco * v.vagasOcupadas, 0);
  const totalRegistered = viagens.reduce((acc, v) => acc + v.vagasOcupadas, 0);
  const totalConfirmed = participants.filter((p) => p.status === 'confirmed').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return (
          <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30">
            <CheckCircle size={12} className="mr-1" /> Confirmado
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-amber-500/20 text-amber-600 border-amber-500/30">
            <Clock size={12} className="mr-1" /> Pendente
          </Badge>
        );
      case 'cancelled':
        return (
          <Badge className="bg-red-500/20 text-red-600 border-red-500/30">
            <XCircle size={12} className="mr-1" /> Cancelado
          </Badge>
        );
      default:
        return null;
    }
  };

  const handleConfirmParticipant = (id: string) => {
    toast({
      title: 'Participante confirmado!',
      description: 'O participante foi confirmado com sucesso.',
    });
  };

  const handleCancelParticipant = (id: string) => {
    toast({
      title: 'Inscrição cancelada',
      description: 'A inscrição foi cancelada.',
      variant: 'destructive',
    });
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    toast({
      title: 'Mensagem enviada!',
      description: `Mensagem enviada para ${selectedParticipants.length || 'todos os'} participantes.`,
    });
    setMessageText('');
    setSelectedParticipants([]);
  };

  const handleExportList = () => {
    toast({
      title: 'Lista exportada!',
      description: 'O arquivo CSV foi baixado com sucesso.',
    });
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    toast({
      title: 'Logout realizado',
      description: 'Você saiu do painel do organizador.',
    });
  };

  const handleAdicionarViagem = () => {
    if (!novaViagem.nome || !novaViagem.data || !novaViagem.local) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha nome, data e local.',
        variant: 'destructive',
      });
      return;
    }
    adicionarViagem({
      ...novaViagem,
      vagasOcupadas: 0,
      publicada: false,
    });
    setNovaViagem({ nome: '', descricao: '', data: '', local: '', vagas: 20, preco: 0 });
    toast({
      title: 'Viagem adicionada!',
      description: 'A nova viagem foi criada com sucesso.',
    });
  };

  const handleAdicionarAviso = () => {
    if (!novoAviso.titulo || !novoAviso.mensagem) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha título e mensagem.',
        variant: 'destructive',
      });
      return;
    }
    adicionarAviso({
      ...novoAviso,
      ativo: true,
    });
    setNovoAviso({ titulo: '', mensagem: '', tipo: 'info' });
    toast({
      title: 'Aviso criado!',
      description: 'O aviso será exibido para os usuários.',
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const getAvisoIcon = (tipo: string) => {
    switch (tipo) {
      case 'urgente':
        return <AlertCircle className="text-red-500" size={20} />;
      case 'alerta':
        return <AlertTriangle className="text-amber-500" size={20} />;
      default:
        return <Info className="text-blue-500" size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/50 via-background to-secondary/30">
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h1 className="text-2xl font-bold text-foreground">
                  Painel do Organizador
                </h1>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Powered by</span>
                <img src={rotafacilLogo} alt="RotaFácil" className="h-4 opacity-70" />
                <span className="font-medium">RotaFácil</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Bell size={20} />
              </Button>
              <Button
                variant="outline"
                className="text-destructive hover:text-destructive"
                onClick={handleLogout}
              >
                <LogOut size={18} className="mr-2" />
                Sair
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{totalRegistered}</div>
                  <div className="text-sm text-muted-foreground">Inscritos Total</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{totalConfirmed}</div>
                  <div className="text-sm text-muted-foreground">Confirmados</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
                  <CalendarDays className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{viagens.length}</div>
                  <div className="text-sm text-muted-foreground">Viagens Ativas</div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    R$ {totalRevenue.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-sm text-muted-foreground">Receita Total</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="participants" className="space-y-6">
            <TabsList className="bg-card border border-border p-1 rounded-xl flex-wrap h-auto gap-1">
              <TabsTrigger
                value="participants"
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Users size={16} className="mr-2" />
                Participantes
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <CalendarDays size={16} className="mr-2" />
                Eventos
              </TabsTrigger>
              <TabsTrigger
                value="communication"
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <MessageCircle size={16} className="mr-2" />
                Comunicação
              </TabsTrigger>
              <TabsTrigger
                value="checkin"
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <QrCode size={16} className="mr-2" />
                Check-in
              </TabsTrigger>
              <TabsTrigger
                value="configuracoes"
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Settings size={16} className="mr-2" />
                Configurações
              </TabsTrigger>
            </TabsList>

            {/* Participants Tab */}
            <TabsContent value="participants" className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 bg-card rounded-2xl border border-border p-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    placeholder="Buscar participante..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Filtrar por evento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os eventos</SelectItem>
                    {viagens.map((viagem) => (
                      <SelectItem key={viagem.id} value={viagem.nome}>
                        {viagem.nome}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="confirmed">Confirmados</SelectItem>
                    <SelectItem value="pending">Pendentes</SelectItem>
                    <SelectItem value="cancelled">Cancelados</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={handleExportList}>
                  <Download size={16} className="mr-2" />
                  Exportar
                </Button>
              </div>

              {/* Participants Table */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Participante</TableHead>
                      <TableHead>Evento</TableHead>
                      <TableHead>Data Inscrição</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Pagamento</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredParticipants.map((participant) => (
                      <TableRow key={participant.id} className="hover:bg-secondary/50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border border-border">
                              <AvatarImage src={participant.avatar} alt={participant.name} />
                              <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-foreground">{participant.name}</div>
                              <div className="text-xs text-muted-foreground">{participant.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-foreground">{participant.event}</div>
                            <div className="text-xs text-muted-foreground">
                              {formatDate(participant.eventDate)}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {formatDate(participant.registeredAt)}
                        </TableCell>
                        <TableCell>{getStatusBadge(participant.status)}</TableCell>
                        <TableCell>
                          {participant.paid ? (
                            <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30">
                              Pago
                            </Badge>
                          ) : (
                            <Badge className="bg-red-500/20 text-red-600 border-red-500/30">
                              Pendente
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            {participant.status === 'pending' && (
                              <>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="text-emerald-500 hover:text-emerald-600 hover:bg-emerald-500/10"
                                  onClick={() => handleConfirmParticipant(participant.id)}
                                >
                                  <UserCheck size={18} />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                                  onClick={() => handleCancelParticipant(participant.id)}
                                >
                                  <UserX size={18} />
                                </Button>
                              </>
                            )}
                            <Button size="icon" variant="ghost">
                              <MoreHorizontal size={18} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-foreground">Viagens Ativas</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {viagens.map((viagem) => (
                  <div
                    key={viagem.id}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{viagem.nome}</h3>
                        <p className="text-sm text-muted-foreground">{formatDate(viagem.data)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={viagem.publicada ? 'default' : 'secondary'}>
                          {viagem.publicada ? 'Publicada' : 'Rascunho'}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin size={14} />
                      {viagem.local}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Ocupação</span>
                          <span className="font-medium text-foreground">
                            {viagem.vagasOcupadas}/{viagem.vagas}
                          </span>
                        </div>
                        <Progress value={(viagem.vagasOcupadas / viagem.vagas) * 100} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-lg font-bold text-primary">
                          {viagem.preco > 0 ? `R$ ${viagem.preco}` : 'Gratuito'}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Receita: R$ {(viagem.preco * viagem.vagasOcupadas).toLocaleString('pt-BR')}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => togglePublicarViagem(viagem.id)}
                      >
                        {viagem.publicada ? <EyeOff size={14} className="mr-1" /> : <Eye size={14} className="mr-1" />}
                        {viagem.publicada ? 'Ocultar' : 'Publicar'}
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit size={14} className="mr-1" />
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-destructive hover:text-destructive"
                        onClick={() => {
                          removerViagem(viagem.id);
                          toast({ title: 'Viagem removida', description: 'A viagem foi excluída.' });
                        }}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Communication Tab */}
            <TabsContent value="communication" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Send Message */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Send size={20} className="text-primary" />
                    Enviar Mensagem
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">
                        Selecionar evento
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Todos os eventos" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos os eventos</SelectItem>
                          {viagens.map((viagem) => (
                            <SelectItem key={viagem.id} value={viagem.id}>
                              {viagem.nome}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Mensagem</label>
                      <Textarea
                        placeholder="Digite sua mensagem para os participantes..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={handleSendMessage} className="flex-1">
                        <MessageCircle size={16} className="mr-2" />
                        Enviar WhatsApp
                      </Button>
                      <Button variant="outline" onClick={handleSendMessage}>
                        <Mail size={16} className="mr-2" />
                        Email
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Templates */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Templates de Mensagem
                  </h3>

                  <div className="space-y-3">
                    {[
                      { title: 'Confirmação de inscrição', desc: 'Enviada após confirmação de pagamento' },
                      { title: 'Lembrete - 1 dia antes', desc: 'Informações importantes do evento' },
                      { title: 'Ponto de encontro', desc: 'Local e horário detalhados' },
                      { title: 'Agradecimento', desc: 'Enviada após o evento' },
                    ].map((template, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                      >
                        <div className="font-medium text-foreground">{template.title}</div>
                        <div className="text-sm text-muted-foreground">{template.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Check-in Tab */}
            <TabsContent value="checkin" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* QR Scanner */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <QrCode size={20} className="text-primary" />
                    Escanear QR Code
                  </h3>

                  <div className="aspect-square max-w-[300px] mx-auto rounded-xl bg-secondary flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center text-muted-foreground">
                      <QrCode size={64} className="mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Aponte a câmera para o</p>
                      <p className="text-sm">QR Code do participante</p>
                    </div>
                  </div>

                  <Button className="w-full mt-4">Ativar Câmera</Button>
                </div>

                {/* Recent Check-ins */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Check-ins Recentes</h3>

                  <div className="space-y-3">
                    {participants
                      .filter((p) => p.status === 'confirmed')
                      .slice(0, 5)
                      .map((participant) => (
                        <div
                          key={participant.id}
                          className="flex items-center justify-between p-3 rounded-xl bg-secondary/50"
                        >
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border border-border">
                              <AvatarImage src={participant.avatar} alt={participant.name} />
                              <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-foreground">{participant.name}</div>
                              <div className="text-xs text-muted-foreground">{participant.event}</div>
                            </div>
                          </div>
                          <Badge className="bg-emerald-500/20 text-emerald-600">
                            <CheckCircle size={12} className="mr-1" />
                            OK
                          </Badge>
                        </div>
                      ))}
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-primary">
                        {participants.filter((p) => p.status === 'confirmed').length}
                      </div>
                      <div className="text-sm text-muted-foreground">check-ins realizados hoje</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Configurações Tab */}
            <TabsContent value="configuracoes" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Gestão de Viagens */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin size={20} className="text-primary" />
                    Adicionar Nova Viagem
                  </h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label>Nome da Viagem</Label>
                        <Input
                          placeholder="Ex: Rafting de Verão"
                          value={novaViagem.nome}
                          onChange={(e) => setNovaViagem({ ...novaViagem, nome: e.target.value })}
                        />
                      </div>
                      <div className="col-span-2">
                        <Label>Descrição</Label>
                        <Textarea
                          placeholder="Descreva a experiência..."
                          value={novaViagem.descricao}
                          onChange={(e) => setNovaViagem({ ...novaViagem, descricao: e.target.value })}
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label>Data</Label>
                        <Input
                          type="date"
                          value={novaViagem.data}
                          onChange={(e) => setNovaViagem({ ...novaViagem, data: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label>Local</Label>
                        <Input
                          placeholder="Ex: Rio Paraíba"
                          value={novaViagem.local}
                          onChange={(e) => setNovaViagem({ ...novaViagem, local: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label>Vagas</Label>
                        <Input
                          type="number"
                          value={novaViagem.vagas}
                          onChange={(e) => setNovaViagem({ ...novaViagem, vagas: Number(e.target.value) })}
                        />
                      </div>
                      <div>
                        <Label>Preço (R$)</Label>
                        <Input
                          type="number"
                          value={novaViagem.preco}
                          onChange={(e) => setNovaViagem({ ...novaViagem, preco: Number(e.target.value) })}
                        />
                      </div>
                    </div>

                    <Button onClick={handleAdicionarViagem} className="w-full">
                      <Plus size={16} className="mr-2" />
                      Adicionar Viagem
                    </Button>
                  </div>
                </div>

                {/* Central de Avisos */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Bell size={20} className="text-primary" />
                    Central de Avisos
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <Label>Título do Aviso</Label>
                      <Input
                        placeholder="Ex: Lembrete importante"
                        value={novoAviso.titulo}
                        onChange={(e) => setNovoAviso({ ...novoAviso, titulo: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label>Mensagem</Label>
                      <Textarea
                        placeholder="Mensagem que será exibida para os usuários..."
                        value={novoAviso.mensagem}
                        onChange={(e) => setNovoAviso({ ...novoAviso, mensagem: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label>Tipo de Aviso</Label>
                      <Select
                        value={novoAviso.tipo}
                        onValueChange={(value: 'info' | 'alerta' | 'urgente') =>
                          setNovoAviso({ ...novoAviso, tipo: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="info">ℹ️ Informativo</SelectItem>
                          <SelectItem value="alerta">⚠️ Alerta</SelectItem>
                          <SelectItem value="urgente">🚨 Urgente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button onClick={handleAdicionarAviso} className="w-full">
                      <Send size={16} className="mr-2" />
                      Publicar Aviso
                    </Button>
                  </div>

                  {/* Lista de Avisos Ativos */}
                  {avisos.filter((a) => a.ativo).length > 0 && (
                    <div className="mt-6 pt-4 border-t border-border">
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">Avisos Ativos</h4>
                      <div className="space-y-2">
                        {avisos
                          .filter((a) => a.ativo)
                          .map((aviso) => (
                            <div
                              key={aviso.id}
                              className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                            >
                              <div className="flex items-center gap-2">
                                {getAvisoIcon(aviso.tipo)}
                                <span className="text-sm font-medium">{aviso.titulo}</span>
                              </div>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-destructive"
                                onClick={() => {
                                  removerAviso(aviso.id);
                                  toast({ title: 'Aviso removido' });
                                }}
                              >
                                <Trash2 size={14} />
                              </Button>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Configurações do Site */}
                <div className="md:col-span-2 p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Globe size={20} className="text-primary" />
                    Configurações do Site
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="flex items-center gap-2">
                          <Phone size={14} />
                          Telefone
                        </Label>
                        <Input
                          value={configuracoes.telefone}
                          onChange={(e) => atualizarConfiguracoes({ telefone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label className="flex items-center gap-2">
                          <Mail size={14} />
                          Email
                        </Label>
                        <Input
                          value={configuracoes.email}
                          onChange={(e) => atualizarConfiguracoes({ email: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label className="flex items-center gap-2">
                          <Instagram size={14} />
                          Instagram
                        </Label>
                        <Input
                          value={configuracoes.instagram}
                          onChange={(e) => atualizarConfiguracoes({ instagram: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                        <div>
                          <div className="font-medium text-foreground">Inscrições Online</div>
                          <div className="text-sm text-muted-foreground">
                            Permite novas inscrições no site
                          </div>
                        </div>
                        <Switch
                          checked={configuracoes.inscricoesHabilitadas}
                          onCheckedChange={(checked) =>
                            atualizarConfiguracoes({ inscricoesHabilitadas: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                        <div>
                          <div className="font-medium text-foreground">Exibir Preços</div>
                          <div className="text-sm text-muted-foreground">
                            Mostra preços nas experiências
                          </div>
                        </div>
                        <Switch
                          checked={configuracoes.exibirPrecos}
                          onCheckedChange={(checked) =>
                            atualizarConfiguracoes({ exibirPrecos: checked })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                        <div>
                          <div className="font-medium text-foreground">Modo Manutenção</div>
                          <div className="text-sm text-muted-foreground">
                            Desativa o site temporariamente
                          </div>
                        </div>
                        <Switch
                          checked={configuracoes.modoManutencao}
                          onCheckedChange={(checked) =>
                            atualizarConfiguracoes({ modoManutencao: checked })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    className="mt-6"
                    onClick={() =>
                      toast({
                        title: 'Configurações salvas!',
                        description: 'As alterações foram aplicadas.',
                      })
                    }
                  >
                    <Save size={16} className="mr-2" />
                    Salvar Configurações
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* RotaFácil Branding */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border border-primary/20 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <img src={rotafacilLogo} alt="RotaFácil" className="h-8" />
              <span className="text-lg font-semibold text-foreground">RotaFácil</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Plataforma white label para organização de excursões, viagens e experiências.
              Menos mensagens, mais clareza. Tudo sob controle.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GestorDashboard;
