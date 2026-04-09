<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-5xl w-full">
      <h2 class="text-3xl font-bold text-white text-center mb-12">世界运转有三层</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="border border-slate-700 rounded-2xl p-8 bg-slate-900/50">
          <div class="text-red-500 text-sm tracking-widest mb-4">第一层</div>
          <h3 class="text-2xl font-bold text-white mb-4">现象层</h3>
          <p class="text-slate-400 leading-relaxed">你看到的事情</p>
          <p class="text-slate-400 leading-relaxed mt-2">股价涨了，项目爆了，有人赚钱了</p>
          <p class="text-red-400 text-sm mt-4">永远被动</p>
        </div>
        <div class="border border-slate-700 rounded-2xl p-8 bg-slate-900/50">
          <div class="text-red-500 text-sm tracking-widest mb-4">第二层</div>
          <h3 class="text-2xl font-bold text-white mb-4">规律层</h3>
          <p class="text-slate-400 leading-relaxed">事情为什么发生</p>
          <p class="text-slate-400 leading-relaxed mt-2">能预判下一步</p>
          <p class="text-red-400 text-sm mt-4">不知道为什么是这样</p>
        </div>
        <div class="border border-red-600 rounded-2xl p-8 bg-red-900/20">
          <div class="text-red-500 text-sm tracking-widest mb-4">第三层</div>
          <h3 class="text-2xl font-bold text-white mb-4">本质层</h3>
          <p class="text-slate-300 leading-relaxed">事情发生的底层逻辑</p>
          <p class="text-red-400 text-sm mt-4">能解释一切</p>
        </div>
      </div>
    </div>
  </div>
</template>
