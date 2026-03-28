/* ============================================
   零起点学针灸 — 公共功能模块
   ============================================ */

// ==========================================
// 术语词典
// ==========================================
const GLOSSARY = {
    '经脉': '经脉是人体气血运行的主要通道，包括十二正经和奇经八脉。经脉内连脏腑，外络肢节，将人体构成一个有机整体。',
    '络脉': '络脉是经脉的分支，遍布全身，起到沟通表里、渗灌气血的作用。',
    '气血': '气和血是维持人体生命活动的基本物质。气主温煦推动，血主濡养滋润。',
    '正气': '正气是人体正常的生理功能和抵抗疾病的能力，类似现代医学所说的免疫力和自愈力。',
    '邪气': '邪气泛指一切致病因素，包括外感六淫（风、寒、暑、湿、燥、火）和内伤七情等。',
    '腧穴': '腧穴是人体脏腑经络气血输注于体表的特殊部位，也是针灸施术的具体位置，俗称"穴位"。',
    '补泻': '补泻是针灸的两种基本手法。"补"是增强正气的方法，"泻"是祛除邪气的方法。',
    '阴阳': '阴阳是中国古代哲学的核心概念，用来描述事物对立统一的两个方面。在中医中，阴阳理论贯穿生理、病理、诊断和治疗的各个方面。',
    '五行': '五行即木、火、土、金、水，是中国古代用来归纳自然界事物属性及其相互关系的哲学概念。中医用五行来阐释脏腑之间的关系。',
    '脏腑': '脏腑是中医对人体内脏的总称。脏有五（心、肝、脾、肺、肾），腑有六（小肠、胆、胃、大肠、膀胱、三焦）。',
    '三焦': '三焦是六腑之一，分为上焦、中焦、下焦，是气和水液运行的通道，也是中医独有的概念。',
    '卫气': '卫气是行于脉外的气，具有温养肌肤、防御外邪、控制汗孔开合等功能，类似于人体的免疫防御系统。',
    '营气': '营气是行于脉内的气，富有营养，与血液共同运行，滋养全身各组织器官。',
    '得气': '得气是指针刺穴位后，患者产生酸、麻、胀、重等感觉，表示针已激发了经气，是取得疗效的关键。',
    '形': '在本书中，"形"指人体有形的物质结构，如肌肉、骨骼、血液等实体部分。',
    '气': '在本书中，"气"指维持人体生命活动的无形动力，包括推动、温煦、防御、固摄等功能。',
    '六淫': '六淫指风、寒、暑、湿、燥、火六种外感致病因素，是自然界正常气候变化太过或不及时对人体的影响。',
    '寒热': '寒热是中医辨别疾病性质的基本纲领之一。寒证表现为怕冷、肢凉、喜温等；热证表现为发热、口渴、面红等。',
    '虚实': '虚实是判断人体正气强弱和邪气盛衰的纲领。虚证是正气不足，实证是邪气有余。',
    '表里': '表里是辨别病位深浅的纲领。表证病位在肌表经络，里证病位在脏腑。',
    '分形': '分形是指自然界中整体与局部在形态上的自相似性。在针灸中，这一原理体现为人体的某个局部可以反映整体的信息。',
    '应象': '应象是指事物之间通过"象"（外在表现）产生对应关系。中医通过取象类比来理解人体与自然的对应关系。',
    '调气': '调气是针灸治疗的核心目的，通过针刺等方法调整人体气的运行状态，使之恢复正常的升降出入。',
};

// ==========================================
// 学习进度管理
// ==========================================
const ProgressManager = {
    STORAGE_KEY: 'acupuncture_learning_progress',

    getAll() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            console.warn('读取进度失败:', e);
            return {};
        }
    },

    get(chapterId) {
        const all = this.getAll();
        return all[chapterId] || { completed: false, sections: {}, lastVisit: null, scrollPos: 0 };
    },

    save(chapterId, data) {
        try {
            const all = this.getAll();
            all[chapterId] = { ...this.get(chapterId), ...data, lastVisit: Date.now() };
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(all));
        } catch (e) {
            console.warn('保存进度失败:', e);
        }
    },

    markSectionRead(chapterId, sectionId) {
        const progress = this.get(chapterId);
        if (!progress.sections) progress.sections = {};
        progress.sections[sectionId] = true;
        this.save(chapterId, progress);
    },

    markCompleted(chapterId) {
        this.save(chapterId, { completed: true });
    },

    getOverallProgress() {
        const all = this.getAll();
        const totalChapters = 6; // 总章节数
        const completedChapters = Object.values(all).filter(c => c.completed).length;
        return Math.round((completedChapters / totalChapters) * 100);
    },

    saveScrollPosition(chapterId, pos) {
        this.save(chapterId, { scrollPos: pos });
    },

    getScrollPosition(chapterId) {
        return this.get(chapterId).scrollPos || 0;
    }
};

