"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CursorTrail {
  x: number;
  y: number;
  id: number;
}

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [trails, setTrails] = useState<CursorTrail[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX - 16);
      cursorY.set(clientY - 16);
      setIsVisible(true);

      // Add trail points
      setTrails(prevTrails => {
        const newTrail = {
          x: clientX,
          y: clientY,
          id: Date.now() + Math.random()
        };
        const updatedTrails = [newTrail, ...prevTrails.slice(0, 8)];
        return updatedTrails;
      });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('a, button, [role="button"], input, textarea, select, .cursor-pointer');
      setIsPointer(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile/touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference">
      {/* Paint brush trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            background: `linear-gradient(45deg, rgba(255,255,255,${0.8 - index * 0.1}), rgba(200,200,200,${0.6 - index * 0.08}))`,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 border-white"
          animate={{
            scale: isPointer ? 1.5 : 1,
            backgroundColor: isPointer ? 'rgba(255,255,255,0.1)' : 'transparent',
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut"
          }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isPointer ? 0 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default CustomCursor;