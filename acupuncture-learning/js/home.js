/* ============================================
   零起点学针灸 — 首页
   ============================================ */

(function () {
    'use strict';

    // ==========================================
    // 章节数据
    // ==========================================
    const chapters = [
        {
            id: 'chapter1',
            number: '壹',
            title: '认识针灸',
            subtitle: '针道 · 针理',
            desc: '从哲学之道到科学原理，理解针灸为什么能治病。经脉原理、分形原理、应象原理与调气——构建针灸认知的坚实根基。',
            tags: ['入门基础', '核心理论'],
            url: 'chapter1.html',
            sections: 5
        },
        {
            id: 'chapter2',
            number: '贰',
            title: '诊断之法',
            subtitle: '诊法 · 断法',
            desc: '学习脉诊、按诊等针灸诊断方法，掌握如何判断病位、病性，为选经选穴奠定基础。',
            tags: ['诊断', '辨证'],
            url: 'chapter2.html',
            sections: 4
        },
        {
            id: 'chapter3',
            number: '叁',
            title: '选穴之道',
            subtitle: '选经 · 选穴 · 配穴',
            desc: '十二经脉如何选择？穴位怎样确定？配穴的逻辑与方法——从理论到实践的关键一步。',
            tags: ['选经', '配穴'],
            url: 'chapter3.html',
            sections: 4
        },
        {
            id: 'chapter4',
            number: '肆',
            title: '实操入门',
            subtitle: '取穴 · 手法',
            desc: '精确定位穴位的方法，练针技巧，补泻手法详解——动手实践，从纸上到指尖。',
            tags: ['取穴', '手法'],
            url: 'chapter4.html',
            sections: 4
        },
        {
            id: 'chapter5',
            number: '伍',
            title: '治疗应用',
            subtitle: '治法 · 医案',
            desc: '常见病症的针灸治疗方案，经典医案分析，融会贯通所学知识，走向临床应用。',
            tags: ['治法', '医案'],
            url: 'chapter5.html',
            sections: 3
        },
        {
            id: 'chapter6',
            number: '陆',
            title: '深入探讨',
            subtitle: '杂谈 · 附文',
            desc: '经络到底是什么？腧穴到底是什么？自学针灸的路径建议——思想的深化与视野的拓展。',
            tags: ['进阶', '思考'],
            url: 'chapter6.html',
            sections: 3
        }
    ];

    // ==========================================
    // 渲染首页
    // ==========================================
    function renderHomePage() {
        const app = document.getElementById('app');
        if (!app) return;

        app.innerHTML = `
            <!-- Hero Section -->
            <section class="hero" id="hero">
                <div class="floating-element" aria-hidden="true">☯</div>
                <div class="floating-element" aria-hidden="true">🌿</div>
                <div class="floating-element" aria-hidden="true">✧</div>
                <div class="hero-content">
                    <p class="hero-subtitle animate-fade-in-up">—— 天下无疾 著 ——</p>
                    <h1 class="hero-title animate-fade-in-up delay-1">
                        零起点学<span class="accent">针灸</span>
                    </h1>
                    <p class="hero-desc animate-fade-in-up delay-2">
                        以清新的文笔、严谨的态度，带你走进针灸的世界。<br>
                        从"道"到"术"，从"理"到"法"，<br>
                        为零基础爱好者量身打造的针灸学习之旅。
                    </p>
                    <a href="chapter1.html" class="hero-cta animate-fade-in-up delay-3">
                        开始学习 →
                    </a>
                </div>
            </section>

            <!-- 本书简介 -->
            <section class="section" id="about">
                <div class="section-title">
                    <h2>关于本书</h2>
                    <p>一本让针灸不再神秘的入门之书</p>
                </div>
                <div class="about-content" style="max-width:720px;margin:0 auto;">
                    <p>《零起点学针灸》由<strong>天下无疾</strong>（笔名）所著，人民卫生出版社出版。本书跳出了传统针灸教材"先讲经络穴位、再讲刺法"的模式，而是从<span class="term" data-term="气">针灸之"道"</span>讲起，层层深入，引领读者一步步领略针灸的次第。</p>

                    <div class="key-point">
                        <div class="key-title">本书的独特之处</div>
                        <p>全书以"<strong>道→理→诊→断→选经→选穴→配穴→取穴→手法→治法</strong>"为主线，如同拾级而上。每一个环节都是下一个环节的基础，环环相扣，让学习者真正理解"<em>为什么这样做</em>"，而非仅仅知道"该怎么做"。</p>
                    </div>

                    <blockquote>
                        "作者把针灸学科的每个层面都吃透了、融通了，再将之打碎、揉成一团，然后细细展开，一一呈现。"
                        <br><span style="font-size:0.85rem;color:var(--color-text-muted);">—— 本书序言</span>
                    </blockquote>

                    <div class="annotation">
                        <div class="annotation-label">📖 给零基础读者的话</div>
                        <p>如果你是完全没有中医基础的爱好者，不必担心。本书和本学习网页都会对专业术语进行解释。当你看到<span class="term" data-term="经脉">带下划虚线的绿色文字</span>时，将鼠标悬停其上（移动端点击），即可查看简明释义。</p>
                    </div>
                </div>
            </section>

            <!-- 学习路径 -->
            <section class="section section-wide" id="chapters">
                <div class="section-title">
                    <h2>学习路径</h2>
                    <p>按序学习，逐步进阶——点击章节卡片进入学习</p>
                </div>
                <div class="chapter-grid" id="chapter-grid"></div>
            </section>

            <!-- 学习建议 -->
            <section class="section" id="tips">
                <div class="section-title">
                    <h2>学习建议</h2>
                    <p>来自作者和编者的学习忠告</p>
                </div>
                <div style="max-width:720px;margin:0 auto;">
                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📐 按顺序学习，不要跳章</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>本书的章节安排有严密的逻辑关系。"针道"是根基，"针理"是框架，之后的诊法、选穴、手法等都是在此基础上的展开。如果跳过前面直接学手法，就像不打地基直接砌墙，看似快，实则不稳。</p>
                        </div>
                    </div>
                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🧘 理解重于记忆</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>针灸不是死记穴位和手法就能学会的。重要的是理解每一个操作背后的"<em>为什么</em>"。理解了原理，遇到新情况也能灵活应对。正如书中所说，学的是"渔"，不是"鱼"。</p>
                        </div>
                    </div>
                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">⚠️ 安全第一</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>学习针灸知识是一件美好的事，但请务必记住：<strong style="color:var(--color-accent);">针灸是专业医疗行为</strong>。没有经过系统培训和取得合法资质之前，切勿擅自对他人施针。自学可以增长见识、促进健康认知，但临床实操务必在专业指导下进行。</p>
                        </div>
                    </div>
                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📚 推荐延伸阅读</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>如果你是零基础读者，建议先阅读同一作者的《零起点学中医》，建立基本的中医概念后再来学习本书，效果会更好。此外，《黄帝内经》（尤其是《灵枢》）是针灸的经典源头，在学习过程中可以对照参阅。</p>
                        </div>
                    </div>
                </div>
            </section>
        `;

        renderChapterCards();
    }

    // ==========================================
    // 渲染章节卡片
    // ==========================================
    function renderChapterCards() {
        const grid = document.getElementById('chapter-grid');
        if (!grid) return;

        chapters.forEach((ch, index) => {
            const progress = ProgressManager.get(ch.id);
            const readSections = progress.sections ? Object.keys(progress.sections).length : 0;
            const progressPercent = ch.sections > 0 ? Math.round((readSections / ch.sections) * 100) : 0;
            const isCompleted = progress.completed;

            const card = document.createElement('div');
            card.className = `chapter-card${isCompleted ? ' completed' : ''} content-section`;
            card.style.animationDelay = `${index * 0.1}s`;
            card.innerHTML = `
                <div class="card-check">✓</div>
                <div class="card-number">${ch.number}</div>
                <h3 class="card-title">${ch.title}</h3>
                <p class="card-desc">${ch.desc}</p>
                <div class="card-meta">
                    <div>
                        ${ch.tags.map(t => `<span class="card-tag">${t}</span>`).join(' ')}
                    </div>
                    <div class="card-progress">
                        <div class="card-progress-bar">
                            <div class="card-progress-fill" style="width:${progressPercent}%"></div>
                        </div>
                        <span>${progressPercent}%</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                window.location.href = ch.url;
            });

            grid.appendChild(card);
        });
    }

    // ==========================================
    // 初始化
    // ==========================================
    function init() {
        renderHomePage();
        initCommon('home');
    }

    // DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();