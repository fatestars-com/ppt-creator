<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-5xl w-full">
      <h2 class="text-3xl font-bold text-white text-center mb-12">财富三定律</h2>
      <div class="space-y-8">
        <div class="border-l-4 border-red-600 pl-8">
          <h3 class="text-2xl font-bold text-red-500 mb-2">定律一：钱是认知的变现</h3>
          <p class="text-slate-300">你赚的每一分钱，都是认知的折现。你亏的每一分钱，都是认知的折损。</p>
        </div>
        <div class="border-l-4 border-red-600 pl-8">
          <h3 class="text-2xl font-bold text-red-500 mb-2">定律二：财富不等于钱</h3>
          <p class="text-slate-300">有钱人不是因为钱多才有钱，是因为他们的资产在持续产生现金流。</p>
        </div>
        <div class="border-l-4 border-red-600 pl-8">
          <h3 class="text-2xl font-bold text-red-500 mb-2">定律三：赚钱靠周期，致富靠系统</h3>
          <p class="text-slate-300">靠运气赚的钱，会靠实力亏回去。但靠系统赚的钱，才是真的。</p>
        </div>
      </div>
      <div class="mt-16 text-center">
        <p class="text-xl text-slate-400">套用三阶层模型：</p>
        <p class="text-slate-500 mt-2">只看到钱的人，在现象层。</p>
        <p class="text-slate-400 mt-1">能看到资产的人，在规律层。</p>
        <p class="text-red-400 mt-1 font-bold">能建立系统的人，在本质层。</p>
      </div>
    </div>
  </div>
</template>
