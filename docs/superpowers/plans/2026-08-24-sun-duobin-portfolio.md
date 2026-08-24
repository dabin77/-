# SUN DUOBIN Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive React portfolio that presents SUN DUOBIN's profile, verified strengths, two real projects, practical experience, and availability to Korean recruiters.

**Architecture:** A Vite React single page renders static typed portfolio data through focused section and component modules. Real project captures and generated transparent 3D assets live under `public/assets`, while motion remains progressive and respects reduced-motion preferences.

**Tech Stack:** React 18, TypeScript, Vite, Framer Motion, Lucide React, CSS, Vitest, Testing Library

**Spec:** `docs/superpowers/specs/2026-08-24-sun-duobin-portfolio-design.md`

## Global Constraints

- Dark sections use exactly `#0C0C0C`; light sections use exactly `#FFFFFF`.
- Largest section titles remain English; navigation, numbered capabilities, row labels, buttons, and descriptions are Korean.
- Only KINGO SPOT and Starfield Suwon are featured project links.
- Project media must be real captures from the provided URLs, not generated mockups.
- The Starfield figure is an estimated additional 12억 원 sales model, not an achieved result.
- Do not invent an email address, restaurant marketing detail, skill level, metric, or credential.
- Do not expose height or weight in the public portfolio.
- Respect `prefers-reduced-motion` and maintain keyboard-visible focus.

---

### Task 1: Project foundation and public portfolio data

**Files:**
- Create: `package.json`, `tsconfig.json`, `vite.config.ts`, `vitest.setup.ts`, `eslint.config.js`, `index.html`
- Create: `src/data/portfolio.test.ts`
- Create: `src/data/portfolio.ts`

**Interfaces:**
- Produces: `PortfolioData`, `portfolio`, `navItems`, `strengths`, `profileRows`, `projects`, `experiences`

- [ ] **Step 1: Create the Vite/Vitest configuration and dependencies.**
- [ ] **Step 2: Write a failing data contract test** with literal expectations independent of the production data.

```ts
import { describe, expect, it } from 'vitest'
import { portfolio } from './portfolio'

describe('portfolio data', () => {
  it('publishes only the two verified projects and their real links', () => {
    expect(portfolio.projects).toHaveLength(2)
    expect(portfolio.projects.map((project) => project.href)).toEqual([
      'https://kingospot-rnwr.vercel.app/#intro',
      'https://www.miricanvas.com/v2/ko/design2/v/647cf684-565e-442c-b145-cdcd9bca98a1',
    ])
  })

  it('keeps verified profile and estimate wording accurate', () => {
    expect(portfolio.profile.gpa).toBe('4.29 / 4.5')
    expect(portfolio.profile.korean).toBe('원어민에 준하는 수준')
    expect(portfolio.projects[1].summary).toContain('추가 매출 12억 원')
    expect(portfolio.projects[1].summary).not.toContain('실현')
  })
})
```
- [ ] **Step 3: Run `npm test -- --run src/data/portfolio.test.ts` and verify it fails because `portfolio.ts` is missing.**
- [ ] **Step 4: Implement the typed portfolio data with literal, verified values from the spec.**
- [ ] **Step 5: Run the focused test and verify it passes.**
- [ ] **Step 6: Commit `feat: add verified portfolio data`.**

### Task 2: Real project captures and visual assets

**Files:**
- Create: `public/assets/kingo/intro.png`, `public/assets/kingo/purpose.png`, `public/assets/kingo/recommendation.png`
- Create: `public/assets/starfield/cover.png`, `public/assets/starfield/strategy.png`, `public/assets/starfield/revenue.png`
- Create: `public/assets/visual/bridge-hero.webp`, `public/assets/visual/bridge-ribbon.webp`, `public/assets/visual/ai-lattice.webp`

**Interfaces:**
- Produces: stable public URLs consumed by `projects` and visual sections

- [ ] **Step 1: Capture three real KINGO SPOT states in the Browser at a stable desktop viewport.**
- [ ] **Step 2: Capture three real Starfield MiriCanvas slides: cover, core strategy, and revenue model.**
- [ ] **Step 3: Generate transparent chrome-and-glass bridge, ribbon, and AI lattice assets matching the accepted concepts.**
- [ ] **Step 4: Verify each saved PNG loads locally and has the expected dimensions.**
- [ ] **Step 5: Commit `assets: add verified project and portfolio visuals`.**

### Task 3: Navigation, shared primitives, and section behavior

**Files:**
- Create: `src/components/SiteNav.test.tsx`, `src/components/SiteNav.tsx`
- Create: `src/components/SectionTitle.tsx`, `src/components/Reveal.tsx`, `src/components/CircleLink.tsx`
- Create: `src/styles/tokens.css`, `src/styles/global.css`

**Interfaces:**
- Consumes: `navItems`
- Produces: `SiteNav`, `SectionTitle`, `Reveal`, `CircleLink`

- [ ] **Step 1: Write a failing navigation test** that exercises the real semantic links.

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteNav } from './SiteNav'