// ==========================================
// 安全声明弹窗
// ==========================================
const DisclaimerManager = {
    STORAGE_KEY: 'acupuncture_disclaimer_accepted',

    isAccepted() {
        return localStorage.getItem(this.STORAGE_KEY) === 'true';
    },

    accept() {
        localStorage.setItem(this.STORAGE_KEY, 'true');
    },

    show() {
        if (this.isAccepted()) return;

        const modal = document.getElementById('disclaimer-modal');
        if (!modal) return;

        modal.style.display = 'flex';
        modal.innerHTML = `
            <div class="modal-box animate-fade-in-up">
                <div class="modal-icon">⚕️</div>
                <h2>学习声明</h2>
                <p>欢迎使用《零起点学针灸》在线学习平台。在开始学习之前，请仔细阅读以下声明：</p>
                <p><strong style="color: var(--color-accent);">1. 本平台内容仅供学习参考</strong>，不构成任何医疗建议、诊断或治疗方案。</p>
                <p><strong style="color: var(--color-accent);">2. 针灸属于专业医疗行为</strong>，请勿未经专业培训擅自对他人施针。如有健康问题，请咨询有资质的医疗专业人员。</p>
                <p><strong style="color: var(--color-accent);">3. 内容版权</strong>归原书作者及出版方所有，本学习平台仅作非商业用途的学习整理。</p>
                <button class="modal-btn" id="accept-disclaimer">我已阅读并理解</button>
            </div>
        `;

        document.getElementById('accept-disclaimer').addEventListener('click', () => {
            this.accept();
            modal.style.display = 'none';
        });
    }
};

// ==========================================
// 导航栏渲染
// ==========================================
function renderHeader(activePage) {
    const header = document.getElementById('site-header');
    if (!header) return;

    const progress = ProgressManager.getOverallProgress();

    header.className = 'site-header';
    header.innerHTML = `
        <div class="header-inner">
            <a href="index.html" class="site-logo">
                <span class="logo-icon">🏮</span>
                <span>零起点学针灸</span>
            </a>
            <nav>
                <ul class="nav-links" id="nav-links">
                    <li><a href="index.html" class="${activePage === 'home' ? 'active' : ''}">首页</a></li>
                    <li><a href="chapter1.html" class="${activePage === 'chapter1' ? 'active' : ''}">针道·针理</a></li>
                    <li><a href="chapter2.html" class="${activePage === 'chapter2' ? 'active' : ''}">诊断篇</a></li>
                    <li><a href="chapter3.html" class="${activePage === 'chapter3' ? 'active' : ''}">选穴篇</a></li>
                    <li><a href="chapter4.html" class="${activePage === 'chapter4' ? 'active' : ''}">实操篇</a></li>
                    <li><a href="chapter5.html" class="${activePage === 'chapter5' ? 'active' : ''}">治疗篇</a></li>
                    <li><a href="chapter6.html" class="${activePage === 'chapter6' ? 'active' : ''}">深入探讨</a></li>
                    <li>
                        <div class="header-progress">
                            <div class="header-progress-bar">
                                <div class="header-progress-fill" style="width:${progress}%"></div>
                            </div>
                            <span>${progress}%</span>
                        </div>
                    </li>
                </ul>
            </nav>
            <button class="menu-toggle" id="menu-toggle" aria-label="菜单">
                <span></span><span></span><span></span>
            </button>
        </div>
    `;

    // 移动端菜单切换
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // 滚动时添加阴影
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        header.classList.toggle('scrolled', currentScroll > 10);
        lastScroll = currentScroll;
    });
}

