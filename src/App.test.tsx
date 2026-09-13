import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('public portfolio', () => {
  it('keeps the permitted identity but excludes private profile fields and contact links', () => {
    const { container } = render(<App />)
    expect(screen.getByRole('heading', { name: '손다빈', level: 1 })).toBeInTheDocument()
    expect(container.textContent).not.toMatch(/F-?4|체류자격|4\.29|생년월일|거주지/)
    expect(container.querySelector('a[href^="mailto:"], a[href^="tel:"]')).toBeNull()
    expect(container.textContent).not.toMatch(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i)
    expect(container.textContent).not.toContain('\u00b7')
  })

  it('connects every internal navigation link to an existing section', () => {
    const { container } = render(<App />)
    for (const link of container.querySelectorAll('a[href^="#"]')) {
      expect(document.getElementById(link.getAttribute('href')!.slice(1))).not.toBeNull()
    }
  })
})
