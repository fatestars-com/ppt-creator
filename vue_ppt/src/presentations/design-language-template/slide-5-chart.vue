<script setup lang="ts">
import { computed } from 'vue'

defineProps<{ isActive?: boolean; isPreview?: boolean }>()

const labels = ['阶段 A', '阶段 B', '阶段 C', '阶段 D', '阶段 E']

const rawSeries = [
  {
    name: '示例策略',
    gradientId: 'lineGradientA',
    cssGradient: 'linear-gradient(120deg, #6366f1, #8b5cf6, #34d399)',
    values: [32, 48, 55, 62, 72],
    delay: 0
  },
  {
    name: '对照方案',
    gradientId: 'lineGradientB',
    cssGradient: 'linear-gradient(120deg, #38bdf8, #60a5fa, #a855f7)',
    values: [28, 36, 44, 53, 60],
    delay: 150
  }
] as const

const barSeries = {
  name: '体量参考',
  gradientId: 'barGradient',
  cssGradient: 'linear-gradient(180deg, rgba(129, 140, 248, 0.9), rgba(56, 189, 248, 0.75))',
  values: [40, 52, 58, 64, 70]
} as const

const width = 640
const height = 360
const padding = { top: 40, right: 40, bottom: 60, left: 64 }
const plotWidth = width - padding.left - padding.right
const plotHeight = height - padding.top - padding.bottom

const maxValue = Math.max(
  ...rawSeries.flatMap(series => series.values),
  ...barSeries.values
) * 1.1

const stepX = plotWidth / (labels.length - 1)

const yFor = (value: number) => padding.top + (plotHeight - (value / maxValue) * plotHeight)
const xFor = (index: number) => padding.left + index * stepX

const chartSeries = computed(() =>
  rawSeries.map(series => {
    const points = series.values.map((value, index) => ({
      x: xFor(index),
      y: yFor(value),
      value
    }))
    const d = points
      .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
      .join(' ')
    return {
      ...series,
      points,
      path: d
    }
  })
)

const guideLines = computed(() => {
  const divisions = 4
  const lines = [] as { y: number; label: string }[]
  for (let i = 0; i <= divisions; i++) {
    const value = (maxValue / divisions) * i
    lines.push({ y: yFor(value), label: `${Math.round(value)}` })
  }
  return lines
})

const barWidth = stepX * 0.5

const barRects = computed(() =>
  barSeries.values.map((value, index) => {
    const scaledHeight = (value / maxValue) * plotHeight
    const y = padding.top + (plotHeight - scaledHeight)
    const x = xFor(index) - barWidth / 2
    return {
      x,
      y,
      height: scaledHeight,
      label: labels[index],
      value
    }
  })
)

const legendEntries = computed(() => [barSeries, ...chartSeries.value])
</script>

