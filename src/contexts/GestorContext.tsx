import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

// Types
export interface Viagem {
  id: string;
  nome: string;
  descricao: string;
  data: string;
  local: string;
  vagas: number;
  vagasOcupadas: number;
  preco: number;
  imagem?: string;
  publicada: boolean;
  criadaEm: string;
}

export interface Aviso {
  id: string;
  titulo: string;
  mensagem: string;
  tipo: 'info' | 'alerta' | 'urgente';
  dataExpiracao?: string;
  criadoEm: string;
  ativo: boolean;
}

export interface ConfiguracoesSite {
  telefone: string;
  email: string;
  instagram: string;
  whatsapp: string;
  endereco: string;
  inscricoesHabilitadas: boolean;
  exibirPrecos: boolean;
  modoManutencao: boolean;
}

interface GestorContextType {
  viagens: Viagem[];
  avisos: Aviso[];
  configuracoes: ConfiguracoesSite;
  isAuthenticated: boolean;
  
  // Auth
  login: (email: string, senha: string) => boolean;
  logout: () => void;
  
  // Viagens
  adicionarViagem: (viagem: Omit<Viagem, 'id' | 'criadaEm'>) => void;
  editarViagem: (id: string, viagem: Partial<Viagem>) => void;
  removerViagem: (id: string) => void;
  togglePublicarViagem: (id: string) => void;
  
  // Avisos
  adicionarAviso: (aviso: Omit<Aviso, 'id' | 'criadoEm'>) => void;
  editarAviso: (id: string, aviso: Partial<Aviso>) => void;
  removerAviso: (id: string) => void;
  dispensarAviso: (id: string) => void;
  
  // Configurações
  atualizarConfiguracoes: (config: Partial<ConfiguracoesSite>) => void;
}

const GestorContext = createContext<GestorContextType | undefined>(undefined);

// Mock initial data
const viagensIniciais: Viagem[] = [
  {
    id: '1',
    nome: 'Rafting de Verão',
    descricao: 'Aventura emocionante nas corredeiras do Rio Paraíba',
    data: '2025-12-28',
    local: 'Rio Paraíba do Sul',
    vagas: 20,
    vagasOcupadas: 12,
    preco: 180,
    publicada: true,
    criadaEm: '2025-12-01',
  },
  {
    id: '2',
    nome: 'Trekking de Altitude',
    descricao: 'Caminhada até o Pico da Bandeira com nascer do sol',
    data: '2026-01-19',
    local: 'Pico da Bandeira, MG',
    vagas: 12,
    vagasOcupadas: 7,
    preco: 220,
    publicada: true,
    criadaEm: '2025-12-05',
  },
  {
    id: '3',
    nome: 'Domingão do Bem-Estar',
    descricao: 'Yoga, meditação e conexão na natureza',
    data: '2026-01-05',
    local: 'Parque Natural Municipal',
    vagas: 30,
    vagasOcupadas: 15,
    preco: 0,
    publicada: true,
    criadaEm: '2025-12-10',
  },
];

const avisosIniciais: Aviso[] = [
  {
    id: '1',
    titulo: 'Lembrete: Rafting dia 28/12',
    mensagem: 'Não esqueça de trazer protetor solar, roupa de banho e uma muda de roupa extra!',
    tipo: 'alerta',
    dataExpiracao: '2025-12-29',
    criadoEm: '2025-12-20',
    ativo: true,
  },
  {
    id: '2',
    titulo: 'Nova experiência disponível!',
    mensagem: 'Acabamos de adicionar o Trekking de Altitude com vista incrível do nascer do sol. Vagas limitadas!',
    tipo: 'info',
    criadoEm: '2025-12-18',
    ativo: true,
  },
];

const configuracoesIniciais: ConfiguracoesSite = {
  telefone: '(22) 98160-2212',
  email: 'contato@mahaflow.com.br',
  instagram: '@mahaflow',
  whatsapp: '5522981602212',
  endereco: 'Campos dos Goytacazes – RJ',
  inscricoesHabilitadas: true,
  exibirPrecos: true,
  modoManutencao: false,
};

// Session timeout duration (30 minutes)
const SESSION_TIMEOUT = 30 * 60 * 1000;

