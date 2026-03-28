/* ============================================
   零起点学针灸 — 原文页功能逻辑
   适用于所有 chapterN-original.html 页面
   ============================================ */

(function () {
    'use strict';

    // ==========================================
    // 阅读进度条
    // ==========================================
    function initReadingProgress() {
        const progressBar = document.querySelector('.original-reading-progress');
        if (!progressBar) {
            // 动态创建进度条
            const bar = document.createElement('div');
            bar.className = 'original-reading-progress';
            bar.innerHTML = '<div class="progress-fill"></div>';
            document.body.insertBefore(bar, document.body.firstChild.nextSibling);
        }

        const fill = document.querySelector('.original-reading-progress .progress-fill');
        if (!fill) return;

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            fill.style.width = Math.min(progress, 100) + '%';
        });
    }

    // ==========================================
    // 回到顶部按钮
    // ==========================================
    function initBackToTop() {
        const btn = document.createElement('button');
        btn.className = 'back-to-top-original';
        btn.innerHTML = '↑';
        btn.setAttribute('aria-label', '回到顶部');
        btn.setAttribute('title', '回到顶部');
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // 字号调节
    // ==========================================
    function initFontSizeControl() {
        const sizes = ['small', 'normal', 'large', 'xlarge'];
        const sizeLabels = ['小', '中', '大', '特大'];
        let currentIndex = 1; // 默认 normal

        // 从 localStorage 读取用户偏好
        const savedSize = localStorage.getItem('original-font-size');
        if (savedSize) {
            const idx = sizes.indexOf(savedSize);
            if (idx !== -1) currentIndex = idx;
        }

        // 创建控件
        const container = document.querySelector('.header-actions');
        if (!container) return;

        const controls = document.createElement('div');
        controls.className = 'font-size-controls';
        controls.innerHTML = `
            <button class="font-size-btn" id="font-decrease" aria-label="减小字号" title="减小字号">A-</button>
            <span class="font-size-label" id="font-size-label">${sizeLabels[currentIndex]}</span>
            <button class="font-size-btn" id="font-increase" aria-label="增大字号" title="增大字号">A+</button>
        `;

        // 插入到"返回学习版"按钮之前
        container.insertBefore(controls, container.firstChild);

        const label = controls.querySelector('#font-size-label');

        function applySize() {
            // 移除所有字号类
            sizes.forEach(s => document.body.classList.remove('font-size-' + s));
            // 应用当前字号
            document.body.classList.add('font-size-' + sizes[currentIndex]);
            label.textContent = sizeLabels[currentIndex];
            localStorage.setItem('original-font-size', sizes[currentIndex]);
        }

        applySize();

        controls.querySelector('#font-decrease').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                applySize();
            }
        });

        controls.querySelector('#font-increase').addEventListener('click', () => {
            if (currentIndex < sizes.length - 1) {
                currentIndex++;
                applySize();
            }
        });
    }

    // ==========================================
    // 滚动位置记忆
    // ==========================================
    function initScrollMemory() {
        // 获取当前页面标识
        const pageId = getPageId();

        // 恢复上次阅读位置
        const savedPos = localStorage.getItem('original-scroll-' + pageId);
        if (savedPos && parseInt(savedPos) > 100) {
            setTimeout(() => {
                window.scrollTo({ top: parseInt(savedPos), behavior: 'auto' });
            }, 200);
        }

        // 定期保存滚动位置
        let saveTimer = null;
        window.addEventListener('scroll', () => {
            if (saveTimer) clearTimeout(saveTimer);
            saveTimer = setTimeout(() => {
                localStorage.setItem('original-scroll-' + pageId, window.scrollY.toString());
            }, 3000);
        });

        window.addEventListener('beforeunload', () => {
            localStorage.setItem('original-scroll-' + pageId, window.scrollY.toString());
        });
    }

    // ==========================================
    // 获取页面标识
    // ==========================================
    function getPageId() {
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace('.html', '');
        return filename || 'unknown';
    }

    // ==========================================
    // Header 滚动阴影效果
    // ==========================================
    function initHeaderShadow() {
        const header = document.querySelector('.original-header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.style.boxShadow = '0 4px 12px rgba(44, 95, 45, 0.08)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    // ==========================================
    // 段落淡入动画
    // ==========================================
    function initSectionFadeIn() {
        const sections = document.querySelectorAll('.original-section');
        if (!sections.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        sections.forEach(sec => {
            sec.style.opacity = '0';
            sec.style.transform = 'translateY(15px)';
            sec.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(sec);
        });
    }

    // ==========================================
    // 初始化入口
    // ==========================================
    function init() {
        initReadingProgress();
        initBackToTop();
        initFontSizeControl();
        initScrollMemory();
        initHeaderShadow();
        initSectionFadeIn();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();