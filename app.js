import { project, techGroups, techTopics, aiTopics, aiTemplates, conceptTopics, automationLevels, workflowRecipes, practicalGuides, fieldTips, toolPurposes, aiTools, toolRecipes } from './knowledge-data.js'
const app=document.querySelector('#app'),toast=document.querySelector('#toast')
function go(route){const next=route==='home'?'':'#'+route;if(location.hash===next)render();else location.hash=next}
function flash(text){toast.textContent=text;toast.classList.remove('hidden');setTimeout(()=>toast.classList.add('hidden'),1600)}
async function copy(text){try{let copied=false;if(navigator.clipboard&&window.isSecureContext){try{await navigator.clipboard.writeText(text);copied=true}catch{}}if(!copied){const area=document.createElement('textarea');area.value=text;area.setAttribute('readonly','');area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();copied=document.execCommand('copy');area.remove()}flash(copied?'복사했습니다.':'복사하지 못했습니다.')}catch{flash('복사하지 못했습니다.')}}

const searchItems = [
  ...techTopics.map((item) => ({ route: 'tech/' + item.id, icon: item.icon, title: item.title, summary: item.summary, kind: 'GuideFlow 기술' })),
  ...aiTopics.map((item, index) => ({ route: 'ai/' + index, icon: item.icon, title: item.title, summary: item.summary, kind: 'AI 협업' })),
  ...conceptTopics.map((item) => ({ route: 'concept/' + item.id, icon: item.icon, title: item.title, summary: item.summary, kind: '용어' })),
  ...practicalGuides.map((item) => ({ route: 'practical/' + item.id, icon: item.icon, title: item.title, summary: item.summary, kind: '실전 운영' })),
  ...aiTools.map((item) => ({ route: 'tool/' + item.id, icon: item.icon, title: item.title, summary: item.summary, kind: item.provider }))
]

function searchResults(query = '') {
  const term = query.trim().toLocaleLowerCase('ko')
  if (!term) return '<p class="search-hint">예: GitHub, 오류 수정, 이미지, API, 자동화</p>'

  const matches = searchItems
    .filter((item) => (item.title + ' ' + item.summary + ' ' + item.kind).toLocaleLowerCase('ko').includes(term))
    .slice(0, 18)

  if (!matches.length) return '<p class="search-hint">검색 결과가 없습니다. 다른 단어로 찾아보세요.</p>'

  return matches.map((item) =>
    '<button class="search-result" data-search-route="' + item.route + '">' +
      '<span>' + item.icon + '</span><span><small>' + item.kind + '</small><strong>' + item.title + '</strong><em>' + item.summary + '</em></span>' +
    '</button>'
  ).join('')
}

function bindSearchResults() {
  document.querySelectorAll('[data-search-route]').forEach((item) => {
    item.onclick = () => go(item.dataset.searchRoute)
  })
}

