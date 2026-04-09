import type { ThemeDefinition } from './types'

const TOKEN_PREFIX = '--'

export const applyThemeToDocument = (theme: ThemeDefinition) => {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.dataset.theme = theme.id

  for (const [token, value] of Object.entries(theme.tokens)) {
    root.style.setProperty(`${TOKEN_PREFIX}${token}`, value)
  }
}
