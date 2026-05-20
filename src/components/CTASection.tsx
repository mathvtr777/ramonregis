import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5584998968160?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20Dr.%20Ramon%20Regis.";

const CTASection = () => {
  const section = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-graphite relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />

      {/* Shimmer background */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={section.ref} className={`max-w-3xl mx-auto text-center reveal-scale ${section.isVisible ? "visible" : ""}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-6">Próximo Passo</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-sand leading-tight mb-6">
            Descubra o potencial máximo da sua estética com um plano{" "}
            <span className="text-gold italic">personalizado</span> e de alto padrão.
          </h2>
          <p className="font-body text-lg text-sand/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Agende sua avaliação e conheça o tratamento ideal para valorizar sua individualidade com segurança, precisão e naturalidade.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shine inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wider uppercase px-12 py-5 rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-1 animate-pulse-glow"
          >
            Agendar avaliação personalizada
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-transparent to-gold/30" />
    </section>
  );
};

export default CTASection;
