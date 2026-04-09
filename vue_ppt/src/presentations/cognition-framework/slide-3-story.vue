<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div :class="isPreview ? 'h-full' : 'min-h-screen'" class="bg-black flex items-center px-8 py-16">
    <div class="max-w-5xl mx-auto">
      <!-- Big stat -->
      <div class="mb-16">
        <span class="text-red-500 text-9xl font-black">60</span>
        <span class="text-white text-6xl font-bold ml-2">万</span>
        <p class="text-slate-400 text-xl mt-4">2023年，币圈投资，半年清零</p>
      </div>

      <!-- Story points -->
      <div class="space-y-8">
        <div class="flex items-start gap-6">
          <div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
          <p class="text-white text-2xl leading-relaxed">
            做过币圈、流量、实体、线上。<br />
            <span class="text-slate-400">全失败了。不是亏了一点，是亏到要卖房子那种。</span>
          </p>
        </div>

        <div class="flex items-start gap-6">
          <div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
          <p class="text-white text-2xl leading-relaxed">
            20万是父亲的养老金。
          </p>
        </div>

        <div class="flex items-start gap-6">
          <div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
          <p class="text-white text-2xl leading-relaxed">
            出事之后，没有告诉任何人。<br />
            <span class="text-slate-400">我没资格崩溃，只能重建。</span>
          </p>
        </div>
      </div>

      <!-- Core realization -->
      <div class="mt-16 pt-8 border-t border-slate-800">
        <p class="text-3xl font-bold text-white">
          为什么我总是亏钱？
        </p>
        <p class="text-red-500 text-3xl font-bold mt-2">
          不是运气的问题，是认知的问题。
        </p>
      </div>
    </div>
  </div>
</template>