export const GestorProvider = ({ children }: { children: ReactNode }) => {
  const [viagens, setViagens] = useState<Viagem[]>(viagensIniciais);
  const [avisos, setAvisos] = useState<Aviso[]>(avisosIniciais);
  const [configuracoes, setConfiguracoes] = useState<ConfiguracoesSite>(configuracoesIniciais);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset session timeout on activity
  const resetSessionTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (isAuthenticated) {
      timeoutRef.current = setTimeout(() => {
        logout();
        // Toast notification would be added here with backend integration
      }, SESSION_TIMEOUT);
    }
  };

  // Set up activity listeners for session timeout
  useEffect(() => {
    if (isAuthenticated) {
      resetSessionTimeout();
      
      const handleActivity = () => resetSessionTimeout();
      
      window.addEventListener('mousemove', handleActivity);
      window.addEventListener('keydown', handleActivity);
      window.addEventListener('click', handleActivity);
      
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        window.removeEventListener('mousemove', handleActivity);
        window.removeEventListener('keydown', handleActivity);
        window.removeEventListener('click', handleActivity);
      };
    }
  }, [isAuthenticated]);

  /**
   * SECURITY WARNING: This is a mock authentication for demo purposes only.
   * 
   * In production, you MUST:
   * 1. Implement proper backend authentication (e.g., Supabase Auth)
   * 2. Store credentials securely in a database with proper hashing
   * 3. Use secure session management with HTTP-only cookies or JWT tokens
   * 4. Never expose credentials in client-side code
   * 5. Implement rate limiting to prevent brute force attacks
   */
  const login = (email: string, senha: string): boolean => {
    // TODO: Replace with Supabase Auth or other secure backend authentication
    // This mock login is for demonstration only and is NOT secure
    if (email === 'gestor@mahaflow.com' && senha === 'admin123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Viagens functions
  const adicionarViagem = (viagem: Omit<Viagem, 'id' | 'criadaEm'>) => {
    const novaViagem: Viagem = {
      ...viagem,
      id: Date.now().toString(),
      criadaEm: new Date().toISOString().split('T')[0],
    };
    setViagens((prev) => [...prev, novaViagem]);
  };

  const editarViagem = (id: string, viagem: Partial<Viagem>) => {
    setViagens((prev) =>
      prev.map((v) => (v.id === id ? { ...v, ...viagem } : v))
    );
  };

  const removerViagem = (id: string) => {
    setViagens((prev) => prev.filter((v) => v.id !== id));
  };

  const togglePublicarViagem = (id: string) => {
    setViagens((prev) =>
      prev.map((v) => (v.id === id ? { ...v, publicada: !v.publicada } : v))
    );
  };

  // Avisos functions
  const adicionarAviso = (aviso: Omit<Aviso, 'id' | 'criadoEm'>) => {
    const novoAviso: Aviso = {
      ...aviso,
      id: Date.now().toString(),
      criadoEm: new Date().toISOString().split('T')[0],
    };
    setAvisos((prev) => [...prev, novoAviso]);
  };

  const editarAviso = (id: string, aviso: Partial<Aviso>) => {
    setAvisos((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...aviso } : a))
    );
  };

  const removerAviso = (id: string) => {
    setAvisos((prev) => prev.filter((a) => a.id !== id));
  };

  const dispensarAviso = (id: string) => {
    setAvisos((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ativo: false } : a))
    );
  };

  // Configurações functions
  const atualizarConfiguracoes = (config: Partial<ConfiguracoesSite>) => {
    setConfiguracoes((prev) => ({ ...prev, ...config }));
  };

  return (
    <GestorContext.Provider
      value={{
        viagens,
        avisos,
        configuracoes,
        isAuthenticated,
        login,
        logout,
        adicionarViagem,
        editarViagem,
        removerViagem,
        togglePublicarViagem,
        adicionarAviso,
        editarAviso,
        removerAviso,
        dispensarAviso,
        atualizarConfiguracoes,
      }}
    >
      {children}
    </GestorContext.Provider>
  );
};

export const useGestor = () => {
  const context = useContext(GestorContext);
  if (context === undefined) {
    throw new Error('useGestor must be used within a GestorProvider');
  }
  return context;
};
