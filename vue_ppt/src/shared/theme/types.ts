export type ThemeId = 'light' | 'dark' | (string & {})

export type ThemeToken =
  | 'surface'
  | 'surface-muted'
  | 'text-primary'
  | 'text-muted'
  | 'accent'
  | 'border'
  | 'highlight'

export interface ThemeDefinition {
  id: ThemeId
  name: string
  description: string
  tokens: Record<ThemeToken, string>
}
