<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="centered-content">
      <h1>
              <span class="black-text">AI 做 PPT ≈ </span><span class="accent">构建网页</span>
            </h1>
      <div class="arrow-down">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M19 12L12 19L5 12" stroke="url(#gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stop-color="#ff6b6b" />
              <stop stop-color="#ffa726" offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="skill-grid">
        <div class="skill-card">
          <h2 class="skill-title accent">CODING</h2>
        </div>
        <div class="skill-card">
          <h2 class="skill-title accent">IN CONTEXT LEARNING</h2>
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
  padding: clamp(2.5rem, 7vw, 6rem);
  background: transparent;
}

.centered-content {
  text-align: center;
  width: 100%;
}

h1 {
  margin: 0;
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.black-text {
  color: #000000;
}

.accent {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  color: transparent;
  background-image: linear-gradient(120deg, #38bdf8, #a855f7, #34d399);
  background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
}

.arrow-down {
  margin: 2rem auto;
  animation: pulse 2s infinite ease-in-out;
  text-align: center;
}

.arrow-down svg {
  display: block;
  margin: 0 auto;
}

.skill-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  width: 100%;
}

.skill-card {
  text-align: center;
  min-width: 200px;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.skill-title {
  margin: 0;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  color: transparent;
  background-image: linear-gradient(120deg, #ff6b6b, #ffa726);
  -webkit-background-clip: text;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.skill-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  width: 100%;
}

.skill-card {
  text-align: center;
  min-width: 200px;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.skill-title {
  margin: 0 0 0.8rem 0;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  line-height: 1.2;
}

.skill-desc {
  margin: 0;
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: #e0e0e0;
  line-height: 1.5;
  opacity: 0.9;
}
</style>
