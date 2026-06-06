"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gyost Portfolio",
    description: "A modern portfolio website for a design agency featuring interactive animations, responsive layout, and seamless user experience across devices.",
    link: "https://thegyost.netlify.app",
    role: "Sole developer",
    tags: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Stygo Web Health",
    description: "A healthcare web platform providing users with access to medical resources, appointment scheduling, and health tracking.",
    link: "http://stygowebhealth.netlify.app",
    role: "Front-end developer",
    tags: ["React", "Node.js", "MongoDB"]
  }
];

export default function ProjectsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-green mb-8">Projects</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-green/5 p-6"
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-forest-green">{project.title}</h2>
                  <p className="text-green/80">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-sm rounded-full bg-green/10 text-green">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-button inline-flex items-center gap-2 px-6 py-2 text-hunter"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
