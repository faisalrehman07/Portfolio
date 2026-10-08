import React from 'react';
import { 
  MapPin, 
  Languages, 
  ShieldCheck, 
  Code2,
  UserCheck,
  Target,
  Workflow,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { resumeData } from '../data/resume';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-3 backdrop-blur-md">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Executive Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Engineering Identity &amp; <span className="tech-gradient-text">Competencies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            A comprehensive overview detailing academic background, programming foundations, AI toolchain expertise, and software engineering capabilities.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left: Statement & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-7 sm:p-9 rounded-3xl glass-panel border border-slate-800 relative overflow-hidden interactive-card card-shine">
              <div className="flex items-center gap-2 text-xs text-slate-400 border-b border-slate-800/80 pb-3 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="font-semibold text-slate-200">Professional Summary &amp; Vision</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-4 leading-snug">
                &ldquo;Engineering robust systems by combining disciplined computer science with advanced AI tools &amp; prompt workflows.&rdquo;
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a motivated IT graduate with a strong academic foundation in <strong className="text-cyan-300 font-semibold">Artificial Intelligence, Machine Learning, and Full-Stack Engineering</strong>. My hands-on programming stacks include <strong className="text-white font-semibold">Python, Java, SQL, and .NET</strong>, reinforced with practical exposure across relational database design, VAPT web application security, and IoT telemetry architectures.
                </p>
                <p>
                  As an <strong className="text-white font-semibold">AI tools power user and enthusiast</strong>, I actively integrate platforms like <strong className="text-cyan-300 font-semibold">Google Antigravity</strong>, <strong className="text-cyan-300 font-semibold">Google AI Studio</strong>, and sophisticated <strong className="text-cyan-300 font-semibold">prompt engineering</strong> into my development workflow. This allows me to architect, prototype, and debug production-grade software projects at accelerated velocity without compromising structural reliability.
                </p>
              </div>

              {/* Core Attributes Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 pt-6 border-t border-slate-800/80">
                {[
                  { title: "AI Tools Power User", desc: "Expertise in Google Antigravity, Google AI Studio & structured prompt engineering.", icon: <Workflow className="w-4 h-4 text-cyan-400" /> },
                  { title: "Analytical Problem Solver", desc: "Algorithmic thinking, data structures & systematic root-cause debugging.", icon: <Target className="w-4 h-4 text-emerald-400" /> },
                  { title: "Full-Stack & Systems", desc: "Hands-on experience with .NET, MySQL, REST APIs & responsive interfaces.", icon: <Code2 className="w-4 h-4 text-indigo-400" /> },
                  { title: "Disciplined Execution", desc: "Dedicated to clean code, comprehensive testing, and architectural integrity.", icon: <CheckCircle2 className="w-4 h-4 text-purple-400" /> }
                ].map((attr, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-3 hover:border-cyan-500/30 transition-all hover:scale-[1.02]">
                    <div className="p-2 rounded-xl bg-slate-800/80 shrink-0 mt-0.5">
                      {attr.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100">{attr.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{attr.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Bar */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 interactive-card">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Languages</span>
                  <span className="text-sm font-bold text-slate-100">Spoken &amp; Written Fluency</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {resumeData.languages.map(lang => (
                  <div key={lang.name} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-medium text-slate-200 flex items-center gap-1.5 shadow-sm hover:border-cyan-500/40 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Candidate Profile Dossier & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            {/* Candidate Card */}
            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-b from-slate-900/95 to-slate-950/90 shadow-xl interactive-card">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Candidate Dossier
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  VTU 2025
                </span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 font-medium">Full Name</span>
                  <span className="font-bold text-white text-sm">Faisal Rehman</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 font-medium">Qualification</span>
                  <span className="font-semibold text-slate-200">B.E. in AI &amp; Data Science</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 font-medium">AI Tooling Focus</span>
                  <span className="font-semibold text-cyan-300">Antigravity, AI Studio, Prompting</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 font-medium">Institution</span>
                  <span className="font-semibold text-slate-200">Navkis College of Engineering</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 font-medium">University</span>
                  <span className="font-semibold text-cyan-300">Visvesvaraya Technological Univ. (VTU)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 font-medium">Graduation Year / CGPA</span>
                  <span className="font-bold text-emerald-400">2025 &bull; 7.9 CGPA</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400 font-medium">Industry Internships</span>
                  <span className="font-semibold text-slate-200">CifTech Solutions &bull; NICC VAPT</span>
                </div>
              </div>
            </div>

            {/* Metric Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl glass-panel border border-slate-800 interactive-card">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">Base Location</span>
                <div className="flex items-center gap-2 text-slate-100 font-bold text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Bangalore, IN</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-slate-800 interactive-card">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">Core Tech Stacks</span>
                <div className="flex items-center gap-2 text-slate-100 font-bold text-xs sm:text-sm">
                  <Code2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Python, Java, SQL</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-slate-800 interactive-card">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">Security Training</span>
                <div className="flex items-center gap-2 text-slate-100 font-bold text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>VAPT Web Security</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-slate-800 interactive-card">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">AI Platforms</span>
                <div className="flex items-center gap-2 text-slate-100 font-bold text-xs sm:text-sm">
                  <Workflow className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Antigravity &amp; AI Studio</span>
                </div>
              </div>
            </div>

            {/* Areas of Expertise from Resume */}
            <div className="p-5 rounded-2xl glass-panel border border-slate-800 interactive-card">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-300 block mb-3">
                Verified Skill Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {resumeData.areasOfExpertise.map(area => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-cyan-300 border border-slate-800 hover:border-cyan-500/40 hover:scale-105 transition-all shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
