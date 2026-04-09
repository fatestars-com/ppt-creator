<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const faqs = [
  { q: '这是正式内容吗？', a: '否。本模板所有文字均为示例/占位。' },
  { q: '是否支持背景切换？', a: '支持。使用 Ctrl/⌘ + Shift + P 打开设置。' },
  { q: '是否需要联网？', a: '不需要。本示例使用本地静态资源与内联 SVG 动效。' }
]
const open = ref<number | null>(0)
</script>

<template>
  <section class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16">
    <div class="mb-6">
      <h2 class="inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
        常见问答（占位）
      </h2>
      <p class="mt-2 text-slate-600">简明问答；可点击展开/收起。</p>
    </div>

    <ul class="space-y-3">
      <li v-for="(item, i) in faqs" :key="i" class="overflow-hidden rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-xl">
        <button @click="open = open === i ? null : i" class="flex w-full items-center justify-between px-6 py-4 text-left">
          <span class="text-slate-900 font-semibold">{{ item.q }}</span>
          <svg class="h-4 w-4 text-slate-700 transition-transform" :class="{ 'rotate-180': open === i }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div v-show="open === i" class="px-6 pb-6 text-slate-700 text-sm leading-relaxed">
          {{ item.a }}
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
</style>

