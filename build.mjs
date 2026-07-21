import { mkdir, copyFile } from 'node:fs/promises'

await import('./generate-docs.mjs')
await mkdir('dist', { recursive: true })
await copyFile('dashboard-v2.html', 'dist/index.html')
await copyFile('knowledge-data.js', 'dist/knowledge-data.js')
await copyFile('GUIDEFLOW_CONTEXT.md', 'dist/GUIDEFLOW_CONTEXT.md')
await copyFile('TECH_INDEX.md', 'dist/TECH_INDEX.md')
await copyFile('AI_RULES.md', 'dist/AI_RULES.md')
await copyFile('AI_TOOL_MAP.md', 'dist/AI_TOOL_MAP.md')
await copyFile('CONCEPT_GUIDE.md', 'dist/CONCEPT_GUIDE.md')
await copyFile('AUTOMATION_GUIDE.md', 'dist/AUTOMATION_GUIDE.md')
await copyFile('PRACTICAL_GUIDE.md', 'dist/PRACTICAL_GUIDE.md')

console.log('Built GuideFlow knowledge site in dist/')

