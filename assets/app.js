/* ═══════════════════════════════════════════════════
   针灸入门学习网站 · 全局交互逻辑
   app.js — 进度管理、测验、搜索、通用组件
   ═══════════════════════════════════════════════════ */

// ── Progress Manager ──
const Progress = {
  KEY: 'acuProgress',
  get() { return JSON.parse(localStorage.getItem(this.KEY) || '{}'); },
  set(data) { localStorage.setItem(this.KEY, JSON.stringify(data)); },
  markDone(module) {
    const p = this.get();
    if (!p[module]) p[module] = {};
    p[module].done = true;
    p[module].pct  = 100;
    p[module].doneAt = Date.now();
    this.set(p);
  },
  setModulePct(module, pct) {
    const p = this.get();
    if (!p[module]) p[module] = {};
    p[module].pct = pct;
    if (pct >= 100) p[module].done = true;
    this.set(p);
  },
  incQuiz() {
    const p = this.get();
    p.quizPassed = (p.quizPassed || 0) + 1;
    this.set(p);
  },
  incAcu(n = 1) {
    const p = this.get();
    p.acuLearned = (p.acuLearned || 0) + n;
    this.set(p);
  },
  updateDays() {
    const p = this.get();
    const today = new Date().toDateString();
    if (p.lastDate !== today) {
      p.days = (p.days || 0) + 1;
      p.lastDate = today;
      this.set(p);
    }
  }
};

Progress.updateDays();

// ── Quiz Engine ──
function initQuiz(panelEl, moduleKey) {
  if (!panelEl) return;
  const questions = panelEl.querySelectorAll('.quiz-q');

  // Bind option clicks
  questions.forEach(q => {
    const opts = q.querySelectorAll('.quiz-opt');
    opts.forEach(opt => {
      opt.addEventListener('click', function() {
        const submitted = [...opts].some(o => o.classList.contains('correct') || o.classList.contains('wrong'));
        if (submitted) return;
        opts.forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
        const inp = this.querySelector('input');
        if (inp) inp.checked = true;
      });
    });
  });

  // Submit button
  const submitBtn = panelEl.querySelector('.quiz-submit');
  if (!submitBtn) return;
  submitBtn.addEventListener('click', function() {
    let correct = 0, answered = 0;
    questions.forEach(q => {
      const answer = q.dataset.answer;
      const name   = q.querySelector('input')?.name;
      if (!name) return;
      const selected = q.querySelector(`input[name="${name}"]:checked`);
      const feedback = q.querySelector('.quiz-feedback');
      const opts     = q.querySelectorAll('.quiz-opt');
      if (!selected) return;
      answered++;
      opts.forEach(opt => {
        const v = opt.querySelector('input')?.value;
        opt.style.pointerEvents = 'none';
        opt.classList.remove('selected');
        if (v === answer && v === selected.value) opt.classList.add('correct');
        else if (v === answer)                    opt.classList.add('show-correct');
        else if (v === selected.value)            opt.classList.add('wrong');
      });
      if (selected.value === answer) {
        correct++;
        if (feedback) { feedback.className = 'quiz-feedback correct'; feedback.textContent = '✓ 正确！'; }
      } else {
        if (feedback) { feedback.className = 'quiz-feedback wrong'; feedback.textContent = `✗ 正确答案是 ${answer}`; }
      }
    });

    if (answered < questions.length) {
      alert('请回答所有题目后再提交！');
      questions.forEach(q => {
        const name = q.querySelector('input')?.name;
        if (!name) return;
        const sel = q.querySelector(`input[name="${name}"]:checked`);
        if (!sel) q.querySelectorAll('.quiz-opt').forEach(o => { o.style.pointerEvents = ''; });
      });
      return;
    }

    const pct = Math.round(correct / questions.length * 100);
    const emoji = pct === 100 ? '🎉' : pct >= 60 ? '👍' : '💪';
    const resultEl = panelEl.querySelector('.quiz-result');
    if (resultEl) {
      resultEl.textContent = `${emoji} 得分 ${correct}/${questions.length}（${pct}%）`;
      resultEl.style.display = 'block';
    }
    this.style.display = 'none';
    if (pct >= 60) {
      Progress.incQuiz();
      setTimeout(() => markModuleDone(panelEl, moduleKey), 600);
    }
  });
}

function markModuleDone(panelEl, moduleKey) {
  if (!panelEl || !moduleKey) return;
  const btn = panelEl.querySelector('.mark-done-btn');
  if (btn) { btn.textContent = '✓ 已完成'; btn.classList.add('done'); }
  Progress.markDone(moduleKey);
}

// ── Tab switcher (generic) ──
function initTabs(containerEl) {
  if (!containerEl) return;
  const tabs    = containerEl.querySelectorAll('.tab-btn');
  const panels  = containerEl.querySelectorAll('.tab-panel');
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t  => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      if (panels[i]) panels[i].classList.add('active');
    });
  });
}

// ── Expandable k-card ──
function initKCards(root) {
  const cards = (root || document).querySelectorAll('.k-card');
  cards.forEach(card => {
    if (card.dataset.kcardInit) return;   // prevent duplicate binding
    card.dataset.kcardInit = '1';
    card.addEventListener('click', () => card.classList.toggle('open'));
  });
}

// ── Scroll-in animation ──
function initScrollAnim() {
  const els = document.querySelectorAll('[data-anim]');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = `fadeUp .5s ${e.target.dataset.delay || '0s'} var(--ease) both`;
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => { el.style.opacity = '0'; obs.observe(el); });
}

// ── Generic search over an array ──
function createSearch(inputEl, dropdownEl, data, renderFn, onSelectFn) {
  if (!inputEl || !dropdownEl) return;
  inputEl.addEventListener('input', function() {
    const v = this.value.trim().toLowerCase();
    if (!v) { dropdownEl.style.display = 'none'; return; }
    const matches = data.filter(d => renderFn.match(d, v)).slice(0, 10);
    if (!matches.length) { dropdownEl.style.display = 'none'; return; }
    dropdownEl.innerHTML = matches.map(d => renderFn.item(d)).join('');
    dropdownEl.style.display = 'block';
    dropdownEl.querySelectorAll('.search-item').forEach((el, i) => {
      el.addEventListener('click', () => {
        onSelectFn(matches[i]);
        dropdownEl.style.display = 'none';
        inputEl.value = '';
      });
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-bar')) dropdownEl.style.display = 'none';
  });
}

// ── Mark done button (standalone) ──
function initMarkDoneBtns(moduleKey) {
  document.querySelectorAll('.mark-done-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.classList.contains('done')) return;
      this.textContent = '✓ 已完成';
      this.classList.add('done');
      Progress.markDone(moduleKey);
    });
  });
}

// ── DOM ready: auto-init on every page ──
document.addEventListener('DOMContentLoaded', function() {
  initKCards();   // guard inside prevents double-bind when page also calls it
  initScrollAnim();
});
