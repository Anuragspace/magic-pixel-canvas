import React, { useEffect, useRef, useState } from "react";
import { 
  Palette, 
  Gem,
  MousePointer,
  Layers,
  Code2,
  Figma,
  Layout,
  Container,
  PenSquare,
  Sparkles,
  DraftingCompass,
  Brush,
  FlaskConical,
  Cpu,
  ScanLine
} from "lucide-react";
import { Globe } from "@/features/shared/components/magic-ui/Globe";
import useIntersectionObserver from "@/hooks/use-intersection-observer";

const Skills = () => {
  const [isVisible, skillsRef] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const handleDragStart = (clientX: number) => {
      isDraggingRef.current = true;
      startXRef.current = clientX - slider.offsetLeft;
      scrollLeftRef.current = slider.scrollLeft;
      slider.classList.add('dragging');
      document.body.style.cursor = 'grabbing';
    };
    
    const handleDragEnd = () => {
      isDraggingRef.current = false;
      slider.classList.remove('dragging');
      document.body.style.cursor = 'default';
    };
    
    const handleDragMove = (clientX: number) => {
      if (!isDraggingRef.current) return;
      const x = clientX - slider.offsetLeft;
      const walk = (x - startXRef.current) * 2;
      slider.scrollLeft = scrollLeftRef.current - walk;
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      handleDragStart(e.touches[0].pageX);
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !slider || e.touches.length !== 1) return;
      e.preventDefault();
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startXRef.current) * 2;
      slider.scrollLeft = scrollLeftRef.current - walk;
    };
    
    const mouseDownHandler = (e: MouseEvent) => handleDragStart(e.clientX);
    const mouseMoveHandler = (e: MouseEvent) => handleDragMove(e.clientX);
    
    slider.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('mousemove', mouseMoveHandler);
    
    slider.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      slider.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('mousemove', mouseMoveHandler);
      
      slider.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Create a clone of the skills for seamless scrolling
    const content = slider.children[0] as HTMLElement; // Cast to HTMLElement
    const clone = content.cloneNode(true);
    slider.appendChild(clone);

    const infiniteScroll = () => {
      if (isPaused || !slider) return;
      
      if (slider.scrollLeft >= content.offsetWidth) { // No error now
        slider.scrollLeft = 0; // Reset to start when reaching the clone
      } else {
        slider.scrollLeft += 1.5; // Slower, smoother scroll
      }
    };

    const scrollInterval = setInterval(infiniteScroll, 20);
    return () => clearInterval(scrollInterval);
  }, [isPaused, isVisible]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const designSkills = [
    { name: "UI Design", level: 95 },
    { name: "UX Design", level: 90 },
    { name: "Interaction Design", level: 85 },
    { name: "Development", level: 88 },
    { name: "AI Tools", level: 92 },
    { name: "React", level: 87 },
  ];

  const technicalSkills = [
    { name: "Figma", icon: <Figma className="h-5 w-5" /> },
    { name: "User Research", icon: <MousePointer className="h-5 w-5" /> },
    { name: "Wireframing", icon: <Layout className="h-5 w-5" /> },
    { name: "Adobe Photoshop", icon: <Layers className="h-5 w-5" /> },
    { name: "Adobe Illustrator", icon: <Brush className="h-5 w-5" /> },
    { name: "Prototyping", icon: <Code2 className="h-5 w-5" /> },
    { name: "Interaction Design", icon: <Sparkles className="h-5 w-5" /> },
    { name: "Design Systems", icon: <Palette className="h-5 w-5" /> },
    { name: "Information Architecture", icon: <Container className="h-5 w-5" /> },
    { name: "User Testing", icon: <FlaskConical className="h-5 w-5" /> },
    { name: "Visual Design", icon: <DraftingCompass className="h-5 w-5" /> },
    { name: "Design Thinking", icon: <Gem className="h-5 w-5" /> },
    { name: "Accessibility", icon: <ScanLine className="h-5 w-5" /> },
    { name: "UI Animation", icon: <Cpu className="h-5 w-5" /> },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 overflow-hidden">
      
      <div className="container-custom">
        <div className="mb-10">
          <h2 className="mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </div>
        
        <div className="relative mb-12 py-6 overflow-hidden" id="skills-carousel">
          <div className="absolute left-0 top-0 h-full w-[15%] bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-[15%] bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div 
            ref={sliderRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-4 will-change-transform gpu-accelerated items-center animate-marquee"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              whiteSpace: 'nowrap'
            }}
          >
            <div className="flex gap-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={`${skill.name}-${index}`}
                  className="flex-none bg-white rounded-xl shadow-md p-4 flex items-center gap-3 transform hover:scale-105 transition-transform duration-200"
                  style={{ minWidth: '180px' }}
                >
                  <div className="bg-[#3E40EF]/10 p-2 rounded-lg">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-5">
          <div 
            ref={skillsRef}
            className="col-span-12 md:col-span-5 bg-[#3E40EF] rounded-2xl shadow-md p-7 flex flex-col transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 group-hover:bg-white/10 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 group-hover:bg-white/10 transition-all duration-500"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-300">
                <Palette className="text-white h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-5 text-white">Design & Development</h3>
              <p className="text-white/90 mb-6">Combining creative design thinking with technical expertise to build intuitive and efficient digital experiences.</p>
              
              <div className="space-y-4 mt-auto">
                {designSkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-white/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-white h-2.5 rounded-full transition-all transform-gpu"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionProperty: 'width, transform',
                          transitionDuration: '2s',
                          transitionDelay: `${index * 0.2}s`,
                          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                          transform: isVisible ? 'translateX(0)' : 'translateX(-100%)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-1 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white"></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column container */}
          <div className="col-span-12 md:col-span-7 grid grid-rows-1 gap-5">
            {/* Interaction Design - Top right box */}
            <div className="bg-[#3E40EF] rounded-2xl shadow-md p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full group-hover:bg-white/10 transition-all duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <MousePointer className="text-white h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Interaction Design</h3>
                <p className="text-white/90 mb-4">Creating intuitive interfaces with smooth transitions and meaningful animations that enhance user experience.</p>
                <div className="mt-auto flex flex-wrap gap-3">
                  {["Micro-interactions", "Motion Design", "User Flows", "Site Mapping"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium group-hover:bg-white/15 transition-all duration-300 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Bottom right container for Prototyping and Wireframing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Prototyping - Bottom left of the right column */}
              <div className="bg-[#3E40EF] rounded-2xl shadow-md p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/5 rounded-full group-hover:bg-white/10 transition-all duration-500"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <Layers className="text-white h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Prototyping</h3>
                  <p className="text-white/90 mb-4">Building interactive prototypes to test and validate design solutions.</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {["High-fidelity", "Low-fidelity", "Interactive", "User Testing"].map((skill, index) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 bg-white/10 rounded-full text-sm font-medium group-hover:bg-white/15 transition-all duration-300 text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Wireframing - Bottom right */}
              <div className="bg-[#3E40EF] min-h-[280px] rounded-2xl shadow-md p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/5 rounded-full group-hover:bg-white/10 transition-all duration-500"></div>
                
                <div className="relative z-10 h-full flex flex-col items-center text-center">
                  <p className="text-white/90 mb-3">Creating structural blueprints to establish hierarchy and layout.</p>
                  <h3 className="text-2xl font-bold mb-3 text-white">Wireframing</h3>
                  {/* Adjusted Globe position */}
                  <div className="flex-1 w-full flex items-center justify-center relative ">
                    <Globe className="scale-[1.25] translate-y-[4%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
