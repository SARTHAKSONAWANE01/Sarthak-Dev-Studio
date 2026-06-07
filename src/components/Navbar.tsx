"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { title: "Work", path: "/work" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed w-full top-0 left-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-sm border-b border-black/5"
            : "bg-transparent"
        )}
      >
        <div className="container-studio flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-lg md:text-xl tracking-tight hover:opacity-60 transition-opacity"
            style={{ color: "var(--foreground)" }}
          >
            Sarthak Dev Studio
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={cn(
                  "nav-link",
                  pathname === item.path && "nav-link-active"
                )}
              >
                {item.title}
              </Link>
            ))}
            <Link href="/resume" className="btn-secondary !py-2 !px-5 text-xs">
              Resume
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <motion.span
              className="block w-6 h-px mb-1.5"
              style={{ backgroundColor: mobileMenuOpen ? "var(--color-white)" : "var(--foreground)" }}
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                translateY: mobileMenuOpen ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px mb-1.5"
              style={{ backgroundColor: mobileMenuOpen ? "var(--color-white)" : "var(--foreground)" }}
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-px"
              style={{ backgroundColor: mobileMenuOpen ? "var(--color-white)" : "var(--foreground)" }}
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                translateY: mobileMenuOpen ? -5 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu — dark overlay for contrast */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "font-serif text-4xl transition-colors duration-300",
                      pathname === item.path
                        ? "text-white"
                        : "text-white/40 hover:text-white"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.4,
                  delay: navItems.length * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 mt-4 px-8 py-3 text-xs font-sans font-medium uppercase tracking-widest text-white border border-white/30 hover:border-white transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resume
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
