import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SiteNav } from './SiteNav'

describe('SiteNav', () => {
  it('links the four Korean navigation labels to real page sections', () => {
    render(<SiteNav />)

    const nav = screen.getByRole('navigation', { name: '주요 메뉴' })
    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '소개' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: '강점' })).toHaveAttribute('href', '#strengths')
    expect(screen.getByRole('link', { name: '프로젝트' })).toHaveAttribute(
      'href',
      '#projects',
    )
    expect(screen.getByRole('link', { name: '연락' })).toHaveAttribute('href', '#contact')
  })
})
