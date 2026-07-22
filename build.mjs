import { mkdir, copyFile, cp, rm } from 'node:fs/promises'

await import('./generate-docs.mjs')
await rm('dist', { recursive: true, force: true })
await mkdir('dist', { recursive: true })
await copyFile('index.html', 'dist/index.html')
await copyFile('styles.css', 'dist/styles.css')
await copyFile('app.js', 'dist/app.js')
await copyFile('knowledge-data.js', 'dist/knowledge-data.js')
await cp('data', 'dist/data', { recursive: true })
await copyFile('GUIDEFLOW_CONTEXT.md', 'dist/GUIDEFLOW_CONTEXT.md')
await copyFile('TECH_INDEX.md', 'dist/TECH_INDEX.md')
await copyFile('AI_RULES.md', 'dist/AI_RULES.md')
await copyFile('AI_TOOL_MAP.md', 'dist/AI_TOOL_MAP.md')
await copyFile('CONCEPT_GUIDE.md', 'dist/CONCEPT_GUIDE.md')
await copyFile('AUTOMATION_GUIDE.md', 'dist/AUTOMATION_GUIDE.md')
await copyFile('PRACTICAL_GUIDE.md', 'dist/PRACTICAL_GUIDE.md')

console.log('Built GuideFlow knowledge site in dist/')

