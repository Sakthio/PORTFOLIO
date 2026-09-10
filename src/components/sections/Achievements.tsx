import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Briefcase, Award, Lightbulb, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import type { AchievementItem } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';

export const Achievements: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<string>('All');

  const tabs = ['All', 'Internships', 'Certifications', 'Hackathons', 'Ideathons', 'Academic'];

  const filteredItems = activeTab === 'All'
    ? achievements
    : achievements.filter((a) => a.category === activeTab);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Internships':
        return <Briefcase className="w-5 h-5 text-slate-200" />;
      case 'Certifications':
        return <Award className="w-5 h-5 text-gold-400" />;
      case 'Hackathons':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Ideathons':
        return <Lightbulb className="w-5 h-5 text-sky-400" />;
      case 'Academic':
      default:
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
          Milestones
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
          Experience & Achievements
        </h2>
        <p className="text-slate-400 max-w-lg text-sm sm:text-base">
          Extensible track record encompassing internships, competitive hackathons, certifications, and academic excellence.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-white/15 text-white shadow-sm border border-white/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item: AchievementItem, idx: number) => (
            <motion.div
              layout
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <TiltCard maxTilt={6} className="h-full rounded-2xl">
                <div className="h-full p-6 rounded-2xl bg-[#0a0c16]/50 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 hover:bg-[#111424]/60 transition-all duration-300 flex flex-col justify-between shadow-glass-sm group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-all">
                        {getCategoryIcon(item.category)}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-gold-300 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-white mb-1 font-display group-hover:text-gold-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mb-3">
                      {item.issuer} • {item.period}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{item.category} Track</span>
                    <span className="flex items-center gap-1 text-slate-400 group-hover:text-white transition-colors">
                      <span>View Credential</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
