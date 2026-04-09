<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex flex-col items-center justify-center px-8">
    <div class="text-center space-y-8">
      <div class="space-y-2">
        <p class="text-red-500 text-sm tracking-[0.4em] uppercase">Ant Digital · 蚂蚁集团</p>
        <h1 class="text-7xl font-black tracking-tight">Hermes</h1>
        <h1 class="text-7xl font-black tracking-tight">AgentFramework</h1>
      </div>
      <p class="text-slate-400 text-xl tracking-widest">开源AI Agent开发框架</p>
      <div class="pt-8 space-y-1">
        <p class="text-slate-300 text-lg">剑意逐帧</p>
        <p class="text-slate-500 text-sm">日更第001天</p>
      </div>
    </div>
  </div>
</template>
