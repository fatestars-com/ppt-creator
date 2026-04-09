<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">规划与记忆</h2>
      <div class="grid grid-cols-2 gap-8">
        <div class="bg-slate-900/80 rounded-2xl p-8 border border-slate-700">
          <div class="text-red-500 text-xs tracking-widest uppercase mb-4">模块一 · Planning</div>
          <h3 class="text-2xl font-bold mb-4">Agent的大脑</h3>
          <div class="space-y-3 text-sm text-slate-400">
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>单路径规划：一步一步按计划执行</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>多路径规划：同时探索多条解决路径</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>Re-Act模式：推理 + 行动，交替进行</span>
            </div>
          </div>
          <p class="mt-4 text-xs text-slate-500">做一步，想一步。想对了，继续做。想错了，停下来，换方法。</p>
        </div>
        <div class="bg-slate-900/80 rounded-2xl p-8 border border-slate-700">
          <div class="text-red-500 text-xs tracking-widest uppercase mb-4">模块二 · Memory</div>
          <h3 class="text-2xl font-bold mb-4">混合记忆架构</h3>
          <div class="space-y-3 text-sm text-slate-400">
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span><span class="text-slate-300">短期记忆：</span>当前会话上下文</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span><span class="text-slate-300">长期记忆：</span>跨会话知识积累</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">·</span>
              <span>向量数据库存储 + 语义检索</span>
            </div>
          </div>
          <p class="mt-4 text-xs text-slate-500">今天让Agent写代码，下周再做同类项目，它直接调用积累，不用重复说。</p>
        </div>
      </div>
    </div>
  </div>
</template>
