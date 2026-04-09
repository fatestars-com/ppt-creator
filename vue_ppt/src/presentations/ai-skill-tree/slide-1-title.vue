<script setup lang="ts">
defineProps<{ isActive?: boolean; isPreview?: boolean }>()
</script>

<template>
  <section class="slide-shell">
    <div class="title-block">
      <div class="title-frame">
        <div class="title-top">
          你不是在学做<span class="title-top-strong">PPT</span>
        </div>

        <div class="title-vertical">
          <div class="vertical-block">
            <span class="vertical-char">你</span>
            <span class="vertical-char">是</span>
            <span class="vertical-char">在</span>
            <div class="vertical-emphasis">
              <span>点</span>
              <span>亮</span>
            </div>
          </div>
        </div>

        <div class="title-highlight">AI的隐藏技能树</div>
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
  padding: clamp(3rem, 8vw, 7rem);
  background: radial-gradient(120% 140% at 85% 10%, rgba(248, 113, 113, 0.18), transparent 55%),
    radial-gradient(90% 120% at 10% 90%, rgba(59, 130, 246, 0.12), transparent 60%),
    #edf2f7;
}

.title-block {
  position: relative;
  max-width: min(92vw, 1240px);
  padding: clamp(2.8rem, 6vw, 4.8rem) clamp(3rem, 7vw, 5.5rem);
  border-radius: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.72));
  box-shadow: 0 40px 90px rgba(15, 23, 42, 0.18);
  overflow: hidden;
}

.title-block::before,
.title-block::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.title-block::before {
  inset: -55% 35% 40% -45%;
  background: linear-gradient(120deg, rgba(252, 165, 165, 0.42), rgba(252, 165, 165, 0));
  transform: rotate(-6deg);
  filter: blur(0.5px);
}

.title-block::after {
  inset: 20% -30% -45% 55%;
  background: radial-gradient(60% 80% at 50% 50%, rgba(15, 23, 42, 0.12), transparent 75%);
  transform: rotate(8deg);
  mix-blend-mode: multiply;
}

.title-frame {
  position: relative;
  display: grid;
  grid-template-columns: minmax(3rem, clamp(4rem, 6vw, 6rem)) 1fr;
  grid-template-rows: auto auto;
  column-gap: clamp(1.5rem, 3.5vw, 3.5rem);
  row-gap: clamp(1rem, 2.4vw, 2.4rem);
  align-items: start;
  z-index: 1;
}

.title-top {
  grid-column: 2;
  font-size: clamp(3rem, 7vw, 5.4rem);
  font-weight: 900;
  letter-spacing: -0.045em;
  color: rgba(15, 23, 42, 0.92);
  line-height: 1.08;
  text-align: left;
}

.title-top-strong {
  font-weight: 900;
}

.title-vertical {
  grid-row: 1 / span 2;
  grid-column: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
  padding-top: clamp(0.1rem, 0.5vw, 0.3rem);
  padding-left: clamp(0.3rem, 0.8vw, 0.6rem);
  font-weight: 800;
  color: rgba(15, 23, 42, 0.84);
  text-align: center;
}

.title-vertical::before {
  display: none;
}

.vertical-char {
  display: block;
  font-size: clamp(2.2rem, 5.2vw, 3.2rem);
  letter-spacing: 0.06em;
  text-align: center;
  color: white;
}

.vertical-block {
  display: flex;
  flex-direction: column;
  padding: clamp(0.8rem, 1.6vw, 1.2rem) clamp(0.8rem, 1.6vw, 1.2rem);
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.85));
  border-radius: clamp(0.6rem, 1.2vw, 1rem);
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.25);
  gap: 0;
}

.vertical-emphasis {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.1rem, 0.2vw, 0.15rem);
  margin-top: clamp(0.2rem, 0.4vw, 0.3rem);
  font-size: clamp(3rem, 7vw, 4.4rem);
  letter-spacing: 0.05em;
  text-align: center;
}

.vertical-emphasis span {
  padding: clamp(0.3rem, 0.6vw, 0.5rem) clamp(0.4rem, 0.8vw, 0.6rem);
  margin: clamp(0.05rem, 0.1vw, 0.08rem) 0;
  background: linear-gradient(135deg, #f97316 0%, #ec4899 60%, #ef4444 100%);
  color: white;
  border-radius: clamp(0.4rem, 0.8vw, 0.6rem);
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.35);
  text-shadow: none;
}

.title-highlight {
  grid-row: 2;
  grid-column: 2;
  align-self: center;
  font-size: clamp(4rem, 12vw, 8.4rem);
  font-weight: 900;
  letter-spacing: -0.06em;
  color: #e11d48;
  line-height: 0.94;
  white-space: nowrap;
  margin-top: clamp(-2.5rem, -4vw, -2rem);
  margin-left: clamp(-1.5rem, -2.5vw, -1rem);
}

@media (max-width: 1024px) {
  .title-frame {
    grid-template-columns: minmax(3.2rem, clamp(3.8rem, 10vw, 6rem)) 1fr;
  }

  .title-block {
    padding: clamp(2.4rem, 7vw, 4rem) clamp(2.4rem, 6vw, 4.5rem);
  }
}

@media (max-width: 768px) {
  .title-block {
    padding: clamp(2rem, 6vw, 3.2rem);
  }

  .title-frame {
    grid-template-columns: minmax(2.8rem, clamp(3.4rem, 12vw, 5rem)) 1fr;
    row-gap: clamp(1rem, 3vw, 2.4rem);
  }

  .title-top {
    font-size: clamp(2.6rem, 9vw, 4.4rem);
  }

  .title-highlight {
    font-size: clamp(3.6rem, 16vw, 6.4rem);
  }
}
</style>
