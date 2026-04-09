<script setup lang="ts">
import { computed } from 'vue'

import BackgroundManager from '../../shared/backgrounds/background-manager.vue'
import { backgroundRegistry } from '../../shared/backgrounds/registry'
import {
  createPresentationContext,
  providePresentationContext
} from '../../shared/presentation/presentation-context'

import PptContainer from '@/shared/ppt-container.vue'

import Slide1Title from './slide-1-title.vue'
import Slide2Painpoints from './slide-2-painpoints.vue'
import Slide3Essence from './slide-3-essence.vue'
import Slide4Metaphor from './slide-4-metaphor.vue'
import Slide5DontFear from './slide-5-dont-fear.vue'
import Slide6Workflow from './slide-6-workflow.vue'
import Slide7Setup from './slide-7-setup.vue'
import Slide8Demo from './slide-8-demo.vue'
import Slide9Knowledge from './slide-9-knowledge.vue'
import Slide10PageFile from './slide-10-page-file.vue'
import Slide11TemplateDesign from './slide-11-template-design.vue'
import Slide12ComponentReuse from './slide-12-component-reuse.vue'
import Slide13DeleteNotRedo from './slide-13-delete-not-redo.vue'
import Slide14ForgetSoftwareEngineering from './slide-14-forget-software-engineering.vue'
import Slide15LearnFrontendKnowledge from './slide-15-learn-frontend-knowledge.vue'
import Slide16AiCodeMindset from './slide-16-ai-code-mindset.vue'
import Slide17CallToAction from './slide-17-call-to-action.vue'

const localeOptions = [
  { code: 'zh-Hans', label: 'Chinese', nativeLabel: '简体中文', direction: 'ltr' }
] as const

const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'soft-mesh',
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: [...localeOptions],
  contextKey: 'ai-skill-tree-codex',
  persist: true
})

providePresentationContext(presentationContext)

const title = computed(() => 'AI 技能树 · Codex')

const slides = [
  Slide1Title,
  Slide2Painpoints,
  Slide3Essence,
  Slide4Metaphor,
  Slide5DontFear,
  Slide6Workflow,
  Slide7Setup,
  Slide8Demo,
  Slide9Knowledge,
  Slide10PageFile,
  Slide11TemplateDesign,
  Slide12ComponentReuse,
  Slide13DeleteNotRedo,
  Slide14ForgetSoftwareEngineering,
  Slide15LearnFrontendKnowledge,
  Slide16AiCodeMindset,
  Slide17CallToAction
]
</script>

<template>
  <div class="relative flex h-screen w-screen overflow-hidden bg-surface text-text-primary">
    <BackgroundManager />
    <main class="relative z-10 flex h-full w-full items-center justify-center px-6 py-6 sm:px-10">
      <div class="deck-shell h-full w-full">
        <PptContainer :slides="slides" :title="title" thumbnails-label="幻灯片预览" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.deck-shell :deep(.ppt-container) {
  @apply bg-transparent;
}

.deck-shell :deep(.controls) {
  @apply fixed bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-text-primary shadow-xl shadow-black/40 backdrop-blur-xl;
}

.deck-shell :deep(.control-btn) {
  @apply flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 text-sm font-semibold shadow-md shadow-black/30 ring-1 ring-black/5 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-40;
}

.deck-shell :deep(.slide-info) {
  @apply min-w-[56px] text-center text-xs font-semibold text-slate-900;
}

.deck-shell :deep(.progress-bar) {
  @apply fixed inset-x-0 bottom-0 h-[3px] bg-slate-900/30;
}

.deck-shell :deep(.progress) {
  @apply h-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-emerald-400 transition-all duration-300;
}

.deck-shell :deep(.thumbnails) {
  @apply fixed right-5 top-1/2 flex max-h-[80vh] w-72 -translate-y-1/2 flex-col overflow-hidden rounded-xl bg-slate-900/90 shadow-2xl shadow-slate-900/40 backdrop-blur-xl;
}

.deck-shell :deep(.thumbnails-header) {
  @apply flex items-center justify-between border-b border-white/10 px-5 py-4 text-text-primary;
}

.deck-shell :deep(.thumbnails-header h3) {
  @apply m-0 text-base font-semibold text-text-primary;
}

.deck-shell :deep(.thumbnails-header button) {
  @apply flex h-6 w-6 items-center justify-center rounded-full text-base text-text-primary transition hover:bg-white/10;
}

.deck-shell :deep(.thumbnails-grid) {
  @apply max-h-[60vh] overflow-y-auto px-4 py-4;
}

.deck-shell :deep(.thumbnail) {
  @apply relative mb-3 h-28 w-full overflow-hidden rounded-lg bg-white/5 transition hover:scale-[1.02] hover:bg-white/10;
}

.deck-shell :deep(.thumbnail.active) {
  @apply border-2 border-indigo-400 bg-indigo-400/20;
}

.deck-shell :deep(.thumbnail-number) {
  @apply absolute left-2 top-2 rounded-md bg-slate-900/80 px-2 py-1 text-xs font-semibold text-text-primary shadow-sm shadow-black/40;
}

@media (max-width: 768px) {
  .deck-shell :deep(.thumbnails) {
    @apply right-5 w-[calc(100vw-40px)];
  }

  .deck-shell :deep(.controls) {
    @apply gap-3 px-4 py-2;
  }

  .deck-shell :deep(.control-btn) {
    @apply h-10 w-10;
  }
}
</style>
