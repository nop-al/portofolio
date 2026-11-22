import { LanguageProvider } from './context/LanguageProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ExperienceEducation from './components/ExperienceEducation'
import Certificates from './components/Certificates'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ErrorBoundary } from './components/ErrorBoundary'

export default function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <ExperienceEducation />
          <Certificates />
          <ErrorBoundary>
            <Partners />
          </ErrorBoundary>
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
