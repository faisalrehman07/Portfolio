import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Bot, 
  Hospital, 
  HeartPulse, 
  BadgePercent, 
  Car, 
  Wallet, 
  ArrowRight, 
  Building,
  FolderGit2,
  Search,
  X,
  Copy,
  Check
} from 'lucide-react';
import { resumeData } from '../data/resume';
import type { ProjectItem } from '../data/resume';
import { soundEngine } from '../utils/sound';
import { useToast } from './Toast';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { showToast } = useToast();

  const filterOptions = [
    'All',
    'Featured Internship Case Study',
    'AI & Deep Learning',
    'Full Stack',
    'IoT / Hardware'
  ];

  // Unique technology tags across all projects
  const allTechTags = useMemo(() => {
    const set = new Set<string>();
    resumeData.projects.forEach(p => p.technologies.forEach(t => set.add(t)));
    return Array.from(set).slice(0, 10);
  }, []);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hospital': return <Hospital className="w-6 h-6 text-cyan-400" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-400" />;
      case 'BadgePercent': return <BadgePercent className="w-6 h-6 text-emerald-400" />;
      case 'Bot': return <Bot className="w-6 h-6 text-purple-400" />;
      case 'Car': return <Car className="w-6 h-6 text-amber-400" />;
      case 'Wallet': return <Wallet className="w-6 h-6 text-indigo-400" />;
      default: return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  const filteredProjects = resumeData.projects.filter(p => {
    // Category filter
    let matchesCategory = true;
    if (activeFilter === 'Featured Internship Case Study') {
      matchesCategory = p.category === 'Internship Case Study';
    } else if (activeFilter !== 'All') {
      matchesCategory = p.category === activeFilter;
    }

    // Tech filter
    const matchesTech = !selectedTech || p.technologies.includes(selectedTech);

    // Search query
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || (
      p.title.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    );

    return matchesCategory && matchesTech && matchesSearch;
  });

  const handleCopySummary = (p: ProjectItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `${p.title} (${p.type})\n${p.shortDescription}\nTech: ${p.technologies.join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(p.id);
    showToast(`Copied summary for ${p.title}!`, 'success');
    soundEngine.playSuccess();
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 mb-3 backdrop-blur-md">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Case Studies &amp; Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Featured Systems &amp; <span className="tech-gradient-text">Engineering Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Full-stack systems, deep learning research architectures, IoT robotics, and enterprise software built during academic studies and industry internships.
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="p-4 sm:p-5 rounded-3xl glass-panel border border-slate-800 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search projects by keyword, tech, or title... (e.g. 'rPPG', 'MySQL', 'IoT')"
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results counter badge */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono shrink-0 self-end md:self-center">
              <span>Showing</span>
              <span className="font-bold text-cyan-300 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                {filteredProjects.length} of {resumeData.projects.length}
              </span>
              <span>projects</span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
            {filterOptions.map(filter => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => {
                    soundEngine.playClick();
                    setActiveFilter(filter);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)] scale-105'
                      : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Popular Tech Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs">
            <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">Tech Filter:</span>
            {allTechTags.map(tech => {
              const isSelected = selectedTech === tech;
              return (
                <button
                  key={tech}
                  onClick={() => {
                    soundEngine.playClick();
                    setSelectedTech(prev => (prev === tech ? null : tech));
                  }}
                  className={`px-2 py-0.5 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-bold border border-cyan-400'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-cyan-300 hover:border-slate-700'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
            {selectedTech && (
              <button
                onClick={() => setSelectedTech(null)}
                className="text-[10px] text-rose-400 hover:underline ml-1"
              >
                Clear filter
              </button>
            )}
          </div>
        </div>

        {/* Featured Case Study: Hospital Management System */}
        {(activeFilter === 'All' || activeFilter === 'Featured Internship Case Study' || activeFilter === 'Full Stack') &&
         !searchQuery && !selectedTech && (
          <div className="mb-12">
            {resumeData.projects.filter(p => p.id === 'hospital-management-system').map(hospitalProj => (
              <div
                key={hospitalProj.id}
                className="p-8 sm:p-11 rounded-3xl glass-panel border border-cyan-500/40 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-cyan-950/30 hover:border-cyan-400/70 transition-all duration-300 group shadow-2xl relative overflow-hidden interactive-card card-shine"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 shadow-md">
                      <Hospital className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-semibold uppercase px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                          Featured Case Study
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {hospitalProj.type}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {hospitalProj.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={(e) => handleCopySummary(hospitalProj, e)}
                      className="p-3 rounded-2xl glass-panel border border-slate-700 hover:text-cyan-300 transition-colors text-slate-400"
                      title="Copy Project Summary"
                    >
                      {copiedId === hospitalProj.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => {
                        soundEngine.playClick();
                        onSelectProject(hospitalProj);
                      }}
                      className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95 flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                      <span>View Technical Dossier</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                      <Building className="w-4 h-4" />
                      <span>Conducted at CifTech Solutions Pvt. Ltd., Bangalore</span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {hospitalProj.shortDescription}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-300 block">Key Deliverables:</span>
                      {hospitalProj.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                          <span className="leading-relaxed">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <div>
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                        Tech Stack &amp; Database Architecture
                      </span>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hospitalProj.technologies.map((t, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-900 text-cyan-300 border border-cyan-500/30">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                      <span className="text-emerald-400 font-bold">Outcome:</span> Demonstrated end-to-end full-stack software architecture, relational database integrity, and production IT execution.
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center glass-panel rounded-3xl border border-slate-800">
            <p className="text-base text-slate-300 font-semibold mb-2">No projects matched your search criteria.</p>
            <p className="text-xs text-slate-500 mb-4">Try clearing the search query or selecting &ldquo;All&rdquo; categories.</p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
                setSelectedTech(null);
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter(p => p.id !== 'hospital-management-system' || activeFilter !== 'All' || !!searchQuery || !!selectedTech)
              .map(project => (
                <div
                  key={project.id}
                  className="p-7 rounded-3xl glass-panel border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group interactive-card card-shine"
                >
                  <div>
                    {/* Category & Type */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                        {project.category}
                      </span>
                      <button
                        onClick={(e) => handleCopySummary(project, e)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 transition-colors"
                        title="Copy Summary"
                      >
                        {copiedId === project.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-3.5 mb-3.5">
                      <div className="p-3 rounded-2xl bg-slate-800/80 group-hover:bg-cyan-500/15 group-hover:scale-110 transition-all shrink-0 shadow-sm">
                        {getProjectIcon(project.iconName)}
                      </div>
                      <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                      {project.technologies.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded-lg text-[10px] font-medium bg-slate-900 text-slate-400 border border-slate-800">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => {
                        soundEngine.playClick();
                        onSelectProject(project);
                      }}
                      className="w-full py-3 rounded-2xl text-xs font-semibold glass-panel border border-slate-700 group-hover:border-cyan-500/50 group-hover:text-cyan-300 group-hover:bg-cyan-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>View Technical Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};
