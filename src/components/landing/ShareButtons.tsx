import { MessageCircle, Link2, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ShareButtonsProps {
  nome: string;
  data: string;
  valorFormatado: string;
  slug: string;
}

export const ShareButtons = ({ nome, data, valorFormatado, slug }: ShareButtonsProps) => {
  const url = `${window.location.origin}/experiencias/${slug}`;
  
  const shareText = `🌿 Olá! Veja essa experiência incrível da Mahaflow: ${nome} — ${data}${valorFormatado && valorFormatado !== 'Em breve' ? ` por ${valorFormatado}` : ''}. Acesse: ${url}`;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copiado! ✓');
    } catch {
      toast.error('Não foi possível copiar o link');
    }
  };

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: `Mahaflow — ${nome}`,
        text: shareText,
        url,
      });
    } catch {
      // User cancelled or error
    }
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-green-600"
        onClick={handleWhatsApp}
        title="Compartilhar no WhatsApp"
      >
        <MessageCircle size={16} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-primary"
        onClick={handleCopyLink}
        title="Copiar link"
      >
        <Link2 size={16} />
      </Button>
      {typeof navigator.share === 'function' && (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-primary"
          onClick={handleNativeShare}
          title="Compartilhar"
        >
          <Share2 size={16} />
        </Button>
      )}
    </div>
  );
};
