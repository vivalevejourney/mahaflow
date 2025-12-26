import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, MessageCircle, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import mahaflowLogo from '@/assets/mahaflow-logo-new.png';
import rotafacilLogo from '@/assets/rotafacil-logo.png';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Fique por dentro</h3>
            <p className="text-background/70 mb-6">
              Receba novidades sobre experiências, eventos e conteúdos exclusivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={mahaflowLogo}
                alt="Mahaflow"
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-bold">Mahaflow</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Conexão com a natureza, movimento e bem-estar real. 
              Experiências que transformam.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/mahaflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5522981602212"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:contato@mahaflow.com.br"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explorar</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#experiencias" className="text-background/70 hover:text-background text-sm transition-colors">
                  Experiências
                </a>
              </li>
              <li>
                <a href="/#calendario" className="text-background/70 hover:text-background text-sm transition-colors">
                  Calendário
                </a>
              </li>
              <li>
                <Link to="/loja" className="text-background/70 hover:text-background text-sm transition-colors">
                  Loja
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/70 hover:text-background text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/feed" className="text-background/70 hover:text-background text-sm transition-colors">
                  Comunidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Comunidade</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/mahatinder" className="text-background/70 hover:text-background text-sm transition-colors">
                  MahaTinder
                </Link>
              </li>
              <li>
                <a href="/#encontros" className="text-background/70 hover:text-background text-sm transition-colors">
                  Encontros Bimestrais
                </a>
              </li>
              <li>
                <Link to="/dashboard" className="text-background/70 hover:text-background text-sm transition-colors">
                  Minha Conta
                </Link>
              </li>
              <li>
                <a href="/#patrocinadores" className="text-background/70 hover:text-background text-sm transition-colors">
                  Seja Parceiro
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Campos dos Goytacazes – RJ
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+5522981602212" className="text-background/70 hover:text-background transition-colors">
                  (22) 98160-2212
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:contato@mahaflow.com.br" className="text-background/70 hover:text-background transition-colors">
                  contato@mahaflow.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Powered by RotaFácil */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <span className="text-background/40 text-xs uppercase tracking-widest">Powered by</span>
            <div className="flex items-center gap-3">
              <img
                src={rotafacilLogo}
                alt="RotaFácil"
                className="h-8 w-auto object-contain opacity-70"
              />
              <span className="text-background/70 font-medium">RotaFácil</span>
              <Link
                to="/gestor-login"
                className="opacity-30 hover:opacity-70 transition-opacity ml-2"
                title="Área do Organizador"
              >
                <KeyRound size={16} />
              </Link>
            </div>
            <p className="text-background/50 text-xs max-w-md">
              Plataforma white label para excursões, viagens e experiências organizadas
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>&copy; {new Date().getFullYear()} Mahaflow. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link to="/termos" className="hover:text-background transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="hover:text-background transition-colors">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
