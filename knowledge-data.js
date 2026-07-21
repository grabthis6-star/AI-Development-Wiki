export const project = {
  version: '2.0',
  updatedAt: '2026-07-22',
  purpose: '개발 경험이 없는 사람도 AI와 협업해 프로그램을 만들 수 있도록, 사용자가 준비하고 전달하고 확인해야 할 일을 안내하는 실전 가이드',
  handoff: `GUIDEFLOW_CONTEXT.md를 먼저 읽어.
나는 비개발자이므로 기술 구현은 네가 맡고, 내가 해야 할 일만 쉬운 말로 안내해.
설치가 필요하면 왜 필요한지, 공식 설치 위치, 확인 방법을 함께 알려줘.
오류가 생기면 내가 복사할 내용과 캡처할 화면을 정확히 지정해줘.
구현·커밋·배포·실제 화면 확인을 구분해서 보고해.

이번에 만들 프로그램: [아이디어]
사용 환경: [Windows/Mac, 브라우저/설치형]
꼭 필요한 기능: [기능 1~3개]
이번 완료 기준: [내가 화면에서 확인할 결과]`
}

export const techGroups = [
  { id: 'start', title: '1. 시작 전에 준비하기', description: 'AI에게 일을 맡기기 전에 작업 장소와 기본 도구를 준비합니다.' },
  { id: 'core', title: '2. 기본 개발 도구 이해하기', description: '왜 설치하는지 알고, 설치 후 정상인지 확인하는 데 필요한 만큼만 배웁니다.' },
  { id: 'optional', title: '3. 필요할 때만 추가하기', description: 'Python·FFmpeg 같은 도구는 기능이 실제로 필요할 때만 설치합니다.' },
  { id: 'handoff', title: '4. AI에게 정확히 전달하기', description: '코드 대신 아이디어, 현재 화면, 오류와 완료 기준을 전달합니다.' }
]

