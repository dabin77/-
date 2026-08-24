import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection', () => {
  it('renders three verified projects with uncropped media and safe external links', () => {
    render(<ProjectsSection />)

    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getByText('선택한 세 개의 실제 결과물')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'PROJECTS' })).toHaveClass(
      'section-title--dark',
    )
    expect(screen.getByText('KINGO SPOT')).toBeInTheDocument()
    expect(screen.getByText(/추가 매출 12억 원/)).toBeInTheDocument()
    expect(screen.getByText('HAND IN HAND')).toBeInTheDocument()
    expect(screen.getByText('제8회 글로벌 미래교육디자인 공모전 한국 예선 통과')).toBeInTheDocument()
    expect(screen.getAllByText('담당 역할')).toHaveLength(3)
    expect(
      screen.getByAltText('KINGO SPOT 실제 서비스 첫 화면'),
    ).toHaveAttribute('src', '/assets/kingo/intro.png')
    expect(screen.getByAltText('KINGO SPOT 실제 서비스 첫 화면')).toHaveClass(
      'project-card__image--contain',
    )
    expect(screen.getByAltText('KINGO SPOT 실제 서비스 첫 화면')).toHaveStyle({
      objectFit: 'contain',
      objectPosition: 'center',
    })
    expect(screen.getByAltText('KINGO SPOT 실제 서비스 첫 화면')).toHaveAttribute(
      'loading',
      'lazy',
    )
    expect(screen.getByAltText('KINGO SPOT 실제 서비스 첫 화면')).toHaveAttribute(
      'decoding',
      'async',
    )

    const siteLink = screen.getByRole('link', { name: /실제 사이트 보기/ })
    expect(siteLink).toHaveAttribute(
      'href',
      'https://kingospot-rnwr.vercel.app/#intro',
    )
    expect(siteLink).toHaveAttribute('target', '_blank')
    expect(siteLink).toHaveAttribute('rel', 'noreferrer')

    expect(screen.getByAltText('HAND IN HAND 국제 공모전 Pre-finals 진출 인증서')).toHaveAttribute(
      'src',
      '/assets/hand-in-hand/international-certificate.jpg',
    )
    expect(screen.getByAltText('HAND IN HAND 한국 예선전 우수 성적 상장')).toHaveAttribute(
      'src',
      '/assets/hand-in-hand/korea-award.jpg',
    )

    const competitionLink = screen.getByRole('link', { name: /공모전 공식 소개/ })
    expect(competitionLink).toHaveAttribute(
      'href',
      'https://iite.unesco.org/news/bnu-and-unesco-iite-co-organized-the-8th-global-competition-on-design-for-future-education/',
    )
    expect(competitionLink).toHaveAttribute('target', '_blank')
  })
})
