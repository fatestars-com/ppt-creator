<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
const outline = [
  { title: '封面与基调', note: '建立主视觉与品牌渐变' },
  { title: '大纲与节奏', note: '规划章节与过渡' },
  { title: '指标与看板', note: '突出重点数字与趋势' },
  { title: '交互与演示', note: '示例操作与观众互动' },
  { title: '总结与行动', note: '收束信息并引导下一步' }
]
</script>

<template>
  <section class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16">
    <div class="mb-8">
      <h2 class="inline-block text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
        本次结构
      </h2>
      <p class="mt-2 text-slate-600">这是一个“模板大纲”示例，内容完全为占位。</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="(item, idx) in outline" :key="idx" class="group bg-white/70 backdrop-blur-md border border-slate-200/30 rounded-3xl shadow-xl p-6 md:p-8 transition hover:-translate-y-0.5 hover:shadow-2xl">
        <div class="flex items-start justify-between">
          <h3 class="text-xl md:text-2xl font-bold text-slate-900">{{ idx + 1 }}. {{ item.title }}</h3>
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500/20 to-emerald-400/20 border border-white/40 text-slate-900">{{ idx + 1 }}</span>
        </div>
        <p class="mt-3 text-sm text-slate-600">{{ item.note }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
</style>

