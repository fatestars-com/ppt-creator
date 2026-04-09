<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8 py-16">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">旅行助手Agent工作流程</h2>
      <div class="bg-slate-900/80 rounded-2xl p-6 border border-slate-700 mb-6">
        <p class="text-center text-slate-300 mb-4">用户说："帮我规划去上海的行程"</p>
        <div class="flex justify-center">
          <div class="inline-block bg-slate-800/60 rounded-lg px-4 py-2 text-sm text-slate-400">
            目的地：上海 · 出发地：[需补全] · 日期：[需补全] · 偏好：[需询问]
          </div>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-3">
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700 text-center">
          <div class="text-red-500 text-xs mb-2">Step 1</div>
          <p class="text-sm font-bold">Perception</p>
          <p class="text-xs text-slate-400 mt-1">处理用户输入</p>
        </div>
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700 text-center">
          <div class="text-red-500 text-xs mb-2">Step 2</div>
          <p class="text-sm font-bold">Planning</p>
          <p class="text-xs text-slate-400 mt-1">拆解任务</p>
        </div>
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700 text-center">
          <div class="text-red-500 text-xs mb-2">Step 3</div>
          <p class="text-sm font-bold">Tool Use</p>
          <p class="text-xs text-slate-400 mt-1">调用工具</p>
        </div>
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700 text-center">
          <div class="text-red-500 text-xs mb-2">Step 4</div>
          <p class="text-sm font-bold">Memory</p>
          <p class="text-xs text-slate-400 mt-1">检索偏好</p>
        </div>
        <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700 text-center">
          <div class="text-red-500 text-xs mb-2">Step 5</div>
          <p class="text-sm font-bold">执行反馈</p>
          <p class="text-xs text-slate-400 mt-1">展示确认</p>
        </div>
      </div>
    </div>
  </div>
</template>
