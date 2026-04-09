<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <h1>
      用<span class="accent">AI+代码</span>解决一切问题
    </h1>
    <ul class="key-points">
      <li>代码是AI的工具，不再是人的工具（暴论）</li>
      <li>任何人都能用AI驱动代码解决问题</li>
    </ul>
  </section>
</template>

<style scoped>
.slide-shell {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(2.5rem, 7vw, 5.5rem);
  text-align: center;
  background: transparent;
}

h1 {
  margin: 0 0 1.5rem 0;
  font-size: clamp(3.5rem, 8.5vw, 5.4rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.08;
  color: #111827;
}

.key-points {
  margin: 2rem 0 0 0;
  padding: 0;
  text-align: left;
  font-size: clamp(1.6rem, 4.5vw, 2.4rem);
  font-weight: 500;
  color: #374151;
  line-height: 1.6;
  max-width: 800px;
  list-style-type: disc;
  list-style-position: inside;
}

.key-points li {
  margin: 0.8rem 0;
}

.accent {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  color: transparent;
  background-image: linear-gradient(120deg, #38bdf8, #a855f7, #34d399);
  background-clip: text;
  -webkit-background-clip: text;
  font-size: clamp(4.5rem, 11vw, 6.5rem);
}
</style>