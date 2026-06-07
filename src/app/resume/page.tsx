import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience, education, and skills.",
};

const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 — Present",
    description: "Developing custom web applications and full-stack solutions for various clients. Focus on React, Next.js, and Node.js ecosystems.",
  },
  {
    role: "Frontend Developer",
    company: "Gyost Design Agency",
    period: "2023",
    description: "Built premium, animation-heavy portfolio websites and landing pages for agency clients using plain JavaScript and GSAP to maximize performance.",
  },
];

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Computer Science and Technology",
    period: "2020 — 2024",
    description: "Focused on software engineering principles, algorithms, and full-stack web development.",
  },
];

const capabilities = [
  {
    category: "Languages",
    items: "JavaScript, TypeScript, HTML/CSS, SQL",
  },
  {
    category: "Frontend",
    items: "React, Next.js, Tailwind CSS, Framer Motion, GSAP",
  },
  {
    category: "Backend",
    items: "Node.js, Express, REST APIs, Prisma",
  },
  {
    category: "Databases",
    items: "PostgreSQL, MongoDB",
  },
  {
    category: "Tools",
    items: "Git, Vercel, Netlify, VS Code, Figma",
  },
];

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-24">
        <div className="container-studio max-w-4xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-24 md:mb-32">
            <RevealOnScroll>
              <div className="section-index">Resume</div>
              <h1 className="text-display">
                Sarthak
                <br />
                <span className="text-editorial">Sonawane.</span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              {/* Replace # with actual PDF link when available */}
              <a href="/Sarthak_Sonawane_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Download PDF
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </RevealOnScroll>
          </div>

          {/* Experience */}
          <section className="mb-24">
            <RevealOnScroll>
              <h2 className="text-2xl font-serif mb-12">Experience</h2>
            </RevealOnScroll>
            <div className="space-y-0">
              {experience.map((job, index) => (
                <RevealOnScroll key={index} delay={0.1 * index}>
                  <div className="divider" />
                  <div className="py-8 md:py-12 grid md:grid-cols-4 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <div className="text-sm font-medium mb-1">{job.period}</div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-medium mb-1">{job.role}</h3>
                      <div className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--foreground-muted)" }}>{job.company}</div>
                      <p className="text-base leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>{job.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
              <div className="divider" />
            </div>
          </section>

          {/* Education */}
          <section className="mb-24">
            <RevealOnScroll>
              <h2 className="text-2xl font-serif mb-12">Education</h2>
            </RevealOnScroll>
            <div className="space-y-0">
              {education.map((edu, index) => (
                <RevealOnScroll key={index} delay={0.1 * index}>
                  <div className="divider" />
                  <div className="py-8 md:py-12 grid md:grid-cols-4 gap-4 md:gap-8">
                    <div className="md:col-span-1">
                      <div className="text-sm font-medium mb-1">{edu.period}</div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
                      <div className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--foreground-muted)" }}>{edu.institution}</div>
                      <p className="text-base leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>{edu.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
              <div className="divider" />
            </div>
          </section>

          {/* Capabilities */}
          <section>
            <RevealOnScroll>
              <h2 className="text-2xl font-serif mb-12">Technical Skills</h2>
            </RevealOnScroll>
            <div className="space-y-0">
              {capabilities.map((cap, index) => (
                <RevealOnScroll key={index} delay={0.1 * index}>
                  <div className="divider" />
                  <div className="py-6 md:py-8 grid md:grid-cols-4 gap-4 md:gap-8 items-center">
                    <div className="md:col-span-1 text-sm font-medium">
                      {cap.category}
                    </div>
                    <div className="md:col-span-3 text-base" style={{ color: "var(--foreground-secondary)" }}>
                      {cap.items}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
              <div className="divider" />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
