import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { TextReveal } from './ui/text-reveal';

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const relevantProjects = PROJECTS; // using all projects for this editorial flow

  return (
    <section id="projects" className="bg-[#0a0a0a] relative z-10" ref={containerRef}>
      {/* Intro */}
      <div className="py-48 container mx-auto px-6 max-w-4xl text-center">
        <TextReveal text="Some of these started as projects." className="font-editorial text-5xl md:text-7xl text-zinc-500 italic mb-12 justify-center" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="font-editorial text-5xl md:text-7xl text-white italic mb-12"
        >
          I stopped treating them like projects.
        </motion.p>
        <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
          These are the things I spent enough time with to care about what happened underneath the interface.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-6xl space-y-48 pb-48">

        {/* Project 1: Binary Critic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="font-mono text-[10px] tracking-widest text-zinc-300 uppercase mb-6">PRODUCT · RECOMMENDATION · PERFORMANCE</p>
            <h3 className="font-editorial text-4xl md:text-5xl text-white leading-tight mb-8">What if recommendations understood your taste, not just your clicks?</h3>
            <div className="space-y-6 text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-12">
              <p>The Binary Critic is a media discovery platform built around the idea that finding something you'll actually like is a different problem from finding something popular.</p>
              <p>Most recommendation systems are very good at telling you what's popular.<br />I wanted something closer to:<br /><strong className="text-white">"You liked this. You might actually like this too."</strong></p>
              <p>Getting the recommendation right was only half the problem.<br />The other half was making the whole thing feel fast.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-3xl text-white font-light">3.3s → 0.52s</p>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-2">Feed latency.</p>
              </div>
              <div>
                <p className="text-3xl text-white font-light">50+ → 2</p>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-2">Database round-trips.</p>
              </div>
              <div>
                <p className="text-3xl text-white font-light">21MB → &lt;1MB</p>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-2">Network payload.</p>
              </div>
            </div>

            <p className="text-zinc-400 font-light italic border-l border-zinc-800 pl-6 mb-8">
              I didn't set out to build a performance case study.<br />I just didn't like waiting for my own app.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://www.thebinarycritic.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-900 font-mono text-xs tracking-widest uppercase hover:bg-zinc-300 transition-colors">
                Experience the visual masterpiece ↗
              </a>
              <a href="https://github.com/mannat244/TheBinaryCritic" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 font-mono text-xs tracking-widest uppercase hover:bg-zinc-800 transition-colors">
                Source Code ↗
              </a>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative" data-cursor="Look under the hood ↗">
              <img src="/tbc.png" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" alt="The Binary Critic" />
            </div>
          </div>
        </div>

        <Divider text="The interface is the easy part." subtext="The interesting part starts here." />

        {/* Project 2: QueryCraft */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="bg-zinc-950 rounded-xl overflow-hidden relative border border-zinc-800 shadow-2xl flex flex-col font-mono text-xs md:text-sm h-fit max-h-[400px]" data-cursor="Inspect reasoning ↗">
              {/* Terminal Header */}
              <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-4 text-zinc-500 text-xs">querycraft ~ ./reasoning-pipeline</span>
              </div>
              {/* Terminal Body */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.8 } }
                }}
                className="p-6 flex-1 bg-zinc-950/80 text-zinc-300 space-y-4 overflow-y-auto"
              >
                <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-zinc-500">➜ <span className="text-emerald-400">user:</span> "How many orders were placed last month?"</motion.p>
                <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="space-y-1">
                  <p className="text-zinc-600">[sys] Initializing semantic schema retrieval...</p>
                  <p className="text-zinc-600">[sys] Fetched 4 relevant tables via Vectra.</p>
                </motion.div>
                <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-zinc-300/80">➜ Draft SQL generated.</motion.p>
                <motion.div variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }} className="p-3 bg-zinc-900/50 rounded border border-zinc-800/50">
                  <code className="text-sky-400 font-bold block">SELECT COUNT(*) FROM orders</code>
                  <code className="text-zinc-400 block">WHERE created_at &gt;= DATE_SUB(NOW(), INTERVAL 1 MONTH);</code>
                </motion.div>
                <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-zinc-500">➜ <span className="text-purple-400">critic:</span> "Validation passed. Read-only enforced."</motion.p>

                <motion.div variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }} className="mt-4 overflow-x-auto border border-zinc-800/50 rounded bg-zinc-900/30 p-2 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800 text-zinc-500 font-normal">
                        <th className="py-1 px-3">month</th>
                        <th className="py-1 px-3 text-right">total_orders</th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-300">
                      <tr className="border-b border-zinc-800/50">
                        <td className="py-1 px-3">2026-07</td>
                        <td className="py-1 px-3 text-right text-emerald-400">1,245</td>
                      </tr>
                      <tr>
                        <td className="py-1 px-3">2026-08</td>
                        <td className="py-1 px-3 text-right text-emerald-400">982</td>
                      </tr>
                    </tbody>
                  </table>
                </motion.div>

                <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-emerald-400 animate-pulse mt-4">_</motion.p>
              </motion.div>
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase mb-6">GENAI · DATA · BACKEND</p>
            <h3 className="font-editorial text-4xl md:text-5xl text-white leading-tight mb-8">What if asking your database a question didn't require knowing SQL?</h3>
            <div className="space-y-6 text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-12">
              <p>QueryCraft is a conversational data analyst that turns natural language into SQL — while being deliberately cautious about what it is allowed to execute.</p>
              <p>Getting an LLM to write SQL is easy. Getting it to write the <strong className="text-white">right</strong> SQL, against the <strong className="text-white">right</strong> schema, and not do something stupid with it is considerably more interesting.</p>
              <p>QueryCraft became less about "chat with your database" and more about:<br /><strong className="text-zinc-300 font-mono text-xs mt-2 block tracking-widest uppercase">retrieval → reasoning → validation → execution</strong></p>
            </div>

            <div className="glass-panel p-6 rounded-2xl mb-12">
              <p className="font-editorial text-2xl text-white italic">
                The model is allowed to be wrong.<br />
                The system isn't allowed to blindly trust it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-3xl text-white font-light">82.98%</p>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-2">BIRD-SQL Mini-Dev accuracy.</p>
              </div>
              <div>
                <p className="text-3xl text-white font-light">~90%</p>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-2">Reduction in schema hallucinations.</p>
              </div>
            </div>

            <p className="text-zinc-400 font-light italic border-l border-zinc-800 pl-6 mb-8">
              The interesting part wasn't making an LLM generate SQL.<br />It was figuring out how much infrastructure you need before you can responsibly let it do so.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/mannat244/QueryCraft" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-900 font-mono text-xs tracking-widest uppercase hover:bg-zinc-300 transition-colors">
                View Repository ↗
              </a>
            </div>
          </div>
        </div>

        <Divider text="That's the product." subtext="Here's what happened underneath." />

        {/* Project 3: TidyTrack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="font-mono text-[10px] tracking-widest text-indigo-400 uppercase mb-6">PRODUCT · ANDROID · REAL USERS</p>
            <h3 className="font-editorial text-4xl md:text-5xl text-white leading-tight mb-8">Reporting a problem shouldn't be another problem.</h3>
            <div className="space-y-6 text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-12">
              <p>TidyTrack started with a very ordinary campus problem: when something isn't working, getting it reported shouldn't require figuring out who to call, where to go, or whether anyone will see it.</p>
              <p>So I built the reporting experience around the place where the problem actually exists.</p>
              <p className="text-white font-editorial text-3xl italic py-4">Pick the place.<br />Show the problem.<br />Send the report.</p>
              <p>This one wasn't built just to sit inside a GitHub repository. It was deployed for MANIT.</p>
            </div>

            <p className="text-zinc-400 font-light italic border-l border-zinc-800 pl-6 mb-8">
              There's something different about watching someone use software you built to solve a problem you used to have yourself.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://tt.manit.ac.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-900 font-mono text-xs tracking-widest uppercase hover:bg-zinc-300 transition-colors">
                Live App ↗
              </a>
              <a href="https://github.com/mannat244/tidy-track" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 font-mono text-xs tracking-widest uppercase hover:bg-zinc-800 transition-colors">
                Source Code ↗
              </a>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative" data-cursor="See it in the wild ↗">
              <img src="/tidy.png" className="w-full h-full object-cover object-top opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" alt="TidyTrack" />
            </div>
          </div>
        </div>

        <Divider text="There's another one →" subtext="" />

        {/* Project 4: InvenTrack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-7">
            <div className="aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative" data-cursor="What happened underneath →">
              <img src="inventrack.png" className="w-full h-full object-cover object-top opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" alt="InvenTrack" />
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="font-mono text-[10px] tracking-widest text-teal-400 uppercase mb-6">BACKEND · FULL STACK</p>
            <h3 className="font-editorial text-4xl md:text-5xl text-white leading-tight mb-8">Inventory sounds simple until people actually have to manage it.</h3>
            <div className="space-y-6 text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-12">
              <p>InvenTrack started as an inventory management system and became a playground for the less glamorous parts of building an actual application:</p>
              <p>authentication, permissions, uploads, alerts, exports and performance.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl mb-12">
              <p className="text-white font-bold mb-2">CRUD is easy.</p>
              <p className="text-zinc-400 text-sm">Making CRUD behave like a real application is where things get interesting.</p>
            </div>

            <p className="text-zinc-400 font-light italic border-l border-zinc-800 pl-6 mb-8">
              It was one of the projects where I started caring less about how many features I could add and more about whether the features worked together properly.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/mannat244/inventrack" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 font-mono text-xs tracking-widest uppercase hover:bg-zinc-800 transition-colors">
                Source Code ↗
              </a>
            </div>
          </div>
        </div>

        <Divider text="Built under pressure." subtext="Hackathon Projects." />

        {/* Hackathon 1: MEENA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="font-mono text-[10px] tracking-widest text-orange-400 uppercase mb-6">SIH 2025 · RAG · MULTILINGUAL</p>
            <h3 className="font-editorial text-4xl md:text-5xl text-white leading-tight mb-8">MEENA: Embeddable Campus Assistant</h3>
            <div className="space-y-6 text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-12">
              <p>Built for the Smart India Hackathon 2025, MEENA is an AI-powered student assistant designed to drastically reduce administrative overhead.</p>
              <p>It's not just a wrapper around an LLM. It relies on a rigorous RAG pipeline and reasoning framework using <strong className="text-white">Gemma on Groq</strong> and <strong className="text-white">Sarvam API</strong>.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-3xl text-white font-light">5+</p>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-2">Indian Languages Supported.</p>
              </div>
              <div>
                <p className="text-3xl text-white font-light">24/7</p>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-2">Omnichannel Access.</p>
              </div>
            </div>

            <p className="text-zinc-400 font-light italic border-l border-zinc-800 pl-6 mb-8">
              "Embeddable on websites and accessible via popular platforms like WhatsApp/Telegram."
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://meenachatbot.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-900 font-mono text-xs tracking-widest uppercase hover:bg-zinc-300 transition-colors">
                Live Prototype ↗
              </a>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative" data-cursor="View MEENA Architecture ↗">
              <img src="/meena.png" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" alt="MEENA Architecture" />
            </div>
          </div>
        </div>

        {/* Hackathon 2: FraudRakshak */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center mt-48">
          <div className="md:col-span-7">
            <div className="aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative" data-cursor="Analyze APK ↗">
              <img src="fraud.png" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" alt="FraudRakshak Dashboard" />
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="font-mono text-[10px] tracking-widest text-blue-400 uppercase mb-6">CYBERSHIELD 2025 · SECURITY · MALWARE</p>
            <h3 className="font-editorial text-4xl md:text-5xl text-white leading-tight mb-8">FraudRakshak: Shield Against Fake APKs</h3>
            <div className="space-y-6 text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-12">
              <p>A web-based platform built for National CyberShield Hackathon 2025 that performs instant automated multi-layered analysis of Android Application Packages (.apk files).</p>
              <p>It combines powerful automated static analysis (YARA rules, signature matching) with reviewer-guided dynamic analysis using <strong className="text-white">Frida</strong> and cloud emulators.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl mb-12">
              <p className="text-white font-bold mb-2">Automated & Dynamic.</p>
              <p className="text-zinc-400 text-sm">Detecting fake banking apps before they steal credentials.</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://fraudrakshak.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-900 font-mono text-xs tracking-widest uppercase hover:bg-zinc-300 transition-colors">
                Live App ↗
              </a>
              <a href="https://github.com/mannat244/Fake_Banking_APK_Detection" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 font-mono text-xs tracking-widest uppercase hover:bg-zinc-800 transition-colors">
                Source Code ↗
              </a>
            </div>
          </div>
        </div>

        <Divider text="Rabbit Holes." subtext="Things I probably didn't need to build." />

        {/* Collapsible Side Projects */}
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="group border border-zinc-800 bg-zinc-900/30 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-mono text-xs">01</div>
                <h4 className="text-xl text-white font-editorial italic group-open:text-zinc-300">LokDrishti</h4>
              </div>
              <span className="text-zinc-500 font-mono text-xl group-open:rotate-45 transition-transform duration-300">+</span>
            </summary>
            <div className="p-6 pt-0 border-t border-zinc-800/50 text-zinc-400 font-light leading-relaxed">
              <p className="mb-4"><strong>Unified Political Intelligence System.</strong> A Decision Support System designed to bridge the gap between unstructured social media data and actionable political intelligence.</p>
              <p className="mb-4">It features an eight-stage hybrid intelligence pipeline converting raw CSV to a quantified Consensus Score, heavily leveraging Hinglish RoBERTa for stance and sentiment detection.</p>
              <p className="text-xs font-mono tracking-widest text-zinc-500">NLP · TRANSFORMERS · STREAMLIT · FASTAPI</p>
            </div>
          </details>

          <details className="group border border-zinc-800 bg-zinc-900/30 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-mono text-xs">02</div>
                <h4 className="text-xl text-white font-editorial italic group-open:text-zinc-300">Resume2Web</h4>
              </div>
              <span className="text-zinc-500 font-mono text-xl group-open:rotate-45 transition-transform duration-300">+</span>
            </summary>
            <div className="p-6 pt-0 border-t border-zinc-800/50 text-zinc-400 font-light leading-relaxed">
              <p className="mb-4">A powerful open-source tool that helps users seamlessly convert their static resumes into elegant, responsive personal websites.</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xs font-mono tracking-widest text-zinc-500">JAVASCRIPT · CSS · HTML</p>
                <a href="https://github.com/mannat244/resume2web" target="_blank" rel="noreferrer" className="font-mono text-xs text-zinc-300 hover:text-white transition-colors">View Repo ↗</a>
              </div>
            </div>
          </details>
          
          <details className="group border border-zinc-800 bg-zinc-900/30 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-mono text-xs">03</div>
                <h4 className="text-xl text-white font-editorial italic group-open:text-zinc-300">LIMO-DB</h4>
              </div>
              <span className="text-zinc-500 font-mono text-xl group-open:rotate-45 transition-transform duration-300">+</span>
            </summary>
            <div className="p-6 pt-0 border-t border-zinc-800/50 text-zinc-400 font-light leading-relaxed">
              <p className="mb-4">A low-level dive into database internals, implemented natively in C++. Building a database engine from scratch to understand how storage, indexing, and memory management truly work.</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xs font-mono tracking-widest text-zinc-500">C++ · DATABASES · CORE CS</p>
                <a href="https://github.com/mannat244/LIMO-DB" target="_blank" rel="noreferrer" className="font-mono text-xs text-zinc-300 hover:text-white transition-colors">View Repo ↗</a>
              </div>
            </div>
          </details>
        </div>

      </div>
    </section>
  );
}

const Divider = ({ text, subtext }: { text: string; subtext?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 1 }}
    className="py-32 text-center"
  >
    <p className="font-editorial text-3xl md:text-4xl text-zinc-300 italic mb-2">{text}</p>
    {subtext && <p className="font-editorial text-3xl md:text-4xl text-zinc-600 italic">{subtext}</p>}
  </motion.div>
);
