import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";

// Generate static routes for all projects
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Dynamic metadata for each case study
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

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

const projectGradients: Record<string, string> = {
  grenomart: "linear-gradient(135deg, #1f1f1f 0%, #0d0d0d 100%)",
  "sarthak-dev-studio": "linear-gradient(135deg, #2a2a2a 0%, #121212 100%)",
  "gta6-landing-page": "linear-gradient(135deg, #1a1a1a 0%, #080808 100%)",
  "client-project": "linear-gradient(135deg, #222222 0%, #0c0c0c 100%)",
  "stygo-web-health": "linear-gradient(135deg, #181818 0%, #050505 100%)",
  bitdevxp: "linear-gradient(135deg, #121212 0%, #333 50%, #1a1a1a 100%)",
  raibyrai: "linear-gradient(135deg, #13241d 0%, #1c3d2f 50%, #0d1a14 100%)",
  udyamedge: "linear-gradient(135deg, #0d0d0d 0%, #292929 50%, #111 100%)",
  "ankitas-studio": "linear-gradient(135deg, #1f1a24 0%, #332a3d 50%, #17121c 100%)",
  "gulbarga-greens": "linear-gradient(135deg, #13241d 0%, #1c3d2f 50%, #0d1a14 100%)",
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;
  const previewImage = projectImages[project.slug];
  const bgGradient = projectGradients[project.slug] || "var(--color-grey-900)";

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24 bg-white">
        <article className="container-studio">
          {/* Breadcrumb / Back Link */}
          <RevealOnScroll>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-3xs uppercase tracking-widest font-mono text-foreground-muted hover:text-foreground transition-colors mb-12"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span>Back to all projects</span>
            </Link>
          </RevealOnScroll>

          {/* Title & Description Header */}
          <header className="mb-16">
            <RevealOnScroll delay={0.1}>
              <div className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-3">
                {project.category}
              </div>
              <h1 className="text-display mb-6 max-w-4xl tracking-tight font-serif leading-none">
                {project.title}
              </h1>
              <p
                className="text-xl md:text-2xl max-w-3xl leading-relaxed font-serif"
                style={{ color: "var(--foreground-secondary)" }}
              >
                {project.description}
              </p>
            </RevealOnScroll>
          </header>

          {/* Immersive Website Preview Showcase */}
          {previewImage && (
            <RevealOnScroll delay={0.2}>
              <div
                className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl relative overflow-hidden border border-foreground/5 p-4 md:p-8 flex items-center justify-center mb-16 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)]"
                style={{ background: bgGradient }}
              >
                {/* Mock Browser Frame */}
                <div className="w-full h-full rounded-lg bg-neutral-900 shadow-2xl border border-white/5 overflow-hidden flex flex-col relative">
                  {/* Browser Header Bar */}
                  <div className="h-6 sm:h-9 bg-neutral-800 border-b border-white/5 px-3 flex items-center gap-2 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div className="mx-auto w-1/3 sm:w-1/2 h-3.5 sm:h-5 rounded bg-neutral-900 border border-white/5 text-[8px] sm:text-2xs font-mono flex items-center justify-center text-white/30 truncate px-2 select-none">
                      {project.liveUrl || `localhost:3000/work/${project.slug}`}
                    </div>
                  </div>
                  
                  {/* Screenshot Image */}
                  <div className="flex-1 relative overflow-hidden bg-neutral-950">
                    <img
                      src={previewImage}
                      alt={`${project.title} Preview Showcase`}
                      className="w-full h-full object-cover object-top select-none pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Quick Technical Specs Board */}
          <RevealOnScroll delay={0.25}>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y mb-16"
              style={{ borderColor: "var(--border-color)" }}
            >
              <div>
                <span className="block text-3xs font-mono uppercase tracking-widest text-foreground-muted mb-2">Role</span>
                <span className="font-medium text-sm md:text-base text-foreground">{project.role}</span>
              </div>
              {project.teamSize && (
                <div>
                  <span className="block text-3xs font-mono uppercase tracking-widest text-foreground-muted mb-2">Team</span>
                  <span className="font-medium text-sm md:text-base text-foreground">{project.teamSize}</span>
                </div>
              )}
              {project.timeline && (
                <div>
                  <span className="block text-3xs font-mono uppercase tracking-widest text-foreground-muted mb-2">Timeline</span>
                  <span className="font-medium text-sm md:text-base text-foreground">{project.timeline}</span>
                </div>
              )}
              <div>
                <span className="block text-3xs font-mono uppercase tracking-widest text-foreground-muted mb-2">Access Project</span>
                <div className="flex flex-col gap-1.5 mt-0.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-foreground font-semibold hover:underline"
                    >
                      <span>Visit Live Website</span>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-foreground-muted hover:text-foreground transition-colors font-mono"
                    >
                      <span>Source Repository</span>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Key Metrics / Highlights Monospace Panel */}
          {caseStudy.metrics && (
            <RevealOnScroll delay={0.3}>
              <div className="mb-16">
                <span className="block text-3xs font-mono uppercase tracking-widest text-foreground-muted mb-4">
                  01 // Development Highlights & Key Metrics
                </span>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {caseStudy.metrics.split("·").map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="border border-foreground/5 p-6 bg-foreground/[0.01] hover:border-foreground/10 transition-colors flex flex-col justify-between"
                    >
                      <span className="text-3xs font-mono text-foreground-muted uppercase tracking-wider block mb-4">
                        spec_0{mIdx + 1}
                      </span>
                      <span className="text-base font-serif text-foreground leading-snug font-medium">
                        {metric.trim()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Multi-Column Case Study Narrative Flow */}
          <div className="space-y-4">
            
            {/* Overview & Core Problem */}
            <RevealOnScroll>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 border-t border-foreground/5">
                <div className="lg:col-span-4">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-foreground-muted sticky top-24">
                    02 // Overview & Problem
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  {caseStudy.overview && (
                    <div>
                      <h3 className="text-3xs font-mono text-foreground-muted uppercase tracking-wider mb-2">The Situation</h3>
                      <p className="text-base md:text-lg leading-relaxed text-foreground-secondary">{caseStudy.overview}</p>
                    </div>
                  )}
                  {caseStudy.problem && (
                    <div>
                      <h3 className="text-3xs font-mono text-foreground-muted uppercase tracking-wider mb-2">The Core Challenge</h3>
                      <p className="text-base md:text-lg leading-relaxed text-foreground-secondary">{caseStudy.problem}</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>

            {/* Research & Approach */}
            <RevealOnScroll>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 border-t border-foreground/5">
                <div className="lg:col-span-4">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-foreground-muted sticky top-24">
                    03 // Strategy & Approach
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  {caseStudy.research && (
                    <div>
                      <h3 className="text-3xs font-mono text-foreground-muted uppercase tracking-wider mb-2">Insights & Discovery</h3>
                      <p className="text-base md:text-lg leading-relaxed text-foreground-secondary">{caseStudy.research}</p>
                    </div>
                  )}
                  {caseStudy.approach && (
                    <div>
                      <h3 className="text-3xs font-mono text-foreground-muted uppercase tracking-wider mb-2">Architectural Blueprint</h3>
                      <p className="text-base md:text-lg leading-relaxed text-foreground-secondary">{caseStudy.approach}</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>

            {/* Development & Implementation Challenges */}
            <RevealOnScroll>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 border-t border-foreground/5">
                <div className="lg:col-span-4">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-foreground-muted sticky top-24">
                    04 // Implementation & Hurdles
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  {caseStudy.development && (
                    <div>
                      <h3 className="text-3xs font-mono text-foreground-muted uppercase tracking-wider mb-2">Execution & Build</h3>
                      <p className="text-base md:text-lg leading-relaxed text-foreground-secondary">{caseStudy.development}</p>
                    </div>
                  )}
                  {caseStudy.challenges && (
                    <div>
                      <h3 className="text-3xs font-mono text-foreground-muted uppercase tracking-wider mb-2">Technical Bottlenecks</h3>
                      <p className="text-base md:text-lg leading-relaxed text-foreground-secondary">{caseStudy.challenges}</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>

            {/* Outcomes, Results, & Lessons Learned */}
            <RevealOnScroll>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 border-t border-foreground/5">
                <div className="lg:col-span-4">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-foreground-muted sticky top-24">
                    05 // Outcome & Lessons
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  {caseStudy.results && (
                    <div>
                      <h3 className="text-3xs font-mono text-foreground-muted uppercase tracking-wider mb-2">Final Deliverable Impact</h3>
                      <p className="text-base md:text-lg leading-relaxed text-foreground-secondary">{caseStudy.results}</p>
                    </div>
                  )}
                  {caseStudy.lessonsLearned && (
                    <div>
                      <h3 className="text-3xs font-mono text-foreground-muted uppercase tracking-wider mb-2">Key Takeaways</h3>
                      <p className="text-base md:text-lg leading-relaxed text-foreground-secondary">{caseStudy.lessonsLearned}</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>

            {/* Tech Stack Breakdown */}
            <RevealOnScroll>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 border-t border-foreground/5">
                <div className="lg:col-span-4">
                  <h2 className="text-xs font-mono uppercase tracking-widest text-foreground-muted">
                    06 // Technical Specifications
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 border rounded-full text-sm font-medium hover:border-foreground/30 hover:bg-neutral-50 transition-colors text-foreground"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Next Steps / Future Scope */}
            {caseStudy.nextSteps && (
              <RevealOnScroll>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 border-t border-b border-foreground/5">
                  <div className="lg:col-span-4">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-foreground-muted">
                      07 // Roadmap & Next Steps
                    </h2>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-base md:text-lg leading-relaxed text-foreground-secondary">
                      {caseStudy.nextSteps}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            )}

          </div>

          {/* Direct CTA at bottom */}
          {project.liveUrl && (
            <RevealOnScroll>
              <div className="text-center py-20 mt-12 border-t border-foreground/5">
                <span className="text-3xs font-mono uppercase tracking-widest text-foreground-muted block mb-3">Project Complete</span>
                <h3 className="text-4xl font-serif mb-8 text-foreground">Experience the live build</h3>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex justify-center items-center gap-2"
                >
                  <span>Visit Live Website</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                  </svg>
                </a>
              </div>
            </RevealOnScroll>
          )}

        </article>
      </main>
      <Footer />
    </PageTransition>
  );
}
