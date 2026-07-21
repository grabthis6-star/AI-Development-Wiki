import { documents, projects, timeline } from './data/wiki-data.js';
import { createPluginRegistry } from './core/plugin-registry.js';
import { builtInPlugins } from './plugins/index.js';

const app = document.querySelector('#app');
const registry = createPluginRegistry(builtInPlugins);
const routeFromHash = () => location.hash.replace('#/','') || 'home';
const state = {
  view: routeFromHash(), query: '', category: '전체',
  recent: JSON.parse(localStorage.getItem('wiki-recent') || '[]')
};

const byId = id => documents.find(doc => doc.id === id);
const projectById = id => projects.find(project => project.id === id);
const categories = ['전체', ...new Set(documents.map(doc => doc.category))];

function remember(id) {
  if (!byId(id)) return;
  state.recent = [id, ...state.recent.filter(item => item !== id)].slice(0, 5);
  localStorage.setItem('wiki-recent', JSON.stringify(state.recent));
}

function navigate(route) {
  const nextHash = route === 'home' ? '' : `/${route}`;
  if (location.hash === `#${nextHash}` || (!location.hash && route === 'home')) {
    state.view = route;
    render();
  } else location.hash = nextHash;
  scrollTo({top:0, behavior:'smooth'});
}

function go(id) { remember(id); navigate(id); }
function goProject(id) { navigate(`project/${id}`); }
function routeIsActive(route) {
  return state.view === route || (route.startsWith('project/') && state.view.startsWith('project/'));
}

function matches(doc) {
  const text = [doc.title, doc.summary, doc.category, doc.tags.join(' '), doc.content.join(' ')].join(' ').toLowerCase();
  return text.includes(state.query.toLowerCase()) && (state.category === '전체' || doc.category === state.category);
}

function sidebar() {
  const pluginNav = registry.navigation().map(plugin => {
    const { route, label } = plugin.navigation;
    return `<button class="${routeIsActive(route)?'on':''}" data-route="${route}">${plugin.icon} ${label}</button>`;
  }).join('');
  return `<aside class="side">
    <div class="brand"><div class="logo">⚡</div><div><strong>AI Development OS</strong><span>Build · Learn · Reuse</span></div></div>
    <nav><button class="${state.view==='home'?'on':''}" data-route="home">⌂ 홈</button>${pluginNav}<button class="${state.view==='plugins'?'on':''}" data-route="plugins">⚙ Plugins</button></nav>
    <div class="sidefoot">처음이라면 홈의 시작 가이드를 따라가세요.<br>${registry.enabled().length}개 플러그인 활성화</div>
  </aside>`;
}

function card(doc) {
  return `<button class="card" data-go="${doc.id}"><span class="icon">${doc.icon}</span><span class="tag">${doc.category}</span><h3>${doc.title}</h3><p>${doc.summary}</p><div class="tags">${doc.tags.map(tag=>`<span>#${tag}</span>`).join('')}</div></button>`;
}
function filteredCards() {
  const filtered = documents.filter(matches);
  return filtered.length ? filtered.map(card).join('') : '<div class="empty">검색 결과가 없습니다.</div>';
}
function updateSearchResults() {
  const grid = document.querySelector('#knowledge-grid');
  if (!grid) return;
  grid.innerHTML = filteredCards();
  grid.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', () => go(el.dataset.go)));
}
function projectCard(project) {
  return `<button class="project project-link" data-project="${project.id}"><div><strong>${project.icon} ${project.name}</strong><span>${project.status} · 다음: ${project.next}</span></div><b>${project.progress}%</b><i><em style="width:${project.progress}%"></em></i></button>`;
}
function pluginTile(plugin) {
  return `<button class="workspace-tile plugin-tile" data-route="${plugin.navigation?.route || 'plugins'}"><span>${plugin.icon}</span><div><strong>${plugin.name}</strong><small>${plugin.dashboard?.description || `${plugin.commands?.length || 0} commands`}</small></div></button>`;
}

