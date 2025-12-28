import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Leaf, Minus, Plus, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { products, formatPrice } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

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

interface CartItem {
  productId: string;
  quantity: number;
}

const Loja = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const { toast } = useToast();

  const addToCart = (productId: string) => {
    const existing = cart.find((item) => item.productId === productId);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { productId, quantity: 1 }]);
    }
    
    toast({
      title: 'Produto adicionado!',
      description: 'O item foi adicionado ao seu carrinho.',
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(
      cart
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.productId !== productId));
  };

  const getProduct = (id: string) => products.find((p) => p.id === id);

  const cartTotal = cart.reduce((total, item) => {
    const product = getProduct(item.productId);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const getProductImage = (product: typeof products[0]) => {
    return productImages[product.image] || product.image;
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Loja
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              Produtos Mahaflow
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Vista a natureza. Produtos exclusivos pensados para sua próxima aventura, 
              com responsabilidade ambiental.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <article
                key={product.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-secondary/50">
                  <img
                    src={getProductImage(product)}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[40%]"
                  />
                  {/* Em Breve Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Badge className="bg-amber-500 text-white border-amber-600 text-lg px-6 py-2 font-semibold">
                      Em Breve
                    </Badge>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary/10 text-primary border-primary/20">
                    <Leaf size={12} className="mr-1" />
                    Sustentável
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Sustainability Note */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-sm text-primary flex items-start gap-2">
                      <Leaf size={16} className="shrink-0 mt-0.5" />
                      {product.sustainability}
                    </p>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-3xl font-bold text-foreground">
                        {formatPrice(product.price)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ou 3x de {formatPrice(product.price / 3)}
                      </div>
                    </div>
                    <Button variant="outline" disabled className="opacity-60 cursor-not-allowed">
                      Em Breve
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Sustentável</h3>
                <p className="text-sm text-muted-foreground">
                  Todos os produtos são feitos com materiais eco-friendly.
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Frete Grátis</h3>
                <p className="text-sm text-muted-foreground">
                  Para compras acima de R$ 150 em Campos dos Goytacazes.
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Troca Fácil</h3>
                <p className="text-sm text-muted-foreground">
                  30 dias para trocar ou devolver, sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Cart Button */}
      {cartItemsCount > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-24 right-6 z-40 flex items-center gap-3 px-6 py-4 rounded-full bg-primary text-primary-foreground shadow-glow hover:opacity-90 transition-opacity animate-fade-in"
        >
          <ShoppingBag size={20} />
          <span className="font-semibold">{formatPrice(cartTotal)}</span>
          <Badge className="bg-white text-primary">{cartItemsCount}</Badge>
        </button>
      )}

      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed inset-0 z-50 bg-black/50 animate-fade-in" onClick={() => setShowCart(false)}>
          <div
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-2xl animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold text-foreground">Seu Carrinho</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowCart(false)}>
                  <X size={24} />
                </Button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length > 0 ? (
                  cart.map((item) => {
                    const product = getProduct(item.productId);
                    if (!product) return null;
                    return (
                      <div
                        key={item.productId}
                        className="flex gap-4 p-4 rounded-xl bg-secondary/50"
                      >
                        <img
                          src={getProductImage(product)}
                          alt={product.name}
                          className="w-20 h-20 object-cover bg-white rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground truncate">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {formatPrice(product.price)}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => updateQuantity(item.productId, -1)}
                              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, 1)}
                              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Seu carrinho está vazio</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between text-lg">
                    <span className="text-muted-foreground">Total</span>
                    <span className="font-bold text-foreground">{formatPrice(cartTotal)}</span>
                  </div>
                  <Button className="w-full" size="lg">
                    Finalizar Compra
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Pagamento via Pix ou Cartão (em breve)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Loja;
