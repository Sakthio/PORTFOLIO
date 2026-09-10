import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#040509] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Monogram & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center font-display font-bold text-xs text-white">
            SV
          </div>
          <div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">
              © {PORTFOLIO_DATA.personal.copyrightYear} Sakthivel V. All rights reserved.
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              Engineered with Artificial Intelligence, Antigravity Physics & Liquid Glass.
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Undergraduate Candidate in AI & Data Science</span>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-400 hover:text-white transition-all shadow-glass-sm"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
