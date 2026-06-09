import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Philosophy",
  description: "Core beliefs on product engineering, simple design patterns, and continuous technical growth.",
};

const philosophyPillars = [
  {
    num: "01",
    belief: "Code is a tool. Products are the point.",
    elaboration: "Technology exists to solve real problems for real people. While clean code is highly valuable, it should never become an excuse for delaying delivery or ignoring user feedback. The best engineering is that which enables product velocity and provides measurable value.",
    details: [
      { title: "Pragmatic Engineering", text: "Selecting stacks based on project constraints and release targets rather than hype." },
      { title: "Fast Validation Loops", text: "Shipping minimal viable feature structures early to get real data points from users." },
      { title: "Metric Alignment", text: "Designing systems that measure user behavior, error frequencies, and conversion ratios directly." }
    ]
  },
  {
    num: "02",
    belief: "Simplicity is the hardest thing to build.",
    elaboration: "Adding layers of complexity to software is easy. Striping away code down to its essential logic—building just enough to solve the problem securely—demands discipline, architectural planning, and active restraint. Simple code is easier to test, debug, and maintain.",
    details: [
      { title: "Modular Architectures", text: "Isolating operations into focused, stateless components and helper logic." },
      { title: "Code Refactoring", text: "Rethinking database tables and functions to decrease cognitive overhead for future maintainers." },
      { title: "Anti Over-Engineering", text: "Avoiding complex abstractions until they are explicitly required by scale metrics." }
    ]
  },
  {
    num: "03",
    belief: "Every project should teach something.",
    elaboration: "Real skill development occurs at the edges of current understanding. When building personal projects or selecting client work, choose paths that require learning a new paradigm, database configuration, or performance optimization tactic. Stagnation is the main threat to engineering growth.",
    details: [
      { title: "Stack Agility", text: "Exploring frameworks, language compilers, and routing paradigms to expand mental tools." },
      { title: "Bottleneck Audits", text: "Diagnosing memory leaks, network latencies, or query slow-downs to understand base runtimes." },
      { title: "Open Source Analysis", text: "Reading production libraries to learn structural patterns, typing layouts, and API conventions." }
    ]
  }
];

export default function PhilosophyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">
        <div className="container-studio">
          {/* Header */}
          <div className="max-w-4xl mb-16 md:mb-24">
            <RevealOnScroll>
              <div className="section-index">Philosophy</div>
              <h1 className="text-display mb-8">
                Values &
                <br />
                <span className="text-editorial">principles.</span>
              </h1>
              <p
                className="text-xl md:text-2xl leading-relaxed"
                style={{ color: "var(--foreground-secondary)" }}
              >
                Core values that guide technical design, system planning, and software execution.
              </p>
            </RevealOnScroll>
          </div>

          {/* Pillars List */}
          <div className="space-y-16">
            {philosophyPillars.map((pillar, index) => (
              <RevealOnScroll key={pillar.num} delay={0.15 * (index + 1)}>
                <div className="relative pl-6 md:pl-12 border-l border-foreground/5 py-6 group hover:border-foreground/30 transition-colors duration-300">
                  <div className="absolute left-0 top-6 w-[2px] h-12 bg-foreground scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left Col */}
                    <div className="lg:col-span-5">
                      <div className="text-xs uppercase tracking-widest text-foreground-muted mb-4 font-mono">
                        Belief {pillar.num}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif mb-4 leading-snug">
                        &ldquo;{pillar.belief}&rdquo;
                      </h2>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                        {pillar.elaboration}
                      </p>
                    </div>

                    {/* Right Col */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      <div className="space-y-6">
                        {pillar.details.map((item) => (
                          <div key={item.title}>
                            <h3 className="text-xs font-mono uppercase tracking-wider text-foreground mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm" style={{ color: "var(--foreground-secondary)" }}>
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
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
