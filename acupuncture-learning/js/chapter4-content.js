/* ============================================
   零起点学针灸 — 第四篇：实操入门（内容数据）
   涵盖：取穴法、针具、刺法、补泻手法、灸法
   ============================================ */

const Chapter4Data = {

    // ==========================================
    // 章节元信息
    // ==========================================
    META: {
        id: 'chapter4',
        number: '肆',
        title: '实操入门',
        subtitle: '取穴 · 刺法 · 手法',
        prevChapter: { url: 'chapter3.html', title: '第三篇：选穴之道' },
        nextChapter: { url: 'chapter5.html', title: '第五篇：临证治疗' },
        totalSections: 14
    },

    // ==========================================
    // 侧边栏目录
    // ==========================================
    SIDEBAR_NAV: [
        { id: 'sec-intro', label: '引言', level: 1 },
        { id: 'sec-4-1', label: '一、取穴', level: 1 },
        { id: 'sec-4-1-1', label: '1. 骨度分寸法', level: 2 },
        { id: 'sec-4-1-2', label: '2. 体表标志法', level: 2 },
        { id: 'sec-4-1-3', label: '3. 手指比量法', level: 2 },
        { id: 'sec-4-1-4', label: '4. 简便取穴法', level: 2 },
        { id: 'sec-4-2', label: '二、针具', level: 1 },
        { id: 'sec-4-2-1', label: '1. 毫针', level: 2 },
        { id: 'sec-4-2-2', label: '2. 针具选用', level: 2 },
        { id: 'sec-4-3', label: '三、刺法', level: 1 },
        { id: 'sec-4-3-1', label: '1. 进针法', level: 2 },
        { id: 'sec-4-3-2', label: '2. 针刺深度与方向', level: 2 },
        { id: 'sec-4-3-3', label: '3. 得气', level: 2 },
        { id: 'sec-4-3-4', label: '4. 留针与出针', level: 2 },
        { id: 'sec-4-4', label: '四、补泻手法', level: 1 },
        { id: 'sec-4-4-1', label: '1. 补泻的含义', level: 2 },
        { id: 'sec-4-4-2', label: '2. 基本补泻法', level: 2 },
        { id: 'sec-4-4-3', label: '3. 呼吸补泻与迎随补泻', level: 2 },
        { id: 'sec-4-5', label: '五、灸法', level: 1 },
        { id: 'sec-4-5-1', label: '1. 灸法原理', level: 2 },
        { id: 'sec-4-5-2', label: '2. 艾灸方法', level: 2 },
        { id: 'sec-4-5-3', label: '3. 灸法注意事项', level: 2 },
        { id: 'sec-4-6', label: '六、安全须知', level: 1 },
        { id: 'sec-quiz', label: '📝 章节测验', level: 1 },
    ],

    // ==========================================
    // 测验数据
    // ==========================================
    QUIZZES: [
        {
            id: 'quiz-4-1',
            correctIndex: 1,
            feedbackCorrect: '✅ 正确！"得气"是指针刺入穴位后，患者感到酸、麻、胀、重等特殊感觉，医者手下也能感到针体沉紧。得气是针刺起效的关键标志——《灵枢》说"刺之要，气至而有效"。',
            feedbackWrong: '❌ "得气"不是指患者感到剧痛或没有任何感觉。正确的得气感是酸、麻、胀、重，像是一种"可以承受的特殊感觉"。如果只有锐利的刺痛，通常说明针刺位置不准确。'
        },
        {
            id: 'quiz-4-2',
            correctIndex: 2,
            feedbackCorrect: '✅ 正确！补法的核心是"顺其气而助之"——动作轻柔、缓慢，顺着经脉气血的流向，目的是扶助正气。泻法则相反，"逆其气而夺之"——动作较重、较快，目的是驱散邪气。',
            feedbackWrong: '❌ 补泻不是简单地"轻就是补、重就是泻"，也不是"扎得深就是泻"。补泻手法涉及捻转方向、提插轻重、呼吸配合、进出针速度等多个维度。核心区别在于"顺气为补、逆气为泻"。'
        },
        {
            id: 'quiz-4-3',
            correctIndex: 0,
            feedbackCorrect: '✅ 正确！灸法的核心作用是"温通"——通过艾叶燃烧的温热之力，温经散寒、扶助阳气、活血通络。因此灸法特别适用于虚寒证（阳气不足、怕冷、疼痛遇寒加重等），而热证一般不宜灸。',
            feedbackWrong: '❌ 灸法不适用于所有情况。它的核心是"温通"，主要针对虚寒类证候。对于实热证（高热、红肿热痛），灸法不仅无效，反而可能加重病情。'
        }
    ],

    // ==========================================
    // 章节内容 HTML
    // ==========================================
    getContent() {
        return `
        <div class="chapter-page">
            <div class="chapter-content">

                <!-- 章节头部 -->
                <div class="chapter-header">
                    <div class="chapter-label">第四篇</div>
                    <h1>实操入门：取穴·刺法·手法</h1>
                    <p class="chapter-intro">
                        前三篇我们完成了从"理论"到"处方"的全过程：明白了原理（第一篇），学会了诊断（第二篇），掌握了选穴配穴（第三篇）。现在，处方已经开好——我们知道要扎哪些穴位。<br><br>
                        但一个关键的问题摆在眼前：<strong>怎么找到这些穴位？怎么把针扎进去？扎进去之后怎么操作？</strong><br><br>
                        这就是本篇的核心内容——针灸的"手艺活"。
                    </p>
                </div>

                <!-- ====== 引言 ====== -->
                <div class="content-section" id="sec-intro">
                    <h2>引言：从纸面到指尖</h2>
                    <p>针灸不同于开药方——药方写在纸上交给药房就行了，针灸却要亲自动手。从"知道扎哪里"到"真正扎准、扎好"，中间隔着大量的实操训练。</p>
                    <p>本篇将按照实际操作的顺序，依次讲解：</p>
                    <div class="key-point">
                        <div class="key-title">实操四步走</div>
                        <p><strong>第一步：取穴</strong> — 在人体上精确定位穴位（找到"哪个点"）</p>
                        <p><strong>第二步：进针</strong> — 将针安全、无痛地刺入穴位（"怎么进去"）</p>
                        <p><strong>第三步：行针</strong> — 运用补泻手法达到治疗目的（"进去之后做什么"）</p>
                        <p><strong>第四步：出针</strong> — 安全地拔出针并做后续处理（"怎么出来"）</p>
                    </div>
                    <p>此外，我们还会介绍<strong>灸法</strong>——另一种不用针的治疗手段，以及必须牢记的<strong>安全须知</strong>。</p>
                </div>

                <!-- ====== 一、取穴 ====== -->
                <div class="content-section" id="sec-4-1">
                    <h2>一、取穴</h2>
                    <p>"取穴"是针灸操作的第一步。穴位不像身体上的痣或疤痕那样肉眼可见，它们是"功能性的点"。如何在活生生的人体上精确地找到它们？古人发明了多种方法。</p>
                </div>

                <!-- 1. 骨度分寸法 -->
                <div class="content-section" id="sec-4-1-1">
                    <h3>1. 骨度分寸法</h3>
                    <p>这是最基本、最重要的取穴方法。它以人体的骨骼标志为基准，将身体各部位划分成固定的等分，以此来确定穴位的位置。</p>

                    <div class="key-point">
                        <div class="key-title">什么是"骨度分寸"？</div>
                        <p>简单来说，就是把人体不同部位的两个骨骼标志之间的距离，规定为一个固定的"寸"数。不论高矮胖瘦，每个人自身的这些比例关系是恒定的。</p>
                        <p>例如：从肘横纹到腕横纹 = <strong>12寸</strong>。一个身高1.6米的女性和一个身高1.85米的男性，各自的"12寸"长度不同，但穴位在"第几寸"的比例位置是相同的。</p>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📏 常用骨度分寸（上肢）</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <ul>
                                <li><strong>腋前纹头 → 肘横纹</strong>：9寸</li>
                                <li><strong>肘横纹 → 腕横纹</strong>：12寸</li>
                            </ul>
                            <p>上肢取穴时，"12寸"最常用。例如"内关穴"在腕横纹上2寸，就是从腕横纹向肘方向量取12等分中的2等分处。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📏 常用骨度分寸（下肢）</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <ul>
                                <li><strong>耻骨联合上缘 → 股骨内上髁上缘</strong>（大腿内侧）：18寸</li>
                                <li><strong>股骨大转子 → 膝中</strong>（大腿外侧）：19寸</li>
                                <li><strong>膝中（犊鼻）→ 内踝尖</strong>（小腿内侧）：13寸</li>
                                <li><strong>膝中（犊鼻）→ 外踝尖</strong>（小腿外侧）：16寸</li>
                            </ul>
                            <p>下肢取穴最常用的是"膝下至内踝13寸"。例如"足三里"在犊鼻（膝眼）下3寸，"三阴交"在内踝尖上3寸。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📏 常用骨度分寸（头面·躯干）</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <ul>
                                <li><strong>前发际 → 后发际</strong>（头部正中线）：12寸</li>
                                <li><strong>两乳头之间</strong>：8寸（用于确定胸部穴位的横向距离）</li>
                                <li><strong>胸骨上窝（天突）→ 胸剑联合（歧骨）</strong>：9寸</li>
                                <li><strong>胸剑联合 → 脐中</strong>：8寸</li>
                                <li><strong>脐中 → 耻骨联合上缘</strong>：5寸</li>
                            </ul>
                            <p>腹部取穴时，"脐上8寸、脐下5寸"用得最多。例如"中脘穴"在脐上4寸（即脐与胸剑联合的中点），"关元穴"在脐下3寸。</p>
                        </div>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">💡 学习建议</div>
                        <p>骨度分寸法初看数据繁多，但实际临床中常用的只有几组。建议先牢记以下四组：<strong>①前臂12寸 ②小腿内侧13寸 ③脐上8寸/脐下5寸 ④前发际到后发际12寸</strong>。掌握这四组，就能定位临床80%以上的常用穴位。</p>
                    </div>
                </div>

                <!-- 2. 体表标志法 -->
                <div class="content-section" id="sec-4-1-2">
                    <h3>2. 体表标志法</h3>
                    <p>利用人体表面的固有标志——如骨突、肌腱、皱纹、指甲等——来确定穴位位置。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">固定标志取穴</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>利用体表不随动作改变的标志来取穴：</p>
                            <ul>
                                <li><strong>两眉之间</strong> → 印堂穴</li>
                                <li><strong>肚脐正中</strong> → 神阙穴</li>
                                <li><strong>两乳头中间</strong> → 膻中穴</li>
                                <li><strong>第七颈椎棘突下</strong>（低头时颈后最高的骨突下方）→ 大椎穴</li>
                                <li><strong>内踝尖与跟腱之间的凹陷</strong> → 太溪穴</li>
                            </ul>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">活动标志取穴</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>利用身体活动时出现的标志来取穴：</p>
                            <ul>
                                <li><strong>张口时耳屏前方出现的凹陷</strong> → 听宫穴</li>
                                <li><strong>握拳时掌心第2、3掌骨之间按着最痛处</strong> → 劳宫穴</li>
                                <li><strong>屈肘时肘横纹外侧端</strong> → 曲池穴</li>
                                <li><strong>合拢拇指食指时，手背肌肉隆起的最高点</strong> → 合谷穴</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 3. 手指比量法 -->
                <div class="content-section" id="sec-4-1-3">
                    <h3>3. 手指比量法（手指同身寸）</h3>
                    <p>利用患者自己的手指作为量取穴位的尺度。这种方法简便快捷，适合快速定位。</p>

                    <div class="key-point">
                        <div class="key-title">三种手指量法</div>
                        <p><strong>中指同身寸</strong>：中指弯曲时，中节桡侧两端纹头（横纹两端）之间的距离 = <strong>1寸</strong>。</p>
                        <p><strong>拇指同身寸</strong>：拇指指间关节的横度 = <strong>1寸</strong>。</p>
                        <p><strong>横指同身寸（一夫法）</strong>：食指、中指、无名指、小指四指并拢，以中指近端指间关节横纹为准，四指的横度 = <strong>3寸</strong>。</p>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">⚠️ 注意</div>
                        <p>手指比量法必须用<strong>患者自己的手指</strong>来量。不同人的手指宽度不同，所量出的"寸"也不同。这正好对应了骨度分寸法的个体化原则——每个人有自己的"尺"。</p>
                    </div>
                </div>

                <!-- 4. 简便取穴法 -->
                <div class="content-section" id="sec-4-1-4">
                    <h3>4. 简便取穴法</h3>
                    <p>除了以上标准方法，古人还总结了一些简便快速的取穴技巧：</p>
                    <ul>
                        <li><strong>百会穴</strong>：两耳尖连线的中点（折耳取尖法）</li>
                        <li><strong>风市穴</strong>：直立垂手，中指尖所触之处（大腿外侧）</li>
                        <li><strong>列缺穴</strong>：两手虎口交叉，食指尖所到之处（在桡骨茎突上方）</li>
                        <li><strong>劳宫穴</strong>：握拳，中指尖所按之处</li>
                    </ul>
                    <p>这些方法虽然不如骨度分寸法精确，但在快速定位和自我保健时非常实用。</p>
                </div>

                <!-- ====== 二、针具 ====== -->
                <div class="content-section" id="sec-4-2">
                    <h2>二、针具</h2>
                    <p>古代有"九针"之说，现代临床最常用的是<strong>毫针</strong>。了解针具的基本知识，是安全操作的前提。</p>
                </div>

                <!-- 1. 毫针 -->
                <div class="content-section" id="sec-4-2-1">
                    <h3>1. 毫针</h3>
                    <p>毫针是当今针灸临床使用最广泛的针具。它由以下几个部分构成：</p>

                    <div class="key-point">
                        <div class="key-title">毫针的结构（从上到下）</div>
                        <p><strong>针尾</strong>：针的末端，有的有环状或绕丝装饰。</p>
                        <p><strong>针柄</strong>：医者持针的部位，多以铜丝缠绕，便于持握和运针操作。</p>
                        <p><strong>针根</strong>：针柄与针身的连接处。</p>
                        <p><strong>针身</strong>：插入人体的主要部分，由不锈钢制成，有弹性。</p>
                        <p><strong>针尖</strong>：针的最前端，形状呈"松针形"（不是缝衣针那种尖锐的锥形，而是微微圆钝，利于刺入时减少疼痛）。</p>
                    </div>
                </div>

                <!-- 2. 针具选用 -->
                <div class="content-section" id="sec-4-2-2">
                    <h3>2. 针具选用</h3>
                    <p>毫针有不同的<strong>长度</strong>和<strong>粗细</strong>规格，需要根据穴位部位、患者体型和治疗需要来选择。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📐 常用规格</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>长度</strong>（常用）：</p>
                            <ul>
                                <li>0.5寸（约15mm）— 面部、耳部等浅表穴位</li>
                                <li>1寸（约25mm）— 四肢远端穴位（手指、脚趾附近）</li>
                                <li>1.5寸（约40mm）— 最常用规格，适合四肢大部分穴位</li>
                                <li>2寸（约50mm）— 肌肉丰厚部位（臀部、大腿）</li>
                                <li>3寸（约75mm）— 特殊深刺穴位（如环跳穴）</li>
                            </ul>
                            <p><strong>粗细</strong>（常用直径）：</p>
                            <ul>
                                <li>0.25mm — 面部、敏感部位</li>
                                <li>0.30mm — 最常用</li>
                                <li>0.35mm — 肌肉丰厚、需要较强针感的部位</li>
                            </ul>
                        </div>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">📖 实用原则</div>
                        <p>初学者可以记住一个简单原则：<strong>肌肉薄的地方用短细针，肌肉厚的地方用长粗针</strong>。如果拿不准，1.5寸/0.30mm是最通用的"万金油"规格。现代临床使用一次性无菌针具，用后即弃，避免交叉感染。</p>
                    </div>
                </div>

                <!-- ====== 三、刺法 ====== -->
                <div class="content-section" id="sec-4-3">
                    <h2>三、刺法</h2>
                    <p>选好穴、备好针，接下来就是最关键的操作——如何将针刺入人体并达到治疗效果。</p>
                </div>

                <!-- 1. 进针法 -->
                <div class="content-section" id="sec-4-3-1">
                    <h3>1. 进针法</h3>
                    <p>进针是整个针刺操作中患者最紧张的环节。好的进针技术可以做到<strong>几乎无痛</strong>。关键在于两点：速度要快，力道要巧。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🖐️ 指切进针法（最常用）</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>用一只手（押手）的拇指或食指端，按压在穴位旁边，另一只手（刺手）持针，紧贴押手指甲缘快速刺入。</p>
                            <p><strong>要点</strong>：</p>
                            <ul>
                                <li>押手按压可以分散患者的注意力，减轻痛感</li>
                                <li>刺手持针要稳，刺入动作要快而果断</li>
                                <li>先快速刺破皮肤（这一步最痛），然后缓缓送针至目标深度</li>
                            </ul>
                            <p><em>适用于：短针（1-1.5寸），大多数穴位。</em></p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🖐️ 夹持进针法</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>用押手拇、食二指隔着消毒棉球夹持针身下端，刺手持针柄，双手配合将针刺入。</p>
                            <p><strong>适用于</strong>：长针（2-3寸以上），需要深刺的穴位。长针较软，单手不易控制方向，需要双手配合。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🖐️ 舒张进针法</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>用押手拇、食二指将穴位处的皮肤向两侧绷紧，刺手持针从两指之间刺入。</p>
                            <p><strong>适用于</strong>：皮肤松弛部位（如腹部、面部），绷紧皮肤有助于进针和减轻疼痛。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🖐️ 提捏进针法</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>用押手拇、食二指将穴位处的皮肤捏起，刺手持针从捏起的皮肤顶端刺入。</p>
                            <p><strong>适用于</strong>：皮肉浅薄部位（如头面部、手背），捏起皮肤可以增加进针的安全距离，避免刺入过深伤及深部组织。</p>
                        </div>
                    </div>
                </div>

                <!-- 2. 针刺深度与方向 -->
                <div class="content-section" id="sec-4-3-2">
                    <h3>2. 针刺深度与方向</h3>
                    <p>针刺的深度和方向要根据穴位所在部位、患者体型和疾病性质来决定。</p>

                    <div class="key-point">
                        <div class="key-title">针刺方向三种</div>
                        <p><strong>直刺</strong>：针体与皮肤呈90°垂直刺入。适用于大多数穴位，尤其是肌肉丰厚处。</p>
                        <p><strong>斜刺</strong>：针体与皮肤呈45°角倾斜刺入。适用于肌肉较薄处，或者不宜深刺的穴位（如胸背部靠近脏器处）。</p>
                        <p><strong>平刺（横刺）</strong>：针体与皮肤呈15°角近乎平行地沿皮刺入。适用于皮肉极薄处（如头部、面部穴位）。</p>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">⚠️ 安全要则</div>
                        <p>针刺深度的首要原则是<strong>安全</strong>。以下部位必须特别注意：</p>
                        <ul>
                            <li><strong>胸背部</strong>：下方有肺脏，刺入过深可能导致气胸。此区域穴位多用斜刺或平刺，深度一般不超过0.5-0.8寸。</li>
                            <li><strong>项部（后颈）</strong>：深层是延髓，绝对不可深刺。</li>
                            <li><strong>眼周</strong>：下方有眼球，进针须缓慢，不可捻转提插。</li>
                            <li><strong>腹部</strong>：膀胱充盈时或孕妇，避免深刺下腹部穴位。</li>
                        </ul>
                    </div>
                </div>

                <!-- 3. 得气 -->
                <div class="content-section" id="sec-4-3-3">
                    <h3>3. 得气</h3>
                    <p>"得气"是针灸治疗中一个极为重要的概念。《灵枢》明确指出：<strong>"刺之要，气至而有效。"</strong>意思是：针刺起效的关键，在于"气至"——也就是得气。</p>

                    <div class="key-point">
                        <div class="key-title">什么是"得气"？</div>
                        <p><strong>患者的感觉</strong>：针刺入穴位后，患者感到一种<em>酸、麻、胀、重</em>的特殊感觉，有时像触电般传导到远处。这种感觉不是尖锐的疼痛，而是一种"可以承受的、有深度的感觉"。</p>
                        <p><strong>医者的感觉</strong>：医者持针的手感到针下<em>沉紧</em>，像鱼儿咬钩一样，针体被吸住的感觉。古人形容为"如鱼吞钩"。如果没有得气，针下感觉松滑空虚。</p>
                    </div>

                    <p>如果进针后没有立即得气，可以用以下方法催气：</p>
                    <ul>
                        <li><strong>小幅度捻转</strong>：轻轻捻转针体，刺激经气</li>
                        <li><strong>提插</strong>：上下小幅度提插针体</li>
                        <li><strong>弹柄</strong>：轻弹针柄，使针体振动</li>
                        <li><strong>候气</strong>：留针等待，有时气机需要时间才能到达</li>
                    </ul>

                    <div class="annotation">
                        <div class="annotation-label">📖 深层理解</div>
                        <p>回顾第一篇讲过的"调气原理"——针灸的本质是通过<span class="term" data-term="针">针</span>来调节人体的<span class="term" data-term="气">气</span>。"得气"就是这个过程中，气开始响应的标志。没有得气的针刺，就像打电话对方没接——信号发出去了，但没有建立连接。</p>
                    </div>
                </div>

                <!-- 4. 留针与出针 -->
                <div class="content-section" id="sec-4-3-4">
                    <h3>4. 留针与出针</h3>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">⏱️ 留针</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>得气后，通常需要留针一段时间，让针持续发挥调气的作用。</p>
                            <p><strong>留针时间</strong>：一般为 <strong>15-30分钟</strong>。具体时间根据病情和治疗目的调整：</p>
                            <ul>
                                <li>急性病、实证：留针时间相对较短（10-15分钟）</li>
                                <li>慢性病、虚证：留针时间相对较长（20-30分钟）</li>
                                <li>某些特殊情况（如顽固性疼痛）：可留针45分钟甚至更长</li>
                            </ul>
                            <p>留针期间，可以每隔一定时间行针一次（捻转或提插），以维持得气状态。这叫做"间歇行针"。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🔙 出针</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>出针的基本步骤：</p>
                            <ol>
                                <li>轻轻捻转针体，使针松动（如果针下紧涩不易拔出）</li>
                                <li>缓慢将针提至皮下</li>
                                <li>快速拔出针体</li>
                                <li>用消毒干棉球按压针孔片刻</li>
                            </ol>
                            <p><strong>补法出针</strong>：出针后迅速按压针孔，不让"气"外泄（闭门留气）。</p>
                            <p><strong>泻法出针</strong>：出针后不按压针孔，甚至摇大针孔，让邪气随之排出（开门逐邪）。</p>
                        </div>
                    </div>
                </div>

                <!-- ====== 四、补泻手法 ====== -->
                <div class="content-section" id="sec-4-4">
                    <h2>四、补泻手法</h2>
                    <p>补泻是针灸操作的灵魂。同一个穴位，用补法和用泻法，效果可能截然不同。</p>
                </div>

                <!-- 1. 补泻的含义 -->
                <div class="content-section" id="sec-4-4-1">
                    <h3>1. 补泻的含义</h3>
                    <p>回顾第一篇的内容，针灸的核心机制是"调气"。调气的两个基本方向就是<strong>补</strong>和<strong>泻</strong>：</p>

                    <div class="key-point">
                        <div class="key-title">补与泻</div>
                        <p><strong>补</strong>：正气不足时，通过针法<em>扶助正气</em>，使虚弱的气血得到充实。操作上体现为"顺其气而助之"——动作轻柔、缓慢、顺势而为。</p>
                        <p><strong>泻</strong>：邪气有余时，通过针法<em>驱散邪气</em>，使亢盛的邪气得到消解。操作上体现为"逆其气而夺之"——动作相对有力、节奏较快。</p>
                        <p><strong>平补平泻</strong>：当正邪状态不太明显、或难以判断虚实时，使用均匀的中等力度手法，既不偏补也不偏泻，让人体自行调节。临床中，平补平泻最为常用。</p>
                    </div>
                </div>

                <!-- 2. 基本补泻法 -->
                <div class="content-section" id="sec-4-4-2">
                    <h3>2. 基本补泻法</h3>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🔄 捻转补泻</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>通过针体左右旋转的方向、力度和角度来区分补泻。</p>
                            <ul>
                                <li><strong>补法</strong>：捻转角度小（＜180°），力度轻，频率慢</li>
                                <li><strong>泻法</strong>：捻转角度大（＞180°），力度较重，频率较快</li>
                            </ul>
                            <p><em>注意：关于捻转方向（顺时针还是逆时针）为补或为泻，历代说法不一，临床中以整体操作的轻重缓急来判断更为实际。</em></p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">↕️ 提插补泻</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>通过针体上下提插的幅度和力度来区分补泻。</p>
                            <ul>
                                <li><strong>补法</strong>：重插轻提（向下用力推入时力度重，向上提起时力度轻）。如同给人加油鼓劲。</li>
                                <li><strong>泻法</strong>：轻插重提（向下推入时力度轻，向上提起时力度重）。如同从身体中向外提拔邪气。</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 3. 呼吸补泻与迎随补泻 -->
                <div class="content-section" id="sec-4-4-3">
                    <h3>3. 呼吸补泻与迎随补泻</h3>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🌬️ 呼吸补泻</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>配合患者的呼吸节奏来操作。这是《内经》中特别强调的补泻方法。</p>
                            <ul>
                                <li><strong>补法</strong>：患者<em>吸气时进针</em>、行针；<em>呼气时出针</em>。</li>
                                <li><strong>泻法</strong>：患者<em>呼气时进针</em>、行针；<em>吸气时出针</em>。</li>
                            </ul>
                            <p>原理：吸气时，外界之气进入人体，此时进针相当于"趁势补入"；呼气时，体内之气向外排出，此时进针相当于"趁势逐邪"。这正是第一篇讲到的<strong>天人合一</strong>理念在操作中的具体体现。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🧭 迎随补泻</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>根据经脉气血的流注方向来决定针尖朝向。</p>
                            <ul>
                                <li><strong>补法（随）</strong>：针尖朝向经脉气血流注的方向（顺流）。顺着气的走向扎针，是"随"着气走，帮助气运行。</li>
                                <li><strong>泻法（迎）</strong>：针尖朝向经脉气血流注的反方向（逆流）。迎着气的走向扎针，是"迎"着气来，阻截和疏散邪气。</li>
                            </ul>
                            <p>例如：手三阴经的气从胸走手，补法时针尖朝向手指方向（随），泻法时针尖朝向胸部方向（迎）。</p>
                        </div>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">💡 初学者建议</div>
                        <p>补泻手法是针灸中最精细、也最需要临床经验的部分。初学者可以先从<strong>平补平泻</strong>（均匀捻转提插）开始练习，等到手感逐渐成熟后，再尝试区分补泻。书中原话强调：<em>手法需在反复实践中体会，非仅读书可以领悟。</em></p>
                    </div>
                </div>

                <!-- ====== 五、灸法 ====== -->
                <div class="content-section" id="sec-4-5">
                    <h2>五、灸法</h2>
                    <p>针灸，针灸——"针"和"灸"是两种不同的治疗方法。前面讲的都是"针法"，现在来讲"灸法"。</p>
                </div>

                <!-- 1. 灸法原理 -->
                <div class="content-section" id="sec-4-5-1">
                    <h3>1. 灸法原理</h3>
                    <p>灸法是用<strong>艾叶</strong>制成的艾炷或艾条，点燃后在穴位或病变部位进行热刺激的治疗方法。</p>

                    <div class="key-point">
                        <div class="key-title">灸法的核心：温通</div>
                        <p>灸法的核心作用是<strong>"温通"</strong>——</p>
                        <p><strong>温</strong>：艾叶燃烧产生温热之力，能够温经散寒、扶助阳气。凡是因为寒冷（寒邪）导致的疾病，灸法特别有效。</p>
                        <p><strong>通</strong>：温热可以促进气血运行，疏通经络。所谓"血遇热则行，遇寒则凝"。</p>
                    </div>

                    <p>为什么用艾叶？古人认为，艾叶性温，气味芳香，具有纯阳之性，燃烧时其热力能够穿透皮肤深入经脉，不仅仅是表面的温度刺激，更能与人体的<span class="term" data-term="气">气</span>产生共鸣，这是其他物质无法替代的。</p>
                </div>

                <!-- 2. 艾灸方法 -->
                <div class="content-section" id="sec-4-5-2">
                    <h3>2. 艾灸方法</h3>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🕯️ 艾条灸（悬灸）— 最常用</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>将艾条点燃后，悬于穴位上方进行熏灸，不直接接触皮肤。</p>
                            <p><strong>温和灸</strong>：将点燃的艾条对准穴位，保持约2-3厘米的距离，使局部感到温热但不灼痛。每穴灸10-20分钟，至皮肤红润为度。</p>
                            <p><strong>雀啄灸</strong>：将艾条像鸟啄食一样，一上一下地移动，使穴位时而感到灼热，时而温和。刺激较强，适用于需要较强温热刺激的情况。</p>
                            <p><strong>回旋灸</strong>：将艾条在穴位上方做圆周运动或往返运动，扩大灸治的面积。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🔥 艾炷灸</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>将艾绒捏成圆锥形的小炷，放在穴位上点燃。</p>
                            <p><strong>直接灸</strong>（传统方法）：艾炷直接放在皮肤上燃烧。分为"瘢痕灸"（灸至起泡化脓留疤）和"无瘢痕灸"（在感到灼痛前移开）。瘢痕灸现代临床已较少使用。</p>
                            <p><strong>间接灸（隔物灸）</strong>：在艾炷与皮肤之间隔一层物质，既保留温热效果，又避免烫伤。常用的有：</p>
                            <ul>
                                <li><strong>隔姜灸</strong>：切厚约3mm的姜片，穿数个小孔，置于穴位上，再放艾炷燃灸。生姜温中散寒，适合胃寒呕吐、腹痛腹泻。</li>
                                <li><strong>隔蒜灸</strong>：切蒜片置于穴位上灸。大蒜解毒杀虫，适合痈疽肿毒。</li>
                                <li><strong>隔盐灸</strong>：在肚脐中填满食盐，上置艾炷灸。回阳救逆的急救法。</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 3. 灸法注意事项 -->
                <div class="content-section" id="sec-4-5-3">
                    <h3>3. 灸法注意事项</h3>

                    <div class="key-point">
                        <div class="key-title">灸法禁忌与注意</div>
                        <p><strong>① 热证慎灸</strong>：灸法的本质是温热，因此凡属实热证（高热、红肿热痛）、阴虚火旺证（潮热盗汗、五心烦热），一般不宜使用灸法，以免"火上加油"。</p>
                        <p><strong>② 部位禁忌</strong>：面部穴位慎灸（影响外观）；大血管走行处不宜直接灸；孕妇腹部和腰骶部不宜灸。</p>
                        <p><strong>③ 灸后调护</strong>：灸后局部皮肤发红属正常反应。如出现小水泡，不必紧张，保持清洁，自然吸收即可；大水泡需用无菌针具挑破引流，防止感染。</p>
                        <p><strong>④ 灸量控制</strong>：一般每穴灸10-20分钟（艾条灸），或3-7壮（艾炷灸）。以皮肤红润温热为度，不可过量。</p>
                        <p><strong>⑤ 施灸顺序</strong>：先灸上部，后灸下部；先灸背部，后灸腹部；先灸阳经，后灸阴经。</p>
                    </div>
                </div>

                <!-- ====== 六、安全须知 ====== -->
                <div class="content-section" id="sec-4-6">
                    <h2>六、安全须知</h2>
                    <p>针灸虽然是一种相对安全的治疗方法，但操作不当仍可能造成伤害。以下是必须牢记的安全要点：</p>

                    <div class="key-point">
                        <div class="key-title">⚠️ 针灸安全十要</div>
                        <p><strong>① 严格消毒</strong>：使用一次性无菌针具。施术前医者双手消毒，穴位局部皮肤消毒（75%酒精棉球擦拭）。</p>
                        <p><strong>② 熟悉解剖</strong>：了解每个穴位下方的组织结构（肌肉、血管、神经、脏器），确保不会伤及重要组织。</p>
                        <p><strong>③ 胸背部慎深刺</strong>：肺脏紧邻胸壁，刺入过深可能导致气胸。胸背部穴位应向脊柱方向斜刺或平刺，控制深度。</p>
                        <p><strong>④ 防止晕针</strong>：初次接受针灸的患者，或空腹、过度疲劳、精神紧张者，容易发生晕针（头晕、面白、出冷汗、甚至晕厥）。预防措施：针灸前确认患者已进食、情绪平稳；初次治疗取穴宜少、手法宜轻。</p>
                        <p><strong>⑤ 晕针处理</strong>：一旦发现晕针，立即停止针刺，拔出所有针具，让患者平卧（头低脚高位），松解衣扣，给予温水。轻者静卧片刻即可恢复，重者可掐按人中穴、指尖放血、灸百会穴。</p>
                        <p><strong>⑥ 防止滞针</strong>：行针时若针体因肌纤维缠绕而不能捻转提插（滞针），不可强行操作。应让患者放松局部肌肉，或在附近穴位另刺一针以缓解肌肉痉挛，然后再轻轻退针。</p>
                        <p><strong>⑦ 防止弯针和断针</strong>：进针后患者不宜大幅度改变体位。使用前检查针具质量，弯曲、锈蚀的针不可使用。</p>
                        <p><strong>⑧ 特殊人群注意</strong>：孕妇禁针合谷、三阴交、昆仑等穴（可能引起子宫收缩）；下腹部穴位慎针。婴幼儿囟门未闭时禁针百会。</p>
                        <p><strong>⑨ 出血处理</strong>：出针后少量出血或皮下淤青属正常（尤其是面部和四肢远端穴位），按压片刻即可止血。如有较多出血，持续按压3-5分钟。</p>
                        <p><strong>⑩ 术后观察</strong>：针灸结束后，让患者稍作休息再离开。告知患者术后如有不适应及时就医。</p>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">🔴 重要声明</div>
                        <p>本教程内容仅供理论学习参考。<strong>针灸属于医疗行为</strong>，在人体上实际操作必须经过系统的临床培训、取得相应的执业资格后方可进行。未经专业培训，请勿自行在人体上针刺。</p>
                    </div>
                </div>

                <!-- ====== 章节测验 ====== -->
                <div class="content-section" id="sec-quiz">
                    <h2>📝 章节测验</h2>
                    <p>检验一下你对本篇实操知识的理解：</p>

                    <!-- 测验1 -->
                    <div class="quiz-block" id="quiz-4-1">
                        <div class="quiz-title">问题一：什么是"得气"？</div>
                        <div class="quiz-option">A. 针刺入穴位后患者感到剧烈疼痛</div>
                        <div class="quiz-option">B. 针刺入穴位后患者感到酸、麻、胀、重等特殊感觉，医者手下针体沉紧</div>
                        <div class="quiz-option">C. 针刺入穴位后患者没有任何感觉</div>
                        <div class="quiz-option">D. 针刺入穴位后穴位出血</div>
                        <div class="quiz-feedback"></div>
                    </div>

                    <!-- 测验2 -->
                    <div class="quiz-block" id="quiz-4-2">
                        <div class="quiz-title">问题二：补法与泻法的核心区别是什么？</div>
                        <div class="quiz-option">A. 补法用粗针，泻法用细针</div>
                        <div class="quiz-option">B. 补法扎得浅，泻法扎得深</div>
                        <div class="quiz-option">C. 补法"顺其气而助之"（轻柔缓慢），泻法"逆其气而夺之"（较重较快）</div>
                        <div class="quiz-option">D. 补法只扎阴经穴位，泻法只扎阳经穴位</div>
                        <div class="quiz-feedback"></div>
                    </div>

                    <!-- 测验3 -->
                    <div class="quiz-block" id="quiz-4-3">
                        <div class="quiz-title">问题三：灸法的核心作用和适用范围是？</div>
                        <div class="quiz-option">A. 核心作用是"温通"，特别适用于虚寒证，热证一般不宜灸</div>
                        <div class="quiz-option">B. 核心作用是"清热"，特别适用于热证</div>
                        <div class="quiz-option">C. 灸法适用于所有疾病，没有禁忌</div>
                        <div class="quiz-option">D. 灸法只能治疗皮肤病</div>
                        <div class="quiz-feedback"></div>
                    </div>
                </div>

                <!-- ====== 本章小结 ====== -->
                <div class="content-section" id="sec-summary">
                    <h2>本篇小结</h2>
                    <div class="key-point">
                        <div class="key-title">核心要点回顾</div>
                        <p>📍 <strong>取穴</strong>：掌握骨度分寸法（核心）、体表标志法、手指比量法、简便取穴法四种方法，确保在人体上精确定位穴位。</p>
                        <p>🪡 <strong>针具</strong>：了解毫针的结构（针尾→针柄→针根→针身→针尖），根据部位选择合适的长度和粗细。</p>
                        <p>✋ <strong>刺法</strong>：掌握指切、夹持、舒张、提捏四种进针法；理解直刺、斜刺、平刺三种角度；深刻认识"得气"的意义。</p>
                        <p>⚖️ <strong>补泻</strong>：理解补（顺气扶正）与泻（逆气驱邪）的核心区别，掌握捻转、提插、呼吸、迎随四种补泻方法。</p>
                        <p>🔥 <strong>灸法</strong>：理解"温通"原理，掌握艾条灸和艾炷灸的方法，牢记灸法禁忌。</p>
                        <p>🛡️ <strong>安全</strong>：牢记安全十要，特别是消毒、胸背部慎深刺、防晕针三大关键。</p>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">🎯 学习路径回顾</div>
                        <p>至此，我们已经走完了针灸学习的四大基石：</p>
                        <p>第一篇（原理）→ 第二篇（诊断）→ 第三篇（选穴配穴）→ <strong>第四篇（实操手法）</strong></p>
                        <p>下一篇将进入<strong>临证治疗</strong>——把前四篇所学全部串联起来，看看真正面对一个病人时，从头到尾应该怎么做。</p>
                    </div>

                    <!-- 完成按钮 -->
                    <div style="text-align:center; margin-top:var(--spacing-2xl);">
                        <button class="modal-btn" id="mark-complete" style="font-size:1rem; padding:var(--spacing-md) var(--spacing-2xl);">
                            ✅ 标记本章已学完
                        </button>
                        <p id="complete-status" style="margin-top:var(--spacing-md); color:var(--color-text-muted); font-size:0.9rem;"></p>
                    </div>
                </div>

                <!-- ====== 章节导航 ====== -->
                <div class="chapter-nav">
                    <a href="chapter3.html" class="chapter-nav-item">
                        <div class="nav-label">← 上一篇</div>
                        <div class="nav-title">第三篇：选穴之道</div>
                    </a>
                    <a href="chapter5.html" class="chapter-nav-item next">
                        <div class="nav-label">下一篇 →</div>
                        <div class="nav-title">第五篇：临证治疗</div>
                    </a>
                </div>

            </div>
        </div>
        `;
    }
};