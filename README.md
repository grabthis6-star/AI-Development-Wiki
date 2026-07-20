# AI Development Wiki

AI와 함께 프로그램을 만들며 배운 개발 도구, 협업 규칙, 실전 오류 해결법을 기록하고 다음 프로젝트에서 재사용하는 개인 개발 지식 저장소입니다.

단순한 용어 사전에서 시작해 **프롬프트, 패턴, 프로젝트 기억과 템플릿을 연결하는 AI Development OS**로 확장하고 있습니다.

## 운영 주소

- Website: https://ai-development-wiki.vercel.app
- Start here: https://ai-development-wiki.vercel.app/#/start-here

## 이 저장소의 역할

- 웹사이트 원본과 변경 기록 보관
- 새 채팅의 AI에게 전달할 공통 작업 규칙 보관
- GuideFlow와 이후 프로젝트에서 배운 내용을 장기적으로 축적
- Vercel 문제가 생겨도 지식 원본을 잃지 않도록 문서 백업 제공
- 반복해서 사용하는 프롬프트와 제품 패턴 보관
- 프로젝트 결정과 배움을 시간 순서로 연결

## 새 프로젝트 시작 방법

새 ChatGPT 채팅에 아래 문장을 붙여 넣습니다.

```text
아래 AI Development Wiki의 시작 문서를 먼저 읽고 그 규칙을 기준으로 작업해.
https://ai-development-wiki.vercel.app/#/start-here

이번 프로그램의 목적:
[한두 문장으로 작성]

가장 먼저 필요한 기능:
[한 문장으로 작성]
```

## 핵심 작업 원칙

1. 사용자는 비개발자 기준으로 이해할 수 있게 설명한다.
2. 완료 여부는 말이 아니라 GitHub 반영, 배포 성공, 실제 동작으로 판단한다.
3. 서로 연관된 변경은 스프린트로 묶되 위험한 변경은 작게 나눈다.
4. 원본은 GitHub에 보관하고 웹사이트는 Vercel로 배포한다.
5. 중요한 결정, 실패 원인, 해결법은 위키에 기록한다.
6. 확인하지 않은 변경을 완료됐다고 말하지 않는다.

## AI Development OS 모듈

### 시작과 운영

- [처음 시작하기](docs/START-HERE.md)
- [AI 협업 규칙](docs/AI-WORKING-RULES.md)
- [프로젝트 시작 체크리스트](docs/PROJECT-CHECKLIST.md)
- [재사용 프로젝트 템플릿](docs/PROJECT-TEMPLATE.md)
- [위키 운영 규칙](docs/WIKI-MAINTENANCE.md)

### 기억과 재사용

- [AI Memory 시스템](docs/AI-MEMORY.md)
- [프로젝트 타임라인](docs/PROJECT-TIMELINE.md)
- [프롬프트 보관함](docs/PROMPT-LIBRARY.md)
- [제품·UI 패턴 라이브러리](docs/PATTERN-LIBRARY.md)

### 사례와 문제 해결

- [문제 해결 기록법](docs/TROUBLESHOOTING.md)
- [GuideFlow 사례](docs/GUIDEFLOW-CASE.md)

## 배포 구조

```text
문서와 사이트 수정
        ↓
GitHub main 브랜치
        ↓
Vercel 자동 배포
        ↓
https://ai-development-wiki.vercel.app
```

## 지식 연결 구조

```text
프로젝트에서 발생한 문제
        ↓
문제 해결 기록
        ↓
재사용 패턴 또는 프롬프트
        ↓
프로젝트 타임라인과 AI Memory
        ↓
다음 프로젝트의 시작 문서와 템플릿
```

## 기록 원칙

위키 문서는 가능하면 아래 순서를 따릅니다.

1. 한 줄 설명
2. 왜 필요한가
3. 실제 프로젝트에서 어떻게 사용했는가
4. 실패한 시도와 실제 원인
5. 검증 방법
6. 다음에 재사용할 규칙
7. 관련 문서와 커밋
