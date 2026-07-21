import { mkdir, copyFile } from 'node:fs/promises'

await import('./generate-docs.mjs')
await mkdir('dist', { recursive: true })
await copyFile('dashboard-v2.html', 'dist/index.html')
await copyFile('knowledge-data.js', 'dist/knowledge-data.js')
await copyFile('GUIDEFLOW_CONTEXT.md', 'dist/GUIDEFLOW_CONTEXT.md')
await copyFile('TECH_INDEX.md', 'dist/TECH_INDEX.md')
await copyFile('AI_RULES.md', 'dist/AI_RULES.md')

console.log('Built GuideFlow knowledge site in dist/')