function home(){
  app.innerHTML =
    '<section class="hero">' +
      '<span class="eyebrow">GUIDEFLOW에서 검증한 AI 프로그램 제작 가이드 · v' + project.version + '</span>' +
      '<h1>영상 아이디어 도구를 만들며 배운 방법을, 다음 프로그램에서도 재사용합니다.</h1>' +
      '<p>GuideFlow의 실제 시행착오를 바탕으로 비개발자가 AI에게 일을 맡기고, 결과를 확인하고, 안전하게 다음 단계로 나아가는 방법을 정리했습니다.</p>' +
      '<div class="actions"><button class="btn primary" data-route="context">Start Here →</button><button class="btn" data-route="ai">AI와 만드는 방법</button></div>' +
    '</section>' +
    '<section class="intro"><h2>세 곳 중 하나에서 시작하세요</h2><p>도구를 전부 공부할 필요 없이 지금 필요한 흐름 하나만 선택하면 됩니다.</p></section>' +
    '<section class="doc-grid primary-grid">' +
      '<article class="doc-card"><span>🚀</span><h2>Start Here</h2><p>프로젝트 목적, 유지 원칙과 새 AI에게 전달할 시작문을 한 번에 확인합니다.</p><button class="btn primary" data-route="context">프로젝트 넘기기</button></article>' +
      '<article class="doc-card"><span>🤝</span><h2>AI와 프로그램 만들기</h2><p>기능 요청, 오류 전달, 기존 기능 보호와 완료 확인 방법을 실제 양식으로 사용합니다.</p><button class="btn primary" data-route="ai">협업 가이드</button></article>' +
      '<article class="doc-card"><span>🧰</span><h2>GuideFlow에서 배운 기술</h2><p>설치와 개발 도구가 왜 필요했고 어디에서 막혔는지 초보자 기준으로 확인합니다.</p><button class="btn primary" data-route="tech">기술 가이드</button></article>' +
    '</section>' +
    '<section class="search-panel"><label for="site-search"><span class="eyebrow">통합 검색</span><strong>막힌 문제나 궁금한 단어를 입력하세요</strong></label><input id="site-search" type="search" autocomplete="off" placeholder="GitHub, 오류 수정, 이미지, API, 자동화"><div id="search-results" class="search-results">' + searchResults('') + '</div></section>' +
    '<section class="intro"><h2>필요할 때 보는 참고 자료</h2><p>도구·용어·자동화 정보는 중심 흐름을 이해한 다음 찾아보면 됩니다.</p></section>' +
    '<section class="reference-grid">' +
      '<button class="reference-card" data-route="tools"><span>🧭</span><strong>도구 지도</strong><small>' + aiTools.length + '개 도구 비교</small></button>' +
      '<button class="reference-card" data-route="concepts"><span>🔤</span><strong>용어 이해</strong><small>CLI·API·MCP</small></button>' +
      '<button class="reference-card" data-route="automation"><span>🔁</span><strong>자동화 설계</strong><small>사람이 확인할 범위</small></button>' +
      '<button class="reference-card" data-route="practical"><span>🧪</span><strong>실전 운영</strong><small>권한·비용·검수</small></button>' +
    '</section>'
}

