import { useState, useEffect, type ReactNode } from 'react'
import { LanguageContext, type Language } from './LanguageContext'
import type { LocalizedString } from '../types'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('nopal_lang') as Language
      if (saved === 'id' || saved === 'en') {
        return saved
      }
    } catch {
      // ignore
    }
    return 'id'
  })

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('nopal_lang', newLang)
    } catch {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang
    }
  }

  const toggleLang = () => {
    setLang(lang === 'id' ? 'en' : 'id')
  }

  const t = (value: LocalizedString): string => {
    if (!value) return ''
    if (typeof value === 'string') return value
    return value[lang] || value.id || ''
  }

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
