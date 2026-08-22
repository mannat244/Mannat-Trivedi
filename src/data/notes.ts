export interface RabbitHoleNote {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

export const RABBIT_HOLE_NOTES: RabbitHoleNote[] = [
  {
    id: '1',
    title: 'Why client-side IndexedDB caching feels instantly faster than edge serverless',
    excerpt: 'Serverless functions at the edge still incur TCP handshakes and network overhead. Moving warm user feed rails to client IndexedDB drops latency from 300ms down to 0.0017ms/op.',
    category: 'Systems Architecture',
    readTime: '3 min read',
    date: 'Aug 2026',
    content: 'When optimizing feed performance for media platforms, engineers often reach for edge caching or Redis. But the ultimate low-latency memory pool is already sitting inside your user\'s browser: IndexedDB. By building a strict LRU + SWR eviction wrapper capped at 50 rails, we bypass the network stack entirely for repeat views.'
  },
  {
    id: '2',
    title: 'The hallucination bottleneck in text-to-SQL is context hygiene, not LLM parameter size',
    excerpt: 'Passing 50 table schemas to GPT-4 leads to hallucinations. Passing 3 vector-matched schema tables to llama-3-8b yields 82.98% benchmark accuracy.',
    category: 'Applied GenAI',
    readTime: '4 min read',
    date: 'Jul 2026',
    content: 'Many teams try to fix schema hallucinations by upgrading to larger models. However, our benchmark experiments on BIRD-SQL proved that filtering database DDL down to small, relevant vector embeddings using MiniLM before prompting dramatically boosts SQL syntax correctness regardless of model size.'
  },
  {
    id: '3',
    title: 'Why engineering decisions should be documented as trade-offs, not claims',
    excerpt: 'Claiming "FastAPI is better than Node.js" is meaningless without specifying memory overhead, CPU-bound execution, and async I/O profiles.',
    category: 'Engineering Culture',
    readTime: '2 min read',
    date: 'Jun 2026',
    content: 'Great product engineers don\'t collect technologies like badges; they understand exact trade-offs. Choosing raw SQL query pools over ORM abstractions accepts migration boilerplate in exchange for absolute performance transparency and predictable connection pooling.'
  }
];

export const PERSONAL_INTERESTS = {
  movies: ['Oppenheimer', 'Interstellar', 'The Social Network'],
  music: ['Hans Zimmer Score Compositions', 'Synthwave & Lo-Fi Beats', 'Ludovico Einaudi'],
  obsessions: [
    'Sub-millisecond database query optimization',
    'Minimalist UI & Tactile Web Animations',
    'Competitive Algorithmic Problem Solving (LeetCode 250+)'
  ]
};
