
import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { useInView } from 'framer-motion';
import { useSmoothScroll } from './LenisProvider';

interface ScrollTriggerProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string; // Changed to only accept string
  onEnter?: () => void;
  onLeave?: () => void;
  once?: boolean;
  className?: string;
}

export const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '-50px',
  onEnter,
  onLeave,
  once = true,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { lenis } = useSmoothScroll();
  const [hasEntered, setHasEntered] = useState(false);
  const isInView = useInView(ref, { 
    once, 
    margin: rootMargin, // This is now only a string
    amount: threshold 
  });

  useEffect(() => {
    if (isInView && !hasEntered) {
      setHasEntered(true);
      onEnter?.();
    } else if (!isInView && hasEntered && !once) {
      setHasEntered(false);
      onLeave?.();
    }
  }, [isInView, hasEntered, onEnter, onLeave, once]);

  // Force a recalculation on Lenis initialization
  useEffect(() => {
    if (lenis) {
      lenis.resize();
    }
  }, [lenis]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollTrigger;
