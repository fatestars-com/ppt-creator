<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <h1>
      忘掉软件工程（邪修AI）
    </h1>
    <ul class="key-points">
      <li>即用即抛，不追求完美</li>
      <li>抽卡式生成，快速迭代</li>
      <li>不看代码，只看效果</li>
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