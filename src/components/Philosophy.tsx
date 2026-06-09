"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

const beliefs = [
  {
    num: "01",
    statement: "Code is a tool. Products are the point.",
    elaboration:
      "Technology matters, but only in service of solving real problems for real people. The best code is the code that ships value.",
  },
  {
    num: "02",
    statement: "Simplicity is the hardest thing to build.",
    elaboration:
      "Anyone can add complexity. Reducing a problem to its essence — and building just enough to solve it — requires discipline and clarity.",
  },
  {
    num: "03",
    statement: "Every project should teach something.",
    elaboration:
      "Growth doesn't come from repeating what you know. It comes from choosing work that stretches your understanding and forces new thinking.",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-spacing relative overflow-hidden">
      {/* Background Decorative Quote Mark */}
      <div 
        className="absolute right-0 bottom-0 text-[30rem] font-serif leading-none select-none pointer-events-none opacity-[0.02]"
        style={{ color: "var(--foreground)" }}
      >
        ”
      </div>

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
              <div className="group relative py-12 md:py-16 pl-6 md:pl-8 border-l border-foreground/5 hover:border-foreground/30 transition-colors duration-300">
                <div className="absolute left-0 top-12 md:top-16 w-[2px] h-10 bg-foreground scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                  <div className="md:col-span-1 text-sm font-sans tracking-widest text-foreground-muted opacity-50 font-medium">
                    {belief.num}
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-2xl md:text-3xl font-serif leading-snug">
                      &ldquo;{belief.statement}&rdquo;
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p
                      className="text-base md:text-lg leading-relaxed pt-1"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {belief.elaboration}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
