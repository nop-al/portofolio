import perusahaanData from '../data/perusahaan.json'
import { useLanguage } from '../context/useLanguage'
import { translations } from '../data/translations'
import type { Company } from '../types'

const hasPartners =
  Array.isArray(perusahaanData) &&
  (perusahaanData as Company[]).some(
    (c) => Boolean(c && typeof c.name === 'string' && c.name.trim().length > 0)
  )

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-summary">
          <a href="#top" className="footer-logo">
            Nopal<span>.dev</span>
          </a>
          <p>
            {t(translations.footer.summary)}
          </p>
        </div>

        <nav className="footer-nav" aria-label="Tautan navigasi bawah">
          <div className="nav-group">
            <h4>{t(translations.footer.sectionsHeader)}</h4>
            <a href="#top">{t(translations.footer.topLink)}</a>
            <a href="#projects">{t(translations.nav.projects)}</a>
            <a href="#experience">{t(translations.nav.experience)}</a>
            <a href="#certificates">{t(translations.nav.certificates)}</a>
            {hasPartners && <a href="#partners">{t(translations.nav.partners)}</a>}
            <a href="#contact">{t(translations.nav.contact)}</a>
          </div>

          <div className="nav-group">
            <h4>{t(translations.footer.linksHeader)}</h4>
            <a href="https://github.com/nauval" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </nav>
      </div>

      <div className="footer-credits">
        <p>&copy; {new Date().getFullYear()} {t(translations.footer.copyright)}</p>
        <p className="built-note">{t(translations.footer.builtNote)}</p>
      </div>
    </footer>
  )
}
