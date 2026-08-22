import React from 'react';
import { TextReveal } from './ui/text-reveal';

export function PhilosophySection() {
  return (
    <section className="py-48 bg-[#09090b] relative z-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <TextReveal 
          text="When something is slow, I want to know why."
          className="font-editorial text-5xl md:text-7xl text-white italic mb-16 max-w-3xl leading-tight"
        />

        <div className="space-y-8 text-xl md:text-3xl font-light text-zinc-400 leading-relaxed mb-24">
          <p>When something breaks, I want to know where.</p>
          <p>When an AI gives the wrong answer, I want to know what led it there.</p>
          <p>When a feature works, I still want to know whether it should exist.</p>
          <p>And when something feels unnecessarily complicated, I usually end up trying to simplify it.</p>
        </div>

        <div className="pt-8 border-t border-zinc-900">
          <p className="font-editorial text-3xl md:text-5xl text-zinc-300 italic">
            Curiosity is usually where the debugging starts.
          </p>
        </div>
      </div>
    </section>
  );
}
