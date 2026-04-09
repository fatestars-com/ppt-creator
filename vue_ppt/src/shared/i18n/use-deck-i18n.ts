import { computed } from 'vue'
import type { Ref } from 'vue'
import type { LocaleCode, LocaleMessages, TranslationParams } from './types'

interface UseDeckI18nOptions {
  locale: Ref<LocaleCode>
  fallbackLocale: LocaleCode
}

const deckLocaleModules = {
  ...import.meta.glob('../../locales/*/deck-*.json', {
    eager: true
  }),
  ...import.meta.glob('../../presentations/*/locales/*.json', {
    eager: true
  })
} as Record<string, { default: LocaleMessages }>

const resolveNested = (messages: LocaleMessages | undefined, segments: string[]): string | undefined => {
  if (!messages) return undefined
  let current: LocaleMessages | string | undefined = messages
  for (const segment of segments) {
    if (typeof current === 'string') return undefined
    current = current[segment] as LocaleMessages | string | undefined
    if (current === undefined) return undefined
  }
  return typeof current === 'string' ? current : undefined
}

const interpolate = (value: string, params?: TranslationParams): string => {
  if (!params) return value
  return value.replace(/\{(\w+)\}/g, (_, token: string) => {
    const replacement = params[token]
    return replacement !== undefined ? String(replacement) : `{${token}}`
  })
}

export const useDeckI18n = (deckId: string, options: UseDeckI18nOptions) => {
  const { locale, fallbackLocale } = options
  const messagesByLocale: Record<LocaleCode, LocaleMessages> = {}

  for (const [path, module] of Object.entries(deckLocaleModules)) {
    const legacyMatch = path.match(/locales\/([^/]+)\/deck-([^./]+)\.json$/)
    const colocatedMatch = path.match(/presentations\/([^/]+)\/locales\/([^/.]+)\.json$/)

    const localeCode = legacyMatch?.[1] ?? colocatedMatch?.[2]
    const matchedDeckId = legacyMatch?.[2] ?? colocatedMatch?.[1]

    if (!localeCode || !matchedDeckId || matchedDeckId !== deckId) continue
    messagesByLocale[localeCode as LocaleCode] = module.default
  }

  const missingWarnings = new Set<string>()

  const hasLocale = (code: LocaleCode) => Boolean(messagesByLocale[code])

  const currentLocale = computed((): LocaleCode => {
    if (hasLocale(locale.value)) return locale.value
    return hasLocale(fallbackLocale) ? fallbackLocale : (Object.keys(messagesByLocale)[0] as LocaleCode)
  })

  const translate = (key: string, params?: TranslationParams): string => {
    const segments = key.split('.')
    const active = resolveNested(messagesByLocale[currentLocale.value], segments)
    if (active) {
      return interpolate(active, params)
    }

    const fallback = resolveNested(messagesByLocale[fallbackLocale], segments)
    if (fallback) {
      if (import.meta.env.DEV) {
        const warningKey = `${currentLocale.value}:${key}`
        if (!missingWarnings.has(warningKey)) {
          console.warn(`Missing translation for "${key}" in locale "${currentLocale.value}"; using fallback.`)
          missingWarnings.add(warningKey)
        }
      }
      return interpolate(fallback, params)
    }

    if (import.meta.env.DEV) {
      const warningKey = `missing:${key}`
      if (!missingWarnings.has(warningKey)) {
        console.warn(`Translation key "${key}" missing in deck "${deckId}".`)
        missingWarnings.add(warningKey)
      }
    }
    return `??${key}??`
  }

  return {
    t: translate,
    currentLocale,
    hasLocale,
    messagesByLocale
  }
}
