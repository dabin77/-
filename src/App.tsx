import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProfileSection } from './sections/ProfileSection'
import { ProjectsSection } from './sections/ProjectsSection'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">본문으로 바로가기</a>
      <HeroSection />
      <main id="main-content">
        <AboutSection />
        <ProfileSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <ContactSection />
    </>
  )
}

export default App
