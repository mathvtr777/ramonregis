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
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Sobre o Profissional</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              Dr. Ramon <span className="text-gold italic">Regis</span>
            </h2>

            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>Dr. Ramon Regis é biomédico, especialista em estética avançada e referência em procedimentos de nariz e rejuvenescimento facial, com mais de uma década de experiência transformando a autoestima de seus pacientes.</p>
              <p>Reconhecido pela excelência técnica e pelo olhar estético refinado, é criador dos métodos exclusivos <strong className="text-foreground">Full Face Plus</strong> e <strong className="text-foreground">Full Shape</strong>, protocolos desenvolvidos para promover resultados naturais, harmônicos e de alto padrão, tanto na face quanto no corpo.</p>
              <p>Atua como injetor especialista em preenchimento facial, corporal e íntimo, aliando conhecimento científico à prática clínica segura e eficaz. Também possui formação como patologista clínico, o que reforça ainda mais seu compromisso com saúde, segurança e precisão em cada procedimento.</p>
              <p>Atende em <strong className="text-foreground">Goiânia</strong> e também recebe <strong className="text-foreground">pacientes internacionais</strong>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
