import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#050505] py-24 px-6 border-t border-zinc-900">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="font-editorial text-4xl text-white mb-2">Mannat Trivedi</h2>
          <p className="text-zinc-500 font-light">Building things. Breaking things. Figuring out why.</p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-16 font-mono text-xs tracking-widest uppercase">
          <a href="https://github.com/mannat244" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/mannattrivedi/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/u/MannatTrivedi/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">LeetCode</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">Resume</a>
          <a href="mailto:mannateducation@gmail.com" className="text-zinc-400 hover:text-white transition-colors">Email</a>
        </div>
        
      </div>
      
      <div className="container mx-auto max-w-6xl mt-24 pt-8 border-t border-zinc-900 text-center md:text-left">
        <p className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
          © 2026 Mannat Trivedi
        </p>
      </div>
    </footer>
  );
}
