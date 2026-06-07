import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Sarthak Sonawane — full-stack products, client work, and experimental builds.",
};

export default function WorkPage() {
  const tier1 = projects.filter((p) => p.tier === 1);
  const tier2 = projects.filter((p) => p.tier === 2);

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32">
        <div className="container-studio">
          {/* Header */}
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

          {/* Tier 1 — Featured */}
          <div className="space-y-0 mb-16">
            {tier1.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div className="divider" />
                <div className="py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <span
                      className="text-xs uppercase tracking-widest mb-2 block"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {project.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif group-hover:opacity-60 transition-opacity duration-300">
                      {project.title}
                    </h2>
                  </div>
                  <p
                    className="flex-1 text-sm md:text-base max-w-md"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {project.shortOutcome}
                  </p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 shrink-0"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </Link>
            ))}
            <div className="divider" />
          </div>

          {/* Tier 2 — Other Work */}
          {tier2.length > 0 && (
            <>
              <h3
                className="font-sans text-xs uppercase tracking-widest mb-8"
                style={{ color: "var(--foreground-muted)" }}
              >
                Other Work
              </h3>
              <div className="space-y-0">
                {tier2.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="group block"
                  >
                    <div className="divider" />
                    <div className="py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div className="flex-1">
                        <span
                          className="text-xs uppercase tracking-widest mb-1 block"
                          style={{ color: "var(--foreground-muted)" }}
                        >
                          {project.category}
                        </span>
                        <h3 className="text-xl font-serif group-hover:opacity-60 transition-opacity duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <p
                        className="flex-1 text-sm max-w-sm"
                        style={{ color: "var(--foreground-muted)" }}
                      >
                        {project.shortOutcome}
                      </p>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-20 group-hover:opacity-100 transition-all duration-300 shrink-0"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </div>
                  </Link>
                ))}
                <div className="divider" />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
