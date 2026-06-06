import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AnimatedBackground, CustomCursor, PageLoader, ScrollProgress } from "@/components/portfolio/FX";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About, Skills, Projects, Services, Experience, Testimonials, TechMarquee,
} from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Jarir Multani?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jarir Multani (DevJarir) is a Full Stack Developer based in Navsari, Gujarat, specializing in React.js, Node.js, Express.js, MongoDB and the MERN stack.",
      },
    },
    {
      "@type": "Question",
      name: "What services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full Stack Web Development, Frontend & Backend Development, REST API Development, Website Optimization and SEO-friendly custom web application development.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with clients outside India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — I work remotely with startups and teams worldwide while being based in Navsari, Gujarat.",
      },
    },
    {
      "@type": "Question",
      name: "Which tech stack do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "React, Next.js, Tailwind CSS, GSAP, Framer Motion on the frontend; Node.js, Express.js, REST APIs and MongoDB/MySQL on the backend.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jarir Multani | Full Stack Developer in Navsari | DevJarir" },
      {
        name: "description",
        content:
          "Jarir Multani is a Full Stack Developer in Navsari specializing in React.js, Node.js, Express.js, MongoDB, frontend and backend development, and SEO-friendly custom web applications.",
      },
      { property: "og:title", content: "Jarir Multani | Full Stack Developer in Navsari | DevJarir" },
      {
        property: "og:description",
        content:
          "Professional MERN Stack Developer in Navsari building scalable, SEO-optimized, high-performance web applications.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" theme="dark" />
    </>
  );
}
