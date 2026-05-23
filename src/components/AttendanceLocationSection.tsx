import localImg from "@/assets/local.jpeg";
import theImg from "@/assets/the.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, ExternalLink, Calendar } from "lucide-react";

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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 border border-gold/30 rounded-full px-4 py-1.5 bg-black/20">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-xs font-body tracking-[0.2em] uppercase text-sand/80">
                Lugares de Atención
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-5xl text-sand mb-4 leading-tight">
              Atención en <span className="text-gold italic">Goiânia</span>
            </h2>

            <p className="font-body text-sand/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Estamos ubicados en algunas de las zonas más exclusivas de Goiânia, con fácil acceso e infraestructura completa para su comodidad.
            </p>
          </div>

          {/* Location 1: The Prime Tamandaré */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
            {/* Image */}
            <div className="relative group rounded-xl overflow-hidden border border-sand/10 hover:border-gold/40 shadow-2xl hover:shadow-gold/10 transition-all duration-500">
              <img
                src={theImg}
                alt="Lugar de Atención - The Prime Tamandaré Office"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
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
                    <h3 className="font-heading text-xl text-sand mb-1">The Prime Tamandaré Office</h3>
                    <p className="font-body text-sand/60 text-sm">Setor Oeste, Goiânia – GO</p>
                  </div>
                </div>

                <div className="h-px bg-sand/10 mb-6" />

                <p className="font-body text-sand/70 text-base leading-relaxed mb-8">
                  Rua 5, nº 691 - St. Oeste, Goiânia - GO, 74115-060
                </p>

                <a
                  href="https://wa.me/5584998968160?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20The%20Prime%20Tamandar%C3%A9."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold/20 hover:-translate-y-1 w-full"
                >
                  Agendar Cita <Calendar className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Location 2: Setor Marista */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative group rounded-xl overflow-hidden border border-sand/10 hover:border-gold/40 shadow-2xl hover:shadow-gold/10 transition-all duration-500 lg:order-2">
              <img
                src={localImg}
                alt="Lugar de Atención - Setor Marista"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Info card */}
            <div className="flex flex-col gap-6 lg:order-1">
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
                  Clínica moderna con infraestructura completa, diseñada para brindar comodidad y exclusividad en cada visita.
                </p>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border border-gold text-gold hover:bg-gold hover:text-graphite font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold/20 hover:-translate-y-1 w-full"
                >
                  Ver en Google Maps <ExternalLink className="w-4 h-4" />
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
