"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ZoomTransition from "@/components/ZoomTransition";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <CustomCursor />
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      
      <ZoomTransition isLoaded={isLoaded}>
        <div className="min-h-screen w-full text-text-primary relative overflow-x-hidden">
          {/* Background with modern dark gradient */}
          <div className="fixed inset-0 bg-dark-gradient z-[-2]" />
          
          {/* Animated background elements */}
          <div className="fixed inset-0 z-[-1]">
            <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-soft/5 rounded-full blur-3xl animate-pulse-slow" />
          </div>
          
          <Navbar />
          <main className="relative">
            {/* Enhanced gradient overlays */}
            <div className="fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-neon-blue/10 to-transparent pointer-events-none z-10"></div>
            <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neon-pink/10 to-transparent pointer-events-none z-10"></div>
            
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ZoomTransition>
    </>
  );
}
