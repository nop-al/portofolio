import type { Experience, Education } from '../types'
import experienceData from '../data/experience.json'
import educationData from '../data/education.json'
import { useLanguage } from '../context/useLanguage'
import { translations } from '../data/translations'

const experiences: Experience[] = Array.isArray(experienceData)
  ? (experienceData as Experience[]).filter((e) => Boolean(e && e.position))
  : []
const educations: Education[] = Array.isArray(educationData)
  ? (educationData as Education[]).filter((e) => Boolean(e && e.degree))
  : []

export default function ExperienceEducation() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="section-header">
        <h2 id="experience-heading">{t(translations.experienceEdu.heading)}</h2>
        <p className="section-subtitle">
          {t(translations.experienceEdu.subtitle)}
        </p>
      </div>

      <div className="exp-edu-layout">
        <div className="exp-column">
          <h3 className="column-title">{t(translations.experienceEdu.experienceColumn)}</h3>
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <article key={idx} className="timeline-item">
                <div className="timeline-header">
                  <div>
                    <h4 className="item-title">{t(exp.position)}</h4>
                    <span className="item-company">{exp.company}</span>
                  </div>
                  <span className="period-badge">{t(exp.period)}</span>
                </div>

                <ul className="responsibilities-list">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{t(resp)}</li>
                  ))}
                </ul>

                {exp.tech && (
                  <div className="exp-tech-tags">
                    {exp.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="edu-column">
          <h3 className="column-title">{t(translations.experienceEdu.educationColumn)}</h3>
          <div className="timeline">
            {educations.map((edu, idx) => (
              <article key={idx} className="timeline-item edu-item">
                <div className="timeline-header">
                  <div>
                    <h4 className="item-title">{t(edu.degree)}</h4>
                    <span className="item-company">{edu.institution}</span>
                  </div>
                  <span className="period-badge">{edu.period}</span>
                </div>

                {edu.description && (
                  <p className="edu-description">{t(edu.description)}</p>
                )}

                {edu.focus && (
                  <div className="edu-focus">
                    <span className="focus-label">{t(translations.experienceEdu.focusLabel)}</span>
                    <span>{t(edu.focus)}</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
