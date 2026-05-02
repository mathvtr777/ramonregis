import { useState } from "react";
import novaImg from "@/assets/nova.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles } from "lucide-react";

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
          
          <p className="font-body text-sand/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Não perca essa oportunidade única de elevar a sua estética com nossas condições especiais por tempo limitado. Adquira agora mesmo de forma online e 100% segura.
          </p>

          <div className="mb-8 flex justify-center">
            <img 
              src={novaImg} 
              alt="Promoções em destaque" 
              className="max-w-full md:max-w-3xl rounded-xl shadow-2xl border border-gold/30 object-cover" 
            />
          </div>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gold/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
    </section>
  );
};

export default PromotionsSection;
