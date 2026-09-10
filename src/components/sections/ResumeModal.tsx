import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { LiquidButton } from '../ui/LiquidButton';
import { TiltCard } from '../ui/TiltCard';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeSection: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#d4af37', '#ffffff', '#e2e8f0'],
    });

    // Create a mock downloadable text/PDF placeholder
    const element = document.createElement('a');
    const file = new Blob([
      `SAKTHIVEL V - RESUME\nArtificial Intelligence & Data Science Engineering Student\nEmail: ${PORTFOLIO_DATA.personal.email}\nGitHub: ${PORTFOLIO_DATA.personal.github}\nLinkedIn: ${PORTFOLIO_DATA.personal.linkedin}\n\nEDUCATION:\n- BTech in Artificial Intelligence & Data Science (Currently Pursuing)\n- 12th Standard: 75%\n- 10th Standard: 65%\n\nCORE SKILLS:\nPython, Java, C, SQL, Data Science, Machine Learning, Power BI, Git/GitHub\n\nPROJECTS:\nAI-Integrated Smart Camera: AI-powered surveillance & situation detection.\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = PORTFOLIO_DATA.personal.resumeFileName.replace('.pdf', '.txt');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <TiltCard maxTilt={5} className="rounded-3xl">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0c0f1d]/90 via-[#0a0c16]/70 to-[#06070c]/95 border border-white/15 p-8 sm:p-14 text-center overflow-hidden shadow-glass-lg">
          {/* Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 shadow-inner">
              <FileText className="w-7 h-7 text-gold-400" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-2">
              Curriculum Vitae
            </span>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Want to know more about my journey?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-lg">
              Download my official resume dossier detailing coursework, engineering projects, programming expertise, and technical milestones.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <LiquidButton
                variant="gold"
                icon={<Download className="w-4 h-4" />}
                onClick={handleDownload}
              >
                Download Resume
              </LiquidButton>

              <button
                onClick={onOpenModal}
                className="px-6 py-3.5 rounded-full text-sm font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Quick Dossier Preview</span>
              </button>
            </div>
          </div>
        </div>
      </TiltCard>
    </section>
  );
};

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#090b14] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-gold-400/40 shadow-sm flex-shrink-0 bg-slate-900">
                <img
                  src="/sakthivel.jpg"
                  alt="Sakthivel V"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400">
                  Official Document Preview
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {PORTFOLIO_DATA.personal.name} — Resume
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dossier Content Preview */}
          <div className="space-y-6 text-left text-xs sm:text-sm text-slate-300 font-sans max-h-[60vh] overflow-y-auto pr-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-300 font-mono mb-2">
                Executive Profile
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {PORTFOLIO_DATA.personal.intro} {PORTFOLIO_DATA.about.extendedBio}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-300 font-mono mb-2">
                Education
              </h4>
              <div className="space-y-2">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex justify-between items-center text-white font-medium">
                      <span>{edu.degree}</span>
                      <span className="text-gold-400 font-mono text-xs">{edu.score}</span>
                    </div>
                    <div className="text-slate-400 text-xs">{edu.institution} • {edu.period}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-300 font-mono mb-2">
                Technical Proficiencies
              </h4>
              <p className="text-slate-300">
                <strong className="text-white">Core:</strong> Python, Java, C, SQL
                <br />
                <strong className="text-white">Specializations:</strong> Artificial Intelligence, Computer Vision, Machine Learning, Data Science, Power BI, Git / GitHub
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-300 font-mono mb-2">
                Key Production Concept
              </h4>
              <p className="text-slate-300">
                <strong className="text-white">AI-Integrated Smart Camera:</strong> Real-time situational awareness and automated emergency alerts powered by edge vision tensors.
              </p>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[11px] font-mono text-slate-500">
              Format: PDF / Text Ready
            </span>
            <div className="flex items-center gap-3">
              <LiquidButton
                variant="gold"
                icon={<Download className="w-4 h-4" />}
                onClick={() => {
                  confetti();
                  onClose();
                }}
              >
                Download File
              </LiquidButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
