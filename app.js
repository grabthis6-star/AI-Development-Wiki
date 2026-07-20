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
    <nav><button class="${state.view==='home'?'on':''}" data-route="home">⌂ 대시보드</button>${pluginNav}<button class="${state.view==='plugins'?'on':''}" data-route="plugins">⚙ Plugins</button></nav>
    <div class="sidefoot">${registry.enabled().length}개 플러그인 활성화<br>GitHub가 지식 원본입니다.</div>
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

function home() {
  const recentDocs = state.recent.map(byId).filter(Boolean);
  return `<section class="topbar"><label class="search">⌕<input id="search" value="${state.query}" placeholder="제목, 태그, 본문 검색" autocomplete="off"></label><span class="pill">${documents.length} documents</span></section>
  <section class="hero"><div><p class="eyebrow">PERSONAL DEVELOPMENT SYSTEM</p><h1>배우고, 만들고,<br>다시 사용하기</h1><p>프로젝트 경험과 프롬프트, 패턴, 실패와 해결법을 연결해 다음 개발을 더 빠르게 시작합니다.</p></div><div class="score"><strong>78%</strong><span>OS foundation</span></div></section>
  <section class="stats"><article><span>문서</span><strong>${documents.length}</strong></article><article><span>카테고리</span><strong>${categories.length-1}</strong></article><article><span>프로젝트</span><strong>${projects.length}</strong></article><article><span>활성 플러그인</span><strong>${registry.enabled().length}</strong></article></section>
  <section class="section"><div class="sectionhead"><div><p class="eyebrow">PLUGINS</p><h2>OS 기능</h2></div><button class="back" data-route="plugins">플러그인 관리 →</button></div><div class="project-grid">${registry.dashboard().map(pluginTile).join('')}</div></section>
  <section class="section"><div class="sectionhead"><div><p class="eyebrow">KNOWLEDGE</p><h2>지식 탐색</h2></div><div class="filters">${categories.map(cat=>`<button class="${state.category===cat?'on':''}" data-category="${cat}">${cat}</button>`).join('')}</div></div><div class="grid" id="knowledge-grid">${filteredCards()}</div></section>
  ${recentDocs.length?`<section class="section"><div class="sectionhead"><div><p class="eyebrow">RECENT</p><h2>최근 본 문서</h2></div></div><div class="recent">${recentDocs.map(card).join('')}</div></section>`:''}
  <section class="section dashboard"><div class="panel"><h2>프로젝트</h2>${projects.map(projectCard).join('')}</div><div class="panel"><h2>최근 타임라인</h2>${timeline.slice(0,3).map(item=>`<article class="event"><span></span><div><small>${item.when}</small><strong>${item.title}</strong><p>${item.detail}</p></div></article>`).join('')}</div></section>`;
}

function documentView(id) {
  const doc = byId(id);
  if (!doc) return `<button class="back" data-route="home">← 대시보드</button><div class="empty">문서를 찾을 수 없습니다.</div>`;
  const related = doc.related.map(byId).filter(Boolean);
  const linkedProjects = projects.filter(project => project.documents.includes(doc.id));
  return `<button class="back" data-route="home">← 대시보드</button><article class="dochead"><span class="docicon">${doc.icon}</span><p class="eyebrow">${doc.category} · ${doc.difficulty}</p><h1>${doc.title}</h1><p>${doc.summary}</p><div class="tags">${doc.tags.map(tag=>`<span>#${tag}</span>`).join('')}</div></article><section class="content"><h2>핵심 내용</h2><ol>${doc.content.map(item=>`<li>${item}</li>`).join('')}</ol><p class="updated">마지막 구조 업데이트: ${doc.updatedAt}</p></section>${linkedProjects.length?`<section class="section"><div class="sectionhead"><div><p class="eyebrow">PROJECTS</p><h2>이 문서를 사용하는 프로젝트</h2></div></div><div class="project-grid">${linkedProjects.map(project=>`<button class="workspace-tile" data-project="${project.id}"><span>${project.icon}</span><div><strong>${project.name}</strong><small>${project.status} · ${project.progress}%</small></div></button>`).join('')}</div></section>`:''}<section class="section"><div class="sectionhead"><div><p class="eyebrow">KNOWLEDGE GRAPH</p><h2>연결된 문서</h2></div></div><div class="grid">${related.map(card).join('')}</div></section>`;
}

