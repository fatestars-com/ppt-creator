<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="text-center">
      <p class="text-red-500 text-sm tracking-[0.5em] uppercase mb-4">Chapter 01</p>
      <h2 class="text-6xl font-black tracking-tight">AI Agent赛道爆发</h2>
      <div class="mt-6 flex justify-center gap-8 text-slate-400 text-sm tracking-widest">
        <span>OpenAI</span>
        <span>·</span>
        <span>Anthropic</span>
        <span>·</span>
        <span>Google</span>
        <span>·</span>
        <span>Microsoft</span>
      </div>
      <div class="mt-3 flex justify-center gap-8 text-slate-500 text-xs tracking-widest">
        <span>阿里</span>
        <span>·</span>
        <span>字节</span>
        <span>·</span>
        <span>百度</span>
        <span>·</span>
        <span>华为</span>
      </div>
    </div>
  </div>
</template>
