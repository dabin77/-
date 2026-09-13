import { CircleLink } from '../components/CircleLink'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'

export function ContactSection() {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <img className="contact__ribbon" src="/assets/visual/bridge-ribbon.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <Reveal className="contact__inner">
        <span className="contact__eyebrow">KREAM CONTENT DESIGN INTERNSHIP</span>
        <SectionTitle id="contact-title" tone="dark" align="center">NEXT CHAPTER</SectionTitle>
        <p>상품의 매력은 선명하게, 정보는 정확하게.<br />KREAM의 콘텐츠를 완성하는 과정에 함께하고 싶습니다.</p>
        <div className="contact__actions">
          <CircleLink href="#projects" label="프로젝트 다시 보기" />
        </div>
      </Reveal>
      <div className="contact__footer">
        <span>손다빈 SUN DUOBIN © 2026</span>
        <a href="#top">맨 위로 ↑</a>
      </div>
    </footer>
  )
}
