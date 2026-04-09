<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div class="min-h-screen bg-transparent flex items-center justify-center px-8">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">大模型的两个核心局限</h2>
      <div class="grid grid-cols-2 gap-8">
        <div class="bg-slate-900/80 rounded-2xl p-8 border border-slate-700">
          <div class="text-red-500 text-sm tracking-widest uppercase mb-4">局限一</div>
          <h3 class="text-2xl font-bold mb-4">无法主动规划和反思</h3>
          <p class="text-slate-400 leading-relaxed">
            你让GPT做一道复杂的菜，<br/>
            它可能第一步就把厨房烧了。<br/>
            因为它不会主动拆解任务、反思步骤。
          </p>
        </div>
        <div class="bg-slate-900/80 rounded-2xl p-8 border border-slate-700">
          <div class="text-red-500 text-sm tracking-widest uppercase mb-4">局限二</div>
          <h3 class="text-2xl font-bold mb-4">无法连接真实世界</h3>
          <p class="text-slate-400 leading-relaxed">
            大模型只存在于文字世界。<br/>
            它不能帮你发邮件、<br/>
            不能帮你查数据、<br/>
            不能帮你执行操作。
          </p>
        </div>
      </div>
      <div class="mt-8 text-center">
        <div class="inline-block bg-red-600/20 border border-red-500/30 rounded-xl px-6 py-3">
          <p class="text-red-400 font-bold">Agent框架，就是为了解决这两个问题</p>
        </div>
      </div>
    </div>
  </div>
</template>
