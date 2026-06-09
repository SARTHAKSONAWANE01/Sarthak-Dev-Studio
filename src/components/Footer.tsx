"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatted = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setTime(formatted);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="section-spacing" style={{ paddingTop: "clamp(40px, 6vw, 80px)" }}>
      <div className="container-studio">
        <div className="divider mb-12" />

        <div className="grid md:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-2">Sarthak Dev Studio</h3>
            <p className="text-sm" style={{ color: "var(--foreground-muted)" }}>
              Full Stack Developer & Product Builder
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--foreground-muted)" }}>
              Focusing on engineering, user experience, and startup ideas.
            </p>
            {time && (
              <p className="text-xs mt-6 font-mono" style={{ color: "var(--foreground-muted)" }}>
                IST — {time}
              </p>
            )}
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-sans text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--foreground-muted)" }}
            >
              Links
            </h4>
            <div className="space-y-2">
              {[
                { label: "GitHub", href: "https://github.com/SARTHAKSONAWANE01" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/sarthak-sonawane-0aa583344" },
                { label: "Email", href: "mailto:sonawanesarthak00@gmail.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block text-sm hover:opacity-60 transition-opacity"
                  style={{ color: "var(--foreground-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Currently Building */}
          <div>
            <h4
              className="font-sans text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--foreground-muted)" }}
            >
              Currently Building
            </h4>
            <div className="space-y-2">
              <p className="text-sm" style={{ color: "var(--foreground-secondary)" }}>
                Grenomart
              </p>
              <p className="text-sm" style={{ color: "var(--foreground-secondary)" }}>
                Portfolio V2
              </p>
            </div>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="divider mt-16 mb-6" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--foreground-muted)" }}>
            &copy; {currentYear} Sarthak Dev Studio. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest hover:text-foreground-secondary transition-colors"
            style={{ color: "var(--foreground-muted)" }}
          >
            <span>Back to Top</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-y-0.5 transition-transform duration-200"
            >
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
