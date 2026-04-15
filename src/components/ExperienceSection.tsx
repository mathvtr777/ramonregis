import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const ExperienceSection = () => {
  const header = useScrollReveal();
  const steps = useStaggerReveal();

  return (
    <section className="py-24 lg:py-32 bg-graphite">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={header.ref} className={`reveal ${header.isVisible ? "visible" : ""}`}>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Experiência do Paciente</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-sand leading-tight mb-8">
              Sua estética merece um olhar <span className="text-gold italic">único</span>
            </h2>
          </div>

          <div ref={steps.ref} className="grid md:grid-cols-3 gap-8 mt-16 stagger-children">
            {[
              { step: "01", title: "Avaliação Individualizada", text: "Cada paciente é único. A consulta começa com uma análise detalhada das proporções, necessidades e expectativas." },
              { step: "02", title: "Protocolo Sob Medida", text: "Com base na avaliação, é desenvolvido um plano de tratamento personalizado, priorizando naturalidade e harmonia." },
              { step: "03", title: "Resultados com Excelência", text: "A combinação de técnica avançada, materiais de primeira linha e olhar estético refinado garante resultados sofisticados." },
            ].map((item) => (
              <div key={item.step} className={`text-center px-4 reveal ${steps.isVisible ? "visible" : ""}`}>
                <span className="font-heading text-6xl text-gold/20 block mb-4 animate-float" style={{ animationDelay: `${parseInt(item.step) * 0.3}s` }}>{item.step}</span>
                <h3 className="font-heading text-xl text-sand mb-3">{item.title}</h3>
                <p className="font-body text-sand/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
