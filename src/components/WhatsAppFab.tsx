import { MessageCircle } from "lucide-react";

const WhatsAppFab = () => {
  return (
    <a
      href="https://wa.me/553899484217"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppFab;
