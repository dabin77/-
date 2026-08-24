import { describe, expect, it } from 'vitest'
import { portfolio } from './portfolio'

describe('portfolio data', () => {
  it('publishes only the two verified projects and their real links', () => {
    expect(portfolio.projects).toHaveLength(2)
    expect(portfolio.projects.map((project) => project.href)).toEqual([
      'https://kingospot-rnwr.vercel.app/#intro',
      'https://www.miricanvas.com/v2/ko/design2/v/647cf684-565e-442c-b145-cdcd9bca98a1',
    ])
  })

  it('keeps verified profile and estimate wording accurate', () => {
    expect(portfolio.profile.gpa).toBe('4.29 / 4.5')
    expect(portfolio.profile.korean).toBe('원어민에 준하는 수준')
    expect(portfolio.projects[1].summary).toContain('추가 매출 12억 원')
    expect(portfolio.projects[1].summary).not.toContain('실현')
  })
})
