<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-4xl w-full text-center">
      <h2 class="text-3xl font-bold text-white mb-12">认知升级公式</h2>
      <div class="text-5xl md:text-6xl font-black text-red-500 mb-12">
        认知升级 = 输入 × 反思 × 实践
      </div>
      <p class="text-xl text-slate-400 mb-12">三个因素，相乘，不是相加。任何一个因素是零，结果就是零。</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div class="bg-slate-900 rounded-xl p-6">
          <h3 class="text-xl font-bold text-white mb-2">输入</h3>
          <p class="text-slate-400">读什么书，见什么人，经历什么事</p>
        </div>
        <div class="bg-slate-900 rounded-xl p-6">
          <h3 class="text-xl font-bold text-white mb-2">反思</h3>
          <p class="text-slate-400">有没有把输入提炼成模型</p>
        </div>
        <div class="bg-slate-900 rounded-xl p-6">
          <h3 class="text-xl font-bold text-white mb-2">实践</h3>
          <p class="text-slate-400">有没有用模型重新做决定</p>
        </div>
      </div>
      <p class="text-xl text-red-400 mt-12">
        这就是为什么你赚不到钱。不是因为你不够努力，是你的认知结构从根上就错了。
      </p>
    </div>
  </div>
</template>
