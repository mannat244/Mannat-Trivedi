import React, { useState } from 'react';
import { SmoothScroll } from './components/ui/SmoothScroll';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { SkillsSection } from './components/SkillsSection';
import { ProfileSection } from './components/ProfileSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import type { RoleId } from './data/roles';

export function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-zinc-100 selection:text-zinc-900">
        <CustomCursor />
        
        {/* Ambient background noise/gradient - extremely subtle */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/20 via-[#0a0a0a] to-[#0a0a0a]" />
        
        <Navbar />

        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          <Introduction />
          <ExperienceSection />
          <ProjectsSection />
          <PhilosophySection />
          <SkillsSection />
          <ProfileSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
