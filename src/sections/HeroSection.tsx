import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import type { PointerEvent } from 'react'
import { CircleLink } from '../components/CircleLink'
import { Reveal } from '../components/Reveal'
import { SiteNav } from '../components/SiteNav'
import { portfolio } from '../data/portfolio'

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const bridgeX = useSpring(pointerX, { stiffness: 90, damping: 24 })
  const bridgeY = useSpring(pointerY, { stiffness: 90, damping: 24 })

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 14)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 8)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <header
      className="hero"
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <SiteNav />
      <div className="hero__heading-wrap">
        <Reveal delay={0.12} distance={42}>
          <h1 className="hero__heading">{portfolio.identity.nameEn}</h1>
        </Reveal>
      </div>

      <motion.img
        className="hero__bridge"
        src="/assets/visual/bridge-hero.webp"
        alt=""
        aria-hidden="true"
        decoding="async"
        loading="eager"
        style={reduceMotion ? undefined : { x: bridgeX, y: bridgeY }}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
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
