import projPromo1 from "@/assets/promo1.jpeg";
import projPromo2 from "@/assets/promo2.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5562996343740?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20promo%C3%A7%C3%B5es%20do%20m%C3%AAs.";

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
            Promoções do <span className="text-gold italic">Mês</span>
          </h2>
          
          <p className="font-body text-sand/70 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Não perca essa oportunidade única de elevar a sua estética com nossas condições especiais por tempo limitado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <div className="relative group rounded-lg overflow-hidden border border-sand/10 hover:border-gold/50 shadow-2xl hover:shadow-gold/10 transition-all duration-500 bg-black/40">
              <div className="aspect-[4/5] bg-background-dark overflow-hidden flex items-center justify-center p-2">
                <img 
                  src={projPromo1} 
                  alt="Promoção Especial 1" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-xl rounded-sm"
                />
              </div>
            </div>

            <div className="relative group rounded-lg overflow-hidden border border-sand/10 hover:border-gold/50 shadow-2xl hover:shadow-gold/10 transition-all duration-500 bg-black/40">
              <div className="aspect-[4/5] bg-background-dark overflow-hidden flex items-center justify-center p-2">
                <img 
                  src={projPromo2} 
                  alt="Promoção Especial 2" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-xl rounded-sm"
                />
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shine inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wider uppercase px-10 py-5 rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold/20 hover:-translate-y-1"
          >
            Quero aproveitar <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gold/5 blur-[150px] -z-10 rounded-full" />
    </section>
  );
};

export default PromotionsSection;
