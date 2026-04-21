import { useState } from "react";
import projPromo1 from "@/assets/promoc.jpeg";
import projPromo2 from "@/assets/promo2.jpeg";
import projPromo3 from "@/assets/intimo.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles, ShoppingBag } from "lucide-react";
import { CheckoutModal, PromotionOffer } from "./CheckoutModal";

const promotionsData: PromotionOffer[] = [
  {
    id: "promo-1",
    title: "Toxina Botulínica (Dysport 50 Und)",
    price: 588.00,
    cashPrice: 500.00,
    installmentsText: "10x de R$ 58,80",
    image: projPromo1,
  },
  {
    id: "promo-2",
    title: "Rejuvenescimento Facial (40% OFF)",
    price: 720.00,
    cashPriceText: "ou R$ 550,00 a ml",
    installmentsText: "10x de R$ 72,00",
    image: projPromo2,
  },
  {
    id: "promo-3",
    title: "Preenchimento Íntimo",
    price: 3000.00,
    installmentsText: "10x sem juros",
    image: projPromo3,
  }
];

const PromotionsSection = () => {
  const section = useScrollReveal();
  const [selectedOffer, setSelectedOffer] = useState<PromotionOffer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = (offer: PromotionOffer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

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
          
          <p className="font-body text-sand/70 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
            Não perca essa oportunidade única de elevar a sua estética com nossas condições especiais por tempo limitado. Adquira agora mesmo de forma online e 100% segura.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {promotionsData.map((promo) => (
              <div key={promo.id} className="relative group rounded-xl overflow-hidden border border-sand/10 hover:border-gold/50 shadow-2xl hover:shadow-gold/10 transition-all duration-500 bg-black/40 flex flex-col h-full relative z-20">
                <div className="aspect-[4/5] bg-black overflow-hidden flex items-center justify-center p-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent z-10" />
                  <img 
                    src={promo.image} 
                    alt={promo.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow text-left relative z-20 bg-gradient-to-t from-black via-black/95 to-black/90">
                  <div className="mb-4 flex-grow">
                    <h3 className="text-xl font-heading text-sand mb-2 leading-tight">{promo.title}</h3>
                    <div className="flex flex-col gap-0.5 mt-3">
                      {promo.installmentsText && (
                        <span className="text-xs text-sand/60 uppercase tracking-wider font-semibold">
                          {promo.installmentsText}
                        </span>
                      )}
                      <div className="flex items-baseline gap-2">
                        {!promo.installmentsText && (
                          <span className="text-xs text-sand/50 uppercase tracking-wider font-semibold">Por apenas</span>
                        )}
                        <span className="text-2xl font-bold text-gold">
                          R$ {promo.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      {promo.cashPriceText ? (
                        <span className="text-xs text-sand/70 mt-1">
                          <span className="font-semibold text-gold">{promo.cashPriceText}</span>
                        </span>
                      ) : promo.cashPrice ? (
                        <span className="text-xs text-sand/70 mt-1">
                          ou <span className="font-semibold text-gold">R$ {promo.cashPrice.toFixed(2).replace('.', ',')}</span> à vista
                        </span>
                      ) : null}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleBuyClick(promo)}
                    className="w-full mt-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wide uppercase px-6 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold/20 hover:-translate-y-1"
                  >
                    Comprar Agora <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen} 
        offer={selectedOffer} 
      />
      
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gold/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
    </section>
  );
};

export default PromotionsSection;
