<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <h1>
      模板设计先行
    </h1>
    <ul class="key-points">
      <li>学习(copy)好的设计</li>
      <li>截图给codex，生成模板</li>
      <li>用模板（目录）指点AI生成ppt</li>
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
</style>