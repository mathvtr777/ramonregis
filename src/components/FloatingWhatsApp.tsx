import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5584998968160?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n%20con%20el%20Dr.%20Ramon%20Regis.";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-fade-in group flex items-center justify-center isolate"
      aria-label="Contáctenos por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 relative z-10" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />
    </a>
  );
};

export default FloatingWhatsApp;
