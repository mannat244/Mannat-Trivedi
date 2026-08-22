import React from 'react';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { Meteors } from './ui/meteors';
import { ArrowDown, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <HeroHighlight containerClassName="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Meteors number={20} />
      
      <div className="relative z-10 container mx-auto px-6 max-w-5xl pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono text-xs md:text-sm tracking-widest uppercase text-zinc-500 mb-8"
        >
          MANNAT TRIVEDI
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-editorial text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight text-white mb-12"
        >
          Hi, I'm Mannat Trivedi.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xl md:text-3xl font-light text-zinc-400 leading-snug mb-16">
            The more you'll scroll, the more reasons you'll get to connect with me.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-24">
            <a
              href="/resume.pdf"
              target="_blank"
              data-cursor="The condensed version"
              className="flex items-center gap-2 group font-mono text-sm tracking-widest uppercase text-white hover:text-zinc-300 transition-colors"
            >
              VIEW RESUME <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#role-selector"
              data-cursor="Let's make this less formal"
              className="flex items-center gap-2 group font-mono text-sm tracking-widest uppercase text-zinc-500 hover:text-white transition-colors"
            >
              LOOKING FOR SOMEONE? <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-auto md:right-12 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">There's more</span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </motion.div>
    </HeroHighlight>
  );
}
