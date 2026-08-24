export type NavItem = {
  label: string
  href: `#${string}`
}

export type Strength = {
  number: string
  title: string
}

export type ProfileRow = {
  number: string
  label: string
  lines: string[]
  accent?: string
}

export type Project = {
  number: string
  category: string
  title: string
  summary: string
  role: string
  href: string
  cta: string
  theme: 'green' | 'red'
  images: Array<{
    src: string
    alt: string
  }>
}

export type Experience = {
  number: string
  title: string
  description: string
}

export type PortfolioData = {
  identity: {
    nameKo: string
    nameEn: string
    positioning: string
    status: string
    about: string
  }
  profile: {
    gpa: string
    korean: string
    email?: string
  }
  navItems: NavItem[]
  strengths: Strength[]
  profileRows: ProfileRow[]
  projects: Project[]
  experiences: Experience[]
}

export const navItems: NavItem[] = [
  { label: '소개', href: '#about' },
  { label: '강점', href: '#strengths' },
  { label: '프로젝트', href: '#projects' },
  { label: '연락', href: '#contact' },
]

export const strengths: Strength[] = [
  { number: '01', title: '서비스·콘텐츠 기획' },
  { number: '02', title: 'UX/UI·사용자 조사' },
  { number: '03', title: '생성형 AI 활용' },
  { number: '04', title: '중국 시장 인사이트' },
  { number: '05', title: '실행력·협업' },
]

export const profileRows: ProfileRow[] = [
  {
    number: '01',
    label: '학력',
    lines: [
      '성균관대학교',
      '컬처앤테크놀로지융합전공 · 미디어커뮤니케이션학과 복수전공',
      '2023.03 입학 · 2027.02 졸업 예정',
      '주전공 평점 4.29 / 4.5',
    ],
    accent: '4.29 / 4.5',
  },
  {
    number: '02',
    label: '언어',
    lines: ['중국어 · 원어민', '한국어 · 원어민에 준하는 수준', '영어 · 기초'],
  },
  {
    number: '03',
    label: 'AI·도구',
    lines: [
      '생성형 AI · ChatGPT · Codex',
      'Figma · PowerPoint · Word · Excel 기본 함수',
    ],
  },
  {
    number: '04',
    label: '자격증',
    lines: [
      '컴퓨터그래픽스운용기능사 · 한국산업인력공단 · 2022.07',
      '정보기술자격(ITQ) 아래한글 A등급 · 한국생산성본부 · 2022.06',
      'GTQ 일러스트 2급 · 한국생산성본부 · 2021.11',
    ],
  },
  {
    number: '05',
    label: '근무 가능 조건',
    lines: [
      '인턴 · 신입 지원',
      '2026년 2학기 저녁 수업 3학점만 수강 예정',
      '주간 풀타임 근무 가능 · 졸업 후 장기근무 가능',
      'F-4 체류자격 · 별도 취업비자 지원 불필요',
    ],
  },
]

export const projects: Project[] = [
  {
    number: '01',
    category: '서비스 · UX/UI · 웹',
    title: 'KINGO SPOT',
    summary:
      '사용 목적에 따라 성균관대 인근 7개 카페·스터디카페를 추천하는 공간 탐색 서비스',
    role: '주요 개발 · 서비스 구조 · 핵심 기능 구현',
    href: 'https://kingospot-rnwr.vercel.app/#intro',
    cta: '실제 사이트 보기',
    theme: 'green',
    images: [
      { src: '/assets/kingo/intro.png', alt: 'KINGO SPOT 실제 서비스 첫 화면' },
      { src: '/assets/kingo/purpose.png', alt: 'KINGO SPOT 방문 목적 선택 화면' },
      { src: '/assets/kingo/recommendation.png', alt: 'KINGO SPOT 실제 추천 결과 화면' },
    ],
  },
  {
    number: '02',
    category: '사업 · 공간 경험 기획',
    title: 'STARFIELD SUWON',
    summary:
      '고객 동선과 참여 전환율을 바탕으로 추가 매출 12억 원, 매출총이익 4억 8,000만 원의 가능성을 제시한 팝업 클러스터 전략',
    role: '자료조사 · 수익 계산 모델 · 기획 고도화',
    href:
      'https://www.miricanvas.com/v2/ko/design2/v/647cf684-565e-442c-b145-cdcd9bca98a1',
    cta: '기획안 보기',
    theme: 'red',
    images: [
      { src: '/assets/starfield/cover.png', alt: '스타필드 수원 팝업 클러스터 기획안 표지' },
      { src: '/assets/starfield/strategy.png', alt: '스타필드 수원 팝업 클러스터 핵심 전략 슬라이드' },
      { src: '/assets/starfield/revenue.png', alt: '스타필드 수원 예상 수익 구조 슬라이드' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    number: '01',
    title: '식당 마케팅',
    description: '가족이 창업한 식당의 마케팅 업무 담당',
  },
  {
    number: '02',
    title: '고객 응대',
    description: '대학 입학 후 약 3년 · 다섯 곳가량의 식당에서 고객 응대',
  },
  {
    number: '03',
    title: '여행·통역',
    description: '중국인 고객 여행 일정·동선 안내 · 피부과 통역 및 현장 지원',
  },
]

export const portfolio: PortfolioData = {
  identity: {
    nameKo: '손다빈',
    nameEn: 'SUN DUOBIN',
    positioning: '한국과 중국, 사용자와 기술을 연결하는 AI 기반 서비스·콘텐츠 기획자',
    status: '인턴 · 신입 지원',
    about:
      '중국에서 태어나 중학교 시절부터 약 10년간 한국에서 학업과 생활을 이어왔습니다. 두 문화에 대한 이해를 바탕으로 사용자와 시장을 연결하고, 생성형 AI를 활용해 아이디어를 실제 결과물로 발전시킵니다.',
  },
  profile: {
    gpa: '4.29 / 4.5',
    korean: '원어민에 준하는 수준',
  },
  navItems,
  strengths,
  profileRows,
  projects,
  experiences,
}
