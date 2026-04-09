<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const items = [
  { title: '准备演示结构', note: '确认大纲与节奏', status: 'done' },
  { title: '插入示例图表', note: '占位数据即可', status: 'info' },
  { title: '添加互动环节', note: '如投票/问答', status: 'warn' },
  { title: '检查可读性', note: '对比度/字号', status: 'done' },
]

const statusClass = (s: string) => ({
  done: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
  info: 'text-sky-600 bg-sky-500/10 border-sky-500/20',
  warn: 'text-amber-700 bg-amber-500/10 border-amber-500/20'
}[s as 'done'|'info'|'warn'] || '')
</script>

<template>
  <section class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16">
    <div class="mb-6">
      <h2 class="inline-block text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
        清单（占位）
      </h2>
      <p class="mt-2 text-slate-600">状态色用于快速扫读：完成/信息/注意。</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <article v-for="(it, i) in items" :key="i" class="rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md p-6 md:p-8 shadow-xl">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-slate-900">{{ it.title }}</h3>
          <span class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold" :class="statusClass(it.status)">
            <span class="w-2 h-2 rounded-full bg-current"></span>
            {{ it.status === 'done' ? '完成' : it.status === 'info' ? '信息' : '注意' }}
          </span>
        </div>
        <p class="mt-2 text-sm text-slate-600">{{ it.note }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
</style>

