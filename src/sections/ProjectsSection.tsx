import { ProjectCard } from '../components/ProjectCard'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/portfolio'

export function ProjectsSection() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects__heading">
        <span>선택한 두 개의 실제 결과물</span>
        <SectionTitle id="projects-title" tone="dark" align="center">
          PROJECTS
        </SectionTitle>
      </div>
      <div className="projects__stack">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  )
}
