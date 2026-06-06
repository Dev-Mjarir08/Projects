import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jarir Multani",
  alternateName: "DevJarir",
  jobTitle: "Full Stack Developer",
  url: "/",
  image: "/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Navsari",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  knowsAbout: [
    "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JavaScript",
    "TypeScript", "Tailwind CSS", "REST APIs", "MERN Stack",
  ],
  sameAs: [
    "https://github.com/devjarir",
    "https://linkedin.com/in/jarirmultani",
    "https://twitter.com/devjarir",
    "https://instagram.com/devjarir",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DevJarir — Jarir Multani Portfolio",
  url: "/",
  author: { "@type": "Person", name: "Jarir Multani" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DevJarir — Jarir Multani",
  image: "/og-image.jpg",
  url: "/",
  telephone: "+91-00000-00000",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Navsari",
    addressLocality: "Navsari",
    addressRegion: "Gujarat",
    postalCode: "396445",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 20.9467, longitude: 72.9520 },
  areaServed: "Worldwide",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jarir Multani | Full Stack Developer in Navsari | DevJarir" },
      {
        name: "description",
        content:
          "Jarir Multani is a professional Full Stack Developer in Navsari specializing in React.js, Node.js, Express.js, MongoDB, frontend & backend development, and SEO-friendly custom web applications.",
      },
      {
        name: "keywords",
        content:
          "Jarir Multani, DevJarir, Full Stack Developer in Navsari, Navsari Developer, Best Developer in Navsari, Frontend Developer Navsari, Backend Developer Navsari, MERN Stack Developer, React Developer Navsari, Node.js Developer, JavaScript Developer, Web Developer Gujarat, Freelance Full Stack Developer, Vibe Coder",
      },
      { name: "author", content: "Jarir Multani" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0A0A0A" },

      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "DevJarir" },
      { property: "og:title", content: "Jarir Multani | Full Stack Developer in Navsari | DevJarir" },
      {
        property: "og:description",
        content:
          "Professional Full Stack Developer (MERN) in Navsari. React, Node, Express, MongoDB. Building scalable, SEO-optimized, high-performance web apps.",
      },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_IN" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@devjarir" },
      { name: "twitter:creator", content: "@devjarir" },
      { name: "twitter:title", content: "Jarir Multani | Full Stack Developer in Navsari | DevJarir" },
      {
        name: "twitter:description",
        content:
          "MERN Stack Developer in Navsari building scalable, SEO-friendly web apps with React, Node and modern tooling.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
