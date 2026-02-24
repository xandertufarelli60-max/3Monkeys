'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CursorFollowerProps {
  className?: string;
}

export default function CursorFollower({ className = '' }: CursorFollowerProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for video elements
      if (target.closest('video') || target.closest('[data-cursor="play"]')) {
        setIsHovering(true);
        setCursorText('PLAY');
        return;
      }

      // Check for tech items
      if (target.closest('[data-cursor="info"]') || target.closest('.dark-item')) {
        setIsHovering(true);
        setCursorText('INFO');
        return;
      }

      // Check for links and buttons
      if (target.closest('a') || target.closest('button') || target.closest('[data-cursor="expand"]')) {
        setIsHovering(true);
        setCursorText('');
        return;
      }

      setIsHovering(false);
      setCursorText('');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Hide on mobile/touch devices
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference ${className}`}
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-[#00754B] -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: isHovering ? 80 : 20,
          height: isHovering ? 80 : 20,
          backgroundColor: isHovering ? 'rgba(0, 117, 75, 0.2)' : 'transparent',
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-bold tracking-widest text-white"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
