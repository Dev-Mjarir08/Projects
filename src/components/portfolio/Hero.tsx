"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, MapPin, ChevronDown } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiTypescript, SiJavascript,
  SiBootstrap,
} from "react-icons/si";

const techIcons = [
  { Icon: SiReact, label: "React", c: "#61DAFB", style: "top-[22%] left-[12%]" },
  { Icon: SiBootstrap, label: "BootStrap", c: "#563d7c", style: "top-[22%] right-[12%]" },
  { Icon: SiNodedotjs, label: "Node", c: "#3C873A", style: "bottom-[15%] left-[12%]" },
  { Icon: SiMongodb, label: "MongoDB", c: "#47A248", style: "bottom-[18%] right-[12%]" },
  { Icon: SiExpress, label: "Express", c: "#fff", style: "top-[50%] left-[3%]" },
  { Icon: SiTailwindcss, label: "Tailwind", c: "#38BDF8", style: "top-[50%] right-[4%]" },
  { Icon: SiTypescript, label: "TypeScript", c: "#3178C6", style: "top-[12%] left-[60%]" },
  { Icon: SiJavascript, label: "JavaScript", c: "#F7DF1E", style: "top-[12%] right-[60%]" },
];

const ROLES = [
  "Full Stack Developer",
  "MERN Specialist",
  "React Developer",
  "Freelance Vibe Coder",
];

function useTyping(words: string[], speed = 70, hold = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text === w) {
      t = setTimeout(() => setDel(true), hold);
    } else if (del && text === "") {
      setDel(false);
      setI((i + 1) % words.length);
    } else {
      t = setTimeout(
        () => setText(del ? w.slice(0, text.length - 1) : w.slice(0, text.length + 1)),
        del ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, hold]);
  return text;
}

function SplitChars({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.025, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
          aria-hidden
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32"
      aria-label="Hero"
    >
      {/* Floating tech icons */}
      <div aria-hidden className="absolute inset-0">
        {techIcons.map(({ Icon, c, style, label }, i) => (
          <motion.div
            key={label}
            className={`absolute hidden md:block ${style}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.85,
              scale: 1,
              y: [0, -14, 0],
            }}
            transition={{
              opacity: { delay: 0.6 + i * 0.1 },
              scale: { delay: 0.6 + i * 0.1, type: "spring" },
              y: { duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div
              className="grid h-14 w-14 place-items-center rounded-2xl glass shadow-glow"
              title={label}
            >
              <Icon size={26} color={c} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--glow)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--glow)]" />
            </span>
            Available for freelance projects
            <Sparkles className="h-3.5 w-3.5 text-[var(--glow)]" />
          </motion.div>

          <h1 className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <SplitChars text="Jarir Multani" className="block text-gradient" />
            <span className="mt-3 block text-2xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
              Full Stack Developer in Navsari
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Professional Full Stack Developer specializing in <strong className="text-foreground">React.js, Node.js, Express.js, MongoDB</strong> and modern web technologies. Helping startups and businesses build scalable, SEO-optimized, high-performance web applications.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 font-mono text-sm text-[var(--glow)]">
            <span className="text-muted-foreground">{"<"}</span>
            <span>{typed}</span>
            <span className="inline-block h-5 w-[2px] animate-blink bg-[var(--glow)]" />
            <span className="text-muted-foreground">{"/>"}</span>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-7 py-3.5 text-sm font-semibold text-background shadow-glow transition-transform hover:scale-105"
            >
              Hire Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              View Projects
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Navsari, Gujarat — India · Working worldwide
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
