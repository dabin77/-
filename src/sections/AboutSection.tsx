import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { portfolio, strengths } from '../data/portfolio'

const designPractice = ['GRAPHIC DESIGN', 'UX/UI', 'AI PROTOTYPING']

type IlluminatedWordProps = {
  index: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  reduceMotion: boolean
  total: number
  word: string
}

function IlluminatedWord({ index, progress, reduceMotion, total, word }: IlluminatedWordProps) {
  const start = (index / total) * 0.78
  const opacity = useTransform(progress, [start, Math.min(start + 0.19, 1)], [0.62, 1])

  return (
    <motion.span aria-hidden="true" style={reduceMotion ? undefined : { opacity }}>
      {word}{' '}
    </motion.span>
  )
}

function IlluminatedStatement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduceMotion = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 88%', 'end 48%'],
  })
  const words = text.split(' ')

  return (
    <p className="about__statement" ref={ref}>
      <span className="sr-only">{text}</span>
      {words.map((word, index) => (
        <IlluminatedWord
          index={index}
          key={`${word}-${index}`}
          progress={scrollYProgress}
          reduceMotion={reduceMotion}
          total={words.length}
          word={word}
        />
      ))}
    </p>
  )
}

export function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <img
        className="about__lattice"
        src="/assets/visual/ai-lattice.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="about__bridge-fragment" aria-hidden="true">
        <img
          src="/assets/visual/bridge-ribbon.webp"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <Reveal>
        <SectionTitle id="about-title" align="center">
          ABOUT ME
        </SectionTitle>
      </Reveal>

      <Reveal className="about__content" delay={0.08}>
        <IlluminatedStatement text={portfolio.identity.about} />
        <div className="about__accent" aria-hidden="true" />
        <ul aria-label="디자인 작업 분야">
          {designPractice.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>

      <section className="strengths-section" id="strengths" aria-labelledby="strengths-title">
        <h2 className="sr-only" id="strengths-title">핵심 강점</h2>
        <ul className="strengths" aria-label="핵심 강점">
          {strengths.map((strength, index) => (
            <li className="strength-item" key={strength.number}>
              <Reveal delay={index * 0.06}>
                <div className="strength-row" data-testid="strength-row">
                  <span className="strength-row__number">{strength.number}</span>
                  <strong>{strength.title}</strong>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
