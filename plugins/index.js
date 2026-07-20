export const builtInPlugins = [
  {
    id: 'projects', name: 'Projects', icon: '📁', order: 10,
    navigation: { label: 'Projects', route: 'project/ai-development-wiki' },
    dashboard: { description: '프로젝트별 문서, 진행률과 다음 작업을 연결합니다.' },
    commands: [{ id: 'open-projects', label: 'Open Projects', route: 'project/ai-development-wiki' }]
  },
  {
    id: 'memory', name: 'AI Memory', icon: '🧠', order: 20,
    navigation: { label: 'AI Memory', route: 'memory' },
    dashboard: { description: '결정 이유와 재사용 가능한 개발 교훈을 저장합니다.' },
    commands: [{ id: 'open-memory', label: 'Open AI Memory', route: 'memory' }]
  },
  {
    id: 'prompts', name: 'Prompt Library', icon: '💬', order: 30,
    navigation: { label: 'Prompt Library', route: 'prompts' },
    dashboard: { description: '반복 가능한 개발 요청문과 작업 템플릿을 관리합니다.' },
    commands: [{ id: 'open-prompts', label: 'Open Prompt Library', route: 'prompts' }]
  },
  {
    id: 'patterns', name: 'Pattern Library', icon: '🧩', order: 40,
    navigation: { label: 'Pattern Library', route: 'patterns' },
    dashboard: { description: '검증된 UI와 문제 해결 패턴을 재사용합니다.' },
    commands: [{ id: 'open-patterns', label: 'Open Pattern Library', route: 'patterns' }]
  },
  {
    id: 'timeline', name: 'Timeline', icon: '🕒', order: 50,
    navigation: { label: 'Timeline', route: 'timeline' },
    dashboard: { description: '프로젝트 변화와 중요한 판단을 시간 순서로 확인합니다.' },
    commands: [{ id: 'open-timeline', label: 'Open Timeline', route: 'timeline' }]
  }
];
