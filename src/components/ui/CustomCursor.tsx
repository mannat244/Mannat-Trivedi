import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor]')) {
        setIsHovering(true);
        const text = target.closest('[data-cursor]')?.getAttribute('data-cursor');
        if (text) {
          setCursorText(text);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center text-black font-mono text-[10px] font-bold overflow-hidden text-center p-2 leading-tight"
        animate={{
          x: mousePosition.x - (isHovering ? (cursorText ? 50 : 20) : 8),
          y: mousePosition.y - (isHovering ? (cursorText ? 50 : 20) : 8),
          width: isHovering ? (cursorText ? 100 : 40) : 16,
          height: isHovering ? (cursorText ? 100 : 40) : 16,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)',
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.15,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="w-full break-words"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
