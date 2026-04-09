<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const tabs = [
  { id: 'a', label: '方案 A', content: '轻量示例，强调易用与上手速度。' },
  { id: 'b', label: '方案 B', content: '平衡功能与复杂度，适合通用场景。' },
  { id: 'c', label: '方案 C', content: '功能更全，适用于定制化更强的需求。' }
]
const active = ref('a')
</script>

<template>
  <section class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16">
    <div class="mb-6">
      <h2 class="inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
        选项卡（占位）
      </h2>
      <p class="mt-2 text-slate-600">轻量级切换示例。点击不同标签查看内容。</p>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="active = tab.id"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/40 backdrop-blur-md shadow-sm text-slate-800 transition hover:bg-white/70"
        :class="{ 'bg-gradient-to-r from-indigo-500/20 to-emerald-400/20': active === tab.id }"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="mt-6 rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-xl p-6 md:p-8">
      <p class="text-slate-800 text-lg">
        {{ tabs.find(t => t.id === active)?.content }}
      </p>
    </div>
  </section>
</template>

<style scoped>
</style>

