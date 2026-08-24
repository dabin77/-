import type { Project } from '../data/portfolio'
import { CircleLink } from './CircleLink'
import { Reveal } from './Reveal'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const titleId = `project-${project.number}`

  return (
    <article
      className={`project-card project-card--${project.theme}`}
      aria-labelledby={titleId}
    >
      <Reveal className="project-card__header">
        <div className="project-card__eyebrow">
          <span>{project.number}</span>
          <span>{project.category}</span>
        </div>
        <h3 id={titleId}>{project.title}</h3>
      </Reveal>

      <div className="project-card__body">
        <Reveal className="project-card__copy">
          <p className="project-card__summary">{project.summary}</p>
          <p className="project-card__role">
            <span>MY ROLE</span>
            {project.role}
          </p>
          <CircleLink
            className="project-card__link"
            href={project.href}
            label={project.cta}
            external
          />
        </Reveal>

        <Reveal className="project-card__gallery" delay={0.08}>
          {project.images.map((image, index) => (
            <figure
              className={index === 0 ? 'project-card__visual project-card__visual--main' : 'project-card__visual'}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} />
            </figure>
          ))}
        </Reveal>
      </div>
    </article>
  )
}
