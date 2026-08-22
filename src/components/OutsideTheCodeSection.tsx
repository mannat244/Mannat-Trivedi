import React from 'react';
import { User, Film, Music, Compass, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { PERSONAL_INTERESTS } from '../data/notes';

export const OutsideTheCodeSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <User className="w-3.5 h-3.5" />
            <span>HUMAN BEHIND THE CODE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Outside the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Terminal</span>.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
            Software is built by human beings with obsessions, tastes, and endless curiosity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Currently Dynamic Panel */}
          <div className="lg:col-span-5 bg-[#121215] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-mono text-zinc-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-pulse-subtle" />
                CURRENTLY
              </span>
              <span className="text-[10px] font-mono text-zinc-500">MANUALLY UPDATED</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-zinc-500 uppercase">Building →</span>
                <p className="text-zinc-200 font-medium">{PROFILE.currently.building}</p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-500 uppercase">Learning →</span>
                <p className="text-zinc-200 font-medium">{PROFILE.currently.learning}</p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-500 uppercase">Exploring →</span>
                <p className="text-zinc-200 font-medium">{PROFILE.currently.exploring}</p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-500 uppercase">Listening →</span>
                <p className="text-zinc-300 font-medium">{PROFILE.currently.listeningTo}</p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-500 uppercase">Watching →</span>
                <p className="text-indigo-400 font-medium">{PROFILE.currently.watching}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Taste Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Film & Cinema */}
            <div className="bg-[#121215] border border-zinc-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-zinc-300 font-bold text-base">
                <Film className="w-4 h-4 text-purple-400" />
                <span>Cinema & Storytelling</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                {PERSONAL_INTERESTS.movies.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-zinc-600">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Music & Soundtracks */}
            <div className="bg-[#121215] border border-zinc-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-zinc-300 font-bold text-base">
                <Music className="w-4 h-4 text-zinc-300" />
                <span>Music & Soundscapes</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-400 font-mono">
                {PERSONAL_INTERESTS.music.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-zinc-600">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Obsessions */}
            <div className="sm:col-span-2 bg-[#121215] border border-zinc-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-zinc-300 font-bold text-base">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>Current Obsessions</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PERSONAL_INTERESTS.obsessions.map((obs, idx) => (
                  <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-zinc-300">
                    {obs}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
