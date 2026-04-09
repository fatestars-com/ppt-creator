<script setup lang="ts">
defineProps<{ isPreview?: boolean }>()
</script>

<template>
  <div :class="isPreview ? 'h-full' : 'min-h-screen'" class="bg-black flex items-center justify-center px-8">
    <div class="max-w-4xl">
      <p class="text-red-500 text-lg mb-4 tracking-widest">CHAPTER 03</p>
      <h1 class="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
        财富运转
      </h1>
      <h1 class="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
        的底层逻辑
      </h1>
    </div>
  </div>
</template>
