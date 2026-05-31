import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

const WHATSAPP_URL = "https://wa.me/5584998968160?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20valoraci%C3%B3n%20con%20el%20Dr.%20Ramon%20Regis.";

const navLinks = [
  { key: "procedimentos", href: "#procedimentos" },
  { key: "sobre", href: "#sobre" },
  { key: "metodos", href: "#metodos" },
  { key: "faq", href: "#faq" },
];

const Header = () => {
  const { t, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-graphite/95 backdrop-blur-md shadow-lg shadow-graphite/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-24 md:h-28">
        <a href="#" className="hover:opacity-80 transition-opacity duration-300">
          <img src={logoImg} alt="Dr. Ramon Regis" className="h-16 sm:h-20 md:h-24 w-auto max-w-[70vw] sm:max-w-none object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-body text-sm text-sand/70 hover:text-gold tracking-wider uppercase transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {t(`header.${link.key}`)}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shine font-body text-sm font-semibold tracking-wider uppercase bg-gold text-graphite px-6 py-2.5 rounded-sm hover:bg-gold/90 transition-all duration-300 hover:shadow-md hover:shadow-gold/20"
          >
            {t('header.agendar')}
          </a>
          <span className="text-white text-xs">Lang: {language}</span>
          <LanguageSwitcher />
        </nav>

        <button
          className="md:hidden text-sand hover:text-gold transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"} bg-graphite/98 backdrop-blur-md border-t border-sand/10`}>
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          <div className="flex justify-end mb-2">
            <LanguageSwitcher />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm text-sand/70 hover:text-gold tracking-wider uppercase py-2 transition-colors duration-300"
            >
              {t(`header.${link.key}`)}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-semibold tracking-wider uppercase bg-gold text-graphite px-6 py-3 rounded-sm text-center mt-2"
          >
            {t('header.agendar')}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
