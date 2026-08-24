import { describe, expect, it } from 'vitest'
import { portfolio } from './portfolio'

describe('portfolio data', () => {
  it('publishes the three verified projects and their real links', () => {
    expect(portfolio.projects).toHaveLength(3)
    expect(portfolio.projects.map((project) => project.href)).toEqual([
      'https://kingospot-rnwr.vercel.app/#intro',
      'https://www.miricanvas.com/v2/ko/design2/v/647cf684-565e-442c-b145-cdcd9bca98a1',
      'https://iite.unesco.org/news/bnu-and-unesco-iite-co-organized-the-8th-global-competition-on-design-for-future-education/',
    ])
    expect(portfolio.projects[2]).toMatchObject({
      title: 'HAND IN HAND',
      outcome: '제8회 글로벌 미래교육디자인 공모전 한국 예선 통과',
      images: [
        {
          src: '/assets/hand-in-hand/international-certificate.jpg',
          alt: 'HAND IN HAND 국제 공모전 Pre-finals 진출 인증서',
        },
        {
          src: '/assets/hand-in-hand/korea-award.jpg',
          alt: 'HAND IN HAND 한국 예선전 우수 성적 상장',
        },
      ],
    })
  })

  it('keeps verified profile and estimate wording accurate', () => {
    expect(portfolio.profile.gpa).toBe('4.29 / 4.5')
    expect(portfolio.profile.korean).toBe('원어민에 준하는 수준')
    expect(portfolio.projects[1].summary).toBe(
      '고객 동선과 참여 전환율을 바탕으로 추가 매출 12억 원, 매출총이익 4억 8,000만 원의 가능성을 제시한 팝업 클러스터 전략',
    )
    expect(portfolio.experiences.map(({ title }) => title)).toEqual([
      '식당 마케팅',
      '여행·통역',
    ])
    expect(JSON.stringify(portfolio)).not.toMatch(/180\s*cm|67\s*kg|몸무게|키\s*:/i)
  })
})
