"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { motion } from "framer-motion";

const currentProjects = [
  {
    name: "Grenomart",
    description: "Full-stack e-commerce platform with payment integration and admin dashboard.",
    status: "In Development",
    statusType: "active" as const,
    progress: 75,
    updated: "This week",
  },
  {
    name: "Portfolio V2",
    description: "This website. A premium editorial platform built on Next.js 16.",
    status: "Ongoing",
    statusType: "active" as const,
    progress: 85,
    updated: "Today",
  },
  {
    name: "AI Experiments",
    description: "Exploring LLM integration patterns, prompt engineering, and AI-powered tooling.",
    status: "Research",
    statusType: "research" as const,
    progress: 30,
    updated: "Last week",
  },
  {
    name: "Startup Research",
    description: "Studying product-market fit, business models, and founder frameworks.",
    status: "Learning",
    statusType: "learning" as const,
    progress: 40,
    updated: "Ongoing",
  },
];

const statusDotClass: Record<string, string> = {
  active: "status-dot-active",
  research: "status-dot-research",
  learning: "status-dot-learning",
};

export default function BuildingNow() {
  return (
    <section id="building-now" className="section-spacing">
      <div className="container-studio">
        <RevealOnScroll>
          <div className="section-index">05 — Building Now</div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="mb-16">
            What I&rsquo;m
            <br />
            <span className="text-editorial">working on.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-4">
          {currentProjects.map((project, index) => (
            <RevealOnScroll key={project.name} delay={0.1 * (index + 1)}>
              <motion.div
                className="card-editorial card-hover-lift p-6 md:p-8"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-serif">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    <span className={`status-dot ${statusDotClass[project.statusType]}`} />
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {project.description}
                </p>



                {/* Updated */}
                <div className="flex items-center gap-1.5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span
                    className="text-xs font-sans"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    Updated {project.updated}
                  </span>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.6}>
          <div className="divider mt-16 md:mt-24" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
