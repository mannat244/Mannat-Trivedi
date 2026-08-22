import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { TextReveal } from './ui/text-reveal';

export function ProfileSection() {
  const [copied, setCopied] = useState(false);

  const copyToMarkdown = async () => {
    try {
      const response = await fetch('/mannat.md');
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <section id="role-selector" className="py-32 bg-[#0a0a0a] relative z-10 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-4xl text-center flex flex-col items-center">
        
        <TextReveal text="Want the machine-readable version?" className="font-editorial text-4xl md:text-6xl text-white italic mb-6 justify-center" />
        
        <div className="text-xl text-zinc-400 font-light space-y-2 mb-12 max-w-2xl">
          <p>If you're using an AI to evaluate candidates, give it the full picture instead of making it guess from keywords.</p>
        </div>
        
        <button
          onClick={copyToMarkdown}
          className="group flex items-center justify-center gap-4 text-white font-mono text-sm tracking-widest uppercase mb-8 hover:text-zinc-300 transition-colors bg-zinc-900/50 px-8 py-4 rounded-full border border-white/5"
        >
          {copied ? (
            <><Check className="w-4 h-4 text-emerald-400" /> COPIED TO CLIPBOARD</>
          ) : (
            <><Copy className="w-4 h-4" /> COPY PROFILE FOR AI</>
          )}
        </button>
        
        <div className="border-l-2 border-zinc-800 pl-4 py-1 italic text-zinc-500 font-light text-left">
          <p>No tricks. No hidden prompts.</p>
          <p>Just the raw context.</p>
        </div>

      </div>
    </section>
  );
}
