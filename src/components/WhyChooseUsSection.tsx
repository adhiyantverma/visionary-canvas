import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Zap, DollarSign } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients", description: "Trusted by businesses, restaurants, and entrepreneurs across Australia and beyond." },
  { icon: Zap, value: "7 Days", label: "Avg. Delivery", description: "Most projects delivered within 7 days — without ever compromising on quality." },
  { icon: DollarSign, value: "100%", label: "Satisfaction", description: "We work until you're completely happy. No extra charges, no surprises." },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-section-alt" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-foreground">Why Choose Us</h2>
          <p className="body-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We combine creativity with reliability so you get designs you love, delivered on time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <stat.icon size={28} strokeWidth={1.5} />
              </div>
              <p className="text-4xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-lg font-semibold text-foreground mb-2">{stat.label}</p>
              <p className="body-base text-muted-foreground max-w-xs mx-auto">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
