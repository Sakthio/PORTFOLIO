import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Coffee,
  Cpu,
  Database,
  BarChart3,
  BrainCircuit,
  Sparkles,
  PieChart,
  GitBranch,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import type { SkillItem } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { skills } = PORTFOLIO_DATA;

  const categories = ['All', 'Languages', 'AI & Data', 'Tools & Systems'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-slate-200 group-hover:text-gold-400 transition-colors duration-300';
    switch (iconName) {
      case 'Code2':
        return <Code2 className={iconClass} />;
      case 'Coffee':
        return <Coffee className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'Database':
        return <Database className={iconClass} />;
      case 'BarChart3':
        return <BarChart3 className={iconClass} />;
      case 'BrainCircuit':
        return <BrainCircuit className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'PieChart':
        return <PieChart className={iconClass} />;
      case 'GitBranch':
        return <GitBranch className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
          Competencies
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
          Technical Arsenal
        </h2>
        <p className="text-slate-400 max-w-lg text-sm sm:text-base">
          Interactive computational foundations spanning predictive intelligence, low-latency code, and analytical reporting.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white/15 text-white shadow-sm border border-white/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Interactive Glass Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {filteredSkills.map((skill: SkillItem, index: number) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <TiltCard maxTilt={8} className="h-full rounded-2xl">
                <div className="group h-full p-6 rounded-2xl bg-[#0b0d17]/50 backdrop-blur-xl border border-white/[0.07] hover:border-white/20 hover:bg-[#121524]/60 transition-all duration-400 flex flex-col justify-between shadow-glass-sm hover:shadow-glass-md">
                  <div>
                    {/* Card Top: Icon & Category Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-gold-400/40 transition-all duration-300">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-400">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Title & Description */}
                    <h3 className="text-lg font-semibold text-white mb-2 font-display group-hover:text-gold-200 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Card Bottom Indicator */}
                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{skill.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-gold-400 transition-colors" />
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
