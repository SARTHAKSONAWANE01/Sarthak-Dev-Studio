"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";

const links = [
  {
    label: "Email",
    href: "mailto:sonawanesarthak00@gmail.com",
    display: "sonawanesarthak00@gmail.com",
    canCopy: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    )
  },
  {
    label: "GitHub",
    href: "https://github.com/SARTHAKSONAWANE01",
    display: "github.com/SARTHAKSONAWANE01",
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sarthak-sonawane-0aa583344",
    display: "linkedin.com/in/sarthak-sonawane",
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
];

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        style={{ x: springX, y: springY }}
      >
        <Link href={href} className="btn-primary inline-flex">
          {children}
        </Link>
      </motion.div>
    </div>
  );
}

export default function Connect() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
                      className="text-xs uppercase tracking-widest w-16 md:w-20 flex items-center gap-2"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {link.icon}
                      <span className="hidden sm:inline">{link.label}</span>
                    </span>
                    <span className="text-base md:text-lg group-hover:opacity-60 transition-opacity flex items-center gap-3">
                      {link.display}
                      {link.canCopy && (
                        <button
                          onClick={(e) => handleCopy(e, link.display)}
                          className="px-2 py-0.5 text-2xs uppercase tracking-widest border border-foreground/10 hover:border-foreground/30 rounded bg-background transition-colors text-foreground-muted"
                          title="Copy Email"
                        >
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      )}
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
          <MagneticButton href="/contact">
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
          </MagneticButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}
