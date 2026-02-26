import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agency.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsla(222,68%,20%,0.85) 0%, hsla(260,50%,25%,0.75) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 section-container text-center py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="heading-1 text-white max-w-4xl mx-auto"
        >
          Strategic Design Solutions for Modern Businesses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="body-lg text-white/75 mt-6 max-w-2xl mx-auto"
        >
          We craft beautiful websites, wedding invitations, and restaurant branding that elevate your brand and drive real results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-8 bg-white text-foreground hover:bg-white/90 font-semibold"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Our Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-white/40 text-white hover:bg-white/10 font-semibold"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
