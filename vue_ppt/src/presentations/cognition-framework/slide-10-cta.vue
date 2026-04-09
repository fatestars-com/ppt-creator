<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div :class="isPreview ? 'h-full' : 'min-h-screen'" class="bg-black flex flex-col items-center justify-center px-8 text-center">
    <!-- What I'm NOT doing -->
    <p class="text-slate-500 text-xl mb-8">我不是来教你赚钱的。不卖课，不带货，不割韭菜。</p>

    <!-- Main statement -->
    <h2 class="text-white text-4xl md:text-5xl font-bold leading-relaxed mb-12">
      我做这个账号<br />
      <span class="text-red-500">是来陪你重建认知的</span>
    </h2>

    <!-- Divider -->
    <div class="w-16 h-1 bg-red-600 mb-12"></div>

    <!-- The promise -->
    <div class="space-y-4 mb-16">
      <p class="text-slate-300 text-xl">每天一条内容</p>
      <p class="text-slate-300 text-xl">每条一个框架</p>
      <p class="text-slate-300 text-xl">每条一个可验证的结论</p>
    </div>

    <!-- Goal -->
    <p class="text-white text-2xl font-bold mb-4">100天后</p>
    <p class="text-slate-400 text-xl mb-16">
      你看待世界的方式，和现在完全不同
    </p>

    <!-- Final message -->
    <p class="text-red-500 text-3xl font-black tracking-tight mb-8">
      不是为了变有钱<br />是为了变清醒
    </p>

    <!-- Brand -->
    <p class="text-white text-xl font-bold mt-12">剑意逐帧</p>
    <p class="text-slate-500 text-sm mt-2 tracking-widest">认知是最锋利的武器</p>
  </div>
</template>
