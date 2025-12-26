import { ShoppingBag, Leaf, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, formatPrice } from '@/data/mockData';
import { Link } from 'react-router-dom';

// Import product images
import productCamisetaVerde from '@/assets/product-camiseta-verde.png';
import productCamisetaCinza from '@/assets/product-camiseta-cinza.png';
import productCamisetaOffwhite from '@/assets/product-camiseta-offwhite.png';
import productRegataOffwhite from '@/assets/product-regata-offwhite.png';
import productRegataPreta from '@/assets/product-regata-preta.png';
import productBone from '@/assets/product-bone.png';
import productBucketHat from '@/assets/product-bucket-hat.png';
import productViseiraNew from '@/assets/product-viseira-new.png';
import productChaveiro from '@/assets/product-chaveiro.png';

const productImages: Record<string, string> = {
  'product-camiseta-verde': productCamisetaVerde,
  'product-camiseta-cinza': productCamisetaCinza,
  'product-camiseta-offwhite': productCamisetaOffwhite,
  'product-regata-offwhite': productRegataOffwhite,
  'product-regata-preta': productRegataPreta,
  'product-bone': productBone,
  'product-bucket-hat': productBucketHat,
  'product-viseira-new': productViseiraNew,
  'product-chaveiro': productChaveiro,
};

export const ShopSection = () => {
  return (
    <section id="loja" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Loja
          </span>
          <h2 className="heading-2 text-foreground mt-4 mb-6">
            Produtos Mahaflow
          </h2>
          <p className="body-large">
            Vista a natureza. Produtos exclusivos pensados para sua próxima aventura, 
            com responsabilidade ambiental.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, index) => (
            <article
              key={product.id}
              className="group card-elevated overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary/50">
                <img
                  src={productImages[product.image] || product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-3 left-3 bg-primary/10 text-primary border-primary/20 text-xs">
                  <Leaf size={12} className="mr-1" />
                  Sustentável
                </Badge>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Sustainability Note */}
                <p className="text-xs text-primary/80 bg-primary/5 p-2 rounded-lg line-clamp-2">
                  🌱 {product.sustainability}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-1">
                  <div className="text-lg font-bold text-foreground">
                    {formatPrice(product.price)}
                  </div>
                  <Button size="sm" className="group/btn text-xs px-3">
                    <ShoppingBag size={14} className="mr-1" />
                    Comprar
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/loja">
            <Button variant="outline" size="lg" className="group">
              Ver todos os produtos
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
