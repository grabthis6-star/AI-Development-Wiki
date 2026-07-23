import { access, readFile } from 'node:fs/promises'

const requiredFiles = [
  'dist/index.html',
  'dist/styles.css',
  'dist/app.js',
  'dist/knowledge-data.js',
  'dist/data/project.js',
  'dist/data/tech.js',
  'dist/data/collaboration.js',
  'dist/data/concepts.js',
  'dist/data/automation.js',
  'dist/data/practical.js',
  'dist/data/tools.js',
  'dist/data/projects.js',
  'dist/GUIDEFLOW_CONTEXT.md',
  'dist/TECH_INDEX.md',
  'dist/AI_RULES.md',
  'dist/AI_TOOL_MAP.md',
  'dist/CONCEPT_GUIDE.md',
  'dist/AUTOMATION_GUIDE.md',
  'dist/PRACTICAL_GUIDE.md',
  'dist/PROJECT_RECIPES.md',
]

await Promise.all(requiredFiles.map((path) => access(path)))
const html = await readFile('dist/index.html', 'utf8')
if (!html.includes('./app.js') || !html.includes('./styles.css')) {
  throw new Error('Built index does not reference the application assets.')
}

console.log(`Build bundle passed: ${requiredFiles.length} required files found.`)
