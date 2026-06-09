"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

const roles = [
  "Full Stack Developer.",
  "Product Builder.",
  "Problem Solver.",
  "Future Founder.",
];

export default function Hero() {
  const [greeting, setGreeting] = useState("Hello");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Letter-by-letter animation for the headline
  const headlineText = "I\u2019m Sarthak.";
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.04,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-28 md:pt-36 pb-12 md:pb-16 relative overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container-studio relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Badge + Section Index */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-8 justify-between border-b border-foreground/5 pb-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="section-index !mb-0">01 — Introduction</div>
              <span className="text-xs uppercase tracking-widest font-mono opacity-40">Sarthak Dev Studio</span>
            </div>

          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-base md:text-lg mb-6"
            style={{ color: "var(--foreground-secondary)" }}
            variants={itemVariants}
          >
            {greeting}
          </motion.p>

          {/* Main Headline — letter-by-letter */}
          <div className="max-w-5xl">
            <motion.h1
              className="text-display mb-4"
              initial="hidden"
              animate="visible"
            >
              {headlineText.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  style={{ display: "inline-block" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Morphing Role Title */}
            <div className="h-[1.1em] relative overflow-hidden mb-8" style={{ fontSize: "var(--text-display)" }}>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  className="text-display absolute top-0 left-0"
                  style={{ color: "var(--foreground-secondary)" }}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {roles[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p
              className="text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
              variants={itemVariants}
            >
              Building digital products from idea to deployment — where engineering meets design meets business thinking.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 450, damping: 15 }}
            >
              <a
                href="https://www.linkedin.com/in/sarthak-sonawane-0aa583344"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto inline-flex justify-center items-center gap-2"
              >
                <span>Let&rsquo;s Connect</span>
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        onClick={() => {
          const target = document.getElementById("identity");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 group bg-transparent border-none"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >

        <motion.div
          className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-foreground/30 transition-colors"
          whileHover={{ y: 2 }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground-secondary"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
