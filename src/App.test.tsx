import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the complete portfolio without inventing contact details', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'SUN DUOBIN', level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'ABOUT ME' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'PROFILE' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'PROJECTS' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'EXPERIENCE' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "LET'S CONNECT" })).toBeInTheDocument()
    expect(
      screen.getByText('함께 성장할 인턴·신입 기회를 찾고 있습니다.'),
    ).toBeInTheDocument()
    expect(screen.getByText('손다빈 SUN DUOBIN © 2026')).toBeInTheDocument()
    expect(screen.getByText('식당 마케팅')).toBeInTheDocument()
    expect(screen.getByText('고객 응대')).toBeInTheDocument()
    expect(screen.getByText('여행·통역')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /이메일 보내기/ })).not.toBeInTheDocument()
    expect(document.querySelector('a[href^="mailto:"]')).not.toBeInTheDocument()
    expect(screen.queryByText(/180\s*cm/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/67\s*kg/i)).not.toBeInTheDocument()
  })
})
