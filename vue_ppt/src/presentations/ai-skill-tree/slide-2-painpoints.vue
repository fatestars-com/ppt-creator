<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const hasMounted = ref(false)
const showExplanation = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    hasMounted.value = true
  })
})

const isVisible = computed(() => {
  const { isActive, isPreview } = props
  const hasVisibilityControl = isActive !== undefined || isPreview !== undefined
  if (hasVisibilityControl) {
    return Boolean(isActive || isPreview)
  }
  return hasMounted.value
})

const revealExplanation = () => {
  showExplanation.value = true
}

const handleSectionClick = () => {
  if (showExplanation.value) {
    showExplanation.value = false
  }
}
</script>

<template>
  <section class="slide-shell" @click="handleSectionClick">
    <div v-if="!showExplanation" class="layout">
      <header class="headline">
        <h2>用AI做PPT的痛苦</h2>
      </header>
      <ol class="pain-list" :class="{ 'is-visible': isVisible }">
        <li>
          <span class="index">01</span>
          <div class="text">
            <span class="primary">质量随机</span>
            <span class="secondary">不可控</span>
          </div>
        </li>
        <li>
          <span class="index">02</span>
          <div class="text">
            <span class="primary">模板同质化</span>
            <span class="secondary">创意缺席</span>
          </div>
        </li>
        <li>
          <span class="index">03</span>
          <div class="text">
            <span class="primary">难以迭代</span>
            <span class="secondary">修改成本高</span>
          </div>
        </li>
      </ol>
      <button class="reveal-trigger" type="button" @click.stop="revealExplanation">
        原因是什么？
      </button>
    </div>
    <div v-else class="layout reveal-layout">
      <header class="reveal-headline">
        <h2 class="reveal-title">没开放底层能力的工作流</h2>
        <p class="reveal-subtitle">给模板做布局填字·传统意义上的”汇报PPT“</p>
      </header>
    </div>
  </section>
</template>

<style scoped>
.slide-shell {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: clamp(3rem, 8vw, 7rem);
  background: linear-gradient(145deg, rgba(248, 250, 252, 0.85), rgba(219, 234, 254, 0.9));
}

.layout {
  width: min(100%, 1100px);
  display: grid;
  gap: clamp(2rem, 6vw, 3.5rem);
  justify-items: center;
}

.headline {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: center;
}

.eyebrow {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(37, 99, 235, 0.7);
}

h2 {
  margin: 0;
  font-size: clamp(3rem, 7vw, 4.2rem);
  font-weight: 750;
  letter-spacing: -0.035em;
  color: rgba(15, 23, 42, 0.85);
}

.pain-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-items: center;
  gap: clamp(1.6rem, 5vw, 3rem);
  width: min(100%, 960px);
}

.pain-list li {
  --delay: 0ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(0.8rem, 3vw, 1.4rem);
  text-align: center;
  padding: clamp(1.6rem, 3vw, 2.2rem) clamp(1.6rem, 4vw, 2.4rem);
  min-width: 220px;
  max-width: 320px;
  width: fit-content;
  opacity: 0;
  transform: translateX(-36px);
  transition: opacity 420ms cubic-bezier(0.33, 1, 0.68, 1) var(--delay),
    transform 420ms cubic-bezier(0.33, 1, 0.68, 1) var(--delay);
}

.pain-list.is-visible li {
  opacity: 1;
  transform: translateX(0);
}

.pain-list.is-visible li:nth-child(2) {
  --delay: 120ms;
}

.pain-list.is-visible li:nth-child(3) {
  --delay: 240ms;
}

.index {
  position: relative;
  font-size: clamp(2.6rem, 6vw, 3.7rem);
  font-weight: 700;
  background: linear-gradient(135deg, rgba(29, 78, 216, 1), rgba(79, 70, 229, 1));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  letter-spacing: -0.05em;
}

.text {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.primary {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: rgba(15, 23, 42, 0.92);
  white-space: nowrap;
}

.secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: center;
  font-size: 0.95rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(30, 64, 175, 0.72);
}

.secondary::before {
  content: '';
  display: inline-block;
  width: 36px;
  height: 1px;
  background: currentColor;
  opacity: 0.6;
}

.reveal-trigger {
  border: 0;
  background: transparent;
  font: inherit;
  color: #dc2626;
  font-weight: 700;
  letter-spacing: 0.1em;
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  transition: background-color 180ms ease, transform 180ms ease;
}

.reveal-trigger:hover,
.reveal-trigger:focus-visible {
  background-color: rgba(220, 38, 38, 0.1);
  transform: translateY(-1px);
  outline: none;
}

.reveal-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

.reveal-headline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 720px;
}

.reveal-title {
  margin: 0;
  font-size: clamp(3rem, 7vw, 4rem);
  font-weight: 760;
  letter-spacing: -0.04em;
  color: rgba(15, 23, 42, 0.92);
}

.reveal-subtitle {
  margin: 0;
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  color: rgba(71, 85, 105, 0.88);
}

@media (max-width: 900px) {
  .pain-list {
    grid-template-columns: 1fr;
    gap: clamp(1.2rem, 6vw, 2rem);
    width: min(100%, 420px);
  }

  .pain-list li {
    width: min(100%, 360px);
    transform: translateX(-28px);
  }
}

@media (max-width: 768px) {
  .slide-shell {
    padding: clamp(2.5rem, 12vw, 4rem);
  }

  .pain-list li {
    padding: clamp(1.4rem, 8vw, 2.2rem) clamp(1.2rem, 10vw, 2.2rem);
  }

  .index {
    font-size: clamp(2.2rem, 9vw, 3.1rem);
  }

  .reveal-title {
    font-size: clamp(2.6rem, 10vw, 3.4rem);
  }

  .reveal-subtitle {
    font-size: clamp(1rem, 4vw, 1.4rem);
  }
}
</style>
