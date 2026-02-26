import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import heroMain from "@/assets/hero-main.jpg";
import heroWebsites from "@/assets/hero-websites.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroMenu from "@/assets/hero-menu.jpg";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />

      <HeroSection
        image={heroMain}
        headline="Transform Your Vision Into Digital Reality"
        subtitle="A creative studio for modern brands, beautiful weddings, and unforgettable dining experiences."
        links={[
          { label: "Learn more", href: "#about" },
          { label: "View portfolio", href: "#portfolio" },
        ]}
      />

      <HeroSection
        id="services"
        image={heroWebsites}
        headline="Websites That Convert"
        subtitle="Clean, fast, and designed to drive results."
        links={[{ label: "Explore" }]}
      />

      <HeroSection
        image={heroWedding}
        headline="Your Love Story, Beautifully Told"
        subtitle="Digital invitations as elegant as your celebration."
        links={[{ label: "See examples" }]}
      />

      <HeroSection
        image={heroMenu}
        headline="Menus That Make Mouths Water"
        subtitle="Restaurant branding that sets the mood before the first course."
        links={[{ label: "View work" }]}
        dark
      />

      <PortfolioGrid />

      <section id="about" className="py-24 md:py-40 px-6 bg-background">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="hero-headline text-foreground mb-6">
            Design With Purpose
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-apple-secondary">
            We're a creative studio that believes great design is invisible — it just works.
            From pixel-perfect websites to bespoke wedding invitations and restaurant branding,
            every project is crafted with intention, elegance, and a relentless focus on detail.
          </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
