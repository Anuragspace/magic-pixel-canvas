
import React, { useEffect, useState } from "react";
import RippleAnimation from "./RippleAnimation";
import { Award, Circle, MapPin, GraduationCap } from "lucide-react";

const About = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Start the highlight animation when section becomes visible
            setTimeout(() => {
              setIsHighlighted(true);
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden py-10 md:py-14">
      <div className="container-custom">
        <div className="mb-6">
          <h2 className="mb-3">About Me</h2>
          <div className="w-24 h-1 bg-[#3E40EF]"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="relative h-auto">
              <div className="bg-gray-100 rounded-2xl overflow-hidden z-10 relative">
                <img 
                  src="/lovable-uploads/1777892e-debe-48e7-b9a6-4e35347f6790.png" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#3E40EF]/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#3E40EF]/5 rounded-full blur-2xl -z-10"></div>
              
              {/* Rotating design elements */}
              <div className="absolute w-32 h-32 border border-[#3E40EF]/30 rounded-full -bottom-4 -left-4 animate-spin-slow"></div>
              <div className="absolute w-24 h-24 border border-[#3E40EF]/20 rounded-full -top-4 -right-4 animate-spin-slow-reverse"></div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium mb-1">
                <Award className="inline-block mr-2 h-4 w-4" />
                Nice to meet you
              </div>
              
              <div>
                <h3 className="leading-tight inline-flex flex-wrap">
                  I'm a{' '}
                  <span className="relative mx-1">
                    <span className={`relative z-10 ${isHighlighted ? 'text-white' : 'text-[#3E40EF]'}`}>
                      Product Designer
                    </span>
                    <div 
                      className={`absolute bottom-0 left-0 h-full bg-[#3E40EF] transition-all duration-1000 ease-in-out ${isVisible ? (isHighlighted ? 'w-full' : 'w-0') : 'w-0'}`} 
                      style={{ zIndex: 5 }}
                    ></div>
                  </span>
                  <span className="relative">
                    <span className={`relative z-10 ${isHighlighted ? 'text-white' : 'text-gray-700'}`}>
                      with a passion for creating user-centered digital experiences
                    </span>
                    <div 
                      className={`absolute bottom-0 left-0 h-full bg-[#3E40EF] transition-all duration-1000 ease-in-out ${isVisible ? (isHighlighted ? 'w-full' : 'w-0') : 'w-0'}`} 
                      style={{ zIndex: 5, transitionDelay: '0.4s' }}
                    ></div>
                  </span>
                </h3>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-5 relative shadow-md h-auto max-h-[350px] overflow-auto mt-2">
                <div className="absolute top-4 right-4 flex gap-2">
                  <Circle className="h-3 w-3 fill-red-500 text-red-500" />
                  <Circle className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  <Circle className="h-3 w-3 fill-green-500 text-green-500" />
                </div>
                <p className="text-gray-600 font-mono text-sm mb-3">
                  {'// Personal description'}
                </p>
                <p className="text-gray-700 font-mono text-sm">
                  With over 5 years of experience in UI/UX design, I've had the privilege of working on a diverse range of projects, from innovative startups to established enterprises. My design philosophy revolves around understanding user needs and business goals to create solutions that are both beautiful and functional.
                </p>
                <p className="text-gray-700 font-mono text-sm mt-3">
                  I currently serve as Chief Product Officer at Imaginum, where I lead the design and strategy of our digital products. Previously, I spearheaded design initiatives as Tech & Design Head at CSED.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Info boxes row - evenly distributed below the main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 text-[#3E40EF]">Education</h4>
                <p className="text-gray-700 text-sm">B.Tech in ECE<br />
                Vellore Institute of Technology, 2022-2026</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 text-[#3E40EF]">Location</h4>
                <p className="text-gray-700 text-sm">Based in India<br />
                Available for remote work</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 text-[#3E40EF]">Experience</h4>
                <p className="text-gray-700 text-sm">5+ years in UI/UX<br />
                Design & Product Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
