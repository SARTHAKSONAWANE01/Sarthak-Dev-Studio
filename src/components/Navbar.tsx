"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { title: 'About', path: '/about' },
    { title: 'Skills', path: '/skills' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  // Animation variants for navbar items
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    })
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as const }}
      className={cn(
        'fixed w-full top-0 left-0 z-50 transition-all duration-500',
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border py-2' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-poppins text-foreground text-2xl font-bold group cursor-pointer">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block transition-transform group-hover:scale-110"
          >
            Dev<span className="text-muted-foreground">Sarth</span>
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link 
              key={item.title}
              href={item.path}
              className={cn(
                "nav-link text-muted-foreground font-medium transition-colors duration-300 cursor-pointer hover:text-foreground",
                pathname === item.path && "text-foreground"
              )}
            >
              <motion.span
                custom={index}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="relative overflow-hidden inline-block"
              >
                {item.title}
                <motion.span 
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-foreground transform",
                    pathname === item.path ? "scale-x-100" : "scale-x-0"
                  )}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: pathname === item.path ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </Link>
          ))}
        </div>

        <motion.button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.span 
            className="block w-6 h-0.5 bg-foreground mb-1.5"
            animate={{ 
              rotate: mobileMenuOpen ? 45 : 0,
              translateY: mobileMenuOpen ? 8 : 0
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="block w-6 h-0.5 bg-foreground mb-1.5"
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="block w-6 h-0.5 bg-foreground"
            animate={{ 
              rotate: mobileMenuOpen ? -45 : 0,
              translateY: mobileMenuOpen ? -8 : 0
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu with improved animations and proper mobile handling */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="md:hidden fixed top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-2xl border-b border-border z-40"
          >
            <motion.div 
              className="container mx-auto py-6 px-4 flex flex-col space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -20 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link 
                    href={item.path}
                    className={cn(
                      "block py-4 px-4 rounded-lg transition-all duration-300 cursor-pointer text-lg font-medium",
                      pathname === item.path 
                        ? "bg-primary text-primary-foreground shadow-lg" 
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-md"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
