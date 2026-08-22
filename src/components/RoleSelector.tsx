import React from 'react';
import type { RoleId } from '../data/roles';
import { ROLES } from '../data/roles';
import { Sparkles, Code2, Server, Cpu, Database, Layers } from 'lucide-react';

interface RoleSelectorProps {
  activeRole: RoleId;
  onSelectRole: (role: RoleId) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({
  activeRole,
  onSelectRole,
}) => {
  const rolesList: { id: RoleId; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Work', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'sde', label: 'SDE / Full-Stack', icon: <Code2 className="w-3.5 h-3.5" /> },
    { id: 'backend', label: 'Backend & Systems', icon: <Server className="w-3.5 h-3.5" /> },
    { id: 'genai', label: 'GenAI & RAG', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'data', label: 'Data & Benchmarking', icon: <Database className="w-3.5 h-3.5" /> },
  ];

  const currentRole = ROLES[activeRole];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="bg-[#121215]/90 border border-zinc-800/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-zinc-300 animate-pulse-subtle" />
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono font-semibold">
              Recruiter Intent Filter
            </span>
          </div>
          <span className="text-xs text-zinc-500 font-mono">
            Active view: <strong className={currentRole.accentColorClass}>{currentRole.label}</strong>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {rolesList.map((r) => {
            const isActive = activeRole === r.id;
            return (
              <button
                key={r.id}
                onClick={() => onSelectRole(r.id)}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-800 text-zinc-100 border border-zinc-600 shadow-lg scale-[1.02]'
                    : 'bg-zinc-950/60 text-zinc-400 border border-zinc-800/60 hover:text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900/80'
                }`}
              >
                {r.icon}
                <span className="truncate">{r.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-3.5 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
          <p className="truncate">
            <span className="text-zinc-300 font-medium">{currentRole.badge}:</span> {currentRole.description}
          </p>
        </div>
      </div>
    </div>
  );
};