export const techTopics = [
  {id:'workspace',group:'start',icon:'📁',title:'프로젝트 폴더',summary:'AI가 파일을 읽고 수정할 수 있는 하나의 작업 공간',place:'프로그램을 처음 시작할 때 가장 먼저 만듭니다. GuideFlow라면 GuideFlow라는 폴더 하나가 프로젝트 전체입니다.',why:'이미지·코드·설명 문서가 흩어지면 AI도 현재 상태를 정확히 파악하기 어렵습니다.',easy:'책상 하나를 프로젝트 전용으로 비워두는 것과 같습니다. 이 폴더 안에 있는 것만 현재 프로그램의 재료라고 생각하면 됩니다.',flow:['새 폴더 만들기','Codex나 Cursor에서 폴더 열기','AI에게 폴더 전체 확인 요청'],code:`예시 위치
C:\\Projects\\GuideFlow

AI에게 말하기
"이 폴더의 파일을 먼저 확인하고 현재 상태를 요약해줘."`,problem:'빈 폴더가 아닌 다른 프로젝트 폴더를 열거나 파일을 여러 위치에 저장하면 수정 대상이 섞입니다.',solution:'프로젝트마다 폴더 하나만 사용하고, AI에게 현재 열린 폴더 이름을 먼저 확인하게 합니다.',reuse:'앞으로 만드는 모든 프로그램은 프로젝트별 폴더 하나에서 시작합니다.',checks:['프로젝트 이름의 폴더가 하나 있다.','AI가 그 폴더 안의 파일 목록을 볼 수 있다.','다운로드한 자료도 프로젝트 안에 정리했다.'],prompt:'현재 열린 프로젝트 폴더와 파일을 확인해. 아직 코드를 수정하지 말고 이 프로젝트가 무엇인지 쉬운 말로 요약해.'},
  {id:'codex',group:'start',icon:'🤖',title:'ChatGPT와 Codex',summary:'아이디어 대화와 실제 파일 작업을 나누어 맡기는 AI 도구',place:'ChatGPT에서는 아이디어와 사용 흐름을 정리하고, Codex에서는 실제 프로젝트 폴더를 열어 코드 수정과 검증을 맡깁니다.',why:'채팅으로 코드 조각만 받으면 사용자가 직접 파일을 찾고 붙여넣어야 합니다. Codex는 프로젝트 파일을 직접 확인하고 수정할 수 있습니다.',easy:'ChatGPT는 기획 회의 상대, Codex는 작업실에서 직접 만드는 개발 담당자라고 생각하면 됩니다.',flow:['ChatGPT에서 아이디어 정리','Codex에서 프로젝트 폴더 열기','컨텍스트와 이번 작업 전달','결과 화면 확인'],code:`Codex 시작 요청
"GUIDEFLOW_CONTEXT.md를 먼저 읽고 현재 프로젝트를 확인해.
이번에는 [기능 하나]만 구현하고 실제 화면까지 검증해."`,problem:'긴 채팅 전체를 붙여넣으면 핵심 요구가 묻히고 과거의 잘못된 방향까지 함께 전달될 수 있습니다.',solution:'컨텍스트 문서와 이번 작업, 유지할 기능, 완료 기준 네 가지만 전달합니다.',reuse:'새 프로젝트마다 PROJECT_CONTEXT.md 하나를 만들어 같은 방식으로 시작합니다.',checks:['Codex에서 올바른 프로젝트 폴더를 열었다.','AI가 컨텍스트 문서를 먼저 읽었다.','이번 작업을 기능 하나로 제한했다.'],prompt:'컨텍스트 문서를 먼저 읽고, 내가 설명한 사용자 흐름을 기준으로 이번 기능 하나만 직접 구현·검증해.'},
  {id:'editor',group:'start',icon:'📝',title:'Cursor 또는 코드 편집기',summary:'프로젝트 파일을 눈으로 확인하고 AI 수정 결과를 살펴보는 프로그램',place:'Codex가 직접 작업하는 경우 필수는 아니지만 파일을 열어보거나 간단히 실행할 때 유용합니다.',why:'사용자가 코드를 작성하기 위해서가 아니라 어떤 파일이 있는지, AI가 무엇을 바꿨는지 확인하기 위해 사용합니다.',easy:'워드가 문서를 여는 프로그램이라면 Cursor는 프로그램 파일을 여는 도구입니다.',flow:['공식 사이트에서 설치','프로젝트 폴더 열기','파일 구조 확인','내장 터미널은 필요할 때만 사용'],code:`공식 검색어
Cursor AI official
Visual Studio Code official

주의: 둘 중 하나만 설치하면 됩니다.`,problem:'편집기를 설치하면 코드를 직접 배워야 한다고 느껴 시작부터 부담이 커질 수 있습니다.',solution:'사용자는 파일 확인과 실행만 하고, 코드 작성과 수정은 AI에게 맡깁니다.',reuse:'웹사이트, 데스크톱 앱, 자동화 도구 등 대부분의 프로젝트에서 사용합니다.',checks:['Cursor 또는 VS Code 중 하나만 설치했다.','프로젝트 폴더를 열 수 있다.','코드를 이해하려고 멈추지 않고 AI에게 설명을 요청한다.'],prompt:'변경된 파일이 무엇인지 알려주고, 각 파일이 하는 일을 비개발자도 이해할 수 있게 한 줄씩 설명해.'},
  {id:'node',group:'core',icon:'🟢',title:'Node.js',summary:'웹 프로그램을 개발하고 실행하는 데 사용하는 작업 엔진',place:'React·Vite 같은 웹 프로젝트를 만들거나 개발 화면을 실행할 때 사용합니다. 완성된 웹사이트 사용자는 보통 설치할 필요가 없습니다.',why:'프로젝트에 필요한 부품을 내려받고(npm), 개발 화면을 실행하고, 배포용 파일을 만드는 역할을 합니다.',easy:'완성품을 만드는 공장의 기계입니다. 사용자가 완성품을 쓸 때는 공장 기계를 설치하지 않아도 됩니다.',flow:['nodejs.org 접속','LTS 버전 설치','터미널 다시 열기','버전 확인'],code:`설치 확인
node -v
npm -v

PowerShell에서 차단되면
node -v
npm.cmd -v`,problem:'설치 후 터미널을 다시 열지 않거나 PowerShell 정책 때문에 npm이 막힐 수 있습니다.',solution:'먼저 터미널을 완전히 다시 열고, 여전히 막히면 오류 전문을 AI에게 그대로 전달합니다. 무작정 보안 설정부터 바꾸지 않습니다.',reuse:'React, Vite, Electron 등 JavaScript 기반 프로그램 제작에 사용합니다.',checks:['node -v에 버전이 나온다.','npm -v 또는 npm.cmd -v에 버전이 나온다.','오류가 나면 마지막 줄만이 아니라 전체를 AI에게 전달한다.'],prompt:'Node.js 설치 확인 중이야. 아래 터미널 결과를 보고 원인을 판단해. 설정을 바꾸기 전에 가장 안전한 확인부터 한 단계씩 안내해.\n\n[결과 붙여넣기]'},
  {id:'git',group:'core',icon:'🌿',title:'Git과 GitHub',summary:'변경 기록을 남기는 도구와 그 기록을 보관하는 온라인 저장소',place:'AI가 수정한 내용을 이전 상태와 비교하고, 문제가 생기면 어떤 변경에서 시작됐는지 찾을 때 사용합니다.',why:'AI가 여러 파일을 수정해도 버전이 남아 안전하게 실험할 수 있고 Vercel 같은 배포 서비스와 연결할 수 있습니다.',easy:'Git은 컴퓨터 안의 작업 일지, GitHub는 그 일지를 온라인 금고에 보관하는 서비스입니다.',flow:['git-scm.com에서 Git 설치','GitHub 계정 만들기','저장소 연결','변경 단위마다 커밋'],code:`설치 확인
git --version

AI에게 요청
"변경 파일을 확인하고 이번 작업만 하나의 커밋으로 남겨줘."`,problem:'GitHub에 올라갔다는 말과 실제 공개 사이트가 바뀌었다는 말을 같은 완료로 오해하기 쉽습니다.',solution:'커밋 성공, 배포 성공, 공개 화면 동작을 서로 다른 단계로 확인합니다.',reuse:'모든 프로그램의 백업·협업·배포 과정에 재사용합니다.',checks:['git --version이 표시된다.','GitHub 저장소 주소를 알고 있다.','AI가 최신 커밋 주소를 알려준다.'],prompt:'이번 작업과 관련된 변경만 확인해 커밋하고, 커밋 주소와 변경 파일을 알려줘. 배포와 화면 확인은 별도로 검증해.'},
  {id:'deploy',group:'core',icon:'🚀',title:'Vercel과 공개 주소',summary:'만든 웹 프로그램을 인터넷에서 확인할 수 있게 배포하는 서비스',place:'GuideFlow나 위키처럼 브라우저에서 쓰는 프로그램을 다른 컴퓨터에서도 열어볼 때 사용합니다.',why:'내 컴퓨터에서만 되는지, 실제 사용자 환경에서도 되는지 확인할 수 있습니다.',easy:'프로젝트 폴더가 작업실이라면 Vercel은 완성품을 진열하는 매장입니다.',flow:['Vercel 계정 만들기','GitHub 저장소 연결','배포 실행','공개 주소에서 직접 확인'],code:`AI에게 제공할 정보
- GitHub 저장소 주소
- Vercel 프로젝트 주소
- 실제 공개 사이트 주소
- 바뀌어야 할 화면 설명`,problem:'배포가 성공해도 잘못된 파일을 배포하거나 브라우저 캐시 때문에 예전 화면이 보일 수 있습니다.',solution:'최신 커밋과 연결된 배포인지 확인하고, 공개 주소에서 버튼·모바일 화면까지 직접 시험합니다.',reuse:'정적 사이트와 다양한 웹 앱을 빠르게 공유할 때 사용합니다.',checks:['Vercel 상태가 Success다.','배포가 최신 커밋과 연결됐다.','공개 주소에서 새 기능을 직접 확인했다.'],prompt:'최신 GitHub 커밋의 Vercel 배포 상태를 확인하고 공개 주소에서 새 기능과 모바일 화면을 직접 검증해.'},
  {id:'python',group:'optional',icon:'🐍',title:'Python — 필요할 때만',summary:'자동화·AI 처리·문서 제작 등에 자주 쓰이는 별도의 프로그래밍 실행 환경',place:'이미지 일괄 처리, 데이터 분석, PDF·문서 자동 생성이나 Python 서버가 필요할 때만 설치합니다.',why:'웹 화면만 만드는 프로젝트라면 Node.js만으로 충분할 수 있습니다. AI가 Python을 좋아한다는 이유만으로 설치하지 않습니다.',easy:'Node.js와 다른 종류의 공장 기계입니다. 만들 제품에 필요한 기계만 들여놓으면 됩니다.',flow:['AI에게 필요 이유 확인','python.org 공식 설치','Add Python to PATH 확인','버전 확인'],code:`설치 확인
python --version

설치 전 AI에게 묻기
"이 기능에 Python이 꼭 필요한 이유와 Node.js로 불가능한 이유를 설명해."`,problem:'기술이 많을수록 좋아 보이지만 설치와 오류만 늘어나 초보자가 지칩니다.',solution:'이번 기능에서 Python만 가능한 작업이 확인됐을 때만 설치합니다.',reuse:'파일 자동화, 데이터 처리, AI 모델과 문서 생성 프로젝트에서 사용합니다.',checks:['Python이 꼭 필요한 기능을 설명할 수 있다.','공식 사이트에서 설치했다.','python --version이 나온다.'],prompt:'Python 설치가 정말 필요한지 먼저 판단해. 필요하다면 이유, 공식 설치 위치, 설치 확인 명령을 한 번에 하나씩 안내해.'},
  {id:'ffmpeg',group:'optional',icon:'🎬',title:'FFmpeg — 영상 출력이 필요할 때',summary:'이미지·영상·소리를 변환하고 MP4 같은 결과물을 만드는 전문 도구',place:'GuideFlow에서 실제 MP4 또는 GIF 내보내기가 필요해질 때 사용합니다. 이미지 배치만 시험하는 초기 버전에는 필요 없습니다.',why:'브라우저 화면만으로 어려운 영상 인코딩을 안정적으로 처리합니다.',easy:'편집 화면에서 정리한 재료를 실제 영상 파일로 포장하는 기계입니다.',flow:['내보내기 필요 확정','설치 방식 AI와 결정','ffmpeg 버전 확인','짧은 샘플로 시험'],code:`설치 확인
ffmpeg -version

AI에게 줄 정보
- 원하는 형식: MP4/GIF
- 화면 비율: 9:16 등
- 소리 포함 여부`,problem:'초기 아이디어 검증 전에 설치하면 환경 설정과 큰 파일 때문에 개발이 무거워집니다.',solution:'먼저 이미지 붙여넣기·순서·재생을 써본 뒤 결과 파일이 실제로 필요할 때 추가합니다.',reuse:'썸네일 추출, 영상 변환, 오디오 결합과 짧은 미리보기 제작에 사용합니다.',checks:['내보내기가 지금 꼭 필요한지 확인했다.','ffmpeg -version이 나온다.','짧은 샘플 파일부터 시험했다.'],prompt:'MP4 내보내기가 필요해. FFmpeg가 꼭 필요한지 판단하고, 필요하면 내 운영체제에 맞는 안전한 설치와 짧은 샘플 검증부터 안내해.'},
  {id:'evidence',group:'handoff',icon:'📸',title:'스크린샷·오류·기대 결과',summary:'사용자가 AI에게 제공해야 하는 가장 중요한 세 가지 자료',place:'화면이 다르거나 오류가 생겼을 때, 그리고 디자인을 수정하고 싶을 때 제공합니다.',why:'AI는 사용자가 보는 화면과 마음속 기대 결과를 자동으로 알 수 없습니다. 자료가 구체적일수록 추측이 줄어듭니다.',easy:'병원에서 “아파요”보다 어디가 언제부터 어떻게 아픈지 말하는 것과 같습니다.',flow:['전체 화면 캡처','오류 전문 복사','문제 재현 순서 작성','원하는 결과 한 문장'],code:`전달 양식
1. 현재 화면: [스크린샷]
2. 내가 한 행동: [클릭 순서]
3. 실제 결과: [무슨 일이 생김]
4. 원하는 결과: [어떻게 되어야 함]
5. 오류 전문: [생략 없이 복사]`,problem:'“안 돼”, “이상해”만 전달하면 AI가 원인을 추측해 같은 수정을 반복합니다.',solution:'스크린샷과 재현 순서, 실제 결과와 기대 결과를 한 번에 전달합니다.',reuse:'버그 수정, 디자인 피드백, 설치 오류와 배포 문제에 모두 사용합니다.',checks:['문제가 보이는 전체 화면을 첨부했다.','문제가 생기는 순서를 적었다.','실제 결과와 원하는 결과를 구분했다.'],prompt:'첨부한 화면과 재현 순서를 기준으로 실제 원인을 먼저 확인해. 추측으로 수정하지 말고, 수정 후 같은 순서로 다시 검증해.'}
]

