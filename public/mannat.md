# Mannat Trivedi
**Software Engineer**

- **Email:** [mannateducation@gmail.com](mailto:mannateducation@gmail.com)
- **Phone:** +91 9893483451
- **Portfolio:** [mannat244.github.io/Mannat-Trivedi](https://mannat244.github.io/Mannat-Trivedi/)
- **GitHub:** [github.com/mannat244](https://github.com/mannat244)
- **LinkedIn:** [linkedin.com/in/mannattrivedi](https://www.linkedin.com/in/mannattrivedi/)
- **LeetCode:** [leetcode.com/u/MannatTrivedi](https://leetcode.com/u/MannatTrivedi/)

---

## Executive Summary
Results-driven Software Engineer with a strong foundation in core computer science, system design, and full-stack development. Demonstrated capability in architecting high-performance, production-ready systems, optimizing latency, and integrating AI capabilities. Proven ability to deliver scalable solutions in both enterprise (Bosch) and independent environments.

---

## Education
**B.Tech in Computer Science and Engineering**  
Maulana Azad National Institute of Technology (MANIT), Bhopal  
*Expected 2027* | *CGPA: 8.64*

**12th Grade (CBSE Board)**  
RD Public School, Betul  
*2023* | *Score: 91.4%*

---

## Technical Skills
- **Core CS Fundamentals:** Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, Memory Management, System Design
- **Languages:** C++, C, JavaScript, HTML, CSS, Tailwind CSS
- **Backend & Web:** Node.js, Express.js, React.js, Next.js, REST APIs
- **Databases:** MySQL, MongoDB, IndexedDB
- **Tools & Platforms:** Git, GitHub, Postman, MongoDB Compass, Ollama, Vercel, Railway, Render, Azure, SAP BTP Cloud Foundry

---

## Experience
**Software Engineering Intern**  
*Bosch Global Software Technologies (BGSW)* | *May 2026 – July 2026*
- Developed and deployed an internal Employee Skill Assessment Platform for the TAF Department using React.js and Express.js, reducing assessment submission time by 40–50% through bulk uploads and dynamic form generation.
- Implemented secure Microsoft Entra ID (Azure MSAL) authentication with Microsoft Graph API and SharePoint integration, improving enterprise data security, consistency, and centralized data management.
- Engineered scalable backend services for reliable concurrent request handling and successfully deployed the application on SAP BTP Cloud Foundry.

---

## Selected Projects & System Architecture

### The Binary Critic — Taste-based Media Discovery Platform
*Next.js, Node.js, MongoDB, IndexedDB, NextAuth*
- **Algorithmic Search:** Engineered a Two-Stage Recommendation Engine (Retrieval → Multi-Signal Ranker → MMR), cutting feed latency by 67–80% (3.3s to 0.52s) by pairing a Metadata similarity algorithm with batched `$in` aggregations that reduced DB round-trips from >50 to 2.
- **Caching Hierarchy:** Architected a 3-tier caching hierarchy (IndexedDB → Next.js ISR → MongoDB), achieving 580,000+ ops/sec client throughput (0.0017ms/op) and zero memory leaks via a Hybrid LRU + SWR eviction policy capped at 50 rails with indexed cursor-based pruning and 7-day TTL sweeps.
- **Frontend Optimization:** Slashed LCP by 86% (6.6s to 0.9s), TBT by 67% (120ms to 40ms), network payload by 95% (21MB to <1MB), and reducing CLS to 0.01 via layout-stable skeleton streaming, responsive Next/Image WebP delivery, and dynamic Open Graph structured metadata.

### QueryCraft — Conversational Data Analyst
*Next.js, Node.js, MySQL, llama.cpp, Ollama, Groq, MiniLM, Vectra*
- **AI Pipeline:** Achieved 82.98% accuracy on the BIRD-SQL benchmark (Mini-Dev) Subset using a multi-step (Collect–Draft–Critic) reasoning pipeline for structured NL-to-SQL generation.
- **RAG Architecture:** Reduced schema hallucinations by ~90% by introducing local semantic schema retrieval with MiniLM embeddings and a lightweight Vectra-backed vector index.
- **Security:** Built an on-prem, LLM-agnostic, privacy-first system supporting local and cloud inference, with read-only enforcement and pre-execution validation for safe SQL execution.

### InvenTrack — Inventory Management System
*Node.js, Express, MySQL, JWT, bcrypt*
- Engineered RBAC with JWT authentication and bcrypt password hashing, enabling permission-based access.
- Built product management with image uploads, low-stock alerts, and CSV export, achieving a Lighthouse score of 99 with 0ms TBT.

### TidyTrack — Campus Issue Tracking
- Built and deployed a campus issue tracking Android app for MANIT (tt.manit.ac.in).

---

## Achievements & Milestones
- **Extensive DSA & Problem Solving:** Consistent practice across LeetCode and other platforms, mastering core data structures and advanced problem-solving patterns.
- **3rd Place — CodeRush Web Development Contest:** Developed a robust quiz platform using HTML, CSS, and JS under tight time constraints.
