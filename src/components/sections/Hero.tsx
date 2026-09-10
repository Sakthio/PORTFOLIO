import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { LiquidButton } from '../ui/LiquidButton';
import { FloatingTechCore } from '../effects/FloatingTechCore';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gold-500/10 via-white/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Cinematic Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl mb-6 shadow-glass-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-300 tracking-wide">
              {personal.status}
            </span>
          </motion.div>

          {/* Name Display */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
            <span className="block text-gradient-ambient">
              {personal.name}
            </span>
          </h1>

          {/* Role Subtitle */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-gradient-to-r from-gold-400 to-transparent" />
            <h2 className="text-lg sm:text-2xl font-medium tracking-wide text-gradient-gold">
              {personal.headline}
            </h2>
          </div>

          {/* Short Introduction */}
          <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl font-normal leading-relaxed mb-8">
            "{personal.intro}"
          </p>

          {/* Key tags */}
          <div className="flex flex-wrap gap-2.5 mb-10 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-gold-400" />
              Machine Learning
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-slate-300" />
              Computer Vision
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
              Data Science Pipelines
            </span>
          </div>

          {/* Dual Liquid CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <LiquidButton
              asAnchor
              href="#projects"
              variant="gold"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              View My Work
            </LiquidButton>

            <LiquidButton
              asAnchor
              href="#contact"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Contact Me
            </LiquidButton>
          </div>
        </motion.div>

        {/* Right Column: 3D Antigravity Tech Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <FloatingTechCore />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 inset-x-0 flex flex-col items-center justify-center gap-2 pointer-events-none text-slate-500"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
