import { Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/mockData';
import { Link } from 'react-router-dom';

// Import images correctly for Vite
import trilhaImage from '@/assets/mahaflow-trilha.jpg';
import raftingImage from '@/assets/mahaflow-rafting.jpg';
import cachoeiraImage from '@/assets/mahaflow-cachoeira.jpg';
import canoagemImage from '@/assets/mahaflow-canoagem.jpg';

const blogImages: Record<string, string> = {
  'primeira-trilha': trilhaImage,
  'beneficios-rafting': raftingImage,
  'saude-mental-natureza': cachoeiraImage,
  'sustentabilidade': canoagemImage,
};
export const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Blog
          </span>
          <h2 className="heading-2 text-foreground mt-4 mb-6">
            Conteúdo & Inspiração
          </h2>
          <p className="body-large">
            Dicas, guias e histórias para você aproveitar ao máximo suas aventuras 
            e cuidar do seu bem-estar.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <article className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                <img
                  src={blogImages[blogPosts[0].id] || blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                  {blogPosts[0].category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-primary" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-primary" />
                    {blogPosts[0].readTime}
                  </div>
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

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className="group card-elevated overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={blogImages[post.id] || post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="outline" size="lg" className="group">
              Ver todos os artigos
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
