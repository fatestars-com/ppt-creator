<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">运行时与进化</h2>
      <div class="grid grid-cols-2 gap-8">
        <div class="bg-slate-900/80 rounded-2xl p-8 border border-slate-700">
          <div class="text-red-500 text-xs tracking-widest uppercase mb-4">模块五 · Agent Runtime</div>
          <h3 class="text-2xl font-bold mb-4">安全运行时</h3>
          <div class="space-y-3 text-sm text-slate-400">
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>基于进程隔离的安全运行环境</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>每个Agent运行在独立进程空间</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>Agent之间资源互不影响</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>防止一个Agent崩溃影响整体</span>
            </div>
          </div>
          <p class="mt-4 text-xs text-slate-500">对生产环境部署非常重要</p>
        </div>
        <div class="bg-slate-900/80 rounded-2xl p-8 border border-slate-700">
          <div class="text-red-500 text-xs tracking-widest uppercase mb-4">模块六 · Evolution</div>
          <h3 class="text-2xl font-bold mb-4">自我进化</h3>
          <div class="space-y-3 text-sm text-slate-400">
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>从历史交互中持续学习和优化</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>主动分析成功和失败的模式</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>调整自己的策略</span>
            </div>
          </div>
          <p class="mt-4 text-xs text-slate-500">目前处于探索阶段，但代表Agent发展的未来方向</p>
        </div>
      </div>
    </div>
  </div>
</template>
