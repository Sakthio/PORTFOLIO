import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, ShieldCheck, Binary } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';

export const About: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  const pillars = [
    {
      icon: <Binary className="w-5 h-5 text-gold-400" />,
      title: 'Algorithmic Rigor',
      desc: 'Formulating structured solutions through mathematical logic and efficient data structures.',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-slate-200" />,
      title: 'Applied Intelligence',
      desc: 'Translating theoretical AI and Computer Vision frameworks into functioning real-world prototypes.',
    },
    {
      icon: <Compass className="w-5 h-5 text-gold-400" />,
      title: 'Continuous Exploration',
      desc: 'Actively tracking advances in modern ML architectures, cloud data pipelines, and analytics.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-slate-200" />,
      title: 'System Reliability',
      desc: 'Writing maintainable, modular code with clean architectural separation and documentation.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
          Overview
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          {about.title}
        </h2>
      </div>

      {/* Main Glass Dossier Card */}
      <TiltCard className="rounded-3xl glass-surface p-8 sm:p-12 mb-12 border border-white/10 shadow-glass-lg relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl font-light text-slate-100 leading-relaxed mb-6 font-display">
            "{about.bio}"
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {about.extendedBio}
          </p>
        </div>

        {/* Metric Badges */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
          {about.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 mb-1">
                {metric.label}
              </span>
              <span className="text-sm sm:text-base font-semibold text-white">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </TiltCard>

      {/* Engineering Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
              {pillar.icon}
            </div>
            <h3 className="text-base font-semibold text-white mb-2 font-display">
              {pillar.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