function guideAction(icon, title, description, label, attrs) {
  return `<article class="guide-action"><span class="guide-icon">${icon}</span><div><h3>${title}</h3><p>${description}</p></div><button ${attrs}>${label} →</button></article>`;
}

function learningPath() {
  const path = ['start','rules','prompts','template','checklist'];
  return path.map((id,index) => {
    const doc = byId(id);
    return `<button class="path-step" data-go="${id}"><span>${index+1}</span><div><strong>${doc.title}</strong><small>${doc.summary}</small></div></button>`;
  }).join('');
}


function startHere() {
  return `<section class="start-here"><div><p class="eyebrow">START HERE · AI HANDOFF</p><h2>새 AI에게 GuideFlow의 모든 맥락을 한 번에 전달하세요.</h2><p>프로젝트 목적, 사용 기술, 시행착오, AI 협업 방식과 검증 원칙을 압축한 문서입니다. 새 ChatGPT·Codex·Claude 작업을 시작할 때 가장 먼저 읽히세요.</p></div><div class="start-actions"><a class="start-link primary" href="./GUIDEFLOW_CONTEXT.md" target="_blank" rel="noopener">컨텍스트 문서 열기 →</a><a class="start-link" href="./TECH_INDEX.md" target="_blank" rel="noopener">기술 색인</a><a class="start-link" href="./AI_RULES.md" target="_blank" rel="noopener">AI 규칙</a></div></section>`;
}

function home() {
  const recentDocs = state.recent.map(byId).filter(Boolean);
  const continueId = recentDocs[0]?.id || 'start';
  return `${startHere()}<section class="topbar"><label class="search">⌕<input id="search" value="${state.query}" placeholder="궁금한 용어, 태그, 내용을 검색하세요" autocomplete="off"></label><span class="pill">${documents.length} documents</span></section>
  <section class="welcome"><div><p class="eyebrow">GUIDE + WIKI + PROJECT</p><h1>무엇부터 해야 할지 몰라도<br>괜찮습니다.</h1><p>처음이라면 안내를 따라 배우고, 궁금한 것이 있다면 위키에서 찾고, 준비되면 프로젝트에 바로 적용하세요.</p></div><div class="welcome-badge"><span>오늘의 시작점</span><strong>${byId(continueId)?.title || '처음 시작하기'}</strong><button data-go="${continueId}">이어서 보기 →</button></div></section>
  <section class="section"><div class="sectionhead"><div><p class="eyebrow">CHOOSE YOUR WAY</p><h2>오늘 무엇을 하고 싶나요?</h2></div></div><div class="guide-grid">
    ${guideAction('🎓','처음부터 배우기','개발 지식이 없어도 순서대로 따라가는 입문 경로입니다.','가이드 시작','data-go="start"')}
    ${guideAction('🔎','궁금한 내용 찾기','기존 위키의 문서와 태그를 그대로 검색합니다.','위키 검색','data-action="focus-search"')}
    ${guideAction('🛠️','프로젝트에 적용하기','배운 내용을 실제 프로젝트와 체크리스트로 연결합니다.','프로젝트 보기','data-project="ai-development-wiki"')}
  </div></section>
  <section class="section learning-section"><div class="sectionhead"><div><p class="eyebrow">BEGINNER PATH</p><h2>처음이라면 이 순서로 시작하세요</h2><p class="section-copy">각 문서는 기존 위키 문서입니다. 새로운 학습 흐름이 기존 지식을 덮어쓰지 않고 길만 안내합니다.</p></div><span class="pill">5단계 입문</span></div><div class="learning-path">${learningPath()}</div></section>
  <section class="stats"><article><span>위키 문서</span><strong>${documents.length}</strong></article><article><span>카테고리</span><strong>${categories.length-1}</strong></article><article><span>프로젝트</span><strong>${projects.length}</strong></article><article><span>최근 학습</span><strong>${recentDocs.length}</strong></article></section>
  <section class="section"><div class="sectionhead"><div><p class="eyebrow">WIKI</p><h2>필요한 지식을 바로 찾기</h2><p class="section-copy">기존 사전형 위키 기능은 그대로 유지됩니다.</p></div><div class="filters">${categories.map(cat=>`<button class="${state.category===cat?'on':''}" data-category="${cat}">${cat}</button>`).join('')}</div></div><div class="grid" id="knowledge-grid">${filteredCards()}</div></section>
  ${recentDocs.length?`<section class="section"><div class="sectionhead"><div><p class="eyebrow">CONTINUE</p><h2>최근 본 문서</h2></div></div><div class="recent">${recentDocs.map(card).join('')}</div></section>`:''}
  <section class="section dashboard"><div class="panel"><h2>프로젝트</h2>${projects.map(projectCard).join('')}</div><div class="panel"><h2>최근 타임라인</h2>${timeline.slice(0,3).map(item=>`<article class="event"><span></span><div><small>${item.when}</small><strong>${item.title}</strong><p>${item.detail}</p></div></article>`).join('')}</div></section>
  <section class="section"><div class="sectionhead"><div><p class="eyebrow">SYSTEM</p><h2>OS 기능</h2></div><button class="back" data-route="plugins">플러그인 관리 →</button></div><div class="project-grid">${registry.dashboard().map(pluginTile).join('')}</div></section>`;
}

