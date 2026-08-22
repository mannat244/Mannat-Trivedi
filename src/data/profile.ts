export interface Profile {
  name: string;
  tagline: string;
  heroHeadline: string;
  subStatement: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  leetcode: string;
  education: {
    degree: string;
    institution: string;
    gpa: string;
    period: string;
    schooling: string;
    schoolScore: string;
  };
  currently: {
    building: string;
    learning: string;
    exploring: string;
    listeningTo: string;
    watching: string;
  };
  stats: {
    dsaSolved: number;
    benchmarkAccuracy: string;
    cacheThroughput: string;
  };
}

export const PROFILE: Profile = {
  name: "Mannat Trivedi",
  tagline: "Software Engineer · Systems & AI Builder",
  heroHeadline: "The more you scroll, the more reasons you get to connect with me.",
  subStatement: "I don't just build code to satisfy requirements—I design high-throughput caching hierarchies, hallucination-resistant AI pipelines, and software people actually rely on.",
  email: "mannateducation@gmail.com",
  phone: "+91 9893483451",
  location: "Bhopal, India",
  github: "https://github.com/mannat244",
  linkedin: "https://linkedin.com/in/mannat-trivedi",
  leetcode: "https://leetcode.com",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "MANIT Bhopal",
    gpa: "8.64 CGPA",
    period: "2023 – 2027",
    schooling: "12th CBSE Board (RD Public School)",
    schoolScore: "91.4%"
  },
  currently: {
    building: "Distributed caching layer & Privacy-first Agentic Workflows",
    learning: "Low-latency C++ memory pools & Vector index compaction",
    exploring: "Sub-millisecond local RAG architectures",
    listeningTo: "Hans Zimmer & Lo-Fi Synthwave",
    watching: "Oppenheimer & Silicon Valley"
  },
  stats: {
    dsaSolved: 250,
    benchmarkAccuracy: "82.98% (BIRD-SQL)",
    cacheThroughput: "580,000+ ops/sec"
  }
};
