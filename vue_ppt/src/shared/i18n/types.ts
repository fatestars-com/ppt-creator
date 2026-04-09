export type LocaleCode = string & {}

export interface LocaleMeta {
  code: LocaleCode
  label: string
  nativeLabel: string
  direction?: 'ltr' | 'rtl'
}

export type LocaleMessages = Record<string, string | LocaleMessages>

export type TranslationParams = Record<string, string | number>
