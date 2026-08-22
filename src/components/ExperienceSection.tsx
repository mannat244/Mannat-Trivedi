import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { TextReveal } from './ui/text-reveal';

const images = [
  `${import.meta.env.BASE_URL}mannat.jpg`, // Personal
  `${import.meta.env.BASE_URL}team.jpg`, // Team at BGSW
];

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const tick = () => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % images.length;
        // Bias: keep the first image (Mannat) longer
        const delay = next === 0 ? 6000 : 2500;
        timeout = setTimeout(tick, delay);
        return next;
      });
    };
    
    // Initial delay for the first image
    timeout = setTimeout(tick, 6000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="experience" className="py-32 bg-[#0a0a0a] relative z-10 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-24">
          <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase mb-6">WORK</p>
          <TextReveal text="I write code that people actually use." className="font-editorial text-5xl md:text-7xl text-white italic" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Text Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Bosch Global Software Technologies</h3>
                <p className="text-zinc-500 font-mono text-sm mt-1">Software Engineering Intern • May 2026 - Jul 2026</p>
              </div>
            </div>

            <div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed">
              <p>
                Built an internal <strong className="text-white">Employee Skill Assessment Platform</strong> used across the TAF Department.
              </p>
              <p>
                Instead of making employees fill out endless manual forms, I automated the workflow with bulk uploads and dynamic generation, slashing submission times by <strong className="text-white">40–50%</strong>.
              </p>
              <p>
                Integrated <strong className="text-white">Microsoft Entra ID (Azure MSAL)</strong> and the Graph API to lock down enterprise data security, and deployed the entire scalable backend on SAP BTP Cloud Foundry.
              </p>
            </div>
          </div>

          {/* Right Animated Image Stack */}
          <div className="relative h-[400px] w-full flex items-center justify-center" data-cursor="Enterprise scale">
            <AnimatePresence>
              {images.map((src, index) => {
                const offset = (index - activeIndex + images.length) % images.length;

                let zIndex = 0;
                let rotate = 0;
                let scale = 1;
                let opacity = 1;
                let x = 0;

                if (offset === 0) {
                  // Front
                  zIndex = 30;
                  rotate = 0;
                  scale = 1;
                  opacity = 1;
                  x = 0;
                } else if (offset === 1) {
                  // Back Right
                  zIndex = 20;
                  rotate = 8;
                  scale = 0.95;
                  opacity = 0.6;
                  x = 20;
                } else if (offset === 2) {
                  // Back Left
                  zIndex = 10;
                  rotate = -8;
                  scale = 0.9;
                  opacity = 0.4;
                  x = -20;
                }

                return (
                  <motion.div
                    key={src}
                    initial={false}
                    animate={{
                      zIndex,
                      rotate,
                      scale,
                      opacity,
                      x
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute w-[85%] aspect-[4/3] bg-zinc-950 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <motion.img
                      initial={{ filter: "grayscale(100%)" }}
                      whileInView={{ filter: "grayscale(0%)" }}
                      whileHover={{ filter: "grayscale(0%)" }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: false, margin: "-20%" }}
                      src={src}
                      alt="Bosch Experience"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
