import React from 'react';
import { 
  Laptop, 
  Gamepad2, 
  Cpu, 
  Camera, 
  Activity, 
  Mic, 
  Compass, 
  Orbit
} from 'lucide-react';
import { resumeData } from '../data/resume';

export const BeyondCode: React.FC = () => {
  const getPursuitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Orbit': return <Orbit className="w-5 h-5 text-cyan-400" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-indigo-400" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Camera': return <Camera className="w-5 h-5 text-pink-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'Mic': return <Mic className="w-5 h-5 text-blue-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-sky-400" />;
      default: return <Orbit className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="beyond" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5" />
            <span>Interests &amp; Pursuits</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Beyond Code &amp; <span className="cosmic-text-gradient">Exploration</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Creative and cognitive pursuits that fuel problem-solving, astronomical curiosity, team leadership, resilience, and engineering perspective.
          </p>
        </div>

        {/* Pursuit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {resumeData.beyondCode.map((pursuit, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl glass-panel border border-slate-800 hover:border-purple-500/50 transition-all duration-300 group flex flex-col justify-between interactive-card card-shine"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-800/80 group-hover:bg-purple-500/15 group-hover:scale-110 transition-all shadow-sm">
                    {getPursuitIcon(pursuit.icon)}
                  </div>
                  <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-slate-900 text-purple-300 border border-slate-800">
                    {pursuit.category}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-white group-hover:text-purple-300 transition-colors mb-2">
                  {pursuit.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pursuit.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-purple-300 font-medium">
                <span>Active Pursuit</span>
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
