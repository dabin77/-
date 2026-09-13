export type NavItem = { label: string; href: `#${string}` }
export type Strength = { number: string; title: string }
export type ProfileRow = { number: string; label: string; lines: string[] }
export type Project = {
  number: string
  category: string
  title: string
  summary: string
  role: string
  outcome?: string
  note?: string
  story?: Array<{ label: string; text: string }>
  href?: string
  cta?: string
  theme: 'blue' | 'green' | 'red'
  mediaFit?: 'contain' | 'cover'
  mediaLayout?: 'landscape'
  images: Array<{ src: string; alt: string }>
}
export type Experience = { number: string; title: string; description: string }

export const navItems: NavItem[] = [
  { label: '소개', href: '#about' },
  { label: '제작 역량', href: '#profile' },
  { label: '프로젝트', href: '#projects' },
  { label: '실무 경험', href: '#experience' },
]

export const strengths: Strength[] = [
  { number: '01', title: '사용자의 필요에서 시작하는 기획' },
  { number: '02', title: '그래픽 도구로 완성하는 이미지' },
  { number: '03', title: 'Figma에서 웹으로 이어지는 화면 설계' },
  { number: '04', title: '배우고 수정하며 끝까지 만드는 실행력' },
]

export const profileRows: ProfileRow[] = [
  {
    number: '01', label: '그래픽 디자인',
    lines: ['Photoshop / Illustrator', '콘텐츠 관련 교육과 자격 취득 과정에서 이미지 제작 도구 활용', '컴퓨터그래픽스운용기능사 / GTQ 일러스트 2급'],
  },
  {
    number: '02', label: '화면 설계',
    lines: ['Figma / 웹 UI 디자인', '교육 서비스 프로토타입 기획과 화면 설계', '카페 탐색 웹사이트의 UI 디자인과 구현'],
  },
  {
    number: '03', label: 'AI 활용과 구현',
    lines: ['ChatGPT / Codex', '생성형 모델을 활용한 이미지 제작', '프롬프트를 구체화하고 결과를 확인하며 웹 프로토타입 수정'],
  },
  {
    number: '04', label: '기획과 전달',
    lines: ['PowerPoint / Excel', '기획 내용의 문서화와 발표 자료 구성', '팀 프로젝트의 자료 조사와 수익 시나리오 계산'],
  },
]

