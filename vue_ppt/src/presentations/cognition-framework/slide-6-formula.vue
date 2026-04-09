<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div :class="isPreview ? 'h-full' : 'min-h-screen'" class="bg-black flex items-center px-8 py-16">
    <div class="max-w-5xl mx-auto w-full">
      <!-- Title -->
      <h2 class="text-red-500 text-2xl font-bold mb-12 tracking-widest">认知升级公式</h2>

      <!-- Main formula -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-6 text-5xl md:text-7xl font-black">
          <span class="text-white">输入</span>
          <span class="text-red-500">×</span>
          <span class="text-white">反思</span>
          <span class="text-red-500">×</span>
          <span class="text-white">实践</span>
        </div>
        <p class="text-slate-500 text-xl mt-6">三个因素相乘，不是相加。任何一个是零，结果就是零。</p>
      </div>

      <!-- Three factors -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="border border-slate-700 rounded-2xl p-8">
          <p class="text-red-500 text-4xl font-black mb-4">输入</p>
          <p class="text-slate-300 text-lg">读什么书<br />见什么人<br />经历什么事</p>
        </div>
        <div class="border border-slate-700 rounded-2xl p-8">
          <p class="text-red-500 text-4xl font-black mb-4">反思</p>
          <p class="text-slate-300 text-lg">有没有把输入<br />提炼成模型</p>
        </div>
        <div class="border border-slate-700 rounded-2xl p-8">
          <p class="text-red-500 text-4xl font-black mb-4">实践</p>
          <p class="text-slate-300 text-lg">有没有用模型<br />重新做决定</p>
        </div>
      </div>

      <!-- Bottom quote -->
      <div class="mt-12 text-center">
        <p class="text-slate-400 text-xl">
          大多数人只做输入，然后觉得自己在学习。<br />
          <span class="text-red-500">但从来不复盘，从来不实践。认知永远停在原地。</span>
        </p>
      </div>
    </div>
  </div>
</template>
