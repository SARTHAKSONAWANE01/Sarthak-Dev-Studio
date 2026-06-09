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
    <footer className="w-full bg-black text-white py-16 md:py-24 border-t border-white/10 mt-auto">
      <div className="container-studio">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl mb-3 text-white">Sarthak Dev Studio</h3>
            <p className="text-sm text-neutral-400">
              Full Stack Developer & Product Builder
            </p>
            <p className="text-sm mt-1 text-neutral-400">
              Focusing on engineering, user experience, and startup ideas.
            </p>
            {time && (
              <p className="text-xs mt-6 font-mono text-neutral-500">
                IST — {time}
              </p>
            )}
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-sans text-xs uppercase tracking-widest mb-4 text-neutral-500"
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
                  className="block text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Currently Building */}
          <div>
            <h4
              className="font-sans text-xs uppercase tracking-widest mb-4 text-neutral-500"
            >
              Currently Building
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-neutral-300">
                Grenomart
              </p>
              <p className="text-sm text-neutral-300">
                UdyamEdge
              </p>
              <p className="text-sm text-neutral-300">
                Portfolio V2
              </p>
            </div>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {currentYear} Sarthak Dev Studio. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white bg-white/5 transition-all duration-300"
            aria-label="Back to Top"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
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
