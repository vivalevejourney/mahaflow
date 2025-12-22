import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { blogPosts, formatDate } from '@/data/mockData';

const Blog = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const categories = ['Todos', 'Guias', 'Saúde', 'Bem-estar', 'Sustentabilidade'];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Blog
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Conteúdo & Inspiração
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Dicas, guias e histórias para você aproveitar ao máximo suas aventuras 
              e cuidar do seu bem-estar.
            </p>
          </div>

          {/* Search & Categories */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 max-w-4xl mx-auto">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar artigos..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === 'Todos' ? 'default' : 'outline'}
                  className="cursor-pointer whitespace-nowrap"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <article className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary text-primary-foreground">
                    Em destaque
                  </Badge>
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-primary" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-primary" />
                      {featuredPost.readTime}
                    </div>
                    <span>{formatDate(featuredPost.date)}</span>
                  </div>
                  <Button className="w-fit group/btn">
                    Ler artigo
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Button>
                </div>
              </div>
            </article>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar mais artigos
            </Button>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 max-w-2xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground text-center">
              <h3 className="text-2xl font-bold mb-3">
                Receba conteúdo exclusivo
              </h3>
              <p className="opacity-90 mb-6">
                Dicas de trilhas, receitas saudáveis e novidades da comunidade 
                direto no seu e-mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
