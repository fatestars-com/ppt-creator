<template>
  <section
    class="slide flex min-h-screen w-full items-center justify-center bg-transparent px-4 py-12 text-slate-900 sm:px-8"
    :class="{ active: isActive }"
  >
    <div
      class="w-full max-w-4xl rounded-[28px] border border-slate-900/10 bg-white/80 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-md sm:p-12"
    >
      <h1
        class="bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-500 bg-clip-text text-center text-4xl font-black tracking-tight text-transparent drop-shadow-[0_0_24px_rgba(102,126,234,0.35)] sm:text-6xl"
      >
        {{ t('slide2.title') }}
      </h1>

      <ul class="mt-10 grid gap-4 text-left">
        <li
          v-for="itemKey in outlineItemKeys"
          :key="itemKey"
          class="rounded-2xl border border-slate-900/10 bg-slate-900/5 px-5 py-3 text-lg font-bold text-slate-900 shadow-sm shadow-slate-900/10 backdrop-blur-sm sm:text-xl"
        >
          {{ t(itemKey) }}
        </li>
      </ul>
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

const outlineItemKeys = ['slide2.items.baseline', 'slide2.items.comparison', 'slide2.items.deployment']
</script>
