import { mkdir, copyFile } from 'node:fs/promises'

await mkdir('dist/data', { recursive: true })
await copyFile('dashboard-v2.html', 'dist/index.html')
await copyFile('app.js', 'dist/app.js')
await copyFile('data/wiki-data.js', 'dist/data/wiki-data.js')
console.log('AI Development OS modular build complete')
