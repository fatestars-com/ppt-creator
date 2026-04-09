<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div :class="isPreview ? 'h-full' : 'min-h-screen'" class="bg-black flex items-center px-8 py-16">
    <div class="max-w-5xl mx-auto w-full">
      <h2 class="text-red-500 text-2xl font-bold mb-12 tracking-widest">财富三定律</h2>

      <div class="space-y-10">
        <!-- Law 1 -->
        <div class="border-l-4 border-red-600 pl-8">
          <p class="text-red-500 text-sm tracking-widest mb-2">定律一</p>
          <p class="text-white text-3xl font-bold mb-4">钱是认知的变现</p>
          <p class="text-slate-400 text-xl leading-relaxed">
            你赚的每一分钱，都是认知的折现。<br />
            你亏的每一分钱，都是认知的折损。
          </p>
        </div>

        <!-- Law 2 -->
        <div class="border-l-4 border-slate-600 pl-8">
          <p class="text-slate-400 text-sm tracking-widest mb-2">定律二</p>
          <p class="text-white text-3xl font-bold mb-4">财富不等于钱</p>
          <p class="text-slate-400 text-xl leading-relaxed">
            有钱人不是因为钱多才有钱，是因为他们的<strong class="text-white">资产在持续产生现金流</strong>。<br />
            资产和现金，不是同一个概念。
          </p>
        </div>

        <!-- Law 3 -->
        <div class="border-l-4 border-slate-600 pl-8">
          <p class="text-slate-400 text-sm tracking-widest mb-2">定律三</p>
          <p class="text-white text-3xl font-bold mb-4">赚钱靠周期，致富靠系统</p>
          <p class="text-slate-400 text-xl leading-relaxed">
            靠运气赚的钱，会靠实力亏回去。<br />
            靠系统赚的钱，才是真的。<br />
            <strong class="text-white">系统 = 你不工作的时候，钱还在进来的东西</strong>
          </p>
        </div>
      </div>

      <!-- Bottom insight -->
      <div class="mt-16 pt-8 border-t border-slate-800">
        <p class="text-slate-500 text-lg">
          套用三阶层模型：<br />
          <span class="text-slate-600">只看到钱 → 现象层</span><br />
          <span class="text-slate-500">能看到资产 → 规律层</span><br />
          <span class="text-red-500">能建立系统 → 本质层</span>
        </p>
      </div>
    </div>
  </div>
</template>
