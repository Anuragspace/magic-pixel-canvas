
import React, { useState } from "react";
import { Linkedin, Instagram, Twitter, Github, Heart, Share2, ArrowUp, Dribbble, ExternalLink, Link, Globe as GlobeIcon } from "lucide-react";
import { Globe } from "@/features/shared/components/magic-ui/Globe";
import BubblingHearts from "./BubblingHearts";

const Footer = () => {
  const year = new Date().getFullYear();
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  
  const handleHeartClick = () => {
    setIsHeartAnimating(true);
    setTimeout(() => setIsHeartAnimating(false), 2000);
  };
  
  const handleShareClick = () => {
    // Copy to clipboard and show tooltip
    navigator.clipboard.writeText("https://anuragadarsh.in");
    setShowShareTooltip(true);
    setTimeout(() => setShowShareTooltip(false), 3000);
  };
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Posters", href: "#posters" },
    { name: "Contact", href: "#contact" },
  ];
  
  const socialLinks = [
    { name: "Dribbble", icon: Dribbble, href: "https://dribbble.com" },
    { name: "Github", icon: Github, href: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white p-1 pb-1">
      <div className="rounded-3xl bg-[#3E40EF] text-white relative pt-20 pb-10 overflow-hidden mx-4 mb-4">
        {/* Go to top button */}
        <button 
          onClick={scrollToTop}
          className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3E40EF] hover:bg-gray-100 transition-colors shadow-md"
          aria-label="Go to top"
        >
          <ArrowUp size={18} />
        </button>
        
        <div className="container-custom">
          {/* Main content section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
            {/* Left column - Text content */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <a href="#" className="text-2xl font-bold">
                  <span className="font-display">Anurag Adarsh</span>
                </a>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
                Let's Design Experiences That Make an Impact! <span className="text-yellow-300">🤝</span>
              </h2>
              
              <div className="flex flex-wrap gap-4 pb-12">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center w-36 px-5 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors"
                >
                  Let's Talk <ArrowUp className="ml-2 rotate-45" size={16} />
                </a>
                
                <div className="relative">
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'Anurag Adarsh Portfolio',
                          text: 'Check out my portfolio showcasing UI/UX design work',
                          url: 'https://anuragadarsh.in',
                        })
                        .catch(err => {
                          console.error('Share failed:', err);
                          // Fallback to copy to clipboard
                          handleShareClick();
                        });
                      } else {
                        // Fallback to copy to clipboard
                        handleShareClick();
                      }
                    }}
                    className="inline-flex items-center justify-center w-40 px-5 py-2.5 rounded-full bg-white/10 text-sm text-white hover:bg-white/20 transition-colors"
                  >
                    <Share2 size={16} className="mr-2" />
                    <span className="whitespace-nowrap">Share Portfolio</span>
                  </button>
                  
                  {/* Tooltip for share confirmation */}
                  {showShareTooltip && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-2 px-4 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-1">
                        <GlobeIcon size={12} />
                        <span>anuragadarsh.in copied!</span>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black"></div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Social links with improved design */}
              <div className="flex flex-wrap gap-4 pt-12">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 text-sm shadow-sm hover:shadow-md backdrop-blur-sm"
                    aria-label={social.name}
                  >
                    <social.icon size={16} className="mr-2" strokeWidth={2.5} />
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right column - Globe */}
            <div className="md:col-span-5 flex justify-center md:justify-end items-center">
              <div className="relative h-[300px] w-[300px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="scale-[1.2]" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section with copyright and made with love */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/80 text-sm mb-4 md:mb-0">
                © {year} Anurag Adarsh • All rights reserved
              </p>
              
              <div 
                className="text-sm text-white/80 flex items-center cursor-pointer group"
                onClick={handleHeartClick}
              >
                Made with 
                <span className="inline-block mx-1.5 relative">
                  <Heart 
                    size={18} 
                    className={`text-red-500 fill-red-500 transition-all duration-300 ${isHeartAnimating ? 'scale-150' : 'group-hover:scale-125'}`} 
                  />
                  {/* Bubbling hearts animation */}
                  <BubblingHearts isAnimating={isHeartAnimating} />
                </span> 
                by Anurag
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
