import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, RefreshCw, Rocket } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Discover & Consult", description: "We learn about your goals, audience, and vision through an in-depth consultation." },
  { icon: PenTool, number: "02", title: "Design & Create", description: "Our team crafts bespoke designs tailored to your brand and objectives." },
  { icon: RefreshCw, number: "03", title: "Refine & Perfect", description: "We iterate based on your feedback until every detail is exactly right." },
  { icon: Rocket, number: "04", title: "Launch & Support", description: "We deliver the final product and provide ongoing support for your success." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-foreground">How We Work</h2>
          <p className="body-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A streamlined process designed to deliver exceptional results, on time and on budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center text-primary relative">
                <step.icon size={28} strokeWidth={1.5} />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="heading-3 text-foreground mb-2">{step.title}</h3>
              <p className="body-base text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
