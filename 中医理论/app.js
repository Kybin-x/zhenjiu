/* ══════════════════════════════════════════
   中医基础理论学习页 · 交互逻辑
   app.js  ── 所有 UI 交互和功能函数
   ══════════════════════════════════════════ */

function initApp() {

  // ── 搜索功能 ──
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  searchInput.addEventListener('input', function() {
    const v = this.value.trim();
    if (!v) { searchResults.style.display = 'none'; return; }
    const matches = searchData.filter(d => d.t.includes(v) || d.c.includes(v)).slice(0, 8);
    if (!matches.length) { searchResults.style.display = 'none'; return; }
    searchResults.innerHTML = matches.map(m =>
      `<div class="sr-item" onclick="goSearch(${m.tab})"><div class="sr-chapter">${m.c}</div>${m.t}</div>`
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

  // ── 测验选项点击反馈 ──
  document.querySelectorAll('.quiz-options').forEach(optGroup => {
    optGroup.querySelectorAll('.quiz-opt').forEach(opt => {
      opt.addEventListener('click', function() {
        const siblings = optGroup.querySelectorAll('.quiz-opt');
        const alreadySubmitted = [...siblings].some(s =>
          s.classList.contains('correct') || s.classList.contains('wrong')
        );
        if (alreadySubmitted) return;
        siblings.forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
        this.querySelector('input').checked = true;
      });
    });
  });

}

// ── 进度状态 ──
const done = new Array(6).fill(false);

function updateProgress() {
  const n = done.filter(Boolean).length;
  document.getElementById('progressBadge').textContent = `进度 ${n} / 6`;
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

// ── 标记章节完成 ──
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
      const selected = q.querySelector(`input[name="${name}"]:checked`);
      if (!selected) {
        q.querySelectorAll('.quiz-opt').forEach(o => o.style.pointerEvents = '');
      }
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

// ── 卡片展开/收起 ──
function toggleCard(el)  { el.classList.toggle('open'); }
function toggleZang(el)  { el.classList.toggle('open'); }
function toggleQi(el)    { el.classList.toggle('open'); }
function toggleWx(el)    { el.classList.toggle('open'); }
