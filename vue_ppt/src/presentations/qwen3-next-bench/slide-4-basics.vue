<template>
  <section
    class="slide flex min-h-screen w-full items-center justify-center bg-transparent px-4 py-12 text-slate-900 sm:px-8 lg:px-12"
    :class="{ active: isActive }"
  >
    <div
      class="w-full max-w-5xl rounded-[28px] border border-slate-900/10 bg-white/75 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-md sm:p-10"
    >
      <h1
        class="bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-center text-4xl font-black tracking-tight text-transparent drop-shadow-[0_0_24px_rgba(99,102,241,0.28)] sm:text-5xl"
      >
        {{ t('slide4.title') }}
      </h1>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="card in cards"
          :key="card.labelKey"
          class="rounded-2xl border border-slate-900/10 bg-white/80 px-6 py-6 text-center shadow-xl shadow-slate-900/10 backdrop-blur-sm"
          :class="card.accent"
        >
          <div class="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            {{ card.value }}
          </div>
          <div class="mt-2 text-sm font-semibold text-slate-600 sm:text-base" v-html="t(card.labelKey)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useDeckI18n } from '../../shared/i18n/use-deck-i18n'
import { usePresentationContext } from '../../shared/presentation/presentation-context'

const props = defineProps({ isActive: Boolean, isPreview: Boolean })

const presentationContext = usePresentationContext()

const { t } = useDeckI18n('qwen3-next-bench', {
  locale: computed(() => presentationContext.state.locale),
  fallbackLocale: 'en'
})

const cards = [
  { value: '130 tokens/s', labelKey: 'slide4.cards.singleRequest', accent: 'bg-gradient-to-b from-blue-500/15 via-white/80 to-white/95' },
  { value: 'kv-cache: 450k', labelKey: 'slide4.cards.kvCache', accent: 'bg-gradient-to-b from-emerald-400/15 via-white/80 to-white/95' },
  {
    value: '552 t/s',
    labelKey: 'slide4.cards.lowConcurrency',
    accent: 'bg-gradient-to-b from-indigo-500/15 via-white/80 to-white/95'
  },
  {
    value: '1331 t/s',
    labelKey: 'slide4.cards.highConcurrency',
    accent: 'bg-gradient-to-b from-fuchsia-500/15 via-white/80 to-white/95'
  }
]
</script>
