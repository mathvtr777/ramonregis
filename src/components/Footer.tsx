import logoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-graphite-dark border-t border-sand/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logoImg} alt="Dr. Ramon Regis" className="h-16 md:h-20 w-auto object-contain" />
          <p className="font-body text-xs text-sand/40 tracking-wider">
            © {new Date().getFullYear()} Dr. Ramon Regis — Estética Avançada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
