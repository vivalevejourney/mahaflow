import { Heart, Mountain, Users, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import grupoPico from '@/assets/mahaflow-grupo-pico.jpg';
import conexao from '@/assets/mahaflow-conexao.jpg';
import grupoTrilha from '@/assets/mahaflow-grupo-trilha.jpg';

const matchCards = [
  {
    image: grupoPico,
    name: 'Marina',
    age: 28,
    interests: ['Trekking', 'Yoga'],
  },
  {
    image: conexao,
    name: 'Lucas',
    age: 32,
    interests: ['Rafting', 'Camping'],
  },
  {
    image: grupoTrilha,
    name: 'Julia',
    age: 25,
    interests: ['Trilhas', 'Meditação'],
  },
];

export const MahaTinderSection = () => {
  return (
    <section id="mahatinder" className="section-padding relative overflow-hidden">
      {/* Background gradient rosa/pink sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-rose-50/60 to-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose-200/25 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full text-pink-600 text-sm font-medium border border-pink-200/50">
              <Heart size={16} className="fill-current animate-pulse" />
              Nova Funcionalidade
              <Sparkles size={14} className="text-rose-500" />
            </div>
            
            <h2 className="heading-2 text-foreground">
              Encontre sua{' '}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent font-extrabold animate-pulse">
                tribo
              </span>
            </h2>
            
            <p className="body-large leading-relaxed">
              O{' '}
              <span className="font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                MahaTinder
              </span>{' '}
              conecta pessoas com os mesmos interesses para 
              compartilhar aventuras. Encontre parceiros de trilha, remada ou acampamento 
              e nunca mais explore sozinho.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center border border-pink-200/50">
                  <Mountain className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Match por atividade</h4>
                  <p className="text-muted-foreground text-sm">Conecte-se com quem curte o mesmo tipo de aventura</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center border border-pink-200/50">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Grupos por região</h4>
                  <p className="text-muted-foreground text-sm">Encontre pessoas perto de você para explorar juntos</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center border border-pink-200/50">
                  <Compass className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Experiências compartilhadas</h4>
                  <p className="text-muted-foreground text-sm">Vivencie as aventuras Mahaflow com novos amigos</p>
                </div>
              </div>
            </div>

            <Link to="/mahatinder">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-lg px-8 py-6 rounded-xl mt-6 group shadow-lg shadow-pink-500/25"
              >
                <Heart className="mr-2 fill-current" size={20} />
                Conhecer pessoas
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>

          {/* Preview Cards */}
          <div className="relative h-[400px] md:h-[500px] order-1 lg:order-2">
            {matchCards.map((card, index) => (
              <div
                key={index}
                className="absolute w-64 md:w-72 rounded-2xl overflow-hidden shadow-2xl bg-card border border-pink-200/30 transform transition-all duration-300 hover:scale-105"
                style={{
                  top: `${index * 40}px`,
                  left: `${index * 30}px`,
                  zIndex: matchCards.length - index,
                  transform: `rotate(${(index - 1) * 5}deg)`,
                }}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white">
                      {card.name}, {card.age}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {card.interests.map((interest, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-pink-500/30 backdrop-blur-sm rounded-full text-white text-xs border border-pink-300/30"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 text-pink-500 fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
