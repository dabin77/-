import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the approved identity, introduction, and experience content', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('heading', { name: '손다빈', level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'ABOUT ME' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'PROFILE' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'PROJECTS' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'EXPERIENCE' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "LET'S CONNECT" })).toBeInTheDocument()
    expect(
      screen.getByText('함께 성장할 인턴·신입 기회를 찾고 있습니다.'),
    ).toBeInTheDocument()
    expect(screen.getByText('손다빈 SUN DUOBIN © 2026')).toBeInTheDocument()
    expect(
      screen.getByText(
        '안녕하세요. 중학교 시절부터 약 10년간 한국에서 생활하며, 성균관대학교에서 컬처앤테크놀로지와 미디어커뮤니케이션을 공부하고 있는 손다빈입니다. 한국과 중국 두 문화에 대한 이해와 생성형 AI 활용 능력을 바탕으로, 아이디어를 실제 서비스와 콘텐츠로 발전시키는 데 강점이 있습니다.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByText('식당 마케팅')).toBeInTheDocument()
    expect(screen.queryByText('고객 응대')).not.toBeInTheDocument()
    expect(screen.getByText('여행·통역')).toBeInTheDocument()
    expect(container).not.toHaveTextContent('↗')
    expect(screen.queryByRole('link', { name: /이메일 보내기/ })).not.toBeInTheDocument()
    expect(document.querySelector('a[href^="mailto:"]')).not.toBeInTheDocument()
    expect(screen.queryByText(/180\s*cm/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/67\s*kg/i)).not.toBeInTheDocument()
  })
})
