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
  "Digital Product Studio.",
  "Engineering & Design.",
  "Idea to Deployment.",
  "Startup Growth Partners.",
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
  const [isStackHovered, setIsStackHovered] = useState(false);
  const [isOverlayHovered, setIsOverlayHovered] = useState(false);
  
  // Connect Card is initially at index 1 (second from bottom).
  // UdyamEdge is at index 3 (top of the stack).
  const [projects, setProjects] = useState([
    {
      title: "Ankita's Studio",
      category: "Creative Portfolio",
      image: "/projects/ankitas-studio.png",
      href: "/work/ankitas-studio",
      rotation: 6,
      xOffset: 0,
      yOffset: 32,
      isConnectCard: false,
    },
    {
      title: "Start Collaboration",
      category: "Your Project Next",
      image: "",
      href: "/connect",
      rotation: -2,
      xOffset: -6,
      yOffset: 24,
      isConnectCard: true,
    },
    {
      title: "Grenomart",
      category: "E-Commerce System",
      image: "/projects/grenomart.png",
      href: "/work/grenomart",
      rotation: 2,
      xOffset: 12,
      yOffset: 16,
      isConnectCard: false,
    },
    {
      title: "UdyamEdge",
      category: "B2B & Startup Dev",
      image: "/projects/udyamedge.png",
      href: "/work/udyamedge",
      rotation: -4,
      xOffset: -12,
      yOffset: 0,
      isConnectCard: false,
    },
  ]);

  const lastShuffleTime = useRef(0);
  
  // Rate-limiting helper to keep animations buttery smooth
  const canShuffle = useCallback(() => {
    const now = Date.now();
    if (now - lastShuffleTime.current > 500) {
      lastShuffleTime.current = now;
      return true;
    }
    return false;
  }, []);

  // Standard 3-cycle shuffle for resting stack to keep Connect Card at index 1
  const handleShuffle = useCallback(() => {
    setProjects((prev) => {
      const next = [...prev];
      const p0 = next[0];
      const p2 = next[2];
      const p3 = next[3];
      next[0] = p3;
      next[2] = p0;
      next[3] = p2;
      return next;
    });
  }, []);

  const handleShuffleReverse = useCallback(() => {
    setProjects((prev) => {
      const next = [...prev];
      const p0 = next[0];
      const p2 = next[2];
      const p3 = next[3];
      next[0] = p2;
      next[2] = p3;
      next[3] = p0;
      return next;
    });
  }, []);

  // Full 4-card cycling for lightbox
  const handleLightboxShuffle = useCallback(() => {
    setProjects((prev) => {
      const next = [...prev];
      const topCard = next.pop();
      if (topCard) next.unshift(topCard);
      return next;
    });
  }, []);

  const handleLightboxShuffleReverse = useCallback(() => {
    setProjects((prev) => {
      const next = [...prev];
      const bottomCard = next.shift();
      if (bottomCard) next.push(bottomCard);
      return next;
    });
  }, []);

  // Restore resting layout order on exit: Connect Card at index 1, active card at index 3
  const restoreStackOrder = useCallback((currentProjects: typeof projects) => {
    const active = currentProjects[3];
    const connectCard = currentProjects.find((p) => p.isConnectCard)!;
    const otherProjects = currentProjects.filter(
      (p) => !p.isConnectCard && p.title !== active.title
    );

    if (!active.isConnectCard) {
      return [
        otherProjects[0],
        connectCard,
        otherProjects[1],
        active,
      ];
    } else {
      const udyamEdge = currentProjects.find((p) => p.title === "UdyamEdge")!;
      const remaining = currentProjects.filter(
        (p) => p.title !== "UdyamEdge" && !p.isConnectCard
      );
      return [
        remaining[0],
        connectCard,
        remaining[1],
        udyamEdge,
      ];
    }
  }, []);

  // Auto-shuffle the resting deck every 4.5 seconds when not hovered
  useEffect(() => {
    if (isStackHovered || isOverlayHovered) return;
    const interval = setInterval(() => {
      handleShuffle();
    }, 4500);
    return () => clearInterval(interval);
  }, [isStackHovered, isOverlayHovered, handleShuffle]);

  const showLightbox = (isStackHovered || isOverlayHovered) && projects.length > 0;

  // Lock body scroll when lightbox is active to prevent page scrolling
  useEffect(() => {
    if (showLightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLightbox]);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-w-[480px] md:max-w-[530px] lg:max-w-[500px] xl:max-w-[560px] h-[340px] sm:h-[380px] lg:h-[400px] flex items-center justify-center cursor-pointer select-none"
        onMouseEnter={() => setIsStackHovered(true)}
        onMouseLeave={() => {
          setIsStackHovered(false);
          if (!isOverlayHovered) {
            setProjects((prev) => restoreStackOrder(prev));
          }
        }}
      >
        {projects.map((project, idx) => {
          const total = projects.length;
          
          let rot = project.rotation;
          let x = project.xOffset;
          let y = project.yOffset;
          let scale = 1 - (total - 1 - idx) * 0.04;
          let zIndex = idx + 10;

          return (
            <motion.div
              key={project.title}
              className="absolute w-[88%] aspect-[1.5] bg-white rounded-lg border border-foreground/10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
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
            >
              {/* Browser Mock Header */}
              <div className="h-3.5 bg-neutral-100/90 border-b border-foreground/5 flex items-center px-2.5 gap-1 justify-between select-none">
                <div className="flex gap-0.5">
                  <div className="w-[3px] h-[3px] rounded-full bg-neutral-300" />
                  <div className="w-[3px] h-[3px] rounded-full bg-neutral-300" />
                  <div className="w-[3px] h-[3px] rounded-full bg-neutral-300" />
                </div>
                <div className="text-[6px] font-mono text-neutral-400 tracking-wider truncate max-w-[95px]">
                  {project.isConnectCard ? "sarthakdevstudio.com" : `${project.title.toLowerCase().replace("'", "").replace(" ", "")}.com`}
                </div>
                <div className="w-2" />
              </div>

              {/* Card Thumbnail Body */}
              <div className="relative w-full h-[calc(100%-14px)] bg-neutral-50 overflow-hidden">
                {project.isConnectCard ? (
                  <div className="w-full h-full bg-black text-white flex flex-col justify-between p-4 font-mono relative overflow-hidden select-none">
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:16px_16px]" />
                    <div className="flex justify-between items-center z-10 border-b border-white/10 pb-1.5">
                      <span className="text-[6px] uppercase tracking-widest text-white/50">Collab</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div className="my-auto z-10 flex flex-col gap-0.5">
                      <h4 className="font-serif text-[11px] sm:text-xs text-white tracking-tight leading-none">
                        Your Project Next?
                      </h4>
                    </div>
                    <div className="z-10 flex justify-between items-center text-[5px] text-white/40 border-t border-white/10 pt-1.5">
                      <span>Click to connect</span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
        <span className="absolute text-[10px] uppercase tracking-widest font-mono opacity-40">
          Interaction Active
        </span>
      </div>

      {/* Enlarged Focus Lightbox on Hover */}
      <AnimatePresence>
        {showLightbox && (
          <>
            {/* Blurry Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/[0.12] backdrop-blur-[6px] z-40 pointer-events-none"
              transition={{ duration: 0.25 }}
            />
            
            {/* Carousel Interactive Viewport */}
            <div
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
              onWheel={(e) => {
                e.preventDefault();
                if (canShuffle()) {
                  if (e.deltaY > 0) {
                    handleLightboxShuffle();
                  } else {
                    handleLightboxShuffleReverse();
                  }
                }
              }}
            >
              <div 
                className="relative w-full max-w-[760px] aspect-[1.5] flex items-center justify-center pointer-events-auto"
                onMouseEnter={() => setIsOverlayHovered(true)}
                onMouseLeave={() => {
                  setIsOverlayHovered(false);
                  if (!isStackHovered) {
                    setProjects((prev) => restoreStackOrder(prev));
                  }
                }}
              >
                {/* Render the 3 visible carousel cards using mapped offset indices */}
                {[-1, 0, 1].map((offset) => {
                  // Mapped Indices: Left (index 0), Center (index 3), Right (index 2)
                  // This places the Connect Card (index 1) in the hidden/last position initially
                  let projectIdx = 3;
                  if (offset === -1) projectIdx = 0;
                  if (offset === 1) projectIdx = 2;

                  const project = projects[projectIdx];
                  const isCenter = offset === 0;

                  // Define dynamic styles based on position
                  let x = "0%";
                  let scale = 1;
                  let rot = 0;
                  let opacity = 1;
                  let cursor = isCenter ? "pointer" : "pointer";

                  if (offset === -1) {
                    x = "-106%";
                    scale = 0.8;
                    rot = -5;
                    opacity = 0.45;
                  } else if (offset === 1) {
                    x = "106%";
                    scale = 0.8;
                    rot = 5;
                    opacity = 0.45;
                  }

                  return (
                    <motion.div
                      key={project.title + offset}
                      onMouseEnter={() => {
                        if (offset === -1 && canShuffle()) {
                          handleLightboxShuffleReverse();
                        } else if (offset === 1 && canShuffle()) {
                          handleLightboxShuffle();
                        }
                      }}
                      onClick={(e) => {
                        if (offset === -1) {
                          e.preventDefault();
                          if (canShuffle()) handleLightboxShuffleReverse();
                        } else if (offset === 1) {
                          e.preventDefault();
                          if (canShuffle()) handleLightboxShuffle();
                        }
                      }}
                      whileHover={!isCenter ? { scale: 0.85, opacity: 0.75, x: offset === -1 ? "-102%" : "102%" } : { scale: 1.02 }}
                      initial={{ opacity: 0, scale: 0.7, x: offset === -1 ? "-150%" : offset === 1 ? "150%" : "0%", y: "-50%" }}
                      animate={{ opacity, scale, x, y: "-50%", rotate: rot }}
                      exit={{ opacity: 0, scale: 0.7, x: offset === -1 ? "-150%" : offset === 1 ? "150%" : "0%" }}
                      transition={{ type: "spring", stiffness: 280, damping: 24 }}
                      className="absolute top-1/2 left-1/2 w-full h-full bg-white rounded-xl border border-foreground/10 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] group"
                      style={{ originX: 0.5, originY: 0.5, cursor, zIndex: isCenter ? 50 : 30 }}
                    >
                      <Link href={project.href} className="block w-full h-full relative" onClick={(e) => !isCenter && e.preventDefault()}>
                        {/* Browser Header Bar */}
                        <div className="h-6 bg-neutral-100/90 border-b border-foreground/5 flex items-center px-4 gap-2 justify-between">
                          <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                          </div>
                          <div className="text-[9px] font-mono text-neutral-400 tracking-wider truncate max-w-[170px]">
                            {project.isConnectCard ? "sarthakdevstudio.com/connect" : `${project.title.toLowerCase().replace("'", "").replace(" ", "")}.com`}
                          </div>
                          <div className="w-4" />
                        </div>

                        {/* Card Body */}
                        <div className="relative w-full h-[calc(100%-24px)] bg-neutral-50 overflow-hidden">
                          {project.isConnectCard ? (
                            <div className="w-full h-full bg-black text-white flex flex-col justify-between p-6 sm:p-10 font-mono relative overflow-hidden select-none">
                              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
                              
                              <div className="flex justify-between items-center z-10 border-b border-white/10 pb-3">
                                <span className="text-[9px] uppercase tracking-widest text-white/50">Collab — Request</span>
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                              </div>

                              <div className="my-auto z-10 flex flex-col gap-2">
                                <h4 className="font-serif text-3xl sm:text-4xl text-white tracking-tight leading-none">
                                  Your Project Next?
                                </h4>
                                <p className="text-[10px] sm:text-xs text-neutral-400 font-mono leading-relaxed max-w-[260px]">
                                  Let's collaborate to build high-performance products. Open to contract roles & product advisory.
                                </p>
                              </div>

                              <div className="z-10 flex justify-between items-center border-t border-white/10 pt-3">
                                <span className="text-[9px] uppercase tracking-widest text-white/50">Click to connect</span>
                                <div className="px-2.5 py-0.5 border border-white/20 rounded text-[9px] bg-white/5 text-white">
                                  INQUIRY.EXE
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full relative">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                              
                              {/* Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
                                <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest mb-1">
                                  {project.category}
                                </span>
                                <h4 className="font-serif text-xl sm:text-2xl leading-tight flex items-center gap-1.5">
                                  <span>{project.title}</span>
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                                  </svg>
                                </h4>
                              </div>
                            </div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Scroll or Hover to Change Indicator */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/60 tracking-widest uppercase pointer-events-none select-none z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur border border-white/10 flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/70 animate-bounce"
                >
                  <path d="M12 5v14"/>
                  <path d="m19 12-7 7-7-7"/>
                </svg>
                <span>Scroll or hover sides to change</span>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

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
  const headlineText = "Sarthak Dev Studio.";
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
                  We build premium digital products from idea to deployment — where engineering meets design meets business thinking.
                </motion.p>
              </div>


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
