import React, { useState } from 'react';

// Lightweight, zero-dependency inline SVG icons
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function App() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "vishruth1974@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const projects = [
    {
      title: "Learnix — Interactive Learning Platform & AI Tutor",
      desc: "An online learning portal where students can watch lecture videos, practice with AI-generated mock questions, and clear their doubts with an AI chatbot named Lumi. Lumi uses Google Gemini (Gemini 2.5 Flash) with RAG to read lecture transcripts and guide students to derive answers themselves by asking follow up questionsrather than handing them direct answers.",
      frontendHighlights: "Built with Vue 3. Features organized course menus, clean chat screens, video playback navigation, and AI Generated Mock Quiz.",
      stack: ["Vue.js (Vue 3)", "Python (Flask)", "Google Gemini API (2.5 Flash)", "FAISS Vector Search", "LangChain / RAG"],
      liveUrl: "https://llm-rag-education-agent.onrender.com/#/coursecontents?id=1",
      githubUrl: "https://github.com/Vishruth2004/LLM-RAG-Education-Agent",
      badge: "Vue 3 • Full Stack"
    },
    {
      title: "Code Craft — AI Developer Tool",
      desc: "An AI coding chatbot guided by few-shot prompting to give users clean, properly structured code complete with docstrings, type annotations, and consistent formatting based on prompt requests.",
      frontendHighlights: "Built with React. Features a clean two-panel layout optimized for code readability, side-by-side prompt views, and one-click code copy buttons.",
      stack: ["React", "Python (Flask)", "AWS Bedrock (Claude Sonnet 4.5)"],
      liveUrl: "https://claude-code-assistant-backend.onrender.com",
      githubUrl: "url?id=3",
      badge: "React • Multimodal"
    },
    {
      title: "Library Management System",
      desc: "A complete digital library platform that manages book requests, reservations, and return deadlines. It gives Admins, Librarians, and Students their own dedicated portals to manage library records without confusion.",
      frontendHighlights: "Role-based dashboards for different users and a quick search bar with live catalog filtering.",
      stack: ["Flask", "PostgreSQL", "SQLAlchemy", "Jinja2 Templates"],
      liveUrl: "https://library-application-u0hk.onrender.com",
      githubUrl: "url?id=5",
      badge: "Full Stack • PostgreSQL"
    }
  ];

  const caseStudies = [
    {
      title: "NeoFax Medical Drug Pipeline & Clinical Assistant",
      org: "Phoenix Medical Systems (AI Intern)",
      desc: "Built a pipeline using Google Gemini to convert over 1,000 pages of inconsistent, complex NeoFax pediatric drug guides into clean, structured JSON schemas so medical software can calculate accurate drug dosages for newborn babies. Also created a prototype AI that reads patient records to answer doctors' questions quickly.",
      tags: ["Python", "Google Gemini API", "Pandas", "JSON Schemas", "Google Medgemma", "Ollama"]
    },
    {
      title: "AI-Generated Image Detector & Explainer",
      org: "Inter IIT Tech Meet 13.0 (5th Place)",
      desc: "Built a computer vision system that examines images to detect whether they are real or AI-generated. If an image is flagged as AI-generated, the model outputs clear explanations pointing out the specific visual clues and artifacts that gave it away.",
      tags: ["Computer Vision", "MOLMO", "PyTorch", "ViT", "Explainable AI"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* SECTION 1: HEADER & PROFILE */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-medium mb-6">
            <span>⚡</span> Frontend & Web Developer
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Vishruth
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-6">
            I build responsive, easy-to-use web applications using modern frontend tools like Vue.js and React. I enjoy connecting clean user interfaces with backend APIs, databases, and AI features to create fast, reliable software people love using.
          </p>
          <div className="flex flex-wrap gap-4 items-center text-sm font-medium">
            <a 
              href="https://github.com/Vishruth2004" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition"
            >
              <GithubIcon /> GitHub Profile
            </a>
            <button 
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white transition cursor-pointer"
            >
              <MailIcon />
              {copied ? (
                <span className="text-emerald-400 font-semibold">Email Copied to Clipboard!</span>
              ) : (
                <span>{emailAddress}</span>
              )}
            </button>
          </div>
        </header>

        {/* SECTION 2: CORE LIVE PROJECTS */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-200 tracking-tight mb-8 pb-3 border-b border-slate-800 flex items-center gap-2">
            Featured Projects & Live Apps
          </h2>
          <div className="space-y-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-blue-900/40 text-blue-300 border border-blue-700/40 font-mono">
                    {proj.badge}
                  </span>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition">
                      <GithubIcon /> Source Code
                    </a>
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition">
                      <ExternalLinkIcon /> Live App
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{proj.desc}</p>
                <div className="text-xs text-slate-400 mb-4 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                  <strong className="text-slate-200 font-semibold">Frontend & UI Highlights: </strong>
                  {proj.frontendHighlights}
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((t, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: TECHNICAL ARCHITECTURE CASE STUDIES */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-200 tracking-tight mb-8 pb-3 border-b border-slate-800 flex items-center gap-2">
            Engineering Experience & Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <span className="text-xs text-indigo-400 font-medium tracking-wide uppercase">{cs.org}</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-3">{cs.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{cs.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-xs text-slate-600 border-t border-slate-900 pt-8">
          Built with React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}