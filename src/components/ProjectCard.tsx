import type { Project } from '../data/portfolio'
import { ArrowUpRight } from 'lucide-react'
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
              <span>결과</span>
              {project.outcome}
            </p>
          ) : null}
          {project.note && <p className="project-card__note">{project.note}</p>}
          {project.href && project.cta && <CircleLink
            className="project-card__link"
            href={project.href}
            label={project.cta}
            external
          />}
        </Reveal>

        <Reveal
          className={`project-card__gallery project-card__gallery--${project.images.length} ${project.mediaLayout === 'landscape' ? 'project-card__gallery--landscape' : ''}`}
          delay={0.08}
        >
          {project.images.map((image, index) => (
            <figure
              className={index === 0 ? 'project-card__visual project-card__visual--main' : 'project-card__visual'}
              key={image.src}
            >
              <a className="project-card__image-link" href={image.src} target="_blank" rel="noreferrer" aria-label={`${image.alt} 크게 보기 (새 탭)`}>
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
                <span className="project-card__image-hint" aria-hidden="true">크게 보기 <ArrowUpRight size={14} /></span>
              </a>
            </figure>
          ))}
        </Reveal>
      </div>
      {project.story && (
        <div className="project-card__story">
          {project.story.map((step) => (
            <div key={step.label}>
              <h4>{step.label}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  )
}
