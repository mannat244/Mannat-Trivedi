import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Cpu, Lightbulb, CheckCircle2, Zap, HelpCircle, Layers } from 'lucide-react';
import type { ProjectCaseStudy } from '../data/projects';
import { GithubIcon } from './ui/Icons';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#09090b] border border-zinc-800 rounded-2xl shadow-2xl z-10 text-zinc-100 divide-y divide-zinc-800/80"
        >
          <div className="sticky top-0 z-20 bg-[#09090b]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 font-semibold">
                CASE STUDY
              </span>
              <span className="text-xs font-mono text-zinc-400">{project.category} • {project.year}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-10 space-y-10">

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-zinc-100 tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300/90 leading-snug">
                "{project.subtitle}"
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-xs font-semibold hover:border-zinc-500 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-300 text-zinc-950 text-xs font-bold hover:bg-zinc-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Product Launch</span>
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 font-mono">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-2 space-y-0.5">
                  <span className="block text-[11px] text-zinc-500">{m.label}</span>
                  <span className="text-base sm:text-lg font-bold text-zinc-300">{m.value}</span>
                  {m.change && <span className="block text-[10px] text-zinc-400">{m.change}</span>}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 border-b border-zinc-800 pb-2">
                <HelpCircle className="w-5 h-5 text-zinc-300" />
                <span>1. The Problem</span>
              </h2>
              <p className="text-base font-semibold text-zinc-200">{project.problem.title}</p>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.problem.description}</p>
              <ul className="space-y-2 pt-1">
                {project.problem.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                    <span className="text-zinc-300 mt-1">✕</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 border-b border-zinc-800 pb-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                <span>2. Product Architecture & Workflow</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.productVisuals.map((vis, idx) => (
                  <div key={idx} className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 space-y-2 font-mono text-xs">
                    <span className="text-zinc-300 font-bold block">{vis.title}</span>
                    <p className="text-zinc-400 text-[11px] leading-normal">{vis.caption}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 border-b border-zinc-800 pb-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span>3. What I Built & Implementation Details</span>
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.whatIBuilt.overview}</p>
              <div className="space-y-3 pt-2">
                {project.whatIBuilt.components.map((comp, idx) => (
                  <div key={idx} className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 space-y-1.5">
                    <h3 className="font-bold text-sm text-zinc-200">{comp.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{comp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 border-b border-zinc-800 pb-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>4. Critical Engineering Decisions & Trade-offs</span>
              </h2>
              <div className="space-y-4">
                {project.engineeringDecisions.map((dec, idx) => (
                  <div key={idx} className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5 space-y-2">
                    <p className="text-xs font-mono text-zinc-300 font-bold">DECISION #{idx + 1}: {dec.question}</p>
                    <p className="text-sm font-semibold text-zinc-200">Chosen Approach: {dec.decision}</p>
                    <p className="text-xs text-zinc-300"><strong className="text-zinc-400">Reasoning:</strong> {dec.reasoning}</p>
                    <p className="text-xs text-zinc-400 italic"><strong className="text-zinc-300/80 font-normal">Trade-off Accepted:</strong> {dec.tradeoff}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 border-b border-zinc-800 pb-2">
                <CheckCircle2 className="w-5 h-5 text-zinc-300" />
                <span>5. Measurable Outcomes & Impact</span>
              </h2>
              <p className="text-sm text-zinc-300">{project.impact.summary}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.impact.highlights.map((hl, idx) => (
                  <li key={idx} className="bg-zinc-900/60 border border-zinc-800/80 rounded-lg p-3 text-xs text-zinc-300 flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 border-b border-zinc-800 pb-2">
                <Lightbulb className="w-5 h-5 text-sky-400" />
                <span>6. What I'd Build in Version 2.0</span>
              </h2>
              <div className="space-y-3">
                {project.version2Roadmap.map((v2, idx) => (
                  <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 space-y-1 font-mono text-xs">
                    <span className="text-sky-400 font-bold block">{v2.feature}</span>
                    <p className="text-zinc-400">{v2.whyItMatters}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2 border-b border-zinc-800 pb-2">
                <ShieldCheck className="w-5 h-5 text-zinc-300" />
                <span>7. Hiring Value — What This Says About Me</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.whatThisSaysAboutMe.map((w, idx) => (
                  <div key={idx} className="bg-zinc-300/5 border border-zinc-300/20 rounded-xl p-4 space-y-1">
                    <span className="text-xs font-mono font-bold text-zinc-300 block">{w.title}</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">{w.explanation}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">8. Reflection & Engineering Takeaway</h2>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-xs text-zinc-300 space-y-2">
                {project.whatILearned.map((item, idx) => (
                  <p key={idx}>• {item}</p>
                ))}
              </div>
            </div>

          </div>

          <div className="p-6 bg-zinc-900/90 flex items-center justify-between border-t border-zinc-800">
            <span className="text-xs font-mono text-zinc-500">Mannat Trivedi — Case Study Specification</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-zinc-800 text-zinc-200 hover:bg-zinc-700 text-xs font-bold transition-colors"
            >
              Close Launch Page
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
