import { documents, projects, timeline } from './data/wiki-data.js';

const app = document.querySelector('#app');
const state = {
  view: location.hash.replace('#/','') || 'home',
  query: '',
  category: '전체',
  recent: JSON.parse(localStorage.getItem('wiki-recent') || '[]')
};

const byId = id => documents.find(doc => doc.id === id);
const categories = ['전체', ...new Set(documents.map(doc => doc.category))];

function remember(id) {
  state.recent = [id, ...state.recent.filter(item => item !== id)].slice(0, 5);
  localStorage.setItem('wiki-recent', JSON.stringify(state.recent));
}

function go(id) {
  state.view = id;
  location.hash = id === 'home' ? '' : `/${id}`;
  if (id !== 'home') remember(id);
  render();
  scrollTo({top:0, behavior:'smooth'});
}

function matches(doc) {
  const text = [doc.title, doc.summary, doc.category, doc.tags.join(' '), doc.content.join(' ')].join(' ').toLowerCase();
  return text.includes(state.query.toLowerCase()) && (state.category === '전체' || doc.category === state.category);
}

function sidebar() {
  return `<aside class="side">
    <div class="brand"><div class="logo">⚡</div><div><strong>AI Development OS</strong><span>Build · Learn · Reuse</span></div></div>
    <nav>
      <button class="${state.view==='home'?'on':''}" data-go="home">⌂ 대시보드</button>
      <button data-go="memory">🧠 AI Memory</button>
      <button data-go="prompts">💬 Prompt Library</button>
      <button data-go="patterns">🧩 Pattern Library</button>
      <button data-go="timeline">🕒 Timeline</button>
    </nav>
    <div class="sidefoot">GitHub가 지식 원본입니다.<br>배포 확인 전에는 완료로 판단하지 않습니다.</div>
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

function home() {
  const recentDocs = state.recent.map(byId).filter(Boolean);
  return `<section class="topbar"><label class="search">⌕<input id="search" value="${state.query}" placeholder="제목, 태그, 본문 검색" autocomplete="off"></label><span class="pill">${documents.length} documents</span></section>
  <section class="hero"><div><p class="eyebrow">PERSONAL DEVELOPMENT SYSTEM</p><h1>배우고, 만들고,<br>다시 사용하기</h1><p>프로젝트 경험과 프롬프트, 패턴, 실패와 해결법을 연결해 다음 개발을 더 빠르게 시작합니다.</p></div><div class="score"><strong>78%</strong><span>OS foundation</span></div></section>
  <section class="stats"><article><span>문서</span><strong>${documents.length}</strong></article><article><span>카테고리</span><strong>${categories.length-1}</strong></article><article><span>프로젝트</span><strong>${projects.length}</strong></article><article><span>최근 본 문서</span><strong>${recentDocs.length}</strong></article></section>
  <section class="section"><div class="sectionhead"><div><p class="eyebrow">KNOWLEDGE</p><h2>지식 탐색</h2></div><div class="filters">${categories.map(cat=>`<button class="${state.category===cat?'on':''}" data-category="${cat}">${cat}</button>`).join('')}</div></div><div class="grid" id="knowledge-grid">${filteredCards()}</div></section>
  ${recentDocs.length?`<section class="section"><div class="sectionhead"><div><p class="eyebrow">RECENT</p><h2>최근 본 문서</h2></div></div><div class="recent">${recentDocs.map(card).join('')}</div></section>`:''}
  <section class="section dashboard"><div class="panel"><h2>프로젝트</h2>${projects.map(p=>`<article class="project"><div><strong>${p.icon} ${p.name}</strong><span>${p.status} · 다음: ${p.next}</span></div><b>${p.progress}%</b><i><em style="width:${p.progress}%"></em></i></article>`).join('')}</div><div class="panel"><h2>최근 타임라인</h2>${timeline.map(item=>`<article class="event"><span></span><div><small>${item.when}</small><strong>${item.title}</strong><p>${item.detail}</p></div></article>`).join('')}</div></section>`;
}

function documentView(id) {
  const doc = byId(id);
  if (!doc) return `<div class="empty">문서를 찾을 수 없습니다.</div>`;
  const related = doc.related.map(byId).filter(Boolean);
  return `<button class="back" data-go="home">← 대시보드</button><article class="dochead"><span class="docicon">${doc.icon}</span><p class="eyebrow">${doc.category} · ${doc.difficulty}</p><h1>${doc.title}</h1><p>${doc.summary}</p><div class="tags">${doc.tags.map(tag=>`<span>#${tag}</span>`).join('')}</div></article><section class="content"><h2>핵심 내용</h2><ol>${doc.content.map(item=>`<li>${item}</li>`).join('')}</ol><p class="updated">마지막 구조 업데이트: ${doc.updatedAt}</p></section><section class="section"><div class="sectionhead"><div><p class="eyebrow">KNOWLEDGE GRAPH</p><h2>연결된 문서</h2></div></div><div class="grid">${related.map(card).join('')}</div></section>`;
}

function bind() {
  document.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', () => go(el.dataset.go)));
  document.querySelectorAll('[data-category]').forEach(el => el.addEventListener('click', () => {
    state.category = el.dataset.category;
    render();
  }));
  const search = document.querySelector('#search');
  if (search) search.addEventListener('input', event => {
    state.query = event.target.value;
    updateSearchResults();
  });
}

function render() {
  app.innerHTML = `<div class="shell">${sidebar()}<main>${state.view==='home'?home():documentView(state.view)}</main></div>`;
  bind();
}

addEventListener('hashchange', () => {
  state.view = location.hash.replace('#/','') || 'home';
  render();
});

render();