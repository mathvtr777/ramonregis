
const stats = [
  { value: "+10", label: "anos de experiência" },
  { value: "+5.000", label: "rinomodelações realizadas" },
  { value: "Zero", label: "intercorrências em rinomodelação" },
  { value: "Global", label: "atendimento internacional" },
];

const WHATSAPP_URL = "https://wa.me/5562996343740?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20Dr.%20Ramon%20Regis.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-graphite-dark">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-graphite to-[#0A0A0A] opacity-90" />
        
        {/* Premium glowing accents */}
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-gold/15 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-gold/10 rounded-full blur-[150px] mix-blend-screen opacity-40 animate-[pulse_6s_ease-in-out_infinite_reverse]" />
        
        {/* Sophisticated structural grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        
        {/* Gradient fade on the right to match content styling */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-graphite/40 to-graphite/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 mb-8 border border-gold/30 rounded-full px-5 py-2">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse-glow" />
            <span className="text-sm font-body tracking-widest uppercase text-sand/80">
              Estética Avançada Premium
            </span>
          </div>

          <h1 className="animate-fade-up animation-delay-200 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] sm:leading-[1.1] tracking-tight text-sand mb-6">
            Eleve sua estética a um novo nível com{" "}
            <span className="text-gold italic">naturalidade</span>, precisão e excelência clínica.
          </h1>

          <p className="animate-fade-up animation-delay-400 font-body text-lg md:text-xl text-sand/70 leading-relaxed mb-10 max-w-2xl">
            Mais de 10 anos de experiência e reconhecimento em estética avançada, com destaque em rinomodelação, harmonização facial e rejuvenescimento de alto padrão.
          </p>

          <div className="animate-fade-up animation-delay-600 flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shine inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-graphite font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              Agendar avaliação personalizada
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-sand/30 hover:border-gold text-sand font-body font-medium text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="animate-fade-up animation-delay-800 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-sand/10 pt-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="animate-fade-up" style={{ animationDelay: `${1 + i * 0.15}s` }}>
                <p className="font-heading text-3xl md:text-4xl text-gold mb-1">{stat.value}</p>
                <p className="font-body text-xs md:text-sm text-sand/60 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
