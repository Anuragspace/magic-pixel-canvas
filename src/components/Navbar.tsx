
import React, { useState, useEffect } from "react";
import { Menu, X, Linkedin, ExternalLink, Github, Instagram, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/WordRotate";
import { BorderBeam } from "@/components/BorderBeam";
import { motion, AnimatePresence } from "framer-motion";
import { RainbowButton } from "@/components/RainbowButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id") || "home";
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Posters", href: "#posters" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-5" : "py-5" 
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className={`flex items-center transition-all duration-300 ${
          isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
        }`}>
          <a href="#" className="text-xl font-bold group flex items-center gap-1">
            <Sparkles className="h-4 w-4 text-[#3E40EF] mr-2" />
            <span className="font-display">
              {!isMenuOpen && (
                <WordRotate 
                  words={["Portfolio", "Anurag Adarsh", "Designer", "Developer"]} 
                  className="text-inherit inline-block"
                  motionProps={{
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -8 },
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                />
              )}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center ${
          isScrolled ? "fixed left-1/2 -translate-x-1/2 mt-4" : ""
        }`}>
          <div className="relative bg-white shadow-sm rounded-full px-2 py-2.5 flex items-center gap-1">
            <BorderBeam 
              colorFrom="#3E40EF"
              colorTo="#6366F1"
              size={70}
              duration={7}
              className="opacity-70"
            />
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative z-10 text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300 hover:text-[#3E40EF] ${
                  activeSection === link.href.substring(1) 
                    ? "bg-[#3E40EF]/10 text-[#3E40EF]" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Resume Button only for desktop */}
        <div className={`hidden md:flex items-center transition-all duration-300 ${
          isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
        }`}>
          <div className="ml-2">
            <RainbowButton className="text-sm px-4 py-1.5">
              Resume
            </RainbowButton>
          </div>
        </div>

        {/* Enhanced Mobile Menu Button with modern UI */}
        {/* Mobile Menu Button - Refined Design */}
        <button
          className={`md:hidden relative z-50 p-3 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
            isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{
            boxShadow: isMenuOpen 
              ? '0 0 0 2px rgba(62, 64, 239, 0.2), 0 2px 8px rgba(62, 64, 239, 0.1)' 
              : '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
            <div className={`relative w-6 h-6 transition-all duration-300`}>
              <span className={`absolute h-[2px] w-5 rounded-full bg-[#3E40EF] transition-all duration-300 ease-out ${
                isMenuOpen ? "rotate-45 top-1/2" : "top-1"
              }`} style={{ left: 0, transform: isMenuOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(0)' }}></span>
              
              <span className={`absolute h-[2.5px] w-5 rounded-full bg-[#3E40EF] transition-all duration-300 ease-out ${
                isMenuOpen ? "-rotate-45 top-1/2" : "top-1/2"
              }`} style={{ left: 0, transform: isMenuOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-50%)' }}></span>
              
              <span className={`absolute h-[2.5px] w-5 rounded-full bg-[#3E40EF] transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0" : "bottom-1"
              }`} style={{ left: 0, transform: isMenuOpen ? 'translateY(0)' : 'translateY(0)' }}></span>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation - Simplified animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 flex flex-col"
          >
            {/* Backdrop with blur effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={toggleMenu}
            />
            
            {/* Menu content with simpler animation */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative ml-auto h-full w-4/5 max-w-sm bg-[#3E40EF] text-white flex flex-col overflow-y-auto"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Logo for mobile menu */}
                <div className="mb-8 pt-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-white" />
                    <span className="font-display text-xl font-bold">Anurag Adarsh</span>
                  </div>
                  <div className="mt-2 h-0.5 w-12 bg-white/30 rounded-full"></div>
                </div>
                
                {/* Navigation links */}
                <nav className="flex flex-col space-y-1 py-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className={`flex items-center py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                          activeSection === link.href.substring(1) 
                            ? "bg-white/10 text-white" 
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Social links and resume button */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-4">
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                    
                    <RainbowButton className="bg-white text-[#3E40EF] hover:bg-white/90">
                      Resume
                    </RainbowButton>
                  </div>
                  
                  
                  
                  <p className="text-sm text-white/60">© 2023 Anurag Adarsh. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