function documentView(id) {
  const doc = byId(id);
  if (!doc) return `<button class="back" data-route="home">← 홈</button><div class="empty">문서를 찾을 수 없습니다.</div>`;
  const related = doc.related.map(byId).filter(Boolean);
  const linkedProjects = projects.filter(project => project.documents.includes(doc.id));
  const nextDoc = related[0];
  return `<button class="back" data-route="home">← 홈</button><article class="dochead"><span class="docicon">${doc.icon}</span><p class="eyebrow">${doc.category} · ${doc.difficulty}</p><h1>${doc.title}</h1><p>${doc.summary}</p><div class="tags">${doc.tags.map(tag=>`<span>#${tag}</span>`).join('')}</div></article><section class="content"><div class="doc-intro"><span>이 문서에서 얻는 것</span><strong>${doc.summary}</strong></div><h2>핵심 내용</h2><ol>${doc.content.map(item=>`<li>${item}</li>`).join('')}</ol><p class="updated">마지막 구조 업데이트: ${doc.updatedAt}</p></section>${nextDoc?`<section class="next-guide"><div><p class="eyebrow">NEXT STEP</p><h2>다음으로 이어서 보기</h2><p>${nextDoc.summary}</p></div><button data-go="${nextDoc.id}">${nextDoc.icon} ${nextDoc.title} →</button></section>`:''}${linkedProjects.length?`<section class="section"><div class="sectionhead"><div><p class="eyebrow">PROJECTS</p><h2>이 문서를 사용하는 프로젝트</h2></div></div><div class="project-grid">${linkedProjects.map(project=>`<button class="workspace-tile" data-project="${project.id}"><span>${project.icon}</span><div><strong>${project.name}</strong><small>${project.status} · ${project.progress}%</small></div></button>`).join('')}</div></section>`:''}<section class="section"><div class="sectionhead"><div><p class="eyebrow">KNOWLEDGE GRAPH</p><h2>연결된 문서</h2></div></div><div class="grid">${related.map(card).join('')}</div></section>`;
}

