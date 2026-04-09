import type { Component } from 'vue'
import type { ThemeId } from '../theme/types'

export type BackgroundThemeVariantMap = Partial<Record<ThemeId, Component>>

export interface BackgroundModuleMeta {
  id: string
  name: string
  description: string
  component: Component
  tags?: string[]
  supportsTheme?: boolean
  variants?: BackgroundThemeVariantMap
}
