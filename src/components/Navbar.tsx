import React from 'react';
import { Code2 } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference">
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-4 group"
      >
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
          <Code2 className="w-5 h-5 text-black" />
        </div>
        <span className="font-editorial text-2xl text-white italic hidden sm:block">Mannat Trivedi</span>
      </a>

      <div className="flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
        <a href="#projects" className="text-zinc-400 hover:text-white transition-colors hidden md:block">Work</a>
        <a href="#role-selector" className="text-zinc-400 hover:text-white transition-colors hidden md:block">AI Profile</a>
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-400 transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
