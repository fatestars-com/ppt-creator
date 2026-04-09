<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="text-center">
      <p class="text-red-500 text-sm tracking-[0.5em] uppercase mb-4">Chapter 03</p>
      <h2 class="text-6xl font-black tracking-tight">Hermes框架</h2>
      <p class="mt-4 text-slate-400 text-lg tracking-widest">蚂蚁集团开源的Agent开发框架</p>
      <div class="mt-8 flex justify-center gap-3 flex-wrap">
        <span class="bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1 text-sm text-red-400">Planning</span>
        <span class="bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1 text-sm text-red-400">Memory</span>
        <span class="bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1 text-sm text-red-400">Tool Use</span>
        <span class="bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1 text-sm text-red-400">Perception</span>
        <span class="bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1 text-sm text-red-400">Runtime</span>
        <span class="bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1 text-sm text-red-400">Evolution</span>
      </div>
    </div>
  </div>
</template>
