import { motion, useReducedMotion } from 'framer-motion'
import { CircleLink } from '../components/CircleLink'
import { Reveal } from '../components/Reveal'
import { SiteNav } from '../components/SiteNav'
import { portfolio } from '../data/portfolio'

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <header className="hero" id="top">
      <SiteNav />
      <div className="hero__heading-wrap">
        <Reveal delay={0.12} distance={42}>
          <h1 className="hero__heading">{portfolio.identity.nameEn}</h1>
        </Reveal>
      </div>

      <motion.img
        className="hero__bridge"
        src="/assets/visual/bridge-hero.png"
        alt=""
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.97 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        whileHover={reduceMotion ? undefined : { x: 8, y: -3 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <div className="hero__bottom">
        <Reveal className="hero__copy" delay={0.28} distance={20}>
          <p>{portfolio.identity.positioning}</p>
          <span>{portfolio.identity.status}</span>
        </Reveal>
        <Reveal delay={0.42} distance={20}>
          <CircleLink href="#projects" label="프로젝트 보기" />
        </Reveal>
      </div>
    </header>
  )
}
