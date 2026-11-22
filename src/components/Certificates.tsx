import certificatesData from '../data/certificates.json'
import type { Certificate } from '../types'
import { useLanguage } from '../context/useLanguage'
import { translations } from '../data/translations'

const certificates: Certificate[] = Array.isArray(certificatesData)
  ? (certificatesData as Certificate[]).filter((c) => Boolean(c && c.title))
  : []

export default function Certificates() {
  const { t } = useLanguage()

  return (
    <section id="certificates" className="section" aria-labelledby="certs-heading">
      <div className="section-header">
        <h2 id="certs-heading">{t(translations.certificates.heading)}</h2>
        <p className="section-subtitle">
          {t(translations.certificates.subtitle)}
        </p>
      </div>

      <div className="certs-grid">
        {certificates.map((cert, idx) => (
          <article key={idx} className="cert-card">
            <div className="cert-meta">
              <span className="cert-year">{cert.year}</span>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>

            <h3>{t(cert.title)}</h3>

            {cert.description && (
              <p className="cert-description">{t(cert.description)}</p>
            )}

            <div className="cert-actions">
              {cert.kredensial && (
                <a
                  href={cert.kredensial}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-link"
                  aria-label={`Lihat kredensial untuk ${t(cert.title)}`}
                >
                  {t(translations.certificates.credentialLink)}
                </a>
              )}
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-link cert-link-muted"
                  aria-label={`Kunjungi situs penerbit ${cert.issuer}`}
                >
                  {t(translations.certificates.issuerLink)}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
