# Faisal Rehman — Personal Portfolio & Interactive Universe

A portfolio website engineered for **Faisal Rehman** (AI & Data Science Graduate, Class of 2025). Built as a personal digital identity with a futuristic cosmic design language, 3D interactive celestial globe, command palette, and interactive project dossiers.

---

## Core Highlights & Features

- **Strict Source of Truth**: All information, projects, technologies, and milestones are directly derived from `FAISAL_REHMAN.pdf` with no fabricated claims or exaggerated statistics.
- **AI Tools & Prompt Engineering Focus**: Highlights active proficiency with Google Antigravity, Google AI Studio, Gemini API, and advanced prompt engineering.
- **3D Celestial Ecosystem Globe**: Built with Three.js, featuring orbiting technology nodes (AI, ML, Python, Full Stack, Cybersecurity, IoT, DBMS, UI/UX) that respond to mouse motion, clicks, and jumps to sections.
- **Dual Visual Themes**:
  - **Cosmic Dark Mode**: Deep void obsidian (`#05070e`), glowing nebular gradients, and starfield canvas with subtle meteors.
  - **Stellar Light Mode**: Off-slate/clean background, deep navy typography, and crisp glass cards.
- **Command Palette (`Ctrl+K` / `Cmd+K`)**: Keyboard-accessible search to jump between sections, filter projects, toggle themes, or download the resume.
- **Interactive Technical Dossiers**: Deep-dive modals for all 6 projects (including the featured **Health Care and Hospital Management System** internship case study from CifTech Solutions).
- **Audio Feedback System**: Subtle synthesized Web Audio API cosmic clicks and alerts (toggleable via the navbar audio button).
- **Responsive & Accessible**: Semantic HTML5, visible focus states, ARIA labels, and `prefers-reduced-motion` support.
- **Single Source of Truth Data File**: All resume content is organized in [`src/data/resume.ts`](./src/data/resume.ts) for simple maintenance.

---

## Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS + Custom Glassmorphic Design System
- **3D Graphics**: Three.js
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom Brand SVGs
- **Typography**: Space Grotesk (Headings), Plus Jakarta Sans (Body), JetBrains Mono (Code/HUD)

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The portfolio will start at `http://127.0.0.1:5173/`.

### 3. Build for Production
```bash
npm run build
```
Generates production assets in the `dist/` folder.

---

## Project Structure

```
├── public/
│   └── FAISAL_REHMAN.pdf          # Verified resume PDF download
├── src/
│   ├── components/
│   │   ├── About.tsx              # Editorial personal narrative & academic HUD
│   │   ├── BeyondCode.tsx         # Pursuits & creative interests
│   │   ├── Certifications.tsx     # Training & verified credentials hub
│   │   ├── CommandPalette.tsx     # Fuzzy search & quick navigation
│   │   ├── Contact.tsx            # Transmission terminal & Bangalore live time
│   │   ├── CosmicBackground.tsx   # Canvas starfield & glowing nebulae
│   │   ├── CosmicGlobe3D.tsx      # Three.js celestial technology globe
│   │   ├── CustomCursor.tsx       # Smooth trailing cosmic pointer
│   │   ├── Education.tsx          # B.E. degree card (Navkis / VTU, 7.9 CGPA)
│   │   ├── ExperienceTimeline.tsx # Vertical interactive roadmap
│   │   ├── Footer.tsx             # Dynamic year & return-to-orbit control
│   │   ├── Hero.tsx               # Primary headline, live status & CTAs
│   │   ├── Navbar.tsx             # Sticky glassmorphic navigation & controls
│   │   ├── ProjectModal.tsx       # Full case-study modal dialog
│   │   ├── Projects.tsx           # Interactive project grid & featured case study
│   │   ├── SkillConstellation.tsx # Categorized skill universe & domain matrix
│   │   └── ToolsEcosystem.tsx     # Interactive 8-tool ecosystem matrix
│   ├── data/
│   │   └── resume.ts              # Single source of truth for resume data
│   ├── hooks/
│   │   ├── useSound.ts            # Web Audio API micro-sounds
│   │   └── useTheme.ts            # Theme switcher with localStorage persistence
│   ├── App.tsx                    # Main layout and state coordinator
│   ├── index.css                  # CSS tokens, glassmorphism, and animations
│   └── main.tsx                   # React root entrypoint
├── tailwind.config.js             # Tailwind configuration & design tokens
├── postcss.config.js              # PostCSS configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Project scripts and dependencies
```
