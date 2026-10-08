import React, { useEffect, useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Building, 
  Award,
  Tag,
  Copy,
  Check,
  Send
} from 'lucide-react';
import type { ProjectItem } from '../data/resume';
import { soundEngine } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';
import { useToast } from './Toast';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactProject?: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose,
  onContactProject 
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'outcomes'>('overview');
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveTab('overview');
      setCopied(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyDossier = () => {
    const text = `=== PROJECT DOSSIER: ${project.title} ===
Category: ${project.category} (${project.type})
Affiliation: ${project.affiliation || 'Independent Engineering'}
Technologies: ${project.technologies.join(', ')}

Overview:
${project.fullDescription}

Key Features:
${project.features.map(f => `• ${f}`).join('\n')}

Deliverables & Outcomes:
${project.outcomes.map(o => `• ${o}`).join('\n')}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    soundEngine.playSuccess();
    triggerConfetti();
    showToast(`Dossier copied to clipboard!`, 'success');
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8 text-slate-100 flex flex-col max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/70">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.type}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyDossier}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Copy Complete Project Dossier"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-6 pt-2 gap-2 text-xs font-mono">
          {[
            { id: 'overview', label: '1. Overview & Architecture' },
            { id: 'features', label: '2. Core Features' },
            { id: 'outcomes', label: '3. Deliverables & Outcomes' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                soundEngine.playClick();
                setActiveTab(tab.id as typeof activeTab);
              }}
              className={`pb-3 px-3 border-b-2 font-medium transition-all ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-300 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Title & Affiliation */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2 leading-snug">
              {project.title}
            </h3>
            {project.affiliation && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-400 font-mono">
                <Building className="w-4 h-4" />
                <span>Affiliation: {project.affiliation}</span>
              </div>
            )}
          </div>

          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Full Narrative */}
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-sm sm:text-base text-slate-300 leading-relaxed space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Project Overview</h4>
                <p className="whitespace-pre-line">{project.fullDescription}</p>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Tag className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Technology Stack &amp; Methodologies</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-800 text-cyan-300 border border-slate-700/80 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Core Architectural Features ({project.features.length})</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'outcomes' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Deliverables &amp; Outcomes</span>
              </h4>
              <div className="space-y-3">
                {project.outcomes.map((outcome, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-xs sm:text-sm text-slate-200 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-400">
            Documented in FAISAL_REHMAN.pdf &bull; Class of 2025
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onContactProject && (
              <button
                onClick={() => {
                  onContactProject(project.title);
                  onClose();
                }}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 transition-colors flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Inquire About Project</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Close Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
