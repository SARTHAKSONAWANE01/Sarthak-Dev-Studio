"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

const capabilities = [
  {
    group: "Engineering",
    items: ["Frontend Development", "Backend Development", "Database Design", "API Architecture", "DevOps & Deployment"],
  },
  {
    group: "Product",
    items: ["System Architecture", "Technical Research", "Product Strategy", "Performance Optimization", "Scalability Planning"],
  },
  {
    group: "Design",
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
              <div>
                <h3 className="text-lg font-sans font-medium mb-6 uppercase tracking-widest text-xs" style={{ color: "var(--foreground-muted)" }}>
                  {cap.group}
                </h3>
                <div className="divider-subtle mb-6" />
                <ul className="space-y-4">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="text-base md:text-lg"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
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
