import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { question: "¿La rinomodelación reemplaza a la cirugía?", answer: "La rinomodelación es un procedimiento mínimamente invasivo indicado para correcciones estéticas sutiles en el contorno de la nariz. Para casos que requieren cambios estructurales significativos, la rinoplastia quirúrgica puede ser más adecuada. En la valoración, el Dr. Ramon Regis orienta sobre el mejor enfoque para cada caso." },
  { question: "¿El resultado se ve natural?", answer: "Sí. La naturalidad es un pilar fundamental del trabajo del Dr. Ramon Regis. Todos los procedimientos se realizan con una técnica refinada y una mirada estética precisa, buscando siempre resultados armónicos que respeten las proporciones y la individualidad de cada paciente." },
  { question: "¿Cuánto tiempo dura cada procedimiento?", answer: "La duración varía según el tipo de procedimiento. La mayoría de las aplicaciones duran entre 30 minutos y 1 hora. Los detalles específicos se discuten durante la valoración personalizada." },
  { question: "¿Cómo saber qué procedimiento es el ideal para mí?", answer: "En la valoración personalizada, el Dr. Ramon Regis analiza sus proporciones faciales, necesidades, expectativas e historial clínico para indicarle el plan de tratamiento más adecuado para usted." },
  { question: "¿La atención es personalizada?", answer: "Absolutamente. Cada paciente recibe una valoración individualizada y un protocolo desarrollado a la medida. No existen tratamientos estandarizados; cada plan es único." },
  { question: "¿Atienden a pacientes de fuera de Goiânia?", answer: "Sí. El Dr. Ramon Regis recibe a pacientes de diversas regiones de Brasil y también a pacientes internacionales. El equipo ofrece soporte en la organización logística de la atención." },
];

const FAQSection = () => {
  const header = useScrollReveal();
  const content = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div ref={header.ref} className={`text-center mb-16 reveal ${header.isVisible ? "visible" : ""}`}>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Preguntas Frecuentes</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Preguntas <span className="text-gold italic">frecuentes</span>
            </h2>
          </div>

          <div ref={content.ref} className={`reveal ${content.isVisible ? "visible" : ""}`}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-sm px-6 data-[state=open]:border-gold/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="font-heading text-lg text-foreground hover:text-gold py-5 hover:no-underline transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
