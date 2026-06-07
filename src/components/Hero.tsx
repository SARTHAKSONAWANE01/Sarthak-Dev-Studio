"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

export default function Hero() {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    setGreeting(getGreeting());
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

  const textSecondaryVariants: Variants = {
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

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center section-spacing"
    >
      <div className="container-studio">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Index */}
          <motion.div className="section-index" variants={itemVariants}>
            01 — Introduction
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-base md:text-lg mb-6"
            style={{ color: "var(--foreground-secondary)" }}
            variants={itemVariants}
          >
            {greeting}
          </motion.p>

          {/* Main Headline */}
          <div className="max-w-5xl">
            <motion.h1
              className="text-display mb-8"
              variants={itemVariants}
            >
              I&rsquo;m Sarthak.
            </motion.h1>

            <motion.h2
              className="text-display mb-8"
              style={{ color: "var(--foreground-secondary)" }}
              variants={textSecondaryVariants}
            >
              Full Stack Developer.
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
              variants={itemVariants}
            >
              Building digital products from idea to deployment.
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
              <Link href="/work" className="btn-primary w-full justify-center">
                <span>View Work</span>
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
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 450, damping: 15 }}
            >
              <Link href="/contact" className="btn-secondary w-full justify-center">
                Let&rsquo;s Connect
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