export const aiTopics = [
  {icon:'💡',title:'아이디어를 사용자 흐름으로 말하기',summary:'기술명이 아니라 사용자가 하는 행동을 설명합니다.',problem:'“React로 타임라인을 만들어줘”처럼 기술부터 정하면 실제 목적과 다른 결과가 생깁니다.',rule:'누가, 언제, 무엇을 누르고, 어떤 결과를 얻는지 먼저 말합니다.',prompt:'나는 [사용자]가 [상황]에서 [행동]하면 [결과]를 얻는 프로그램을 원해. 필요한 기술은 네가 판단하되 먼저 가장 작은 결과물을 만들어.'},
  {icon:'🎯',title:'첫 버전의 완료 기준 정하기',summary:'기능 수보다 직접 확인할 한 가지 결과를 정합니다.',problem:'완성의 뜻이 다르면 AI는 기능을 계속 늘리고 사용자는 결과를 보지 못합니다.',rule:'“화면에서 무엇이 되면 끝인가”를 한 문장으로 정합니다.',prompt:'이번 완료 기준은 [실제 화면에서 확인할 결과]야. 그 밖의 기능은 추가하지 마.'},
  {icon:'📦',title:'AI에게 현재 프로젝트 넘기기',summary:'폴더·컨텍스트·이번 작업·유지 기능을 전달합니다.',problem:'새 AI는 이전 대화와 시행착오를 자동으로 알지 못합니다.',rule:'긴 채팅 대신 GUIDEFLOW_CONTEXT.md 한 개와 이번 작업을 전달합니다. 새 프로젝트에 없는 문서를 읽으라고 요구하지 않습니다.',prompt:'GUIDEFLOW_CONTEXT.md를 먼저 읽고 현재 폴더를 확인한 뒤 이번 작업만 수행해.'},
  {icon:'🧰',title:'AI가 할 일과 사용자가 할 일 나누기',summary:'코드 작업은 AI가, 선택과 체감 평가는 사용자가 맡습니다.',problem:'AI가 코드 복사·파일 수정·불필요한 설치를 사용자에게 넘기면 초보자는 지칩니다.',rule:'AI가 접근 가능한 파일 수정·검사·커밋·배포 확인은 AI가 직접 합니다.',prompt:'네가 직접 할 수 있는 코드 수정과 검증은 직접 해. 내가 꼭 해야 하는 선택이나 로그인만 쉬운 단계로 요청해.'},
  {icon:'🪜',title:'한 번에 기능 하나만 맡기기',summary:'작은 결과를 보고 다음 기능을 결정합니다.',problem:'큰 요청은 기존 기능을 깨고 잘못된 방향을 늦게 발견하게 합니다.',rule:'기능 하나 → 실제 확인 → 피드백 → 다음 기능 순서를 지킵니다.',prompt:'이번에는 [기능 하나]만 구현해. 완료 후 내가 확인할 위치와 방법을 알려줘.'},
  {icon:'📸',title:'문제는 증거와 함께 전달하기',summary:'스크린샷, 재현 순서, 실제 결과, 기대 결과를 제공합니다.',problem:'짧은 증상 설명만으로는 AI가 원인을 추측합니다.',rule:'오류 메시지는 생략하지 않고 전체를 복사하고 현재 화면을 첨부합니다.',prompt:'첨부 화면과 오류 전문을 기준으로 원인을 확인해. 같은 방법을 반복하지 말고 수정 후 재현 순서대로 검증해.'},
  {icon:'🛡️',title:'유지해야 할 기능 적기',summary:'새 기능 때문에 이미 되던 기능이 깨지지 않게 합니다.',problem:'AI는 요청한 부분을 고치며 주변 구조까지 넓게 바꿀 수 있습니다.',rule:'수정 전에 유지할 기능과 건드리지 않을 범위를 명시합니다.',prompt:'[새 기능]만 수정하고 [유지 기능]은 그대로 보호해. 완료 후 두 기능을 모두 테스트해.'},
  {icon:'✅',title:'완료를 네 단계로 확인하기',summary:'구현, 커밋, 배포, 실제 화면 확인은 서로 다릅니다.',problem:'배포 성공만으로 버튼과 모바일 화면이 정상이라고 판단할 수 없습니다.',rule:'확인하지 않은 단계는 완료됐다고 말하지 않습니다.',prompt:'구현·GitHub 커밋·배포 성공·실제 브라우저 동작을 각각 확인하고 결과를 구분해서 보고해.'},
  {icon:'🧭',title:'AI가 방향을 키울 때 되돌리기',summary:'대명제와 현재 목표로 범위를 다시 제한합니다.',problem:'가벼운 도구가 플랫폼·OS·플러그인 구조로 커지며 원래 목적을 잃을 수 있습니다.',rule:'새 제안이 사용자의 현재 문제를 직접 해결하지 않으면 보류합니다.',prompt:'범위를 넓히지 마. 대명제는 [초보자가 AI와 협업해 프로그램을 완성하는 것]이고, 지금은 [이번 결과]만 필요해.'}
]