describe('SiteNav', () => {
  it('links the four Korean navigation labels to real page sections', () => {
    render(<SiteNav />)
    const nav = screen.getByRole('navigation', { name: '주요 메뉴' })
    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '소개' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: '강점' })).toHaveAttribute('href', '#strengths')
    expect(screen.getByRole('link', { name: '프로젝트' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: '연락' })).toHaveAttribute('href', '#contact')
  })
})
```
- [ ] **Step 2: Run the focused test and verify the component import fails.**
- [ ] **Step 3: Implement semantic navigation and shared visual primitives.**
- [ ] **Step 4: Run the focused test and verify it passes.**
- [ ] **Step 5: Commit `feat: add portfolio navigation and primitives`.**

### Task 4: Hero, About, Strengths, and Profile sections

**Files:**
- Create: `src/sections/HeroSection.tsx`, `src/sections/AboutSection.tsx`, `src/sections/ProfileSection.tsx`
- Create: `src/sections/ProfileSection.test.tsx`

**Interfaces:**
- Consumes: `portfolio`, `strengths`, `profileRows`, shared primitives, visual assets
- Produces: semantic sections with IDs `about`, `strengths`, and `profile`

- [ ] **Step 1: Write a failing Profile section test** for the exact verified profile content and strengths.

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSection } from './AboutSection'
import { ProfileSection } from './ProfileSection'

describe('profile sections', () => {
  it('renders verified education, language, availability, and five strengths', () => {
    render(<><AboutSection /><ProfileSection /></>)
    expect(screen.getByText(/손다빈/)).toBeInTheDocument()
    expect(screen.getByText(/2023\.03.*2027\.02/)).toBeInTheDocument()
    expect(screen.getByText(/4\.29 \/ 4\.5/)).toBeInTheDocument()
    expect(screen.getByText('한국어 · 원어민에 준하는 수준')).toBeInTheDocument()
    expect(screen.getByText(/F-4 체류자격/)).toBeInTheDocument()
    expect(screen.getAllByTestId('strength-row')).toHaveLength(5)
  })
})
```
- [ ] **Step 2: Run the focused test and verify the missing section failure.**
- [ ] **Step 3: Implement Hero, About/Strengths, and Profile with concept-faithful hierarchy and responsive open rows.**
- [ ] **Step 4: Run the focused test and verify it passes.**
- [ ] **Step 5: Commit `feat: build introduction and profile sections`.**

### Task 5: Sticky projects with verified links and media

**Files:**
- Create: `src/sections/ProjectsSection.test.tsx`, `src/sections/ProjectsSection.tsx`
- Create: `src/components/ProjectCard.tsx`

**Interfaces:**
- Consumes: `projects`, project capture asset URLs, `CircleLink`
- Produces: `ProjectsSection` with ID `projects`

- [ ] **Step 1: Write a failing project section test** that checks user-visible articles, external-link safety, real-media alt text, and estimate wording.

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection', () => {
  it('shows two verified projects with safe links and real captures', () => {
    render(<ProjectsSection />)
    expect(screen.getAllByRole('article')).toHaveLength(2)
    const kingo = screen.getByRole('link', { name: '실제 사이트 보기' })
    expect(kingo).toHaveAttribute('href', 'https://kingospot-rnwr.vercel.app/#intro')
    expect(kingo).toHaveAttribute('target', '_blank')
    expect(kingo).toHaveAttribute('rel', 'noreferrer')
    expect(screen.getByAltText('KINGO SPOT 실제 서비스 첫 화면')).toBeInTheDocument()
    expect(screen.getByText(/추가 매출 12억 원/)).toBeInTheDocument()
  })
})
```
- [ ] **Step 2: Run the test and verify it fails because the section is missing.**
- [ ] **Step 3: Implement sticky stacking cards on desktop and normal flow on mobile.**
- [ ] **Step 4: Run the focused test and verify it passes.**
- [ ] **Step 5: Commit `feat: add verified featured projects`.**

### Task 6: Experience, Contact, page assembly, and responsive polish

**Files:**
- Create: `src/sections/ExperienceSection.tsx`, `src/sections/ContactSection.tsx`
- Create: `src/App.test.tsx`, `src/App.tsx`, `src/main.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: all shared sections and `experiences`
- Produces: the complete single-page portfolio

- [ ] **Step 1: Write a failing App integration test** for real section structure, experience rows, and conditional contact behavior.

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('assembles the complete portfolio without inventing a contact address', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'ABOUT ME' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'PROFILE' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'PROJECTS' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'EXPERIENCE' })).toBeInTheDocument()
    expect(screen.getAllByTestId('experience-row')).toHaveLength(3)
    expect(screen.queryByRole('link', { name: '연락하기' })).not.toBeInTheDocument()
  })
})
```
- [ ] **Step 2: Run the test and verify the missing App failure.**
- [ ] **Step 3: Implement Experience, conditional Contact CTA, page assembly, mobile layout, reduced-motion behavior, and metadata.**
- [ ] **Step 4: Run all tests and verify they pass.**
- [ ] **Step 5: Run lint and build, fixing only evidenced errors.**
- [ ] **Step 6: Commit `feat: complete responsive portfolio page`.**

### Task 7: Browser fidelity and interaction verification

**Files:**
- Modify: implementation files only when a verified mismatch requires a correction

**Interfaces:**
- Consumes: local production-like Vite page and accepted concepts
- Produces: verified desktop/mobile implementation and a fidelity ledger

- [ ] **Step 1: Start the local app and define the target flow:** app loads → Korean navigation scrolls to Projects → real project links and media are visible.
- [ ] **Step 2: Verify page identity, nonblank DOM, no framework overlay, console health, and at least one navigation interaction in the in-app Browser.**
- [ ] **Step 3: Capture desktop 1440×900 and mobile 390×844 screenshots.**
- [ ] **Step 4: Use `view_image` on each accepted concept and latest implementation screenshot; compare copy, layout, typography, palette, image treatment, spacing, and responsive behavior.**
- [ ] **Step 5: Fix each material mismatch and repeat Browser checks.**
- [ ] **Step 6: Run fresh `npm test -- --run`, `npm run lint`, and `npm run build`.**
- [ ] **Step 7: Commit `test: verify portfolio fidelity and interactions`.**