function context(){app.innerHTML=`<article class="context"><button class="back" data-route="home">← 처음으로</button><header class="detail-head"><span class="eyebrow">START HERE · ${project.updatedAt}</span><h1 class="page-title">GuideFlow를 새 AI에게 전달하는 문서</h1><p>${project.purpose}</p><div class="actions" style="margin-top:18px"><button class="btn primary" data-copy="handoff">AI 시작문 복사</button><a class="btn" href="./GUIDEFLOW_CONTEXT.md" download>전체 문서 저장</a></div></header><section class="block"><h2>GuideFlow가 해결하는 문제</h2><p>영상 아이디어가 있어도 기존 편집 프로그램은 무겁게 느껴져 시작을 미루게 됩니다. GuideFlow는 본편집 전에 캡처 이미지로 전체 흐름을 빠르게 잡아 그 시작 장벽을 낮춥니다.</p></section><section class="block"><h2>작업 흐름</h2><div class="flow"><span>아이디어</span><b>→</b><span>캡처·붙여넣기</span><b>→</b><span>순서·시간 조정</span><b>→</b><span>재생 확인</span><b>→</b><span>본편집</span></div></section><section class="block"><h2>제품 원칙</h2><ul class="checklist"><li>Premiere처럼 복잡한 편집기를 만들지 않습니다.</li><li>기능 수보다 빠른 접근과 가벼운 사용감을 우선합니다.</li><li>요청하지 않은 기능이나 기술을 임의로 늘리지 않습니다.</li><li>계획보다 확인 가능한 결과물을 먼저 만듭니다.</li></ul></section><section class="block"><h2>완료를 판단하는 네 단계</h2><div class="flow"><span>구현</span><b>→</b><span>GitHub 커밋</span><b>→</b><span>배포 성공</span><b>→</b><span>브라우저 동작</span></div></section><section class="block"><h2>새 작업 시작문</h2><pre class="prompt">${project.handoff}</pre><button class="btn" style="margin-top:12px" data-copy="handoff">문장 복사</button></section></article>`}
function workspace(items, selected, route, eyebrow, title, copy, detail, extra=''){
  const list=items.map((item,index)=>{
    const id=String(item.id??index),active=id===String(selected)
    return `<button class="workspace-item${active?' active':''}" data-route="${route}/${id}" aria-pressed="${active}"><span>${item.icon}</span><span><strong>${item.title}</strong><small>${item.summary}</small></span><b>›</b></button>`
  }).join('')
  return `<section class="page-head compact"><span class="eyebrow">${eyebrow}</span><h1 class="page-title">${title}</h1><p class="page-copy">${copy}</p></section><section class="workspace"><aside class="workspace-list" aria-label="${title} 항목">${list}</aside><article class="detail detail-panel" aria-live="polite">${detail}</article></section>${extra}`
}
function techContent(t){return `<header class="detail-head"><span class="detail-icon">${t.icon}</span><span class="eyebrow">사용자 준비 가이드</span><h1>${t.title}</h1><p>${t.summary}</p></header><section class="block"><span class="label">언제 준비하나요?</span><h2>GuideFlow에서는 언제 필요했나요?</h2><p>${t.place}</p></section><section class="block"><span class="label">도구의 역할</span><h2>무슨 작용을 하나요?</h2><p>${t.why}</p></section><section class="block"><span class="label">초보자 설명</span><h2>쉽게 비유하면</h2><p>${t.easy}</p></section><section class="block"><span class="label">사용자가 할 순서</span><h2>어떻게 준비하나요?</h2><div class="flow">${t.flow.map((x,i)=>`<span>${x}</span>${i<t.flow.length-1?'<b>→</b>':''}`).join('')}</div></section><section class="block"><span class="label">설치·확인·전달 예시</span><h2>무엇을 입력하거나 AI에게 주나요?</h2><pre class="code"><code>${escapeHtml(t.code)}</code></pre></section><section class="block"><span class="label">GuideFlow 시행착오</span><h2>어디에서 막혔나요?</h2><p>${t.problem}</p></section><section class="block"><span class="label">안전한 해결 순서</span><h2>어떻게 해결하나요?</h2><p class="reuse">${t.solution}</p></section><section class="block"><span class="label">사용자가 직접 확인</span><h2>준비 완료 체크리스트</h2><ul class="checklist">${t.checks.map(x=>`<li>${x}</li>`).join('')}</ul></section><section class="block"><span class="label">재사용</span><h2>다른 프로그램에도 필요한가요?</h2><p>${t.reuse}</p></section><section class="block"><span class="label">복사해서 사용</span><h2>AI에게 바로 보내는 문장</h2><pre class="prompt">${t.prompt}</pre><button class="btn" style="margin-top:12px" data-copy-tech="${t.id}">문장 복사</button></section>`}
function techList(id=techTopics[0]?.id){const t=techTopics.find(x=>x.id===id)||techTopics[0];app.innerHTML=workspace(techTopics,t.id,'tech','준비 가이드 · 항목을 선택하세요','AI와 만들기 위한 준비 가이드','왼쪽에서 기술을 고르면 오른쪽에서 준비·확인·AI 요청 방법을 바로 볼 수 있습니다.',techContent(t),`<div class="actions workspace-footer"><button class="btn primary" data-route="tools">${aiTools.length}개 전체 AI·도구 비교하기 →</button></div>`)}
function techDetail(id){techList(id)}
function aiContent(t,index){return `<header class="detail-head"><span class="detail-icon">${t.icon}</span><span class="eyebrow">AI COLLABORATION CASE</span><h1>${t.title}</h1><p>${t.summary}</p></header><section class="block"><span class="label">실제 시행착오</span><h2>왜 문제가 됐나요?</h2><p>${t.problem}</p></section><section class="block"><span class="label">재사용 규칙</span><h2>다음부터 어떻게 해야 하나요?</h2><p class="reuse">${t.rule}</p></section><section class="block"><span class="label">복사해서 사용</span><h2>AI에게 바로 쓰는 문장</h2><pre class="prompt">${t.prompt}</pre><button class="btn" style="margin-top:12px" data-copy-ai="${index}">문장 복사</button></section>`}
function aiList(index=0){const selected=Number.isInteger(index)&&aiTopics[index]?index:0;const extra=`<section class="intro"><h2>상황별 요청 양식</h2><p>지금 하고 있는 작업에 맞는 양식을 복사해 빈칸만 채우세요.</p></section><section class="template-grid">${aiTemplates.map((t,i)=>`<article class="template"><h3>${t.title}</h3><p>${t.description}</p><pre class="prompt">${t.prompt}</pre><button class="btn" style="margin-top:11px" data-copy-template="${i}">양식 복사</button></article>`).join('')}</section>`;app.innerHTML=workspace(aiTopics,selected,'ai','AI_RULES.md · 규칙을 선택하세요','실패에서 만든 AI 협업 규칙','왼쪽에서 규칙을 고르면 오른쪽에서 실제 사례와 복사할 요청문을 바로 확인할 수 있습니다.',aiContent(aiTopics[selected],selected),extra)}
function aiDetail(index){aiList(index)}
function conceptContent(t){return `<header class="detail-head"><span class="detail-icon">${t.icon}</span><span class="eyebrow">초보자 AI 도구 용어</span><h1>${t.title}</h1><p>${t.summary}</p></header><section class="block"><span class="label">쉽게 이해하기</span><h2>비유하면 무엇인가요?</h2><p>${t.easy}</p></section><section class="block"><span class="label">필요한 이유</span><h2>왜 알아야 하나요?</h2><p>${t.why}</p></section><section class="block"><span class="label">역할 나누기</span><h2>사용자와 AI는 무엇을 하나요?</h2><div class="template-grid"><article class="template"><h3>사용자</h3><p>${t.userRole}</p></article><article class="template"><h3>AI</h3><p>${t.aiRole}</p></article></div></section><section class="block"><span class="label">선택 기준</span><h2>언제 쓰고 언제 필요 없나요?</h2><p><strong>추천:</strong> ${t.when}</p><p style="margin-top:8px"><strong>보류:</strong> ${t.avoid}</p></section><section class="block"><span class="label">복사해서 사용</span><h2>AI에게 보내는 요청문</h2><pre class="prompt">${t.prompt}</pre><button class="btn" style="margin-top:12px" data-copy-concept="${t.id}">문장 복사</button></section>`}
function conceptList(id=conceptTopics[0]?.id){const t=conceptTopics.find(x=>x.id===id)||conceptTopics[0];app.innerHTML=`<nav class="reference-tabs" aria-label="참고 자료"><button data-route="tools">도구 지도</button><button class="active" data-route="concepts">용어 이해</button><button data-route="automation">자동화 설계</button><button data-route="practical">실전 운영</button></nav>`+workspace(conceptTopics,t.id,'concept',`AI TOOL GLOSSARY · ${conceptTopics.length} TERMS`,'AI 도구 용어 이해','왼쪽에서 용어를 선택하면 쉬운 비유와 사용자·AI의 역할을 함께 볼 수 있습니다.',conceptContent(t))}
function conceptDetail(id){conceptList(id)}
function automationPage(){app.innerHTML=`<nav class="reference-tabs" aria-label="참고 자료"><button data-route="tools">도구 지도</button><button data-route="concepts">용어 이해</button><button class="active" data-route="automation">자동화 설계</button><button data-route="practical">실전 운영</button></nav><section class="page-head"><span class="eyebrow">HUMAN-IN-THE-LOOP AUTOMATION</span><h1 class="page-title">완전 자동화보다, 기본 틀을 빠르게 만드는 자동화</h1><p class="page-copy">카카오톡 대화에서 반복된 실사용 원칙처럼 AI가 초벌을 만들고 사용자가 품질과 방향을 최종 결정합니다.</p></section><section class="intro"><h2>자동화 다섯 단계</h2><p>처음에는 1단계에서 시작하고, 수동으로 성공한 작업만 다음 단계로 올립니다.</p></section><section class="card-grid">${automationLevels.map(x=>`<article class="card" style="cursor:default"><span>${x.level}</span><h3>${x.title}</h3><p>${x.summary}</p><div class="tool-meta"><span class="pill">사용자: ${x.user}</span><span class="pill">AI: ${x.ai}</span></div><strong>주의: ${x.risk}</strong></article>`).join('')}</section><section class="intro"><h2>프로젝트별 실전 작업 흐름</h2><p>도구 이름보다 작업의 순서와 사람이 확인할 위치를 먼저 정합니다.</p></section><section class="template-grid">${workflowRecipes.map(r=>`<article class="template"><h3>${r.icon} ${r.title}</h3><div class="flow">${r.steps.map((s,i)=>`<span>${s}</span>${i<r.steps.length-1?'<b>→</b>':''}`).join('')}</div><div class="recipe-tools">${r.tools.map(t=>`<span>${t}</span>`).join('')}</div><p class="reuse">${r.principle}</p></article>`).join('')}</section><section class="block"><span class="label">안전한 자동화 원칙</span><h2>자동화 전에 반드시 확인하세요</h2><ul class="checklist"><li>한 번도 성공하지 않은 작업을 바로 예약하지 않습니다.</li><li>API 비용 한도와 중지 방법을 먼저 정합니다.</li><li>MCP·플러그인은 필요한 것만 연결하고 권한을 확인합니다.</li><li>긴 세션과 사용하지 않는 연결은 정리합니다.</li><li>사실·저작권·품질은 사람이 최종 검수합니다.</li></ul></section>`}

