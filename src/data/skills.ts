export interface SkillItem {
  name: string;
  levelTag?: string;
  whereUsed: {
    projectName: string;
    projectSlug: string;
    context: string;
  }[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    iconName: 'Code',
    skills: [
      {
        name: 'C++',
        whereUsed: [
          {
            projectName: '250+ DSA Solutions',
            projectSlug: 'achievements',
            context: 'Implemented complex data structures (graphs, trees, heaps) and dynamic programming algorithms with strict memory & execution limits.'
          }
        ]
      },
      {
        name: 'JavaScript / TypeScript',
        whereUsed: [
          {
            projectName: 'The Binary Critic',
            projectSlug: 'the-binary-critic',
            context: 'Built full-stack Next.js 14 applications with strict TypeScript interfaces for recommendation pipeline data models.'
          },
          {
            projectName: 'Bosch Internship',
            projectSlug: 'bosch-experience',
            context: 'Developed React & Express enterprise platforms.'
          }
        ]
      },
      {
        name: 'Python',
        whereUsed: [
          {
            projectName: 'QueryCraft',
            projectSlug: 'querycraft',
            context: 'Engineered FastAPI backend microservices for MiniLM vector schema retrieval and Ollama/Groq inference pipelines.'
          }
        ]
      },
      {
        name: 'C',
        whereUsed: [
          {
            projectName: 'MANIT Core CS',
            projectSlug: 'achievements',
            context: 'Low-level systems programming, memory management, pointer manipulation, and OS process scheduling simulations.'
          }
        ]
      },
      {
        name: 'Kotlin',
        whereUsed: [
          {
            projectName: 'TidyTrack',
            projectSlug: 'tidytrack',
            context: 'Developed native Android campus issue tracking application with Firebase SDK.'
          }
        ]
      }
    ]
  },

  {
    category: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      {
        name: 'Node.js & Express.js',
        whereUsed: [
          {
            projectName: 'The Binary Critic',
            projectSlug: 'the-binary-critic',
            context: 'Built custom recommendation re-ranking microservices with batched database aggregation queries.'
          },
          {
            projectName: 'InvenTrack',
            projectSlug: 'inventrack',
            context: 'Engineered JWT authentication and streaming CSV export pipeline.'
          }
        ]
      },
      {
        name: 'FastAPI',
        whereUsed: [
          {
            projectName: 'QueryCraft',
            projectSlug: 'querycraft',
            context: 'Async Python REST API server for vector embeddings and LLM inference calls.'
          }
        ]
      },
      {
        name: 'REST APIs & RBAC Security',
        whereUsed: [
          {
            projectName: 'InvenTrack',
            projectSlug: 'inventrack',
            context: 'Role-Based Access Control middleware using JWT and bcrypt hashing.'
          },
          {
            projectName: 'Bosch Internship',
            projectSlug: 'bosch-experience',
            context: 'Microsoft Graph API & SharePoint enterprise integration.'
          }
        ]
      }
    ]
  },

  {
    category: 'Frontend Architecture',
    iconName: 'Layout',
    skills: [
      {
        name: 'React.js & Next.js',
        whereUsed: [
          {
            projectName: 'The Binary Critic',
            projectSlug: 'the-binary-critic',
            context: 'Next.js App Router, Incremental Static Regeneration (ISR), layout-stable skeleton streaming, and client SWR.'
          },
          {
            projectName: 'Bosch Internship',
            projectSlug: 'bosch-experience',
            context: 'Built dynamic enterprise forms and bulk assessment upload UI.'
          }
        ]
      },
      {
        name: 'IndexedDB & Client Caching',
        whereUsed: [
          {
            projectName: 'The Binary Critic',
            projectSlug: 'the-binary-critic',
            context: 'Achieved 580,000+ ops/sec throughput via client IndexedDB rail cache capped at 50 items with SWR eviction.'
          }
        ]
      },
      {
        name: 'Tailwind CSS & Web Vitals',
        whereUsed: [
          {
            projectName: 'InvenTrack',
            projectSlug: 'inventrack',
            context: 'Achieved Lighthouse score of 99 with 0ms Total Blocking Time (TBT).'
          }
        ]
      }
    ]
  },

  {
    category: 'Data & AI Systems',
    iconName: 'Database',
    skills: [
      {
        name: 'MySQL & Relational DBs',
        whereUsed: [
          {
            projectName: 'QueryCraft',
            projectSlug: 'querycraft',
            context: 'BIRD-SQL benchmark testing, schema indexing, and read-only AST safety validation.'
          },
          {
            projectName: 'InvenTrack',
            projectSlug: 'inventrack',
            context: 'Raw parameterized SQL queries with `mysql2` connection pooling.'
          }
        ]
      },
      {
        name: 'MongoDB & NoSQL',
        whereUsed: [
          {
            projectName: 'The Binary Critic',
            projectSlug: 'the-binary-critic',
            context: 'Batched $in aggregation pipelines reducing DB round-trips from >50 down to 2.'
          }
        ]
      },
      {
        name: 'LLMs & RAG (Ollama, llama.cpp, MiniLM)',
        whereUsed: [
          {
            projectName: 'QueryCraft',
            projectSlug: 'querycraft',
            context: 'Local vector indexing with MiniLM + Vectra, 82.98% BIRD-SQL accuracy, and Collect-Draft-Critic reasoning.'
          }
        ]
      }
    ]
  },

  {
    category: 'Tools & Cloud',
    iconName: 'Wrench',
    skills: [
      {
        name: 'Git & GitHub',
        whereUsed: [
          {
            projectName: 'All Projects',
            projectSlug: 'all',
            context: 'Version control, feature branching, and release tagging.'
          }
        ]
      },
      {
        name: 'SAP BTP Cloud Foundry & Azure MSAL',
        whereUsed: [
          {
            projectName: 'Bosch Internship',
            projectSlug: 'bosch-experience',
            context: 'Enterprise cloud app deployment and Microsoft Entra ID SSO integration.'
          }
        ]
      },
      {
        name: 'Vercel, Render & Railway',
        whereUsed: [
          {
            projectName: 'Production Releases',
            projectSlug: 'all',
            context: 'Automated CI/CD deployments for Next.js, Node.js, and Python services.'
          }
        ]
      }
    ]
  }
];
