import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Developer, Builder, Future Founder. My journey, how I work, and the principles that guide my engineering.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24">
        <div className="container-studio">
          {/* Header */}
          <div className="max-w-4xl mb-24 md:mb-32">
            <RevealOnScroll>
              <div className="section-index">About</div>
              <h1 className="text-display mb-8">
                Developer.
                <br />
                Builder.
                <br />
                <span className="text-editorial">Future Founder.</span>
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed max-w-2xl" style={{ color: "var(--foreground-secondary)" }}>
                I build digital products from concept to deployment, operating at the intersection of engineering, design, and business strategy.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-12 gap-12 md:gap-24">
            {/* Left Column - Navigation/Sticky */}
            <div className="hidden md:block md:col-span-3">
              <div className="sticky top-32">
                <ul className="space-y-4 font-sans text-sm tracking-widest uppercase">
                  <li><a href="#identity" className="hover:opacity-60 transition-opacity" style={{ color: "var(--foreground-muted)" }}>Identity</a></li>
                  <li><a href="#journey" className="hover:opacity-60 transition-opacity" style={{ color: "var(--foreground-muted)" }}>Journey</a></li>
                  <li><a href="#how-i-work" className="hover:opacity-60 transition-opacity" style={{ color: "var(--foreground-muted)" }}>How I Work</a></li>
                  <li><a href="#principles" className="hover:opacity-60 transition-opacity" style={{ color: "var(--foreground-muted)" }}>Principles</a></li>
                </ul>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="md:col-span-9 space-y-24 md:space-y-32">
              
              {/* Identity */}
              <section id="identity">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-serif mb-8">Identity</h2>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                    <p>
                      I am fundamentally a builder. While my primary tool is code, my focus is always the end product and the problem it solves. I don&rsquo;t view myself merely as a translator of requirements into syntax, but as a partner in the product creation process.
                    </p>
                    <p>
                      This perspective shifts how I write code. It means caring about architecture because it enables faster feature shipping. It means caring about performance because it directly impacts user retention. It means pushing back on bad requirements because the code doesn&rsquo;t matter if the product fails.
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              {/* Journey */}
              <section id="journey">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-serif mb-8">The Journey</h2>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                    <p>
                      My journey into software engineering started with curiosity about how things on the internet were made. That curiosity quickly evolved into a passion for creating.
                    </p>
                    <p>
                      I began with front-end technologies, mastering HTML, CSS, and JavaScript. But I soon realized that to build complete products, I needed to understand the entire stack. I expanded into React, Node.js, databases, and deployment architectures.
                    </p>
                    <p>
                      Today, my technical foundation allows me to navigate the entire stack confidently, but my learning never stops. The landscape changes constantly, and staying adaptable is more valuable than mastering any single framework.
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              {/* How I Work */}
              <section id="how-i-work">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-serif mb-8">How I Work</h2>
                  <div className="space-y-6 text-lg md:text-xl leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                    <p>
                      <strong>Understand First.</strong> I never write code without fully understanding the business goal, the user needs, and the constraints of the project.
                    </p>
                    <p>
                      <strong>Design the System.</strong> I believe in planning architectures that are simple to start, easy to understand, and capable of scaling when needed. Over-engineering is as dangerous as under-engineering.
                    </p>
                    <p>
                      <strong>Iterative Execution.</strong> I build in small, testable increments. Getting a walking skeleton deployed early allows for faster feedback loops and course correction.
                    </p>
                    <p>
                      <strong>Polish the Details.</strong> The difference between a good product and a great one often lies in the micro-interactions, the error states, and the performance optimizations. I care deeply about the finish.
                    </p>
                  </div>
                </RevealOnScroll>
              </section>

              {/* Principles */}
              <section id="principles">
                <RevealOnScroll>
                  <h2 className="text-3xl md:text-4xl font-serif mb-8">Selected Principles</h2>
                  <div className="grid sm:grid-cols-2 gap-8 mt-12">
                    <div className="p-8 border" style={{ borderColor: "var(--border-color)" }}>
                      <h3 className="font-serif text-2xl mb-4">Code is a Liability</h3>
                      <p className="text-base" style={{ color: "var(--foreground-secondary)" }}>
                        Every line of code written is a line that must be maintained, tested, and eventually rewritten. Write less of it. Leverage existing tools where possible.
                      </p>
                    </div>
                    <div className="p-8 border" style={{ borderColor: "var(--border-color)" }}>
                      <h3 className="font-serif text-2xl mb-4">Speed is a Feature</h3>
                      <p className="text-base" style={{ color: "var(--foreground-secondary)" }}>
                        Performance isn&rsquo;t an afterthought. Slow software frustrates users and abandons carts. Fast software feels magical. Always budget for performance.
                      </p>
                    </div>
                    <div className="p-8 border" style={{ borderColor: "var(--border-color)" }}>
                      <h3 className="font-serif text-2xl mb-4">Design Matters</h3>
                      <p className="text-base" style={{ color: "var(--foreground-secondary)" }}>
                        Ugly software that works is better than beautiful software that doesn&rsquo;t, but beautiful software that works wins markets.
                      </p>
                    </div>
                    <div className="p-8 border" style={{ borderColor: "var(--border-color)" }}>
                      <h3 className="font-serif text-2xl mb-4">Own the Outcome</h3>
                      <p className="text-base" style={{ color: "var(--foreground-secondary)" }}>
                        Don&rsquo;t just complete the Jira ticket. Care about what happens after the code is deployed. Monitor it. Fix it. Improve it.
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              </section>

              {/* CTA */}
              <section>
                <RevealOnScroll>
                  <div className="divider mb-16" />
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                    <h2 className="font-serif text-3xl m-0">Ready to build?</h2>
                    <div className="flex gap-4">
                      <Link href="/work" className="btn-secondary">View Work</Link>
                      <Link href="/contact" className="btn-primary">Get in Touch</Link>
                    </div>
                  </div>
                </RevealOnScroll>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