function practicalContent(g){return `<header class="detail-head"><span class="detail-icon">${g.icon}</span><span class="eyebrow">초보자 실전 운영 가이드</span><h1>${g.title}</h1><p>${g.summary}</p></header><section class="block"><span class="label">필요한 이유</span><h2>왜 이 과정이 필요한가요?</h2><p>${g.why}</p></section><section class="block"><span class="label">역할 나누기</span><h2>사용자와 AI가 할 일</h2><div class="template-grid"><article class="template"><h3>사용자</h3><ol class="checklist">${g.userSteps.map(x=>`<li>${x}</li>`).join('')}</ol></article><article class="template"><h3>AI</h3><ol class="checklist">${g.aiSteps.map(x=>`<li>${x}</li>`).join('')}</ol></article></div></section><section class="block"><span class="label">완료 확인</span><h2>이 항목까지 확인하세요</h2><ul class="checklist">${g.check.map(x=>`<li>${x}</li>`).join('')}</ul></section><section class="block"><span class="label">복사해서 사용</span><h2>AI에게 보내는 요청문</h2><pre class="prompt">${g.prompt}</pre><button class="btn" style="margin-top:12px" data-copy-practical="${g.id}">요청문 복사</button></section>`}
function practicalList(id=practicalGuides[0]?.id){const g=practicalGuides.find(x=>x.id===id)||practicalGuides[0];const extra=`<section class="intro"><h2>현장에서 바로 쓰는 팁</h2><p>도구보다 작업 순서를 바꾸면 실패와 재작업을 더 크게 줄일 수 있습니다.</p></section><section class="template-grid">${fieldTips.map(t=>`<article class="template"><h3>${t.icon} ${t.title}</h3><p><strong>핵심:</strong> ${t.tip}</p><p class="reuse"><strong>실행:</strong> ${t.action}</p><p><strong>주의:</strong> ${t.caution}</p></article>`).join('')}</section>`;app.innerHTML=`<nav class="reference-tabs" aria-label="참고 자료"><button data-route="tools">도구 지도</button><button data-route="concepts">용어 이해</button><button data-route="automation">자동화 설계</button><button class="active" data-route="practical">실전 운영</button></nav>`+workspace(practicalGuides,g.id,'practical',`PRACTICAL AI OPERATIONS · ${practicalGuides.length} GUIDES`,'AI 실전 작업법','왼쪽에서 상황을 선택하면 사용자와 AI의 역할, 완료 체크리스트를 한 화면에서 볼 수 있습니다.',practicalContent(g),extra)}
function practicalDetail(id){practicalList(id)}
function toolContent(t){return `<header class="detail-head"><span class="detail-icon">${t.icon}</span><span class="eyebrow">${t.provider} · ${t.kind}</span><h1>${t.title}</h1><p>${t.summary}</p><div class="tool-meta">${t.tags.map(tag=>`<span class="pill">${toolPurposes.find(p=>p.id===tag)?.label||tag}</span>`).join('')}</div></header><section class="block"><span class="label">추천 상황</span><h2>언제 사용하면 좋나요?</h2><p>${t.useWhen}</p></section><section class="block"><span class="label">불필요한 상황</span><h2>언제 사용하지 않아도 되나요?</h2><p>${t.avoidWhen}</p></section><section class="block"><span class="label">사용자 준비</span><h2>무엇을 준비해야 하나요?</h2><p>${t.needs}</p></section><section class="block"><span class="label">만들 수 있는 결과</span><h2>무엇을 얻을 수 있나요?</h2><div class="flow">${t.outputs.map(x=>`<span>${x}</span>`).join('')}</div></section><section class="block"><span class="label">바로 사용</span><h2>복사해서 보내는 요청문</h2><pre class="prompt">${t.prompt}</pre><button class="btn" style="margin-top:12px" data-copy-tool="${t.id}">요청문 복사</button></section><section class="block"><span class="label">공식 안내</span><h2>최신 기능과 사용 조건 확인</h2><p>기능과 요금제는 바뀔 수 있으므로 공식 문서에서 마지막으로 확인하세요.</p><a class="btn official" style="margin-top:12px" href="${t.url}" target="_blank" rel="noreferrer">공식 사이트 열기 ↗</a></section>`}
function toolsList(purpose='all',selectedId){const validPurpose=toolPurposes.some(p=>p.id===purpose)?purpose:'all';const filtered=validPurpose==='all'?aiTools:aiTools.filter(t=>t.tags.includes(validPurpose));const t=filtered.find(x=>x.id===selectedId)||filtered[0]||aiTools[0];const filters=`<nav class="filter-bar" aria-label="도구 목적 필터">${toolPurposes.map(p=>`<button class="${p.id===validPurpose?'active':''}" data-purpose="${p.id}">${p.label}</button>`).join('')}</nav>`;app.innerHTML=`<nav class="reference-tabs" aria-label="참고 자료"><button class="active" data-route="tools">도구 지도</button><button data-route="concepts">용어 이해</button><button data-route="automation">자동화 설계</button><button data-route="practical">실전 운영</button></nav>`+filters+workspace(filtered,t.id,'tool',`AI TOOL MAP · ${aiTools.length} TOOLS`,'만들고 싶은 능력으로 도구 찾기','목적을 좁힌 뒤 왼쪽에서 도구를 고르면 오른쪽에서 사용 시점과 준비물을 바로 비교할 수 있습니다.',toolContent(t))}
function toolDetail(id){toolsList('all',id)}
function escapeHtml(value){return value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}
function render(){const [page,arg]=location.hash.slice(1).split('/');if(page==='context')context();else if(page==='tech'&&arg)techDetail(arg);else if(page==='tech')techList();else if(page==='ai'&&arg)aiDetail(Number(arg));else if(page==='ai')aiList();else if(page==='concept'&&arg)conceptDetail(arg);else if(page==='concepts')conceptList();else if(page==='automation')automationPage();else if(page==='practical'&&arg)practicalDetail(arg);else if(page==='practical')practicalList();else if(page==='tool'&&arg)toolDetail(arg);else if(page==='tools')toolsList(arg||'all');else home();bind();setActiveTab(page);scrollTo(0,0)}

