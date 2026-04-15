import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import ProceduresSection from "@/components/ProceduresSection";
import AboutSection from "@/components/AboutSection";
import MethodsSection from "@/components/MethodsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ComplementarySection from "@/components/ComplementarySection";
import ExperienceSection from "@/components/ExperienceSection";
import FAQSection from "@/components/FAQSection";
import LocationsSection from "@/components/LocationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AuthoritySection />
      <div id="procedimentos">
        <ProceduresSection />
      </div>
      <div id="sobre">
        <AboutSection />
      </div>
      <div id="metodos">
        <MethodsSection />
      </div>
      <DifferentialsSection />
      <ComplementarySection />
      <ExperienceSection />
      <div id="faq">
        <FAQSection />
      </div>
      <LocationsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
