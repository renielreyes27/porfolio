# Project Rules


Placeholder file for project rules and conventions.
PROJECT RULES — PORTFOLIO

1. Read AI_HANDOFF.md before continuing existing work.
2. Inspect only relevant files. Avoid unnecessary repository-wide inspection.
3. For unclear bugs, inspect and identify the root cause BEFORE editing.
4. Make the smallest clean change necessary.
5. Do not redesign, refactor, or modify unrelated components unless explicitly requested.
6. Preserve the existing UI, #330066 theme, layout, spacing, typography, animations, numbering, and responsive behavior.
7. Preserve working functionality when fixing another feature.
8. Use existing project architecture, utilities, components, and centralized data/configuration.
9. Do not add dependencies unless absolutely necessary.
10. For navigation changes, verify desktop and mobile behavior, smooth scrolling, active-section synchronization, and all sections: Home, About, Skills, Experience, Projects, Contact.
11. After code changes, run `npm run lint` and resolve all errors.
12. Update AI_HANDOFF.md after meaningful changes with a concise record of the change and verification.
13. If the user requests INSPECTION ONLY, do not modify any files.
14. Do not claim a fix is complete without verification.