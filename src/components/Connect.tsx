"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const links = [
  {
    label: "Email",
    href: "mailto:sonawanesarthak00@gmail.com",
    display: "sonawanesarthak00@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/SARTHAKSONAWANE01",
    display: "github.com/SARTHAKSONAWANE01",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sarthak-sonawane-0aa583344",
    display: "linkedin.com/in/sarthak-sonawane",
    external: true,
  },
];

export default function Connect() {
  return (
    <section id="connect" className="section-spacing">
      <div className="container-studio">
        <RevealOnScroll>
          <div className="section-index">08 — Connect</div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="text-display mb-8">
            Let&rsquo;s build
            <br />
            something{" "}
            <span className="text-editorial">together.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p
            className="text-lg md:text-xl max-w-xl mb-12"
            style={{ color: "var(--foreground-secondary)" }}
          >
            Have a project in mind, want to collaborate, or just want to say
            hello? I&rsquo;d love to hear from you.
          </p>
        </RevealOnScroll>

        {/* Links */}
        <div className="space-y-0 mb-12">
          {links.map((link, index) => (
            <RevealOnScroll key={link.label} delay={0.1 * (index + 1) + 0.2}>
              <div>
                <div className="divider" />
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between py-5 md:py-6"
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    <span
                      className="text-xs uppercase tracking-widest w-16 md:w-20"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {link.label}
                    </span>
                    <span className="text-base md:text-lg group-hover:opacity-60 transition-opacity">
                      {link.display}
                    </span>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </RevealOnScroll>
          ))}
          <div className="divider" />
        </div>

        {/* CTA */}
        <RevealOnScroll delay={0.6}>
          <Link href="/contact" className="btn-primary">
            Send a Message
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
