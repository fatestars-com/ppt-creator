<script setup lang="ts">
import { computed, ref } from 'vue'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const slides = [
  {
    id: 'plan',
    label: '页面规划输出预览',
    src: new URL('./slide-5-1.png', import.meta.url).href
  },
  {
    id: 'feedback',
    label: '反馈对话示例',
    src: new URL('./slide-5-2.png', import.meta.url).href
  },
  {
    id: 'debug',
    label: '错误定位示例',
    src: new URL('./slide-5-3.png', import.meta.url).href
  }
] as const

const flowSteps = [
  { id: 1, title: '规划', target: 0 },
  { id: 2, title: '发给 AI', target: 0 },
  { id: 3, title: '观察效果', target: 1 },
  { id: 4, title: '处理错误', target: 2 }
] as const

const activeSlide = ref(0)

const carouselStates = computed(() => {
  const total = slides.length
  return slides.map((_, index) => {
    const relative = (index - activeSlide.value + total) % total
    if (relative === 0) return 'is-active'
    if (relative === 1) return 'is-next'
    if (relative === total - 1) return 'is-prev'
    return ''
  })
})

const setSlide = (index: number) => {
  activeSlide.value = index
}

const handleFlowClick = (target: number) => {
  if (target === activeSlide.value) return
  setSlide(target)
}

const isStepActive = (target: number) => target === activeSlide.value
</script>

<template>
  <section class="slide-shell">
    <div class="layout">
      <header class="flow-track" role="group" aria-label="AI 做 PPT 流程">
        <div class="flow-frame">
          <div
            v-for="(step, index) in flowSteps"
            :key="step.id"
            class="flow-segment"
            :class="`variant-${index + 1}`"
          >
            <button
              class="flow-node"
              type="button"
              :class="{ active: isStepActive(step.target) }"
              @click="handleFlowClick(step.target)"
            >
              <span class="flow-number">{{ step.id }}</span>
              <span class="flow-label">{{ step.title }}</span>
            </button>
            <div v-if="index < flowSteps.length - 1" class="flow-connector" aria-hidden="true">
              <svg viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 18 H85"
                  stroke="rgba(126, 153, 240, 0.45)"
                  stroke-width="6"
                  stroke-linecap="round"
                />
                <path
                  d="M72 8 L110 18 L72 28 Z"
                  :fill="`url(#arrowGradient${step.id})`"
                />
                <defs>
                  <linearGradient
                    :id="`arrowGradient${step.id}`"
                    x1="72"
                    y1="18"
                    x2="110"
                    y2="18"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stop-color="rgba(67, 97, 238, 0.8)" />
                    <stop offset="100%" stop-color="rgba(14, 165, 233, 0.75)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <div class="carousel" role="region" aria-live="polite" aria-label="流程示意">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="carousel-item"
          :class="carouselStates[index]"
        >
          <img :src="slide.src" :alt="slide.label" draggable="false" />
        </div>
      </div>
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
  padding: clamp(2.5rem, 7vw, 5rem);
}

.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 5vw, 3.5rem);
  /* Allow slightly wider content for larger images */
  width: min(100%, 1200px);
}

.flow-track {
  width: min(100%, 1080px);
  display: flex;
  justify-content: center;
}

.flow-frame {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(0.8rem, 2.5vw, 1.6rem);
  padding: clamp(0.9rem, 3vw, 1.3rem) clamp(1.4rem, 4vw, 2.8rem);
  border-radius: clamp(36px, 8vw, 64px);
  background:
    radial-gradient(circle at 12% 20%, rgba(79, 70, 229, 0.18), transparent 55%),
    radial-gradient(circle at 88% 80%, rgba(236, 72, 153, 0.12), transparent 60%),
    linear-gradient(110deg, rgba(248, 250, 252, 0.86), rgba(255, 255, 255, 0.9));
  box-shadow:
    inset 0 0 0 1px rgba(148, 163, 184, 0.12),
    0 24px 52px rgba(15, 23, 42, 0.08);
}

.flow-segment {
  display: flex;
  align-items: center;
  gap: clamp(0.6rem, 2vw, 1.2rem);
}

.flow-node {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  min-width: clamp(96px, 18vw, 160px);
  padding: clamp(0.85rem, 2.2vw, 1.2rem) clamp(1rem, 2.8vw, 1.6rem);
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  color: #0f172a;
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition:
    transform 280ms ease,
    box-shadow 280ms ease,
    background 280ms ease,
    color 280ms ease;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
}

.flow-node:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(79, 70, 229, 0.18);
}

