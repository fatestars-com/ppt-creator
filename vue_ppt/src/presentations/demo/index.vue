<script setup lang="ts">
import { computed } from 'vue'
import BackgroundManager from '../../shared/backgrounds/background-manager.vue'
import { backgroundRegistry } from '../../shared/backgrounds/registry'
import {
  createPresentationContext,
  providePresentationContext
} from '../../shared/presentation/presentation-context'
import { useDeckI18n } from '../../shared/i18n/use-deck-i18n'
import type { LocaleCode, LocaleMeta } from '../../shared/i18n/types'
import deckDemoLocale from './locales/en.json'

type LocaleConfig = Record<LocaleCode, Pick<LocaleMeta, 'label' | 'nativeLabel' | 'direction'>>

const baseLocaleConfig = deckDemoLocale.locales as LocaleConfig

const localeOptions: LocaleMeta[] = (Object.keys(baseLocaleConfig) as LocaleCode[]).map(code => {
  const meta = baseLocaleConfig[code]
  if (!meta) {
    throw new Error(`Missing locale metadata for code "${code}" in deck-demo locale config`)
  }
  return {
    code,
    label: meta.label,
    nativeLabel: meta.nativeLabel,
    direction: meta.direction
  }
})

const presentationContext = createPresentationContext({
  defaults: {
    backgroundId: 'demo-particles',
    locale: 'zh-Hans'
  },
  backgrounds: backgroundRegistry,
  locales: localeOptions,
  contextKey: 'demo',
  persist: true
})

providePresentationContext(presentationContext)

const { t } = useDeckI18n('demo', {
  locale: computed(() => presentationContext.state.locale),
  fallbackLocale: 'en'
})

const shortcut = computed(() => {
  if (typeof window === 'undefined') return 'Ctrl + Shift + P'
  const isMac = /Mac|iPod|iPhone|iPad/.test(window.navigator.platform)
  return isMac ? '⌘ + ⇧ + P' : 'Ctrl + Shift + P'
})

const activeBackground = presentationContext.activeBackground
const activeLocale = presentationContext.activeLocale
</script>

<template>
  <div class="presentation-root relative flex h-screen w-screen overflow-hidden bg-surface text-text-primary">
    <BackgroundManager />
    <main class="presentation-main relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
      <div class="content-stack pointer-events-auto flex max-w-3xl flex-col items-center gap-6">
        <div class="helper-chip inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/70 px-4 py-2 text-sm text-text-muted backdrop-blur">
          <span class="font-medium text-text-primary">{{ t('labels.currentBackground') }}:</span>
          <span>{{ activeBackground?.name ?? '—' }}</span>
        </div>

        <h1 class="hero-title text-4xl font-semibold tracking-tight text-text-primary shadow-glow sm:text-6xl">
          {{ t('hero.title') }}
        </h1>

        <p class="hero-subtitle text-lg text-text-muted sm:text-xl">
          {{ t('hero.subtitle') }}
        </p>

        <div class="locale-chip flex flex-wrap items-center justify-center gap-3 text-sm text-text-muted">
          <span class="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/70 px-3 py-1 backdrop-blur">
            <span class="font-medium text-text-primary">{{ t('labels.activeLocale') }}:</span>
            <span>{{ activeLocale?.nativeLabel ?? activeLocale?.label ?? '—' }}</span>
          </span>
        </div>

        <p class="footer-hint text-[0.7rem] uppercase tracking-[0.32em] text-text-muted">
          {{ t('labels.openSettingsHint', { shortcut: shortcut }) }}
        </p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.presentation-root {
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: rgb(var(--surface));
  color: rgb(var(--text-primary));
}

.presentation-main {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  text-align: center;
}

.content-stack {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 48rem;
  width: 100%;
}

.helper-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 9999px;
  border: 1px solid rgb(var(--border) / 0.6);
  background-color: rgb(var(--surface) / 0.7);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: rgb(var(--text-muted));
  backdrop-filter: blur(8px);
}

.helper-chip .font-medium {
  color: rgb(var(--text-primary));
}

.hero-title {
  margin: 0;
  font-size: clamp(2.5rem, 8vw, 3.75rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  text-shadow: 0 0 40px rgb(var(--accent) / 0.35);
}

.hero-subtitle {
  margin: 0;
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  color: rgb(var(--text-muted));
}

.locale-chip span {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 9999px;
  border: 1px solid rgb(var(--border) / 0.6);
  background-color: rgb(var(--surface) / 0.7);
  padding: 0.5rem 0.75rem;
  color: rgb(var(--text-muted));
  backdrop-filter: blur(8px);
}

.locale-chip .font-medium {
  color: rgb(var(--text-primary));
}

.footer-hint {
  font-size: 0.7rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgb(var(--text-muted));
  margin: 0;
}

@media (min-width: 640px) {
  .presentation-main {
    padding: 2.5rem;
  }
}
</style>
