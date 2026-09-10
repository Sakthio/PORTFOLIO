import React from 'react';
import {
  Shield,
  Activity,
  ArrowUpRight,
  Maximize2,
  Database,
  Brain,
  Code,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import type { ProjectItem } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';
import { LiquidButton } from '../ui/LiquidButton';
import { GitHubIcon } from '../icons/SocialIcons';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const featured = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-widest text-gold-400 mb-3">
          Showcase
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
          Engineered Projects
        </h2>
        <p className="text-slate-400 max-w-lg text-sm sm:text-base">
          Cinematic exploration of artificial intelligence implementations, intelligent computer vision, and scalable code.
        </p>
      </div>

      {/* Featured Project: AI-Integrated Smart Camera (Large Cinematic Card) */}
      <div className="mb-14">
        <TiltCard maxTilt={4} className="rounded-3xl">
          <div className="relative rounded-3xl bg-[#090b14]/70 backdrop-blur-2xl border border-white/15 p-8 sm:p-12 overflow-hidden shadow-glass-lg group">
            {/* Top Atmospheric Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/[0.07] rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Project Details */}
              <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
                {/* Badge & Category */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    Featured Project
                  </span>
                  <span className="text-xs font-mono text-slate-400">{featured.status}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-3">
                  {featured.title}
                </h3>
                <p className="text-sm font-medium text-gold-300/90 mb-4 font-mono">
                  {featured.subtitle}
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  {featured.description}
                </p>

                {/* Highlights / Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats / Performance Indicators */}
                {featured.stats && (
                  <div className="grid grid-cols-3 gap-4 w-full py-4 mb-8 border-y border-white/[0.08]">
                    {featured.stats.map((stat, idx) => (
                      <div key={idx}>
                        <span className="block text-[10px] uppercase font-mono text-slate-400">
                          {stat.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Project CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <LiquidButton
                    variant="gold"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                    onClick={() => {}}
                  >
                    Explore System Architecture
                  </LiquidButton>

                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-medium text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:text-white transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>Source Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive AI Camera HUD Visual Area */}
              <div className="lg:col-span-6 relative z-10">
                <div className="relative w-full aspect-[4/3] rounded-2xl bg-black/60 border border-white/10 overflow-hidden shadow-2xl p-4 flex flex-col justify-between">
                  {/* Camera Live Feed Simulation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#070912] to-slate-900 opacity-90" />
                  
                  {/* Grid Lines and Crosshairs */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                  {/* Top Status Bar */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span className="text-red-400 font-bold uppercase tracking-wider">LIVE FEED [CAM-01]</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <span>FPS: 60</span>
                      <span>ISO 400</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Interactive Bounding Box Simulation */}
                  <div className="relative z-10 my-auto flex items-center justify-center">
                    <div className="relative w-48 sm:w-56 h-36 border border-gold-400/60 rounded-lg p-2.5 backdrop-blur-xs bg-gold-400/[0.03] transition-all">
                      {/* Bounding Box Corners */}
                      <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gold-400" />
                      <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gold-400" />
                      <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-gold-400" />
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-gold-400" />

                      {/* AI Detection Label */}
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-gold-500/20 border border-gold-400/40 text-[10px] font-mono text-gold-300 font-semibold mb-1">
                        <Activity className="w-3 h-3 animate-spin" />
                        <span>DETECTED: PERSON (98.6%)</span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-300">STATUS: SAFE PERIMETER</div>
                      <div className="text-[9px] font-mono text-slate-400 mt-1">LATENCY: 38ms EDGE TENSOR</div>

                      {/* Optical center reticle */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-white/30 rounded-full flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-gold-400" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Telemetry HUD */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Zero Anomalies Detected</span>
                    </div>
                    <span className="text-slate-400">AI SAFETY FILTER: ON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>

      {/* Additional Modular Project Placeholders (Easily Replaceable) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {otherProjects.map((project: ProjectItem) => (
          <TiltCard key={project.id} maxTilt={6} className="h-full rounded-2xl">
            <div className="h-full p-6 rounded-2xl bg-[#090c16]/50 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 hover:bg-[#0f1322]/60 transition-all duration-300 flex flex-col justify-between shadow-glass-sm group">
              <div>
                {/* Header Icon & Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-200 group-hover:text-gold-400 transition-colors">
                    {project.id === 'data-analytics' && <Database className="w-5 h-5" />}
                    {project.id === 'machine-learning' && <Brain className="w-5 h-5" />}
                    {project.id === 'java-programming' && <Code className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/10">
                    {project.status}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-white mb-1.5 font-display group-hover:text-gold-200 transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs font-mono text-gold-400/80 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Ready for customization</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};
