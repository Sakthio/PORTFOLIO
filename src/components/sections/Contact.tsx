import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { LiquidButton } from '../ui/LiquidButton';
import { TiltCard } from '../ui/TiltCard';
import { GitHubIcon, LinkedInIcon } from '../icons/SocialIcons';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-gold-500/10 via-white/[0.02] to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
          Get in Touch
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
          Let's Build Something Great
        </h2>
        <p className="text-slate-400 max-w-md text-sm sm:text-base">
          Open to engineering internships, cutting-edge AI discussions, and collaborative research initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Links & Glass Liquid Buttons */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <TiltCard maxTilt={5} className="rounded-3xl">
            <div className="p-8 rounded-3xl bg-[#090b14]/60 backdrop-blur-2xl border border-white/10 shadow-glass-md flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Feel free to reach out directly through email or connect via professional platforms.
                </p>
              </div>

              {/* Email Copier Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-mono text-white truncate">{personal.email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-all flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Liquid / Glass Social Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <LinkedInIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      Connect on LinkedIn
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-gold-300">
                    /in/sakthivel-v →
                  </span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-500/10 border border-white/10 flex items-center justify-center text-slate-200">
                      <GitHubIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      Explore GitHub Repos
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-gold-300">
                    @Sakthio →
                  </span>
                </a>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Liquid Glass Interactive Form */}
        <div className="lg:col-span-7">
          <TiltCard maxTilt={4} className="rounded-3xl">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090b14]/60 backdrop-blur-2xl border border-white/10 shadow-glass-md">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-gold-400" />
                <h3 className="text-lg font-display font-semibold text-white">
                  Send a Direct Message
                </h3>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    Message Transmitted
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
                    Thank you for connecting with Sakthivel. I will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-gold-400/60 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-gold-400/60 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe the project or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-gold-400/60 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <LiquidButton
                      type="submit"
                      variant="gold"
                      icon={<Send className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      Transmit Message
                    </LiquidButton>
                  </div>
                </form>
              )}
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
