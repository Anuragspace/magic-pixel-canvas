
import React from "react";
import { ArrowDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaBehance } from "react-icons/fa";


export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  github: (props: IconProps) => <FaGithub {...props} />,
  instagram: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Instagram</title>
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  ),
  behance: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Behance</title>
      <path
        fill="currentColor"
        d="M7.799 5.698c.589 0 1.12.051 1.606.156.482.102.894.273 1.241.507.344.235.612.546.804.938.188.387.281.871.281 1.443 0 .619-.141 1.137-.421 1.551-.284.414-.7.753-1.255 1.014.756.214 1.311.601 1.663 1.164.35.558.527 1.235.527 2.031 0 .645-.106 1.202-.314 1.67-.211.47-.5.854-.878 1.154-.373.304-.835.527-1.374.671-.54.146-1.125.219-1.765.219H1V5.698h6.799zm-.351 4.832c.475 0 .87-.114 1.176-.344.305-.229.455-.544.455-.941 0-.296-.065-.539-.189-.727-.13-.187-.307-.333-.522-.436A2.419 2.419 0 0 0 7.75 7.95a5.167 5.167 0 0 0-.704-.052H3.629v2.632h3.819zm.162 5.031c.267 0 .523-.024.765-.072.243-.049.457-.122.637-.221.182-.097.328-.232.436-.406.12-.175.162-.384.162-.635 0-.501-.162-.868-.485-1.102-.324-.23-.764-.347-1.326-.347H3.629v2.783h3.981zm8.663-9.552h5.086v1.228h-5.086V6.009zm5.576 5.526c0 .709-.122 1.352-.368 1.935a4.413 4.413 0 0 1-1.031 1.515c-.44.43-.964.764-1.572 1.005a5.381 5.381 0 0 1-1.992.359c-.699 0-1.347-.119-1.949-.359a4.208 4.208 0 0 1-1.563-1.005c-.44-.427-.798-.897-1.075-1.402-.277-.505-.423-1.068-.432-1.691h2.621c.039.577.193 1.028.465 1.353.271.325.675.486 1.212.486.315 0 .586-.065.811-.197.227-.135.415-.317.566-.546.148-.228.256-.497.32-.804.065-.306.096-.628.096-.964 0-.33-.033-.647-.096-.951-.065-.306-.174-.578-.331-.811a1.684 1.684 0 0 0-.582-.546c-.233-.134-.515-.197-.851-.197-.36 0-.677.096-.946.29-.268.193-.456.435-.559.725h-2.5c.095-.74.323-1.37.684-1.891a4.411 4.411 0 0 1 1.265-1.343 5.273 5.273 0 0 1 1.679-.801 7.091 7.091 0 0 1 1.935-.264c.647 0 1.265.099 1.857.298.59.197 1.111.49 1.555.878.444.39.797.876 1.056 1.456.258.583.387 1.26.387 2.035z"
      />
    </svg>
  ),
};

export function SocialDock() {
  const { setTheme } = useTheme();
  const [visible, setVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [bottom, setBottom] = React.useState(24); // Default 24px

  // Check if menu is open by monitoring body style
  React.useEffect(() => {
    const checkMenuState = () => {
      setMenuOpen(document.body.style.overflow === 'hidden');
    };
    checkMenuState();
    const bodyObserver = new MutationObserver(checkMenuState);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    return () => bodyObserver.disconnect();
  }, []);

  // Responsive bottom position for mobile
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBottom(80); // 90px from bottom on mobile (enough for safe area + margin)
      } else {
        setBottom(24); // 24px from bottom on desktop
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const viewportHeight = window.innerHeight;
      const isAtTop = currentScrollPos < viewportHeight * 0.3;
      const isScrollingUp = currentScrollPos < prevScrollPos;
      setVisible(isAtTop || isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div 
      className={`fixed left-1/2 transform -translate-x-1/2 z-30 transition-all duration-300 ${
        visible && !menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      style={{
        bottom: `${bottom}px`,
        maxWidth: '100vw',
        width: 'min(90vw, 360px)',
        pointerEvents: visible && !menuOpen ? 'auto' : 'none'
      }}
    >
      <Dock 
        direction="middle" 
        className="h-12 px-4 py-1.5 bg-white backdrop-blur-sm border border-gray-100 shadow-md rounded-xl mx-auto w-full"
      >
        <DockIcon>
          <Button
            onClick={() => setTheme("light")}
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            aria-label="Light theme"
          >
            <Sun className="h-4 w-4" />
          </Button>
        </DockIcon>

        <Separator orientation="vertical" className="h-6 bg-gray-200 mx-1" />

        <DockIcon>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            asChild
          >
            <a href="https://github.com/Anuragspace" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icons.github className="h-4 w-4" />
            </a>
          </Button>
        </DockIcon>

        <DockIcon>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            asChild
          >
            <a href="https://www.linkedin.com/in/adarshanurag/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icons.linkedin className="h-4 w-4" />
            </a>
          </Button>
        </DockIcon>

        <DockIcon>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            asChild
          >
            <a href="https://www.instagram.com/anurag__adarsh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icons.instagram className="h-4 w-4" />
            </a>
          </Button>
        </DockIcon>

        <DockIcon>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            asChild
          >
            <a href="https://www.behance.net/anuragadarsh1" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <Icons.behance className="h-4 w-4" />
            </a>
          </Button>
        </DockIcon>

        <Separator orientation="vertical" className="h-6 bg-gray-200 mx-1" />

        <DockIcon>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            asChild
          >
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
        </DockIcon>
      </Dock>
    </div>
  );
}
