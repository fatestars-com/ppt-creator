<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div :class="isPreview ? 'h-full' : 'min-h-screen'" class="bg-black flex items-center px-8 py-16">
    <div class="max-w-6xl mx-auto w-full">
      <!-- Title -->
      <h2 class="text-red-500 text-2xl font-bold mb-12 tracking-widest">三阶层认知模型</h2>

      <!-- Three layers as stacked cards -->
      <div class="space-y-6">
        <!-- Layer 3: Essence (top, biggest) -->
        <div class="bg-slate-900 border border-red-600 rounded-2xl p-8 md:p-12">
          <div class="flex items-center gap-6 mb-4">
            <span class="text-red-500 text-4xl font-black">03</span>
            <span class="text-white text-3xl font-bold">本质层</span>
          </div>
          <p class="text-slate-300 text-xl leading-relaxed">
            事情发生的底层逻辑。为什么有人能拉盘？因为掌握了信息差。
          </p>
          <p class="text-white text-lg mt-4 font-semibold">
            能解释一切，预判规律为什么是这样而非那样。
          </p>
        </div>

        <!-- Layer 2: Pattern -->
        <div class="bg-slate-900 border border-slate-600 rounded-2xl p-8 md:p-12">
          <div class="flex items-center gap-6 mb-4">
            <span class="text-slate-400 text-4xl font-black">02</span>
            <span class="text-white text-3xl font-bold">规律层</span>
          </div>
          <p class="text-slate-300 text-xl leading-relaxed">
            事情为什么发生。为什么股价涨？因为有人拉盘。为什么项目爆？因为流量来了。
          </p>
          <p class="text-white text-lg mt-4 font-semibold">
            能预判下一步，但不知道为什么是这样不是那样。
          </p>
        </div>

        <!-- Layer 1: Phenomenon (bottom) -->
        <div class="bg-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12">
          <div class="flex items-center gap-6 mb-4">
            <span class="text-slate-500 text-4xl font-black">01</span>
            <span class="text-white text-3xl font-bold">现象层</span>
          </div>
          <p class="text-slate-400 text-xl leading-relaxed">
            你看到的事情。股价涨了、项目爆了、有人赚钱了。
          </p>
          <p class="text-slate-500 text-lg mt-4">
            永远被动，看到的是结果，不是原因。
          </p>
        </div>
      </div>

      <!-- Bottom insight -->
      <p class="text-slate-500 text-lg mt-12 text-center">
        大多数人，终生停留在现象层。
      </p>
    </div>
  </div>
</template>
