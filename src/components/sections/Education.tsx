import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import type { EducationItem } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
          Academic Track
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
          Education Timeline
        </h2>
        <p className="text-slate-400 max-w-md text-sm sm:text-base">
          Formal engineering foundations in artificial intelligence, mathematics, and computer science.
        </p>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative pl-6 sm:pl-10 ml-2 sm:ml-6 border-l border-white/10 space-y-12">
        {education.map((item: EducationItem, index: number) => {
          const isCurrent = item.period.toLowerCase().includes('pursuing');
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              {/* Glowing Timeline Node Marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-125 ${
                  isCurrent
                    ? 'bg-gold-500 shadow-[0_0_20px_2px_rgba(212,175,55,0.7)]'
                    : 'bg-white/20 border-2 border-[#030305] group-hover:bg-gold-400'
                }`}
              >
                {isCurrent && (
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Glass Timeline Card */}
              <TiltCard maxTilt={4} className="rounded-2xl">
                <div
                  className={`p-6 sm:p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300 shadow-glass-sm hover:shadow-glass-md ${
                    isCurrent
                      ? 'bg-gradient-to-br from-[#0c0f1e]/80 via-[#0a0d18]/60 to-[#07080f]/90 border-gold-400/30'
                      : 'bg-[#090b14]/50 border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap className={`w-4 h-4 ${isCurrent ? 'text-gold-400' : 'text-slate-400'}`} />
                        <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
                          {item.institution}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-gold-200 transition-colors">
                        {item.degree}
                      </h3>
                    </div>

                    {/* Period & Score Badges */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {item.period}
                      </span>
                      {item.score && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wide ${
                            isCurrent
                              ? 'bg-gold-500/20 border border-gold-400/40 text-gold-300'
                              : 'bg-white/10 border border-white/15 text-white'
                          }`}
                        >
                          {item.score}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>

                  {/* Highlights checklist */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-white/[0.06]">
                      {item.highlights.map((h: string, hIdx: number) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-gold-400/80 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
