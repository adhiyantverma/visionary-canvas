import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = ["Services", "Portfolio", "About", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-blur border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
             WebNest
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5"
            >
              Get a Quote
            </Button>
          </div>

          <button
            className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-3xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="mt-4 rounded-full px-8"
            >
              Get a Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
