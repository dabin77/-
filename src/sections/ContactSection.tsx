import { CircleLink } from '../components/CircleLink'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { portfolio } from '../data/portfolio'

export function ContactSection() {
  const { email } = portfolio.profile

  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <img
        className="contact__ribbon"
        src="/assets/visual/bridge-ribbon.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <Reveal className="contact__inner">
        <span className="contact__eyebrow">함께 성장할 인턴·신입 기회를 찾고 있습니다.</span>
        <SectionTitle id="contact-title" tone="dark" align="center">
          LET&apos;S CONNECT
        </SectionTitle>
        <p>
          한국과 중국, 사용자와 기술 사이를 연결하는
          <br />실행력 있는 기획자로 함께하겠습니다.
        </p>
        <div className="contact__actions">
          {email ? (
            <CircleLink href={`mailto:${email}`} label="이메일 보내기" />
          ) : (
            <span className="contact__note">연락처는 지원서와 함께 전달드립니다.</span>
          )}
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
