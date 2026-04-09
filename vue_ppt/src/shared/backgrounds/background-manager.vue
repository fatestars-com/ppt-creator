<template>
  <div class="background-manager" aria-hidden="true">
    <component v-if="activeBackgroundComponent" :is="activeBackgroundComponent" />
    <BackgroundSettingsOverlay
      :visible="settingsOpen"
      :backgrounds="backgrounds"
      :selected-id="selectedBackgroundId"
      :locales="locales"
      :selected-locale="selectedLocale"
      @close="closeSettings"
      @select="handleBackgroundSelection"
      @select-locale="handleLocaleSelection"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import BackgroundSettingsOverlay from './background-settings-overlay.vue'
import { usePresentationContext } from '../presentation/presentation-context'
import type { LocaleCode } from '../i18n/types'

const emit = defineEmits<{
  (event: 'change', id: string): void
  (event: 'change:locale', locale: LocaleCode): void
  (event: 'open-settings'): void
  (event: 'close-settings'): void
}>()

const presentation = usePresentationContext()

const settingsOpen = ref(false)

const backgrounds = computed(() => presentation.backgrounds)
const locales = computed(() => presentation.locales)
const selectedBackgroundId = computed(() => presentation.state.backgroundId)
const selectedLocale = computed(() => presentation.state.locale)

const activeBackgroundComponent = computed(() => {
  const background = presentation.activeBackground.value
  if (!background) return null
  return background.component
})

const openSettings = () => {
  if (settingsOpen.value) return
  settingsOpen.value = true
  emit('open-settings')
}

const closeSettings = () => {
  if (!settingsOpen.value) return
  settingsOpen.value = false
  emit('close-settings')
}

const handleKeydown = (event: KeyboardEvent) => {
  const isMac = /Mac|iPod|iPhone|iPad/.test(window.navigator.platform)
  const ctrlOrMeta = isMac ? event.metaKey : event.ctrlKey

  if (event.key.toLowerCase() === 'p' && ctrlOrMeta && event.shiftKey && !event.altKey) {
    event.preventDefault()
    settingsOpen.value ? closeSettings() : openSettings()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown, true)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown, true)
})

const handleBackgroundSelection = (id: string) => {
  presentation.setBackground(id)
  emit('change', selectedBackgroundId.value)
  closeSettings()
}

const handleLocaleSelection = (locale: LocaleCode) => {
  presentation.setLocale(locale)
  emit('change:locale', selectedLocale.value)
}
</script>

<style scoped>
.background-manager {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
</style>
