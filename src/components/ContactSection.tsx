import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { TextReveal } from './ui/text-reveal';
import { useForm, ValidationError } from '@formspree/react';

export function ContactSection() {
  const [state, handleSubmit] = useForm('xeajdkpv');

  return (
    <section className="py-40 bg-[#0a0a0a] relative z-10 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-4xl text-center">
        <TextReveal 
          text="If you've made it this far, we should probably talk." 
          className="font-editorial text-6xl md:text-8xl text-white italic mb-16 justify-center leading-none" 
        />
        
        <div className="max-w-2xl mx-auto space-y-6 text-xl md:text-2xl font-light text-zinc-400 leading-relaxed mb-24">
          <p>I'm always ready to connect.</p>
          <p>If you're building something interesting, hiring for something I might fit, or simply want to talk about a problem worth solving — drop your details.</p>
          <p className="text-white font-bold">I'll contact you.</p>
        </div>

        {state.succeeded ? (
          <div className="max-w-xl mx-auto glass-panel p-12 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 flex flex-col items-center justify-center space-y-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
            <div className="space-y-2">
              <h3 className="font-editorial text-3xl text-white italic">Message received.</h3>
              <p className="text-zinc-400 font-light text-lg">I'll get back to you as soon as possible.</p>
            </div>
          </div>
        ) : (
          <form className="max-w-xl mx-auto space-y-6 text-left" onSubmit={handleSubmit}>
            <div>
              <input 
                id="name"
                name="name"
                type="text" 
                placeholder="Your name" 
                required
                className="w-full bg-transparent border-b border-zinc-800 text-white font-light text-xl py-4 focus:outline-none focus:border-zinc-300 transition-colors placeholder:text-zinc-600"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-2" />
            </div>
            <div>
              <input 
                id="email"
                name="email"
                type="email" 
                placeholder="Your email" 
                required
                className="w-full bg-transparent border-b border-zinc-800 text-white font-light text-xl py-4 focus:outline-none focus:border-zinc-300 transition-colors placeholder:text-zinc-600"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-2" />
            </div>
            <div>
              <textarea 
                id="message"
                name="message"
                placeholder="What are you thinking about?" 
                rows={3}
                required
                className="w-full bg-transparent border-b border-zinc-800 text-white font-light text-xl py-4 focus:outline-none focus:border-zinc-300 transition-colors placeholder:text-zinc-600 resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-2" />
            </div>

            <button 
              type="submit"
              disabled={state.submitting}
              className="group flex items-center gap-4 text-white font-mono text-sm tracking-widest uppercase mt-12 hover:text-zinc-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'SENDING...' : "I'LL CONTACT YOU"} 
              {!state.submitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
