import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(222,68%,33%) 0%, hsl(260,50%,35%) 100%)",
      }}
    >
      <div className="section-container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="heading-2 text-white"
        >
          Ready to Bring Your Vision to Life?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="body-lg text-white/70 mt-4 max-w-xl mx-auto"
        >
          Let's discuss your project and create something extraordinary together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-8 bg-white text-foreground hover:bg-white/90 font-semibold"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a Project
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 bg-white text-foreground hover:bg-white/90 font-semibold"
            onClick={() => window.open("https://wa.me/61413611147?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20call%20with%20WebNest%20Consultancy%20Services.", "_blank")}
          >
            Schedule a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
