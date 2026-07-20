export const documents = [
  {id:'start',title:'처음 시작하기',summary:'새 프로젝트와 새 AI 채팅이 가장 먼저 읽는 출발 문서',icon:'🚩',category:'시작하기',tags:['start','project','rules'],difficulty:'beginner',updatedAt:'2026-07-20',content:['목적을 한 문장으로 정한다.','첫 버전은 핵심 기능 1~3개로 제한한다.','GitHub 반영과 실제 배포 확인 전에는 완료라고 판단하지 않는다.'],related:['rules','checklist','prompts']},
  {id:'rules',title:'AI 협업 규칙',summary:'AI를 개발자로 활용하면서 방향과 품질을 지키는 방법',icon:'🤖',category:'AI 협업',tags:['ai','workflow','verification'],difficulty:'beginner',updatedAt:'2026-07-20',content:['사용자는 제품 방향과 실제 사용 느낌을 판단한다.','AI는 설계, 구현, 오류 분석, 기록을 담당한다.','작은 기능 정의 → 구현 → 기록 → 배포 → 확인 순서로 진행한다.'],related:['start','memory','troubleshooting']},
  {id:'prompts',title:'Prompt Library',summary:'프로젝트 시작, 버그 수정, 리뷰와 배포에 쓰는 재사용 요청문',icon:'💬',category:'라이브러리',tags:['prompt','template','ai'],difficulty:'beginner',updatedAt:'2026-07-20',content:['좋은 프롬프트에는 목적, 현재 상황, 완료 기준이 들어간다.','확인하지 않은 결과를 완료라고 말하지 않도록 명시한다.','반복되는 요청은 템플릿으로 저장한다.'],related:['patterns','rules','template']},
  {id:'patterns',title:'Pattern Library',summary:'검색, 카드, 사이드바, 모달 등 반복 UI와 제품 패턴',icon:'🧩',category:'라이브러리',tags:['pattern','ui','reuse'],difficulty:'intermediate',updatedAt:'2026-07-20',content:['패턴은 문제, 적용 상황, 구현 규칙, 완료 기준을 함께 기록한다.','기존 기능을 깨지 않는 재사용 단위로 관리한다.','검증된 패턴을 다른 프로젝트에 재사용한다.'],related:['prompts','troubleshooting','guideflow']},
  {id:'memory',title:'AI Memory',summary:'결정 이유, 실패한 시도와 재사용 가능한 교훈을 저장',icon:'🧠',category:'지식 엔진',tags:['memory','decision','lesson'],difficulty:'intermediate',updatedAt:'2026-07-20',content:['무엇을 했는지만 아니라 왜 선택했는지 기록한다.','실패한 시도와 실제 결과를 함께 남긴다.','다음 프로젝트에서 사용할 한 줄 규칙으로 요약한다.'],related:['timeline','rules','guideflow']},
  {id:'timeline',title:'Project Timeline',summary:'프로젝트의 변화와 중요한 결정을 시간 순서로 확인',icon:'🕒',category:'지식 엔진',tags:['timeline','history','decision'],difficulty:'beginner',updatedAt:'2026-07-20',content:['날짜, 상황, 결정, 결과, 배움을 기록한다.','기능 목록이 아니라 판단의 흐름을 보존한다.','중요한 전환점은 AI Memory와 연결한다.'],related:['memory','guideflow','template']},
  {id:'template',title:'Project Template',summary:'새 프로젝트의 README, 규칙, 체크리스트를 빠르게 시작',icon:'📦',category:'생산성',tags:['project','template','readme'],difficulty:'beginner',updatedAt:'2026-07-20',content:['프로젝트 목적과 사용자를 먼저 작성한다.','Start Here, README, 결정 기록, 문제 해결 문서를 준비한다.','첫 스프린트의 완료 기준을 명확히 적는다.'],related:['start','checklist','prompts']},
  {id:'checklist',title:'Project Checklist',summary:'목적부터 GitHub와 Vercel 검증까지 빠뜨리지 않는 순서',icon:'✅',category:'생산성',tags:['checklist','github','vercel'],difficulty:'beginner',updatedAt:'2026-07-20',content:['누가 어떤 상황에서 무엇을 쉽게 하게 만들지 정의한다.','필수 기능만 선정한다.','GitHub main 반영과 배포 사이트 동작을 각각 확인한다.'],related:['start','template','troubleshooting']},
  {id:'troubleshooting',title:'Troubleshooting',summary:'증상, 원인, 해결, 검증과 다음 체크리스트를 기록',icon:'🛠️',category:'문제 해결',tags:['debug','error','verification'],difficulty:'intermediate',updatedAt:'2026-07-20',content:['보이는 현상과 기대 결과를 먼저 구분한다.','추측이 아닌 관련 파일과 로그를 확인한다.','가장 작은 수정 후 실제 사용 흐름으로 검증한다.'],related:['rules','patterns','guideflow']},
  {id:'guideflow',title:'GuideFlow Case Study',summary:'실제 프로젝트에서 얻은 오류 해결과 제품 결정 사례',icon:'🧭',category:'사례',tags:['guideflow','case-study','lessons'],difficulty:'intermediate',updatedAt:'2026-07-20',content:['Scene Numbering, Duplicate Scene, Image Replace 문제를 기록했다.','Pointer Event, GitHub 연동, Vercel 404 해결 경험을 재사용한다.','실패를 숨기지 않고 다음 프로젝트의 체크리스트로 바꾼다.'],related:['timeline','memory','troubleshooting']}
];

export const projects = [
  {name:'AI Development Wiki',status:'진행 중',progress:78,next:'Knowledge Graph 시각화',icon:'🧠'},
  {name:'GuideFlow',status:'사례 정리',progress:84,next:'실패 사례와 패턴 연결',icon:'🧭'},
  {name:'Next Project',status:'준비',progress:15,next:'목적과 최소 기능 정의',icon:'🚀'}
];

export const timeline = [
  {when:'오늘',title:'데이터 중심 구조',detail:'문서 메타데이터와 앱 로직을 HTML에서 분리'},
  {when:'최근',title:'AI Development OS 대시보드',detail:'문서 저장소를 프로젝트 운영 화면으로 확장'},
  {when:'시작',title:'AI Development Wiki',detail:'GuideFlow 경험을 다음 프로젝트에 재사용하기 위해 생성'}
];
