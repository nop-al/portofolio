import { useState, useEffect } from 'react'
import { useLanguage } from '../context/useLanguage'
import { translations } from '../data/translations'
import perusahaanData from '../data/perusahaan.json'
import type { Company } from '../types'

// Hanya bernilai true jika ada data perusahaan dengan nama valid
const hasPartners =
  Array.isArray(perusahaanData) &&
  (perusahaanData as Company[]).some(
    (c) => Boolean(c && typeof c.name === 'string' && c.name.trim().length > 0)
  )

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header className="navbar-wrapper">
      <div className="navbar">
        <a href="#top" className="logo" aria-label="Beranda Nauval">
          Nopal<span>.dev</span>
        </a>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Menu utama">
          <a href="#projects" onClick={() => setIsOpen(false)}>
            {t(translations.nav.projects)}
          </a>
          <a href="#experience" onClick={() => setIsOpen(false)}>
            {t(translations.nav.experience)}
          </a>
          <a href="#certificates" onClick={() => setIsOpen(false)}>
            {t(translations.nav.certificates)}
          </a>
          {hasPartners && (
            <a href="#partners" onClick={() => setIsOpen(false)}>
              {t(translations.nav.partners)}
            </a>
          )}
          <a href="#contact" onClick={() => setIsOpen(false)}>
            {t(translations.nav.contact)}
          </a>
          <a
            href="#contact"
            className="btn btn-primary nav-cta"
            onClick={() => setIsOpen(false)}
          >
            {t(translations.nav.contactCta)}
          </a>
        </nav>

        <div className="nav-controls">
          <button
            type="button"
            className="lang-toggle-btn"
            onClick={toggleLang}
            aria-label={t(translations.nav.langAria)}
          >
            <span className={lang === 'id' ? 'lang-active' : ''}>ID</span>
            <span className="lang-sep" aria-hidden="true">/</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>

          <button
            type="button"
            className="mobile-toggle"
            aria-label={isOpen ? 'Tutup navigasi' : 'Buka menu navigasi'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`bar-icon ${isOpen ? 'active' : ''}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