.flow-node.active {
  box-shadow: 0 20px 50px rgba(79, 70, 229, 0.28);
}

.flow-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.08);
  font-size: 0.95em;
  font-weight: 700;
}

.flow-node.active .flow-number {
  background: rgba(248, 250, 252, 0.2);
  color: #f8fafc;
}

.flow-segment.variant-3 .flow-node.active .flow-number,
.flow-segment.variant-4 .flow-node.active .flow-number {
  background: rgba(248, 250, 252, 0.65);
  color: #111827;
}

.flow-label {
  flex: 1;
  text-align: left;
  line-height: 1.3;
}

.flow-segment.variant-1 .flow-node,
.flow-segment.variant-2 .flow-node {
  background: linear-gradient(135deg, #4f46e5, #22d3ee);
  color: #f8fafc;
  box-shadow: 0 20px 46px rgba(76, 81, 191, 0.32);
}

.flow-segment.variant-1 .flow-number,
.flow-segment.variant-2 .flow-number {
  background: rgba(248, 250, 252, 0.18);
  color: rgba(248, 250, 252, 0.9);
}

.flow-segment.variant-3 .flow-node,
.flow-segment.variant-4 .flow-node {
  background: rgba(255, 255, 255, 0.92);
  color: #0f172a;
  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.08);
}

.flow-segment.variant-3 .flow-node.active,
.flow-segment.variant-4 .flow-node.active {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.12), rgba(56, 189, 248, 0.18));
}

.flow-segment.variant-3 .flow-number,
.flow-segment.variant-4 .flow-number {
  background: rgba(148, 163, 184, 0.15);
  color: #1f2937;
}

.flow-connector {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  width: clamp(3rem, 6vw, 4.2rem);
  height: clamp(1.4rem, 3.5vw, 2.1rem);
}

.flow-connector svg {
  width: 100%;
  height: 100%;
}

.carousel {
  position: relative;
  width: 100%;
  max-width: 1100px;
  /* Increase carousel height for larger visual area */
  height: clamp(440px, 68vh, 600px);
  perspective: 1400px;
}

.carousel::before {
  content: '';
  position: absolute;
  inset: auto;
  bottom: -120px;
  left: 50%;
  width: clamp(420px, 70%, 760px);
  height: 240px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(15, 23, 42, 0.18), transparent 70%);
  filter: blur(36px);
  z-index: 0;
}

.carousel-item {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 520ms cubic-bezier(0.22, 0.61, 0.36, 1),
    opacity 320ms ease,
    filter 320ms ease;
  will-change: transform;
}

.carousel-item img {
  /* Raise image size cap to scale with container */
  width: clamp(340px, 88%, 960px);
  max-height: 100%;
  border-radius: 20px;
  box-shadow: 0 40px 80px rgba(15, 23, 42, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.95);
}

.carousel-item.is-active {
  z-index: 3;
  transform: translateX(0) translateZ(120px) rotateY(0deg);
  filter: brightness(1);
}

.carousel-item.is-next {
  z-index: 2;
  transform: translateX(280px) translateZ(-160px) rotateY(-18deg) scale(0.82);
  filter: brightness(0.82);
  opacity: 0.9;
}

.carousel-item.is-prev {
  z-index: 1;
  transform: translateX(-280px) translateZ(-180px) rotateY(18deg) scale(0.78);
  filter: brightness(0.75);
  opacity: 0.85;
}

@media (max-width: 900px) {
  .flow-track {
    justify-content: stretch;
  }

  .flow-frame {
    flex-direction: column;
    align-items: stretch;
    gap: 0.85rem;
    border-radius: 32px;
  }

  .flow-node {
    border-radius: 16px;
    padding: 1rem 1.2rem;
    }

  .flow-number {
    width: 2rem;
    height: 2rem;
  }

  .flow-connector {
    display: none;
  }

  .carousel {
    /* Increase available height on medium screens */
    height: clamp(360px, 58vh, 480px);
  }

  .carousel-item.is-next {
    transform: translateX(160px) translateZ(-160px) rotateY(-16deg) scale(0.82);
  }

  .carousel-item.is-prev {
    transform: translateX(-160px) translateZ(-160px) rotateY(16deg) scale(0.82);
  }
}

@media (max-width: 640px) {
  .slide-shell {
    padding: 2rem;
  }

  .layout {
    gap: 1.6rem;
  }

  .carousel {
    /* Increase height on small screens for readability */
    height: clamp(300px, 62vh, 420px);
  }

  .carousel-item img {
    width: min(92vw, 520px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .flow-node,
  .carousel-item {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
