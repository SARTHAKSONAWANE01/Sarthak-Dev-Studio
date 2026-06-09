"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { motion } from "framer-motion";

const capabilities = [
  {
    group: "Engineering",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" /><path d="m6.343 6.343 2.828 2.828" /><path d="M2 12h4" /><path d="m6.343 17.657 2.828-2.828" /><path d="M12 18v4" /><path d="m17.657 17.657-2.828-2.828" /><path d="M18 12h4" /><path d="m17.657 6.343-2.828 2.828" />
      </svg>
    ),
    items: ["Frontend Development", "Backend Development", "Database Design", "API Architecture", "DevOps & Deployment"],
  },
  {
    group: "Product",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    items: ["System Architecture", "Technical Research", "Product Strategy", "Performance Optimization", "Scalability Planning"],
  },
  {
    group: "Design",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" /><path d="M17.5 10.5c2 1 3.5 3.5 3.5 6v1h-17v-1c0-2.5 1.5-5 3.5-6" /><circle cx="6.5" cy="6.5" r="2.5" />
        <path d="M3 19h18" />
      </svg>
    ),
    items: ["UI Development", "UX Thinking", "Design Systems", "Responsive Design", "Interaction Design"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-spacing">
      <div className="container-studio">
        <RevealOnScroll>
          <div className="section-index">04 — Capabilities</div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="mb-16">
            What I
            <br />
            <span className="text-editorial">bring.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {capabilities.map((cap, groupIndex) => (
            <RevealOnScroll
              key={cap.group}
              delay={0.15 * (groupIndex + 1)}
            >
              <motion.div
                className="border p-6 md:p-8 card-hover-lift"
                style={{ borderColor: "var(--border-color)" }}
              >
                {/* Group Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div style={{ color: "var(--foreground-muted)" }}>
                    {cap.icon}
                  </div>
                  <h3
                    className="text-lg font-sans font-medium uppercase tracking-widest text-xs !leading-none"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {cap.group}
                  </h3>
                  <span
                    className="ml-auto text-xs font-sans"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {cap.items.length} skills
                  </span>
                </div>
                <div className="divider-subtle mb-6" />
                <ul className="space-y-1">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="capability-item text-base md:text-lg"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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
