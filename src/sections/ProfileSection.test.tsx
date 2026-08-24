import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSection } from './AboutSection'
import { ProfileSection } from './ProfileSection'

describe('profile sections', () => {
  it('renders verified education, language, availability, and five strengths', () => {
    render(
      <>
        <AboutSection />
        <ProfileSection />
      </>,
    )

    expect(screen.getByLabelText(/중학교 시절부터 약 10년간/)).toBeInTheDocument()
    expect(screen.getByText(/손다빈/)).toBeInTheDocument()
    expect(screen.getByText(/2023\.03 입학 · 2027\.02 졸업 예정/)).toBeInTheDocument()
    expect(screen.getByText(/주전공 평점 4\.29 \/ 4\.5/)).toBeInTheDocument()
    expect(screen.getByText('한국어 · 원어민에 준하는 수준')).toBeInTheDocument()
    expect(screen.getByText(/F-4 체류자격/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '핵심 강점' })).toBeInTheDocument()
    expect(screen.getByRole('list', { name: '핵심 강점' })).toBeInTheDocument()
    expect(screen.getAllByTestId('strength-row')).toHaveLength(5)
  })
})