function setActiveTab(page){
  const active=page==='context'?'context':page==='ai'?'ai':page==='tech'?'tech':['tools','tool','concepts','concept','automation','practical'].includes(page)?'reference':''
  document.querySelectorAll('[data-tab]').forEach(tab=>tab.classList.toggle('active',tab.dataset.tab===active))
}

function bind(){
  document.querySelectorAll('[data-route]').forEach(x=>x.onclick=()=>go(x.dataset.route))
  document.querySelectorAll('[data-tech]').forEach(x=>x.onclick=()=>go('tech/'+x.dataset.tech))
  document.querySelectorAll('[data-ai]').forEach(x=>x.onclick=()=>go('ai/'+x.dataset.ai))
  document.querySelectorAll('[data-purpose]').forEach(x=>x.onclick=()=>go('tools/'+x.dataset.purpose))
  document.querySelectorAll('[data-tool]').forEach(x=>x.onclick=()=>go('tool/'+x.dataset.tool))
  document.querySelectorAll('[data-concept]').forEach(x=>x.onclick=()=>go('concept/'+x.dataset.concept))
  document.querySelectorAll('[data-practical]').forEach(x=>x.onclick=()=>go('practical/'+x.dataset.practical))
  document.querySelectorAll('[data-copy="handoff"]').forEach(x=>x.onclick=()=>copy(project.handoff))
  document.querySelectorAll('[data-copy-tech]').forEach(x=>x.onclick=()=>copy(techTopics.find(t=>t.id===x.dataset.copyTech).prompt))
  document.querySelectorAll('[data-copy-ai]').forEach(x=>x.onclick=()=>copy(aiTopics[Number(x.dataset.copyAi)].prompt))
  document.querySelectorAll('[data-copy-template]').forEach(x=>x.onclick=()=>copy(aiTemplates[Number(x.dataset.copyTemplate)].prompt))
  document.querySelectorAll('[data-copy-tool]').forEach(x=>x.onclick=()=>copy(aiTools.find(t=>t.id===x.dataset.copyTool).prompt))
  document.querySelectorAll('[data-copy-concept]').forEach(x=>x.onclick=()=>copy(conceptTopics.find(t=>t.id===x.dataset.copyConcept).prompt))
  document.querySelectorAll('[data-copy-practical]').forEach(x=>x.onclick=()=>copy(practicalGuides.find(t=>t.id===x.dataset.copyPractical).prompt))
  bindSearchResults()

  const search = document.querySelector('#site-search')
  if (search) {
    search.oninput = () => {
      document.querySelector('#search-results').innerHTML = searchResults(search.value)
      bindSearchResults()
    }
  }
}

addEventListener('hashchange',render);render()
