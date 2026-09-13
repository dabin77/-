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
          고객을 이해하는 일에서 시작해
          <br />매장에 쓰이는 홍보물을 완성했습니다.
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
