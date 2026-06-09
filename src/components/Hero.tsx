"use client";

import { useEffect, useState, useCallback, useRef } from "react";
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

function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;

    const handleResize = () => {
      if (!canvas) return;
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      // Only resize if width changes or height changes significantly (e.g. keyb/url bar toggle on mobile)
      if (newWidth !== lastWidth || Math.abs(newHeight - lastHeight) > 100) {
        width = canvas.width = newWidth;
        height = canvas.height = newHeight;
        lastWidth = newWidth;
        lastHeight = newHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    // Assembly instructions, binary, server commands, and modern code elements
    const techSnippets = [
      "MOV EAX, 0x10",
      "ADD ESP, 8",
      "PUSH EBP",
      "MOV EBP, ESP",
      "SUB ESP, 0x20",
      "CMP EAX, EBX",
      "JMP SHORT 0x04",
      "XOR EAX, EAX",
      "RET",
      "01101100",
      "01101111",
      "01110110",
      "01100101",
      "CALL _init",
      "PUSH RAX",
      "POP RCX",
      "SYSCALL",
      "PUSH RDI",
      "MOV RDI, RDX",
      "LEA RAX, [RSP+8]",
      "JE .L3",
      "NOP",
      "01000001",
      "01010100",
      "git commit -m 'feat'",
      "npm run dev",
      "npm run build",
      "HTTP/1.1 200 OK",
      "GET /api/contact",
      "ssh main@server",
      "const app = next()",
      "docker run -d",
      "kubectl get pods",
      "CREATE TABLE users",
      "SELECT * FROM",
      "await prisma.message",
      "git push origin main",
      "const [state, setState] = useState",
      "useEffect(() => {",
      "export default function",
      "chmod +x deploy.sh",
      "curl -X POST",
    ];

    // Resolve current theme text color to adapt dynamically
    const getThemeColor = () => {
      if (typeof window === "undefined" || !canvas) return { r: 0, g: 0, b: 0 };
      try {
        const style = window.getComputedStyle(canvas);
        const colorStr = style.color || "rgb(0, 0, 0)";
        const match = colorStr.match(/\d+/g);
        if (match && match.length >= 3) {
          return {
            r: parseInt(match[0], 10),
            g: parseInt(match[1], 10),
            b: parseInt(match[2], 10)
          };
        }
      } catch (e) {
        // silent fallback
      }
      return { r: 0, g: 0, b: 0 };
    };

    // Initialize particles
    const particles: Array<{
      x: number;
      y: number;
      text: string;
      speed: number;
      fontSize: number;
      opacity: number;
    }> = [];

    const numParticles = 90; // Increased particle density
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: techSnippets[Math.floor(Math.random() * techSnippets.length)],
        speed: 0.12 + Math.random() * 0.35, // Slightly slower, smoother drift
        fontSize: 11 + Math.floor(Math.random() * 6), // Slightly larger font size
        opacity: 0.08 + Math.random() * 0.16, // Significantly increased opacity range
      });
    }

    // Circuit grid lines layout
    const gridSpacing = 100;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Adapt colors dynamically to page foreground/theme
      const themeColor = getThemeColor();
      const rgbStr = `${themeColor.r}, ${themeColor.g}, ${themeColor.b}`;

      // 1. Draw very faint background grid
      ctx.strokeStyle = `rgba(${rgbStr}, 0.05)`; // Faint grid lines
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw drifting tech snippets
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(${rgbStr}, ${p.opacity})`;
        ctx.font = `${p.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        ctx.fillText(p.text, p.x, p.y);

        // Move particle up (slow drift)
        p.y -= p.speed;

        // Reset particle if it goes off screen
        if (p.y < -30) {
          p.y = height + 30;
          p.x = Math.random() * width;
          p.text = techSnippets[Math.floor(Math.random() * techSnippets.length)];
          p.opacity = 0.08 + Math.random() * 0.16;
        }
      });

      // 3. Draw subtle glowing circuit path lines
      ctx.strokeStyle = `rgba(${rgbStr}, 0.15)`; // Increased visibility for circuit lines
      ctx.lineWidth = 1.5;

      // Left side circuit
      ctx.beginPath();
      ctx.moveTo(width * 0.08, height * 0.25);
      ctx.lineTo(width * 0.18, height * 0.25);
      ctx.lineTo(width * 0.22, height * 0.35);
      ctx.lineTo(width * 0.22, height * 0.65);
      ctx.stroke();

      // Node dot
      ctx.fillStyle = `rgba(${rgbStr}, 0.25)`; // Increased visibility for dots
      ctx.beginPath();
      ctx.arc(width * 0.22, height * 0.65, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Right side circuit
      ctx.beginPath();
      ctx.moveTo(width * 0.92, height * 0.75);
      ctx.lineTo(width * 0.82, height * 0.75);
      ctx.lineTo(width * 0.78, height * 0.65);
      ctx.lineTo(width * 0.78, height * 0.35);
      ctx.stroke();

      // Node dot
      ctx.beginPath();
      ctx.arc(width * 0.78, height * 0.35, 3.5, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}

function WorksPreviewStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isStackHovered, setIsStackHovered] = useState(false);

  const stackProjects = [
    {
      title: "UdyamEdge",
      category: "B2B & Startup Dev",
      image: "/projects/udyamedge.png",
      href: "/work/udyamedge",
      rotation: -4,
      xOffset: -12,
      yOffset: 0,
    },
    {
      title: "Grenomart",
      category: "E-Commerce System",
      image: "/projects/grenomart.png",
      href: "/work/grenomart",
      rotation: 2,
      xOffset: 12,
      yOffset: 16,
    },
    {
      title: "Ankita's Studio",
      category: "Creative Portfolio",
      image: "/projects/ankitas-studio.png",
      href: "/work/ankitas-studio",
      rotation: 6,
      xOffset: 0,
      yOffset: 32,
    },
  ];

  return (
    <div
      className="relative w-full aspect-[4/3] sm:aspect-square max-w-[440px] md:max-w-[480px] lg:max-w-[460px] xl:max-w-[500px] h-[340px] sm:h-[400px] flex items-center justify-center cursor-pointer select-none"
      onMouseEnter={() => setIsStackHovered(true)}
      onMouseLeave={() => {
        setIsStackHovered(false);
        setHoveredIndex(null);
      }}
    >
      {stackProjects.map((project, idx) => {
        const isHovered = hoveredIndex === idx;
        
        let rot = project.rotation;
        let x = project.xOffset;
        let y = project.yOffset;
        let scale = 1 - (stackProjects.length - 1 - idx) * 0.045;
        let zIndex = idx + 10;

        if (isStackHovered) {
          // Fan-out animation on hover container
          rot = (idx - 1) * 9; // -9deg, 0deg, 9deg
          x = (idx - 1) * 45;  // -45px, 0px, 45px
          y = -10;
        }

        if (isHovered) {
          rot = 0;
          x = (idx - 1) * 20;
          y = -35;
          scale = 1.06;
          zIndex = 50; // Pull active card to absolute front
        }

        return (
          <motion.div
            key={project.title}
            className="absolute w-[82%] aspect-[1.5] bg-white rounded-lg border border-foreground/10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] transition-shadow duration-500 group"
            style={{ originX: 0.5, originY: 0.5 }}
            animate={{
              rotate: rot,
              x: x,
              y: y,
              scale: scale,
              zIndex: zIndex,
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 20,
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={project.href} className="block w-full h-full relative">
              {/* Sleek Browser Frame Header */}
              <div className="h-6 bg-neutral-100/90 border-b border-foreground/5 flex items-center px-3 gap-1.5 justify-between">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                </div>
                <div className="text-[9px] font-mono text-neutral-400 tracking-wider truncate max-w-[150px]">
                  {project.title.toLowerCase().replace("'", "").replace(" ", "")}.com
                </div>
                <div className="w-4" /> {/* Spacer */}
              </div>

              {/* Page View Image */}
              <div className="relative w-full h-[calc(100%-24px)] bg-neutral-50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-[1.03]"
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest mb-0.5">
                    {project.category}
                  </span>
                  <h4 className="font-serif text-lg leading-tight flex items-center gap-1.5">
                    <span>{project.title}</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    >
                      <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                    </svg>
                  </h4>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

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
      
      {/* High-fidelity Tech Background Canvas */}
      <TechBackground />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bio & Title */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Availability Badge + Section Index */}
              <motion.div
                className="flex items-center gap-3 sm:gap-6 mb-8 border-b border-foreground/5 pb-6"
                variants={itemVariants}
              >
                <div className="section-index !mb-0">01 — Introduction</div>
                <span className="text-xs uppercase tracking-widest font-mono opacity-40">Sarthak Dev Studio</span>
              </motion.div>

              {/* Greeting */}
              <motion.p
                className="text-base md:text-lg mb-6 font-mono opacity-80"
                style={{ color: "var(--foreground-secondary)" }}
                variants={itemVariants}
              >
                {greeting}
              </motion.p>

              {/* Main Headline — letter-by-letter with depth */}
              <div className="max-w-6xl">
                <motion.h1
                  className="text-display mb-4 text-depth animate-reveal"
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

                {/* Morphing Role Title with depth */}
                <div className="h-[1.1em] relative overflow-hidden mb-8" style={{ fontSize: "var(--text-display)" }}>
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={roleIndex}
                      className="text-display absolute top-0 left-0 text-depth"
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

              {/* CTAs - Connect Button */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 450, damping: 15 }}
                >
                  <Link
                    href="/connect"
                    className="btn-primary w-full sm:w-auto inline-flex justify-center items-center gap-2 cursor-pointer"
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
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Works Previews */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center mt-12 lg:mt-0">
            <WorksPreviewStack />
          </div>
        </div>
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
