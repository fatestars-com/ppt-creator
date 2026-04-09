<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex flex-col items-center justify-center px-8">
    <h1 class="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
      我是剑意逐帧
    </h1>
    <div class="w-32 h-0.5 bg-red-600 mb-6"></div>
    <p class="text-sm text-slate-400 text-center tracking-widest uppercase mb-12">
      连续创业者 · 负债60万 · 认知框架研究者
    </p>
    <div class="space-y-3 text-center">
      <p class="text-xl text-white">今天用10分钟，给你一套框架</p>
      <p class="text-xl text-white">这套框架，让我在负债60万之后</p>
      <p class="text-2xl text-red-500 font-bold">重新站了起来</p>
    </div>
  </div>
</template>
