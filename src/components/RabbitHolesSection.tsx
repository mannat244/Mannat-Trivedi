import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ArrowRight, X } from 'lucide-react';
import { RABBIT_HOLE_NOTES } from '../data/notes';
import type { RabbitHoleNote } from '../data/notes';

export const RabbitHolesSection: React.FC = () => {
  const [activeNote, setActiveNote] = useState<RabbitHoleNote | null>(null);

  return (
    <section id="notes" className="py-20 relative bg-zinc-950/60 border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TECHNICAL ESSAYS & THOUGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Rabbit <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-emerald-400">Holes</span>.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
            Architectural explorations, engineering observations, and technical notes I've been digging into lately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RABBIT_HOLE_NOTES.map((note) => (
            <div
              key={note.id}
              onClick={() => setActiveNote(note)}
              className="group cursor-pointer bg-[#121215] border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-300/50 transition-all space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span className="text-zinc-300 font-semibold">{note.category}</span>
                  <span>{note.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-zinc-300 transition-colors">
                  {note.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {note.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-zinc-200">
                <span>Read Note</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {activeNote && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveNote(null)}
              className="fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-zinc-100 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold">
                    {activeNote.category}
                  </span>
                  <span className="text-zinc-500">{activeNote.readTime} • {activeNote.date}</span>
                </div>
                <button
                  onClick={() => setActiveNote(null)}
                  className="p-1 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-zinc-100 leading-snug">{activeNote.title}</h2>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-200 font-mono italic">
                  "{activeNote.excerpt}"
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed pt-2">
                  {activeNote.content}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex justify-end">
                <button
                  onClick={() => setActiveNote(null)}
                  className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-200 text-xs font-bold hover:bg-zinc-700 transition-colors"
                >
                  Close Note
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
