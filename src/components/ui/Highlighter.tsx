import React from 'react';
import { motion } from 'framer-motion';

interface HighlighterProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export const Highlighter: React.FC<HighlighterProps> = ({
  children,
  color = 'rgba(251, 191, 36, 0.2)',
  className = '',
}) => {
  return (
    <span className={`relative inline-block font-semibold ${className}`}>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        aria-hidden="true"
        className="absolute inset-0 bottom-0.5 -z-0 origin-left rounded-sm"
        style={{ backgroundColor: color }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
};
