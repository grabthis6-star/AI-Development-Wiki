import { mkdir, copyFile } from 'node:fs/promises'

await mkdir('dist', { recursive: true })
await copyFile('dashboard.html', 'dist/index.html')
console.log('AI Development OS dashboard build complete')
