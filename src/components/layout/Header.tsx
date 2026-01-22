import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/data/mockData';
import { cn } from '@/lib/utils';
import mahaflowLogo from '@/assets/mahaflow-logo-new.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled || !isHomePage
          ? 'bg-foreground/80 backdrop-blur-xl shadow-elevated border-b border-white/10'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover-lift">
            <img
              src={mahaflowLogo}
              alt="Mahaflow"
              className="h-12 w-auto object-contain drop-shadow-lg brightness-0 invert"
            />
            <span
              className="text-xl font-bold tracking-tight text-white drop-shadow-lg"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
            >
              Mahaflow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold link-underline transition-colors text-white/90 hover:text-white"
                style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                Entrar
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                VEM SER MAHA
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-foreground/80 hover:text-foreground font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Entrar
                </Button>
              </Link>
              <Link to="/cadastro" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">VEM SER MAHA</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
