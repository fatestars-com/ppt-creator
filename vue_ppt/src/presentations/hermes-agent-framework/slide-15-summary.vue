<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-black tracking-tight mb-8">总结</h2>
      <div class="space-y-4 mb-10">
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
          <p class="text-red-400 font-bold">为什么AI Agent是趋势？</p>
          <p class="text-slate-300 text-sm">大模型的局限 + 落地需求 = Agent模式</p>
        </div>
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
          <p class="text-red-400 font-bold">MCP协议是什么？</p>
          <p class="text-slate-300 text-sm">连接AI和外部工具的标准化接口</p>
        </div>
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700">
          <p class="text-red-400 font-bold">Hermes框架是什么？</p>
          <p class="text-slate-300 text-sm">蚂蚁集团开源的Agent开发框架 · 六大模块</p>
        </div>
      </div>
      <div class="bg-red-600/20 border border-red-500/30 rounded-xl px-8 py-4 inline-block">
        <p class="text-red-400 font-bold text-lg">AI Agent的门槛，在急剧下降</p>
        <p class="text-slate-400 text-sm mt-1">普通人入场的窗口期，还在。</p>
      </div>
      <div class="mt-8 text-slate-500 text-sm">
        <p>剑意逐帧 · 日更第001天</p>
        <p class="mt-1">AI Agent | MCP协议 | Hermes框架</p>
      </div>
    </div>
  </div>
</template>
