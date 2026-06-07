"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

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

        <RevealOnScroll delay={0.5}>
          <div className="divider mt-16 md:mt-24" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
