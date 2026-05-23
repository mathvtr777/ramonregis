import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles } from "lucide-react";
import promoImg from "@/assets/botoxjunho.jpeg";

const WHATSAPP_URL = "https://wa.me/5584998968160?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Promoção%20Junina.";

const PromotionsSection = () => {
  const section = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-graphite relative overflow-hidden border-y border-sand/10">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={section.ref} className={`max-w-6xl mx-auto text-center transform transition-all duration-1000 ${section.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 mb-6 border border-gold/30 rounded-full px-4 py-1.5 bg-black/20">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs font-body tracking-[0.2em] uppercase text-sand/80">Oportunidade Exclusiva</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-5xl text-sand mb-4 leading-tight">
            Promoção <span className="text-gold italic">Junina</span>
          </h2>
          
          <p className="font-body text-sand/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Não perca essa oportunidade única de elevar a sua estética com nossas condições especiais por tempo limitado. Adquira agora mesmo de forma online e 100% segura.
          </p>

          <div className="mt-10 flex flex-col items-center">
            <div className="relative group max-w-md mx-auto rounded-lg overflow-hidden border border-gold/30 shadow-2xl transition-all duration-500 hover:border-gold/60 hover:shadow-gold/15">
              <img
                src={promoImg}
                alt="Promoção Junina"
                className="w-full h-auto object-cover transition-transform duration-750 group-hover:scale-[1.03]"
              />
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shine inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wider uppercase px-10 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5 mt-8 w-full sm:w-auto"
            >
              Aproveitar Promoção
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gold/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
    </section>
  );
};

export default PromotionsSection;
