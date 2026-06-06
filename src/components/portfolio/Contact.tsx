"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { Icon: Github, href: "https://github.com/Dev-Mjarir08", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/jarir-multani-3b7483369/", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com/devjarir", label: "Twitter" },
  { Icon: Instagram, href: "https://www.instagram.com/jarirmultani_08/", label: "Instagram" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // EmailJS hook-up placeholder. Once SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY are added
    // (e.g. via env vars), swap this stub with: emailjs.sendForm(...)
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Message sent! I'll get back to you within 24 hours.");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-[var(--glow)]">
            Contact
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Let's build something <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell me about your project — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="rounded-3xl glass p-6 sm:p-8 lg:col-span-3"
            aria-label="Contact form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" required placeholder="Your full name" />
              <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
            </div>
            <Field label="Subject" name="subject" type="text" required placeholder="Project inquiry" />
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me a bit about scope, timeline and goals."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--glow)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--glow)]/30"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-6 py-3 text-sm font-semibold text-background shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {sending ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-6 lg:col-span-2"
          >
            <div className="rounded-3xl glass p-6">
              <h3 className="font-display text-lg font-semibold">Direct contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-[var(--glow)]" />
                  <a href="mailto:hello@devjarir.dev" className="hover:text-foreground">multanijarir08@gmail.com</a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-[var(--glow)]" />
                  Navsari, Gujarat — India
                </li>
              </ul>
              <div className="mt-5 flex gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-xl glass transition-all hover:-translate-y-0.5 hover:text-[var(--glow)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl glass">
              <iframe
                title="Navsari, Gujarat map"
                src="https://www.google.com/maps?q=Navsari,Gujarat&output=embed"
                loading="lazy"
                className="h-64 w-full border-0 grayscale"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type, required, placeholder,
}: { label: string; name: string; type: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="mt-4 sm:mt-0">
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[var(--glow)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--glow)]/30"
      />
    </div>
  );
}

export function Footer() {
  const links = [
    { h: "#about", l: "About" },
    { h: "#skills", l: "Skills" },
    { h: "#projects", l: "Projects" },
    { h: "#services", l: "Services" },
    { h: "#contact", l: "Contact" },
  ];
  return (
    <footer className="relative mt-10 border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="inline-flex items-center gap-2" aria-label="DevJarir">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] font-mono text-sm font-bold text-background">DJ</span>
              <span className="font-display text-lg font-bold">Dev<span className="text-gradient">Jarir</span></span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Jarir Multani — Full Stack Developer in Navsari building modern, SEO-friendly web applications.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick links</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.h}>
                  <a href={l.h} className="text-foreground/80 transition-colors hover:text-[var(--glow)]">
                    {l.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Stay connected</h4>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl glass transition-all hover:-translate-y-0.5 hover:text-[var(--glow)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevJarir · Jarir Multani. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium transition-colors hover:text-[var(--glow)]"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
