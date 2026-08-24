import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection', () => {
  it('renders two verified projects with real media and safe external links', () => {
    render(<ProjectsSection />)

    expect(screen.getAllByRole('article')).toHaveLength(2)
    expect(screen.getByRole('heading', { name: 'PROJECTS' })).toHaveClass(
      'section-title--dark',
    )
    expect(screen.getByText('KINGO SPOT')).toBeInTheDocument()
    expect(screen.getByText(/추가 매출 12억 원/)).toBeInTheDocument()
    expect(screen.getAllByText('담당 역할')).toHaveLength(2)
    expect(
      screen.getByAltText('KINGO SPOT 실제 서비스 첫 화면'),
    ).toHaveAttribute('src', '/assets/kingo/intro.png')
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
  })
})
