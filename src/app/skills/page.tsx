"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <div className="min-h-screen w-full bg-hunter">
      <Navbar />
      <main className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green mb-8">My Skills</h1>
          <p className="text-green/80 mb-12 max-w-3xl">
            Throughout my journey as a developer, I've acquired and refined various technical skills. 
            Here's an overview of my capabilities across different areas of web development and technology.
          </p>
          
          <Skills />
          
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/projects" 
                className="liquid-button inline-flex items-center gap-2 px-8 py-3 text-hunter"
              >
                View My Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
