import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Building Now",
  description: "Active projects, current backlogs, target releases, and system development status.",
};

const activeWorkScope = [
  {
    name: "UdyamEdge",
    status: "Active Ideathon Phase Integration",
    milestone: "Phase 4 Pitching Slots & Ratings",
    description: "Incubator and startup program management dashboard. We are implementing multi-stage settings pipelines to sync the startup dashboard widgets dynamically with backend phase configurations.",
    features: [
      "Dynamic Timeline Widget (6 distinct startup progress phases)",
      "Evaluation modules for judges with Zod schemas",
      "Workshop & Pitch booking schedule calendar modules",
      "₹25K Seed Funding status logic and email dispatchers"
    ],
    tech: "React · Node.js · Express · PostgreSQL · Tailwind"
  },
  {
    name: "Grenomart",
    status: "Checkout & Admin Optimizations",
    milestone: "Stripe Webhooks & Invoice Templates",
    description: "Production-grade organic retail e-commerce platform. Focus is currently on database index performance for product filters and hardening Stripe webhook idempotency.",
    features: [
      "Stripe payment session workflows with automated receipts",
      "Cart persistence state logic sync across user authentication",
      "Product database tables indexed via Prisma migrations",
      "Admin CRUD settings dashboard for stock levels and metrics"
    ],
    tech: "Next.js 16 · TypeScript · Tailwind CSS · Prisma · PostgreSQL"
  },
  {
    name: "Rai by Rai Advisory",
    status: "Calculator Integrations",
    milestone: "FEMA NRI Compliance Sourcing Logic",
    description: "Luxury fiduciary real estate portfolio advisory web platform. Establishing custom client-side tax calculators and scheduling modules.",
    features: [
      "Luxury editorial Cormorant Garamond typography structures",
      "FEMA & HNI tax-efficient asset gains calculation panels",
      "Sub-2s static load speeds with vanilla JS intersection animations",
      "Spam-proof lead forms with honeypot validation inputs"
    ],
    tech: "HTML5 · CSS3 · Vanilla JavaScript · Netlify"
  },
  {
    name: "BitDevXp",
    status: "TanStack Start SSR Setup",
    milestone: "Production middleware hardening",
    description: "Software engineering consultancy landing platform. Refactoring architecture to adopt Vite 7 and TanStack Start for lightweight meta-framework rendering.",
    features: [
      "Type-safe file-based client/server routers",
      "Bun package run configurations for zero compilation lag",
      "IP-based API rate limiting and security headers",
      "Strict monochrome design system layout configuration"
    ],
    tech: "React 19 · TanStack Start · Vite 7 · Framer Motion · Tailwind v4"
  }
];

export default function BuildingNowPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">
        <div className="container-studio">
          {/* Header */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <RevealOnScroll>
              <div className="section-index">Building Now</div>
              <h1 className="text-display mb-8">
                Current
                <br />
                <span className="text-editorial">sprints.</span>
              </h1>
              <p
                className="text-xl md:text-2xl leading-relaxed"
                style={{ color: "var(--foreground-secondary)" }}
              >
                An overview of active engineering pipelines, backlog items, and current development metrics.
              </p>
            </RevealOnScroll>
          </div>

          {/* Active Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {activeWorkScope.map((project, idx) => (
              <RevealOnScroll key={project.name} delay={0.1 * (idx + 1)}>
                <div className="border border-foreground/5 p-8 bg-foreground/[0.01] flex flex-col h-full hover:border-foreground/20 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-serif mb-1">{project.name}</h2>
                      <p className="text-2xs font-mono uppercase tracking-wider text-foreground-muted">
                        {project.tech}
                      </p>
                    </div>
                    <span className="px-2.5 py-0.5 text-3xs font-mono uppercase tracking-wider border border-green-500/20 text-green-700 bg-green-500/5 rounded">
                      Active
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--foreground-secondary)" }}>
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="divider opacity-30" />
                    <div>
                      <span className="block text-3xs font-mono uppercase tracking-wider text-foreground-muted mb-1">
                        Current Milestone
                      </span>
                      <span className="text-sm text-foreground font-medium">{project.milestone}</span>
                    </div>

                    <div>
                      <span className="block text-3xs font-mono uppercase tracking-wider text-foreground-muted mb-2">
                        Features In Development
                      </span>
                      <ul className="space-y-1.5">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-xs flex items-center gap-2" style={{ color: "var(--foreground-secondary)" }}>
                            <span className="w-1 h-1 rounded-full bg-foreground" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
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
