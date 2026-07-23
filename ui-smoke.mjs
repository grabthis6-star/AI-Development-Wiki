import assert from 'node:assert/strict'

const app = { innerHTML: '' }
const toast = {
  textContent: '',
  classList: {
    add() {},
    remove() {},
  },
}
const listeners = {}

globalThis.location = { hash: '' }
globalThis.scrollTo = () => {}
globalThis.addEventListener = (name, callback) => {
  listeners[name] = callback
}
globalThis.document = {
  querySelector(selector) {
    if (selector === '#app') return app
    if (selector === '#toast') return toast
    return null
  },
  querySelectorAll() {
    return []
  },
  createElement() {
    return {
      value: '',
      style: {},
      setAttribute() {},
      select() {},
      remove() {},
    }
  },
  body: {
    appendChild() {},
  },
  execCommand() {
    return true
  },
}
Object.defineProperty(globalThis, 'navigator', {
  value: {},
  configurable: true,
})

await import('./app.js')

assert.match(app.innerHTML, /네 곳 중 하나에서 시작하세요/)
assert.match(app.innerHTML, /id="site-search"/)
assert.equal((app.innerHTML.match(/class="doc-card"/g) || []).length, 4)

const routeExpectations = {
  context: 'GuideFlow를 새 AI에게 전달하는 문서',
  projects: '새 프로그램 만들기',
  tech: 'AI와 만들기 위한 준비 가이드',
  ai: '실패에서 만든 AI 협업 규칙',
  tools: '만들고 싶은 능력으로 도구 찾기',
  concepts: 'AI 도구 용어 이해',
  automation: '완전 자동화보다',
  practical: 'AI 실전 작업법',
}

for (const [route, expectedText] of Object.entries(routeExpectations)) {
  location.hash = `#${route}`
  listeners.hashchange()
  assert.match(app.innerHTML, new RegExp(expectedText))
}

for (const route of ['projects/english-study', 'ai/1', 'tech/git', 'concept/api', 'practical/repository-handoff', 'tool/codex']) {
  location.hash = `#${route}`
  listeners.hashchange()
  assert.match(app.innerHTML, /class="workspace"/)
  assert.match(app.innerHTML, /class="workspace-item active"/)
  assert.match(app.innerHTML, /class="detail detail-panel"/)
  assert.doesNotMatch(app.innerHTML, /← (협업|준비|용어|실전 운영|도구) 목록/)
}

location.hash = '#ai/0'
listeners.hashchange()
assert.match(app.innerHTML, /좋지 않은 요청/)
assert.match(app.innerHTML, /개선된 요청/)

location.hash = '#projects/video-helper'
listeners.hashchange()
assert.match(app.innerHTML, /id="project-builder"/)
assert.match(app.innerHTML, /영상 제작 보조 도구/)

console.log(`UI smoke passed: home, ${Object.keys(routeExpectations).length} sections, and master-detail routes rendered.`)
