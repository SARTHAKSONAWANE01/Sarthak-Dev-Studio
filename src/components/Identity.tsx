"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { motion } from "framer-motion";

const roles = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Developer",
    description: "Full-stack engineering with React, Next.js, Node.js, and modern tooling.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01" /><path d="M17 12h.01" /><path d="M7 12h.01" />
      </svg>
    ),
    title: "Builder",
    description: "Taking ideas from concept through architecture, design, and deployment.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Future Founder",
    description: "Studying product-market fit, business models, and founder frameworks.",
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "Prisma", "PostgreSQL", "MongoDB", "Framer Motion", "GSAP",
  "Git", "Figma", "Vercel", "Express.js", "JavaScript",
];

export default function Identity() {
  return (
    <section id="identity" className="section-spacing">
      <div className="container-studio">
        <RevealOnScroll>
          <div className="section-index">02 — Identity</div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: Narrative */}
          <div>
            <RevealOnScroll delay={0.1}>
              <h2 className="mb-8">
                Developer.
                <br />
                Builder.
                <br />
                <span className="text-editorial" style={{ color: "var(--foreground-secondary)" }}>
                  Future Founder.
                </span>
              </h2>
            </RevealOnScroll>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col justify-center">
            <RevealOnScroll delay={0.2}>
              <p className="text-lg mb-6 leading-relaxed">
                I don&rsquo;t just write code — I build products. Every project
                starts with understanding the problem, researching the domain,
                and designing a solution before the first line of code is written.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="text-lg mb-6 leading-relaxed">
                My work sits at the intersection of engineering, design, and
                business thinking. I care about architecture as much as user
                experience, and I believe the best products come from developers
                who understand why they&rsquo;re building, not just what.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <p className="text-lg leading-relaxed">
                Currently focused on full-stack product development — taking ideas
                from concept through architecture, design, implementation, and
                deployment. Building toward founding my own product studio.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Role Cards */}
        <RevealOnScroll delay={0.5}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 md:mt-24">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                className="role-card"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="role-card-icon relative z-10">{role.icon}</div>
                <h3 className="text-xl font-serif mb-2 relative z-10">{role.title}</h3>
                <p className="text-sm relative z-10" style={{ color: "var(--foreground-muted)" }}>
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Tech Stack Marquee */}
        <RevealOnScroll delay={0.6}>
          <div className="mt-12 md:mt-16">
            <div
              className="text-xs uppercase tracking-widest mb-4 font-sans"
              style={{ color: "var(--foreground-muted)" }}
            >
              Technologies I Work With
            </div>
            <div className="marquee-container py-4 border-y" style={{ borderColor: "var(--border-subtle)" }}>
              <div className="marquee-track">
                {/* Duplicate for seamless loop */}
                {[...techStack, ...techStack].map((tech, i) => (
                  <span key={`${tech}-${i}`} className="marquee-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
