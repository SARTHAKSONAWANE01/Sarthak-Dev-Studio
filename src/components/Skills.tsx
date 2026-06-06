"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type SkillCategory = {
  title: string;
  skills: {
    name: string;
    level: number; // 0-100
  }[];
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Java", level: 70 },
        { name: "Python", level: 65 },
      ]
    },
    {
      title: "Frameworks/Libraries",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "Bootstrap 5", level: 90 },
        { name: "AOS", level: 80 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 75 },
        { name: "Netlify", level: 80 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
      ]
    },
    {
      title: "AI & Prompt Engineering",
      skills: [
        { name: "OpenAI", level: 80 },
        { name: "LangChain", level: 75 },
        { name: "ChatGPT prompt design", level: 85 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the section
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            
            // Animate skill bars with a staggered delay
            skillBarRefs.current.forEach((bar, index) => {
              if (bar) {
                setTimeout(() => {
                  bar.classList.add('animate');
                }, 300 + index * 100);
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

  // Animation variants for framer motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  } as const;

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="section-padding bg-accent/5 opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
    >
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-2 text-primary"
        >
          Skills
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="section-divider"
        ></motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex} 
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = catIndex * 10 + skillIndex;
                  return (
                    <motion.div 
                      key={skillIndex} 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <motion.span 
                          className="font-medium text-foreground"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 + skillIndex * 0.1 }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span 
                          className="text-sm text-primary"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          ref={el => { skillBarRefs.current[globalIndex] = el; }}
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.4 + skillIndex * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
