import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5562996343740?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20Dr.%20Ramon%20Regis.";

const treatments = [
  "Preenchimento de Mento", "Bigode Chinês", "Preenchimento Malar", "Preenchimento Marionete",
  "Reversão de Comissura Labial", "Preenchimento de Têmpora", "Preenchimento de Mandíbula",
  "Reversão Lipo de Papada", "Preenchimentos Corporais", "Bioestimuladores Corporais",
  "Procedimentos Íntimos Femininos", "Procedimentos Íntimos Masculinos",
];

const ComplementarySection = () => {
  const header = useScrollReveal();
  const grid = useStaggerReveal();

  return (
    <section className="py-24 lg:py-32 bg-sand-dark/50">
      <div className="container mx-auto px-6">
        <div ref={header.ref} className={`max-w-3xl mx-auto text-center mb-16 reveal ${header.isVisible ? "visible" : ""}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Mais Tratamentos</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Procedimentos <span className="text-gold italic">complementares</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Uma gama completa de tratamentos estéticos para face, corpo e saúde íntima.
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
            Agendar avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComplementarySection;
