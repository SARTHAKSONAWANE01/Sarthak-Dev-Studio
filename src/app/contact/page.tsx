"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

export default function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-green mb-8">Get in Touch</h1>
          <p className="text-green/80 mb-12 max-w-3xl">
            I'm always interested in new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello, feel free to reach out using the form below.
          </p>
          
          <Contact />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-green/80 italic mb-4">Let's build something amazing together!</p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
