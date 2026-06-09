"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getTier1Projects } from "@/lib/projects";
import RevealOnScroll from "@/components/RevealOnScroll";

// Gradient thumbnails for each project (placeholder visuals)
const projectGradients: Record<string, string> = {
  grenomart: "linear-gradient(135deg, #0a0a0a 0%, #333 50%, #1a1a1a 100%)",
  "sarthak-dev-studio": "linear-gradient(135deg, #222 0%, #555 50%, #111 100%)",
  "gta6-landing-page": "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "client-project": "linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 50%, #1a1a1a 100%)",
  bitdevxp: "linear-gradient(135deg, #121212 0%, #333 50%, #1a1a1a 100%)",
  raibyrai: "linear-gradient(135deg, #222 0%, #444 50%, #111 100%)",
  udyamedge: "linear-gradient(135deg, #0d0d0d 0%, #292929 50%, #111 100%)",
  "ankitas-studio": "linear-gradient(135deg, #1f1a24 0%, #332a3d 50%, #17121c 100%)",
  "gulbarga-greens": "linear-gradient(135deg, #13241d 0%, #1c3d2f 50%, #0d1a14 100%)",
};

const projectImages: Record<string, string> = {
  grenomart: "/projects/grenomart.png",
  bitdevxp: "/projects/bitdevxp.png",
  raibyrai: "/projects/raibyrai.png",
  udyamedge: "/projects/udyamedge.png",
  "ankitas-studio": "/projects/ankitas-studio.png",
  "gta6-landing-page": "/projects/gta6.png",
  "sarthak-dev-studio": "/projects/portfolio.png",
  "gulbarga-greens": "/projects/gulbargagreens.png",
};

export default function SelectedWork() {
  const projects = getTier1Projects();

  return (
    <section id="selected-work" className="section-spacing">
      <div className="container-studio">
        <RevealOnScroll>
          <div className="section-index">03 — Selected Work</div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="flex justify-between items-end mb-16">
            <h2>
              Work that
              <br />
              <span className="text-editorial">speaks.</span>
            </h2>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-black transition-colors duration-300 group"
              style={{ color: "var(--foreground-muted)" }}
            >
              <span>View All</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>

        {/* Project List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={0.1 * (index + 1)}>
              <motion.div
                initial="initial"
                whileHover="hover"
                className="group block cursor-pointer project-row"
              >
                <Link href={`/work/${project.slug}`}>
                  <motion.div
                    className="divider"
                    variants={{
                      initial: { backgroundColor: "var(--border-color)" },
                      hover: { backgroundColor: "var(--foreground)" },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="py-8 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 relative">
                    {/* Project Number */}
                    <div className="hidden md:block w-16 shrink-0">
                      <span className="project-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Left: Project Info */}
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-xs uppercase tracking-widest mb-2 block"
                        style={{ color: "var(--foreground-muted)" }}
                      >
                        {project.category}
                      </span>
                      <motion.h3
                        className="text-2xl md:text-3xl font-serif mb-3"
                        variants={{
                          initial: { x: 0 },
                          hover: { x: 8 },
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        {project.title}
                      </motion.h3>
                      {/* Mobile Image Preview */}
                      {projectImages[project.slug] && (
                        <div className="block lg:hidden w-full aspect-video rounded border border-foreground/5 overflow-hidden mb-4 relative">
                          <img
                            src={projectImages[project.slug]}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="tech-tag">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Center: Outcome */}
                    <p
                      className="flex-1 text-sm md:text-base max-w-md transition-colors duration-300 group-hover:text-black"
                      style={{ color: "var(--foreground-secondary)" }}
                    >
                      {project.shortOutcome}
                    </p>

                    {/* Right: Thumbnail + Arrow */}
                    <div className="flex items-center gap-4">
                      {/* Hover Thumbnail Preview */}
                      <motion.div
                        className="hidden lg:block w-32 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative rounded border border-foreground/10"
                        variants={{
                          initial: { scale: 0.9, opacity: 0 },
                          hover: { scale: 1, opacity: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {projectImages[project.slug] ? (
                          <img
                            src={projectImages[project.slug]}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{
                              background: projectGradients[project.slug] || "var(--color-grey-100)",
                            }}
                          >
                            <span className="text-white/30 text-xs font-sans uppercase tracking-widest">
                              Preview
                            </span>
                          </div>
                        )}
                      </motion.div>

                      <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: "var(--foreground-muted)" }}
                        variants={{
                          initial: { x: 0, y: 0, color: "var(--foreground-muted)" },
                          hover: { x: 4, y: -4, color: "var(--foreground)" },
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </motion.svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </RevealOnScroll>
          ))}
          <div className="divider" />
        </div>

        {/* Mobile View All */}
        <RevealOnScroll delay={0.5}>
          <div className="mt-8 md:hidden">
            <Link href="/work" className="btn-secondary w-full justify-center">
              View All Work
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
