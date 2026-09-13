import { ProjectCard } from '../components/ProjectCard'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/portfolio'

export function ProjectsSection() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects__heading">
          <span>문제를 정의하고, 화면과 기획으로 풀어낸 작업</span>
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
