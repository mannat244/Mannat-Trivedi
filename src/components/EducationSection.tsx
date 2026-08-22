import React from 'react';
import { motion } from 'framer-motion';
import { TextReveal } from './ui/text-reveal';

export function EducationSection() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative z-10 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Education Column */}
          <div>
            <h2 className="font-editorial text-4xl md:text-5xl text-white italic mb-12">Education</h2>
            
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-zinc-800"
              >
                <div className="absolute w-3 h-3 bg-zinc-300 rounded-full -left-[6.5px] top-2" />
                <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3">2023 — 2027</p>
                <h3 className="text-2xl text-white font-medium mb-2">B.Tech in Computer Science and Engineering</h3>
                <p className="text-zinc-400 text-lg mb-4">Maulana Azad National Institute of Technology (MANIT), Bhopal</p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
                  <p className="font-mono text-sm text-zinc-300">CGPA: 8.64</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative pl-8 border-l border-zinc-800"
              >
                <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[6.5px] top-2" />
                <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3">2023</p>
                <h3 className="text-xl text-white font-medium mb-2">12th Grade (CBSE Board)</h3>
                <p className="text-zinc-400 mb-4">RD Public School, Betul</p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
                  <p className="font-mono text-sm text-zinc-300">91.4%</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Core CS & Achievements Column */}
          <div>
            <h2 className="font-editorial text-4xl md:text-5xl text-white italic mb-12">Core Competencies</h2>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-2xl bg-zinc-900/50 border border-white/5"
              >
                <h3 className="text-xl text-white font-medium mb-4">CS Fundamentals</h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-6">
                  Solid academic and practical foundation in core computer science, ensuring robust architecture and production-ready code.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Operating Systems', 'DBMS', 'Computer Networks', 'OOP', 'Memory Management', 'System Design'].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded bg-zinc-800 text-zinc-300 font-mono text-xs uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-8 rounded-2xl bg-zinc-900/50 border border-white/5"
              >
                <h3 className="text-xl text-white font-medium mb-4">Milestones</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-zinc-600 font-mono mt-1">01</span>
                    <div>
                      <p className="text-white font-medium">Extensive DSA & Problem Solving</p>
                      <p className="text-zinc-400 text-sm font-light mt-1">Consistent practice across LeetCode and other platforms, mastering core data structures and advanced problem-solving patterns.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-zinc-600 font-mono mt-1">02</span>
                    <div>
                      <p className="text-white font-medium">3rd Place — CodeRush</p>
                      <p className="text-zinc-400 text-sm font-light mt-1">Web Development Contest. Developed a full-fledged quiz platform under tight time constraints.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
