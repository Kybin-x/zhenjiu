/* ============================================
   零起点学针灸 — 第三篇：功能逻辑
   ============================================ */

(function () {
    'use strict';

    const { META, SIDEBAR_NAV, QUIZZES } = Chapter3Data;

    // ==========================================
    // 渲染页面
    // ==========================================
    function renderPage() {
        const app = document.getElementById('app');
        if (!app) return;
        app.innerHTML = Chapter3Data.getContent();
    }

    // ==========================================
    // 渲染侧边栏
    // ==========================================
    function renderSidebar() {
        const sidebar = document.getElementById('chapter-sidebar');
        if (!sidebar) return;

        sidebar.className = 'chapter-sidebar';

        let navHtml = '';
        SIDEBAR_NAV.forEach(item => {
            const cls = item.level === 2 ? 'sub-item' : '';
            navHtml += `<li class="${cls}"><a href="#${item.id}" data-section="${item.id}">${item.label}</a></li>`;
        });

        sidebar.innerHTML = `
            <div class="sidebar-title">本篇目录</div>
            <ul class="sidebar-nav" id="sidebar-nav">
                ${navHtml}
            </ul>
        `;
    }

    // ==========================================
    // 侧边栏高亮跟踪
    // ==========================================
    function initSidebarHighlight() {
        const sections = SIDEBAR_NAV.map(item => document.getElementById(item.id)).filter(Boolean);
        const links = document.querySelectorAll('#sidebar-nav a');

        if (!sections.length || !links.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    links.forEach(link => link.classList.remove('active'));
                    const activeLink = document.querySelector(`#sidebar-nav a[data-section="${id}"]`);
                    if (activeLink) activeLink.classList.add('active');
                    ProgressManager.markSectionRead(META.id, id);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-80px 0px -60% 0px'
        });

        sections.forEach(section => observer.observe(section));
    }

    // ==========================================
    // 初始化测验
    // ==========================================
    function initAllQuizzes() {
        QUIZZES.forEach(q => {
            initQuiz(q.id, q.correctIndex, q.feedbackCorrect, q.feedbackWrong);
        });
    }

    // ==========================================
    // 完成按钮逻辑
    // ==========================================
    function initCompleteButton() {
        const btn = document.getElementById('mark-complete');
        const status = document.getElementById('complete-status');
        if (!btn || !status) return;

        const progress = ProgressManager.get(META.id);
        if (progress.completed) {
            setCompleted(btn, status);
        }

        btn.addEventListener('click', () => {
            ProgressManager.markCompleted(META.id);
            setCompleted(btn, status);
        });
    }

    function setCompleted(btn, status) {
        btn.textContent = '✅ 已学完';
        btn.style.background = 'var(--color-secondary)';
        btn.style.cursor = 'default';
        status.textContent = '恭喜！你已完成本篇学习 🎉 可以继续学习下一篇了。';
    }

    // ==========================================
    // 保存/恢复滚动位置
    // ==========================================
    function initScrollMemory() {
        const savedPos = ProgressManager.getScrollPosition(META.id);
        if (savedPos > 100) {
            setTimeout(() => {
                window.scrollTo({ top: savedPos, behavior: 'auto' });
            }, 300);
        }

        let saveTimer = null;
        window.addEventListener('scroll', () => {
            if (saveTimer) clearTimeout(saveTimer);
            saveTimer = setTimeout(() => {
                ProgressManager.saveScrollPosition(META.id, window.scrollY);
            }, 5000);
        });

        window.addEventListener('beforeunload', () => {
            ProgressManager.saveScrollPosition(META.id, window.scrollY);
        });
    }

    // ==========================================
    // 侧边栏点击平滑滚动
    // ==========================================
    function initSidebarNavClick() {
        const nav = document.getElementById('sidebar-nav');
        if (!nav) return;

        nav.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;

            e.preventDefault();
            const targetId = link.getAttribute('href').replace('#', '');
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            const sidebar = document.getElementById('chapter-sidebar');
            if (sidebar && window.innerWidth <= 1024) {
                sidebar.classList.remove('open');
            }
        });
    }

    // ==========================================
    // 移动端侧边栏切换
    // ==========================================
    function initMobileSidebarToggle() {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'sidebar-toggle-btn';
        toggleBtn.innerHTML = '☰ 目录';
        toggleBtn.setAttribute('aria-label', '切换目录');
        toggleBtn.style.cssText = `
            display: none;
            position: fixed;
            bottom: 80px;
            right: 20px;
            z-index: 600;
            background: var(--color-primary);
            color: #fff;
            border: none;
            border-radius: 25px;
            padding: 10px 18px;
            font-size: 0.85rem;
            font-family: var(--font-body);
            cursor: pointer;
            box-shadow: var(--shadow-md);
            transition: all var(--transition-normal);
        `;

        document.body.appendChild(toggleBtn);

        function checkWidth() {
            toggleBtn.style.display = window.innerWidth <= 1024 ? 'block' : 'none';
        }
        checkWidth();
        window.addEventListener('resize', checkWidth);

        const sidebar = document.getElementById('chapter-sidebar');
        toggleBtn.addEventListener('click', () => {
            if (sidebar) sidebar.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (sidebar &&
                sidebar.classList.contains('open') &&
                !sidebar.contains(e.target) &&
                !toggleBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });
    }

    // ==========================================
    // 初始化入口
    // ==========================================
    function init() {
        renderPage();
        renderSidebar();
        initCommon('chapter3');
        initReadingProgress();
        initSidebarHighlight();
        initSidebarNavClick();
        initMobileSidebarToggle();
        initAllQuizzes();
        initCompleteButton();
        initScrollMemory();
        initScrollAnimations();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();