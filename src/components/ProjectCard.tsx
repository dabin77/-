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
            <span>담당 역할</span>
            {project.role}
          </p>
          {project.outcome ? (
            <p className="project-card__outcome">
              <span>성과</span>
              {project.outcome}
            </p>
          ) : null}
          <CircleLink
            className="project-card__link"
            href={project.href}
            label={project.cta}
            external
          />
        </Reveal>

        <Reveal
          className={`project-card__gallery ${project.images.length === 2 ? 'project-card__gallery--two' : ''}`}
          delay={0.08}
        >
          {project.images.map((image, index) => (
            <figure
              className={index === 0 ? 'project-card__visual project-card__visual--main' : 'project-card__visual'}
              key={image.src}
            >
              <img
                className={`project-card__image project-card__image--${project.mediaFit ?? 'cover'}`}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                style={{
                  objectFit: project.mediaFit ?? 'cover',
                  objectPosition: 'center',
                }}
              />
            </figure>
          ))}
        </Reveal>
      </div>
    </article>
  )
}
