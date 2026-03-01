import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

function getFormspreeEndpoint(): string | null {
  const id = import.meta.env.VITE_FORMSPREE_FORM_ID;
  if (id && String(id).trim()) {
    return `https://formspree.io/f/${String(id).trim()}`;
  }
  return null;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  budget: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  budget: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(form: FormState): { valid: boolean; errors: Partial<Record<keyof FormState, string>> } {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!validateEmail(form.email)) errors.email = "Please enter a valid email address";
  if (!form.message.trim()) errors.message = "Message is required";
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { valid, errors: validationErrors } = validateForm(form);
    if (!valid) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const endpoint = getFormspreeEndpoint();
    if (!endpoint) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured. Create a .env file in the project root with VITE_FORMSPREE_FORM_ID=your_form_id (get your form ID from formspree.io), then restart the dev server."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          service: form.service.trim() || undefined,
          message: form.message.trim(),
          budget: form.budget.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg =
          data.error ||
          (Array.isArray(data.errors) && data.errors.length > 0 ? data.errors.map((e: { message?: string }) => e.message).join(", ") : null) ||
          `Submission failed (${res.status}). Check your form ID in .env and that the Formspree form exists.`;
        throw new Error(msg);
      }

      setStatus("success");
      setForm(initialFormState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
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
              <p>📞 +61413611147</p>
              <p>📍 Remote — working with clients worldwide</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="bg-primary/10 rounded-2xl p-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="heading-3 text-foreground mb-2">Thank you!</p>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {!getFormspreeEndpoint() && (
                  <Alert className="border-amber-500/50 bg-amber-500/10">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                    <AlertTitle>Setup required</AlertTitle>
                    <AlertDescription>
                      To receive submissions, create a <strong>.env</strong> file in the project root with{" "}
                      <code className="text-xs bg-muted px-1 rounded">VITE_FORMSPREE_FORM_ID=your_form_id</code>. Get
                      your form ID from{" "}
                      <a
                        href="https://formspree.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium"
                      >
                        formspree.io
                      </a>{" "}
                      (set notification email there), then restart the dev server.
                    </AlertDescription>
                  </Alert>
                )}
                {status === "error" && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{errorMessage}</AlertDescription>
                  </Alert>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="Your name *"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className={`rounded-lg ${errors.name ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email address *"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={`rounded-lg ${errors.email ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Service you're interested in"
                    value={form.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Budget (optional)"
                    value={form.budget}
                    onChange={(e) => updateField("budget", e.target.value)}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Tell us about your project... *"
                    rows={5}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className={`rounded-lg resize-none ${errors.message ? "border-destructive" : ""}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="rounded-full px-8 w-full sm:w-auto"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
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
