import React from 'react';
import { Marquee } from './ui/Marquee';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { TextReveal } from './ui/text-reveal';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const skills = [
    { name: "C / C++", places: ["LeetCode / DSA Practice", "Core Fundamentals", "Competitive Programming"] },
    { name: "System Design", places: ["The Binary Critic (Caching Hierarchy)", "QueryCraft (Validation Pipeline)"] },
    { name: "JavaScript / Node", places: ["The Binary Critic", "QueryCraft", "BGSW"] },
    { name: "React / Next.js", places: ["BGSW", "TidyTrack", "The Binary Critic"] },
    { name: "SQL & NoSQL", places: ["QueryCraft", "InvenTrack", "The Binary Critic"] },
    { name: "Enterprise Auth", places: ["BGSW (Entra ID, MSAL)", "InvenTrack (JWT)"] }
  ];

  const aestheticWords = ["SOFTWARE", "ENGINEERING", "ARCHITECTURE", "PERFORMANCE", "BACKEND", "GENAI"];

  return (
    <HeroHighlight containerClassName="relative py-32 px-6 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      
      {/* 3D Aesthetic Marquee */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 opacity-20 pointer-events-none">
        <Marquee speed="40s" className="overflow-visible">
          {aestheticWords.concat(aestheticWords).map((word, i) => (
            <span 
              key={i} 
              className="font-editorial text-8xl md:text-[12rem] italic tracking-tighter text-transparent mr-12"
              style={{
                WebkitTextStroke: '2px rgba(212, 212, 216, 0.3)',
                textShadow: '2px 2px 0 #3f3f46, 4px 4px 0 #3f3f46, 6px 6px 0 #27272a, 8px 8px 15px rgba(0,0,0,0.8)'
              }}
            >
              {word}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center mb-24">
          <TextReveal text="Things I know my way around." className="font-editorial text-5xl md:text-7xl text-white italic mb-12 justify-center" />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Languages, frameworks and tools are useful.<br/>
            What's more useful is knowing <Highlight className="text-zinc-900 mt-2 font-medium">where I've actually used them.</Highlight>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill.name} className="glass-panel p-6 rounded-2xl bg-[#121215]/80 backdrop-blur-xl border border-white/5 shadow-2xl transition-transform hover:-translate-y-2 duration-300">
              <p className="font-mono text-lg text-white font-bold mb-4">{skill.name}</p>
              <ul className="space-y-2">
                {skill.places.map(place => (
                  <li key={place} className="text-zinc-400 font-light text-sm flex items-center gap-2">
                    <span className="text-zinc-500">→</span> {place}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </HeroHighlight>
  );
}
