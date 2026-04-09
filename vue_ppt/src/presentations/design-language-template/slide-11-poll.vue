<script setup lang="ts">
import { computed, ref, watch } from 'vue'
const props = defineProps<{ isActive?: boolean; isPreview?: boolean }>()

type Choice = { id: string; label: string; color: string }
const choices: Choice[] = [
  { id: 'a', label: '更喜欢动效', color: 'from-indigo-500 to-fuchsia-500' },
  { id: 'b', label: '更喜欢简洁', color: 'from-emerald-500 to-cyan-500' },
  { id: 'c', label: '视场景而定', color: 'from-amber-500 to-rose-500' }
]

const counts = ref<number[]>(choices.map(() => 0))
const total = computed(() => counts.value.reduce((a, b) => a + b, 0))
const percentages = computed(() => counts.value.map(c => (total.value ? Math.round((c / total.value) * 100) : 0)))

const vote = (i: number) => {
  if (props.isPreview) return
  const next = counts.value.slice()
  next[i] += 1
  counts.value = next
}

watch(() => props.isActive, active => {
  if (!active) return
  // reset counts when slide becomes active for demo repeatability
  counts.value = choices.map(() => 0)
})
</script>

<template>
  <section class="container mx-auto max-w-5xl px-6 md:px-8 lg:px-12 py-12 lg:py-16">
    <div class="mb-6 text-center">
      <h2 class="inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
        互动投票（占位）
      </h2>
      <p class="mt-2 text-slate-600">点击按钮模拟投票，进度条实时变化。</p>
    </div>

    <div class="space-y-4">
      <div v-for="(c, i) in choices" :key="c.id" class="rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-xl p-4">
        <div class="flex items-center justify-between gap-4">
          <button @click="vote(i)" class="shrink-0 rounded-full bg-gradient-to-r px-4 py-2 text-white shadow hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300" :class="c.color">
            投票：{{ c.label }}
          </button>
          <div class="flex-1">
            <div class="h-3 w-full overflow-hidden rounded-full bg-slate-200/70">
              <div class="h-full bg-gradient-to-r transition-all duration-500" :class="c.color" :style="{ width: percentages[i] + '%' }" />
            </div>
          </div>
          <div class="w-16 text-right text-slate-800 font-semibold">{{ percentages[i] }}%</div>
        </div>
      </div>
    </div>

    <p class="mt-6 text-center text-sm text-slate-500">合计：{{ total }} 次模拟投票（仅示例）。</p>
  </section>
</template>

<style scoped>
</style>

