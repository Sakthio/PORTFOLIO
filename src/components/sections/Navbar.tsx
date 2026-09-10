import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Interests', href: '#interests' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = ['about', 'skills', 'projects', 'education', 'interests', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 py-4 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between gap-4 px-5 py-2.5 rounded-full transition-all duration-500 max-w-5xl w-full ${
          scrolled
            ? 'bg-[#0a0c14]/75 backdrop-blur-2xl border border-white/10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)]'
            : 'bg-[#0a0c14]/40 backdrop-blur-lg border border-white/5 shadow-none'
        }`}
      >
        {/* Brand Monogram */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-wider text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent border border-white/15 flex items-center justify-center font-display font-bold text-xs text-white group-hover:border-gold-400/50 transition-colors">
            SV
          </div>
          <span className="font-display tracking-tight text-slate-200 group-hover:text-white hidden sm:inline-block">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-[13px] font-medium text-slate-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10 shadow-inner"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Quick Action Button: Resume */}
        <div className="flex items-center gap-2">
          <button
            onClick={onResumeClick}
            className="group relative hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-gold-400/40 hover:text-white transition-all shadow-glass-sm"
          >
            <FileText className="w-3.5 h-3.5 text-gold-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-gold-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 p-5 rounded-3xl bg-[#0a0c16]/95 backdrop-blur-3xl border border-white/15 shadow-2xl flex flex-col gap-3 pointer-events-auto md:hidden z-50"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="w-full py-3 rounded-full bg-gold-500/15 border border-gold-400/40 text-xs font-semibold text-white flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-gold-400" />
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
