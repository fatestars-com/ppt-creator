<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex flex-col items-center justify-center">
    <h1 class="text-6xl font-black text-white tracking-tight mb-8">剑意逐帧</h1>
    <p class="text-xl text-red-500 mb-4">日更第001天</p>
    <div class="flex items-center space-x-4 text-slate-400">
      <span>认知</span>
      <span class="text-red-600">|</span>
      <span>框架</span>
      <span class="text-red-600">|</span>
      <span>觉醒</span>
    </div>
    <div class="mt-16">
      <p class="text-lg text-slate-500">认知是最锋利的武器</p>
    </div>
  </div>
</template>
