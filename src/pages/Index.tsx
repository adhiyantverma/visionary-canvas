import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
