import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5584998968160?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n%20con%20el%20Dr.%20Ramon%20Regis.";

const procedures = [
  { title: "Botox", description: "Aplicación de toxina botulínica para suavizar arrugas y líneas de expresión, previniendo el envejecimiento y proporcionando un aspecto más ligero y descansado." },
  { title: "Armonización Facial", description: "Procedimiento completo para restaurar volumen, mejorar contornos y promover el rejuvenecimiento global del rostro, con resultados naturales y armoniosos." },
  { title: "Rinomodelación", description: "Procedimiento estético mínimamente invasivo que armoniza el contorno de la nariz, corrigiendo pequeñas imperfecciones y mejorando el perfil facial sin cirugía." },
  { title: "Bioestimuladores", description: "Tratamiento que estimula la producción de colágeno, mejorando la firmeza, textura y calidad de la piel de forma progresiva y duradera." },
  { title: "Relleno Labial", description: "Relleno para definición, volumen e hidratación de los labios, respetando la naturalidad y proporción facial." },
  { title: "Relleno de Ojeras", description: "Tratamiento para suavizar surcos y reducir el aspecto de cansancio, aportando más luminosidad a la mirada." },
  { title: "Hilos Tensores", description: "Procedimiento mínimamente invasivo con efecto lifting inmediato, reposicionando tejidos y estimulando el colágeno." },
  { title: "Efecto Nefertiti", description: "Técnica avanzada para la redefinición del contorno mandibular y del cuello, promoviendo un lifting natural y mejora de la flacidez." },
];

const ProceduresSection = () => {
  const header = useScrollReveal();
  const grid = useStaggerReveal();

  return (
    <section className="py-24 lg:py-32 bg-graphite">
      <div className="container mx-auto px-6">
        <div ref={header.ref} className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 reveal ${header.isVisible ? "visible" : ""}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Procedimientos Destacados</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-sand leading-tight">
            Tratamientos de <span className="text-gold italic">excelencia</span>
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
                Programar cita →
              </a>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 reveal ${grid.isVisible ? "visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shine inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wider uppercase px-6 sm:px-10 py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Programar cita
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
