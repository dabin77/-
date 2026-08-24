import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Reveal } from './Reveal'

describe('Reveal', () => {
  it('keeps essential content visible before viewport animation runs', () => {
    render(<Reveal>항상 읽을 수 있는 내용</Reveal>)

    expect(screen.getByText('항상 읽을 수 있는 내용')).not.toHaveStyle(
      'opacity: 0',
    )
  })
})
