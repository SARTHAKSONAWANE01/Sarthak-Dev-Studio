"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

const currentProjects = [
  {
    name: "Grenomart",
    description: "Full-stack e-commerce platform with payment integration and admin dashboard.",
    status: "In Development",
    active: true,
  },
  {
    name: "Portfolio V2",
    description: "This website. A premium editorial platform built on Next.js 16.",
    status: "Ongoing",
    active: true,
  },
  {
    name: "AI Experiments",
    description: "Exploring LLM integration patterns, prompt engineering, and AI-powered tooling.",
    status: "Research",
    active: false,
  },
  {
    name: "Startup Research",
    description: "Studying product-market fit, business models, and founder frameworks.",
    status: "Learning",
    active: false,
  },
];

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

        <div className="grid md:grid-cols-2 gap-0">
          {currentProjects.map((project, index) => (
            <RevealOnScroll key={project.name} delay={0.1 * (index + 1)}>
              <div className="card-editorial p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-serif">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    {project.active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse-subtle" />
                    )}
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {project.description}
                </p>
              </div>
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
