import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectsSection } from './ProjectsSection'

describe('project evidence', () => {
  it('lets readers open complete evidence images with safe links', () => {
    render(<ProjectsSection />)
    for (const image of screen.getAllByRole('img')) {
      expect(image).toHaveStyle({ objectFit: 'contain' })
      expect(image).toHaveAttribute('loading', 'lazy')
      const link = image.closest('a')!
      expect(link).toHaveAttribute('href', image.getAttribute('src'))
      expect(link).toHaveAccessibleName(/크게 보기/)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
  })

  it('links to the working prototype without presenting demo data as measured results', () => {
    render(<ProjectsSection />)
    const link = screen.getByRole('link', { name: '프로토타입 보기' })
    expect(link).toHaveAttribute('href', 'https://kingospot-rnwr.vercel.app/#intro')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
    expect(screen.getByText(/혼잡도와 추천 점수는 기능 시연용 예시 데이터/)).toBeInTheDocument()
  })
})
