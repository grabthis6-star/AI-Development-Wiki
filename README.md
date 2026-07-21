# AI Development Wiki

GuideFlow를 만들며 실제로 사용한 기술과 AI 협업 노하우를, 다음 프로그램에서도 바로 재사용할 수 있게 정리한 저장소입니다.

## Start Here

새 ChatGPT·Codex·Claude 작업을 시작할 때 아래 문서를 순서대로 읽히면 긴 채팅을 다시 설명할 필요가 없습니다.

1. [GUIDEFLOW_CONTEXT.md](GUIDEFLOW_CONTEXT.md) — 프로젝트 목적, 핵심 기술, 작업 방식의 압축본
2. [TECH_INDEX.md](TECH_INDEX.md) — GuideFlow에서 사용한 기술과 사용 이유
3. [AI_RULES.md](AI_RULES.md) — AI에게 일을 맡기고 검증하는 규칙

웹사이트 첫 화면에서도 같은 Start Here 문서를 바로 열 수 있습니다.

- Website: https://ai-development-wiki.vercel.app
- GitHub: https://github.com/grabthis6-star/AI-Development-Wiki

## 이 저장소의 두 가지 목적

### 1. GuideFlow 개발 기술 문서

기술 이름만 나열하지 않고 다음 내용을 설명합니다.

- 이 기술이 무엇인지
- 왜 GuideFlow에 필요했는지
- 어디에 사용했는지
- 초보자가 이해할 수 있는 비유
- 다른 프로그램에서 재사용하는 방법

### 2. 재사용 가능한 AI 협업 노하우

- 큰 작업을 작은 결과물로 나누는 법
- 기존 기능을 보호하며 수정하는 법
- 오류를 추측하지 않고 확인하는 법
- 구현, GitHub, 배포, 브라우저 검증을 구분하는 법
- 새 프로젝트에 같은 작업 기준을 전달하는 법

## 새 AI 작업 시작 문장

~~~text
GUIDEFLOW_CONTEXT.md, TECH_INDEX.md, AI_RULES.md를 먼저 읽고 작업 기준으로 사용해.
나는 비개발자이므로 쉬운 말로 설명해.
요청 범위를 임의로 확대하지 말고 작은 단위로 구현해.
구현, GitHub 커밋, 배포, 브라우저 검증을 구분해서 보고해.

이번 프로그램의 목적:
[한두 문장]

지금 가장 먼저 만들 기능:
[기능 하나]
~~~

## 기존 상세 문서

기존 위키 기능과 상세 기록은 그대로 유지합니다.

- [처음 시작하기](docs/START-HERE.md)
- [AI 협업 규칙](docs/AI-WORKING-RULES.md)
- [프로젝트 체크리스트](docs/PROJECT-CHECKLIST.md)
- [프로젝트 템플릿](docs/PROJECT-TEMPLATE.md)
- [AI Memory](docs/AI-MEMORY.md)
- [프롬프트 보관함](docs/PROMPT-LIBRARY.md)
- [패턴 라이브러리](docs/PATTERN-LIBRARY.md)
- [문제 해결 기록](docs/TROUBLESHOOTING.md)
- [GuideFlow 사례](docs/GUIDEFLOW-CASE.md)

## 검증 원칙

- 코드 작성과 GitHub 커밋을 구분합니다.
- GitHub 커밋과 배포 성공을 구분합니다.
- 배포 성공과 실제 브라우저 동작을 구분합니다.
- 확인하지 않은 것은 완료됐다고 말하지 않습니다.
