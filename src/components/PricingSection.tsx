import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Basic Website",
    price: "$500",
    prefix: "Starting at",
    features: ["Up to 5 pages", "Mobile responsive", "Contact form", "SEO basics"],
  },
  {
    name: "Wedding Card",
    price: "$60",
    prefix: "From",
    features: ["Custom design", "Digital & print-ready", "RSVP integration", "Unlimited revisions"],
    popular: true,
  },
  {
    name: "Branding Kit",
    price: "$150",
    prefix: "From",
    features: ["Logo design", "Color palette", "Typography guide", "Brand guidelines"],
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-section-alt" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-foreground">Transparent Pricing</h2>
          <p className="body-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            No hidden fees. Pick a package or request a custom quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`card-hover rounded-2xl p-8 text-center flex flex-col ${
                pkg.popular
                  ? "bg-primary text-primary-foreground ring-2 ring-primary shadow-lg"
                  : "bg-card border border-border"
              }`}
            >
              {pkg.popular && (
                <span className="inline-block bg-white/20 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-center">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold mb-1">{pkg.name}</h3>
              <p className={`text-sm mb-2 ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {pkg.prefix}
              </p>
              <p className="text-4xl font-bold mb-6">{pkg.price}</p>
              <ul className="space-y-3 mb-8 flex-1 text-left">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={pkg.popular ? "text-primary-foreground/80" : "text-primary"} />
                    <span className={pkg.popular ? "text-primary-foreground/90" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.popular ? "secondary" : "outline"}
                className="rounded-full w-full"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button variant="link" className="text-primary font-semibold">
            View All Services →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
