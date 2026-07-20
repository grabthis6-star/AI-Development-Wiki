import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

type WikiItem = {
  title: string
  description: string
  icon: string
  category: string
  keywords: string[]
}

const wikiItems: WikiItem[] = [
  {
    title: '처음 시작하기',
    description: '새 프로젝트를 시작할 때 GPT가 가장 먼저 읽는 안내서',
    icon: '🚩',
    category: '시작하기',
    keywords: ['start here', '프로젝트 시작', '규칙'],
  },
  {
    title: 'AI와 협업하기',
    description: '기능을 하나씩 만들고 실제 사이트에서 확인하는 작업 방식',
    icon: '🤖',
    category: 'AI 협업',
    keywords: ['chatgpt', '프롬프트', '협업'],
  },
  {
    title: 'VS Code',
    description: '프로그램을 만들고 고치는 작업실',
    icon: '💻',
    category: '개발환경',
    keywords: ['에디터', '작업실', '코드'],
  },
  {
    title: 'Node.js',
    description: '개발 도구를 움직이는 엔진',
    icon: '⚙️',
    category: '개발환경',
    keywords: ['node', '엔진', '실행'],
  },
  {
    title: 'GitHub',
    description: '코드와 변경 기록을 보관하는 온라인 금고',
    icon: '☁️',
    category: '저장과 배포',
    keywords: ['git', '온라인 금고', '저장소'],
  },
  {
    title: 'Vercel',
    description: 'GitHub의 최신 코드를 웹사이트로 자동 배포하는 서비스',
    icon: '🚀',
    category: '저장과 배포',
    keywords: ['버셀', '배포', '사이트 주소'],
  },
  {
    title: '문제 해결 기록',
    description: '실패 원인과 해결 방법을 다음 프로젝트에서도 재사용하는 공간',
    icon: '🧰',
    category: '문제 해결',
    keywords: ['오류', '버그', '해결'],
  },
  {
    title: 'GuideFlow 사례',
    description: 'GuideFlow를 만들며 배운 실제 개발 경험',
    icon: '🎬',
    category: '실전 사례',
    keywords: ['guideflow', '사례', '스토리보드'],
  },
]

function App() {
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return wikiItems

    return wikiItems.filter((item) =>
      [item.title, item.description, item.category, ...item.keywords]
        .join(' ')
        .toLowerCase()
        .includes(normalized),
    )
  }, [query])

  return (
    <main>
      <header className="hero">
        <div className="badge">개인 AI 개발 운영체제</div>
        <h1>AI Development Wiki</h1>
        <p>AI와 함께 프로그램을 만들며 배운 모든 것을 기록하고 다시 사용하는 개인 개발 위키</p>

        <label className="search-box">
          <span aria-hidden="true">🔎</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="무엇을 찾고 싶나요? 예: GitHub, 버셀, Node"
            aria-label="위키 검색"
          />
        </label>
      </header>

      <section className="content">
        <div className="section-heading">
          <div>
            <p className="eyebrow">KNOWLEDGE BASE</p>
            <h2>{query ? `“${query}” 검색 결과` : '지식 둘러보기'}</h2>
          </div>
          <span>{filteredItems.length}개 문서</span>
        </div>

        <div className="grid">
          {filteredItems.map((item) => (
            <article className="card" key={item.title}>
              <div className="card-icon" aria-hidden="true">{item.icon}</div>
              <div>
                <p className="category">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="empty-state">
            <strong>아직 해당 문서가 없어.</strong>
            <p>앞으로 새 프로젝트를 진행하면서 관련 내용을 계속 추가할 거야.</p>
          </div>
        )}
      </section>

      <footer>
        <p>GitHub에 기록하고 Vercel로 배포하는 살아 있는 개발 백과사전</p>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
