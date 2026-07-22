export const toolPurposes = [
  {
    "id": "all",
    "label": "전체"
  },
  {
    "id": "idea",
    "label": "아이디어 정리"
  },
  {
    "id": "research",
    "label": "자료 조사"
  },
  {
    "id": "knowledge",
    "label": "문서·지식 관리"
  },
  {
    "id": "prototype",
    "label": "빠른 시제품"
  },
  {
    "id": "coding",
    "label": "실제 프로그램 개발"
  },
  {
    "id": "connect",
    "label": "외부 서비스 연결"
  },
  {
    "id": "automation",
    "label": "반복 작업 자동화"
  },
  {
    "id": "media",
    "label": "이미지·음성·영상"
  },
  {
    "id": "local",
    "label": "내 컴퓨터에서 실행"
  }
]

export const aiTools = [
  {
    "id": "chatgpt",
    "provider": "OpenAI",
    "kind": "AI 서비스",
    "icon": "💬",
    "title": "ChatGPT",
    "summary": "아이디어를 대화로 구체화하고 문서·이미지·자료를 함께 다루는 범용 작업 공간",
    "useWhen": "무엇을 만들지 정리하거나, 초안을 만들고, 파일과 이미지를 보며 피드백할 때",
    "avoidWhen": "프로젝트 파일을 직접 계속 수정·실행해야 할 때는 Codex가 더 적합합니다.",
    "needs": "ChatGPT 계정과 만들고 싶은 결과에 대한 설명",
    "outputs": [
      "기획서",
      "요청문",
      "문서",
      "이미지 아이디어"
    ],
    "tags": [
      "idea",
      "research",
      "knowledge"
    ],
    "prompt": "내 아이디어를 프로그램의 사용자 흐름, 핵심 기능 3개와 첫 완료 기준으로 정리해줘.",
    "url": "https://chatgpt.com/"
  },
  {
    "id": "chatgpt-projects",
    "provider": "OpenAI",
    "kind": "AI 내부 기능",
    "icon": "📂",
    "title": "ChatGPT Projects",
    "summary": "관련 채팅·파일·지침을 한 프로젝트 안에서 계속 사용하는 공간",
    "useWhen": "같은 프로그램을 여러 채팅에 걸쳐 오래 만들거나 참고 문서를 계속 사용해야 할 때",
    "avoidWhen": "한 번만 묻는 짧은 질문에는 일반 채팅으로 충분합니다.",
    "needs": "프로젝트 목적, 참고 파일, 반복해서 지킬 작업 원칙",
    "outputs": [
      "지속되는 프로젝트 맥락",
      "공통 참고 파일"
    ],
    "tags": [
      "idea",
      "knowledge",
      "coding"
    ],
    "prompt": "이 프로젝트의 파일과 지침을 기준으로 답하고, 이전 결정과 충돌하면 먼저 알려줘.",
    "url": "https://chatgpt.com/"
  },
  {
    "id": "codex",
    "provider": "OpenAI",
    "kind": "개발 에이전트",
    "icon": "🛠️",
    "title": "Codex",
    "summary": "프로젝트 폴더를 읽고 코드 수정·실행·검증까지 맡는 AI 개발 담당자",
    "useWhen": "실제 프로그램 기능 추가, 버그 수정, GitHub 반영과 브라우저 검증이 필요할 때",
    "avoidWhen": "아이디어만 자유롭게 대화하거나 단순 문서 초안만 필요할 때",
    "needs": "프로젝트 폴더, 컨텍스트 문서, 이번 작업, 유지할 기능, 완료 기준",
    "outputs": [
      "수정된 코드",
      "검증 결과",
      "커밋"
    ],
    "tags": [
      "coding",
      "automation",
      "connect"
    ],
    "prompt": "현재 프로젝트와 AGENTS.md를 먼저 읽고 이번 기능만 구현해. 기존 기능을 보호하고 실제 동작까지 검증해.",
    "url": "https://developers.openai.com/codex/"
  },
  {
    "id": "codex-plan",
    "provider": "OpenAI",
    "kind": "Codex 기능",
    "icon": "🗺️",
    "title": "Codex Plan mode",
    "summary": "코드를 바꾸기 전에 AI가 상황을 확인하고 작업 계획을 세우는 모드",
    "useWhen": "요구가 모호하거나 여러 파일·단계가 얽힌 기능을 시작할 때",
    "avoidWhen": "문구 하나처럼 작고 명확한 수정에는 바로 작업해도 됩니다.",
    "needs": "목표, 현재 문제, 절대 바꾸면 안 되는 부분",
    "outputs": [
      "구현 전 계획",
      "질문",
      "위험 요소"
    ],
    "tags": [
      "idea",
      "coding"
    ],
    "prompt": "아직 수정하지 말고 현재 프로젝트를 확인한 뒤 목표·변경 범위·검증 방법을 계획해.",
    "url": "https://learn.chatgpt.com/docs/codex"
  },
  {
    "id": "agents-md",
    "provider": "OpenAI",
    "kind": "Codex 기능",
    "icon": "📜",
    "title": "AGENTS.md",
    "summary": "Codex가 프로젝트에서 반복해서 지켜야 할 규칙을 저장하는 문서",
    "useWhen": "같은 설명이나 실수가 반복되고, 실행·검증 방법을 모든 작업에 적용해야 할 때",
    "avoidWhen": "이번 한 번만 필요한 요청은 채팅에 적는 편이 낫습니다.",
    "needs": "폴더 구조, 실행 방법, 유지 원칙, 완료 기준",
    "outputs": [
      "지속적인 프로젝트 규칙"
    ],
    "tags": [
      "coding",
      "knowledge",
      "automation"
    ],
    "prompt": "최근 반복된 실수를 정리하고 짧고 실용적인 AGENTS.md 규칙으로 제안해.",
    "url": "https://learn.chatgpt.com/docs/agent-configuration/agents-md"
  },
  {
    "id": "skills",
    "provider": "OpenAI",
    "kind": "Codex 기능",
    "icon": "🧩",
    "title": "Skills",
    "summary": "자주 반복하는 전문 작업 절차를 AI가 다시 사용할 수 있게 묶는 기능",
    "useWhen": "문서 제작·검증·배포처럼 같은 순서의 작업을 여러 프로젝트에서 반복할 때",
    "avoidWhen": "한 번뿐인 작업이나 아직 절차가 안정되지 않은 작업",
    "needs": "검증된 작업 순서, 입력 자료, 완료 조건",
    "outputs": [
      "재사용 가능한 AI 작업 절차"
    ],
    "tags": [
      "automation",
      "coding",
      "knowledge"
    ],
    "prompt": "이 작업은 반복될 예정이야. 먼저 안정적인 절차를 정리하고 재사용 가능한 Skill로 만들 가치가 있는지 판단해.",
    "url": "https://learn.chatgpt.com/docs/codex"
  },
  {
    "id": "plugins-mcp",
    "provider": "OpenAI",
    "kind": "Codex 연결 기능",
    "icon": "🔌",
    "title": "Plugins와 MCP",
    "summary": "GitHub·Drive·Slack 같은 외부 정보와 작업 도구를 AI에 연결하는 방법",
    "useWhen": "AI가 프로젝트 밖의 최신 파일·업무 데이터·서비스를 직접 읽거나 작업해야 할 때",
    "avoidWhen": "파일을 직접 첨부하는 것으로 충분하거나 연결 권한이 불필요할 때",
    "needs": "연결할 서비스, 필요한 최소 권한, 사용자 승인",
    "outputs": [
      "외부 데이터 조회",
      "서비스 작업"
    ],
    "tags": [
      "connect",
      "automation",
      "research"
    ],
    "prompt": "[서비스]를 연결해 [작업]을 하고 싶어. 필요한 최소 권한과 안전한 연결 방법을 먼저 설명해.",
    "url": "https://learn.chatgpt.com/docs/plugins"
  },
  {
    "id": "browser-automation",
    "provider": "OpenAI",
    "kind": "Codex 기능",
    "icon": "🌐",
    "title": "Browser Use와 Automations",
    "summary": "공개 화면을 직접 시험하거나 반복 점검을 예약하는 기능",
    "useWhen": "버튼·모바일 화면을 실제로 검증하거나 안정된 점검을 정기 실행할 때",
    "avoidWhen": "코드만 확인하면 되는 작업이나 아직 자주 바뀌는 실험 단계",
    "needs": "확인할 주소, 사용자 행동 순서, 성공 기준",
    "outputs": [
      "실제 화면 검증",
      "예약된 반복 점검"
    ],
    "tags": [
      "automation",
      "coding"
    ],
    "prompt": "공개 주소에서 [행동 순서]를 직접 실행하고 [성공 기준]을 확인해. 코드 확인만으로 완료 처리하지 마.",
    "url": "https://learn.chatgpt.com/docs/codex"
  },
  {
    "id": "claude",
    "provider": "Anthropic",
    "kind": "AI 서비스",
    "icon": "🧠",
    "title": "Claude",
    "summary": "긴 문서와 맥락을 읽고 기획·분석·글쓰기를 함께 진행하는 AI",
    "useWhen": "긴 자료를 바탕으로 요구사항을 정리하거나 설명과 문서 품질을 다듬을 때",
    "avoidWhen": "실제 코드 저장소를 지속적으로 수정하려면 Claude Code나 Codex가 더 적합합니다.",
    "needs": "목적, 참고 자료, 원하는 출력 형식",
    "outputs": [
      "분석",
      "기획서",
      "문서 초안"
    ],
    "tags": [
      "idea",
      "research",
      "knowledge"
    ],
    "prompt": "첨부 자료를 읽고 초보자가 이해하기 어려운 부분과 빠진 맥락을 찾아 쉬운 구조로 다시 정리해.",
    "url": "https://claude.ai/"
  },
  {
    "id": "claude-projects",
    "provider": "Anthropic",
    "kind": "AI 내부 기능",
    "icon": "🗂️",
    "title": "Claude Projects",
    "summary": "채팅·지식 파일·프로젝트 지침을 한 작업공간에 유지하는 기능",
    "useWhen": "긴 문서와 여러 대화를 같은 배경지식으로 연결해야 할 때",
    "avoidWhen": "짧은 일회성 질문에는 필요하지 않습니다.",
    "needs": "프로젝트 지식 파일과 공통 지침",
    "outputs": [
      "지속되는 프로젝트 맥락",
      "지식 기반 대화"
    ],
    "tags": [
      "knowledge",
      "idea",
      "research"
    ],
    "prompt": "프로젝트 지식과 지침을 우선 사용하고, 자료에 없는 내용은 추측이라고 구분해.",
    "url": "https://support.anthropic.com/en/articles/9517075-what-are-projects"
  },
  {
    "id": "artifacts",
    "provider": "Anthropic",
    "kind": "AI 내부 기능",
    "icon": "🎨",
    "title": "Claude Artifacts",
    "summary": "문서·코드·웹페이지·React 시제품을 대화 옆 별도 화면에서 만들고 수정하는 기능",
    "useWhen": "설치 전에 인터랙티브 화면이나 한 페이지 시제품을 빠르게 보고 싶을 때",
    "avoidWhen": "여러 파일, 외부 API, 지속 저장이 필요한 완성형 프로그램",
    "needs": "만들 화면과 사용자가 누를 행동",
    "outputs": [
      "시각적 시제품",
      "문서",
      "다이어그램"
    ],
    "tags": [
      "prototype",
      "idea"
    ],
    "prompt": "설치 없이 바로 확인할 수 있는 Artifact로 [기능] 시제품을 만들고 사용 흐름을 보여줘.",
    "url": "https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them"
  },
  {
    "id": "claude-code",
    "provider": "Anthropic",
    "kind": "개발 에이전트",
    "icon": "⌨️",
    "title": "Claude Code",
    "summary": "터미널에서 프로젝트 코드를 읽고 수정·실행하는 Anthropic의 개발 도구",
    "useWhen": "기존 코드베이스 분석, 구현, 명령 실행과 개발 자동화가 필요할 때",
    "avoidWhen": "터미널 환경이 부담스럽고 시각적인 초보자 흐름이 더 중요할 때",
    "needs": "프로젝트 폴더, 설치 환경, 권한과 완료 기준",
    "outputs": [
      "수정된 코드",
      "터미널 검증 결과"
    ],
    "tags": [
      "coding",
      "automation",
      "connect"
    ],
    "prompt": "현재 코드를 먼저 분석하고 [기능]만 구현해. 변경 전후 테스트와 실행 결과를 함께 알려줘.",
    "url": "https://docs.anthropic.com/en/docs/claude-code/overview"
  },
  {
    "id": "gemini",
    "provider": "Google",
    "kind": "AI 서비스",
    "icon": "✨",
    "title": "Gemini",
    "summary": "Google 검색·Workspace와 연결해 대화, 자료 이해와 생성 작업을 하는 AI",
    "useWhen": "Google 자료·파일과 함께 아이디어를 정리하거나 멀티모달 작업을 할 때",
    "avoidWhen": "로컬 프로젝트 파일을 직접 세밀하게 관리하는 개발 작업",
    "needs": "Google 계정, 사용할 파일과 연결 서비스",
    "outputs": [
      "답변",
      "문서",
      "자료 분석"
    ],
    "tags": [
      "idea",
      "research",
      "knowledge",
      "connect"
    ],
    "prompt": "첨부 자료와 내가 지정한 Google 자료만 기준으로 [결과]를 만들어. 사용한 근거를 구분해.",
    "url": "https://gemini.google.com/"
  },
  {
    "id": "gems",
    "provider": "Google",
    "kind": "AI 내부 기능",
    "icon": "💎",
    "title": "Gemini Gems",
    "summary": "역할·작업·맥락·출력 형식을 저장한 맞춤형 Gemini",
    "useWhen": "같은 역할과 결과 형식으로 반복 질문하고 싶을 때",
    "avoidWhen": "작업 방식이 아직 자주 바뀌거나 한 번만 사용할 때",
    "needs": "역할, 반복 작업, 참고 자료, 원하는 형식",
    "outputs": [
      "일관된 맞춤 응답"
    ],
    "tags": [
      "automation",
      "idea",
      "knowledge"
    ],
    "prompt": "[역할]로 행동하고 [작업]을 수행하며, [자료]를 참고해 항상 [형식]으로 답하는 Gem 지침을 작성해.",
    "url": "https://support.google.com/gemini/answer/15235603"
  },
  {
    "id": "canvas",
    "provider": "Google",
    "kind": "AI 내부 기능",
    "icon": "🖼️",
    "title": "Gemini Canvas",
    "summary": "문서·슬라이드·코드·앱을 별도 작업 화면에서 만들고 수정하는 기능",
    "useWhen": "아이디어를 문서나 간단한 앱 화면으로 빠르게 시각화할 때",
    "avoidWhen": "복잡한 저장소 관리와 정밀한 배포·테스트가 필요할 때",
    "needs": "만들 결과 형식과 핵심 내용",
    "outputs": [
      "문서",
      "코드",
      "앱 시제품"
    ],
    "tags": [
      "prototype",
      "idea",
      "coding"
    ],
    "prompt": "Canvas에서 [사용자]가 [행동]할 수 있는 간단한 앱 시제품을 만들고 바로 미리보기 해줘.",
    "url": "https://support.google.com/gemini/answer/16047321"
  },
  {
    "id": "deep-research",
    "provider": "Google",
    "kind": "AI 내부 기능",
    "icon": "🔎",
    "title": "Gemini Deep Research",
    "summary": "검색과 선택한 자료를 바탕으로 조사 계획을 세우고 긴 보고서를 만드는 기능",
    "useWhen": "시장·기술·경쟁 제품처럼 최신 자료를 여러 출처에서 조사할 때",
    "avoidWhen": "빠른 단답이나 이미 제공한 문서만 분석하면 될 때",
    "needs": "조사 질문, 범위, 포함·제외할 출처",
    "outputs": [
      "출처가 포함된 조사 보고서"
    ],
    "tags": [
      "research",
      "idea"
    ],
    "prompt": "[주제]를 [범위]에서 조사해. 계획을 먼저 보여주고 공식·1차 출처를 우선해 비교표와 결론을 작성해.",
    "url": "https://support.google.com/gemini/answer/15719111"
  },
  {
    "id": "notebooklm",
    "provider": "Google",
    "kind": "지식 도구",
    "icon": "📚",
    "title": "NotebookLM",
    "summary": "업로드한 PDF·웹·영상·문서를 근거로 질문하고 요약·학습 자료를 만드는 도구",
    "useWhen": "내 자료를 벗어나지 않고 인용과 함께 이해·정리하고 싶을 때",
    "avoidWhen": "자유로운 창작이나 로컬 코드 파일을 직접 수정할 때",
    "needs": "신뢰할 수 있는 출처 파일과 질문",
    "outputs": [
      "인용 답변",
      "요약",
      "마인드맵",
      "오디오 개요"
    ],
    "tags": [
      "knowledge",
      "research"
    ],
    "prompt": "선택한 출처만 사용해 [질문]에 답하고, 각 판단의 근거가 되는 출처를 표시해.",
    "url": "https://support.google.com/notebooklm/answer/16164461"
  },
  {
    "id": "ai-studio",
    "provider": "Google",
    "kind": "개발 플랫폼",
    "icon": "🧪",
    "title": "Google AI Studio",
    "summary": "자연어로 Gemini 기반 웹·Android 앱을 만들고 미리보기·내보내기하는 개발 공간",
    "useWhen": "Gemini API, 이미지·음성 기능이나 Google 서비스 연결 앱을 빠르게 시험할 때",
    "avoidWhen": "AI 기능이 없는 단순 사이트이거나 이미 다른 저장소·배포 흐름이 안정됐을 때",
    "needs": "Google 계정, 앱 아이디어, 사용할 AI 능력과 비용 범위",
    "outputs": [
      "웹 앱",
      "Android 시제품",
      "Gemini API 프로젝트"
    ],
    "tags": [
      "prototype",
      "coding",
      "connect"
    ],
    "prompt": "Build 모드에서 [사용자]가 [행동]하는 앱을 만들어. 필요한 AI 기능과 권한을 먼저 설명하고 라이브 미리보기로 검증해.",
    "url": "https://ai.google.dev/gemini-api/docs/aistudio-build-mode"
  },
  {
    "id": "codex-cli",
    "provider": "OpenAI",
    "kind": "CLI 개발 에이전트",
    "icon": "⌨️",
    "title": "Codex CLI",
    "summary": "터미널에서 로컬 프로젝트를 읽고 수정·실행하는 Codex 사용 방식",
    "useWhen": "앱보다 빠른 반복 작업, 명령 실행과 로컬 저장소 중심 개발이 필요할 때",
    "avoidWhen": "터미널이 부담스럽고 작은 화면 시안만 확인할 때",
    "needs": "Codex CLI 설치, 프로젝트 폴더, 작업 목표와 권한 범위",
    "outputs": [
      "코드 수정",
      "명령 실행",
      "테스트 결과"
    ],
    "tags": [
      "coding",
      "automation",
      "local"
    ],
    "prompt": "현재 폴더를 먼저 확인하고 이번 기능만 구현해. 실행한 명령과 검증 결과를 구분해 알려줘.",
    "url": "https://developers.openai.com/codex/cli/"
  },
  {
    "id": "openai-api",
    "provider": "OpenAI",
    "kind": "개발 연결",
    "icon": "🔗",
    "title": "OpenAI API",
    "summary": "프로그램 안에서 AI의 텍스트·이미지·음성·도구 사용 기능을 호출하는 공식 통로",
    "useWhen": "사용자가 버튼을 누르면 프로그램이 자동으로 AI 기능을 실행해야 할 때",
    "avoidWhen": "ChatGPT 화면에서 사람이 직접 몇 번 실행하는 것으로 충분할 때",
    "needs": "API 계정, 키 보관 방법, 예상 사용량과 비용 한도",
    "outputs": [
      "프로그램 내 AI 기능",
      "자동 반복 호출"
    ],
    "tags": [
      "coding",
      "connect",
      "automation",
      "media"
    ],
    "prompt": "[기능]에 API를 붙이기 전에 예상 호출량, 비용 제한, 키 보관과 실패 처리를 설계해.",
    "url": "https://developers.openai.com/api/"
  },
  {
    "id": "n8n",
    "provider": "n8n",
    "kind": "워크플로 자동화",
    "icon": "🔁",
    "title": "n8n",
    "summary": "여러 서비스와 AI 작업을 노드로 연결하는 워크플로 자동화 도구",
    "useWhen": "메일·문서·데이터·AI 호출을 조건과 순서에 따라 반복 연결할 때",
    "avoidWhen": "아직 한 번도 수동으로 성공하지 않은 작업이나 간단한 한 단계 작업",
    "needs": "연결할 서비스 계정, 트리거, 입력·출력과 실패 시 행동",
    "outputs": [
      "자동 워크플로",
      "실행 기록"
    ],
    "tags": [
      "automation",
      "connect"
    ],
    "prompt": "이 작업을 먼저 수동 단계로 정리하고, n8n에서 필요한 트리거·노드·실패 알림을 설계해.",
    "url": "https://docs.n8n.io/"
  },
  {
    "id": "comfyui",
    "provider": "ComfyUI",
    "kind": "로컬 생성 도구",
    "icon": "🎨",
    "title": "ComfyUI",
    "summary": "이미지·영상 생성 모델과 처리 단계를 노드로 연결하는 오픈소스 작업 환경",
    "useWhen": "생성 과정을 세밀하게 통제하거나 반복 가능한 이미지·영상 워크플로가 필요할 때",
    "avoidWhen": "컴퓨터 성능과 설치 관리가 부담스럽거나 몇 장만 빠르게 만들 때",
    "needs": "지원 가능한 GPU·저장 공간, 모델, 워크플로와 출력 기준",
    "outputs": [
      "이미지·영상",
      "재사용 워크플로"
    ],
    "tags": [
      "media",
      "local",
      "automation"
    ],
    "prompt": "내 컴퓨터 사양에서 ComfyUI가 현실적인지 판단하고, 가능하면 가장 작은 공식 설치와 첫 이미지 생성까지만 안내해.",
    "url": "https://docs.comfy.org/"
  },
  {
    "id": "whisper",
    "provider": "OpenAI",
    "kind": "로컬 음성 도구",
    "icon": "🎙️",
    "title": "Whisper",
    "summary": "음성 파일을 글자로 바꾸고 언어를 인식하는 오픈소스 음성 인식 모델",
    "useWhen": "녹음·영상에서 대본이나 자막 초안을 자동 생성할 때",
    "avoidWhen": "짧은 파일 몇 개를 기존 편집 프로그램에서 바로 처리할 수 있을 때",
    "needs": "Python 환경, FFmpeg, 음성 파일과 사용할 언어",
    "outputs": [
      "음성 전사",
      "자막 초안",
      "언어 인식"
    ],
    "tags": [
      "media",
      "local",
      "automation"
    ],
    "prompt": "Whisper 설치가 필요한지 먼저 판단하고, 필요하면 Python·FFmpeg 의존성과 짧은 음성 파일 검증부터 안내해.",
    "url": "https://github.com/openai/whisper"
  },
  {
    "id": "elevenlabs",
    "provider": "ElevenLabs",
    "kind": "음성 서비스",
    "icon": "🗣️",
    "title": "ElevenLabs TTS",
    "summary": "텍스트를 자연스러운 음성으로 변환하고 API로 프로그램에 연결하는 서비스",
    "useWhen": "영상 내레이션·오디오 콘텐츠·다국어 음성 초안이 필요할 때",
    "avoidWhen": "기본 시스템 음성으로 충분하거나 외부에 보낼 수 없는 민감한 대본",
    "needs": "대본, 목소리 사용 권리, 언어, 비용과 출력 형식",
    "outputs": [
      "음성 파일",
      "스트리밍 음성"
    ],
    "tags": [
      "media",
      "automation",
      "connect"
    ],
    "prompt": "이 대본을 TTS로 만들기 전에 목소리 권리, 예상 글자 수와 비용, 출력 형식을 확인해.",
    "url": "https://elevenlabs.io/docs/overview/capabilities/text-to-speech"
  },
  {
    "id": "task-scheduler",
    "provider": "Microsoft",
    "kind": "운영체제 자동화",
    "icon": "⏰",
    "title": "Windows 작업 스케줄러",
    "summary": "정해진 시간이나 조건에 프로그램과 스크립트를 자동 실행하는 Windows 기능",
    "useWhen": "이미 안정적으로 동작하는 로컬 작업을 정기 실행할 때",
    "avoidWhen": "작업이 아직 자주 실패하거나 실행 결과를 감시할 방법이 없을 때",
    "needs": "실행할 명령, 시간·조건, 로그 위치와 중지 방법",
    "outputs": [
      "예약 실행",
      "반복 유지 작업"
    ],
    "tags": [
      "automation",
      "local"
    ],
    "prompt": "이 작업을 예약하기 전에 수동 실행을 검증하고 로그·실패 알림·중지 방법을 포함해 설정해.",
    "url": "https://learn.microsoft.com/en-us/windows/win32/taskschd/task-scheduler-start-page"
  },
  {
    "id": "ffmpeg-tool",
    "provider": "FFmpeg",
    "kind": "미디어 처리 CLI",
    "icon": "🎞️",
    "title": "FFmpeg",
    "summary": "영상·음성·이미지를 변환·결합하고 결과 파일을 만드는 명령줄 도구",
    "useWhen": "자막·음성·이미지 결합, 형식 변환과 영상 초벌 조립이 필요할 때",
    "avoidWhen": "편집 프로그램에서 한두 번 처리하면 충분하거나 결과 파일이 아직 필요 없을 때",
    "needs": "원본 파일, 원하는 형식·비율·해상도와 설치 환경",
    "outputs": [
      "MP4",
      "GIF",
      "오디오",
      "썸네일"
    ],
    "tags": [
      "media",
      "local",
      "automation"
    ],
    "prompt": "FFmpeg로 [결과]를 만들기 전에 입력 형식과 원하는 비율·해상도를 확인하고 짧은 샘플부터 검증해.",
    "url": "https://ffmpeg.org/documentation.html"
  }
]

