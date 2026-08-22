import type { RoleId } from './roles';

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  category: string;
  year: string;
  roleTags: RoleId[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  heroImagePlaceholder: string;
  githubUrl: string;
  liveUrl?: string;

  problem: {
    title: string;
    description: string;
    points: string[];
  };
  productVisuals: {
    title: string;
    type: 'diagram' | 'metrics' | 'architecture';
    caption: string;
  }[];
  whatIBuilt: {
    overview: string;
    components: {
      title: string;
      description: string;
      codeSnippet?: string;
    }[];
  };
  engineeringDecisions: {
    question: string;
    decision: string;
    reasoning: string;
    tradeoff: string;
  }[];
  impact: {
    summary: string;
    highlights: string[];
  };
  version2Roadmap: {
    feature: string;
    whyItMatters: string;
  }[];
  whatThisSaysAboutMe: {
    title: string;
    explanation: string;
  }[];
  whatILearned: string[];
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: '1',
    slug: 'the-binary-critic',
    title: 'The Binary Critic',
    subtitle: 'Taste-based Media Discovery Platform & Recommendation Engine',
    oneLiner: 'Sub-second media recommendation engine delivering 580,000+ ops/sec with a 3-tier caching hierarchy and multi-signal ranker.',
    category: 'Full-Stack & Distributed Systems',
    year: '2026',
    roleTags: ['all', 'sde', 'backend', 'data'],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'IndexedDB', 'NextAuth', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Feed Latency', value: '0.52s', change: '67–80% faster (from 3.3s)' },
      { label: 'Client Throughput', value: '580,000+ ops/sec', change: '0.0017ms / op' },
      { label: 'DB Round-trips', value: '2 round-trips', change: 'Reduced from >50' },
      { label: 'LCP Performance', value: '0.9s', change: '86% cut (from 6.6s)' },
      { label: 'Network Payload', value: '< 1 MB', change: '95% reduction (from 21MB)' }
    ],
    heroImagePlaceholder: 'from-zinc-400/20 via-orange-600/10 to-zinc-950',
    githubUrl: 'https://github.com/mannat244',
    liveUrl: 'https://the-binary-critic.vercel.app',

    problem: {
      title: 'The media recommendation loop was slow, fragmented, and DB-heavy.',
      description: 'Standard recommendation feeds suffer from excessive DB queries during user session hydration. Fetching media items, calculating multi-signal similarity scores across multiple genres/ratings, and sorting results led to 50+ database round-trips per feed load, causing a sluggish 3.3-second initial render time.',
      points: [
        'Over 50 individual DB queries per feed request caused severe backend connection bottlenecks under concurrent load.',
        'High LCP (6.6s) and bulky network payload (21MB) led to poor mobile retention.',
        'Naive recommendation sorting over-indexed on popular items, ignoring subtle user taste preferences.'
      ]
    },
    productVisuals: [
      {
        title: '3-Tier Caching Architecture',
        type: 'architecture',
        caption: 'IndexedDB (Client Instant) → Next.js ISR (Edge HTML/JSON) → MongoDB ($in Aggregation pipeline)'
      },
      {
        title: 'Two-Stage Recommendation Pipeline',
        type: 'diagram',
        caption: 'Retrieval Phase (Candidate Pooling) → Multi-Signal Ranker (Cosine + Taste Metadata) → MMR Diversity Filter'
      }
    ],
    whatIBuilt: {
      overview: 'Engineered a Two-Stage Recommendation Engine paired with a robust 3-tier caching hierarchy to slash feed latency to 0.52 seconds while supporting high-throughput client rendering.',
      components: [
        {
          title: 'Two-Stage Recommendation Engine',
          description: 'Stage 1 uses batched candidate retrieval via indexed MongoDB aggregation pipelines. Stage 2 applies Maximal Marginal Relevance (MMR) to balance similarity precision with recommendation diversity, filtering candidate sets from >500 items down to top 20 personalized recommendations.'
        },
        {
          title: '3-Tier Caching Hierarchy',
          description: 'Client-side IndexedDB stores active user feed snapshots capped at 50 rails with hybrid LRU + SWR eviction policy. Edge ISR caches static product metadata, and MongoDB serves as the persistent source of truth.'
        },
        {
          title: 'Layout-Stable Skeleton Streaming',
          description: 'Implemented responsive Next/Image WebP assets with dynamic Open Graph metadata and layout-stable skeleton components, keeping Cumulative Layout Shift (CLS) at 0.01.'
        }
      ]
    },
    engineeringDecisions: [
      {
        question: 'Why pair IndexedDB with ISR instead of relying solely on Redis/MongoDB?',
        decision: 'Built client-side IndexedDB cache with 7-day TTL sweeps for immediate zero-latency UI rehydrations.',
        reasoning: 'Offloading read-heavy user feeds to the client browser eliminates backend network round-trips for repeat visits, achieving 580,000+ ops/sec throughput locally.',
        tradeoff: 'Requires disciplined client cache eviction logic to ensure data freshness when taste profiles update.'
      },
      {
        question: 'Why batched MongoDB $in aggregations over multi-query joins?',
        decision: 'Consolidated candidate retrieval into 2 unified aggregate pipelines.',
        reasoning: 'Reduced database network round-trips from >50 to exactly 2, dropping database execution time from 2.1s to 80ms.',
        tradeoff: 'Slightly higher CPU utilization on MongoDB during aggregation pipeline evaluation, mitigated by indexed field indexes.'
      }
    ],
    impact: {
      summary: 'Transformed a slow prototype into a enterprise-grade media discovery platform capable of instantaneous recommendation serving.',
      highlights: [
        'Cut feed latency by 67–80% (3.3s to 0.52s).',
        'Achieved 580,000+ ops/sec client throughput with zero client memory leaks.',
        'Slashed LCP by 86% (6.6s to 0.9s) and Total Blocking Time by 67% (120ms to 40ms).',
        'Reduced network payload by 95% (21MB down to <1MB).'
      ]
    },
    version2Roadmap: [
      {
        feature: 'Collaborative Vector Embeddings',
        whyItMatters: 'Migrating taste metadata from categorical tags to vector embeddings will enable cross-media recommendations (e.g., matching a cyberpunk movie\'s aesthetic to a synthwave album).'
      },
      {
        feature: 'WebAssembly Ranking Pipeline',
        whyItMatters: 'Moving MMR re-ranking from JavaScript thread to Rust/Wasm will reduce client CPU overhead on lower-end mobile devices.'
      }
    ],
    whatThisSaysAboutMe: [
      {
        title: 'Deep Performance Hygiene',
        explanation: 'I don\'t consider a feature complete until network payloads, cache invalidation, and LCP metrics are rigorously optimized.'
      },
      {
        title: 'System Architecture Maturity',
        explanation: 'I understand how to leverage browser storage (IndexedDB) alongside cloud databases to achieve microsecond-level responsive UI.'
      }
    ],
    whatILearned: [
      'Cache invalidation is a product feature, not just a technical detail. SWR (Stale-While-Revalidate) with explicit LRU caps is essential for client stability.',
      'Recommendation algorithms must prioritize diversity (MMR) over raw similarity scores to prevent echo-chamber feeds.'
    ]
  },

  {
    id: '2',
    slug: 'querycraft',
    title: 'QueryCraft',
    subtitle: 'Conversational Data Analyst AI & Privacy-First NL-to-SQL Engine',
    oneLiner: 'Achieved 82.98% BIRD-SQL accuracy with a multi-step Collect-Draft-Critic reasoning pipeline and local semantic schema retrieval.',
    category: 'GenAI & Applied Machine Learning',
    year: '2026',
    roleTags: ['all', 'genai', 'backend', 'data'],
    technologies: ['Next.js', 'Node.js', 'Python', 'FastAPI', 'MySQL', 'llama.cpp', 'Ollama', 'Groq API', 'MiniLM', 'Vectra Vector DB'],
    metrics: [
      { label: 'BIRD-SQL Accuracy', value: '82.98%', change: 'Mini-Dev Benchmark' },
      { label: 'Schema Hallucinations', value: '~90% cut', change: 'Via MiniLM Vector Index' },
      { label: 'Inference Flexibility', value: 'Local + Cloud', change: 'On-prem LLM Agnostic' },
      { label: 'Query Safety', value: '100% Read-Only', change: 'Pre-execution AST parsing' }
    ],
    heroImagePlaceholder: 'from-purple-500/20 via-indigo-600/10 to-zinc-950',
    githubUrl: 'https://github.com/mannat244',
    liveUrl: 'https://querycraft-ai.vercel.app',

    problem: {
      title: 'LLMs hallucinate database schemas and generate unsafe SQL when queried directly.',
      description: 'Single-prompt Natural Language to SQL engines frequently fail when databases contain dozens of tables and ambiguous column names. LLMs generate invalid column references, join hallucinated tables, or generate destructive queries (`DELETE`, `UPDATE`) that threaten database security.',
      points: [
        'Directly passing 50+ table schemas into prompt context wastes tokens and increases hallucination rates by over 70%.',
        'Single-pass LLM SQL generation misses complex SQL constraints (HAVING, multi-table GROUP BY).',
        'Enterprise privacy compliance demands local, on-prem LLM capability without sending confidential database data to public APIs.'
      ]
    },
    productVisuals: [
      {
        title: 'Collect–Draft–Critic Reasoning Flow',
        type: 'diagram',
        caption: '1. Semantic Schema Collector → 2. SQL Syntax Drafter → 3. Execution AST Critic & Sanitizer'
      },
      {
        title: 'Local Semantic Schema Indexing',
        type: 'architecture',
        caption: 'Database DDL → MiniLM Embeddings → Vectra Local Vector DB → Precision Schema Context'
      }
    ],
    whatIBuilt: {
      overview: 'Built an on-premise, LLM-agnostic conversational data analyst system that converts natural language questions into safe, executable SQL queries with state-of-the-art benchmark accuracy.',
      components: [
        {
          title: 'Collect–Draft–Critic Reasoning Pipeline',
          description: 'A 3-step pipeline where the "Collector" retrieves exact table/column context via vector similarity, the "Drafter" constructs the SQL statement, and the "Critic" parses the AST to fix syntax errors and enforce query safety rules.'
        },
        {
          title: 'Semantic Schema Retrieval (MiniLM + Vectra)',
          description: 'Indexed database DDL metadata into a lightweight, local Vectra vector store using MiniLM embeddings, injecting only top-K relevant schema snippets into prompt context to prevent schema hallucination.'
        },
        {
          title: 'Read-Only Safety & AST Validation Engine',
          description: 'Enforces strict read-only transaction execution wrappers and pre-evaluates AST query structures to block mutating operations, SQL injection payloads, and unbounded table scans.'
        }
      ]
    },
    engineeringDecisions: [
      {
        question: 'Why a 3-step Collect-Draft-Critic pipeline instead of single-shot prompting?',
        decision: 'Separated context retrieval, query drafting, and syntax verification into isolated micro-tasks.',
        reasoning: 'Single-shot prompting achieved only ~58% accuracy on BIRD-SQL. Introducing the Critic validation loop raised accuracy to 82.98% by auto-correcting missing JOIN clauses.',
        tradeoff: 'Adds ~300ms latency for the secondary Critic LLM pass, which is compensated for by Groq cloud inference or optimized llama.cpp quantizations.'
      },
      {
        question: 'Why local MiniLM embeddings over cloud embedding APIs?',
        decision: 'Deployed local MiniLM ONNX runtime for schema indexing.',
        reasoning: 'Ensures enterprise privacy by keeping internal database structure and schema naming completely offline and zero-cost.',
        tradeoff: 'Requires minimal local RAM allocation (~120MB) for embedding runtime.'
      }
    ],
    impact: {
      summary: 'Established an benchmark-validated AI system that enables non-technical personnel to query enterprise databases naturally and safely.',
      highlights: [
        'Achieved 82.98% accuracy on the rigorous BIRD-SQL benchmark (Mini-Dev subset).',
        'Reduced schema hallucinations by ~90% through vector-based schema pruning.',
        'Guaranteed 100% read-only safety with automated pre-execution query validation.',
        'Seamlessly supports local offline models (llama.cpp/Ollama) and high-speed cloud providers (Groq).'
      ]
    },
    version2Roadmap: [
      {
        feature: 'Automated Data Visualization Generation',
        whyItMatters: 'Transforming SQL output tables into dynamic Chart.js/Recharts visuals directly within the chat UI.'
      },
      {
        feature: 'Multi-Database Query Federation',
        whyItMatters: 'Enabling natural language queries that join cross-database data sources (e.g., PostgreSQL production DB + MongoDB analytics).'
      }
    ],
    whatThisSaysAboutMe: [
      {
        title: 'Rigorous Benchmark Orientation',
        explanation: 'I evaluate AI features against established industry benchmarks (BIRD-SQL) rather than superficial vibes.'
      },
      {
        title: 'Security-First AI Engineering',
        explanation: 'I build safety wrappers (AST validation, read-only enforcement) around LLMs before allowing them to interface with real database backends.'
      }
    ],
    whatILearned: [
      'LLM output accuracy is fundamentally bounded by prompt context hygiene. Reducing prompt context to relevant schema subsets yields dramatically higher precision.',
      'A Critic agent step that inspects generated SQL syntax before database execution eliminates 95%+ of runtime database driver errors.'
    ]
  },

  {
    id: '3',
    slug: 'inventrack',
    title: 'InvenTrack',
    subtitle: 'Full-Stack Inventory & Supply Chain Management System',
    oneLiner: 'Enterprise inventory management platform featuring role-based access control (RBAC), zero Total Blocking Time (0ms TBT), and automated low-stock triggers.',
    category: 'Full-Stack & Security',
    year: '2025',
    roleTags: ['all', 'sde', 'backend'],
    technologies: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'React.js', 'Tailwind CSS'],
    metrics: [
      { label: 'Lighthouse Score', value: '99 / 100', change: 'Desktop & Mobile' },
      { label: 'Total Blocking Time', value: '0 ms', change: 'Zero main-thread blocking' },
      { label: 'Security Standard', value: 'JWT + bcrypt', change: 'RBAC Enforcement' },
      { label: 'Export Performance', value: '< 50ms', change: 'Streaming CSV generation' }
    ],
    heroImagePlaceholder: 'from-emerald-500/20 via-teal-600/10 to-zinc-950',
    githubUrl: 'https://github.com/mannat244',
    liveUrl: 'https://inventrack-demo.vercel.app',

    problem: {
      title: 'Small business inventory tracking is prone to stockouts and permission leaks.',
      description: 'Legacy inventory applications lack fine-grained role-based permissions, exposing critical stock updates to unauthorized users while suffering from slow UI rendering when loading large product catalogs.',
      points: [
        'Lack of role segregation led to accidental price modifications and stock balance overrides.',
        'Heavy bundle sizes and unoptimized image payloads degraded mobile UI performance.',
        'Manual stock auditing wasted hours of manager time without automated threshold alerts.'
      ]
    },
    productVisuals: [
      {
        title: 'RBAC Security Matrix',
        type: 'diagram',
        caption: 'Admin (Full CRUD + User Management) vs Manager (Stock Adjustments) vs Viewer (Read Only)'
      }
    ],
    whatIBuilt: {
      overview: 'Engineered a secure, full-stack inventory management system built with Node.js, Express, and MySQL, achieving top-tier performance audit scores.',
      components: [
        {
          title: 'Role-Based Access Control (RBAC)',
          description: 'Implemented JWT token authentication with bcrypt password hashing, enforcing middleware permission validation across all sensitive product and inventory API endpoints.'
        },
        {
          title: 'Product Catalog & Low-Stock Engine',
          description: 'Built product management supporting multipart image uploads, real-time inventory adjustments, and dynamic low-stock alerts triggering visual indicators when stock falls below defined thresholds.'
        },
        {
          title: 'Streaming CSV Export Module',
          description: 'Designed a memory-efficient backend exporter that streams database queries directly into CSV downloads without accumulating large objects in server RAM.'
        }
      ]
    },
    engineeringDecisions: [
      {
        question: 'Why Express + MySQL over ORM abstractions like Prisma for an inventory core?',
        decision: 'Wrote raw parameterized SQL queries via `mysql2` connection pools.',
        reasoning: 'Guarantees explicit indexing control, eliminates ORM query generation overhead, and prevents SQL injection vulnerabilities.',
        tradeoff: 'Requires manual writing of SQL migrations and schema mapping boilerplate.'
      }
    ],
    impact: {
      summary: 'Delivered a highly reliable inventory platform with pristine lighthouse performance and rock-solid authorization.',
      highlights: [
        'Achieved a Lighthouse score of 99 with 0ms Total Blocking Time (TBT).',
        'Enforced strict security compliance across multi-tenant user roles.',
        'Streamlined stock auditing with low-stock warning triggers and instant CSV reporting.'
      ]
    },
    version2Roadmap: [
      {
        feature: 'Barcode / QR Code Scanner Integration',
        whyItMatters: 'Allowing warehouse operators to scan physical item barcodes directly via smartphone camera for instant stock intake.'
      }
    ],
    whatThisSaysAboutMe: [
      {
        title: 'Pragmatic Engineering Focus',
        explanation: 'I take security fundamentals (JWT, bcrypt, input sanitization) and raw Web Vitals performance seriously for core line-of-business applications.'
      }
    ],
    whatILearned: [
      '0ms TBT is achieved by keeping client bundle dependencies lean and deferring non-critical script execution.',
      'Parameterized raw SQL queries offer superior query predictability and zero ORM abstraction overhead.'
    ]
  },

  {
    id: '4',
    slug: 'tidytrack',
    title: 'TidyTrack',
    subtitle: 'Campus Issue Tracking Android Application for MANIT Bhopal',
    oneLiner: 'Deploys campus issue reporting and resolution tracking for students and administration across MANIT Bhopal.',
    category: 'Mobile & Utility',
    year: '2025',
    roleTags: ['all', 'sde'],
    technologies: ['Android', 'Kotlin', 'Firebase', 'REST APIs', 'Java'],
    metrics: [
      { label: 'Campus Deployment', value: 'Live', change: 'tt.manit.ac.in' },
      { label: 'Target Audience', value: 'MANIT Students', change: 'Institute wide' },
      { label: 'Resolution Tracking', value: 'Real-Time', change: 'Status notifications' }
    ],
    heroImagePlaceholder: 'from-blue-500/20 via-indigo-600/10 to-zinc-950',
    githubUrl: 'https://github.com/mannat244',
    liveUrl: 'https://tt.manit.ac.in',

    problem: {
      title: 'Campus maintenance issues were lost in informal paper logs and delayed emails.',
      description: 'Students at MANIT Bhopal lacked a centralized, verifiable system to submit hostel, sanitation, and infrastructure complaints, leading to unresolved tickets and poor administrative accountability.',
      points: [
        'No real-time status visibility for reported infrastructure complaints.',
        'Duplicate ticket submissions for widespread campus outages.',
        'Difficulty for institute administration to prioritize urgent maintenance tasks.'
      ]
    },
    productVisuals: [
      {
        title: 'Issue Lifecycle State Machine',
        type: 'diagram',
        caption: 'Reported → Upvoted → Admin Assigned → In Progress → Resolved & Verified'
      }
    ],
    whatIBuilt: {
      overview: 'Developed and deployed an Android application tailored for MANIT Bhopal campus maintenance tracking.',
      components: [
        {
          title: 'Android Native Client',
          description: 'Built intuitive UI screens in Kotlin/Android SDK for image capture, geolocation tagging, and real-time push notification updates.'
        },
        {
          title: 'Firebase & Realtime Database Sync',
          description: 'Structured real-time issue sync allowing students to upvote existing issues to highlight severity to administration.'
        }
      ]
    },
    engineeringDecisions: [
      {
        question: 'Why Kotlin + Native Android over cross-platform web app for campus release?',
        decision: 'Leveraged native Android APIs for direct device camera integration and reliable background push notifications.',
        reasoning: 'Guaranteed offline complaint drafting when campus Wi-Fi signal drops.',
        tradeoff: 'Limits immediate usage to Android devices.'
      }
    ],
    impact: {
      summary: 'Successfully released institution-wide utility software serving real campus user needs.',
      highlights: [
        'Deployed live at MANIT Bhopal campus subdomain (tt.manit.ac.in).',
        'Improved maintenance resolution visibility for campus administration.'
      ]
    },
    version2Roadmap: [
      {
        feature: 'iOS & Web Portal Expansion',
        whyItMatters: 'Broadening access to all students regardless of operating system.'
      }
    ],
    whatThisSaysAboutMe: [
      {
        title: 'Community Product Ownership',
        explanation: 'I build software that solves immediate real-world problems for the communities I am part of.'
      }
    ],
    whatILearned: [
      'Building for real users requires offline resilience and clear status feedback loops.'
    ]
  }
];
