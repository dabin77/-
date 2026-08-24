import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { experiences } from '../data/portfolio'

export function ExperienceSection() {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="experience__heading">
        <SectionTitle id="experience-title" tone="light">
          EXPERIENCE
        </SectionTitle>
        <p>
          사람을 직접 만나고 문제를 해결해 온 경험을
          <br />서비스와 콘텐츠 기획의 감각으로 연결합니다.
        </p>
      </div>

      <div className="experience__list">
        {experiences.map((experience, index) => (
          <Reveal className="experience-row" delay={index * 0.05} key={experience.number}>
            <span className="experience-row__number">{experience.number}</span>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
