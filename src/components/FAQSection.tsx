import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 5–10 business days, depending on complexity and how quickly you provide feedback. We'll give you a clear timeline upfront before we start.",
  },
  {
    question: "Do I need to sign a contract?",
    answer:
      "Yes, we use a simple service agreement that protects both parties. It outlines the scope, timeline, pricing, and revision rounds — no legal jargon, just plain English.",
  },
  {
    question: "How does payment work?",
    answer:
      "We typically require a 50% deposit to begin work, with the remaining 50% due upon completion. We accept bank transfer and major payment methods.",
  },
  {
    question: "What do I need to provide to get started?",
    answer:
      "For websites, we'll need your brand assets (logo, colours, images), any existing content, and access to your domain. For accounting, we'll need access to your financial records. We'll walk you through everything in an onboarding call.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "All packages include up to 3 rounds of revisions. We've found this is more than enough to get to a result you love, but if you need more, we can discuss additional rounds at a reasonable rate.",
  },
  {
    question: "Do you work with clients outside Australia?",
    answer:
      "Absolutely. We work with clients worldwide. All communication is handled remotely via email, WhatsApp, and video calls — so location is never a barrier.",
  },
  {
    question: "What happens after my website is launched?",
    answer:
      "We provide a handover document and brief walkthrough so you can manage your site confidently. We also offer ongoing support and maintenance packages if you'd prefer to leave it in our hands.",
  },
];

const FAQItem = ({ faq, index }: { faq: (typeof faqs)[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-card hover:bg-muted/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
        <ChevronDown
          size={18}
          className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 pt-1 text-muted-foreground leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 lg:py-32 bg-section-alt" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-foreground">Frequently Asked Questions</h2>
          <p className="body-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see yours here, just reach out.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary font-semibold hover:underline"
          >
            Get in touch →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
