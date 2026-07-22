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

assert.match(app.innerHTML, /세 곳 중 하나에서 시작하세요/)
assert.match(app.innerHTML, /id="site-search"/)
assert.equal((app.innerHTML.match(/class="doc-card"/g) || []).length, 3)

const routeExpectations = {
  context: 'GuideFlow를 새 AI에게 전달하는 문서',
  tech: 'AI와 만들기 위한 준비 가이드',
  ai: '실패에서 만든 AI 협업 규칙',
  tools: '만들고 싶은 능력으로 도구 찾기',
  concepts: '도구 이름을 알아야 AI에게 능력을 요청할 수 있습니다',
  automation: '완전 자동화보다',
  practical: 'AI가 만들고, 사용자가 준비하고 확인하는 실전 작업법',
}

for (const [route, expectedText] of Object.entries(routeExpectations)) {
  location.hash = `#${route}`
  listeners.hashchange()
  assert.match(app.innerHTML, new RegExp(expectedText))
}

console.log(`UI smoke passed: home and ${Object.keys(routeExpectations).length} routes rendered.`)
