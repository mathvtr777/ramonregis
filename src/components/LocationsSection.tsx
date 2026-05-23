import { MapPin, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const locations = [
  { state: "Goiás/DF", cities: "Goiânia, Anápolis, Rio Verde e Brasília" },
  { state: "Rio Grande do Norte", cities: "Mossoró e Natal" },
  { state: "Paraíba", cities: "João Pessoa e Campina Grande" },
  { state: "São Paulo", cities: "Capital e RMC" },
];

const WHATSAPP_URL = "https://wa.me/5584998968160?text=Hola%2C%20me%20gustar%C3%ADa%20programar%20una%20valoraci%C3%B3n%20en%20las%20ciudades%20listadas.";

const LocationsSection = () => {
  const section = useScrollReveal();

  return (
    <section className="py-24 bg-graphite relative overflow-hidden border-t border-sand/10">
      <div className="container mx-auto px-6 relative z-10">
        <div ref={section.ref} className={`max-w-5xl mx-auto text-center transform transition-all duration-1000 ${section.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 mb-6 border border-gold/30 rounded-full px-4 py-1.5 bg-black/20">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-xs font-body tracking-[0.2em] uppercase text-sand/80">Dónde estamos</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-5xl text-sand mb-8 leading-tight">
            Lugares de <span className="text-gold italic">Atención</span>
          </h2>
          
          <p className="font-body text-sand/70 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
            Llevando excelencia, naturalidad y resultados premium a diversas regiones. Consulte nuestra agenda para su ciudad.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {locations.map((loc, index) => (
              <div 
                key={loc.state} 
                className="bg-[#1A1A1A] p-8 rounded-sm border border-sand/10 hover:border-gold/40 transition-colors duration-300 text-left group shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-graphite rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-sand/5">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-heading text-2xl text-sand mb-2">{loc.state}</h3>
                <p className="font-body text-sand/60 text-sm leading-relaxed">{loc.cities}</p>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shine inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wider uppercase px-6 sm:px-10 py-4 sm:py-5 rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold/20 hover:-translate-y-1 w-full sm:w-auto"
          >
            Haga clic aquí para programar <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Decorative subtle background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gold/5 blur-[150px] -z-10 rounded-full" />
    </section>
  );
};

export default LocationsSection;
