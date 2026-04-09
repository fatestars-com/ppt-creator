<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-black flex flex-col items-center justify-center px-8">
    <h1 class="text-5xl md:text-7xl font-black text-white text-center mb-8 tracking-tight leading-tight">
      你赚不到钱
    </h1>
    <h1 class="text-5xl md:text-7xl font-black text-white text-center mb-8 tracking-tight leading-tight">
      不是因为不够努力
    </h1>
    <div class="w-24 h-1 bg-red-600 mb-8"></div>
    <h2 class="text-2xl md:text-3xl font-bold text-red-500 text-center mb-12">
      我是剑意逐帧
    </h2>
    <p class="text-sm text-slate-400 text-center tracking-widest uppercase">
      连续创业者 · 负债60万 · 认知框架研究者
    </p>
  </div>
</template>
