"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-hunter">
      <Navbar />
      <main className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green mb-8">About Me</h1>
          <div className="prose prose-lg text-green/90">
            <p className="mb-6">
              As a passionate Front-End Developer, I specialize in creating intuitive and responsive user interfaces that bring ideas to life. With a strong foundation in modern web technologies and a keen eye for design, I transform concepts into engaging digital experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-forest-green">Education</h2>
                <div className="bg-green/5 p-6 rounded-xl">
                  <h3 className="font-medium">Bachelor of Technology</h3>
                  <p className="text-green/80">Computer Science and Technology</p>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-forest-green">Experience</h2>
                <div className="bg-green/5 p-6 rounded-xl">
                  <p className="text-green/80">
                    Currently seeking my first professional role in front-end development. Actively engaged in self-driven projects and continuous learning to enhance my skills and stay current with industry trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link 
              href="/contact" 
              className="liquid-button inline-flex items-center gap-2 px-8 py-3 text-hunter"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