function projectView(id) {
  const project = projectById(id);
  if (!project) return `<button class="back" data-route="home">← 대시보드</button><div class="empty">프로젝트를 찾을 수 없습니다.</div>`;
  const projectDocs = project.documents.map(byId).filter(Boolean);
  const projectTimeline = timeline.filter(item => item.projects?.includes(project.id));
  const categoriesInProject = new Set(projectDocs.map(doc => doc.category)).size;
  const latestUpdate = projectDocs.map(doc => doc.updatedAt).sort().reverse()[0] || '-';
  return `<button class="back" data-route="home">← 대시보드</button><article class="project-hero"><div><span class="project-icon">${project.icon}</span><p class="eyebrow">PROJECT WORKSPACE · ${project.status}</p><h1>${project.name}</h1><p>${project.description}</p><div class="repo-label">GitHub · ${project.repository}</div></div><div class="score"><strong>${project.progress}%</strong><span>project progress</span></div></article><section class="stats"><article><span>관련 문서</span><strong>${projectDocs.length}</strong></article><article><span>카테고리</span><strong>${categoriesInProject}</strong></article><article><span>최근 업데이트</span><strong class="date-stat">${latestUpdate}</strong></article><article><span>다음 작업</span><strong>${project.nextTasks.length}</strong></article></section><section class="workspace-layout"><div class="panel"><div class="sectionhead"><div><p class="eyebrow">NEXT</p><h2>다음 작업</h2></div></div><div class="task-list">${project.nextTasks.map((task,index)=>`<div><span>${String(index+1).padStart(2,'0')}</span><p>${task}</p></div>`).join('')}</div><div class="next-focus"><small>현재 초점</small><strong>${project.next}</strong></div></div><div class="panel"><div class="sectionhead"><div><p class="eyebrow">ACTIVITY</p><h2>프로젝트 타임라인</h2></div></div>${projectTimeline.length?projectTimeline.map(item=>`<article class="event"><span></span><div><small>${item.when}</small><strong>${item.title}</strong><p>${item.detail}</p></div></article>`).join(''):'<div class="empty">연결된 타임라인이 없습니다.</div>'}</div></section><section class="section"><div class="sectionhead"><div><p class="eyebrow">DOCUMENTS</p><h2>프로젝트 지식</h2></div><span class="pill">${projectDocs.length} documents</span></div><div class="grid">${projectDocs.map(card).join('')}</div></section>`;
}

function pluginsView() {
  return `<button class="back" data-route="home">← 대시보드</button><article class="dochead"><span class="docicon">🧱</span><p class="eyebrow">PLUGIN ARCHITECTURE</p><h1>OS Plugins</h1><p>기능 모듈이 내비게이션, 대시보드 카드와 명령을 코어 레지스트리에 자동 등록합니다.</p></article><section class="stats"><article><span>등록</span><strong>${registry.all().length}</strong></article><article><span>활성</span><strong>${registry.enabled().length}</strong></article><article><span>내비게이션</span><strong>${registry.navigation().length}</strong></article><article><span>명령</span><strong>${registry.commands().length}</strong></article></section><section class="section"><div class="sectionhead"><div><p class="eyebrow">REGISTRY</p><h2>설치된 플러그인</h2></div></div><div class="project-grid">${registry.enabled().map(pluginTile).join('')}</div></section>`;
}

function bind() {
  document.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', () => go(el.dataset.go)));
  document.querySelectorAll('[data-project]').forEach(el => el.addEventListener('click', () => goProject(el.dataset.project)));
  document.querySelectorAll('[data-route]').forEach(el => el.addEventListener('click', () => navigate(el.dataset.route)));
  document.querySelectorAll('[data-category]').forEach(el => el.addEventListener('click', () => { state.category = el.dataset.category; render(); }));
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
