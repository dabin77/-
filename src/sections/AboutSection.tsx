import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { portfolio, strengths } from '../data/portfolio'

const languageProof = ['중국어 원어민', '한국어 원어민에 준하는 수준', '한국 생활 약 10년']

export function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <img
        className="about__lattice"
        src="/assets/visual/ai-lattice.png"
        alt=""
        aria-hidden="true"
      />
      <div className="about__bridge-fragment" aria-hidden="true">
        <img src="/assets/visual/bridge-ribbon.png" alt="" />
      </div>

      <Reveal>
        <SectionTitle id="about-title" align="center">
          ABOUT ME
        </SectionTitle>
      </Reveal>

      <Reveal className="about__content" delay={0.08}>
        <p>{portfolio.identity.about}</p>
        <div className="about__accent" aria-hidden="true" />
        <ul aria-label="언어와 한국 생활 경험">
          {languageProof.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>

      <div className="strengths" id="strengths" aria-label="핵심 강점">
        {strengths.map((strength, index) => (
          <Reveal key={strength.number} delay={index * 0.06}>
            <div className="strength-row" data-testid="strength-row">
              <span className="strength-row__number">{strength.number}</span>
              <strong>{strength.title}</strong>
              <span aria-hidden="true">↗</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