function projectView(id) {
  const project = projectById(id);
  if (!project) return `<button class="back" data-route="home">← 홈</button><div class="empty">프로젝트를 찾을 수 없습니다.</div>`;
  const projectDocs = project.documents.map(byId).filter(Boolean);
  const projectTimeline = timeline.filter(item => item.projects?.includes(project.id));
  const categoriesInProject = new Set(projectDocs.map(doc => doc.category)).size;
  const latestUpdate = projectDocs.map(doc => doc.updatedAt).sort().reverse()[0] || '-';
  return `<button class="back" data-route="home">← 홈</button><article class="project-hero"><div><span class="project-icon">${project.icon}</span><p class="eyebrow">PROJECT WORKSPACE · ${project.status}</p><h1>${project.name}</h1><p>${project.description}</p><div class="repo-label">GitHub · ${project.repository}</div></div><div class="score"><strong>${project.progress}%</strong><span>project progress</span></div></article><section class="stats"><article><span>관련 문서</span><strong>${projectDocs.length}</strong></article><article><span>카테고리</span><strong>${categoriesInProject}</strong></article><article><span>최근 업데이트</span><strong class="date-stat">${latestUpdate}</strong></article><article><span>다음 작업</span><strong>${project.nextTasks.length}</strong></article></section><section class="workspace-layout"><div class="panel"><div class="sectionhead"><div><p class="eyebrow">NEXT</p><h2>다음 작업</h2></div></div><div class="task-list">${project.nextTasks.map((task,index)=>`<div><span>${String(index+1).padStart(2,'0')}</span><p>${task}</p></div>`).join('')}</div><div class="next-focus"><small>현재 초점</small><strong>${project.next}</strong></div></div><div class="panel"><div class="sectionhead"><div><p class="eyebrow">ACTIVITY</p><h2>프로젝트 타임라인</h2></div></div>${projectTimeline.length?projectTimeline.map(item=>`<article class="event"><span></span><div><small>${item.when}</small><strong>${item.title}</strong><p>${item.detail}</p></div></article>`).join(''):'<div class="empty">연결된 타임라인이 없습니다.</div>'}</div></section><section class="section"><div class="sectionhead"><div><p class="eyebrow">DOCUMENTS</p><h2>프로젝트 지식</h2></div><span class="pill">${projectDocs.length} documents</span></div><div class="grid">${projectDocs.map(card).join('')}</div></section>`;
}

function pluginsView() {
  return `<button class="back" data-route="home">← 홈</button><article class="dochead"><span class="docicon">🧱</span><p class="eyebrow">PLUGIN ARCHITECTURE</p><h1>OS Plugins</h1><p>기능 모듈이 내비게이션, 대시보드 카드와 명령을 코어 레지스트리에 자동 등록합니다.</p></article><section class="stats"><article><span>등록</span><strong>${registry.all().length}</strong></article><article><span>활성</span><strong>${registry.enabled().length}</strong></article><article><span>내비게이션</span><strong>${registry.navigation().length}</strong></article><article><span>명령</span><strong>${registry.commands().length}</strong></article></section><section class="section"><div class="sectionhead"><div><p class="eyebrow">REGISTRY</p><h2>설치된 플러그인</h2></div></div><div class="project-grid">${registry.enabled().map(pluginTile).join('')}</div></section>`;
}

function bind() {
  document.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', () => go(el.dataset.go)));
  document.querySelectorAll('[data-project]').forEach(el => el.addEventListener('click', () => goProject(el.dataset.project)));
  document.querySelectorAll('[data-route]').forEach(el => el.addEventListener('click', () => navigate(el.dataset.route)));
  document.querySelectorAll('[data-category]').forEach(el => el.addEventListener('click', () => { state.category = el.dataset.category; render(); }));
  document.querySelectorAll('[data-action="focus-search"]').forEach(el => el.addEventListener('click', () => {
    const search = document.querySelector('#search');
    search?.focus();
    search?.scrollIntoView({behavior:'smooth', block:'center'});
  }));
  const search = document.querySelector('#search');
  if (search) search.addEventListener('input', event => { state.query = event.target.value; updateSearchResults(); });
}
function currentView() {
  if (state.view === 'home') return home();
  if (state.view === 'plugins') return pluginsView();
  if (state.view.startsWith('project/')) return projectView(state.view.split('/')[1]);
  return documentView(state.view);
}
function render() { app.innerHTML = `<div class="shell">${sidebar()}<main>${currentView()}</main></div>`; bind(); }
addEventListener('hashchange', () => { state.view = routeFromHash(); render(); });
render();