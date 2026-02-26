import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-foreground mb-4">Let's Talk</h2>
            <p className="body-lg text-muted-foreground mb-8">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p>📧 hello@cre8tive.studio</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 Remote — working with clients worldwide</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="bg-primary/10 rounded-2xl p-12 text-center">
                <p className="heading-3 text-foreground mb-2">Thank you!</p>
                <p className="text-muted-foreground">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Your name" required className="rounded-lg" />
                  <Input type="email" placeholder="Email address" required className="rounded-lg" />
                </div>
                <Input placeholder="Service you're interested in" className="rounded-lg" />
                <Textarea placeholder="Tell us about your project..." rows={5} required className="rounded-lg resize-none" />
                <Button type="submit" className="rounded-full px-8 w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
