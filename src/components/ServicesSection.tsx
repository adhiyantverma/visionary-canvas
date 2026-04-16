import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Calculator, UtensilsCrossed, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Clean, fast, conversion-focused websites built for modern businesses that need to stand out online.",
    link: "Learn more →",
  },
  {
    icon: Calculator,
    title: "Accounting & Consultancy",
    description:
      "Bookkeeping, financial reporting, and business advisory — clear numbers and practical guidance so you can decide with confidence.",
    link: "Learn more →",
  },
  {
    icon: UtensilsCrossed,
    title: "Menu Design",
    description: "Restaurant menus and branding that set the mood before the first course arrives.",
    link: "Learn more →",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Logos, color palettes, and brand systems that capture who you are and make you unforgettable.",
    link: "Learn more →",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-foreground">What We Do</h2>
          <p className="body-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            From digital experiences to financial clarity, we help brands and businesses shine at every touchpoint.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="card-hover bg-card border border-border rounded-xl p-8 text-center group cursor-pointer"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="heading-3 text-foreground mb-3">{service.title}</h3>
              <p className="body-base text-muted-foreground mb-4">{service.description}</p>
              <span className="text-sm font-semibold text-primary">{service.link}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
