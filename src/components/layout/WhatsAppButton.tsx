import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export const WhatsAppButton = ({
  phoneNumber = '5522981602212',
  message = 'Olá! Vim pelo site da Mahaflow e gostaria de saber mais sobre as experiências.',
  className,
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'flex items-center justify-center',
        'w-14 h-14 rounded-full',
        'bg-[#25D366] text-white',
        'shadow-elevated hover:shadow-glow',
        'transition-all duration-300',
        'hover:scale-110 hover:-translate-y-1',
        'animate-pulse-soft',
        className
      )}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
};
