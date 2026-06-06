"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ZoomTransitionProps {
  children: React.ReactNode;
  isLoaded: boolean;
}

const ZoomTransition: React.FC<ZoomTransitionProps> = ({ children, isLoaded }) => {
  return (
    <motion.div
      initial={{ 
        scale: 0.95,
        opacity: 0,
        filter: "blur(5px)"
      }}
      animate={isLoaded ? { 
        scale: 1,
        opacity: 1,
        filter: "blur(0px)"
      } : {}}
      transition={{ 
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        staggerChildren: 0.1
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default ZoomTransition;
