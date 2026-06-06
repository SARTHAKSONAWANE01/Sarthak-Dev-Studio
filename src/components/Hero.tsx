"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = React.useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const nameLetters = "DevSarth".split('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isDesktop) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    const tiltX = (y - 0.5) * 10;
    const tiltY = (x - 0.5) * 10;
    
    containerRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current || !isDesktop) return;
    containerRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-6 lg:px-12" 
      id="home"
    >
      <motion.div 
        ref={containerRef}
        style={{ y, opacity, scale }}
        className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left z-10 transition-transform duration-300 ease-out gap-12"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex-1 space-y-8">
          {/* Background elements - updated for new theme */}
          <motion.div 
            className="absolute top-10 left-10 w-60 h-60 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-10 right-10 w-60 h-60 md:w-96 md:h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Enhanced name with neon gradient effect */}
          <div className="relative mb-8">
            <div className="flex justify-center md:justify-start">
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={cn(
                    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-bold",
                    "text-animate-gradient neon-text",
                    "hover:scale-110 transition-all duration-300",
                    "cursor-default select-none"
                  )}
                  whileHover={isDesktop ? {
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  } : {}}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.7 }}
              transition={{ delay: 1, duration: 1 }}
            />
          </div>

          {/* Enhanced subtitle */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-primary mb-8 font-light tracking-wider neon-text"
          >
            Front-End Developer
          </motion.h2>
          
          {/* Enhanced tagline */}
          <motion.div 
            className="max-w-2xl mx-auto md:mx-0 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-foreground font-light">
              Crafting engaging digital experiences through clean, responsive, and interactive web interfaces
            </p>
            <motion.p 
              className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground font-light italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              "Transforming ideas into seamless digital realities"
            </motion.p>
          </motion.div>
          
          {/* Enhanced CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <motion.a 
              href="#projects" 
              className="liquid-button px-6 sm:px-8 py-3 rounded-full text-primary-foreground hover:shadow-lg transition-all duration-300 neon-pulse text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-6 sm:px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 glass-effect text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Enhanced Profile Image with mobile optimization */}
        <motion.div 
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mx-auto">
            {/* Updated animated rings for new theme */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-sm"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Profile image container */}
            <motion.div
              className="absolute inset-2 sm:inset-4 overflow-hidden rounded-full border-2 border-primary/50 flex items-center justify-center glass-effect neon-glow"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={isDesktop ? { scale: 1.03, transition: { duration: 0.3 } } : {}}
            >
              <motion.div className="w-full h-full relative overflow-hidden rounded-full">
                <motion.img
                  src="/lovable-uploads/8bad2e96-5cd8-4990-a0e9-26cb10b6118b.png"
                  alt="Sarthak Sonawane"
                  className="w-full h-full object-cover"
                  initial={{ filter: "grayscale(100%)" }}
                  animate={{ filter: "grayscale(0%)" }}
                  transition={{ delay: 1.2, duration: 1 }}
                  loading="eager"
                />
              </motion.div>
              
              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              />
            </motion.div>
            
            {/* Updated rotating rings for new theme */}
            <motion.div 
              className="absolute -inset-2 sm:-inset-4 rounded-full border border-primary/40"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.a 
          href="#about" 
          aria-label="Scroll down" 
          className="group inline-block"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary transition-colors duration-300 group-hover:text-accent neon-text"
          >
            <path 
              d="M12 5L12 19M12 19L6 13M12 19L18 13" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
