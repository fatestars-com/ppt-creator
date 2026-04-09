<template>
  <section
    class="slide flex min-h-screen w-full items-center justify-center bg-transparent px-4 py-12 text-slate-900 sm:px-8 lg:px-12"
    :class="{ active: isActive }"
  >
    <div class="w-full max-w-6xl">
      <h1
        class="bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-500 bg-clip-text text-center text-4xl font-black tracking-tight text-transparent drop-shadow-[0_0_24px_rgba(14,165,233,0.28)] sm:text-6xl"
      >
        {{ t('slide5.title') }}
      </h1>

      <div class="mt-8 overflow-hidden rounded-[30px] shadow-2xl shadow-slate-900/25">
        <iframe
          :src="plotUrl"
          :title="t('slide5.iframeTitle')"
          class="block w-full border-0"
          style="aspect-ratio: 4 / 3;"
          loading="lazy"
        ></iframe>
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

const plotUrl = new URL('./plot.html', import.meta.url).href
</script>
