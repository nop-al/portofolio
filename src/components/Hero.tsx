import heroImg from '../assets/hero.png'
import { useLanguage } from '../context/useLanguage'
import { translations } from '../data/translations'

const coreStack = ['React', 'TypeScript', 'Laravel', 'MySQL']

export default function Hero() {
  const base = import.meta.env.BASE_URL
  const { t } = useLanguage()

  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero-text">
        <h1 id="hero-heading">
          {t(translations.hero.heading)}
        </h1>
        <p>
          {t(translations.hero.intro)}
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            {t(translations.hero.viewProjects)}
          </a>
          <a href={`${base}CV.pdf`} download="CV-Nauval-Amarullah.pdf" className="btn btn-outline">
            {t(translations.hero.downloadCv)}
          </a>
        </div>

        <div className="stack-wrap">
          <span className="stack-label">{t(translations.hero.coreStackLabel)}</span>
          <ul className="stack" aria-label="Daftar teknologi utama">
            {coreStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hero-visual">
        <div className="photo-card">
          <img
            src={heroImg}
            alt={t(translations.hero.profileAlt)}
            width={380}
            height={475}
            fetchPriority="high"
          />
        </div>
        {translations.hero.availability && (
          <div className="status-note" role="note" aria-label="Status ketersediaan">
            <span className="status-indicator" aria-hidden="true" />
            <span>{t(translations.hero.availability)}</span>
          </div>
        )}
      </div>
    </section>
  )
}
