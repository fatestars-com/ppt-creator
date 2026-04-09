<template>
  <section
    class="slide flex min-h-screen w-full items-center justify-center bg-transparent px-4 py-12 text-slate-900 sm:px-8 lg:px-12"
    :class="{ active: isActive }"
    @keydown.tab.prevent="nextTab"
    tabindex="0"
    ref="envRoot"
  >
    <div
      class="w-full max-w-5xl rounded-[28px] border border-slate-900/10 bg-white/75 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-md sm:p-10"
    >
      <h1
        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 bg-clip-text text-center text-4xl font-black tracking-tight text-transparent drop-shadow-[0_0_24px_rgba(124,58,237,0.28)] sm:text-5xl"
      >
        {{ t('slide3.title') }}
      </h1>

      <div class="mt-6 flex flex-wrap items-center justify-center gap-2">
        <button
          v-for="(tabKey, index) in tabKeys"
          :key="tabKey"
          type="button"
          class="rounded-full border border-slate-900/10 px-4 py-2 text-sm font-semibold transition duration-200"
          :class="
            tab === index
              ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
              : 'bg-white/85 text-slate-900 hover:bg-slate-900/10'
          "
          @click="tab = index"
        >
          {{ t(tabKey) }}
        </button>
      </div>

      <div class="mt-6 min-h-[320px] text-slate-900 sm:mt-6 sm:min-h-[360px]">
        <template v-if="tab === 0">
          <div class="flex h-full w-full items-start justify-center">
            <div class="flex w-full max-w-4xl flex-wrap items-center justify-center gap-2 text-center sm:gap-3">
              <div class="inline-flex items-center justify-center rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-2 text-base font-semibold shadow-sm shadow-slate-900/10 sm:px-6 sm:text-lg">
                {{ t('slide3.hardware.gpu') }}
              </div>
              <div class="inline-flex items-center justify-center rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-2 text-base font-semibold shadow-sm shadow-slate-900/10 sm:px-6 sm:text-lg">
                {{ t('slide3.hardware.cpu') }}
              </div>
            </div>
          </div>
        </template>

        <template v-else-if="tab === 1">
          <div class="flex h-full w-full items-start justify-center">
            <div class="flex w-full max-w-4xl flex-wrap items-center justify-center gap-2 text-center sm:gap-3">
              <div
                v-for="itemKey in frameworkKeys"
                :key="itemKey"
                class="inline-flex items-center justify-center rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-2 text-sm font-semibold shadow-sm shadow-slate-900/10 sm:px-5 sm:text-base"
              >
                {{ t(itemKey) }}
              </div>
            </div>
          </div>
        </template>

        <template v-else-if="tab === 2">
          <div class="flex h-full w-full items-start justify-center">
            <div class="grid w-full max-w-4xl grid-cols-1 gap-2 text-center sm:grid-cols-3 sm:gap-3">
              <div
                v-for="metricKey in metricKeys"
                :key="metricKey"
                class="flex items-center justify-center rounded-2xl border border-slate-900/10 bg-slate-900/10 px-4 py-3 text-sm font-semibold shadow-sm shadow-slate-900/10 sm:px-5 sm:py-4 sm:text-base"
              >
                <span class="leading-tight">{{ t(metricKey) }}</span>
              </div>
            </div>
          </div>
        </template>

        <template v-else-if="tab === 3">
          <div class="flex h-full w-full items-start justify-center">
            <div class="grid w-full max-w-4xl grid-cols-1 gap-2 text-center sm:grid-cols-3 sm:gap-3">
              <div
                v-for="model in modelKeys"
                :key="model.titleKey"
                class="flex flex-col items-center justify-center gap-1 rounded-2xl border border-slate-900/10 bg-slate-900/10 px-4 py-3 text-sm font-semibold shadow-sm shadow-slate-900/10 sm:px-5 sm:py-4 sm:text-base"
              >
                <span class="leading-tight">{{ t(model.titleKey) }}</span>
                <span class="text-xs font-semibold uppercase tracking-wide text-slate-600">{{ t(model.subtitleKey) }}</span>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="flex h-full w-full items-start justify-center">
            <div
              class="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-900/20 bg-slate-900 text-slate-200 shadow-lg shadow-slate-900/40"
            >
              <div class="absolute right-4 top-3 rounded-md border border-white/10 px-2 py-0.5 text-[0.7rem] uppercase text-slate-300/80">
                sh
              </div>
              <pre class="overflow-auto px-5 py-6 text-left text-sm leading-relaxed">
