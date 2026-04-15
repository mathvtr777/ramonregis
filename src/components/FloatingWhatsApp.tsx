import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/558498968160?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20Dr.%20Ramon%20Regis.";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-fade-in group flex items-center justify-center isolate"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 relative z-10" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />
    </a>
  );
};

export default FloatingWhatsApp;
