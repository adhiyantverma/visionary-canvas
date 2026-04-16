import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

import artisanCoWebsite from "@/assets/artisan-co-website.png";
import accountingConsultancy from "@/assets/accounting-consultancy.png";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

type Project = {
  image: string;
  title: string;
  category: string;
  /** Inner padding + object-contain so the full asset shows in the square tile */
  contain?: boolean;
};

const projects: Project[] = [
  { image: artisanCoWebsite, title: "Artisan Co.", category: "Website", contain: true },
  { image: accountingConsultancy, title: "Sterling Advisory", category: "Accounting & Consultancy", contain: true },
  { image: portfolio3, title: "Le Bistro", category: "Menu Design" },
  { image: portfolio4, title: "Tonluin", category: "Branding" },
  { image: portfolio5, title: "TechFlow", category: "Website" },
  { image: portfolio6, title: "Emma & Liam", category: "Wedding" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-warm" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-foreground">Featured Projects</h2>
          <p className="body-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A curated selection of work that showcases our range and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <div
                className={
                  project.contain
                    ? "absolute inset-0 bg-card p-4 sm:p-5 md:p-6"
                    : "absolute inset-0"
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                    project.contain ? "object-contain object-center" : "object-cover"
                  }`}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-500 flex flex-col items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-semibold">{project.title}</h3>
                  <p className="text-white/70 text-sm mt-2">View Project →</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="rounded-full px-8"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Work With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
