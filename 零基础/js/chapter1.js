/* ============================================
   零起点学针灸 — 第一篇：功能逻辑
   依赖: common.js, chapter1-content.js
   ============================================ */

(function () {
    'use strict';

    // 从内容模块获取数据
    const DATA = Chapter1Data;
    const META = DATA.META;
    const SIDEBAR_NAV = DATA.SIDEBAR_NAV;
    const QUIZZES = DATA.QUIZZES;
    const SECTIONS = DATA.SECTIONS;

    // ==========================================
    // 渲染主内容
    // ==========================================
    function renderPage() {
        const app = document.getElementById('app');
        if (!app) return;

        // 构建各section的HTML
        let sectionsHTML = '';
        SIDEBAR_NAV.forEach(item => {
            const sectionContent = SECTIONS[item.id] || '';
            sectionsHTML += `<div class="content-section" id="${item.id}">${sectionContent}</div>\n`;
        });

        // 构建测验区块HTML
        let quizzesHTML = '';
        QUIZZES.forEach(q => {
            const optionsHTML = q.options.map(opt => `<div class="quiz-option">${opt}</div>`).join('\n');
            quizzesHTML += `
                <div class="quiz-block" id="${q.id}">
                    <div class="quiz-title">${q.question}</div>
                    ${optionsHTML}
                    <div class="quiz-feedback"></div>
                </div>
            `;
        });

        app.innerHTML = `
        <div class="chapter-page">
            <div class="chapter-content">

                <!-- 章节头部 -->
                <div class="chapter-header">
                    <div class="chapter-label">${META.label}</div>
                    <h1>${META.title}</h1>
                    <p class="chapter-intro">${META.intro}</p>
                    
</a>
                </div>

                <!-- 各节内容 -->
                ${sectionsHTML}

                <!-- 测验追加到测验区 -->
                <div id="quiz-container">
                    ${quizzesHTML}
                </div>

                <!-- 完成按钮 -->
                <div class="content-section text-center" style="opacity:1;transform:none;">
                    <button class="hero-cta" id="mark-complete" style="border:none;cursor:pointer;font-family:var(--font-body);">
                        ✅ 标记本章为已学完
                    </button>
                    <p class="text-muted mt-md" id="complete-status" style="font-size:0.9rem;"></p>
                </div>

                <!-- 章节导航 -->
                <div class="chapter-nav">
                    <a href="${META.prevPage.url}" class="chapter-nav-item">
                        <div class="nav-label">← ${META.prevPage.label}</div>
                        <div class="nav-title">${META.prevPage.title}</div>
                    </a>
                    <a href="${META.nextPage.url}" class="chapter-nav-item next">
                        <div class="nav-label">${META.nextPage.label} →</div>
                        <div class="nav-title">${META.nextPage.title}</div>
                    </a>
                </div>

            </div>
        </div>
        `;

        // 将测验区块移入sec-quiz区段内（追加到已有内容后）
        const quizSection = document.getElementById('sec-quiz');
        const quizContainer = document.getElementById('quiz-container');
        if (quizSection && quizContainer) {
            // 把quizContainer的子元素移入quizSection
            while (quizContainer.firstChild) {
                quizSection.appendChild(quizContainer.firstChild);
            }
            quizContainer.remove();
        }
    }

    // ==========================================
    // 渲染侧边栏
    // ==========================================
    function renderSidebar() {
        const sidebar = document.getElementById('chapter-sidebar');
        if (!sidebar) return;

        sidebar.className = 'chapter-sidebar';

        const navHTML = SIDEBAR_NAV.map(item => `
            <li class="${item.level === 2 ? 'sub-item' : ''}">
                <a href="#${item.id}" data-section="${item.id}">${item.label}</a>
            </li>
        `).join('');

        sidebar.innerHTML = `
            <div class="sidebar-title">本章目录</div>
            <ul class="sidebar-nav" id="sidebar-nav">${navHTML}</ul>
        `;
    }

    // ==========================================
    // 侧边栏高亮 + 章节阅读记录
    // ==========================================
    function initSidebarHighlight() {
        const sections = SIDEBAR_NAV
            .map(n => document.getElementById(n.id))
            .filter(Boolean);
        const links = document.querySelectorAll('#sidebar-nav a');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 高亮侧边栏
                    links.forEach(link => link.classList.remove('active'));
                    const activeLink = document.querySelector(
                        `#sidebar-nav a[data-section="${entry.target.id}"]`
                    );
                    if (activeLink) activeLink.classList.add('active');

                    // 记录阅读进度
                    ProgressManager.markSectionRead(META.id, entry.target.id);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-80px 0px -60% 0px'
        });

        sections.forEach(sec => observer.observe(sec));
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

        // 检查是否已完成
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
        status.textContent = '恭喜！你已完成本章学习 🎉 可以继续学习下一章了。';
    }

    // ==========================================
    // 保存/恢复滚动位置
    // ==========================================
    function initScrollMemory() {
        // 恢复上次阅读位置
        const savedPos = ProgressManager.getScrollPosition(META.id);
        if (savedPos > 100) {
            setTimeout(() => {
                window.scrollTo({ top: savedPos, behavior: 'auto' });
            }, 300);
        }

        // 每5秒保存一次滚动位置
        let saveTimer = null;
        window.addEventListener('scroll', () => {
            if (saveTimer) clearTimeout(saveTimer);
            saveTimer = setTimeout(() => {
                ProgressManager.saveScrollPosition(META.id, window.scrollY);
            }, 5000);
        });

        // 页面关闭/离开时保存
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

            // 移动端关闭侧边栏
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
        // 创建一个浮动的侧边栏切换按钮（仅移动端可见）
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

        // 仅在移动端/平板显示
        function checkWidth() {
            toggleBtn.style.display = window.innerWidth <= 1024 ? 'block' : 'none';
        }
        checkWidth();
        window.addEventListener('resize', checkWidth);

        const sidebar = document.getElementById('chapter-sidebar');
        toggleBtn.addEventListener('click', () => {
            if (sidebar) {
                sidebar.classList.toggle('open');
            }
        });

        // 点击遮罩关闭
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
        initCommon('chapter1');
        initReadingProgress();
        initSidebarHighlight();
        initSidebarNavClick();
        initMobileSidebarToggle();
        initAllQuizzes();
        initCompleteButton();
        initScrollMemory();
        initScrollAnimations(); // 重新初始化，因为内容是动态渲染的
    }

    // DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();