import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface HeroSectionProps {
  image: string;
  headline: string;
  subtitle?: string;
  links?: { label: string; href?: string }[];
  dark?: boolean;
  id?: string;
}

const HeroSection = ({ image, headline, subtitle, links, dark, id }: HeroSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      className="section-full relative"
      ref={ref}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 ${
            dark
              ? "bg-foreground/60"
              : "bg-background/40"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`hero-headline ${dark ? "text-primary-foreground" : "text-foreground"}`}
        >
          {headline}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mt-4 hero-subtitle ${dark ? "text-primary-foreground/70" : ""}`}
          >
            {subtitle}
          </motion.p>
        )}

        {links && links.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-8"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href || "#"}
                className={`text-xl font-normal transition-opacity hover:opacity-70 ${
                  dark ? "text-primary-foreground" : "text-apple-link"
                }`}
              >
                {link.label} ›
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