<code>
<span class="font-semibold text-sky-300">VLLM_USE_MODELSCOPE=true</span> <span class="font-semibold text-sky-300">VLLM_ALLOW_LONG_MAX_MODEL_LEN=1</span> \
uv <span class="font-semibold text-orange-400">run</span> <span class="font-semibold text-orange-400">vllm serve</span> \
qwen3/Qwen3-Next-80B-A3B-Instruct-AWQ \
--host <span class="font-semibold text-emerald-300">0.0.0.0</span> \
--port <span class="font-semibold text-emerald-300">5000</span> \
--swap-space <span class="font-semibold text-emerald-300">16</span> \
--tensor-parallel-size <span class="font-semibold text-emerald-300">2</span> \
--max-model-len <span class="font-semibold text-emerald-300">262144</span> \
--gpu-memory-utilization <span class="font-semibold text-emerald-300">0.925</span> \
--served-model-name <span class="font-semibold text-orange-300">qwen3-next-80b-a3b-instruct</span> \
--enable-auto-tool-choice \
--tool-call-parser <span class="font-semibold text-orange-300">hermes</span> \
--dtype <span class="font-semibold text-orange-300">float16</span>
</code>
              </pre>
            </div>
          </div>
        </template>
      </div>

      <p
        v-if="tab === 2"
        class="mt-4 text-center text-xs font-medium text-slate-700"
      >
        {{ t('slide3.metricsCaption') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

import { useDeckI18n } from '../../shared/i18n/use-deck-i18n'
import { usePresentationContext } from '../../shared/presentation/presentation-context'

const props = defineProps({ isActive: Boolean, isPreview: Boolean })

const presentationContext = usePresentationContext()

const { t } = useDeckI18n('qwen3-next-bench', {
  locale: computed(() => presentationContext.state.locale),
  fallbackLocale: 'en'
})

const tabKeys = ['slide3.tabs.hardware', 'slide3.tabs.framework', 'slide3.tabs.metrics', 'slide3.tabs.models', 'slide3.tabs.command']
const frameworkKeys = ['slide3.frameworks.vllm', 'slide3.frameworks.tensorParallel', 'slide3.frameworks.mtp', 'slide3.frameworks.context']
const metricKeys = ['slide3.metrics.baseline', 'slide3.metrics.speed', 'slide3.metrics.latency']
const modelKeys = [
  { titleKey: 'slide3.models.qwenNext.title', subtitleKey: 'slide3.models.qwenNext.subtitle' },
  { titleKey: 'slide3.models.gptOss.title', subtitleKey: 'slide3.models.gptOss.subtitle' },
  { titleKey: 'slide3.models.qwen30b.title', subtitleKey: 'slide3.models.qwen30b.subtitle' }
]

const tab = ref(0)
const envRoot = ref<HTMLElement | null>(null)

const nextTab = () => {
  tab.value = (tab.value + 1) % tabKeys.length
}

const focusRoot = () => {
  requestAnimationFrame(() => {
    if (envRoot.value && typeof envRoot.value.focus === 'function') {
      envRoot.value.focus()
    }
  })
}

onMounted(() => {
  if (props.isActive) {
    focusRoot()
  }
})

watch(
  () => props.isActive,
  (value) => {
    if (value) {
      focusRoot()
    }
  }
)
</script>
