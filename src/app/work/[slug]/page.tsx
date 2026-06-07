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

// Case Study Section Component
function CaseStudySection({ title, content }: { title: string; content?: string }) {
  if (!content) return null;

  return (
    <RevealOnScroll>
      <div className="grid md:grid-cols-12 gap-8 md:gap-16 py-12 md:py-20 border-t border-color-border" style={{ borderColor: 'var(--border-color)' }}>
        <div className="md:col-span-4">
          <h2 className="text-xl font-sans font-medium uppercase tracking-widest text-xs sticky top-24" style={{ color: "var(--foreground-muted)" }}>
            {title}
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--foreground)" }}>
            {content}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="container-studio">
          
          {/* Back Link */}
          <RevealOnScroll>
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-16 hover:opacity-60 transition-opacity"
              style={{ color: "var(--foreground-secondary)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Work
            </Link>
          </RevealOnScroll>

          {/* Hero Section */}
          <header className="mb-24 md:mb-32">
            <RevealOnScroll delay={0.1}>
              <div className="section-index">{project.category}</div>
              <h1 className="text-display mb-8 max-w-4xl leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl leading-relaxed" style={{ color: "var(--foreground-secondary)" }}>
                {project.description}
              </p>
            </RevealOnScroll>

            {/* Meta Grid */}
            <RevealOnScroll delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 py-8 border-y" style={{ borderColor: 'var(--border-color)' }}>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--foreground-muted)" }}>Role</div>
                  <div className="font-medium">{project.role}</div>
                </div>
                {project.teamSize && (
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--foreground-muted)" }}>Team</div>
                    <div className="font-medium">{project.teamSize}</div>
                  </div>
                )}
                {project.timeline && (
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--foreground-muted)" }}>Timeline</div>
                    <div className="font-medium">{project.timeline}</div>
                  </div>
                )}
                <div>
                  <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--foreground-muted)" }}>Links</div>
                  <div className="flex flex-col gap-1">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline flex items-center gap-1">
                        Live Site
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline flex items-center gap-1">
                        Repository
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </header>

          {/* Case Study Content */}
          <div className="max-w-5xl mx-auto">
            <CaseStudySection title="Overview" content={caseStudy.overview} />
            <CaseStudySection title="Problem" content={caseStudy.problem} />
            <CaseStudySection title="Research" content={caseStudy.research} />
            <CaseStudySection title="Approach" content={caseStudy.approach} />
            <CaseStudySection title="Development" content={caseStudy.development} />
            <CaseStudySection title="Challenges" content={caseStudy.challenges} />
            <CaseStudySection title="Results" content={caseStudy.results} />
            
            {/* Tech Stack */}
            <RevealOnScroll>
              <div className="grid md:grid-cols-12 gap-8 md:gap-16 py-12 md:py-20 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <div className="md:col-span-4">
                  <h2 className="text-xl font-sans font-medium uppercase tracking-widest text-xs" style={{ color: "var(--foreground-muted)" }}>
                    Tech Stack
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-4 py-2 border rounded-full text-sm" style={{ borderColor: 'var(--border-color)', color: 'var(--foreground)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <CaseStudySection title="Lessons Learned" content={caseStudy.lessonsLearned} />
            <CaseStudySection title="Next Steps" content={caseStudy.nextSteps} />
            {caseStudy.metrics && <CaseStudySection title="Key Metrics" content={caseStudy.metrics} />}
          </div>

        </article>
      </main>
      <Footer />
    </PageTransition>
  );
}
