# AGENTS.md

Coordinator playbook for multi-agent work in this repository.

## Repository Map

- `vue_ppt/src/presentations/<slug>/index.vue` – entry point for each deck.
- `vue_ppt/src/shared/ppt-container.vue` – shared slide navigator UI.
- `vue_ppt/src/shared/backgrounds/` – background modules, manager, and settings overlay.
- `vue_ppt/src/router/index.ts` – register presentation routes.
- `vue_ppt/src/views/Home.vue` – landing page linking to available decks.
- `docs/` – planning notes and outlines for upcoming decks.

## Operating Principles

1. **Single source of truth**: slide navigation and backgrounds live in `src/shared/`. Do not fork these per project—extend via registry or props.
2. **Discoverability first**: every new deck must be visible in router config and the home navigation list.
3. **Keyboard parity**: keep overlay shortcuts consistent (`Ctrl/⌘ + Shift + P` to toggle, `Esc` to close). Update UI hints when modifying bindings.
4. **Chinese UI copy**: allowed where needed for presentation content; keep code comments and structural docs in English for clarity across agents.
5. **Unified presentation context**: theme, background, and locale flows must align with [docs/presentation_i18n_theming.md](../docs/presentation_i18n_theming.md).
6. **Localized assets live in JSON**: store every deck-specific string under `src/locales/<locale>/deck-<slug>.json` and avoid hardcoding multilingual copy inside Vue components.
7. **Tailwind CSS baseline**: the codebase is pinned to Tailwind v3—do not introduce v4+ APIs or bump the dependency without coordination.

## Standard Workflow – Creating a New PPT Deck

1. **Scaffold presentation**
   - Create `src/presentations/<slug>/index.vue` with `<script setup lang="ts">`.
   - Build slides as individual components or inline objects, then pass them to `<ppt-container :slides="slides" :title="..." />`.
2. **Add background support**
   - Embed `<BackgroundManager default-background="<background-id>" context-key="<slug>" />` at the root of the deck.
   - If a custom background is required, create `src/shared/backgrounds/modules/<id>/background.vue`, export metadata via `index.ts`, and register it in `backgrounds/registry.ts`.
3. **Wire routing + navigation**
   - Append the route in `src/router/index.ts` (`path`, `name` optional, `component` lazy-loaded).
   - Update `src/views/Home.vue` to include a descriptive link for the deck. Maintain alphabetical order unless directed.
4. **Document nuances**
   - Note special setup (e.g., bespoke background options, data sources) in the deck entry file or docs.
   - When adding shared utilities, include minimal usage comments for future agents.
5. **Verification**
   - `npm run dev` → ensure the deck loads, background switcher responds to `Ctrl/⌘ + Shift + P`, and overlay closes on `Esc`.
   - `vue-tsc --noEmit` → confirm typings after large refactors.

## Task Allocation Template

- **Planner Agent**: confirm requirements, choose slug, outline slides, decide if new background module is needed.
- **Builder Agent**: implement slides, integrate `ppt-container` and `BackgroundManager`, register routes/nav, ensure lint/type safety.
- **QA Agent**: run dev server, exercise keyboard shortcuts, verify localStorage persistence (per `contextKey`), review docs for accuracy.
- **Docs Agent**: update relevant markdown (roadmaps, CLAUDE.md) when workflows or rules shift.

## When Updating Shared Backgrounds

- Synchronize shortcut descriptions across `background-manager.vue`, `background-settings-overlay.vue`, and any presentation UI hints.
- Keep shared backgrounds stateless; use local refs within modules and dispose of resources (`onUnmounted`).
- Always register new modules in `registry.ts` and provide meaningful `name`, `description`, and `tags`.

## Quick Command Reference

- Dev server: `npm run dev`
- Build: `npm run build`
- Type-check: `vue-tsc --noEmit`

Use this playbook to brief new agents before they begin work.
