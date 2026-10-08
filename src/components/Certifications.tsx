import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Brain, 
  X,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { resumeData } from '../data/resume';
import type { CertificationItem } from '../data/resume';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity': return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      case 'AI & Prompt Engineering': return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'Expos & Competitions': return <Award className="w-5 h-5 text-amber-400" />;
      case 'Full Stack': return <Award className="w-5 h-5 text-indigo-400" />;
      default: return <BookOpen className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-xs font-semibold text-yellow-300 mb-3 backdrop-blur-md">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Training &amp; <span className="tech-gradient-text">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Verified training programs, professional certifications, and technical expo participations documented from academic and institutional bodies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {resumeData.certifications.map(cert => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-6 rounded-3xl glass-panel border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group interactive-card card-shine"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="p-3 rounded-2xl bg-slate-800/80 group-hover:bg-cyan-500/15 group-hover:scale-110 transition-all shadow-sm">
                    {getCategoryIcon(cert.category)}
                  </div>
                  {cert.dateOrYear && (
                    <span className="text-[11px] font-semibold text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800">
                      {cert.dateOrYear}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold font-display text-white group-hover:text-cyan-300 transition-colors leading-snug mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-400 font-medium mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-800/80">
                  {cert.skillsCovered.slice(0, 2).map((sk, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-900 text-cyan-300 border border-slate-800"
                    >
                      {sk}
                    </span>
                  ))}
                  {cert.skillsCovered.length > 2 && (
                    <span className="text-[10px] font-medium text-slate-400 px-1.5 py-0.5">
                      +{cert.skillsCovered.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-100">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                  {getCategoryIcon(selectedCert.category)}
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 mb-6">
                <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                  {selectedCert.category}
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  {selectedCert.title}
                </h3>
                <div className="text-xs text-slate-400">
                  <span className="text-slate-200 font-semibold">{selectedCert.issuer}</span>
                  {selectedCert.dateOrYear && ` &bull; ${selectedCert.dateOrYear}`}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  {selectedCert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3 mb-6">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-300 block">
                  Skills &amp; Subject Areas Verified:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skillsCovered.map((sk, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl text-xs font-medium bg-slate-800 text-cyan-300 border border-slate-700"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-3 rounded-2xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                Close Certificate View
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
