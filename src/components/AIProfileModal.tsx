import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Copy, Check, X, Download, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { RoleId } from '../data/roles';
import { generateAIProfileMarkdown } from '../data/aiProfile';

interface AIProfileModalProps {
  isOpen: boolean;
  activeRole: RoleId;
  onClose: () => void;
}

export const AIProfileModal: React.FC<AIProfileModalProps> = ({
  isOpen,
  activeRole,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const markdownContent = generateAIProfileMarkdown(activeRole);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#a855f7', '#d4d4d8', '#6366f1'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([markdownContent], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `Mannat_Trivedi_AI_Profile_${activeRole.toUpperCase()}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-[#09090b] border border-zinc-800 rounded-2xl shadow-2xl z-10 text-zinc-100 overflow-hidden"
        >
          <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-zinc-100">AI-Ready Candidate Profile Exporter</h3>
                <p className="text-xs font-mono text-zinc-400">Paste directly into ChatGPT, Claude, or internal recruiting tools</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto space-y-4 font-mono text-xs text-zinc-300 bg-zinc-950">
            <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 flex items-start gap-2.5 leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>Recruiter AI Prompt Guidance Included:</strong> This generated Markdown profile contains structured candidate evidence (BIRD-SQL accuracy, 580k ops/sec cache, Bosch internship) alongside explicit evaluation rules instructing your AI to evaluate based on demonstrated engineering capability rather than exact keyword matching.
              </span>
            </div>

            <div className="relative">
              <textarea
                readOnly
                value={markdownContent}
                className="w-full h-80 p-4 rounded-xl bg-[#121215] border border-zinc-800 text-zinc-300 font-mono text-[11px] leading-relaxed resize-none focus:outline-none focus:border-purple-500/50"
              />
            </div>
          </div>

          <div className="px-6 py-4 bg-zinc-900/90 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-zinc-500">Format: Standard Markdown (.md)</span>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 text-zinc-200 hover:bg-zinc-700 text-xs font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .md</span>
              </button>

              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-xs transition-all shadow-md ${
                  copied
                    ? 'bg-emerald-500 text-zinc-950 shadow-emerald-500/20'
                    : 'bg-purple-600 text-white hover:bg-purple-500 shadow-purple-600/20'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied Profile to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Profile for AI →</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
