import React, { useState } from 'react';
import { AntigravityBackground } from './components/effects/AntigravityBackground';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Interests } from './components/sections/Interests';
import { Achievements } from './components/sections/Achievements';
import { ResumeSection, ResumeModal } from './components/sections/ResumeModal';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030305] text-[#e2e8f0] overflow-x-hidden selection:bg-gold-500/20 selection:text-white">
      {/* 1. Antigravity Physics Particle & Atmosphere Background */}
      <AntigravityBackground />

      {/* 2. Floating Liquid Glass Navbar */}
      <Navbar onResumeClick={() => setResumeModalOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* 3. Hero Section with 3D Antigravity Floating Tech Core */}
        <Hero />

        {/* 4. About Section */}
        <About />

        {/* 5. Interactive Skills Section */}
        <Skills />

        {/* 6. Projects Showcase (AI Smart Camera HUD & Modular Cards) */}
        <Projects />

        {/* 7. Education Timeline */}
        <Education />

        {/* 8. Career & Technical Interests */}
        <Interests />

        {/* 9. Experience & Achievements */}
        <Achievements />

        {/* 10. Resume CTA Banner */}
        <ResumeSection onOpenModal={() => setResumeModalOpen(true)} />

        {/* 11. Contact Section */}
        <Contact />
      </main>

      {/* 12. Minimal Luxury Footer */}
      <Footer />

      {/* Interactive Resume Dossier Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
