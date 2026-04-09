# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when contributing to this repository.

## Common Commands

- Run dev server: `npm run dev`
- Build production bundle: `npm run build`
- Type-check project: `vue-tsc --noEmit`

## High-Level Architecture

- App bootstrap: `src/main.ts`
- Router setup: `src/router/index.ts`
- Global layout / landing: `src/views/Home.vue`
- Presentation source: `src/presentations/<slug>/index.vue`
- Shared UI and utilities: `src/shared/`
- State stores (Pinia-ready): `src/stores/`
- Styling entry: `src/style.css`

## Shared Presentation Primitives

- `src/shared/ppt-container.vue`
  - Base shell for slide decks. Accepts a `slides` array of Vue components and exposes keyboard navigation (← → Space Home End Esc) plus progress UI.
  - Use this instead of rebuilding navigation per presentation.
- `src/shared/backgrounds/`
  - Background modules live under `modules/<id>/background.vue` and register themselves via `index.ts` exports.
  - `background-manager.vue` renders the active background and wires the settings overlay (`Ctrl/⌘ + Shift + P` toggle, `Esc` close).
  - Settings UI: `background-settings-overlay.vue`. Update copy when keybinds change.
  - Background metadata type: `types.ts`; registry lives in `registry.ts`.
  - Background, theme, and locale coordination must follow the shared presentation rules in [docs/presentation_i18n_theming.md](../docs/presentation_i18n_theming.md).

## Adding a New Presentation (mandatory workflow)

1. **Scaffold files**
   - Create `src/presentations/<slug>/index.vue` as the entry point.
   - Build slide components (e.g. `slides/slide-1.vue`) and aggregate them in the entry file when passing to `<ppt-container>`.
2. **Hook background system**
   - Import and embed `<BackgroundManager>` inside the presentation root. Supply a `default-background` ID from `backgrounds/registry.ts`.
   - When a presentation needs a bespoke background, add a module under `src/shared/backgrounds/modules/<new-id>/`, export metadata, and register it in `registry.ts`.
3. **Register routing**
   - Append a new route in `src/router/index.ts` with `path: '/<slug>'` and `component: () => import('@/presentations/<slug>/index.vue')`.
4. **Update landing page**
   - Edit `src/views/Home.vue` to include a nav item pointing to the new route. Keep the list ordered and human-friendly.
5. **Document assets**
   - If the presentation has bespoke utilities/backgrounds, leave a short comment in the entry file describing overrides so future agents can reuse the work.

## Coding Guidelines

- Use TypeScript in `<script setup lang="ts">` blocks.
- Prefer composition API helpers from Vue (`ref`, `computed`, etc.).
- Keep shared logic reusable. New cross-presentation features should live in `src/shared/`.
- Respect keyboard accessibility when altering `ppt-container` or background manager shortcuts.
- Ensure hotkeys remain in sync with UI hints (`background-settings-overlay.vue` and any visible helper text).
- Use ASCII unless the surrounding file already contains non-ASCII copy (Chinese labels are acceptable in UI strings).
- Deck localization strings must come from `src/locales/<locale>/deck-<slug>.json` (per language). Avoid hardcoding multilingual copy in Vue files.

## Tooling Notes

- Vite + Vue 3 stack with `@vitejs/plugin-vue`.
- Tailwind must remain on the v3 line; avoid v4-only directives (`@theme`, new `@apply` semantics, etc.) and coordinate before changing the version.
- Run `vue-tsc --noEmit` before shipping major component refactors to catch type regressions.

## Review Checklist for Changes

- New decks appear in both router and home navigation.
- Background selections persist as expected (localStorage scoped by `contextKey`).
- Shortcut help text reflects the actual key combination (`Ctrl/⌘ + Shift + P`).
- Shared components remain framework-agnostic (no presentation-specific state leaks into `src/shared/`).
