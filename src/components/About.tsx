"use client";

import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const aboutText = "I am a passionate Front-End Developer focused on creating intuitive and responsive user interfaces. With a strong foundation in modern web technologies and a keen eye for design, I transform ideas into engaging digital experiences. I thrive on continuous learning and stay updated with the latest industry trends to deliver cutting-edge solutions.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding opacity-0 transform translate-y-10 transition-all duration-700 ease-out relative"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground neon-text">About Me</h2>
        <div className="section-divider"></div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 glass-effect p-6 md:p-8 rounded-2xl">
            <p className="text-base md:text-lg text-foreground leading-relaxed">{aboutText}</p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-semibold w-20 md:w-24 text-primary text-sm md:text-base">Email:</span>
                <a 
                  href="mailto:sonawanesarthak00@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline text-sm md:text-base break-all"
                >
                  sonawanesarthak00@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <span className="font-semibold w-20 md:w-24 text-primary text-sm md:text-base">Phone:</span>
                <a 
                  href="tel:918149753505" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline text-sm md:text-base"
                >
                  +91 8149753505
                </a>
              </div>
              
              <div className="flex items-start">
                <span className="font-semibold w-20 md:w-24 text-primary text-sm md:text-base">Education:</span>
                <span className="text-muted-foreground text-sm md:text-base">Bachelor of Technology in Computer Science and Technology</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a 
                href="https://github.com/SARTHAKSONAWANE01" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300 neon-glow"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/sarthak-sonawane-0aa583344" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300 neon-glow"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass-effect flex items-center justify-center relative neon-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <img 
                src="/lovable-uploads/8bad2e96-5cd8-4990-a0e9-26cb10b6118b.png"
                alt="Sarthak Sonawane Professional Photo"
                className="w-full h-full object-cover relative z-10 rounded-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-40 md:h-40 border-2 border-primary/40 rounded-2xl z-[-1]"></div>
            </div>
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-32 h-32 md:w-40 md:h-40 border-2 border-accent/40 rounded-2xl z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
