"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

const beliefs = [
  {
    statement: "Code is a tool. Products are the point.",
    elaboration:
      "Technology matters, but only in service of solving real problems for real people. The best code is the code that ships value.",
  },
  {
    statement: "Simplicity is the hardest thing to build.",
    elaboration:
      "Anyone can add complexity. Reducing a problem to its essence — and building just enough to solve it — requires discipline and clarity.",
  },
  {
    statement: "Every project should teach something.",
    elaboration:
      "Growth doesn't come from repeating what you know. It comes from choosing work that stretches your understanding and forces new thinking.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-spacing">
      <div className="container-studio">
        <RevealOnScroll>
          <div className="section-index">07 — Philosophy</div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="mb-16">
            What I
            <br />
            <span className="text-editorial">believe.</span>
          </h2>
        </RevealOnScroll>

        <div className="space-y-0">
          {beliefs.map((belief, index) => (
            <RevealOnScroll key={index} delay={0.15 * (index + 1)}>
              <div className="py-10 md:py-14">
                {index > 0 && <div className="divider mb-10 md:mb-14" />}
                <div className="grid md:grid-cols-2 gap-6 md:gap-16">
                  <h3 className="text-2xl md:text-3xl font-serif leading-snug">
                    &ldquo;{belief.statement}&rdquo;
                  </h3>
                  <p
                    className="text-base md:text-lg leading-relaxed flex items-center"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    {belief.elaboration}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.6}>
          <div className="divider mt-8 md:mt-12" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
