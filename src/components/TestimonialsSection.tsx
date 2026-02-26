import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Cre8tive transformed our online presence. The website they built exceeded every expectation — clean, fast, and beautiful.",
    name: "Amira Hassan",
    role: "Founder",
    company: "Artisan Co.",
    rating: 5,
  },
  {
    quote: "Our wedding invitations were absolutely stunning. Every guest commented on how elegant and unique they were. Worth every penny!",
    name: "Sarah Mitchell",
    role: "Bride",
    company: "Sarah & James Wedding",
    rating: 5,
  },
  {
    quote: "The menu design elevated our entire brand. Customers now spend more time exploring our dishes, and our revenue has increased by 20%.",
    name: "Chef Marco",
    role: "Owner",
    company: "Le Bistro",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-foreground">What Our Clients Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-sm">
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                <Star key={j} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-8">
              "{testimonials[current].quote}"
            </blockquote>
            <p className="font-semibold text-foreground">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonials[current].role}, {testimonials[current].company}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
