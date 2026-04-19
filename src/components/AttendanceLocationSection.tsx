import localImg from "@/assets/local.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, ExternalLink } from "lucide-react";

const MAPS_URL = "https://maps.app.goo.gl/CLnJjaiBWQXF1cyP8?g_st=iw";

const AttendanceLocationSection = () => {
  const section = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-graphite relative overflow-hidden border-y border-sand/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold/5 blur-[140px] -z-10 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={section.ref}
          className={`max-w-6xl mx-auto transform transition-all duration-1000 ${
            section.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 border border-gold/30 rounded-full px-4 py-1.5 bg-black/20">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-xs font-body tracking-[0.2em] uppercase text-sand/80">
                Local de Atendimento
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-5xl text-sand mb-4 leading-tight">
              Atendimento <span className="text-gold italic">Setor Marista</span>
            </h2>

            <p className="font-body text-sand/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Estamos localizados em uma das regiões mais nobres de Goiânia, com fácil acesso e estacionamento.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative group rounded-xl overflow-hidden border border-sand/10 hover:border-gold/40 shadow-2xl hover:shadow-gold/10 transition-all duration-500">
              <img
                src={localImg}
                alt="Local de Atendimento - Setor Marista"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Info card */}
            <div className="flex flex-col gap-6">
              <div className="bg-black/30 border border-sand/10 rounded-xl p-8 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-sand mb-1">Setor Marista</h3>
                    <p className="font-body text-sand/60 text-sm">Goiânia – GO</p>
                  </div>
                </div>

                <div className="h-px bg-sand/10 mb-6" />

                <p className="font-body text-sand/70 text-base leading-relaxed mb-8">
                  Clínica moderna com infraestrutura completa, pensada para proporcionar conforto e exclusividade em cada visita.
                </p>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold/20 hover:-translate-y-1 w-full"
                >
                  Ver no Google Maps <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceLocationSection;
