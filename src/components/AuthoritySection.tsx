import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    title: "Referencia en Rinomodelación",
    description: "Más de 5 mil procedimientos realizados con cero complicaciones, uniendo técnica avanzada y mirada estética refinada.",
  },
  {
    title: "Armonización & Rejuvenecimiento",
    description: "Protocolos personalizados que restauran volumen, contornos y juventud con resultados naturales y elegantes.",
  },
  {
    title: "Protocolos Exclusivos",
    description: "Creador de los métodos Full Face Plus y Full Shape, desarrollados para resultados diferenciados y de alto nivel.",
  },
  {
    title: "Seguridad & Naturalidad",
    description: "Compromiso inquebrantable con la salud del paciente, combinando ciencia, precisión y resultados que respetan la individualidad.",
  },
];

const AuthoritySection = () => {
  const header = useScrollReveal();
  const grid = useStaggerReveal();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={header.ref} className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 reveal ${header.isVisible ? "visible" : ""}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Propuesta de Valor</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Excelencia que se traduce en{" "}
            <span className="text-gold italic">confianza</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Un enfoque que une ciencia, técnica y sensibilidad estética para resultados que transforman con seguridad y sofisticación.
          </p>
        </div>

        <div ref={grid.ref} className={`grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto stagger-children`}>
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group p-8 lg:p-10 border border-border hover:border-gold/40 rounded-sm transition-all duration-500 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1 reveal ${grid.isVisible ? "visible" : ""}`}
            >
              <span className="font-heading text-5xl text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl lg:text-2xl text-foreground mt-4 mb-3">{pillar.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
