<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="container mx-auto max-w-5xl px-6 md:px-8 lg:px-12 py-16">
    <div class="relative overflow-hidden rounded-4xl border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-2xl px-8 py-16 text-center">
      <div class="absolute inset-0 -z-0 opacity-60">
        <svg viewBox="0 0 800 200" class="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#6366f1"/>
              <stop offset="50%" stop-color="#d946ef"/>
              <stop offset="100%" stop-color="#34d399"/>
            </linearGradient>
          </defs>
          <path d="M0 120 C 120 80, 240 160, 360 120 S 600 80, 800 120" fill="none" stroke="url(#glow)" stroke-width="12" opacity="0.6">
            <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0 120 C 120 80, 240 160, 360 120 S 600 80, 800 120; M0 120 C 120 140, 240 100, 360 120 S 600 160, 800 120; M0 120 C 120 80, 240 160, 360 120 S 600 80, 800 120"/>
          </path>
        </svg>
      </div>
      <h2 class="relative z-10 text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
        准备好应用到你的演示了吗？
      </h2>
      <p class="relative z-10 mt-4 text-slate-700">按钮仅作示例，无实际操作。</p>
      <div class="relative z-10 mt-8 flex items-center justify-center gap-4">
        <button class="rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 px-6 py-3 text-white shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">
          继续探索
        </button>
        <button class="rounded-full border border-white/40 bg-white/60 px-6 py-3 text-slate-800 backdrop-blur-md hover:bg-white/70">
          查看示例
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rounded-4xl { border-radius: 2rem; }
</style>

