<template>
  <section
    class="slide flex min-h-screen w-full items-center justify-center bg-transparent px-4 py-12 text-slate-900 sm:px-8 lg:px-12"
    :class="{ active: isActive }"
  >
    <div
      class="w-full max-w-5xl rounded-[28px] border border-slate-900/10 bg-white/75 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-md sm:p-10"
    >
      <h1
        class="bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300 bg-clip-text text-center text-4xl font-black tracking-tight text-transparent drop-shadow-[0_0_24px_rgba(249,115,22,0.3)] sm:text-5xl"
      >
        {{ t('slide6.title') }}
      </h1>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="card in cards"
          :key="card.titleKey"
          class="rounded-2xl border border-slate-900/10 bg-white/85 px-5 py-6 shadow-xl shadow-slate-900/10 backdrop-blur-sm"
          :class="card.accent"
        >
          <div class="text-lg font-black tracking-tight text-slate-900 sm:text-xl">
            {{ t(card.titleKey) }}
          </div>
          <div class="mt-2 text-sm font-semibold text-slate-600" v-html="t(card.subtitleKey)" />
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
  {
    titleKey: 'slide6.cards.fp8.title',
    subtitleKey: 'slide6.cards.fp8.subtitle',
    accent: 'bg-gradient-to-b from-emerald-400/15 via-white/80 to-white/95'
  },
  {
    titleKey: 'slide6.cards.awq.title',
    subtitleKey: 'slide6.cards.awq.subtitle',
    accent: 'bg-gradient-to-b from-amber-400/15 via-white/80 to-white/95'
  },
  {
    titleKey: 'slide6.cards.tokenizer.title',
    subtitleKey: 'slide6.cards.tokenizer.subtitle',
    accent: 'bg-gradient-to-b from-sky-400/15 via-white/80 to-white/95'
  },
  {
    titleKey: 'slide6.cards.singleGpu.title',
    subtitleKey: 'slide6.cards.singleGpu.subtitle',
    accent: 'bg-gradient-to-b from-rose-500/20 via-white/80 to-white/95'
  },
  {
    titleKey: 'slide6.cards.llamaCpp.title',
    subtitleKey: 'slide6.cards.llamaCpp.subtitle',
    accent: 'bg-gradient-to-b from-purple-500/15 via-white/80 to-white/95'
  },
  {
    titleKey: 'slide6.cards.mtp.title',
    subtitleKey: 'slide6.cards.mtp.subtitle',
    accent: 'bg-gradient-to-b from-indigo-500/15 via-white/80 to-white/95'
  }
]
</script>
