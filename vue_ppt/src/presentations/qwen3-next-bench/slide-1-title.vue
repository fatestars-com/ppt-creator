<template>
  <section
    class="slide flex min-h-screen w-full items-center justify-center bg-transparent px-4 py-12 text-slate-900 sm:px-8 lg:px-12"
    :class="{ active: isActive }"
  >
    <div class="flex max-w-6xl flex-col items-center gap-6 text-center">
      <div class="space-y-3">
        <h1
          class="text-5xl font-black tracking-tight transition-all duration-700 sm:text-7xl lg:text-8xl"
          :class="isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
        >
          {{ t('slide1.title.prefix') }}
          <span class="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 bg-clip-text text-transparent animate-gradient-flow">
            {{ t('slide1.title.highlight') }}
          </span>
        </h1>

        <h2
          class="text-3xl font-extrabold transition-all duration-700 delay-150 sm:text-5xl lg:text-6xl"
          :class="isActive ? 'translate-y-0 opacity-100 text-rose-500' : 'translate-y-10 opacity-0 text-rose-500'"
        >
          <span class="drop-shadow-[0_6px_22px_rgba(239,68,68,0.18)]">
            {{ t('slide1.subtitle') }}
          </span>
        </h2>
      </div>

      <div
        class="relative mt-6 flex h-[50vh] w-full max-w-5xl cursor-pointer items-center justify-center overflow-hidden rounded-3xl bg-white/70 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/10 backdrop-blur-sm transition duration-300 hover:shadow-slate-900/25 hover:ring-2 hover:ring-indigo-400/60"
        @click="toggleKeywords"
      >
        <img src="./page1-2.png" :alt="t('slide1.imageAlt')" class="h-full w-full object-contain" />

        <div
          v-show="showKeywords"
          class="pointer-events-none absolute inset-0 transition-opacity duration-300"
          :class="showKeywords ? 'opacity-100' : 'opacity-0'"
        >
          <p
            class="absolute top-[15%] left-[8%] whitespace-nowrap px-4 py-2 text-2xl font-black text-rose-500 drop-shadow-[2px_2px_6px_rgba(15,23,42,0.55)] sm:text-3xl animate-float-y [animation-delay:0ms]"
          >
            {{ t('slide1.keywords.gptAlternative') }}
          </p>
          <p
            class="absolute top-[25%] right-[12%] whitespace-nowrap px-4 py-2 text-2xl font-black text-teal-500 drop-shadow-[2px_2px_6px_rgba(15,23,42,0.55)] sm:text-3xl animate-float-y [animation-delay:800ms]"
          >
            {{ t('slide1.keywords.latency') }}
          </p>
          <p
            class="absolute bottom-[30%] left-[15%] whitespace-nowrap px-4 py-2 text-2xl font-black text-sky-500 drop-shadow-[2px_2px_6px_rgba(15,23,42,0.55)] sm:text-3xl animate-float-y [animation-delay:1600ms]"
          >
            {{ t('slide1.keywords.memory') }}
          </p>
          <p
            class="absolute top-[45%] left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 text-2xl font-black text-rose-700 drop-shadow-[2px_2px_6px_rgba(15,23,42,0.55)] sm:text-3xl animate-float-y [animation-delay:2400ms]"
          >
            {{ t('slide1.keywords.identify') }}
          </p>
          <p
            class="absolute bottom-[20%] right-[8%] whitespace-nowrap px-4 py-2 text-2xl font-black text-purple-500 drop-shadow-[2px_2px_6px_rgba(15,23,42,0.55)] sm:text-3xl animate-float-y [animation-delay:3200ms]"
          >
            {{ t('slide1.keywords.deployment') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { useDeckI18n } from '../../shared/i18n/use-deck-i18n'
import { usePresentationContext } from '../../shared/presentation/presentation-context'

const props = defineProps({ isActive: Boolean, isPreview: Boolean })

const presentationContext = usePresentationContext()

const { t } = useDeckI18n('qwen3-next-bench', {
  locale: computed(() => presentationContext.state.locale),
  fallbackLocale: 'en'
})

const showKeywords = ref(true)

const toggleKeywords = () => {
  showKeywords.value = !showKeywords.value
}
</script>

<style scoped>
@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes float-y {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) rotate(1deg);
  }
  50% {
    transform: translateY(-16px) rotate(0deg);
  }
  75% {
    transform: translateY(-8px) rotate(-1deg);
  }
}

:global(.animate-gradient-flow) {
  background-size: 200% 100%;
  animation: gradient-flow 6s ease-in-out infinite;
}

:global(.animate-float-y) {
  animation: float-y 4s ease-in-out infinite;
  will-change: transform;
}
</style>
