import { useState, useEffect } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { ResumePreviewModal } from './components/ResumePreviewModal';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillConstellation } from './components/SkillConstellation';
import { ToolsEcosystem } from './components/ToolsEcosystem';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { BeyondCode } from './components/BeyondCode';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ToastProvider } from './components/Toast';
import type { ProjectItem } from './data/resume';
import { soundEngine } from './utils/sound';
import { Terminal, Search } from 'lucide-react';

export function AppContent() {
  const [resumePreviewOpen, setResumePreviewOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(soundEngine.getSoundEnabled());
  const [contactSubject, setContactSubject] = useState('');

  const toggleSound = () => {
    const nextVal = !isSoundEnabled;
    setIsSoundEnabled(nextVal);
    soundEngine.setSoundEnabled(nextVal);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactProject = (projectTitle: string) => {
    setContactSubject(`Inquiry regarding project: ${projectTitle}`);
    handleNavigate('contact');
  };

  // Global keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundEngine.playClick();
        setCommandPaletteOpen(prev => !prev);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === '`') {
        e.preventDefault();
        soundEngine.playClick();
        setTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 antialiased font-sans">
      {/* Interactive Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Dynamic Cosmic Starfield, Nebulae, and Meteors Canvas */}
      <CosmicBackground />

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenResumePreview={() => setResumePreviewOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        isSoundEnabled={isSoundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Futuristic Command Palette Spotlight Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onOpenResumePreview={() => setResumePreviewOpen(true)}
        onOpenProject={proj => setSelectedProject(proj)}
        onToggleTerminal={() => setTerminalOpen(prev => !prev)}
        isSoundEnabled={isSoundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Interactive CLI Developer Bio Terminal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResumePreview={() => setResumePreviewOpen(true)}
        onOpenProject={proj => setSelectedProject(proj)}
        onNavigate={handleNavigate}
      />

      {/* Resume PDF Interactive Preview Modal */}
      <ResumePreviewModal
        isOpen={resumePreviewOpen}
        onClose={() => setResumePreviewOpen(false)}
      />

      {/* Technical Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactProject={handleContactProject}
      />

      {/* Main Cosmic Portfolio Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section with 3D Skill Universal Globe */}
        <Hero 
          onNavigate={handleNavigate} 
          onOpenResumePreview={() => setResumePreviewOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        {/* 2. Executive About Section */}
        <About />

        {/* 3. Skill Architecture & Core Stacks */}
        <SkillConstellation onNavigateProjects={() => handleNavigate('projects')} />

        {/* 4. Tools & Software Ecosystem */}
        <ToolsEcosystem />

        {/* 5. Projects & Case Studies */}
        <Projects
          onSelectProject={proj => {
            setSelectedProject(proj);
          }}
        />

        {/* 6. Experience Timeline & Chronicles */}
        <ExperienceTimeline />

        {/* 7. Education & VTU Degree */}
        <Education />

        {/* 8. Certifications & Training */}
        <Certifications />

        {/* 9. Beyond Code & Astronomy Pursuits */}
        <BeyondCode />

        {/* 10. Contact Transmission Terminal */}
        <Contact initialSubject={contactSubject} />
      </main>

      {/* Floating Action Buttons for Fast Terminal & Search Access */}
      <aside aria-label="Quick launch tools" className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 pointer-events-auto">
        <button
          onClick={() => {
            soundEngine.playClick();
            setTerminalOpen(prev => !prev);
          }}
          className="p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:scale-105 backdrop-blur-md flex items-center gap-2 text-xs font-mono font-bold cursor-pointer"
          title="Toggle Terminal CLI Console (`)"
        >
          <Terminal className="w-4 h-4" />
          <span>CLI</span>
        </button>

        <button
          onClick={() => {
            soundEngine.playClick();
            setCommandPaletteOpen(true);
          }}
          className="p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all hover:scale-105 backdrop-blur-md flex items-center gap-2 text-xs font-medium cursor-pointer"
          title="Open Spotlight Search (Ctrl+K)"
        >
          <Search className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-[11px] text-slate-400">Ctrl+K</span>
        </button>
      </aside>

      {/* Cosmic Footer */}
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;
