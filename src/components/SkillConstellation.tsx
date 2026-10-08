import React, { useState } from 'react';
import { 
  Brain, 
  Code2, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  Search,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { resumeData } from '../data/resume';

export const SkillConstellation: React.FC<{ onNavigateProjects?: () => void }> = () => {
  const [activeClusterId, setActiveClusterId] = useState<string>('ai-tools-prompting');
  const [searchQuery, setSearchQuery] = useState('');

  const activeCluster = resumeData.skillClusters.find(c => c.id === activeClusterId) || resumeData.skillClusters[0];

  const getClusterIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      default: return <Layers className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-3 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Skill Architecture &amp; <span className="tech-gradient-text">Core Stacks</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            A structured matrix of machine learning architectures, full-stack frameworks, database systems, cybersecurity methodologies, and data visualization tools.
          </p>
        </div>

        {/* Category Selector Pills */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10 pb-4 border-b border-slate-800">
          {resumeData.skillClusters.map(cluster => {
            const isActive = cluster.id === activeClusterId;
            return (
              <button
                key={cluster.id}
                onClick={() => {
                  setActiveClusterId(cluster.id);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.2)] scale-105'
                    : 'glass-panel border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700'
                }`}
              >
                {getClusterIcon(cluster.icon)}
                <span>{cluster.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                  {cluster.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Overview Banner */}
        <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-800 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 interactive-card">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
              {getClusterIcon(activeCluster.icon)}
            </div>
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  {activeCluster.name}
                </h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Active Domain
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                {activeCluster.description}
              </p>
            </div>
          </div>

          {/* Search Filter for Skills */}
          <div className="w-full md:w-72 relative shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search skills & technologies..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Dynamic Skill Cards Grid with Rich Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeCluster.skills
            .filter(sk => 
              sk.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              sk.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              sk.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
            )
            .map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-panel border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between interactive-card card-shine group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-900 text-cyan-400 border border-slate-800">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {skill.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Interconnected Technology Matrix */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 relative overflow-hidden interactive-card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-indigo-400 block mb-1">
                Domain Versatility
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Core Industry &amp; Technology Matrix
              </h3>
            </div>
            <span className="text-xs font-medium text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              7 Core Vectors &bull; VTU &amp; Industry Exposure
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {resumeData.industryExpertise.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/30 hover:scale-[1.02] transition-all">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h4 className="text-sm font-bold text-slate-100">{exp.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
