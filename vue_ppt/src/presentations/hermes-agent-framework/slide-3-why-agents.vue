<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <h2 class="text-4xl font-bold">为什么所有大厂都在押注AI Agent？</h2>
      <div class="bg-slate-900/80 rounded-2xl p-8 border border-slate-700">
        <p class="text-slate-300 text-xl leading-relaxed">
          大模型的能力<span class="text-red-500 font-bold">越来越强</span>，<br/>
          但落地应用的方式<span class="text-red-500 font-bold">还在探索</span>。
        </p>
        <div class="mt-6 text-3xl font-black tracking-tight">Agent模式</div>
        <p class="mt-2 text-slate-400">被认为是目前最被看好的方向</p>
      </div>
    </div>
  </div>
</template>
