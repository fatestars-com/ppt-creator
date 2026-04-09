---
name: ppt-creator
description: |
  Create beautiful web-based PPT presentations using Vue3, Tailwind CSS, and AI coding tools.
  Use this skill whenever the user wants to make a presentation, slide deck, or PPT — whether they
  explicitly mention "PPT", "slides", "presentation", or describe something like "帮我做个PPT" / "make
  a presentation about X". Also use when users describe pain points with traditional PowerPoint tools
  or want AI-generated presentations. The skill is driven by AI coding (Codex/Claude Code), not
  template filling.
trigger: |
  User wants to create a PPT, slides, or presentation. Triggers include:
  - "帮我做个PPT" / "做PPT" / "做幻灯片"
  - "make a presentation about X"
  - "create slides for X"
  - "I need a deck about X"
  - Complaints about AI PPT tools being template-limited or low quality
  - Requests involving vue_ppt project, presentation framework, or slide design
  - "我想用AI做PPT" / "AI生成PPT"
---

# PPT Creator Skill

This skill creates **web-based presentations** using Vue3 + Tailwind CSS, not traditional .pptx files.
The core philosophy: **AI does the coding, you just review the visual result**.

## Project Location

**Vue PPT 项目**: `./vue_ppt` (同目录下)
**Dev Server**: `npm run dev` → `http://localhost:5173`
**路由格式**: `http://localhost:5173/<slug>`

## Core Workflow

```
[User provides content/idea]
        ↓
[Plan slide structure + types]
        ↓
[Write page descriptions (content, not code)]
        ↓
[Generate Vue3 slide components → index.vue + slide-N-*.vue]
        ↓
[Register route + home link]
        ↓
[User reviews at localhost:XXXX]
        ↓
[Feedback loop: "change X" → regenerate]
        ↓
[Done when user is satisfied]
```

---

## Step 1: Clarify the Content

Ask the user if not obvious:
1. **Topic**: What is the presentation about?
2. **Pages**: How many slides roughly? (or let the content determine it)
3. **Style**: Any brand colors or design preferences? Dark or light?
4. **Language**: 中文 or English?

---

## Step 2: Plan Slide Structure

Standard deck anatomy:

| # | Slide Type | Purpose |
|---|-----------|---------|
| 1 | Hero/Title | Main topic, hook |
| 2 | Section | Chapter opener |
| 3+ | Content | Based on content |
| Last | CTA / End | Call to action |

Available slide types:
- **Hero** - Big title + subtitle, establishes tone
- **Section Divider** - Chapter breaks (big chapter number + title)
- **Stats/Metrics** - Big numbers with labels (e.g. "60万")
- **Checklist/Guides** - Step-by-step or bullet lists
- **Compare** - Side-by-side options
- **CTA** - Call to action, ending slide

---

## Step 3: Write Page Descriptions

Write for each slide:

```markdown
# Page N: [Slide Type]
[Title]
[Content description]
[Design notes: colors, emphasis, layout]
```

**Key principle**: Describe **visually**, not as code. The AI coding tool handles Vue implementation.

---

## Step 4: Generate the Slides

Create these files under `vue_ppt/src/presentations/<slug>/`:

### index.vue (entry point) — **CRITICAL**

This is the most important file. Must include `presentationContext`:

```vue
<script setup lang="ts">
import PptContainer from '@/shared/ppt-container.vue'
import BackgroundManager from '@/shared/backgrounds/background-manager.vue'
import {
  createPresentationContext,
  providePresentationContext
} from '@/shared/presentation/presentation-context'
import { backgroundRegistry } from '@/shared/backgrounds/registry'

import Slide1 from './slide-1-title.vue'
import Slide2 from './slide-2-section.vue'
// ... import all slides

const slides = [Slide1, Slide2, Slide3, ...]

// Provide context BEFORE BackgroundManager renders
const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'demo-particles',  // or 'soft-mesh'
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: [{ code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }],
  contextKey: 'your-slug',
  persist: true
})
providePresentationContext(presentationContext)

// Slide titles for ESC thumbnail preview
const slideTitles = [
  'Slide 1 title',
  'Slide 2 title',
  // ... one per slide
]
</script>

<template>
  <div class="relative flex h-screen w-screen overflow-hidden text-white">
    <BackgroundManager />
    <main class="relative z-10 flex h-full w-full items-center justify-center">
      <div class="deck-shell h-full w-full">
        <PptContainer :slides="slides" :slide-titles="slideTitles" title="Your Title" />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* CRITICAL: Override PptContainer's default black background to show animated background */
.deck-shell :deep(.ppt-container) {
  background: transparent !important;
}
</style>
```

### Individual Slide Components

Each slide file (`slide-N-name.vue`):

```vue
<script setup lang="ts">
// Optional: only if you need to conditionally style for thumbnails
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <!-- Use bg-transparent when using animated backgrounds (not bg-black) -->
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <!-- Your slide content -->
  </div>
</template>
```

---

## Step 5: Register Route + Home Link

