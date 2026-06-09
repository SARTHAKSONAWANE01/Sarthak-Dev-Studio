"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { title: "Work", path: "/work" },
  { title: "Capabilities", path: "/capabilities" },
  { title: "Building Now", path: "/building-now" },
  { title: "Philosophy", path: "/philosophy" },
  { title: "Connect", path: "/connect" },
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
            ? "bg-white/95 backdrop-blur-md border-b border-foreground/5 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)]"
            : "bg-transparent py-2"
        )}
      >
        <div className="container-studio flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/#hero"
            className="hover:opacity-60 transition-opacity flex items-center h-8 md:h-10"
          >
            <img
              src="/logo.png"
              alt="Sarthak Dev Studio"
              className="h-full w-auto object-contain"
              style={{ maxHeight: "100%" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="nav-link"
              >
                {item.title}
              </Link>
            ))}
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

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
