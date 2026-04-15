import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/558498968160?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20Dr.%20Ramon%20Regis.";

const methods = [
  {
    name: "Full Face Plus",
    tagline: "Protocolo Autoral de Harmonização Facial",
    description: "Método exclusivo desenvolvido por Dr. Ramon Regis para harmonização facial completa, combinando múltiplas técnicas em um protocolo integrado que entrega resultados naturais, equilibrados e de altíssimo padrão estético.",
  },
  {
    name: "Full Shape",
    tagline: "Protocolo Autoral de Remodelação Corporal",
    description: "Protocolo autoral voltado para o contorno e a remodelação corporal, unindo tecnologias avançadas e técnicas de preenchimento para esculpir silhuetas com precisão, naturalidade e sofisticação.",
  },
];

const MethodsSection = () => {
  const header = useScrollReveal();
  const cards = useStaggerReveal();

  return (
    <section className="py-24 lg:py-32 bg-graphite">
      <div className="container mx-auto px-6">
        <div ref={header.ref} className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 reveal ${header.isVisible ? "visible" : ""}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Métodos Exclusivos</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-sand leading-tight">
            Protocolos <span className="text-gold italic">autorais</span>
          </h2>
        </div>

        <div ref={cards.ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-children">
          {methods.map((method) => (
            <div
              key={method.name}
              className={`group relative p-10 lg:p-12 border border-gold/20 rounded-sm bg-graphite-dark hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 reveal-scale ${cards.isVisible ? "visible" : ""}`}
            >
              <div className={`absolute top-0 left-0 w-16 h-[2px] bg-gold transition-all duration-700 ${cards.isVisible ? "animate-line-grow" : ""}`} />
              <div className={`absolute top-0 left-0 w-[2px] h-16 bg-gold transition-all duration-700 ${cards.isVisible ? "animate-line-grow" : ""}`} style={{ transformOrigin: "top" }} />

              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">{method.tagline}</p>
              <h3 className="font-heading text-3xl lg:text-4xl text-sand mb-5 group-hover:text-gold transition-colors duration-300">{method.name}</h3>
              <p className="font-body text-sand/60 leading-relaxed mb-8">{method.description}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase text-gold hover:text-sand transition-all duration-300 group-hover:translate-x-1"
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;
