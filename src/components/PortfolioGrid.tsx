import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  { image: portfolio1, title: "Artisan Co.", category: "Website Design" },
  { image: portfolio2, title: "Sarah & James", category: "Wedding Invitation" },
  { image: portfolio3, title: "Le Bistro", category: "Menu Design" },
  { image: portfolio4, title: "Tonluin", category: "Brand Identity" },
  { image: portfolio5, title: "TechFlow", category: "E-Commerce" },
  { image: portfolio6, title: "Emma & Liam", category: "Save the Date" },
];

const PortfolioGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="portfolio" className="py-24 md:py-40 px-6 bg-apple-gray" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="hero-headline text-center mb-4 text-foreground"
        >
          Featured Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hero-subtitle text-center mb-16"
        >
          A selection of our recent projects.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-500 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-primary-foreground text-sm tracking-wide uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-primary-foreground text-2xl font-light mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
