import React from 'react';
import { 
  FileDown, 
  FileText, 
  Mail, 
  MapPin, 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck, 
  Brain, 
  Cpu, 
  CheckCircle2, 
  Code2,
  Terminal,
  Search,
  Workflow
} from 'lucide-react';
import { resumeData } from '../data/resume';
import { SkillUniversalGlobe } from './SkillUniversalGlobe';
import { soundEngine } from '../utils/sound';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResumePreview: () => void;
  onOpenTerminal?: () => void;
  onOpenCommandPalette?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onNavigate, 
  onOpenResumePreview,
  onOpenTerminal,
  onOpenCommandPalette
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Professional Identity & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status Pill Badge & Interactive Tools */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs text-cyan-300 shadow-md backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="font-medium tracking-wide">AI &amp; Data Science Graduate &bull; Available for Roles</span>
              </div>

              {onOpenTerminal && (
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    onOpenTerminal();
                  }}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 transition-all cursor-pointer shadow-md"
                  title="Launch Interactive Terminal Console"
                >
                  <Terminal className="w-3 h-3" />
                  <span>Launch CLI Console</span>
                </button>
              )}

              {onOpenCommandPalette && (
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    onOpenCommandPalette();
                  }}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs text-cyan-300 hover:text-white hover:border-cyan-400 transition-all cursor-pointer shadow-md"
                  title="Open Spotlight Search (Ctrl+K)"
                >
                  <Search className="w-3 h-3 text-cyan-400" />
                  <span>Search (Ctrl+K)</span>
                </button>
              )}
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              FAISAL <br />
              <span className="tech-gradient-text">REHMAN</span>
            </h1>

            {/* Position & Positioning Tagline */}
            <p className="text-base sm:text-lg text-slate-200 mb-3 max-w-2xl leading-relaxed">
              <span className="text-cyan-400 font-semibold">AI &amp; Data Science Engineer &bull; AI Tools Enthusiast</span> leveraging Google Antigravity, Google AI Studio, sophisticated prompt engineering, machine learning pipelines, and full-stack architecture.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-xl leading-relaxed font-normal">
              Equipped with a solid engineering degree from Visvesvaraya Technological University (VTU), direct internship experience building enterprise hospital software (.NET &amp; MySQL), VAPT web security audits, and IoT robotics.
            </p>

            {/* Status & Highlights Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-8">
              <div className="p-3.5 rounded-2xl glass-panel border border-slate-800 flex items-center gap-3 interactive-card">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-medium">Location</span>
                  <span className="font-semibold text-slate-100">Bangalore, IN</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl glass-panel border border-slate-800 flex items-center gap-3 interactive-card">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-medium">Degree / CGPA</span>
                  <span className="font-semibold text-slate-100">B.E. AI &amp; DS (7.9)</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl glass-panel border border-emerald-500/30 flex items-center gap-3 interactive-card">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-emerald-400 block text-[10px] uppercase font-semibold">Status</span>
                  <span className="font-semibold text-emerald-300">Open to Roles</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onNavigate('projects');
                }}
                className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundEngine.playClick();
                  onOpenResumePreview();
                }}
                className="px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 glass-panel border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Preview Resume</span>
              </button>

              <button
                onClick={() => {
                  soundEngine.playClick();
                  onNavigate('contact');
                }}
                className="px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-slate-300 glass-panel border border-slate-700/80 hover:border-slate-500 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Get In Touch</span>
              </button>

              <a
                href={resumeData.personal.resumeUrl}
                download="FAISAL_REHMAN_Resume.pdf"
                onClick={() => soundEngine.playClick()}
                className="p-3.5 rounded-xl font-medium text-sm text-slate-400 glass-panel border border-slate-700/80 hover:text-cyan-300 transition-all flex items-center justify-center cursor-pointer"
                title="Download Direct Resume PDF"
              >
                <FileDown className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Skill Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mr-1">
                Core Domains:
              </span>
              {[
                { label: 'AI Tools (Antigravity & AI Studio)', icon: <Workflow className="w-3.5 h-3.5 text-cyan-400" />, target: 'skills' },
                { label: 'Prompt Engineering', icon: <Terminal className="w-3.5 h-3.5 text-emerald-400" />, target: 'skills' },
                { label: 'Machine Learning', icon: <Brain className="w-3.5 h-3.5 text-sky-400" />, target: 'skills' },
                { label: 'Full-Stack (.NET & SQL)', icon: <Code2 className="w-3.5 h-3.5 text-indigo-400" />, target: 'projects' },
                { label: 'Cybersecurity & VAPT', icon: <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />, target: 'experience' },
                { label: 'IoT & Telemetry', icon: <Cpu className="w-3.5 h-3.5 text-purple-400" />, target: 'projects' }
              ].map(chip => (
                <button
                  key={chip.label}
                  onClick={() => {
                    soundEngine.playClick();
                    onNavigate(chip.target);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-all hover:scale-105 cursor-pointer"
                >
                  {chip.icon}
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Interactive Skill Universal Globe */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[480px] lg:min-h-[540px]">
            <SkillUniversalGlobe onSelectNode={onNavigate} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => {
              soundEngine.playClick();
              onNavigate('about');
            }}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] tracking-widest uppercase font-medium">
              Explore Portfolio
            </span>
            <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
