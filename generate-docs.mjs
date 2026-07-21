import { writeFile } from 'node:fs/promises'
import { project, techGroups, techTopics, aiTopics, aiTemplates } from './knowledge-data.js'

const section = (title, body) => `\n## ${title}\n\n${body}\n`

const techById = new Map(techTopics.map((topic) => [topic.id, topic]))
let techMarkdown = `# GuideFlow 기술 색인\n\n${project.purpose}\n\n이 문서는 웹사이트의 단일 지식 데이터에서 자동 생성됩니다. 기술 이름만 나열하지 않고 GuideFlow에서 왜 사용했는지와 재사용 방법까지 함께 설명합니다.\n`

for (const group of techGroups) {
  const cards = group.topicIds.map((id) => techById.get(id)).filter(Boolean)
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

console.log('Generated TECH_INDEX.md and AI_RULES.md from knowledge-data.js')
