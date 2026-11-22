import projectsData from '../data/projects.json'
import type { Project } from '../types'
import { useLanguage } from '../context/useLanguage'
import { translations } from '../data/translations'

const projects: Project[] = Array.isArray(projectsData)
  ? (projectsData as Project[]).filter((p) => Boolean(p && p.title))
  : []

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="section-header">
        <h2 id="projects-heading">{t(translations.projects.heading)}</h2>
        <p className="section-subtitle">
          {t(translations.projects.subtitle)}
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className={`project-entry ${project.featured ? 'is-featured' : ''}`}
          >
            <div className="project-content">
              <div className="project-header">
                {project.featured && (
                  <span className="featured-badge">{t(translations.projects.featuredBadge)}</span>
                )}
                {project.statusLabel && (
                  <span className="status-badge">{t(project.statusLabel)}</span>
                )}
              </div>

              <h3>{t(project.title)}</h3>
              <p>{t(project.description)}</p>

              <ul className="tech-tags" aria-label={`Teknologi untuk ${t(project.title)}`}>
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="project-actions">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    {t(translations.projects.visitLink)}
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    {t(translations.projects.viewCode)}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
