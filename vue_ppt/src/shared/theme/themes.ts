import type { ThemeDefinition } from './types'

export const themeRegistry: ThemeDefinition[] = [
  {
    id: 'light',
    name: 'Daylight',
    description: '明亮配色，适合光线充足的演示环境。',
    tokens: {
      surface: '255 255 255',
      'surface-muted': '248 250 252',
      'text-primary': '15 23 42',
      'text-muted': '71 85 105',
      accent: '79 70 229',
      border: '148 163 184',
      highlight: '252 211 77'
    }
  },
  {
    id: 'dark',
    name: 'Midnight',
    description: '深色配色，适用于暗房或灯光昏暗的场景。',
    tokens: {
      surface: '17 24 39',
      'surface-muted': '30 41 59',
      'text-primary': '226 232 240',
      'text-muted': '148 163 184',
      accent: '129 140 248',
      border: '71 85 105',
      highlight: '253 224 71'
    }
  }
]
