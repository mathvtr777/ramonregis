import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import PromotionsSection from "@/components/PromotionsSection";
import ProceduresSection from "@/components/ProceduresSection";
import AboutSection from "@/components/AboutSection";
import MethodsSection from "@/components/MethodsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ComplementarySection from "@/components/ComplementarySection";
import ExperienceSection from "@/components/ExperienceSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="promocoes">
        <PromotionsSection />
      </div>
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
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
