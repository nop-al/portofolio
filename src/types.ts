export type LocalizedString = string | { id: string; en: string }

export interface Project {
  title: LocalizedString
  description: LocalizedString
  tech: string[]
  image?: string
  demo?: string | null
  repo?: string | null
  statusLabel?: LocalizedString
  featured?: boolean
}

export interface Certificate {
  title: LocalizedString
  issuer: string
  year: number
  description?: LocalizedString
  kredensial?: string
  url?: string
}

export interface Company {
  name: string
  role?: LocalizedString
  description?: LocalizedString
  url?: string
  logo?: string
}

export interface Experience {
  position: LocalizedString
  company: string
  period: LocalizedString
  type?: LocalizedString
  responsibilities: LocalizedString[]
  tech?: string[]
}

export interface Education {
  degree: LocalizedString
  institution: string
  period: string
  description?: LocalizedString
  focus?: LocalizedString
}
