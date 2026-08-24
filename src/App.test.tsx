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
    expect(screen.getByText('식당 마케팅')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /이메일 보내기/ })).not.toBeInTheDocument()
  })
})
