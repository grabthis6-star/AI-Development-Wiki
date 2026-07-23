import { readFile } from 'node:fs/promises'
import {
  project,
  techGroups,
  techTopics,
  aiTopics,
  aiTemplates,
  conceptTopics,
  automationLevels,
  workflowRecipes,
  practicalGuides,
  fieldTips,
  toolPurposes,
  aiTools,
  toolRecipes,
  projectRecipes,
} from './knowledge-data.js'

const failures = []
const check = (condition, message) => {
  if (!condition) failures.push(message)
}

const collections = {
  techGroups,
  techTopics,
  aiTopics,
  aiTemplates,
  conceptTopics,
  automationLevels,
  workflowRecipes,
  practicalGuides,
  fieldTips,
  toolPurposes,
  aiTools,
  toolRecipes,
  projectRecipes,
}

for (const [name, items] of Object.entries(collections)) {
  check(Array.isArray(items), `${name} must be an array`)
  check(items.length > 0, `${name} must not be empty`)
}

const idCollections = { techGroups, techTopics, conceptTopics, practicalGuides, toolPurposes, aiTools, projectRecipes }
for (const [name, items] of Object.entries(idCollections)) {
  const ids = items.map((item) => item.id)
  check(ids.every(Boolean), `${name} contains an item without an id`)
  check(new Set(ids).size === ids.length, `${name} contains duplicate ids`)
}

const purposeIds = new Set(toolPurposes.map((item) => item.id))
for (const tool of aiTools) {
  check(tool.title && tool.summary && tool.provider, `aiTools/${tool.id} is missing required text`)
  check(Array.isArray(tool.tags), `aiTools/${tool.id} must have tags`)
  for (const tag of tool.tags || []) {
    check(purposeIds.has(tag), `aiTools/${tool.id} uses unknown tag: ${tag}`)
  }
  check(/^https:\/\//.test(tool.url), `aiTools/${tool.id} needs an official https URL`)
}

for (const topic of techTopics) {
  check(techGroups.some((group) => group.id === topic.group), `techTopics/${topic.id} uses an unknown group`)
  check(Array.isArray(topic.checks) && topic.checks.length > 0, `techTopics/${topic.id} needs checks`)
}

for (const topic of aiTopics) {
  check(topic.example?.bad && topic.example?.good, `aiTopics/${topic.title} needs bad and good examples`)
}

for (const recipe of projectRecipes) {
  check(recipe.audience && recipe.problem && recipe.completion && recipe.prompt, `projectRecipes/${recipe.id} is incomplete`)
  check(Array.isArray(recipe.flow) && recipe.flow.length > 1, `projectRecipes/${recipe.id} needs a user flow`)
  check(Array.isArray(recipe.mvp) && recipe.mvp.length > 0, `projectRecipes/${recipe.id} needs an MVP`)
}

check(project.version, 'project.version is required')
check(project.updatedAt, 'project.updatedAt is required')
check(project.purpose, 'project.purpose is required')
check(project.handoff, 'project.handoff is required')

const [html, app, build, readme] = await Promise.all([
  readFile('index.html', 'utf8'),
  readFile('app.js', 'utf8'),
  readFile('build.mjs', 'utf8'),
  readFile('README.md', 'utf8'),
])

check(html.includes('./app.js'), 'index.html must load app.js')
check(html.includes('./styles.css'), 'index.html must load styles.css')
check(!html.includes('<style>'), 'index.html must not contain embedded CSS')
check(!html.includes('dashboard-v2'), 'index.html must not reference a legacy dashboard')
check(app.includes('searchItems'), 'app.js must provide integrated search')
check(!app.includes('18개 전체 AI'), 'app.js must not hard-code the tool count')
check(build.includes("copyFile('index.html'"), 'build.mjs must deploy index.html')
check(!build.includes('dashboard-v2.html'), 'build.mjs must not deploy a legacy dashboard')
check(readme.includes('네 가지 핵심 입구'), 'README must describe the four primary entrances')

if (failures.length) {
  console.error('Validation failed:')
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log(`Validation passed: ${Object.values(collections).reduce((sum, items) => sum + items.length, 0)} structured records checked.`)
