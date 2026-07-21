import { writeFile } from 'node:fs/promises'
import { project, techGroups, techTopics, aiTopics, aiTemplates, conceptTopics, automationLevels, workflowRecipes, aiTools, toolRecipes } from './knowledge-data.js'

const section = (title, body) => `\n## ${title}\n\n${body}\n`

let techMarkdown = `# GuideFlow 기술 색인\n\n${project.purpose}\n\n이 문서는 웹사이트의 단일 지식 데이터에서 자동 생성됩니다. 기술 이름만 나열하지 않고 GuideFlow에서 왜 사용했는지와 재사용 방법까지 함께 설명합니다.\n`

const starterToolIds = ['chatgpt-projects', 'codex', 'agents-md', 'claude-projects', 'gems', 'notebooklm', 'ai-studio']
const starterTools = starterToolIds.map((id) => aiTools.find((tool) => tool.id === id)).filter(Boolean)
techMarkdown += section('AI 작업 환경 선택하기', `모든 도구를 설치할 필요는 없습니다. 대화·기획용 AI 하나와 실제 파일을 수정할 개발 도구 하나부터 선택하세요. 전체 비교는 AI_TOOL_MAP.md에서 확인할 수 있습니다.\n\n${starterTools.map((tool) => [
  `### ${tool.icon} ${tool.title}`,
  `- 종류: ${tool.provider} · ${tool.kind}`,
  `- 언제 사용: ${tool.useWhen}`,
  `- 사용자가 준비할 것: ${tool.needs}`,
  `- 공식 안내: ${tool.url}`,
].join('\n')).join('\n\n')}`)

for (const group of techGroups) {
  const cards = techTopics.filter((topic) => topic.group === group.id)
  techMarkdown += section(group.title, `${group.description}\n\n${cards.map((topic) => [
    `### ${topic.icon} ${topic.title}`,
    `- 한 줄 설명: ${topic.summary}`,
    `- GuideFlow 사용 위치: ${topic.place}`,
    `- 사용 이유: ${topic.why}`,
    `- 다른 프로젝트 재사용: ${topic.reuse}`,
    `- 확인 항목: ${topic.checks.join(' / ')}`,
  ].join('\n')).join('\n\n')}`)
}

let aiMarkdown = `# AI 협업 규칙\n\nGuideFlow를 만들며 검증한, 다음 프로그램에도 그대로 적용할 수 있는 협업 규칙입니다.\n`
aiMarkdown += section('핵심 규칙', aiTopics.map((topic) => [
  `### ${topic.icon} ${topic.title}`,
  `- 문제: ${topic.problem}`,
  `- 규칙: ${topic.rule}`,
  `- AI 요청문:\n\n> ${topic.prompt}`,
].join('\n')).join('\n\n'))
aiMarkdown += section('상황별 요청 양식', aiTemplates.map((template) => [
  `### ${template.title}`,
  template.description,
  '```text',
  template.prompt,
  '```',
].join('\n\n')).join('\n\n'))

await writeFile('TECH_INDEX.md', techMarkdown, 'utf8')
await writeFile('AI_RULES.md', aiMarkdown, 'utf8')

let conceptMarkdown = `# AI 개발 도구 용어 가이드\n\n초보자가 AI에게 필요한 능력을 정확히 요청할 수 있도록 앱, CLI, API, 플러그인, MCP, 스킬과 에이전트의 차이를 설명합니다.\n`
conceptMarkdown += section('핵심 용어', conceptTopics.map((topic) => [
  `### ${topic.icon} ${topic.title}`,
  `- 한 줄 설명: ${topic.summary}`,
  `- 쉽게 비유하면: ${topic.easy}`,
  `- 왜 필요한가: ${topic.why}`,
  `- 사용자가 할 일: ${topic.userRole}`,
  `- AI가 할 일: ${topic.aiRole}`,
  `- 추천 상황: ${topic.when}`,
  `- 필요 없는 상황: ${topic.avoid}`,
  `- 요청문: ${topic.prompt}`,
].join('\n')).join('\n\n'))
await writeFile('CONCEPT_GUIDE.md', conceptMarkdown, 'utf8')

let automationMarkdown = `# 자동화 설계 가이드\n\n완전 자동화를 목표로 기능을 무겁게 만들지 않고, 반복되는 기본 틀을 AI가 처리한 뒤 사람이 최종 판단하도록 설계합니다.\n`
automationMarkdown += section('자동화 다섯 단계', automationLevels.map((item) => `### ${item.level}단계 — ${item.title}\n\n${item.summary}\n\n- 사용자: ${item.user}\n- AI: ${item.ai}\n- 예시: ${item.example}\n- 주의: ${item.risk}`).join('\n\n'))
automationMarkdown += section('실전 작업 흐름', workflowRecipes.map((recipe) => `### ${recipe.icon} ${recipe.title}\n\n${recipe.steps.join(' → ')}\n\n- 도구: ${recipe.tools.join(' + ')}\n- 원칙: ${recipe.principle}`).join('\n\n'))
await writeFile('AUTOMATION_GUIDE.md', automationMarkdown, 'utf8')

let toolMarkdown = `# AI와 도구 지도\n\n목적에 맞는 AI 서비스, 내부 기능과 개발 도구를 발견하고 조합하기 위한 카탈로그입니다. 기능과 요금제는 바뀔 수 있으므로 각 공식 링크에서 최신 정보를 확인하세요.\n`
for (const provider of [...new Set(aiTools.map((tool) => tool.provider))]) {
  const tools = aiTools.filter((tool) => tool.provider === provider)
  toolMarkdown += section(provider, tools.map((tool) => [
    `### ${tool.icon} ${tool.title}`,
    `- 종류: ${tool.kind}`,
    `- 한 줄 설명: ${tool.summary}`,
    `- 추천 상황: ${tool.useWhen}`,
    `- 필요 없는 상황: ${tool.avoidWhen}`,
    `- 사용자가 준비할 것: ${tool.needs}`,
    `- 공식 안내: ${tool.url}`,
    `- 요청문:\n\n> ${tool.prompt}`,
  ].join('\n')).join('\n\n'))
}
toolMarkdown += section('추천 조합', toolRecipes.map((recipe) => `### ${recipe.title}\n\n${recipe.tools.join(' + ')}\n\n${recipe.description}`).join('\n\n'))
await writeFile('AI_TOOL_MAP.md', toolMarkdown, 'utf8')

console.log('Generated TECH_INDEX.md, AI_RULES.md, CONCEPT_GUIDE.md, AUTOMATION_GUIDE.md and AI_TOOL_MAP.md from knowledge-data.js')

