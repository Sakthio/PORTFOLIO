import React from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  BarChart3,
  Cpu,
  Terminal,
  LineChart,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import type { InterestItem } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';

export const Interests: React.FC = () => {
  const { interests } = PORTFOLIO_DATA;

  const getInterestIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-slate-300 group-hover:text-gold-400 transition-colors duration-300';
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className={iconClass} />;
      case 'BarChart3':
        return <BarChart3 className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'Terminal':
        return <Terminal className={iconClass} />;
      case 'LineChart':
        return <LineChart className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="interests" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
          Focus Areas
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
          Career & Technical Interests
        </h2>
        <p className="text-slate-400 max-w-md text-sm sm:text-base">
          Domains where curiosity meets software craftsmanship and continuous exploration.
        </p>
      </div>

      {/* 6 Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((item: InterestItem, idx: number) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
          >
            <TiltCard maxTilt={8} className="h-full rounded-2xl">
              <div className="group h-full p-7 rounded-2xl bg-[#0a0c16]/50 backdrop-blur-xl border border-white/[0.07] hover:border-white/20 hover:bg-[#111424]/60 transition-all duration-300 flex flex-col justify-between shadow-glass-sm group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-gold-400/30 transition-all">
                      {getInterestIcon(item.iconName)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 font-display group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Explore Track</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
