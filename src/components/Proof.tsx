"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

const proofItems = [
  { label: "Projects Built", value: "10+" },
  { label: "Products Shipped", value: "3" },
  { label: "Client Engagements", value: "2" },
  { label: "Technologies Used", value: "15+" },
  { label: "Years Learning & Building", value: "3+" },
];

export default function Proof() {
  return (
    <section id="proof" className="section-spacing">
      <div className="container-studio">
        <RevealOnScroll>
          <div className="section-index">06 — Proof</div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="mb-16">
            By the
            <br />
            <span className="text-editorial">numbers.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
          {proofItems.map((item, index) => (
            <RevealOnScroll key={item.label} delay={0.1 * (index + 1)}>
              <div
                className="py-8 md:py-12 text-center"
                style={{
                  borderRight:
                    index < proofItems.length - 1
                      ? "1px solid var(--border-color)"
                      : "none",
                }}
              >
                <div className="font-serif text-3xl md:text-4xl mb-3">
                  {item.value}
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {item.label}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.7}>
          <div className="divider mt-16 md:mt-24" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
