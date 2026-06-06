"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Code2, Server, Database, Wrench, Rocket, Search, Cpu, Globe, Quote,
} from "lucide-react";
import type { Variants } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss,
  SiJavascript, SiHtml5, SiCss, SiBootstrap, SiMysql, SiGit, SiGithub,
  SiVercel, SiNetlify, SiRender,
  SiGsap,
} from "react-icons/si";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function SectionHeader({
  eyebrow, title, sub,
}: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-[var(--glow)]">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString() + suffix);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// ---------- ABOUT ----------
export function About() {
  const stats = [
    { v: 20, s: "+", l: "Projects Built" },
    { v: 8, s: "+", l: "Tech Stack Skills" },
    { v: 1000, s: "+", l: "Hours of Practice" },
    { v: 100, s: "%", l: "Commitment" },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title={<>Crafting <span className="text-gradient">scalable</span> web experiences</>}
        />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Animated Glow */}
            <motion.div
              className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#00D4FF]/20 via-[#2563EB]/20 to-[#00FF94]/20 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="relative overflow-hidden rounded-[32px] glass p-8"
            >
              {/* Status */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Full Stack Developer
                  </p>
                  <h3 className="mt-2 text-3xl font-bold">
                    Jarir Multani
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#00FF94]/20 bg-[#00FF94]/10 px-3 py-1">
                  <motion.span
                    className="h-2 w-2 rounded-full bg-[#00FF94]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <span className="text-xs text-[#00FF94]">
                    Available
                  </span>
                </div>
              </div>

              {/* Main Circle */}
              <div className="relative my-10 flex justify-center">
                <motion.div
                  className="flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#00D4FF]/10 via-[#2563EB]/10 to-[#9333EA]/10"
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="bg-gradient-to-r from-[#00D4FF] via-[#2563EB] to-[#9333EA] bg-clip-text text-5xl font-bold text-transparent">
                    JM
                  </span>
                </motion.div>

                {/* React */}
                <motion.div
                  className="absolute -left-2 top-6 rounded-full glass px-3 py-2 text-xs"
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  React.js
                </motion.div>

                {/* Tailwind */}
                <motion.div
                  className="absolute right-0 top-16 rounded-full glass px-3 py-2 text-xs"
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Tailwind
                </motion.div>

                {/* Node */}
                <motion.div
                  className="absolute bottom-4 left-4 rounded-full glass px-3 py-2 text-xs"
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Node.js
                </motion.div>

                {/* MongoDB */}
                <motion.div
                  className="absolute bottom-0 right-6 rounded-full glass px-3 py-2 text-xs"
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  MongoDB
                </motion.div>
              </div>

              {/* Bottom Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="rounded-2xl bg-white/5 p-4"
                >
                  <p className="text-xs text-muted-foreground">
                    Location
                  </p>
                  <h4 className="mt-1 font-medium">
                    Navsari, Gujarat
                  </h4>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="rounded-2xl bg-white/5 p-4"
                >
                  <p className="text-xs text-muted-foreground">
                    Focus
                  </p>
                  <h4 className="mt-1 font-medium">
                    End-to-End Development
                  </h4>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-base text-muted-foreground sm:text-lg"
            >
              I'm <strong className="text-foreground">Jarir Multani</strong> — a passionate Full Stack Developer based in Navsari, Gujarat. I design and build <strong className="text-foreground">fast, accessible, SEO-friendly</strong> web applications with the modern MERN stack. From landing pages to production-grade SaaS dashboards, I deliver clean architecture, smooth motion, and measurable business impact.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {["React.js", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind", "GSAP", "Framer Motion", "REST APIs"].map((t) => (
                <span key={t} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <motion.div
                  key={s.l}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-2xl glass p-5"
                >
                  <div className="text-3xl font-bold text-gradient">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SKILLS ----------
const SKILL_CATEGORIES = [
  {
    icon: Code2,
    title: "Frontend Development",
    items: [
      { Icon: SiHtml5, name: "HTML5", c: "#E34F26" },
      { Icon: SiCss, name: "CSS3", c: "#1572B6" },
      { Icon: SiJavascript, name: "JavaScript", c: "#F7DF1E" },
      { Icon: SiReact, name: "React.js", c: "#61DAFB" },
      { Icon: SiGsap, name: "Gsap", c: "#fff" },
      { Icon: SiTailwindcss, name: "Tailwind", c: "#38BDF8" },
      { Icon: SiBootstrap, name: "Bootstrap", c: "#7952B3" },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    items: [
      { Icon: SiNodedotjs, name: "Node.js", c: "#3C873A" },
      { Icon: SiExpress, name: "Express.js", c: "#fff" },
      { Icon: Globe, name: "REST APIs", c: "#22d3ee" },
    ],
  },
  {
    icon: Database,
    title: "Database",
    items: [
      { Icon: SiMongodb, name: "MongoDB", c: "#47A248" },
      { Icon: SiMysql, name: "MySQL", c: "#4479A1" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Deployment",
    items: [
      { Icon: SiGit, name: "Git", c: "#F05032" },
      { Icon: SiGithub, name: "GitHub", c: "#fff" },
      { Icon: SiVercel, name: "Vercel", c: "#fff" },
      { Icon: SiNetlify, name: "Netlify", c: "#00C7B7" },
      { Icon: SiRender, name: "Render", c: "#46E3B7" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title={<>The <span className="text-gradient">stack</span> I build with</>}
          sub="A modern toolchain for shipping fast, accessible, SEO-friendly web applications."
        />

        {/* Orbit visual */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mx-auto mb-16 hidden h-80 w-80 md:block"
          aria-hidden
        >
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] text-background shadow-glow">
              <Cpu className="h-8 w-8" />
            </div>
          </div>
          {[0, 1, 2].map((ring) => {
            const r = 110 + ring * 35;
            const icons = [SiReact, SiNodedotjs, SiMongodb, SiNextdotjs, SiExpress, SiTailwindcss];
            return (
              <motion.div
                key={ring}
                className="absolute inset-0"
                style={{ animation: `orbit ${24 + ring * 6}s linear infinite ${ring % 2 ? "reverse" : ""}` }}
              >
                <div className="absolute inset-0 rounded-full border border-white/10" />
                {icons.slice(0, 4 + ring).map((Ic, i, arr) => {
                  const angle = (i / arr.length) * 360;
                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(-50%,-50%) rotate(${angle}deg) translateX(${r}px) rotate(-${angle}deg)`,
                      }}
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-xl glass">
                        <Ic size={18} />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--glow)]/10 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 text-[var(--glow)]">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {cat.items.map(({ Icon, name, c }) => (
                  <div
                    key={name}
                    data-cursor="hover"
                    className="group/tag inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium transition-all hover:border-[var(--glow)]/50 hover:bg-white/10"
                  >
                    <Icon size={14} color={c} />
                    {name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROJECTS ----------
const PROJECTS = [
  {
    name: "Admin Dashboard",
    desc: "Admin dashboard with real-time analytics, role-based access control, user management, and interactive data visualization.",
    tech: ["Express", "Node.js", "MongoDB", "Bootstrap", "REST API"],
    href: "https://pr-admin-panel.onrender.com/", repo: "https://github.com/Dev-Mjarir08/PR-Admin-Panel",
    grad: "from-cyan-500/30 to-blue-500/30",
  },
  {
    name: "Employee Management System",
    desc: "Employee management system with role-based access, attendance tracking, leave management, and real-time workforce analytics.",
    tech: ["Node.js", "Express", "MongoDB"],
    href: "pr-ems.onrender.com", repo: "https://github.com/Dev-Mjarir08/PR-EMS",
    grad: "from-fuchsia-500/30 to-violet-500/30",
  },
  {
    name: "Tailweind-Frame Work",
    desc: "Modern responsive website built with Tailwind CSS, featuring clean design, smooth animations, and optimized performance.",
    tech: ["Next.js", "Node.js", "OpenAI", "Tailwind"],
    href: "final-project-tail-wind.vercel.app", repo: "https://github.com/Dev-Mjarir08/Final-Project-TailWind",
    grad: "from-emerald-500/30 to-teal-500/30",
  }
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 1;
    const y = (e.clientY - r.top) / r.height - 1;
    el.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateZ(0)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="transition-transform duration-200 will-change-transform">
      {children}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title={<>Selected <span className="text-gradient">work</span></>}
          sub="A snapshot of products I've designed and engineered end-to-end."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <TiltCard>
                <article data-cursor-text="OPEN" className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-3xl glass p-6 transition-shadow hover:shadow-glow">

                  <div className={`relative mb-5 aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.grad}`}>
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="rounded-xl glass px-3 py-1.5 font-mono text-xs">
                        {p.name.split(" ")[0]}
                      </div>
                    </div>
                  </div>

                  <h3 itemProp="name" className="font-display text-lg font-semibold">
                    {p.name}
                  </h3>

                  <p
                    itemProp="description"
                    className="mt-2 text-sm text-muted-foreground line-clamp-3"
                  >
                    {p.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons always stay at bottom */}
                  <div className="mt-auto flex gap-2 pt-5">
                    <a
                      href={p.href}
                      itemProp="url"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-4 py-2 text-xs font-semibold text-background"
                    >
                      Live Demo
                    </a>

                    <a
                      href={p.repo}
                      className="inline-flex flex-1 items-center justify-center rounded-full glass px-4 py-2 text-xs font-semibold"
                    >
                      GitHub
                    </a>
                  </div>

                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
const SERVICES = [
  { Icon: Code2, t: "Full Stack Web Development", d: "End-to-end MERN apps from idea to deployment with clean, maintainable architecture." },
  { Icon: Globe, t: "Frontend Development", d: "Pixel-perfect, responsive React/Next.js interfaces with smooth motion and best-in-class UX." },
  { Icon: Server, t: "Backend Development", d: "Scalable Node.js + Express APIs, auth, role-based access and database design." },
  { Icon: Cpu, t: "API Development", d: "RESTful API design, third-party integrations, webhooks, and documentation." },
  { Icon: Rocket, t: "Website Optimization", d: "Core Web Vitals, code-splitting, caching and bundle size tuning for 95+ Lighthouse." },
  { Icon: Search, t: "SEO-Friendly Websites", d: "Semantic HTML, structured data, sitemap, and on-page SEO baked into the build." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title={<>What I can <span className="text-gradient">build</span> for you</>}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.t}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--glow)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 text-[var(--glow)]">
                <s.Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- EXPERIENCE ----------
const TIMELINE = [
  {
    when: "2022-2023",
    role: "Higher Secondary Graduate",
    org: "Arts,Commerce and Science Junior College , Navapur",
    points: [
      "Completed Higher Secondary Education with a focus on academic growth and skill development"
    ]
  },
  {
    when: "2023 — 2024",
    role: "IELTS Candidate",
    org: "English Language Proficiency Preparation",
    points: [
      "Prepared for IELTS examination with a focus on academic English and communication skills"
    ]
  },
  {
    when: "2024 — 2026",
    role: "FullStack Developer",
    org: "Red and White Skill Education ,Navsari",
    points: ["Built and deployed full-stack web applications using React, Node.js, Express, and MongoDB"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title={<>Career <span className="text-gradient">timeline</span></>}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--glow)]/60 via-[var(--glow-2)]/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <ul className="space-y-10">
            {TIMELINE.map((t, i) => (
              <motion.li
                key={t.role}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className={`relative grid gap-4 md:grid-cols-2 md:gap-8 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="pl-12 md:pl-0 md:text-right md:pr-10">
                  {i % 2 ? <div className="hidden md:block" /> : null}
                  <div className="rounded-2xl glass p-5">
                    <div className="text-xs font-mono text-[var(--glow)]">{t.when}</div>
                    <div className="mt-1 font-display text-lg font-semibold">{t.role}</div>
                    <div className="text-sm text-muted-foreground">{t.org}</div>
                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground md:text-right">
                      {t.points.map((p) => <li key={p}>• {p}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-[7px] top-6 grid h-4 w-4 place-items-center rounded-full bg-background md:left-1/2 md:-translate-x-1/2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] shadow-glow" />
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
const TESTIMONIALS = [
  { n: "Aarav S.", r: "Founder, Nimbus", q: "Jarir delivered our SaaS in record time. Code quality and UX polish are top-tier." },
  { n: "Priya K.", r: "CTO, Orbit", q: "He brought our store from 60 to 98 on Lighthouse. Conversions jumped within a month." },
  { n: "Daniel R.", r: "PM, Pulse AI", q: "Beautiful streaming UI, thoughtful state management. Easy to work with and reliable." },
  { n: "Meera T.", r: "Marketing Lead", q: "Best developer we've hired. SEO results were immediate and the site looks incredible." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Trusted by <span className="text-gradient">founders & teams</span></>}
        />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-6 px-4 [animation-duration:40s]">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <figure
              key={i}
              className="w-[340px] shrink-0 rounded-3xl glass p-6 sm:w-[420px]"
            >
              <Quote className="h-5 w-5 text-[var(--glow)]" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.q}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] font-semibold text-background">
                  {t.n[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- MARQUEE TECH BAR ----------
export function TechMarquee() {
  const items = ["React.js", "Node.js", "Express", "MongoDB", "Tailwind", "Bootstrap", "GSAP", "Framer Motion", "REST APIs", "MySQL", "Vercel" ,"Render" , "Netlify"];
  return (
    <div className="relative overflow-hidden border-y border-white/5 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6 font-display text-2xl text-muted-foreground sm:text-3xl">
        {[...items, ...items].map((x, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            {x}
            <span className="text-[var(--glow)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
