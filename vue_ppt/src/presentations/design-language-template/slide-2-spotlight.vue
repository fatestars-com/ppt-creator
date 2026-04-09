<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="title-wrap">
      <h2 class="headline">
        <span>用 </span>
        <span class="keyword">关键字</span>
        <span> 点亮叙事</span>

      </h2>
    </div>
  </section>
</template>

<style scoped>
.slide-shell {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: clamp(2rem, 5vw, 6rem);
  background: radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.08), transparent 55%),
    radial-gradient(circle at 20% 70%, rgba(14, 165, 233, 0.05), transparent 60%);
}

.title-wrap {
  text-align: center;
  max-width: 960px;
}

.headline {
  margin: 0 auto;
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 600;
  line-height: 1.05;
  color: rgba(15, 23, 42, 0.9);
}

.keyword {
  display: inline-block;
  font-size: 1.2em;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(120deg, #6366f1, #d946ef, #34d399);
  background-size: 200% 200%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: keyword-shift 6s ease-in-out infinite;
}

.keyword-alt {
  margin-left: 0.2em;
  background: linear-gradient(120deg, #34d399, #22d3ee, #a855f7);
}

@keyframes keyword-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
