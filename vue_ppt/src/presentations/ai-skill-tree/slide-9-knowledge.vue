<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <h1>
      目录结构就是 <span class="accent">AI 的知识库</span>
    </h1>
  </section>
</template>

<style scoped>
.slide-shell {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(2.5rem, 7vw, 5.5rem);
  text-align: center;
}

h1 {
  margin: 0;
  font-size: clamp(3.5rem, 8.5vw, 5.4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.08;
  color: #111827;
}

.accent {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  color: transparent;
  background-image: linear-gradient(120deg, #38bdf8, #a855f7, #34d399);
  background-clip: text;
  -webkit-background-clip: text;
}
</style>
