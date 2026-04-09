<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <h1>
      删除而不是重做
    </h1>
    <ul class="key-points">
      <li>直接删除，不要重做</li>
      <li>避免反复修改（省钱）</li>
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