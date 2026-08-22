export type RoleId = 'all' | 'sde' | 'backend' | 'genai' | 'data';

export interface RoleConfig {
  id: RoleId;
  label: string;
  badge: string;
  headlineAccent: string;
  description: string;
  resumeFileName: string;
  resumeTitle: string;
  accentColorClass: string;
  borderColorClass: string;
  glowColor: string;
  featuredProjects: string[]; // project slugs in priority order
  skillsFocus: string[]; // skill names to highlight
}

export const ROLES: Record<RoleId, RoleConfig> = {
  all: {
    id: 'all',
    label: 'General / All',
    badge: 'Product & Systems',
    headlineAccent: 'building high-impact software systems',
    description: 'Explore Mannat\'s complete engineering footprint across full-stack architecture, backend infrastructure, and AI systems.',
    resumeFileName: 'Mannat_Trivedi_Resume_General.pdf',
    resumeTitle: 'General Software Engineering Resume',
    accentColorClass: 'text-zinc-300',
    borderColorClass: 'border-zinc-400/30',
    glowColor: 'rgba(251, 191, 36, 0.15)',
    featuredProjects: ['the-binary-critic', 'querycraft', 'inventrack', 'tidytrack'],
    skillsFocus: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'MySQL', 'Python', 'C++']
  },
  sde: {
    id: 'sde',
    label: 'Software Dev Engineer (SDE)',
    badge: 'Full-Stack SDE',
    headlineAccent: 'shipping resilient, end-to-end web applications',
    description: 'Focused on clean architecture, client-side caching (IndexedDB/SWR), micro-frontends, and enterprise authentication systems.',
    resumeFileName: 'Mannat_Trivedi_Resume_SDE.pdf',
    resumeTitle: 'SDE Focused Resume',
    accentColorClass: 'text-indigo-400',
    borderColorClass: 'border-indigo-500/30',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    featuredProjects: ['the-binary-critic', 'inventrack', 'tidytrack', 'querycraft'],
    skillsFocus: ['React.js', 'Next.js', 'JavaScript', 'C++', 'Node.js', 'IndexedDB', 'Tailwind CSS', 'REST APIs']
  },
  backend: {
    id: 'backend',
    label: 'Backend Engineer',
    badge: 'High-Throughput Systems',
    headlineAccent: 'architecting low-latency, scalable backend pipelines',
    description: 'Focused on multi-tier caching, database query optimization ($in aggregations), RBAC security, and reliable API services.',
    resumeFileName: 'Mannat_Trivedi_Resume_Backend.pdf',
    resumeTitle: 'Backend Engineering Resume',
    accentColorClass: 'text-emerald-400',
    borderColorClass: 'border-emerald-500/30',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    featuredProjects: ['the-binary-critic', 'inventrack', 'querycraft'],
    skillsFocus: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'FastAPI', 'JWT', 'IndexedDB', 'REST APIs', 'SAP BTP']
  },
  genai: {
    id: 'genai',
    label: 'GenAI / LLM Engineer',
    badge: 'Applied AI & RAG',
    headlineAccent: 'building accuracy-focused, hallucination-resistant LLM systems',
    description: 'Focused on NL-to-SQL generation (BIRD-SQL 82.98%), multi-step reasoning pipelines (Collect-Draft-Critic), vector indexing, and privacy-first local inferencing.',
    resumeFileName: 'Mannat_Trivedi_Resume_GenAI.pdf',
    resumeTitle: 'GenAI & Machine Learning Resume',
    accentColorClass: 'text-purple-400',
    borderColorClass: 'border-purple-500/30',
    glowColor: 'rgba(168, 85, 247, 0.15)',
    featuredProjects: ['querycraft', 'the-binary-critic'],
    skillsFocus: ['Python', 'FastAPI', 'Ollama', 'llama.cpp', 'MiniLM', 'Vectra Vector DB', 'RAG', 'Groq API']
  },
  data: {
    id: 'data',
    label: 'Data Systems',
    badge: 'Data Pipelines & Storage',
    headlineAccent: 'optimizing database throughput and structured intelligence',
    description: 'Focused on schema optimization, vector embeddings, relational benchmarking, and cursor-based data pruning sweeps.',
    resumeFileName: 'Mannat_Trivedi_Resume_Data.pdf',
    resumeTitle: 'Data Systems Resume',
    accentColorClass: 'text-sky-400',
    borderColorClass: 'border-sky-500/30',
    glowColor: 'rgba(56, 189, 248, 0.15)',
    featuredProjects: ['querycraft', 'the-binary-critic', 'inventrack'],
    skillsFocus: ['MySQL', 'MongoDB', 'MiniLM', 'Vectra', 'Data Structures & Algorithms', 'IndexedDB', 'Aggregation Pipelines']
  }
};