### 1. Add route in `vue_ppt/src/router/index.ts`:

```ts
{
  path: '/your-slug',
  component: () => import('@/presentations/your-slug/index.vue')
}
```

### 2. Add to home page in `vue_ppt/src/views/Home.vue`:

In the appropriate category's `presentations` array:

```js
{
  id: 'your-slug',
  title: 'Your Title',
  description: 'Brief description',
  route: '/your-slug'
}
```

### 3. Run `npm run dev` and navigate to `http://localhost:5173/your-slug`

---

## Design Language

### Default Dark Theme (recommended for most decks)

- **Background**: Use animated background (demo-particles or soft-mesh), NOT solid black
- **Primary text**: White (`text-white`)
- **Muted text**: Slate-400 (`text-slate-400`)
- **Accent/emphasis**: Red-500 (`text-red-500`) or Red-600 (`bg-red-600`)
- **Chapter labels**: Red-500 with `tracking-widest`

### Typography Scale
- H1 (main titles): `text-7xl font-black tracking-tight`
- H2 (section titles): `text-4xl font-extrabold`
- H3 (subtitles): `text-2xl font-bold`
- Body: `text-xl leading-relaxed`
- Caption: `text-sm text-slate-400`

### Layout
- Container: `max-w-5xl mx-auto px-8 py-16`
- Cards: `bg-slate-900 rounded-2xl p-8`
- Generous whitespace — don't cram content
- Section dividers: Big chapter number in red + giant white title

### Color System for Dark Decks
| Element | Color |
|---------|-------|
| Background | Animated (demo-particles/soft-mesh) or `bg-transparent` |
| Card surface | `bg-slate-900` |
| Primary text | `text-white` |
| Muted text | `text-slate-400` |
| Accent/highlight | `text-red-500` / `bg-red-600` |
| Border | `border-slate-800` or `border-slate-700` |

### Glassmorphism Surface (for light-themed decks)
```
bg-white/70 backdrop-blur-md border border-slate-200/30 rounded-3xl shadow-xl
```

### Brand Gradient (for vibrant decks)
```
from-indigo-400 via-fuchsia-400 to-emerald-400
```

---

## Key Components

### ppt-container
Navigation shell. Props:
- `slides` — array of Vue components
- `title` — document title
- `slideTitles` — array of strings for ESC thumbnail preview
- `thumbnailsLabel` — optional, defaults to "幻灯片预览"

Keyboard: `←` `→` `Space` (next), `Home`/`End`, `Esc` (thumbnail panel)

### BackgroundManager
Provides animated backgrounds. No props needed if defaults set in `createPresentationContext`.

Toggle settings: `Ctrl/⌘ + Shift + P`

Available backgrounds: `soft-mesh` (gradient mesh), `demo-particles` (floating dots)

---

## Important Principles

1. **Don't write Vue code yourself** — describe visually and let the AI coding tool generate it.
2. **Describe outcomes, not implementation** — "big red title centered" not "add class text-red-600".
3. **Delete and regenerate** rather than patch — if something is wrong, start fresh.
4. **One file per slide** — keeps context small.
5. **抽卡式生成** — rapid iteration, don't chase perfection on first try.
6. **Always provide `presentationContext`** — BackgroundManager needs it, otherwise slides won't render.
7. **Always add `slideTitles` prop** — enables ESC thumbnail preview.
8. **Register route + home link** — or the deck won't be accessible.

### ⚠️ Background Animation Fix (CRITICAL)

**Problem**: Background animations may not show if `bg-black` is used on slides or outer container.

**Solution**:
1. Outer container: Remove `bg-black` from the root div
2. PptContainer override: Add `.deck-shell :deep(.ppt-container) { background: transparent !important; }`
3. Slides: Use `bg-transparent` instead of `bg-black`

This is demonstrated in the `index.vue` template above.

---

## Dev Commands

```bash
cd ./vue_ppt
npm install   # Install dependencies (first time only)
npm run dev   # Dev server at localhost:5173
npm run build # Production build
vue-tsc --noEmit  # Type check
```

---

## Reference Presentations

- `cognition-framework` — Dark theme, red accents, deep content. Good reference for dark decks.
- `jianyi-zhujian-v1` — 剑意逐帧账号介绍演示
- `ai-skill-tree` — Skill tree metaphor presentation.
- `design-language-template` — Glassmorphism + gradient theme, multi-slide-type reference.

---

## Example: Creating a Dark-Themed Deck

Given content for a speaker deck, the workflow:

1. Plan 10-15 slides (title → section → content × N → CTA)
2. Write descriptions for each
3. Create `vue_ppt/src/presentations/my-deck/index.vue` with `presentationContext` and `.deck-shell :deep(.ppt-container)` override
4. Create each `slide-N-*.vue` with dark theme classes (`bg-transparent`, `text-white`, `text-red-500`)
5. Register route + home link
6. Run dev server, share URL
7. Iterate based on user feedback

---

## Dev Server Note

If the dev server is already running at `localhost:5173`, just share that URL with the user and navigate to `/<slug>`.
