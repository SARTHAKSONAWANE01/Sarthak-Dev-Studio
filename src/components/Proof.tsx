"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";

const proofItems = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Products Shipped", value: 3, suffix: "" },
  { label: "Client Engagements", value: 2, suffix: "" },
  { label: "Technologies Used", value: 15, suffix: "+" },
  { label: "Years Learning & Building", value: 3, suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix,
  delay = 0,
}: {
  value: number;
  suffix: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 30;
      const increment = value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), value);
        setCount(current);

        if (step >= steps) {
          clearInterval(timer);
          setCount(value);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="font-serif text-3xl md:text-5xl mb-3 relative inline-flex items-baseline">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {count}
      </motion.span>
      {suffix && (
        <motion.span
          className="text-2xl md:text-3xl ml-0.5"
          style={{ color: "var(--foreground-secondary)" }}
          initial={{ opacity: 0, x: -8 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {suffix}
        </motion.span>
      )}
    </div>
  );
}

export default function Proof() {
  return (
    <section id="proof" className="section-spacing">
      <div className="container-studio">
        <RevealOnScroll>
          <div className="section-index">06 — Proof</div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="mb-16">
            By the
            <br />
            <span className="text-editorial">numbers.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
          {proofItems.map((item, index) => (
            <RevealOnScroll key={item.label} delay={0.1 * (index + 1)}>
              <div
                className="py-8 md:py-12 text-center relative"
                style={{
                  borderRight:
                    index < proofItems.length - 1
                      ? "1px solid var(--border-color)"
                      : "none",
                }}
              >
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                  delay={0.15 * index}
                />
                {/* Gradient underline accent */}
                <div
                  className="w-8 h-px mx-auto mb-3"
                  style={{
                    background: "linear-gradient(90deg, transparent, var(--color-grey-300), transparent)",
                  }}
                />
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {item.label}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
