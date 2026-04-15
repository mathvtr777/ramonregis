import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    title: "Referência em Rinomodelação",
    description: "Mais de 5 mil procedimentos realizados com zero intercorrências, unindo técnica avançada e olhar estético refinado.",
  },
  {
    title: "Harmonização & Rejuvenescimento",
    description: "Protocolos personalizados que restauram volume, contornos e jovialidade com resultados naturais e elegantes.",
  },
  {
    title: "Protocolos Exclusivos",
    description: "Criador dos métodos Full Face Plus e Full Shape, desenvolvidos para resultados diferenciados e de alto padrão.",
  },
  {
    title: "Segurança & Naturalidade",
    description: "Compromisso inabalável com a saúde do paciente, aliando ciência, precisão e resultados que respeitam a individualidade.",
  },
];

const AuthoritySection = () => {
  const header = useScrollReveal();
  const grid = useStaggerReveal();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={header.ref} className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 reveal ${header.isVisible ? "visible" : ""}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Proposta de Valor</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
            Excelência que se traduz em{" "}
            <span className="text-gold italic">confiança</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Uma abordagem que une ciência, técnica e sensibilidade estética para resultados que transformam com segurança e sofisticação.
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
