<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content">
      <h1 class="headline">别怕</h1>
      <p class="subtitle" aria-label="驱动 AI 的代码能力 不等于 让你写代码">
        <span class="subtitle-text">驱动 AI 的代码能力</span>
        <span class="inequality" aria-hidden="true">≠</span>
        <span class="subtitle-text emphasis">让你写代码</span>
      </p>
      <div class="ambient-ring" aria-hidden="true"></div>
    </div>
  </section>
</template>

<style scoped>
.slide-shell {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: clamp(2.5rem, 8vw, 6rem);
  overflow: hidden;
}

.content {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 2.5rem);
  max-width: 960px;
}

.headline {
  margin: 0;
  font-size: clamp(4.5rem, 12vw, 8rem);
  font-weight: 900;
  letter-spacing: -0.08em;
  line-height: 0.95;
  color: #dc2626;
  text-shadow: 0 12px 48px rgba(220, 38, 38, 0.25);
}

.subtitle {
  position: relative;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 0.7em;
  font-size: clamp(2.1rem, 6vw, 3.4rem);
  font-weight: 650;
  color: #0f172a;
}

.subtitle-text {
  display: inline-flex;
  align-items: center;
  line-height: 1.15;
}

.inequality {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #0f172a;
  text-shadow: 0 10px 40px rgba(15, 23, 42, 0.25);
}

.subtitle-text.emphasis {
  font-size: 1.32em;
  font-weight: 900;
  letter-spacing: 0.01em;
  text-shadow: 0 8px 30px rgba(15, 23, 42, 0.22);
}

.ambient-ring {
  position: absolute;
  inset: auto;
  bottom: -420px;
  width: clamp(720px, 120vw, 1100px);
  height: clamp(720px, 120vw, 1100px);
  background: radial-gradient(circle, rgba(248, 113, 113, 0.18), transparent 55%);
  filter: blur(8px);
}

@media (max-width: 768px) {
  .headline {
    letter-spacing: -0.06em;
  }

  .subtitle {
    gap: 0.45em;
  }

  .subtitle-text.emphasis {
    font-size: 1.42em;
  }
}
</style>
