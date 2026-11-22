import { createContext } from 'react'
import type { LocalizedString } from '../types'

export type Language = 'id' | 'en'

export interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  t: (value: LocalizedString) => string
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
