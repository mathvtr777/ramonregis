import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5584998968160?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n%20con%20el%20Dr.%20Ramon%20Regis.";

const treatments = [
  "Relleno de Mentón", "Surcos Nasogenianos", "Relleno Malar", "Líneas de Marioneta",
  "Reversión de Comisura Labial", "Relleno de Sienes", "Relleno de Mandíbula",
  "Reversión de Lipo de Papada", "Rellenos Corporales", "Bioestimuladores Corporales",
  "Procedimientos Íntimos Femeninos", "Procedimientos Íntimos Masculinos",
];

const ComplementarySection = () => {
  const header = useScrollReveal();
  const grid = useStaggerReveal();

  return (
    <section className="py-24 lg:py-32 bg-sand-dark/50">
      <div className="container mx-auto px-6">
        <div ref={header.ref} className={`max-w-3xl mx-auto text-center mb-16 reveal ${header.isVisible ? "visible" : ""}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Más Tratamientos</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Procedimientos <span className="text-gold italic">complementarios</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Una gama completa de tratamientos estéticos para rostro, cuerpo y salud íntima.
          </p>
        </div>

        <div ref={grid.ref} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 stagger-children">
          {treatments.map((t) => (
            <div
              key={t}
              className={`px-6 py-4 border border-border hover:border-gold/30 rounded-sm font-body text-sm text-foreground text-center transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 reveal ${grid.isVisible ? "visible" : ""}`}
            >
              {t}
            </div>
          ))}
        </div>

        <div className={`text-center reveal ${grid.isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.6s" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shine inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wider uppercase px-10 py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            Programar valoración
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComplementarySection;
