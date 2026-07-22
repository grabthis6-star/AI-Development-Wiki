# GuideFlow Knowledge Base

GuideFlow를 만들며 실제로 사용한 기술과 AI 협업 노하우를 다음 프로그램에서도 바로 재사용할 수 있게 정리한 저장소입니다.

사이트: https://ai-development-wiki.vercel.app

## 세 가지 핵심 입구

처음 방문했을 때는 아래 세 곳 중 하나만 선택하면 됩니다.

1. **Start Here** — GuideFlow의 목적, 제품 원칙과 새 AI 시작문
2. **AI와 프로그램 만들기** — 기능 요청, 오류 전달, 기존 기능 보호와 완료 확인
3. **GuideFlow에서 배운 기술** — 설치·개발 도구의 사용 이유와 실제 시행착오

도구 지도, 용어, 자동화와 실전 운영 문서는 필요한 순간에 찾아보는 참고 자료로 제공합니다.

## 문서 구조

- [GUIDEFLOW_CONTEXT.md](GUIDEFLOW_CONTEXT.md) — GuideFlow의 목적과 작업 방식
- [TECH_INDEX.md](TECH_INDEX.md) — 프로그램 제작에 필요한 도구와 사용 이유
- [AI_RULES.md](AI_RULES.md) — AI에게 일을 맡기고 결과를 확인하는 방법
- [CONCEPT_GUIDE.md](CONCEPT_GUIDE.md) — CLI, API, 플러그인, MCP, 스킬과 에이전트 설명
- [AUTOMATION_GUIDE.md](AUTOMATION_GUIDE.md) — 자동화 수준과 실제 작업 흐름
- [AI_TOOL_MAP.md](AI_TOOL_MAP.md) — AI 서비스와 제작 도구 선택 가이드
- [PRACTICAL_GUIDE.md](PRACTICAL_GUIDE.md) — 설치·세션·권한·비용·미디어 검수 실전 가이드

## 저장소 구조

- `index.html` — 사이트의 유일한 HTML 진입점
- `styles.css` — 화면 스타일과 반응형 레이아웃
- `app.js` — 화면, 탐색, 검색과 복사 기능
- `data/*.js` — 주제별 지식 데이터 원본
- `knowledge-data.js` — 데이터 모듈 재내보내기
- `generate-docs.mjs` — 데이터에서 Markdown 문서 생성
- `build.mjs` — Vercel 배포용 `dist/` 생성
- `check.mjs` — 데이터와 진입 구조 검사
- `AGENTS.md` — AI가 저장소에서 지켜야 할 규칙

자동 생성되는 Markdown 문서는 직접 고치지 않고 먼저 `data/*.js`를 수정합니다.

## 로컬 확인

~~~bash
npm test
~~~

이 명령은 다음을 한 번에 확인합니다.

1. 구조화된 데이터와 ID
2. 공식 링크 형식과 도구 태그
3. HTML·CSS·JavaScript 진입 구조
4. Markdown 문서 생성
5. Vercel 배포 파일 구성

## 안전한 작업 방식

- `main`에서 직접 수정하지 않습니다.
- 작업마다 별도 브랜치를 만듭니다.
- `npm test`를 통과한 뒤 초안 PR을 엽니다.
- PR의 미리보기 배포에서 화면을 확인한 뒤 병합합니다.
- 문제가 있으면 PR을 닫거나 병합 커밋을 되돌립니다.

## 새 AI 작업 시작문

~~~text
GUIDEFLOW_CONTEXT.md와 AGENTS.md를 먼저 읽고 작업 기준으로 사용해.
나는 비개발자이므로 쉬운 말로 설명해.
요청 범위를 임의로 확대하거나 기술을 바꾸지 마.
네가 직접 할 수 있는 확인·수정·검증은 직접 처리해.
구현, GitHub 커밋, 배포와 브라우저 검증을 구분해서 보고해.

이번 작업:
[기능 하나]

반드시 유지할 기능:
[기존 기능]

완료 기준:
[실제 화면에서 확인할 결과]
~~~

## 완료 기준

- 처음 방문한 사람이 GuideFlow에서 시작된 사이트임을 바로 이해합니다.
- 세 가지 핵심 입구 중 하나를 선택해 바로 시작할 수 있습니다.
- 기술·협업·용어·도구를 통합 검색할 수 있습니다.
- PC와 모바일에서 핵심 동선이 깨지지 않습니다.
- 구현, GitHub 커밋, 배포와 브라우저 동작을 각각 확인합니다.

