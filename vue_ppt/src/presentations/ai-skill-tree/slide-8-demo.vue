<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <h1>
      <span class="accent">DEMO</span>
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
  background-image: linear-gradient(120deg, #ef4444, #dc2626, #991b1b);
  background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  text-shadow: 0 24px 60px rgba(185, 28, 28, 0.3), 0 0 30px rgba(248, 113, 113, 0.45);
}
</style>
\n
