<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="content-wrapper">
      <header class="slide-headline">
        <h2><span class="headline-text">能驱动AI各层能力的人群划分</span></h2>
      </header>
      <div class="triangle-section-centered">
        <svg class="equilateral-triangle" viewBox="-100 0 900 692" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#2563eb;stop-opacity:0.3" />
              <stop offset="33%" style="stop-color:#3b82f6;stop-opacity:0.3" />
              <stop offset="66%" style="stop-color:#60a5fa;stop-opacity:0.3" />
              <stop offset="100%" style="stop-color:#93c5fd;stop-opacity:0.3" />
            </linearGradient>
          </defs>

          <g class="triangle-diagram" transform="translate(80, 0)">
            <!-- 大三角形背景 -->
            <path d="M 100 600 L 700 600 L 400 60 Z" fill="url(#triangleGradient)" stroke="rgba(59, 130, 246, 0.8)" stroke-width="6"/>

            <!-- 分层线 -->
            <line x1="200" y1="400" x2="600" y2="400" stroke="rgba(59, 130, 246, 0.6)" stroke-width="4"/>
            <line x1="300" y1="240" x2="500" y2="240" stroke="rgba(59, 130, 246, 0.6)" stroke-width="4"/>

            <!-- 用户头像 -->
            <!-- 顶层 - 1个用户 -->
            <g transform="translate(400, 150)">
              <circle r="25" fill="#1e40af" stroke="white" stroke-width="3"/>
              <circle cx="0" cy="-8" r="8" fill="white"/>
              <path d="M -12 5 Q -12 15 0 15 Q 12 15 12 5" fill="white"/>
            </g>

            <!-- 中层 - 3个用户 -->
            <g transform="translate(360, 320)">
              <circle r="20" fill="#3b82f6" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-6" r="6" fill="white"/>
              <path d="M -10 3 Q -10 12 0 12 Q 10 12 10 3" fill="white"/>
            </g>
            <g transform="translate(400, 310)">
              <circle r="20" fill="#3b82f6" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-6" r="6" fill="white"/>
              <path d="M -10 3 Q -10 12 0 12 Q 10 12 10 3" fill="white"/>
            </g>
            <g transform="translate(440, 320)">
              <circle r="20" fill="#3b82f6" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-6" r="6" fill="white"/>
              <path d="M -10 3 Q -10 12 0 12 Q 10 12 10 3" fill="white"/>
            </g>

            <!-- 底层 - 9个用户，排列成3行 -->
            <!-- 第一行 -->
            <g transform="translate(320, 470)">
              <circle r="18" fill="#60a5fa" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-5" r="5" fill="white"/>
              <path d="M -8 2 Q -8 10 0 10 Q 8 10 8 2" fill="white"/>
            </g>
            <g transform="translate(370, 470)">
              <circle r="18" fill="#60a5fa" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-5" r="5" fill="white"/>
              <path d="M -8 2 Q -8 10 0 10 Q 8 10 8 2" fill="white"/>
            </g>
            <g transform="translate(420, 470)">
              <circle r="18" fill="#60a5fa" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-5" r="5" fill="white"/>
              <path d="M -8 2 Q -8 10 0 10 Q 8 10 8 2" fill="white"/>
            </g>
            <g transform="translate(470, 470)">
              <circle r="18" fill="#60a5fa" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-5" r="5" fill="white"/>
              <path d="M -8 2 Q -8 10 0 10 Q 8 10 8 2" fill="white"/>
            </g>

            <!-- 第二行 -->
            <g transform="translate(345, 510)">
              <circle r="18" fill="#60a5fa" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-5" r="5" fill="white"/>
              <path d="M -8 2 Q -8 10 0 10 Q 8 10 8 2" fill="white"/>
            </g>
            <g transform="translate(395, 510)">
              <circle r="18" fill="#60a5fa" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-5" r="5" fill="white"/>
              <path d="M -8 2 Q -8 10 0 10 Q 8 10 8 2" fill="white"/>
            </g>
            <g transform="translate(445, 510)">
              <circle r="18" fill="#60a5fa" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-5" r="5" fill="white"/>
              <path d="M -8 2 Q -8 10 0 10 Q 8 10 8 2" fill="white"/>
            </g>

            <!-- 第三行 -->
            <g transform="translate(370, 550)">
              <circle r="18" fill="#60a5fa" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-5" r="5" fill="white"/>
              <path d="M -8 2 Q -8 10 0 10 Q 8 10 8 2" fill="white"/>
            </g>
            <g transform="translate(420, 550)">
              <circle r="18" fill="#60a5fa" stroke="white" stroke-width="2"/>
              <circle cx="0" cy="-5" r="5" fill="white"/>
              <path d="M -8 2 Q -8 10 0 10 Q 8 10 8 2" fill="white"/>
            </g>
          </g>

          <g class="triangle-labels" transform="translate(-60, 0)">
            <!-- 文字标签 -->
            <text x="0" y="170" text-anchor="start" fill="rgba(37, 99, 235, 0.9)" font-size="36" font-weight="600" font-family="system-ui, -apple-system, sans-serif">Coding &amp; In Context Learning</text>
            <text x="0" y="330" text-anchor="start" fill="rgba(37, 99, 235, 0.9)" font-size="36" font-weight="600" font-family="system-ui, -apple-system, sans-serif">Tools</text>
            <text x="0" y="500" text-anchor="start" fill="rgba(37, 99, 235, 0.9)" font-size="36" font-weight="600" font-family="system-ui, -apple-system, sans-serif">Chatbot</text>
          </g>
        </svg>
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
  padding: clamp(2rem, 5vw, 4rem);
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(1.5rem, 4vw, 2.5rem);
  width: min(100%, 1000px);
  height: min(80vh, 600px);
}

.slide-headline {
  text-align: center;
}

.slide-headline h2 {
  margin: 0;
  font-size: clamp(2.6rem, 6vw, 3.6rem);
  font-weight: 780;
  letter-spacing: -0.025em;
  color: #0f172a;
}

.headline-text {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.45em;
  padding: 0.4em 1.6em;
  border-radius: 9999px;
  background: linear-gradient(120deg, rgba(226, 232, 240, 0.82), rgba(191, 219, 254, 0.78));
  box-shadow: 0 22px 42px rgba(79, 70, 229, 0.18);
}

.headline-text::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(37, 99, 235, 0.2);
  pointer-events: none;
}

.triangle-section-centered {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.equilateral-triangle {
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 692px;
}

@media (max-width: 768px) {
  .triangle-section-centered {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .slide-shell {
    padding: 1rem;
  }

  .triangle-section-centered {
    height: 250px;
  }
}
</style>
