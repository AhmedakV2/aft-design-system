# AFT full-repo redesign master prompt

You have access to two repositories:

- **TARGET**: the existing Electron application.
- **AFT DESIGN SYSTEM**: this repository.

Redesign the TARGET frontend end-to-end. Do not preserve the legacy visual structure merely because it exists. Preserve business logic, API contracts, data behavior and Electron IPC unless a UI integration requires a minimal compatible change.

## Required process
1. Read `CLAUDE.md`, `docs/current/*`, `docs/decisions/*` and token files.
2. Audit the entire TARGET repo before changing UI.
3. Produce `UI_AUDIT.md`, `SCREEN_MAP.md`, `MIGRATION_PLAN.md` inside TARGET.
4. Implement foundations first: tokens, fonts, shell, titlebar, navigation, command palette, status bar, panels, focus system.
5. Migrate every user workflow to the new system. Do not stop after a few screens.
6. Remove visual duplication and dead legacy styling once migration is verified.
7. Run quality gates and fix failures.

## Product model
AFT is a desktop IDE/tool/agent, not a SaaS dashboard. Prefer contextual panes, dense data, keyboard workflows, predictable selection and progressive disclosure.

## Non-negotiable current decisions
- Primary brand accent is **Orange**.
- Agent is a contextual right panel.
- Data/sync belongs in Settings; sync summary in status bar.
- Terminal is a bottom panel.
- AFT uses the workflow IA: Create → Run → Analyze.

## Do not
- ask me to explain every page one by one;
- invent page-specific design languages;
- use arbitrary colors/spacing/radii;
- wrap every section in cards;
- use glassmorphism/glow/marketing gradients;
- silently remove features;
- leave half-migrated screens.

Finish only when all frontend surfaces are mapped to the design system and `UI Definition of Done` is satisfied.