export const aiTemplates = [
  {title:'새 프로그램 시작하기',description:'아이디어를 기술 용어 없이 전달합니다.',prompt:`나는 [누구]를 위한 [프로그램]을 만들고 싶어.
사용 흐름은 [행동 → 결과]야.
첫 버전은 [핵심 기능 1~3개]만 필요해.
내가 설치하거나 선택해야 할 것만 이유와 함께 알려주고, 코드 작업은 직접 해.`},
  {title:'설치가 필요한지 확인하기',description:'불필요한 환경 설정을 막습니다.',prompt:`[도구 이름]이 이번 기능에 정말 필요한지 먼저 판단해.
필요한 이유, 사용되는 위치, 공식 설치 주소, 설치 확인 방법을 쉬운 말로 알려줘.
필요하지 않다면 설치시키지 마.`},
  {title:'버그 수정하기',description:'증상 대신 증거를 전달합니다.',prompt:`현재 화면: [스크린샷]
재현 순서: [1, 2, 3]
실제 결과: [현재 상태]
원하는 결과: [기대 상태]
오류 전문: [전체 복사]
추측하지 말고 원인을 확인한 뒤 수정하고 같은 순서로 검증해.`},
  {title:'디자인 피드백 전달하기',description:'예쁘게가 아니라 달라져야 할 점을 말합니다.',prompt:`첨부 화면에서 [위치]가 [현재 문제]야.
나는 [원하는 느낌/행동]을 원해.
[유지할 요소]는 그대로 두고 이 부분만 수정한 뒤 PC와 모바일을 확인해.`},
  {title:'새 AI에게 프로젝트 넘기기',description:'새 채팅에서도 같은 원칙을 유지합니다.',prompt:`먼저 GUIDEFLOW_CONTEXT.md를 읽어.
현재 프로젝트 폴더와 최근 변경을 확인해.
이번 작업은 [기능 하나]이고 [기존 기능]은 반드시 유지해.
완료 기준은 [화면에서 확인할 결과]야.`}
]

