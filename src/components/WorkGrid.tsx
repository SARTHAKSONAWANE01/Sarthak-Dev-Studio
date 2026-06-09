"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Project } from "@/lib/projects";

// Gradients matching projects
const projectGradients: Record<string, string> = {
  grenomart: "linear-gradient(135deg, #1f1f1f 0%, #0d0d0d 100%)",
  "sarthak-dev-studio": "linear-gradient(135deg, #2a2a2a 0%, #121212 100%)",
  "gta6-landing-page": "linear-gradient(135deg, #1a1a1a 0%, #080808 100%)",
  "client-project": "linear-gradient(135deg, #222222 0%, #0c0c0c 100%)",
  "stygo-web-health": "linear-gradient(135deg, #181818 0%, #050505 100%)",
  bitdevxp: "linear-gradient(135deg, #121212 0%, #333 50%, #1a1a1a 100%)",
  raibyrai: "linear-gradient(135deg, #222 0%, #444 50%, #111 100%)",
  udyamedge: "linear-gradient(135deg, #0d0d0d 0%, #292929 50%, #111 100%)",
};

const projectImages: Record<string, string> = {
  grenomart: "/projects/grenomart.png",
  bitdevxp: "/projects/bitdevxp.png",
  raibyrai: "/projects/raibyrai.png",
  udyamedge: "/projects/udyamedge.png",
  "gta6-landing-page": "/projects/gta6.png",
  "sarthak-dev-studio": "/projects/portfolio.png",
};

const filterTabs = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "client-work", label: "Client Work" },
];

interface WorkGridProps {
  initialProjects: Project[];
}

export default function WorkGrid({ initialProjects }: WorkGridProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = initialProjects.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "full-stack") {
      return (
        project.category === "Full Stack Product" ||
        project.slug === "stygo-web-health" ||
        project.slug === "udyamedge" ||
        project.slug === "bitdevxp"
      );
    }
    if (activeTab === "frontend") {
      return (
        project.category === "Frontend Experience" ||
        project.category === "Personal Brand Platform"
      );
    }
    if (activeTab === "client-work") {
      return project.category === "Client Work" || project.slug === "raibyrai";
    }
    return true;
  });

  return (
    <div className="container-studio">
      {/* Header */}
      <RevealOnScroll>
        <div className="section-index">Work</div>
        <h1 className="mb-4">
          Selected
          <br />
          <span className="text-editorial">projects.</span>
        </h1>
        <p
          className="text-lg md:text-xl max-w-xl mb-16"
          style={{ color: "var(--foreground-secondary)" }}
        >
          A curated collection of products, client engagements, and
          experiments — each built with intention.
        </p>
      </RevealOnScroll>

      {/* Filtering tabs */}
      <RevealOnScroll delay={0.1}>
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-foreground/5 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 text-xs font-sans uppercase tracking-widest transition-colors duration-300 ${
                activeTab === tab.id
                  ? "text-foreground font-medium"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {/* Cards Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Link href={`/work/${project.slug}`} className="block">
                {/* Image Card Header */}
                <div
                  className="aspect-video w-full mb-6 rounded-lg relative overflow-hidden border border-foreground/5 flex items-center justify-center p-8 transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-lg"
                  style={{
                    background: projectGradients[project.slug] || "var(--color-grey-900)",
                  }}
                >
                  {/* Real Image Background */}
                  {projectImages[project.slug] && (
                    <>
                      <img
                        src={projectImages[project.slug]}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                    </>
                  )}

                  {/* Grid Pattern inside Card */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 text-xs font-mono text-white/55 group-hover:text-white/80 transition-colors">
                    {project.role}
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-mono text-white/55 group-hover:text-white/80 transition-colors">
                    {project.timeline || "Active"}
                  </div>
                  
                  <div className="text-center z-10 transition-transform duration-500 group-hover:scale-105">
                    <span className="text-2xs uppercase tracking-widest text-white/60 mb-2 block font-sans">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white font-normal">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Arrow Icon */}
                  <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>

                {/* Metadata */}
                <div className="px-1">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-2xs uppercase tracking-widest border border-foreground/5 rounded-full bg-foreground/[0.02] text-foreground-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    {project.shortOutcome}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
