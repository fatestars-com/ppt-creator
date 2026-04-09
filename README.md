# PPT Creator

> Use **Vue3 + Tailwind CSS** to create beautiful web-based presentations — not traditional .pptx files.
> Core philosophy: **AI does the coding, you just review the visual result**.

---

[English](./README.en.md) | [中文](./README.zh.md)

---

## Quick Start

```bash
cd vue_ppt
npm install
npm run dev
# → http://localhost:5173
```

## Project Structure

```
ppt-creator/
├── SKILL.md              # Skill definition
├── agents/               # Agent configs (analyzer, comparator, grader)
├── scripts/              # Python evaluation scripts
├── eval-viewer/          # Evaluation result viewer
├── assets/               # Static assets
└── vue_ppt/              # Vue3 presentation project
    └── src/
        ├── presentations/   # Presentation slides (<slug>/)
        ├── shared/          # Shared components
        ├── views/Home.vue   # Landing page
        └── router/          # Route config
```

## Create a New Presentation

### 1. Clarify Content
- **Topic**: What is the presentation about?
- **Pages**: How many slides?
- **Style**: Dark or light? Brand colors?
- **Language**: Chinese or English?

### 2. Plan Slide Structure

| # | Slide Type | Purpose |
|---|-----------|---------|
| 1 | Hero/Title | Main topic, hook |
| 2 | Section | Chapter opener |
| 3+ | Content | Based on content |
| Last | CTA / End | Call to action |

**Available types**: Hero, Section Divider, Stats/Metrics, Checklist/Guides, Compare, CTA

### 3. Write Page Descriptions

```markdown
# Page N: [Slide Type]
[Title]
[Content description]
[Design notes: colors, emphasis, layout]
```

### 4. Generate Slides

Create in `vue_ppt/src/presentations/<slug>/`:

**index.vue** (entry, must include `presentationContext`):
```vue
<script setup lang="ts">
import PptContainer from '@/shared/ppt-container.vue'
import BackgroundManager from '@/shared/backgrounds/background-manager.vue'
import { createPresentationContext, providePresentationContext } from '@/shared/presentation/presentation-context'
import { backgroundRegistry } from '@/shared/backgrounds/registry'

import Slide1 from './slide-1-title.vue'
import Slide2 from './slide-2-section.vue'
const slides = [Slide1, Slide2, ...]

const presentationContext = createPresentationContext({
  defaults: { backgroundId: 'demo-particles', locale: 'zh-Hans' },
  backgrounds: backgroundRegistry,
  locales: [{ code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }],
  contextKey: 'your-slug', persist: true
})
providePresentationContext(presentationContext)
const slideTitles = ['Slide 1 title', 'Slide 2 title', ...]
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
.deck-shell :deep(.ppt-container) { background: transparent !important; }
</style>
```

**slide-N-*.vue**:
```vue
<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>
<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <!-- Slide content -->
  </div>
</template>
```

### 5. Register Route

**`vue_ppt/src/router/index.ts`**:
```ts
{ path: '/your-slug', component: () => import('@/presentations/your-slug/index.vue') }
```

**`vue_ppt/src/views/Home.vue`** — add to categories array:
```js
{ id: 'your-slug', title: 'Your Title', description: 'Brief description', route: '/your-slug' }
```

## Design Language

### Dark Theme (recommended)

| Element | Color |
|---------|-------|
| Background | Animated (demo-particles / soft-mesh) |
| Primary text | `text-white` |
| Muted text | `text-slate-400` |
| Accent | `text-red-500` / `bg-red-600` |
| Card surface | `bg-slate-900` |

### Typography

- H1: `text-7xl font-black tracking-tight`
- H2: `text-4xl font-extrabold`
- H3: `text-2xl font-bold`
- Body: `text-xl leading-relaxed`
- Caption: `text-sm text-slate-400`

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` `→` `Space` | Navigate |
| `Home` / `End` | First / Last slide |
| `Esc` | Thumbnail panel |
| `Ctrl/⌘ + Shift + P` | Toggle background settings |

## Commands

```bash
cd vue_ppt
npm install
npm run dev    # Dev server at localhost:5173
npm run build  # Production build
vue-tsc --noEmit  # Type check
```
