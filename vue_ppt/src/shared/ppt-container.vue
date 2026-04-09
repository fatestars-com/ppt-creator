<template>
  <div class="ppt-container" @keydown="handleKeyDown" tabindex="0">
    <!-- 幻灯片内容区域 -->
    <div class="slides-viewport">
      <div 
        class="slide-wrapper"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ active: currentSlide === index }"
        >
          <component :is="slide" :isActive="currentSlide === index" />
        </div>
      </div>
    </div>

    <!-- 控制栏 -->
    <div class="controls">
      <button 
        @click="previousSlide" 
        :disabled="currentSlide === 0"
        class="control-btn"
      >
        ←
      </button>
      
      <div class="slide-info">
        {{ currentSlide + 1 }} / {{ slides.length }}
      </div>
      
      <button 
        @click="nextSlide" 
        :disabled="currentSlide === slides.length - 1"
        class="control-btn"
      >
        →
      </button>
    </div>

    <!-- 进度条 -->
    <div class="progress-bar">
      <div 
        class="progress" 
        :style="{ width: `${((currentSlide + 1) / slides.length) * 100}%` }"
      ></div>
    </div>

    <!-- 缩略图面板 -->
    <div class="thumbnails" v-show="showThumbnails">
      <div class="thumbnails-header">
        <h3>{{ thumbnailsLabel }}</h3>
        <button @click="showThumbnails = false">✕</button>
      </div>
      <div class="thumbnails-grid">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="thumbnail"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        >
          <div class="thumbnail-number">{{ index + 1 }}</div>
          <div class="thumbnail-preview">
            <div class="thumb-placeholder">
              <span class="thumb-title">{{ slideTitles[index] || '幻灯片 ' + (index + 1) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'PPT演示'
  },
  thumbnailsLabel: {
    type: String,
    default: '幻灯片预览'
  },
  slideTitles: {
    type: Array,
    default: () => []
  }
})

const currentSlide = ref(0)
const showThumbnails = ref(false)
const NAVIGATION_COOLDOWN = 250
let lastNavigationAt = 0

const getTimestamp = () => (typeof performance !== 'undefined' ? performance.now() : Date.now())

const nextSlide = () => {
  const now = getTimestamp()
  if (now - lastNavigationAt < NAVIGATION_COOLDOWN) {
    return
  }
  if (currentSlide.value < props.slides.length - 1) {
    currentSlide.value++
    lastNavigationAt = now
  }
}

const previousSlide = () => {
  const now = getTimestamp()
  if (now - lastNavigationAt < NAVIGATION_COOLDOWN) {
    return
  }
  if (currentSlide.value > 0) {
    currentSlide.value--
    lastNavigationAt = now
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
  showThumbnails.value = false
  lastNavigationAt = getTimestamp()
}

const handleKeyDown = (event) => {
  if (event.repeat) {
    event.preventDefault()
    return
  }
  switch (event.key) {
    case 'ArrowRight':
    case ' ':
      event.preventDefault()
      nextSlide()
      break
    case 'ArrowLeft':
      event.preventDefault()
      previousSlide()
      break
    case 'Home':
      event.preventDefault()
      currentSlide.value = 0
      break
    case 'End':
      event.preventDefault()
      currentSlide.value = props.slides.length - 1
      break
    case 'Escape':
      event.preventDefault()
      showThumbnails.value = !showThumbnails.value
      break
  }
}

onMounted(() => {
  document.title = props.title
  // 自动获取焦点以支持键盘导航
  const container = document.querySelector('.ppt-container')
  if (container) {
    container.focus()
  }
})
</script>

<style scoped>
.ppt-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
  outline: none;
}

.slides-viewport {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  flex: 0 0 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.controls {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 12px 24px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.control-btn {
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.control-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.slide-info {
  color: white;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
  font-size: 14px;
}

.progress-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.thumbnails {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 280px;
  max-height: 80vh;
  background: rgba(0, 0, 0, 0.95);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  z-index: 2000;
  overflow: hidden;
}

.thumbnails-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.thumbnails-header h3 {
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.thumbnails-header button {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.thumbnails-header button:hover {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
}

.thumbnails-grid {
  padding: 12px;
  max-height: calc(80vh - 52px);
  overflow-y: auto;
  background: transparent;
}

.thumbnails-grid::-webkit-scrollbar {
  width: 4px;
}

.thumbnails-grid::-webkit-scrollbar-track {
  background: transparent;
}

.thumbnails-grid::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.thumbnail {
  width: 100%;
  height: 120px;
  margin-bottom: 12px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.thumbnail:hover {
  background: rgba(255, 255, 255, 0.04);
  transform: scale(1.02);
}

.thumbnail.active {
  background: rgba(220, 38, 38, 0.2);
  border: 1px solid rgba(220, 38, 38, 0.5);
}

.thumbnail-number {
  position: absolute;
  top: 6px;
  left: 6px;
  background: rgba(220, 38, 38, 0.8);
  color: white;
  padding: 2px 7px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 700;
  z-index: 10;
  letter-spacing: 0.02em;
}

.thumb-placeholder {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  border-radius: 4px;
  padding: 8px 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.thumb-title {
  color: rgba(255, 255, 255, 0.75);
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
  .thumbnails {
    width: calc(100vw - 40px);
    right: 20px;
  }
  
  .controls {
    padding: 10px 16px;
    gap: 15px;
  }
  
  .control-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
