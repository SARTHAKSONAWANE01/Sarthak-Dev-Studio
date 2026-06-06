
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-poppins text-xl font-bold text-foreground">
              Dev<span className="text-muted-foreground">Sarth</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-1">Front-End Developer</p>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            <a 
              href="#home"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              About
            </a>
            <a 
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              Skills
            </a>
            <a 
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} DevSarth. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/SARTHAKSONAWANE01" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer p-2 hover:bg-accent rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/sarthak-sonawane-0aa583344" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer p-2 hover:bg-accent rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="mailto:sonawanesarthak00@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer p-2 hover:bg-accent rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
