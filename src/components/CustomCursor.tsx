import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // High-performance event delegation using closest()
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
        const isCard = !!target.closest('.interactive-card, .glass-panel');
        setIsHovered(isClickable);
        setIsCardHovered(!isClickable && isCard);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMouse, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const activeHover = isHovered || isCardHovered;

  return (
    <>
      {/* Outer Magnetic Glow Aura Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border mix-blend-screen"
        animate={{
          x: mousePosition.x - (activeHover ? 26 : isClicking ? 14 : 16),
          y: mousePosition.y - (activeHover ? 26 : isClicking ? 14 : 16),
          width: activeHover ? 52 : isClicking ? 28 : 32,
          height: activeHover ? 52 : isClicking ? 28 : 32,
          backgroundColor: isHovered 
            ? 'rgba(6, 182, 212, 0.22)' 
            : isCardHovered 
            ? 'rgba(129, 140, 248, 0.14)' 
            : 'rgba(6, 182, 212, 0.05)',
          borderColor: isHovered ? 'rgba(56, 189, 248, 0.9)' : 'rgba(56, 189, 248, 0.45)',
          scale: isClicking ? 0.9 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 420,
          mass: 0.35,
        }}
      />

      {/* Central Precision Point with Click Impulse */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]"
        animate={{
          x: mousePosition.x - (isHovered ? 4 : 3),
          y: mousePosition.y - (isHovered ? 4 : 3),
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          scale: isClicking ? 1.8 : isHovered ? 1.4 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 900,
        }}
      />
    </>
  );
};
