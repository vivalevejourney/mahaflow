import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  X,
  MapPin,
  Sparkles,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Users,
  Info,
  Filter,
  Send,
  ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface UserProfile {
  id: string;
  name: string;
  age: number;
  avatar: string;
  interests: string[];
  bio: string;
  location: string;
  experiences: number;
}

// Extended mock users
const allUsers: UserProfile[] = [
  {
    id: '1',
    name: 'Marina Costa',
    age: 28,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    interests: ['Trilhas', 'Yoga', 'Fotografia'],
    bio: 'Apaixonada por natureza e novas experiências. Sempre em busca da próxima aventura!',
    location: 'Campos dos Goytacazes',
    experiences: 12,
  },
  {
    id: '2',
    name: 'Pedro Almeida',
    age: 32,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    interests: ['Rafting', 'Camping', 'Surf'],
    bio: 'Aventureiro de fim de semana. Adoro conhecer gente nova nas trilhas.',
    location: 'Macaé',
    experiences: 8,
  },
  {
    id: '3',
    name: 'Juliana Santos',
    age: 26,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    interests: ['Canoagem', 'Bem-estar', 'Meditação'],
    bio: 'Buscando equilíbrio entre a vida urbana e a conexão com a natureza.',
    location: 'Campos dos Goytacazes',
    experiences: 15,
  },
  {
    id: '4',
    name: 'Lucas Ferreira',
    age: 35,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    interests: ['Trilhas', 'Rafting', 'Escalada'],
    bio: 'Guia de turismo certificado. Amo compartilhar a natureza com outras pessoas.',
    location: 'Rio de Janeiro',
    experiences: 45,
  },
  {
    id: '5',
    name: 'Camila Rodrigues',
    age: 29,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    interests: ['Yoga', 'Surf', 'Fotografia'],
    bio: 'Fotógrafa de natureza. Cada trilha é uma oportunidade de capturar a beleza.',
    location: 'Búzios',
    experiences: 20,
  },
  {
    id: '6',
    name: 'Rafael Oliveira',
    age: 31,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    interests: ['Camping', 'Trilhas', 'Montanhismo'],
    bio: 'Nada melhor do que acordar com o nascer do sol no topo de uma montanha.',
    location: 'Petrópolis',
    experiences: 28,
  },
  {
    id: '7',
    name: 'Fernanda Lima',
    age: 27,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
    interests: ['Yoga', 'Meditação', 'Bem-estar'],
    bio: 'Instrutora de yoga. Acredito que a natureza é o melhor templo.',
    location: 'Niterói',
    experiences: 33,
  },
  {
    id: '8',
    name: 'Bruno Santos',
    age: 30,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
    interests: ['Rafting', 'Canoagem', 'Surf'],
    bio: 'Viciado em adrenalina e esportes aquáticos. Bora remar?',
    location: 'Cabo Frio',
    experiences: 22,
  },
  {
    id: '9',
    name: 'Amanda Souza',
    age: 24,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
    interests: ['Trilhas', 'Fotografia', 'Camping'],
    bio: 'Recém formada buscando aventuras e novas amizades para explorar o mundo.',
    location: 'Campos dos Goytacazes',
    experiences: 5,
  },
  {
    id: '10',
    name: 'Diego Martins',
    age: 34,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400',
    interests: ['Escalada', 'Montanhismo', 'Camping'],
    bio: 'Engenheiro durante a semana, aventureiro no fim de semana. Vamos escalar?',
    location: 'Rio de Janeiro',
    experiences: 40,
  },
];

const allInterests = ['Todos', 'Trilhas', 'Rafting', 'Yoga', 'Camping', 'Surf', 'Canoagem', 'Meditação', 'Fotografia', 'Escalada', 'Montanhismo', 'Bem-estar'];

interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