// ==========================================
// 页脚渲染
// ==========================================
function renderFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="footer-inner">
            <div class="disclaimer">
                <strong>⚠️ 免责声明：</strong>本平台内容基于《零起点学针灸》（天下无疾 著）整理，仅供学习交流使用，不构成医疗建议。
                针灸属于专业医疗行为，请勿未经培训擅自施针。如有健康问题，请就医咨询。
            </div>
            <div class="footer-links">
                <a href="index.html">首页</a>
                <a href="chapter1.html">开始学习</a>
                <a href="chapter6.html">深入探讨</a>
            </div>
            <p>基于《零起点学针灸》（天下无疾 著，人民卫生出版社）整理</p>
            <p style="margin-top:var(--spacing-sm);opacity:0.6;">© 学习内容版权归原作者所有 · 本站仅作非商业学习用途</p>
        </div>
    `;
}

// ==========================================
// 术语悬浮卡片
// ==========================================
function initTermTooltips() {
    const tooltip = document.getElementById('term-tooltip');
    if (!tooltip) return;

    document.addEventListener('mouseover', (e) => {
        const term = e.target.closest('.term');
        if (!term) return;

        const termText = term.dataset.term || term.textContent.trim();
        const definition = GLOSSARY[termText];
        if (!definition) return;

        tooltip.innerHTML = `
            <div class="tooltip-title">${termText}</div>
            <div class="tooltip-body">${definition}</div>
        `;
        tooltip.style.display = 'block';

        const rect = term.getBoundingClientRect();
        let top = rect.bottom + 8;
        let left = rect.left;

        // 防止超出视窗
        if (top + tooltip.offsetHeight > window.innerHeight) {
            top = rect.top - tooltip.offsetHeight - 8;
        }
        if (left + tooltip.offsetWidth > window.innerWidth) {
            left = window.innerWidth - tooltip.offsetWidth - 16;
        }

        tooltip.style.top = top + 'px';
        tooltip.style.left = Math.max(8, left) + 'px';
    });

    document.addEventListener('mouseout', (e) => {
        const term = e.target.closest('.term');
        if (term) {
            tooltip.style.display = 'none';
        }
    });

    // 移动端点击
    document.addEventListener('click', (e) => {
        const term = e.target.closest('.term');
        if (term) {
            e.preventDefault();
            const isVisible = tooltip.style.display === 'block';
            if (isVisible) {
                tooltip.style.display = 'none';
            } else {
                const termText = term.dataset.term || term.textContent.trim();
                const definition = GLOSSARY[termText];
                if (!definition) return;
                tooltip.innerHTML = `
                    <div class="tooltip-title">${termText}</div>
                    <div class="tooltip-body">${definition}</div>
                `;
                tooltip.style.display = 'block';
                const rect = term.getBoundingClientRect();
                tooltip.style.top = (rect.bottom + 8) + 'px';
                tooltip.style.left = Math.max(8, rect.left) + 'px';
            }
        } else if (!e.target.closest('.term-tooltip')) {
            tooltip.style.display = 'none';
        }
    });
}

// ==========================================
// 内容区段滚动动画
// ==========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });
}

// ==========================================
// 折叠展开
// ==========================================
function initExpandBlocks() {
    document.addEventListener('click', (e) => {
        const header = e.target.closest('.expand-header');
        if (!header) return;

        const block = header.closest('.expand-block');
        if (block) {
            block.classList.toggle('open');
        }
    });
}

// ==========================================
// 小测验
// ==========================================
function initQuiz(quizId, correctIndex, feedbackCorrect, feedbackWrong) {
    const quiz = document.getElementById(quizId);
    if (!quiz) return;

    const options = quiz.querySelectorAll('.quiz-option');
    const feedback = quiz.querySelector('.quiz-feedback');
    let answered = false;

    options.forEach((option, index) => {
        option.addEventListener('click', () => {
            if (answered) return;
            answered = true;

            if (index === correctIndex) {
                option.classList.add('correct');
                feedback.textContent = feedbackCorrect;
                feedback.className = 'quiz-feedback show correct';
            } else {
                option.classList.add('wrong');
                options[correctIndex].classList.add('correct');
                feedback.textContent = feedbackWrong;
                feedback.className = 'quiz-feedback show wrong';
            }
        });
    });
}

// ==========================================
// 阅读进度条
// ==========================================
function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;

    progressBar.className = 'reading-progress-bar';
    progressBar.innerHTML = '<div class="reading-progress-fill" id="reading-progress-fill"></div>';

    const fill = document.getElementById('reading-progress-fill');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        fill.style.width = Math.min(100, scrollPercent) + '%';
    });
}

// ==========================================
// 回到顶部按钮
// ==========================================
function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'back-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', '回到顶部');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==========================================
// 标记术语（将文本中的术语包裹为可交互元素）
// ==========================================
function wrapTerms(html) {
    let result = html;
    // 按术语长度降序排列，避免短术语先替换导致长术语被破坏
    const sortedTerms = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

    sortedTerms.forEach(term => {
        // 仅替换未被HTML标签包裹的文本中的首次出现
        const regex = new RegExp(`(?<![">])(?<!data-term=")${escapeRegex(term)}(?![^<]*>)`, '');
        if (regex.test(result)) {
            result = result.replace(regex, `<span class="term" data-term="${term}">${term}</span>`);
        }
    });

    return result;
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ==========================================
// 工具函数
// ==========================================
function createElement(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
}

// ==========================================
// 公共初始化
// ==========================================
function initCommon(activePage) {
    renderHeader(activePage);
    renderFooter();
    initTermTooltips();
    initScrollAnimations();
    initExpandBlocks();
    initBackToTop();
    DisclaimerManager.show();
}