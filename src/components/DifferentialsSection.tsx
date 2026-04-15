import { Shield, Award, Target, Star, Users, Globe, Sparkles } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const differentials = [
  { icon: Award, title: "+10 anos de experiência", description: "Mais de uma década dedicada à estética avançada com excelência" },
  { icon: Target, title: "+5 mil rinomodelações", description: "Referência absoluta em procedimentos de nariz" },
  { icon: Shield, title: "Zero intercorrências", description: "Histórico impecável de segurança em rinomodelação" },
  { icon: Sparkles, title: "Protocolos exclusivos", description: "Métodos autorais Full Face Plus e Full Shape" },
  { icon: Users, title: "Atendimento personalizado", description: "Cada paciente recebe um plano sob medida" },
  { icon: Star, title: "Resultados naturais", description: "Foco em harmonia, elegância e sofisticação" },
  { icon: Globe, title: "Atuação internacional", description: "Atendimento em Goiânia e pacientes do exterior" },
];

const DifferentialsSection = () => {
  const header = useScrollReveal();
  const grid = useStaggerReveal();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div ref={header.ref} className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 reveal ${header.isVisible ? "visible" : ""}`}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Diferenciais</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Por que escolher <span className="text-gold italic">Dr. Ramon Regis</span>
          </h2>
        </div>

        <div ref={grid.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto stagger-children">
          {differentials.map((item) => (
            <div key={item.title} className={`text-center p-8 group hover:-translate-y-1 transition-all duration-500 reveal ${grid.isVisible ? "visible" : ""}`}>
              <div className="inline-flex items-center justify-center w-14 h-14 border border-gold/30 rounded-full mb-5 group-hover:border-gold/60 group-hover:scale-110 transition-all duration-500">
                <item.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
