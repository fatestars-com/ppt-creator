<template>
  <Teleport to="body">
    <div
      v-if="visible"
      ref="overlayRef"
      class="background-settings-overlay"
      tabindex="-1"
      @keydown="handleKeyDown"
    >
      <div class="settings-panel">
        <header class="settings-header">
          <div>
            <h2>背景设置</h2>
            <p>
              <span v-if="isMac">使用 ⌘ + ⇧ + P 呼出/隐藏，Esc 关闭。</span>
              <span v-else>使用 Ctrl + Shift + P 呼出/隐藏，Esc 关闭。</span>
            </p>
          </div>
          <button class="close-btn" type="button" @click="emit('close')">×</button>
        </header>

        <div class="preferences-wrapper">
          <section class="preference-section" aria-label="语言">
            <div class="section-heading">
              <h3>语言</h3>
              <p>切换演示文案的显示语言。</p>
            </div>
            <div class="choice-row">
              <button
                v-for="localeItem in locales"
                :key="localeItem.code"
                type="button"
                class="pill-button"
                :class="{ active: localeItem.code === selectedLocale }"
                :aria-pressed="localeItem.code === selectedLocale"
                @click="selectLocale(localeItem.code)"
              >
                <span class="pill-title">{{ localeItem.nativeLabel }}</span>
                <span class="pill-description">{{ localeItem.label }}</span>
              </button>
            </div>
          </section>
        </div>

        <div class="background-grid">
          <button
            v-for="background in backgrounds"
            :key="background.id"
            type="button"
            class="background-card"
            :class="{ active: background.id === selectedId }"
            @click="selectBackground(background.id)"
          >
            <div class="card-header">
              <h3>{{ background.name }}</h3>
              <span v-if="background.tags?.length" class="tags">{{ background.tags.join(' / ') }}</span>
            </div>
            <p class="description">{{ background.description }}</p>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import type { BackgroundModuleMeta } from './types'
import type { LocaleMeta, LocaleCode } from '../i18n/types'

const props = defineProps<{
  visible: boolean
  backgrounds: BackgroundModuleMeta[]
  selectedId: string
  locales: LocaleMeta[]
  selectedLocale: LocaleCode
}>()

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'select', id: string): void
  (event: 'select-locale', code: LocaleCode): void
}>()

const overlayRef = ref<HTMLDivElement | null>(null)
const isMac = /Mac|iPod|iPhone|iPad/.test(window.navigator.platform)

const focusOverlay = () => {
  if (!props.visible) return
  nextTick(() => overlayRef.value?.focus())
}

watch(
  () => props.visible,
  () => focusOverlay()
)

const handleFocusIn = (event: FocusEvent) => {
  if (!props.visible) return
  if (overlayRef.value && !overlayRef.value.contains(event.target as Node)) {
    focusOverlay()
  }
}

onMounted(() => {
  document.addEventListener('focusin', handleFocusIn)
})

onBeforeUnmount(() => {
  document.removeEventListener('focusin', handleFocusIn)
})

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    emit('close')
  }
}

const selectBackground = (id: string) => {
  emit('select', id)
}

const selectLocale = (code: LocaleCode) => {
  emit('select-locale', code)
}
</script>

<style scoped>
.background-settings-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 12, 24, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4000;
  outline: none;
}

.settings-panel {
  width: min(900px, 90vw);
  max-height: 80vh;
  background: rgba(16, 18, 32, 0.92);
  border-radius: 24px;
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.settings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: #f5f7ff;
  gap: 24px;
}

.settings-header h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.settings-header p {
  margin: 8px 0 0;
  font-size: 14px;
  color: rgba(245, 247, 255, 0.65);
}

.close-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: #f5f7ff;
  background: rgba(255, 255, 255, 0.08);
  transition: background 0.25s ease, transform 0.25s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.16);
  transform: scale(1.05);
}

.preferences-wrapper {
  display: grid;
  gap: 24px;
  padding: 24px 28px 0;
}

.preference-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #e2e7ff;
}

.section-heading h3 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.section-heading p {
  margin: 6px 0 0;
  font-size: 0.8rem;
  color: rgba(226, 231, 255, 0.6);
}

.choice-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.pill-button {
  flex: 1 1 180px;
  min-width: 150px;
  padding: 12px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #f5f7ff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.pill-button:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}

.pill-button.active {
  border-color: rgba(129, 140, 248, 0.9);
  background: rgba(129, 140, 248, 0.2);
  box-shadow: 0 12px 30px rgba(129, 140, 248, 0.35);
}

.pill-title {
  font-size: 0.95rem;
  font-weight: 600;
}

.pill-description {
  font-size: 0.78rem;
  color: rgba(245, 247, 255, 0.7);
}

.background-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  padding: 24px 28px 32px;
  overflow-y: auto;
}

.background-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid transparent;
  border-radius: 16px;
  padding: 18px 20px;
  text-align: left;
  cursor: pointer;
  color: #f5f7ff;
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}

.background-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.background-card.active {
  border-color: rgba(102, 126, 234, 0.75);
  background: rgba(102, 126, 234, 0.16);
}

.card-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.card-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.tags {
  font-size: 12px;
  color: rgba(245, 247, 255, 0.6);
}

.description {
  margin: 0;
  line-height: 1.5;
  color: rgba(245, 247, 255, 0.7);
  font-size: 14px;
}

@media (max-width: 640px) {
  .settings-panel {
    border-radius: 16px;
  }

  .settings-header {
    padding: 18px 20px;
  }

  .background-grid {
    padding: 18px 20px 24px;
  }
}
</style>
