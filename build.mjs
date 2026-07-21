import { mkdir, copyFile, cp } from 'node:fs/promises'

await mkdir('dist/data', { recursive: true })
await copyFile('dashboard-v2.html', 'dist/index.html')
await copyFile('app.js', 'dist/app.js')
await copyFile('data/wiki-data.js', 'dist/data/wiki-data.js')
await copyFile('GUIDEFLOW_CONTEXT.md', 'dist/GUIDEFLOW_CONTEXT.md')
await copyFile('TECH_INDEX.md', 'dist/TECH_INDEX.md')
await copyFile('AI_RULES.md', 'dist/AI_RULES.md')
await cp('core', 'dist/core', { recursive: true })
await cp('plugins', 'dist/plugins', { recursive: true })
console.log('AI Development OS plugin build complete')
