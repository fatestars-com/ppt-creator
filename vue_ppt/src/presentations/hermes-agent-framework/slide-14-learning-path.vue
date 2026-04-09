<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">学习路径</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-6">
          <div class="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0">1</div>
          <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700 flex-1">
            <h3 class="font-bold text-lg">掌握Python和AI基础知识</h3>
            <p class="text-sm text-slate-400">API调用、异步编程等</p>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0">2</div>
          <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700 flex-1">
            <h3 class="font-bold text-lg">学习MCP协议</h3>
            <p class="text-sm text-slate-400">理解Client-Server架构</p>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0">3</div>
          <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700 flex-1">
            <h3 class="font-bold text-lg">学习Hermes框架</h3>
            <p class="text-sm text-slate-400">官方文档 + 源码</p>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0">4</div>
          <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700 flex-1">
            <h3 class="font-bold text-lg">实战项目</h3>
            <p class="text-sm text-slate-400">从简单助手Agent开始，逐步增加复杂度</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