export const toolPurposes = [
  { id:'all', label:'전체' }, { id:'idea', label:'아이디어 정리' }, { id:'research', label:'자료 조사' },
  { id:'knowledge', label:'문서·지식 관리' }, { id:'prototype', label:'빠른 시제품' },
  { id:'coding', label:'실제 프로그램 개발' }, { id:'connect', label:'외부 서비스 연결' },
  { id:'automation', label:'반복 작업 자동화' }
]

export const aiTools = [
  {id:'chatgpt',provider:'OpenAI',kind:'AI 서비스',icon:'💬',title:'ChatGPT',summary:'아이디어를 대화로 구체화하고 문서·이미지·자료를 함께 다루는 범용 작업 공간',useWhen:'무엇을 만들지 정리하거나, 초안을 만들고, 파일과 이미지를 보며 피드백할 때',avoidWhen:'프로젝트 파일을 직접 계속 수정·실행해야 할 때는 Codex가 더 적합합니다.',needs:'ChatGPT 계정과 만들고 싶은 결과에 대한 설명',outputs:['기획서','요청문','문서','이미지 아이디어'],tags:['idea','research','knowledge'],prompt:'내 아이디어를 프로그램의 사용자 흐름, 핵심 기능 3개와 첫 완료 기준으로 정리해줘.',url:'https://chatgpt.com/'},
  {id:'chatgpt-projects',provider:'OpenAI',kind:'AI 내부 기능',icon:'📂',title:'ChatGPT Projects',summary:'관련 채팅·파일·지침을 한 프로젝트 안에서 계속 사용하는 공간',useWhen:'같은 프로그램을 여러 채팅에 걸쳐 오래 만들거나 참고 문서를 계속 사용해야 할 때',avoidWhen:'한 번만 묻는 짧은 질문에는 일반 채팅으로 충분합니다.',needs:'프로젝트 목적, 참고 파일, 반복해서 지킬 작업 원칙',outputs:['지속되는 프로젝트 맥락','공통 참고 파일'],tags:['idea','knowledge','coding'],prompt:'이 프로젝트의 파일과 지침을 기준으로 답하고, 이전 결정과 충돌하면 먼저 알려줘.',url:'https://chatgpt.com/'},
  {id:'codex',provider:'OpenAI',kind:'개발 에이전트',icon:'🛠️',title:'Codex',summary:'프로젝트 폴더를 읽고 코드 수정·실행·검증까지 맡는 AI 개발 담당자',useWhen:'실제 프로그램 기능 추가, 버그 수정, GitHub 반영과 브라우저 검증이 필요할 때',avoidWhen:'아이디어만 자유롭게 대화하거나 단순 문서 초안만 필요할 때',needs:'프로젝트 폴더, 컨텍스트 문서, 이번 작업, 유지할 기능, 완료 기준',outputs:['수정된 코드','검증 결과','커밋'],tags:['coding','automation','connect'],prompt:'현재 프로젝트와 AGENTS.md를 먼저 읽고 이번 기능만 구현해. 기존 기능을 보호하고 실제 동작까지 검증해.',url:'https://developers.openai.com/codex/'},
  {id:'codex-plan',provider:'OpenAI',kind:'Codex 기능',icon:'🗺️',title:'Codex Plan mode',summary:'코드를 바꾸기 전에 AI가 상황을 확인하고 작업 계획을 세우는 모드',useWhen:'요구가 모호하거나 여러 파일·단계가 얽힌 기능을 시작할 때',avoidWhen:'문구 하나처럼 작고 명확한 수정에는 바로 작업해도 됩니다.',needs:'목표, 현재 문제, 절대 바꾸면 안 되는 부분',outputs:['구현 전 계획','질문','위험 요소'],tags:['idea','coding'],prompt:'아직 수정하지 말고 현재 프로젝트를 확인한 뒤 목표·변경 범위·검증 방법을 계획해.',url:'https://learn.chatgpt.com/docs/codex'},
  {id:'agents-md',provider:'OpenAI',kind:'Codex 기능',icon:'📜',title:'AGENTS.md',summary:'Codex가 프로젝트에서 반복해서 지켜야 할 규칙을 저장하는 문서',useWhen:'같은 설명이나 실수가 반복되고, 실행·검증 방법을 모든 작업에 적용해야 할 때',avoidWhen:'이번 한 번만 필요한 요청은 채팅에 적는 편이 낫습니다.',needs:'폴더 구조, 실행 방법, 유지 원칙, 완료 기준',outputs:['지속적인 프로젝트 규칙'],tags:['coding','knowledge','automation'],prompt:'최근 반복된 실수를 정리하고 짧고 실용적인 AGENTS.md 규칙으로 제안해.',url:'https://learn.chatgpt.com/docs/agent-configuration/agents-md'},
  {id:'skills',provider:'OpenAI',kind:'Codex 기능',icon:'🧩',title:'Skills',summary:'자주 반복하는 전문 작업 절차를 AI가 다시 사용할 수 있게 묶는 기능',useWhen:'문서 제작·검증·배포처럼 같은 순서의 작업을 여러 프로젝트에서 반복할 때',avoidWhen:'한 번뿐인 작업이나 아직 절차가 안정되지 않은 작업',needs:'검증된 작업 순서, 입력 자료, 완료 조건',outputs:['재사용 가능한 AI 작업 절차'],tags:['automation','coding','knowledge'],prompt:'이 작업은 반복될 예정이야. 먼저 안정적인 절차를 정리하고 재사용 가능한 Skill로 만들 가치가 있는지 판단해.',url:'https://learn.chatgpt.com/docs/codex'},
  {id:'plugins-mcp',provider:'OpenAI',kind:'Codex 연결 기능',icon:'🔌',title:'Plugins와 MCP',summary:'GitHub·Drive·Slack 같은 외부 정보와 작업 도구를 AI에 연결하는 방법',useWhen:'AI가 프로젝트 밖의 최신 파일·업무 데이터·서비스를 직접 읽거나 작업해야 할 때',avoidWhen:'파일을 직접 첨부하는 것으로 충분하거나 연결 권한이 불필요할 때',needs:'연결할 서비스, 필요한 최소 권한, 사용자 승인',outputs:['외부 데이터 조회','서비스 작업'],tags:['connect','automation','research'],prompt:'[서비스]를 연결해 [작업]을 하고 싶어. 필요한 최소 권한과 안전한 연결 방법을 먼저 설명해.',url:'https://learn.chatgpt.com/docs/plugins'},
  {id:'browser-automation',provider:'OpenAI',kind:'Codex 기능',icon:'🌐',title:'Browser Use와 Automations',summary:'공개 화면을 직접 시험하거나 반복 점검을 예약하는 기능',useWhen:'버튼·모바일 화면을 실제로 검증하거나 안정된 점검을 정기 실행할 때',avoidWhen:'코드만 확인하면 되는 작업이나 아직 자주 바뀌는 실험 단계',needs:'확인할 주소, 사용자 행동 순서, 성공 기준',outputs:['실제 화면 검증','예약된 반복 점검'],tags:['automation','coding'],prompt:'공개 주소에서 [행동 순서]를 직접 실행하고 [성공 기준]을 확인해. 코드 확인만으로 완료 처리하지 마.',url:'https://learn.chatgpt.com/docs/codex'},
  {id:'claude',provider:'Anthropic',kind:'AI 서비스',icon:'🧠',title:'Claude',summary:'긴 문서와 맥락을 읽고 기획·분석·글쓰기를 함께 진행하는 AI',useWhen:'긴 자료를 바탕으로 요구사항을 정리하거나 설명과 문서 품질을 다듬을 때',avoidWhen:'실제 코드 저장소를 지속적으로 수정하려면 Claude Code나 Codex가 더 적합합니다.',needs:'목적, 참고 자료, 원하는 출력 형식',outputs:['분석','기획서','문서 초안'],tags:['idea','research','knowledge'],prompt:'첨부 자료를 읽고 초보자가 이해하기 어려운 부분과 빠진 맥락을 찾아 쉬운 구조로 다시 정리해.',url:'https://claude.ai/'},
  {id:'claude-projects',provider:'Anthropic',kind:'AI 내부 기능',icon:'🗂️',title:'Claude Projects',summary:'채팅·지식 파일·프로젝트 지침을 한 작업공간에 유지하는 기능',useWhen:'긴 문서와 여러 대화를 같은 배경지식으로 연결해야 할 때',avoidWhen:'짧은 일회성 질문에는 필요하지 않습니다.',needs:'프로젝트 지식 파일과 공통 지침',outputs:['지속되는 프로젝트 맥락','지식 기반 대화'],tags:['knowledge','idea','research'],prompt:'프로젝트 지식과 지침을 우선 사용하고, 자료에 없는 내용은 추측이라고 구분해.',url:'https://support.anthropic.com/en/articles/9517075-what-are-projects'},
  {id:'artifacts',provider:'Anthropic',kind:'AI 내부 기능',icon:'🎨',title:'Claude Artifacts',summary:'문서·코드·웹페이지·React 시제품을 대화 옆 별도 화면에서 만들고 수정하는 기능',useWhen:'설치 전에 인터랙티브 화면이나 한 페이지 시제품을 빠르게 보고 싶을 때',avoidWhen:'여러 파일, 외부 API, 지속 저장이 필요한 완성형 프로그램',needs:'만들 화면과 사용자가 누를 행동',outputs:['시각적 시제품','문서','다이어그램'],tags:['prototype','idea'],prompt:'설치 없이 바로 확인할 수 있는 Artifact로 [기능] 시제품을 만들고 사용 흐름을 보여줘.',url:'https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them'},
  {id:'claude-code',provider:'Anthropic',kind:'개발 에이전트',icon:'⌨️',title:'Claude Code',summary:'터미널에서 프로젝트 코드를 읽고 수정·실행하는 Anthropic의 개발 도구',useWhen:'기존 코드베이스 분석, 구현, 명령 실행과 개발 자동화가 필요할 때',avoidWhen:'터미널 환경이 부담스럽고 시각적인 초보자 흐름이 더 중요할 때',needs:'프로젝트 폴더, 설치 환경, 권한과 완료 기준',outputs:['수정된 코드','터미널 검증 결과'],tags:['coding','automation','connect'],prompt:'현재 코드를 먼저 분석하고 [기능]만 구현해. 변경 전후 테스트와 실행 결과를 함께 알려줘.',url:'https://docs.anthropic.com/en/docs/claude-code/overview'},
  {id:'gemini',provider:'Google',kind:'AI 서비스',icon:'✨',title:'Gemini',summary:'Google 검색·Workspace와 연결해 대화, 자료 이해와 생성 작업을 하는 AI',useWhen:'Google 자료·파일과 함께 아이디어를 정리하거나 멀티모달 작업을 할 때',avoidWhen:'로컬 프로젝트 파일을 직접 세밀하게 관리하는 개발 작업',needs:'Google 계정, 사용할 파일과 연결 서비스',outputs:['답변','문서','자료 분석'],tags:['idea','research','knowledge','connect'],prompt:'첨부 자료와 내가 지정한 Google 자료만 기준으로 [결과]를 만들어. 사용한 근거를 구분해.',url:'https://gemini.google.com/'},
  {id:'gems',provider:'Google',kind:'AI 내부 기능',icon:'💎',title:'Gemini Gems',summary:'역할·작업·맥락·출력 형식을 저장한 맞춤형 Gemini',useWhen:'같은 역할과 결과 형식으로 반복 질문하고 싶을 때',avoidWhen:'작업 방식이 아직 자주 바뀌거나 한 번만 사용할 때',needs:'역할, 반복 작업, 참고 자료, 원하는 형식',outputs:['일관된 맞춤 응답'],tags:['automation','idea','knowledge'],prompt:'[역할]로 행동하고 [작업]을 수행하며, [자료]를 참고해 항상 [형식]으로 답하는 Gem 지침을 작성해.',url:'https://support.google.com/gemini/answer/15235603'},
  {id:'canvas',provider:'Google',kind:'AI 내부 기능',icon:'🖼️',title:'Gemini Canvas',summary:'문서·슬라이드·코드·앱을 별도 작업 화면에서 만들고 수정하는 기능',useWhen:'아이디어를 문서나 간단한 앱 화면으로 빠르게 시각화할 때',avoidWhen:'복잡한 저장소 관리와 정밀한 배포·테스트가 필요할 때',needs:'만들 결과 형식과 핵심 내용',outputs:['문서','코드','앱 시제품'],tags:['prototype','idea','coding'],prompt:'Canvas에서 [사용자]가 [행동]할 수 있는 간단한 앱 시제품을 만들고 바로 미리보기 해줘.',url:'https://support.google.com/gemini/answer/16047321'},
  {id:'deep-research',provider:'Google',kind:'AI 내부 기능',icon:'🔎',title:'Gemini Deep Research',summary:'검색과 선택한 자료를 바탕으로 조사 계획을 세우고 긴 보고서를 만드는 기능',useWhen:'시장·기술·경쟁 제품처럼 최신 자료를 여러 출처에서 조사할 때',avoidWhen:'빠른 단답이나 이미 제공한 문서만 분석하면 될 때',needs:'조사 질문, 범위, 포함·제외할 출처',outputs:['출처가 포함된 조사 보고서'],tags:['research','idea'],prompt:'[주제]를 [범위]에서 조사해. 계획을 먼저 보여주고 공식·1차 출처를 우선해 비교표와 결론을 작성해.',url:'https://support.google.com/gemini/answer/15719111'},
  {id:'notebooklm',provider:'Google',kind:'지식 도구',icon:'📚',title:'NotebookLM',summary:'업로드한 PDF·웹·영상·문서를 근거로 질문하고 요약·학습 자료를 만드는 도구',useWhen:'내 자료를 벗어나지 않고 인용과 함께 이해·정리하고 싶을 때',avoidWhen:'자유로운 창작이나 로컬 코드 파일을 직접 수정할 때',needs:'신뢰할 수 있는 출처 파일과 질문',outputs:['인용 답변','요약','마인드맵','오디오 개요'],tags:['knowledge','research'],prompt:'선택한 출처만 사용해 [질문]에 답하고, 각 판단의 근거가 되는 출처를 표시해.',url:'https://support.google.com/notebooklm/answer/16164461'},
  {id:'ai-studio',provider:'Google',kind:'개발 플랫폼',icon:'🧪',title:'Google AI Studio',summary:'자연어로 Gemini 기반 웹·Android 앱을 만들고 미리보기·내보내기하는 개발 공간',useWhen:'Gemini API, 이미지·음성 기능이나 Google 서비스 연결 앱을 빠르게 시험할 때',avoidWhen:'AI 기능이 없는 단순 사이트이거나 이미 다른 저장소·배포 흐름이 안정됐을 때',needs:'Google 계정, 앱 아이디어, 사용할 AI 능력과 비용 범위',outputs:['웹 앱','Android 시제품','Gemini API 프로젝트'],tags:['prototype','coding','connect'],prompt:'Build 모드에서 [사용자]가 [행동]하는 앱을 만들어. 필요한 AI 기능과 권한을 먼저 설명하고 라이브 미리보기로 검증해.',url:'https://ai.google.dev/gemini-api/docs/aistudio-build-mode'}
]

export const toolRecipes = [
  {title:'빠른 아이디어 시제품',tools:['ChatGPT 또는 Claude','Artifacts 또는 Canvas'],description:'대화로 흐름을 정한 뒤 설치 없이 화면을 먼저 확인합니다.'},
  {title:'실제 웹 프로그램',tools:['Codex 또는 Claude Code','Node.js','GitHub','Vercel'],description:'프로젝트 파일을 수정하고 버전·배포·실제 화면까지 검증합니다.'},
  {title:'자료 기반 프로그램',tools:['NotebookLM','ChatGPT 또는 Claude','Codex'],description:'신뢰할 자료를 먼저 정리한 뒤 그 지식을 활용하는 프로그램을 만듭니다.'},
  {title:'Google 업무 자동화',tools:['Gemini 또는 AI Studio','Gmail·Drive·Sheets 연결'],description:'Google 계정의 업무 데이터를 사용하는 도구를 설계합니다.'},
  {title:'반복 개발 자동화',tools:['AGENTS.md','Skills','MCP·Plugins','Automations'],description:'검증된 규칙과 반복 절차를 다음 작업에서도 자동으로 재사용합니다.'}
]

