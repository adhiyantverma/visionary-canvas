import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-40 px-6 bg-background" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="hero-headline text-foreground"
        >
          Let's Create Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle mt-4 mb-10"
        >
          Ready to bring your vision to life? We'd love to hear from you.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="mailto:hello@studio.com"
          className="apple-link text-2xl"
        >
          hello@studio.com ›
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
