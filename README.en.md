# PPT Creator

Use **Vue3 + Tailwind CSS** to create beautiful web-based presentations, not traditional .pptx files.
Core philosophy: **AI does the coding, you just review the visual result**.

---

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

## Quick Start

### 1. Install Dependencies

```bash
cd vue_ppt
npm install
```

### 2. Start Dev Server

```bash
npm run dev
# → http://localhost:5173
```

### 3. Create a New Presentation

Create files under `vue_ppt/src/presentations/<slug>/`.

---

## Project Structure

```
ppt-creator/
├── SKILL.md              # Skill definition
├── agents/               # Agent configs
│   ├── analyzer.md
│   ├── comparator.md
│   └── grader.md
├── scripts/              # Python evaluation scripts
│   ├── run_eval.py
│   ├── run_loop.py
│   └── ...
├── eval-viewer/          # Evaluation result viewer
│   └── viewer.html
├── assets/               # Static assets
│   └── eval_review.html
└── vue_ppt/              # Vue3 presentation project
    ├── src/
    │   ├── presentations/  # Slide components per deck
    │   │   └── <slug>/
    │   │       ├── index.vue      # Entry point
    │   │       └── slide-*.vue   # Individual slides
    │   ├── shared/               # Shared components
    │   │   ├── backgrounds/      # Animated backgrounds
    │   │   ├── ppt-container.vue # Slide navigation container
    │   │   └── presentation/
    │   ├── views/Home.vue         # Landing page
    │   └── router/index.ts        # Route config
    └── package.json
```

---

## Create a New Presentation

### Step 1: Clarify Content

Confirm:
- **Topic**: What is the presentation about?
- **Pages**: How many slides roughly? (or let content determine it)
- **Style**: Dark or light? Any brand colors?
- **Language**: Chinese or English?

### Step 2: Plan Slide Structure

Standard anatomy:

| # | Slide Type | Purpose |
|---|-----------|---------|
| 1 | Hero/Title | Main topic, hook |
| 2 | Section | Chapter opener |
| 3+ | Content | Based on content |
| Last | CTA / End | Call to action |

Available types:
- **Hero** - Big title + subtitle, establishes tone
- **Section Divider** - Chapter breaks (big chapter number + title)
- **Stats/Metrics** - Big numbers with labels (e.g. "60万")
- **Checklist/Guides** - Step-by-step or bullet lists
- **Compare** - Side-by-side options
- **CTA** - Call to action, ending slide

### Step 3: Write Page Descriptions

```markdown
# Page N: [Slide Type]
[Title]
[Content description]
[Design notes: colors, emphasis, layout]
```

**Key principle**: Describe **visually**, not as code. The AI coding tool handles Vue implementation.

### Step 4: Generate Slides

Create under `vue_ppt/src/presentations/<slug>/`:

**index.vue** (entry point — **CRITICAL**, must include `presentationContext`):

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

const slides = [Slide1, Slide2, ...]

const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'demo-particles',
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: [{ code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }],
  contextKey: 'your-slug',
  persist: true
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
.deck-shell :deep(.ppt-container) {
  background: transparent !important;
}
</style>
```

**slide-N-*.vue** (individual slide):

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

### Step 5: Register Route

**1. Add route** in `vue_ppt/src/router/index.ts`:

```ts
{
  path: '/your-slug',
  component: () => import('@/presentations/your-slug/index.vue')
}
```

**2. Add to home page** in `vue_ppt/src/views/Home.vue`:

```js
{
  id: 'your-slug',
  title: 'Your Title',
  description: 'Brief description',
  route: '/your-slug'
}
```

---

## Design Language

### Dark Theme (recommended for most decks)

| Element | Color |
|---------|-------|
| Background | Animated background (demo-particles / soft-mesh) |
| Primary text | `text-white` |
| Muted text | `text-slate-400` |
| Accent/emphasis | `text-red-500` / `bg-red-600` |
| Card surface | `bg-slate-900` |

### Typography Scale

- H1 (main titles): `text-7xl font-black tracking-tight`
- H2 (section titles): `text-4xl font-extrabold`
- H3 (subtitles): `text-2xl font-bold`
- Body: `text-xl leading-relaxed`
- Caption: `text-sm text-slate-400`

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` `→` `Space` | Navigate slides |
| `Home` / `End` | First / Last slide |
| `Esc` | Thumbnail panel |
| `Ctrl/⌘ + Shift + P` | Toggle background settings |

---

## Commands

```bash
cd vue_ppt
npm install   # First time only
npm run dev    # Dev server at localhost:5173
npm run build  # Production build
vue-tsc --noEmit  # Type check
```
