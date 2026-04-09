<script setup lang="ts">
const props = defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="container mx-auto max-w-6xl px-6 md:px-8 lg:px-12 py-12 lg:py-16">
    <div class="relative overflow-hidden rounded-3xl border border-slate-200/30 bg-white/70 backdrop-blur-md shadow-2xl">
      <div class="absolute inset-0 -z-0 opacity-70">
        <svg class="h-full w-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#6366f1"/>
              <stop offset="50%" stop-color="#d946ef"/>
              <stop offset="100%" stop-color="#34d399"/>
            </linearGradient>
            <!-- 扩大滤镜区域，避免模糊边界呈现矩形裁剪痕迹 -->
            <filter id="blur" filterUnits="userSpaceOnUse" x="-200" y="-200" width="1200" height="1000" color-interpolation-filters="sRGB">
              <feGaussianBlur stdDeviation="60" edgeMode="duplicate" />
            </filter>
          </defs>
          <g filter="url(#blur)">
            <circle cx="150" cy="120" r="120" fill="url(#g1)">
              <animate attributeName="cx" values="120;680;120" dur="18s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="90;520;90" dur="22s" repeatCount="indefinite"/>
            </circle>
            <circle cx="650" cy="480" r="140" fill="url(#g1)" opacity="0.8">
              <animate attributeName="cx" values="700;120;700" dur="20s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="510;120;510" dur="16s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>
      </div>

      <div class="relative z-10 grid place-items-center px-6 py-16 md:py-24">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400">
            设计语言模板（示例）
          </h1>
          <p class="mt-5 text-lg md:text-2xl text-slate-700">
            多版式、可重用、含交互与 SVG 动效的中文演示模板
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 px-6 py-3 text-white shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">
              立即开始
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <span class="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-2 text-slate-700 backdrop-blur-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="opacity-70"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>
              示例模板，仅用于演示结构
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
