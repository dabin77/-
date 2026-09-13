import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { portfolio, profileRows } from '../data/portfolio'

export function ProfileSection() {
  return (
    <section className="profile" id="profile" aria-labelledby="profile-title">
      <div className="profile__heading">
        <Reveal>
          <SectionTitle id="profile-title" tone="light">
            TOOLKIT
          </SectionTitle>
        </Reveal>
        <Reveal className="profile__name" delay={0.08}>
          <span>{portfolio.identity.nameKo}</span>
          <strong>{portfolio.identity.nameEn}</strong>
        </Reveal>
      </div>

      <div className="profile__rows">
        {profileRows.map((row, index) => (
          <Reveal key={row.number} delay={index * 0.05}>
            <article className="profile-row">
              <span className="profile-row__number">{row.number}</span>
              <h3>{row.label}</h3>
              <div className="profile-row__content">
                {row.lines.map((line) => (
                  <p key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="profile__transition" aria-hidden="true">
        <span>NEXT</span>
        <strong>PROJECTS</strong>
        <img
          src="/assets/visual/bridge-ribbon.webp"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