export const projects: Project[] = [
  {
    number: '01', category: 'WEB DESIGN / AI PROTOTYPING', title: 'KINGO SPOT',
    summary: '카페에 도착하기 전, 내 목적에 맞는 공간을 찾을 수 있도록.',
    role: '서비스 기획 / UI 디자인 / AI를 활용한 웹 구현과 수정',
    outcome: '주변 7개 카페와 스터디카페를 탐색하는 웹 프로토타입 제작 및 배포',
    note: '혼잡도와 추천 점수는 기능 시연용 예시 데이터입니다.',
    href: 'https://kingospot-rnwr.vercel.app/#intro', cta: '프로토타입 보기', theme: 'green', mediaFit: 'contain',
    images: [
      { src: '/assets/kingo/intro.png', alt: 'KINGO SPOT 웹 프로토타입 첫 화면' },
      { src: '/assets/kingo/purpose.png', alt: 'KINGO SPOT 방문 목적 선택 화면' },
      { src: '/assets/kingo/recommendation.png', alt: 'KINGO SPOT 예시 데이터 기반 추천 결과 화면' },
    ],
    story: [
      { label: '왜 만들었는가', text: '주변에 카페는 많지만 막상 방문하면 자리가 꽉 차 있는 경우가 많았습니다. 방문 전에 공간 정보를 비교하고, 공부나 팀플 등 목적에 맞게 선택하도록 돕고 싶었습니다.' },
      { label: '어떻게 풀었는가', text: '방문 목적을 선택하면 공간을 추천하는 흐름을 기획하고 UI를 직접 디자인했습니다. 처음에는 프롬프트 작성과 수정 요청이 어려웠지만, 독학과 온라인 강의를 통해 요청을 구체화하며 화면을 완성했습니다.' },
      { label: '무엇을 만들었는가', text: '목적 선택부터 추천 결과 확인까지 체험할 수 있는 웹 프로토타입을 배포했습니다. 아이디어를 설명하는 데서 나아가 직접 조작할 수 있는 화면으로 구현한 작업입니다.' },
    ],
  },
  {
    number: '02', category: 'UX/UI / EDUCATION SERVICE', title: 'HAND IN HAND',
    summary: '고령층이 디지털 환경에서 배우고, 사람과 연결될 수 있도록.',
    role: '팀장 / 서비스 기획 / UX/UI 설계 / Figma 프로토타입 / 발표',
    outcome: '제8회 글로벌 미래교육디자인 공모전 예비결선 진출',
    note: '아래 이미지는 한국 예선전 입선 증빙입니다.',
    theme: 'blue', mediaFit: 'contain',
    images: [{ src: '/assets/hand-in-hand/korea-award.jpg', alt: 'HAND IN HAND 팀의 글로벌 미래 교육 디자인 대회 한국 예선전 입선 증빙' }],
    story: [
      { label: '사용자의 필요', text: '고령층의 디지털 소외와 사회적 고립 문제에 주목했습니다. 디지털 기기 사용을 배우는 경험과 정서적 연결을 하나의 서비스에서 지원하고자 했습니다.' },
      { label: '나의 기여', text: '팀장으로 서비스 기획과 UX/UI 설계에 참여하고 Figma로 프로토타입을 구성했습니다. 1:1 연결, 커뮤니티, AI 소통 기능을 중심으로 아이디어를 화면에 구체화하고 발표했습니다.' },
      { label: '작업의 의미', text: '누가 사용하는지에 따라 필요한 정보와 화면의 구성이 달라진다는 점을 고민한 작업입니다. 팀의 아이디어를 시각적인 결과물로 정리하는 경험을 쌓았습니다.' },
    ],
  },
  {
    number: '03', category: 'RESEARCH / EXPERIENCE PLANNING', title: 'STARFIELD SUWON',
    summary: '방문자의 동선과 참여를 연결하는 팝업 공간 기획.',
    role: '팀 프로젝트 자료 조사 / 수익 계산 모델 / 기획 고도화',
    outcome: '고객 동선과 참여 전환을 고려한 팝업 클러스터 전략 제안',
    note: '팀 기획안의 전략 화면입니다. 수익 계산은 가정에 따른 시나리오로 진행했습니다.',
    theme: 'red', mediaFit: 'contain', mediaLayout: 'landscape',
    images: [
      { src: '/assets/starfield/strategy.png', alt: '스타필드 수원 팀 기획안의 팝업 클러스터 전략' },
    ],
    story: [
      { label: '기획의 질문', text: '팝업 공간을 방문하는 경험이 참여와 구매로 이어지려면 무엇이 필요할지 고민했습니다. 고객의 이동과 참여 과정을 중심으로 기획 방향을 정리했습니다.' },
      { label: '나의 기여', text: '관련 자료를 조사하고 방문객과 참여율 등 가정을 바탕으로 수익을 계산했습니다. 팀원들과 함께 근거를 검토하며 기획안을 구체화했습니다.' },
      { label: '콘텐츠로의 연결', text: '사용자가 어떤 맥락에서 정보를 만나고 행동하는지 생각하는 연습이었습니다. 기획의 근거를 정리하고 전달하는 역량을 보여주는 보조 프로젝트입니다.' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    number: '01', title: '식당 마케팅',
    description: '가족이 창업한 식당의 마케팅을 담당했습니다. 고객의 연령대를 고려해 메뉴를 기획하고, 실제 매장에서 사용할 배너의 기획부터 제작과 출력까지 직접 진행했습니다. 홍보 전단지도 직접 만들며 고객에게 정보를 전달하는 시각물을 제작했습니다.',
  },
]

export const portfolio = {
  identity: {
    nameKo: '손다빈', nameEn: 'SUN DUOBIN',
    positioning: '사용자의 필요를 읽고, 화면과 콘텐츠로 만듭니다.',
    status: 'GRAPHIC DESIGN / UX/UI / AI PROTOTYPING',
    about: '안녕하세요. 필요한 정보를 이해하기 쉬운 화면과 이미지로 만드는 손다빈입니다. Photoshop과 Illustrator로 이미지 제작의 기초를 익히고, Figma와 생성형 AI를 활용해 아이디어를 프로토타입으로 발전시켜 왔습니다. 어떤 사람이 무엇을 필요로 하는지 먼저 고민하고, 낯선 도구도 배우고 수정하며 결과물을 완성합니다.',
  },
  navItems, strengths, profileRows, projects, experiences,
}
