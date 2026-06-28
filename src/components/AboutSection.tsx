import doctorImg from "@/assets/regis.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const section = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={section.ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`relative reveal-left ${section.isVisible ? "visible" : ""}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={doctorImg}
                alt="Dr. Ramon Regis"
                className={`w-full h-full object-cover transition-transform duration-[1.2s] ${section.isVisible ? "scale-100" : "scale-110"}`}
                loading="lazy"
              />
            </div>
            <div className={`absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30 rounded-sm -z-10 transition-all duration-1000 delay-500 ${section.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`} />
          </div>

          <div className={`reveal-right ${section.isVisible ? "visible" : ""}`}>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Sobre el Profesional</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              Dr. Ramon <span className="text-gold italic">Regis</span>
            </h2>

            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>El Dr. Ramon Regis es especialista en estética avanzada, con énfasis especial en <strong className="text-foreground">rejuvenecimiento facial</strong>, y referente en procedimientos de nariz, con más de una década de experiencia transformando la autoestima de sus pacientes.</p>
              <p>Reconocido por su excelencia técnica y su refinada mirada estética, es creador de los métodos exclusivos <strong className="text-foreground">Full Face Plus</strong> y <strong className="text-foreground">Full Shape</strong>, protocolos desarrollados para promover resultados naturales, armónicos y de alto nivel, tanto en el rostro como en el cuerpo.</p>
              <p>Se desempeña como especialista en rellenos faciales, corporales e íntimos, combinando el conocimiento científico con una práctica clínica segura y eficaz. También cuenta con formación como patólogo clínico, lo que refuerza aún más su compromiso con la salud, seguridad y precisión en cada procedimiento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
