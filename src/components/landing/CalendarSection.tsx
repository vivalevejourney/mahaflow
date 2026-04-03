import { CalendarDays, MapPin, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { events, formatDate, formatPrice } from '@/data/mockData';

export const CalendarSection = () => {
  return (
    <section id="calendario" className="section-padding relative overflow-hidden">
      {/* Background gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/50 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Calendário
          </span>
          <h2 className="heading-2 text-foreground mt-4 mb-6">
            Próximos eventos
          </h2>
          <p className="body-large">
            Confira nossa agenda e garanta sua vaga nas experiências que vão 
            transformar seu ano.
          </p>
          
          {/* Credibilidade i9 Experience */}
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <CheckCircle2 size={16} className="text-primary" />
            <span>Organização profissional por i9 Experience</span>
          </div>
        </div>

        {/* Events Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {events.map((event, index) => {
              const eventDate = new Date(event.date);
              const day = eventDate.getDate();
              const month = eventDate.toLocaleDateString('pt-BR', { month: 'short' }).toUpperCase();
              const isSoldOut = event.spotsLeft === 0;

              return (
                <div
                  key={event.id}
                  className="group relative flex gap-6 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Date Badge */}
                  <div className="shrink-0 w-20 h-20 rounded-xl bg-primary text-primary-foreground flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">{day}</span>
                    <span className="text-xs uppercase tracking-wider opacity-90">{month}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {event.name}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-primary" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={14} className="text-primary" />
                            {isSoldOut ? (
                              <span className="text-destructive">Esgotado</span>
                            ) : (
                              <span>{event.spotsLeft} vagas restantes</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex flex-col items-end gap-3">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-foreground">
                            {formatPrice(event.price)}
                          </div>
                          {event.price !== 'Gratuito' && (
                            <div className="text-xs text-muted-foreground">por pessoa</div>
                          )}
                        </div>
                        <Button
                          disabled={isSoldOut}
                          className="group/btn"
                        >
                          {isSoldOut ? 'Esgotado' : 'Participar'}
                          {!isSoldOut && (
                            <ArrowRight
                              size={16}
                              className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                            />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  {event.spotsLeft <= 5 && event.spotsLeft > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground animate-pulse-soft">
                      Últimas vagas!
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Teaser 2026 */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/40 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Agenda 2026 chegando!
            </h3>
            <p className="text-muted-foreground mb-4">
              Novas aventuras, novos destinos. Fique por dentro das novidades.
            </p>
            <Button variant="outline" className="group">
              Receber novidades
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
