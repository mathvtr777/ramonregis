import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { question: "A rinomodelação substitui cirurgia?", answer: "A rinomodelação é um procedimento minimamente invasivo indicado para correções estéticas sutis no contorno do nariz. Para casos que demandam alterações estruturais significativas, a rinoplastia cirúrgica pode ser mais indicada. Na avaliação, Dr. Ramon Regis orienta sobre a melhor abordagem para cada caso." },
  { question: "O resultado fica natural?", answer: "Sim. A naturalidade é um pilar fundamental do trabalho de Dr. Ramon Regis. Todos os procedimentos são realizados com técnica refinada e olhar estético apurado, buscando sempre resultados harmônicos que respeitam as proporções e a individualidade de cada paciente." },
  { question: "Quanto tempo dura cada procedimento?", answer: "A duração varia conforme o tipo de procedimento. A maioria das aplicações dura entre 30 minutos e 1 hora. Detalhes específicos são discutidos durante a avaliação personalizada." },
  { question: "Como saber qual procedimento é ideal para mim?", answer: "Na avaliação personalizada, Dr. Ramon Regis analisa suas proporções faciais, necessidades, expectativas e histórico clínico para indicar o plano de tratamento mais adequado para você." },
  { question: "O atendimento é personalizado?", answer: "Absolutamente. Cada paciente recebe uma avaliação individualizada e um protocolo desenvolvido sob medida. Não existem tratamentos padronizados — cada plano é único." },
  { question: "Vocês atendem pacientes de fora de Goiânia?", answer: "Sim. Dr. Ramon Regis recebe pacientes de diversas regiões do Brasil e também pacientes internacionais. A equipe oferece suporte na organização logística do atendimento." },
];

const FAQSection = () => {
  const header = useScrollReveal();
  const content = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div ref={header.ref} className={`text-center mb-16 reveal ${header.isVisible ? "visible" : ""}`}>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">Dúvidas Frequentes</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Perguntas <span className="text-gold italic">frequentes</span>
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