export const toolRecipes = [
  {
    "title": "빠른 아이디어 시제품",
    "tools": [
      "ChatGPT 또는 Claude",
      "Artifacts 또는 Canvas"
    ],
    "description": "대화로 흐름을 정한 뒤 설치 없이 화면을 먼저 확인합니다."
  },
  {
    "title": "실제 웹 프로그램",
    "tools": [
      "Codex 또는 Claude Code",
      "Node.js",
      "GitHub",
      "Vercel"
    ],
    "description": "프로젝트 파일을 수정하고 버전·배포·실제 화면까지 검증합니다."
  },
  {
    "title": "자료 기반 프로그램",
    "tools": [
      "NotebookLM",
      "ChatGPT 또는 Claude",
      "Codex"
    ],
    "description": "신뢰할 자료를 먼저 정리한 뒤 그 지식을 활용하는 프로그램을 만듭니다."
  },
  {
    "title": "Google 업무 자동화",
    "tools": [
      "Gemini 또는 AI Studio",
      "Gmail·Drive·Sheets 연결"
    ],
    "description": "Google 계정의 업무 데이터를 사용하는 도구를 설계합니다."
  },
  {
    "title": "반복 개발 자동화",
    "tools": [
      "AGENTS.md",
      "Skills",
      "MCP·Plugins",
      "Automations"
    ],
    "description": "검증된 규칙과 반복 절차를 다음 작업에서도 자동으로 재사용합니다."
  },
  {
    "title": "영상 초벌 자동화",
    "tools": [
      "자료 조사 AI",
      "이미지·영상 생성",
      "ElevenLabs TTS",
      "Whisper",
      "FFmpeg"
    ],
    "description": "대본부터 초벌 영상까지 반복 단계를 자동화하고 사람이 최종 편집합니다."
  },
  {
    "title": "로컬 이미지 워크플로",
    "tools": [
      "ComfyUI",
      "로컬 GPU 또는 클라우드 실행",
      "재사용 워크플로"
    ],
    "description": "설치 부담과 컴퓨터 성능을 먼저 확인한 뒤 반복 가능한 생성 흐름을 만듭니다."
  },
  {
    "title": "예약 업무 자동화",
    "tools": [
      "n8n 또는 Skills",
      "MCP·API",
      "Windows 작업 스케줄러 또는 Automations"
    ],
    "description": "수동으로 검증된 작업만 예약하고 로그·실패 알림·중지 방법을 함께 둡니다."
  }
]

