"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  link: string;
  role: string;
  image: string;
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Project descriptions - creating since they were left blank
  const projects: Project[] = [
    {
      title: "Gyost Portfolio",
      description: "A modern portfolio website for a design agency featuring interactive animations, responsive layout, and seamless user experience across devices. Implemented with HTML5, CSS3, and JavaScript.",
      link: "https://thegyost.netlify.app",
      role: "Sole developer",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      title: "Stygo Web Health",
      description: "A healthcare web platform providing users with access to medical resources, appointment scheduling, and health tracking. Built with React, responsive design principles, and integrated with healthcare APIs.",
      link: "http://stygowebhealth.netlify.app",
      role: "Front-end developer",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            
            // Animate project cards with staggered delay
            cardRefs.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.classList.add('opacity-100', 'translate-y-0');
                  card.classList.remove('opacity-0', 'translate-y-10');
                }, 300 + index * 200);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  } as const;

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="section-padding opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-2 text-green"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Projects
          </motion.h2>
          
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-10 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              ref={el => { cardRefs.current[index] = el; }}
              className="project-card card-3d relative overflow-hidden"
              variants={itemVariants}
            >
              <motion.div 
                className="aspect-video rounded-xl overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-green/30 to-transparent opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
              
              <div className="project-card-content">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-3 text-sm opacity-90">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-hunter/30 px-3 py-1 rounded-full">{project.role}</span>
                  <motion.a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-forest-green transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0L100 0L100 100" stroke="currentColor" strokeWidth="8"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-lg text-green/80 italic mb-6">
            I am currently seeking my first professional role in front-end development. In the meantime, I've engaged in self-driven projects and continuous learning to hone my skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