<template>
  <section class="slide-shell">
    <div class="chart-frame">
      <header class="chart-header">
        <h3>趋势对比（示例）</h3>
        <p>纯 SVG 绘制的线图，展示不同方案的趋势变化。数据为占位。</p>
      </header>

      <div class="chart-body">
        <svg :viewBox="`0 0 ${width} ${height}`" role="img" aria-label="示例折线图">
          <defs>
            <linearGradient id="lineGradientA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#6366f1" />
              <stop offset="50%" stop-color="#8b5cf6" />
              <stop offset="100%" stop-color="#34d399" />
            </linearGradient>
            <linearGradient id="lineGradientB" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#a855f7" />
            </linearGradient>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(129, 140, 248, 0.95)" />
              <stop offset="100%" stop-color="rgba(56, 189, 248, 0.7)" />
            </linearGradient>
          </defs>

          <!-- 背景 -->
          <rect x="0" y="0" :width="width" :height="height" rx="32" class="chart-surface" />

          <!-- 横向网格线 -->
          <g class="grid-lines">
            <line
              v-for="(line, idx) in guideLines"
              :key="idx"
              :x1="padding.left"
              :x2="width - padding.right"
              :y1="line.y"
              :y2="line.y"
            />
          </g>

          <!-- Y 轴标签 -->
          <g class="axis-labels y-axis">
            <text
              v-for="(line, idx) in guideLines"
              :key="`y-${idx}`"
              :x="padding.left - 16"
              :y="line.y + 4"
            >
              {{ line.label }}
            </text>
          </g>

          <!-- X 轴标签 -->
          <g class="axis-labels x-axis">
            <text
              v-for="(label, idx) in labels"
              :key="`x-${idx}`"
              :x="xFor(idx)"
              :y="height - padding.bottom + 28"
            >
              {{ label }}
            </text>
          </g>

          <!-- 柱状图 -->
          <g class="bar-group">
            <rect
              v-for="(bar, idx) in barRects"
              :key="`bar-${idx}`"
              class="chart-bar"
              :x="bar.x"
              :width="barWidth"
              :y="bar.y"
              :height="bar.height"
              fill="url(#barGradient)"
              rx="8"
            >
              <animate attributeName="y" :from="padding.top + plotHeight" :to="bar.y" dur="0.6s" :begin="(idx * 0.08) + 's'" fill="freeze" />
              <animate attributeName="height" from="0" :to="bar.height" dur="0.6s" :begin="(idx * 0.08) + 's'" fill="freeze" />
            </rect>
          </g>

          <!-- 折线 -->
          <g class="series-group">
            <template v-for="(series, si) in chartSeries" :key="series.name">
              <path
                class="chart-line"
                :class="[`delay-${si}`]"
                :d="series.path"
                :stroke="`url(#${series.gradientId})`"
                pathLength="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                v-for="(point, pi) in series.points"
                :key="`${series.name}-${pi}`"
                class="chart-dot"
                :cx="point.x"
                :cy="point.y"
                r="6"
                :fill="`url(#${series.gradientId})`"
              >
                <animate
                  attributeName="r"
                  values="0;6;6"
                  dur="0.8s"
                  :begin="`${0.2 + pi * 0.08}s`"
                  fill="freeze"
                />
              </circle>
            </template>
          </g>
        </svg>
      </div>

      <footer class="chart-footer">
        <div class="legend" v-for="(entry, si) in legendEntries" :key="`legend-${entry.name}`">
          <span class="legend-chip" :style="{ backgroundImage: entry.cssGradient }"></span>
          <span class="legend-label">{{ entry.name }}</span>
        </div>
      </footer>
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
  padding: clamp(1.5rem, 4vw, 4rem);
}

.chart-frame {
  width: min(960px, 100%);
  border-radius: 32px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.25);
  backdrop-filter: blur(18px);
  box-shadow: 0 40px 100px -40px rgba(15, 23, 42, 0.35);
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.5rem);
}

.chart-header h3 {
  margin: 0;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: rgb(30, 41, 59);
}

.chart-header p {
  margin: 0.5rem 0 0;
  color: rgba(71, 85, 105, 0.8);
  font-size: 0.95rem;
}

.chart-body svg {
  width: 100%;
  height: auto;
}

.chart-surface {
  fill: rgba(248, 250, 252, 0.65);
  stroke: rgba(148, 163, 184, 0.2);
}

.bar-group {
  transform-origin: center;
}

.chart-bar {
  filter: drop-shadow(0 16px 28px rgba(15, 23, 42, 0.18));
}

.grid-lines line {
  stroke: rgba(148, 163, 184, 0.3);
  stroke-dasharray: 6 10;
}

.axis-labels text {
  fill: rgba(71, 85, 105, 0.7);
  font-size: 0.75rem;
  text-anchor: middle;
}

.y-axis text {
  text-anchor: end;
  dominant-baseline: middle;
}

.x-axis text {
  dominant-baseline: hanging;
}

.chart-line {
  fill: none;
  stroke-width: 4;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw-line 1.2s ease forwards;
}

.chart-line.delay-1 {
  animation-delay: 0.2s;
}

.chart-dot {
  filter: drop-shadow(0 4px 12px rgba(99, 102, 241, 0.35));
}

.chart-footer {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: rgba(30, 41, 59, 0.85);
}

.legend {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-chip {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 6px;
  background-size: 100% 100%;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
}

.legend-label {
  font-weight: 600;
}

@keyframes draw-line {
  to {
    stroke-dashoffset: 0;
  }
}

@media (max-width: 768px) {
  .chart-frame {
    padding: 1.5rem;
  }

  .chart-header h3 {
    font-size: 1.4rem;
  }

  .chart-footer {
    justify-content: center;
  }
}
</style>
