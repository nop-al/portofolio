import type { Company } from '../types'
import perusahaanData from '../data/perusahaan.json'
import { useLanguage } from '../context/useLanguage'
import { translations } from '../data/translations'

// Hanya ambil entitas yang memiliki properti 'name' yang valid
const companies: Company[] = Array.isArray(perusahaanData)
  ? (perusahaanData as Company[]).filter(
      (c) => Boolean(c && typeof c.name === 'string' && c.name.trim().length > 0)
    )
  : []

export default function Partners() {
  const { t } = useLanguage()

  // Jika data perusahaan kosong atau belum diisi, seksi ini tidak ditampilkan
  if (!companies || companies.length === 0) {
    return null
  }

  // Gandakan array agar scrolling marquee berputar mulus tanpa jeda
  const displayList = [...companies, ...companies, ...companies]

  return (
    <section id="partners" className="section partners-section" aria-labelledby="partners-heading">
      <div className="section-header text-center">
        <h2 id="partners-heading">{t(translations.partners.heading)}</h2>
        <p className="section-subtitle">
          {t(translations.partners.subtitle)}
        </p>
      </div>

      <div
        className="marquee-container"
        tabIndex={0}
        aria-label={t(translations.partners.ariaLabel)}
      >
        <div className="marquee-track">
          {displayList.map((company, index) => {
            const companyName = company?.name?.trim() || ''
            if (!companyName) return null

            return (
              <div key={`${companyName}-${index}`} className="partner-badge">
                {company.logo ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${company.logo}`}
                    alt=""
                    aria-hidden="true"
                    width={36}
                    height={36}
                    className="partner-logo"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none'
                    }}
                  />
                ) : (
                  <span className="partner-fallback-icon" aria-hidden="true">
                    {companyName.charAt(0).toUpperCase()}
                  </span>
                )}
                <div className="partner-meta">
                  <strong className="partner-name">{companyName}</strong>
                  {company.role && <span className="partner-role">{t(company.role)}</span>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
