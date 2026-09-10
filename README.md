# Sakthivel V — Luxury Antigravity Portfolio

An ultra-premium, modern, Apple-inspired personal portfolio website engineered for **Sakthivel V**, BTech Student in Artificial Intelligence and Data Science.

Designed with an **"Antigravity"** visual aesthetic, **Liquid Glassmorphism UI**, dark obsidian styling, and interactive 3D computing elements.

---

## 🌟 Key Highlights & Design Philosophy

- **Antigravity Visuals:** Floating elements, dynamic mouse parallax, interactive 3D levitation, and ambient stardust physics rendered on a hardware-accelerated canvas.
- **3D AI Tech Core:** Interactive Three.js gyroscope/neural orb responding to cursor coords in the Hero section with live telemetry tags.
- **Liquid Glass UI:** Soft refraction borders, pill-shaped liquid buttons with magnetic hover physics, subtle light shimmer, and frosted backdrop blurs (`backdrop-blur-2xl`).
- **Cinematic AI Project Showcase:** Featuring the **AI-Integrated Smart Camera** complete with real-time HUD bounding box and edge-vision metrics, plus modular placeholders for Data Analytics, Machine Learning, and Java.
- **Academic Timeline:** Distinction markers, glowing timeline nodes, and curriculum highlights for BTech, 12th (75%), and 10th (65%).
- **Centralized Data File:** Easily edit all personal info, skills, projects, and contact details in one file: `src/data/portfolioData.ts`.

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure **Node.js** (v18+) is installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 🛠 Project Structure

```
sakthivel-portfolio/
├── src/
│   ├── components/
│   │   ├── effects/
│   │   │   ├── AntigravityBackground.tsx   # Canvas particles & stardust physics
│   │   │   └── FloatingTechCore.tsx        # 3D Three.js AI Gyroscope / Neural Core
│   │   ├── icons/
│   │   │   └── SocialIcons.tsx             # Crisp SVG icons for GitHub & LinkedIn
│   │   ├── sections/
│   │   │   ├── Navbar.tsx                  # Apple-style frosted capsule navbar
│   │   │   ├── Hero.tsx                    # Cinematic name, title & liquid CTAs
│   │   │   ├── About.tsx                   # Professional dossier & core pillars
│   │   │   ├── Skills.tsx                  # Interactive 3D glass skill cards
│   │   │   ├── Projects.tsx                # AI Smart Camera HUD & modular cards
│   │   │   ├── Education.tsx               # Vertical timeline with glowing nodes
│   │   │   ├── Interests.tsx               # 6 Focus areas with animated cards
│   │   │   ├── Achievements.tsx            # Categorized milestone tabs
│   │   │   ├── ResumeModal.tsx             # Resume CTA banner & preview modal
│   │   │   ├── Contact.tsx                 # Liquid buttons, copy email & message form
│   │   │   └── Footer.tsx                  # Minimal luxury footer & top scroll
│   │   └── ui/
│   │       ├── LiquidButton.tsx            # Magnetic liquid glass pill button
│   │       └── TiltCard.tsx                # 3D perspective mouse tilt & glare
│   ├── data/
│   │   └── portfolioData.ts                # Central configuration for all content
│   ├── App.tsx                             # Root layout & modal controller
│   ├── index.css                           # Tailwind directives & glass utilities
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## ⚙️ How to Personalize

To change your email, GitHub link, project descriptions, or add new skills, simply open:
[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

All text, links, metrics, and cards update across the entire site automatically.

---

## 📦 Deployment (1-Click)

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
Drag and drop the `dist/` folder into your Netlify dashboard.

### GitHub Pages
Set `base: '/repo-name/'` in `vite.config.ts` and deploy using GitHub Actions.

---

© 2026 Sakthivel V. All rights reserved.
