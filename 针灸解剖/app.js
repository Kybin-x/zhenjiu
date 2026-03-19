/* ══════════════════════════════════════════
   针灸解剖学基础 · 交互逻辑
   app.js — 所有 UI 交互和功能函数
   ══════════════════════════════════════════ */

function initApp() {

  // ── 搜索 ──
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  searchInput.addEventListener('input', function() {
    const v = this.value.trim();
    if (!v) { searchResults.style.display = 'none'; return; }
    const matches = searchData.filter(d => d.t.includes(v) || d.c.includes(v)).slice(0, 8);
    if (!matches.length) { searchResults.style.display = 'none'; return; }
    searchResults.innerHTML = matches.map(m =>
      `<div class="sr-item" onclick="goSearch(${m.tab})">
         <div class="sr-chapter">${m.c}</div>${m.t}
       </div>`
    ).join('');
    searchResults.style.display = 'block';
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) searchResults.style.display = 'none';
  });

  // ── Tab 切换 ──
  document.getElementById('tabsBar').addEventListener('click', function(e) {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    switchTab(+btn.dataset.tab);
  });

  // ── 测验选项点击高亮 ──
  document.querySelectorAll('.quiz-options').forEach(optGroup => {
    optGroup.querySelectorAll('.quiz-opt').forEach(opt => {
      opt.addEventListener('click', function() {
        const siblings = optGroup.querySelectorAll('.quiz-opt');
        const submitted = [...siblings].some(s =>
          s.classList.contains('correct') || s.classList.contains('wrong')
        );
        if (submitted) return;
        siblings.forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
        this.querySelector('input').checked = true;
      });
    });
  });
}

// ── 进度 ──
const done = new Array(4).fill(false);

function updateProgress() {
  const n = done.filter(Boolean).length;
  document.getElementById('progressBadge').textContent = `进度 ${n} / 4`;
}

// ── Tab 切换 ──
function switchTab(idx) {
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn')[idx].classList.add('active');
  document.querySelectorAll('.panel')[idx].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goSearch(tab) {
  switchTab(tab);
  document.getElementById('searchResults').style.display = 'none';
  document.getElementById('searchInput').value = '';
}

// ── SVG 人体导航 ──
// 区域 → region-section id 映射
const regionMap = {
  head:    'region-head',
  neck:    'region-neck',
  chest:   'region-chest',
  abdomen: 'region-abdomen',
  back:    'region-back',
  arm:     'region-arm',
  leg:     'region-leg',
  foot:    'region-leg',   // 足部滚动到下肢区
};

function highlightRegion(regionKey) {
  // 先切换到体表标志 tab（panel-1）
  switchTab(1);

  // 等 panel 显示后再滚动
  setTimeout(() => {
    // 清除所有高亮
    document.querySelectorAll('.body-region').forEach(r => r.classList.remove('active'));
    // 高亮当前
    const svgEl = document.getElementById('svg-' + regionKey);
    if (svgEl) svgEl.classList.add('active');

    // 滚动到对应内容区
    const targetId = regionMap[regionKey];
    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, 80);
}

// ── 标记完成 ──
function markDone(idx) {
  if (done[idx]) return;
  done[idx] = true;
  document.querySelectorAll('.tab-btn')[idx].classList.add('completed');
  const btn = document.querySelectorAll('.panel')[idx].querySelector('.mark-done-btn');
  btn.textContent = '✓ 已完成';
  btn.classList.add('done');
  updateProgress();
}

// ── 测验提交 ──
function submitQuiz(btn, panelIdx) {
  const panel = document.querySelectorAll('.panel')[panelIdx];
  const questions = panel.querySelectorAll('.quiz-q');
  let correct = 0, answered = 0;

  questions.forEach(q => {
    const answer = q.dataset.answer;
    const name = q.querySelector('input').name;
    const selected = q.querySelector(`input[name="${name}"]:checked`);
    const feedback = q.querySelector('.quiz-feedback');
    const opts = q.querySelectorAll('.quiz-opt');

    if (!selected) return;
    answered++;

    opts.forEach(opt => {
      const v = opt.querySelector('input').value;
      if (v === answer) opt.classList.add(selected.value === answer ? 'correct' : 'show-correct');
      if (v === selected.value && v !== answer) opt.classList.add('wrong');
      opt.classList.remove('selected');
      opt.style.pointerEvents = 'none';
    });

    if (selected.value === answer) {
      correct++;
      feedback.className = 'quiz-feedback correct';
      feedback.textContent = '✓ 正确！';
    } else {
      feedback.className = 'quiz-feedback wrong';
      feedback.textContent = `✗ 正确答案是 ${answer}`;
    }
  });

  if (answered < questions.length) {
    alert('请回答所有问题后再提交！');
    questions.forEach(q => {
      const name = q.querySelector('input').name;
      const sel = q.querySelector(`input[name="${name}"]:checked`);
      if (!sel) q.querySelectorAll('.quiz-opt').forEach(o => o.style.pointerEvents = '');
    });
    return;
  }

  const resultEl = btn.nextElementSibling;
  const pct = Math.round(correct / questions.length * 100);
  const emoji = pct === 100 ? '🎉' : pct >= 60 ? '👍' : '💪';
  resultEl.textContent = `${emoji} 本次得分：${correct} / ${questions.length}（${pct}%）`;
  resultEl.style.display = 'block';
  btn.style.display = 'none';

  if (pct >= 60) setTimeout(() => markDone(panelIdx), 800);
}

// ── 卡片展开 ──
function toggleCard(el) { el.classList.toggle('open'); }
function toggleMer(el)  { el.classList.toggle('open'); }
