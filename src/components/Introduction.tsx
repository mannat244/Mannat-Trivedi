import React from 'react';
import { TextReveal } from './ui/text-reveal';

import { motion } from 'framer-motion';

export function Introduction() {
  return (
    <section className="py-32 md:py-48 bg-[#0a0a0a] relative z-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-editorial text-4xl md:text-6xl text-white italic mb-12">
          I like building things that don't need an explanation.
        </h2>
        
        <div className="space-y-8 text-xl md:text-2xl font-light text-zinc-400 leading-relaxed mb-16">
          <p>A good product should make sense before you read its documentation.</p>
          <p>
            That's something I keep coming back to while building — whether it's an app for reporting problems on campus, a recommendation engine, or an AI system that turns questions into SQL.
          </p>
          <p>
            I like understanding the problem, building the thing, and then going deeper when something doesn't feel right.
          </p>
        </div>

        <div className="pt-8 border-t border-zinc-900">
          <TextReveal 
            text="I build things, break them, make them faster, and occasionally wonder why I started." 
            className="font-sans text-2xl md:text-3xl lg:text-4xl text-zinc-300 font-light tracking-tight"
          />
        </div>
      </div>
    </section>
  );
}
