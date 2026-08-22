export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  whatIWorkedOn: string;
  whatIOwned: string;
  impactMetrics: string[];
  evidence: string[];
  techStack: string[];
  roleTags: ('all' | 'sde' | 'backend' | 'genai' | 'data')[];
}

export const EXPERIENCES: WorkExperience[] = [
  {
    id: 'exp-1',
    company: 'Bosch Global Software Technologies (BGSW)',
    role: 'Software Engineering Intern',
    period: 'May 2026 – Jul 2026',
    location: 'India',
    badge: 'Enterprise Software & Cloud',
    whatIWorkedOn: 'Engineered and deployed an internal Employee Skill Assessment Platform for the TAF Department, automating skill matrix evaluation across enterprise teams.',
    whatIOwned: 'End-to-end ownership of full-stack React.js and Express.js service architecture, Microsoft Entra ID (Azure MSAL) authentication flow, and SAP BTP Cloud Foundry deployment.',
    impactMetrics: [
      'Reduced assessment submission time by 40–50% through dynamic form generation and batched bulk upload pipelines.',
      'Implemented enterprise Microsoft Entra ID (Azure MSAL) authentication with Microsoft Graph API and SharePoint integration.',
      'Architected reliable concurrent request handling services successfully deployed on SAP BTP Cloud Foundry.'
    ],
    evidence: [
      'Microsoft Entra ID MSAL Integration',
      'SharePoint API Centralized Storage',
      'SAP BTP Cloud Foundry Deployment'
    ],
    techStack: ['React.js', 'Express.js', 'Node.js', 'Azure MSAL', 'Microsoft Graph API', 'SharePoint', 'SAP BTP', 'JavaScript'],
    roleTags: ['all', 'sde', 'backend']
  }
];

export const ACHIEVEMENTS = [
  {
    title: '250+ DSA Problems Solved',
    subtitle: 'LeetCode & Problem Solving Patterns',
    description: 'Mastered core algorithmic paradigms including Dynamic Programming, Graph Traversal, Binary Search, and Tree Manipulation.',
    metric: '250+ Problems'
  },
  {
    title: '3rd Place – CodeRush Web Dev Contest',
    subtitle: 'National Coding Competition',
    description: 'Designed and engineered an interactive quiz platform under tight time constraints using pure HTML, CSS, and JS.',
    metric: '3rd Place Award'
  },
  {
    title: 'TidyTrack Campus App Launch',
    subtitle: 'MANIT Bhopal Campus Utility',
    description: 'Architected and deployed an institution-wide Android issue tracker live at tt.manit.ac.in.',
    metric: 'Live Release'
  }
];
