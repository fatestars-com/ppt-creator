<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-4xl w-full text-center space-y-8">
      <p class="text-2xl text-white">我做这个账号，不是来教你赚钱的。</p>
      <p class="text-3xl text-red-500 font-bold">我不卖课，不带货，不割韭菜。</p>
      <div class="border-t border-slate-800 pt-8 mt-12">
        <p class="text-2xl text-white mb-4">我做这个账号，是来陪你重建认知的。</p>
        <p class="text-xl text-slate-400">每天一条内容。每条一个框架。每条一个可验证的结论。</p>
      </div>
      <div class="mt-12">
        <p class="text-2xl text-white">目标：</p>
        <p class="text-xl text-slate-300 mt-4">让你在看完100天内容之后，</p>
        <p class="text-xl text-slate-300">看待世界的方式，和现在完全不同。</p>
        <p class="text-xl text-slate-300 mt-2">不是为了变有钱。</p>
        <p class="text-2xl text-red-500 font-bold mt-2">是为了变清醒。</p>
      </div>
    </div>
  </div>
</template>
