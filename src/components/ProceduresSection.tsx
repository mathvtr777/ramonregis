import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5562996343740?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20Dr.%20Ramon%20Regis.";

const procedures = [
  { title: "Botox", description: "Aplicação de toxina botulínica para suavizar rugas e linhas de expressão, prevenindo o envelhecimento e proporcionando aspecto mais leve e descansado." },
  { title: "Harmonização Facial", description: "Procedimento completo para restaurar volume, melhorar contornos e promover rejuvenescimento global da face, com resultados naturais e harmoniosos." },
  { title: "Rinomodelação", description: "Procedimento estético minimamente invasivo que harmoniza o contorno do nariz, corrigindo pequenas imperfeições e melhorando o perfil facial sem cirurgia." },
  { title: "Bioestimuladores", description: "Tratamento que estimula a produção de colágeno, melhorando firmeza, textura e qualidade da pele de forma progressiva e duradoura." },
  { title: "Preenchimento Labial", description: "Preenchimento para definição, volume e hidratação dos lábios, respeitando naturalidade e proporção facial." },
  { title: "Preenchimento de Olheira", description: "Tratamento para suavizar sulcos e reduzir o aspecto de cansaço, trazendo mais luminosidade ao olhar." },
  { title: "Fios de Sustentação", description: "Procedimento minimamente invasivo com efeito lifting imediato, reposicionando tecidos e estimulando colágeno." },
  { title: "Efeito Nefertiti", description: "Técnica avançada para redefinição do contorno mandibular e pescoço, promovendo lifting natural e melhora da flacidez." },
];

const ProceduresSection = () => {
  const header = useScrollReveal();
  const grid = useStaggerReveal();

  return (
    <section className="py-24 lg:py-32 bg-graphite">
      <div className="container mx-auto px-6">
        <div ref={header.ref} className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 reveal ${header.isVisible ? "visible" : ""}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Procedimentos em Destaque</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-sand leading-tight">
            Tratamentos de <span className="text-gold italic">excelência</span>
          </h2>
        </div>

        <div ref={grid.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 stagger-children">
          {procedures.map((proc) => (
            <div
              key={proc.title}
              className={`group relative p-7 lg:p-8 bg-graphite-dark border border-sand/10 hover:border-gold/30 rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 reveal ${grid.isVisible ? "visible" : ""}`}
            >
              <h3 className="font-heading text-xl text-sand mb-3 group-hover:text-gold transition-colors duration-300">
                {proc.title}
              </h3>
              <p className="font-body text-sm text-sand/50 leading-relaxed mb-6">{proc.description}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-body text-xs tracking-wider uppercase text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                Agendar horário →
              </a>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 reveal ${grid.isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shine inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wider uppercase px-10 py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            Agendar horário
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
