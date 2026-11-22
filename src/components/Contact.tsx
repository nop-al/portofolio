import { useState, type FormEvent } from 'react'
import { useLanguage } from '../context/useLanguage'
import { translations } from '../data/translations'

export default function Contact() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 6000)
  }

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="section-header">
        <h2 id="contact-heading">{t(translations.contact.heading)}</h2>
        <p className="section-subtitle">
          {t(translations.contact.subtitle)}
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <h3>{t(translations.contact.channelsTitle)}</h3>
          <p>
            {t(translations.contact.channelsDesc)}
          </p>

          <ul className="contact-channels" aria-label="Daftar saluran kontak">
            <li>
              <a href="mailto:nauval.amarullah@example.com" className="channel-link">
                <span className="channel-type">Email:</span>
                <span className="channel-value">nauval.amarullah@example.com</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="channel-link">
                <span className="channel-type">WhatsApp:</span>
                <span className="channel-value">+62 812-3456-7890</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/nauval" target="_blank" rel="noreferrer" className="channel-link">
                <span className="channel-type">GitHub:</span>
                <span className="channel-value">github.com/nauval</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-feedback" role="alert">
              <h3>{t(translations.contact.feedbackTitle)}</h3>
              <p>{t(translations.contact.feedbackDesc)}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate={false}>
              <div className="form-field">
                <label htmlFor="contact-name">{t(translations.contact.formName)}</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder={t(translations.contact.formNamePlaceholder)}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">{t(translations.contact.formEmail)}</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">{t(translations.contact.formSubject)}</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder={t(translations.contact.formSubjectPlaceholder)}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">{t(translations.contact.formMessage)}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder={t(translations.contact.formMessagePlaceholder)}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                {t(translations.contact.submitBtn)}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
