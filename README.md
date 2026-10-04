# IT Portfolio

A personal Information Technology portfolio website built to showcase academic work, skills, projects, web development work, and selected portfolio features.

> **Status:** Active Development

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4
- Framer Motion
- React Icons
- ESLint

## Portfolio Sections

- Hero / Introduction
- About Me
- Skills
- Projects
- Education
- Certificates
- Get in Touch

## Current Features

- Responsive portfolio layout
- Smooth section navigation
- Scroll-based navigation progress indicator
- Scroll reveal animations
- Interactive project cards
- Project screenshot gallery / live preview modal
- GitHub project links
- Resume live preview with open-in-tab, zoom, print, and download controls
- Interactive location maps
- Contact form with client-side validation
- Social links
- Soft white and purple visual design system
- Mobile-friendly navigation

## Education

The portfolio includes primary, secondary, and ongoing tertiary education history.

## Certificates

The portfolio includes academic seminar and certificate information.

## Validation

The project uses the following checks during development:

```bash
npm run lint
npm run build
```

The production build is generated through Vite.

## Project Structure

```text
src/
├── components/
│   ├── layout/          # Navbar, footer, and shared layout components
│   ├── sections/        # Hero, About, Skills, Projects, Education, etc.
│   └── ui/              # Reusable UI components and animations
├── data/                # Centralized portfolio content and project data
├── styles/              # Global styles, variables, and animations
└── ...
public/
├── project screenshots
├── resume assets
└── other static assets
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

## AI Development Rules

These rules must be followed by any AI agent working on this project:

1. **Read `README.md` and `AI_HANDOFF.md` first** before making any changes.
2. **Understand the existing architecture and design system** before modifying code. Do not guess or recreate existing components or data.
3. **Preserve existing functionality and completed work.** Never overwrite, remove, or revert working features unless explicitly instructed.
4. **Make only the requested changes.** Avoid unnecessary refactoring, dependencies, redesigns, or changes to unrelated sections.
5. **Preserve the established visual identity**, including the current soft-white/light design, soft-purple accents, layout, spacing, typography, animations, and responsive behavior, unless explicitly instructed otherwise.
6. **Check existing data files and components first** before creating new ones. Reuse existing structures whenever possible.
7. **Keep `AI_HANDOFF.md` updated** after every completed task. Append new progress; never delete or rewrite previous development history.
8. **Record important changes, modified files, decisions, and verification results** in `AI_HANDOFF.md`.
9. **Run `npm run lint`** after code changes and fix any issues introduced by the changes.
10. **Run `npm run build`** when validating production readiness or after meaningful structural changes.
11. **Do not claim a feature is fully functional** if it is only simulated or frontend-only. Clearly document limitations.
12. **Do not modify backend architecture** or add external services unless explicitly requested.
13. **Before finishing, verify that unrelated sections remain intact.**
14. **If requirements are unclear**, inspect the existing project documentation and code before making assumptions.
15. **Treat the existing project as an ongoing development project**, not a fresh project. Preserve previous decisions and progress.
16. **Do not add unnecessary dependencies.** Prefer the existing React, Tailwind CSS, Framer Motion, and React Icons setup.
17. **Do not expose private or sensitive information** in public portfolio content, screenshots, documentation, or commits.
18. **Do not invent project features, experience, credentials, or achievements.** Keep portfolio content accurate and student-focused.