const MahaTinder = () => {
  const [selectedInterest, setSelectedInterest] = useState('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<UserProfile[]>([]);
  const [showMatch, setShowMatch] = useState<UserProfile | null>(null);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [showChat, setShowChat] = useState<UserProfile | null>(null);
  const [chatMessages, setChatMessages] = useState<Record<string, ChatMessage[]>>({});
  const [newMessage, setNewMessage] = useState('');
  const { toast } = useToast();

  // Filter users by interest
  const filteredUsers = selectedInterest === 'Todos' 
    ? allUsers 
    : allUsers.filter(user => user.interests.includes(selectedInterest));

  const currentUser = filteredUsers[currentIndex];
  const hasMoreUsers = currentIndex < filteredUsers.length;

  const handleLike = () => {
    if (!currentUser) return;
    
    setDirection('right');
    
    // Simulate 30% match chance
    const isMatch = Math.random() > 0.7;
    
    setTimeout(() => {
      if (isMatch) {
        setMatches([...matches, currentUser]);
        setShowMatch(currentUser);
      }
      setCurrentIndex(currentIndex + 1);
      setDirection(null);
    }, 300);
  };

  const handlePass = () => {
    if (!currentUser) return;
    
    setDirection('left');
    
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setDirection(null);
    }, 300);
  };

  const handleSuperLike = () => {
    if (!currentUser) return;
    
    toast({
      title: 'Super Like enviado! ⭐',
      description: `${currentUser.name} vai saber que você tem muito interesse.`,
    });
    
    // Simulate 80% match chance for super like
    const isMatch = Math.random() > 0.2;
    
    if (isMatch) {
      setMatches([...matches, currentUser]);
      setShowMatch(currentUser);
    }
    
    setCurrentIndex(currentIndex + 1);
  };

  const closeMatchModal = () => {
    setShowMatch(null);
  };

  const handleFilterChange = (value: string) => {
    setSelectedInterest(value);
    setCurrentIndex(0);
  };

  const openChat = (user: UserProfile) => {
    setShowChat(user);
    // Initialize chat if not exists
    if (!chatMessages[user.id]) {
      setChatMessages({
        ...chatMessages,
        [user.id]: [
          {
            id: '1',
            senderId: user.id,
            text: `Oi! Vi que também curte ${user.interests[0]}! Bora marcar uma aventura? 🌿`,
            timestamp: new Date(Date.now() - 3600000),
          },
        ],
      });
    }
  };

  const sendMessage = () => {
    if (!newMessage.trim() || !showChat) return;
    
    const message: ChatMessage = {
      id: Date.now().toString(),
      senderId: 'me',
      text: newMessage,
      timestamp: new Date(),
    };
    
    setChatMessages({
      ...chatMessages,
      [showChat.id]: [...(chatMessages[showChat.id] || []), message],
    });
    
    setNewMessage('');
    
    // Simulate reply after 1-2 seconds
    setTimeout(() => {
      const replies = [
        'Adorei a ideia! Vamos combinar! 🎉',
        'Que legal! Tô dentro! Quando você pode?',
        'Perfeito! Me manda mais detalhes!',
        'Show! Vai ser demais! 🌴',
      ];
      const reply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        senderId: showChat.id,
        text: replies[Math.floor(Math.random() * replies.length)],
        timestamp: new Date(),
      };
      setChatMessages(prev => ({
        ...prev,
        [showChat.id]: [...(prev[showChat.id] || []), reply],
      }));
    }, 1000 + Math.random() * 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50/50 via-background to-pink-50/30">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full mb-4 animate-pulse">
              <Heart className="w-4 h-4 text-pink-500 animate-[pulse_1s_ease-in-out_infinite]" fill="currentColor" />
              <span className="text-sm font-medium bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Conexões Reais
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent animate-[pulse_2s_ease-in-out_infinite]">
              MahaTinder
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Encontre pessoas para compartilhar aventuras. Conexão por estilo de vida, 
              amizade e experiências juntas.
            </p>
          </div>

          {/* Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 bg-card rounded-xl p-3 border border-pink-200/50 shadow-lg shadow-pink-500/5">
              <Filter size={18} className="text-pink-500" />
              <span className="text-sm text-muted-foreground">Filtrar por:</span>
              <Select value={selectedInterest} onValueChange={handleFilterChange}>
                <SelectTrigger className="w-[180px] border-0 bg-gradient-to-r from-pink-50 to-rose-50">
                  <SelectValue placeholder="Interesse" />
                </SelectTrigger>
                <SelectContent>
                  {allInterests.map((interest) => (
                    <SelectItem key={interest} value={interest}>
                      {interest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Card Area */}
            <div className="lg:col-span-2">
              <div className="flex justify-center">
                {hasMoreUsers && currentUser ? (
                  <div className="relative w-full max-w-md" style={{ perspective: '1000px' }}>
                    {/* Card */}
                    <div
                      className={cn(
                        'relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20 transition-all duration-500 ease-out',
                        direction === 'left' && '-translate-x-full rotate-[-30deg] opacity-0 scale-90',
                        direction === 'right' && 'translate-x-full rotate-[30deg] opacity-0 scale-90',
                        !direction && 'hover:shadow-3xl hover:shadow-pink-500/30 hover:-translate-y-1'
                      )}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Card Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-end justify-between mb-4">
                          <div>
                            <h2 className="text-2xl font-bold">
                              {currentUser.name}, {currentUser.age}
                            </h2>
                            <div className="flex items-center gap-2 text-white/80 mt-1">
                              <MapPin size={16} />
                              <span>{currentUser.location}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              {currentUser.experiences}
                            </div>
                            <div className="text-xs text-white/70">experiências</div>
                          </div>
                        </div>

                        <p className="text-white/90 text-sm mb-4 line-clamp-2">
                          {currentUser.bio}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {currentUser.interests.map((interest) => (
                            <Badge
                              key={interest}
                              className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                            >
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-16 h-16 rounded-full border-2 border-red-400 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
                        onClick={handlePass}
                      >
                        <X size={28} />
                      </Button>
                      <Button
                        size="lg"
                        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white hover:from-blue-500 hover:to-cyan-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                        onClick={handleSuperLike}
                      >
                        <Sparkles size={24} />
                      </Button>
                      <Button
                        size="lg"
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-pink-500/40 group"
                        onClick={handleLike}
                      >
                        <Heart size={28} className="group-hover:animate-[pulse_0.5s_ease-in-out_infinite]" />
                      </Button>
                    </div>

                    {/* Navigation Hint */}
                    <div className="flex justify-center gap-8 mt-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ChevronLeft size={16} /> Passar
                      </span>
                      <span className="flex items-center gap-1">
                        Curtir <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full max-w-md aspect-[3/4] rounded-3xl bg-card border border-border flex flex-col items-center justify-center p-8 text-center">
                    <Users size={64} className="text-muted-foreground/50 mb-6" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {selectedInterest !== 'Todos' 
                        ? `Nenhum perfil com interesse em ${selectedInterest}`
                        : 'Você viu todos os perfis!'
                      }
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {selectedInterest !== 'Todos'
                        ? 'Tente outro filtro ou volte mais tarde.'
                        : 'Volte mais tarde para descobrir novas pessoas interessantes.'
                      }
                    </p>
                    <Button onClick={() => { setCurrentIndex(0); setSelectedInterest('Todos'); }}>
                      Recomeçar
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Matches */}
            <div className="space-y-6">
              {/* Info Card */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Info size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Como funciona?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Curta perfis de pessoas com interesses similares. Quando houver 
                      interesse mútuo, vocês podem conversar e planejar aventuras juntos!
                    </p>
                  </div>
                </div>
              </div>

              {/* Matches */}
              <div className="bg-card rounded-2xl border border-pink-200/50 p-6 shadow-lg shadow-pink-500/5">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Heart size={18} className="text-pink-500" fill="currentColor" />
                  <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                    Seus Matches ({matches.length})
                  </span>
                </h3>

                {matches.length > 0 ? (
                  <div className="space-y-3">
                    {matches.map((match) => (
                      <div
                        key={match.id}
                        className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                        onClick={() => openChat(match)}
                      >
                        <Avatar className="h-12 w-12 border-2 border-primary">
                          <AvatarImage src={match.avatar} alt={match.name} />
                          <AvatarFallback>{match.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground truncate">
                            {match.name}
                          </h4>
                          <p className="text-xs text-muted-foreground truncate">
                            {match.interests.slice(0, 2).join(', ')}
                          </p>
                        </div>
                        <Button size="icon" variant="ghost" className="text-primary">
                          <MessageCircle size={18} />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Nenhum match ainda. Continue explorando!
                  </p>
                )}
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-6 shadow-lg shadow-pink-500/30">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Heart size={18} fill="currentColor" className="animate-[pulse_1s_ease-in-out_infinite]" />
                  Suas estatísticas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">{currentIndex}</div>
                    <div className="text-sm opacity-80">Perfis vistos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{matches.length}</div>
                    <div className="text-sm opacity-80">Matches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Match Modal */}
      {showMatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fade-in">
          {/* Heart particles animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <Heart
                key={i}
                size={20 + Math.random() * 20}
                className="absolute text-pink-500 animate-[float_2s_ease-in-out_infinite]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.3 + Math.random() * 0.5,
                }}
                fill="currentColor"
              />
            ))}
          </div>
          <div className="bg-card rounded-3xl p-8 max-w-sm w-full text-center animate-scale-in shadow-2xl shadow-pink-500/30 border border-pink-200/50">
            <div className="relative mb-6">
              <div className="flex justify-center">
                <Avatar className="h-24 w-24 border-4 border-pink-500 shadow-lg shadow-pink-500/30">
                  <AvatarImage src={showMatch.avatar} alt={showMatch.name} />
                  <AvatarFallback>{showMatch.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center animate-float shadow-lg shadow-pink-500/50">
                  <Heart size={24} className="text-white animate-[pulse_0.5s_ease-in-out_infinite]" fill="currentColor" />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
              É um Match! 💕
            </h2>
            <p className="text-muted-foreground mb-6">
              Você e <strong>{showMatch.name}</strong> têm interesse em compartilhar aventuras!
            </p>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 border-pink-200 hover:bg-pink-50" onClick={closeMatchModal}>
                Continuar
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600" onClick={() => { closeMatchModal(); openChat(showMatch); }}>
                <MessageCircle size={18} className="mr-2" />
                Conversar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fade-in">
          <div className="bg-card rounded-3xl w-full max-w-md h-[600px] flex flex-col overflow-hidden animate-scale-in">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <Button size="icon" variant="ghost" onClick={() => setShowChat(null)}>
                <ArrowLeft size={20} />
              </Button>
              <Avatar className="h-10 w-10 border-2 border-primary">
                <AvatarImage src={showChat.avatar} alt={showChat.name} />
                <AvatarFallback>{showChat.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{showChat.name}</h4>
                <p className="text-xs text-muted-foreground">{showChat.location}</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {(chatMessages[showChat.id] || []).map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex',
                    message.senderId === 'me' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[80%] rounded-2xl px-4 py-2',
                      message.senderId === 'me'
                        ? 'bg-primary text-primary-foreground rounded-br-sm'
                        : 'bg-secondary text-foreground rounded-bl-sm'
                    )}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={cn(
                      'text-xs mt-1',
                      message.senderId === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    )}>
                      {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  placeholder="Digite sua mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1"
                />
                <Button size="icon" onClick={sendMessage} disabled={!newMessage.trim()}>
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MahaTinder;
