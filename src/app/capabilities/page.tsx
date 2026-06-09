import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Detailed breakdown of technical skills, frameworks, and architecture paradigms.",
};

const capabilitiesDetails = [
  {
    title: "Engineering",
    subtitle: "Robust, scale-ready software architectures",
    description: "Building production-grade systems with standard patterns, clean data flow, and type-safe database schemas.",
    details: [
      { area: "Frontend Frameworks", details: "React 19, Next.js (App Router, Turbopack), TanStack Start, Vite" },
      { area: "State & Routing", details: "Zustand, TanStack Router, React Context" },
      { area: "Backend Systems", details: "Node.js, Express, REST APIs, Server Actions" },
      { area: "Databases & ORMs", details: "PostgreSQL, MongoDB, MySQL, Prisma, Mongoose" },
      { area: "DevOps & Cloud", details: "Vercel, Netlify, Docker, GitHub Actions, AWS Basics" },
    ]
  },
  {
    title: "Product Strategy",
    subtitle: "Aligning technical execution with business outcomes",
    description: "Analyzing user needs, planning technical milestones, and developing features that directly validate product goals.",
    details: [
      { area: "System Design", details: "Scalable databases, modular API contracts, error logging" },
      { area: "Product Analytics", details: "User flow analysis, performance monitoring, Lighthouse auditing" },
      { area: "Technical Planning", details: "MVP scope definition, database migration strategies, sprint structures" },
      { area: "Security Protocols", details: "Zod validations, rate limiting, sanitization filters, secure headers" },
    ]
  },
  {
    title: "Interaction Design",
    subtitle: "Premium look, feel, and motion aesthetics",
    description: "Creating custom animations, responsive grids, and fluid scroll effects that enrich digital brand narratives.",
    details: [
      { area: "Motion Libraries", details: "Framer Motion, GSAP, CSS Keyframes" },
      { area: "Scroll Optimization", details: "Lenis smooth scroll integration, ScrollTrigger scroll binding" },
      { area: "Styling Frameworks", details: "Tailwind CSS v4, CSS Custom Properties, Vanilla CSS" },
      { area: "Prototyping Tools", details: "Figma (Auto layout, component systems, UX wireframing)" },
    ]
  }
];

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">
        <div className="container-studio">
          {/* Header */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <RevealOnScroll>
              <div className="section-index">Capabilities</div>
              <h1 className="text-display mb-8">
                Technical
                <br />
                <span className="text-editorial">excellence.</span>
              </h1>
              <p
                className="text-xl md:text-2xl leading-relaxed"
                style={{ color: "var(--foreground-secondary)" }}
              >
                Detailed breakdown of engineering paradigms, technical stacks, and product execution workflows.
              </p>
            </RevealOnScroll>
          </div>

          {/* Details Sections */}
          <div className="space-y-16">
            {capabilitiesDetails.map((category, index) => (
              <RevealOnScroll key={category.title} delay={0.15 * (index + 1)}>
                <div className="border border-foreground/5 p-8 md:p-12 bg-foreground/[0.01]">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left Col */}
                    <div className="lg:col-span-5">
                      <div className="text-xs uppercase tracking-widest text-foreground-muted mb-3 font-mono">
                        0{index + 1} — {category.title}
                      </div>
                      <h2 className="text-3xl font-serif mb-4">{category.subtitle}</h2>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                        {category.description}
                      </p>
                    </div>

                    {/* Right Col - Detailed Tables */}
                    <div className="lg:col-span-7">
                      <div className="space-y-4">
                        {category.details.map((detail, dIdx) => (
                          <div key={detail.area}>
                            {dIdx > 0 && <div className="divider opacity-30 mb-4" />}
                            <div className="grid sm:grid-cols-12 gap-2 py-1">
                              <div className="sm:col-span-4 text-xs font-mono uppercase tracking-wider text-foreground">
                                {detail.area}
                              </div>
                              <div className="sm:col-span-8 text-sm" style={{ color: "var(--foreground-secondary)" }}>
                                {detail.details}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
