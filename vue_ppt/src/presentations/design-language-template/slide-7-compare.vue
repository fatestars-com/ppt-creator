<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const plans = [
  {
    name: '基础版',
    recommended: false,
    features: ['入门示例', '轻量依赖', '快速上手'],
  },
  {
    name: '专业版',
    recommended: true,
    features: ['更多版式', '互动组件', '自定义主题'],
  },
  {
    name: '高级版',
    recommended: false,
    features: ['全面模板库', '深度自定义', '演讲助理'],
  }
]
</script>

<template>
  <section class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16">
    <div class="mb-6">
      <h2 class="inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
        对比选择（占位）
      </h2>
      <p class="mt-2 text-slate-600">并列卡片示例，中间卡片高亮为“推荐”。</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <article
        v-for="(p, i) in plans"
        :key="i"
        class="rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-6 md:p-8 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
        :class="p.recommended ? 'ring-2 ring-indigo-400/60 shadow-indigo-400/30' : ''"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-2xl font-bold text-slate-900">{{ p.name }}</h3>
          <span v-if="p.recommended" class="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-700">推荐</span>
        </div>
        <ul class="mt-4 space-y-2 text-slate-700 text-sm">
          <li v-for="(f, j) in p.features" :key="j" class="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-emerald-500"><path d="M20 6L9 17l-5-5"/></svg>
            {{ f }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
</style>

