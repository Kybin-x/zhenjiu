/* ============================================
   零起点学针灸 — 第五篇：临证治疗（内容数据）
   涵盖：临证思路、头面病、躯干病、四肢病、
         脏腑病、情志病、综合案例
   ============================================ */

const Chapter5Data = {

    // ==========================================
    // 章节元信息
    // ==========================================
    META: {
        id: 'chapter5',
        number: '伍',
        title: '临证治疗',
        subtitle: '常见病针灸方案',
        prevChapter: { url: 'chapter4.html', title: '第四篇：实操入门' },
        nextChapter: null,
        totalSections: 18
    },

    // ==========================================
    // 侧边栏目录
    // ==========================================
    SIDEBAR_NAV: [
        { id: 'sec-intro', label: '引言', level: 1 },
        { id: 'sec-5-1', label: '一、临证思路', level: 1 },
        { id: 'sec-5-1-1', label: '1. 四步流程', level: 2 },
        { id: 'sec-5-1-2', label: '2. 处方结构', level: 2 },
        { id: 'sec-5-2', label: '二、头面五官病', level: 1 },
        { id: 'sec-5-2-1', label: '1. 头痛', level: 2 },
        { id: 'sec-5-2-2', label: '2. 面瘫', level: 2 },
        { id: 'sec-5-2-3', label: '3. 牙痛', level: 2 },
        { id: 'sec-5-2-4', label: '4. 目疾', level: 2 },
        { id: 'sec-5-3', label: '三、颈肩腰腿痛', level: 1 },
        { id: 'sec-5-3-1', label: '1. 颈椎病', level: 2 },
        { id: 'sec-5-3-2', label: '2. 肩周炎', level: 2 },
        { id: 'sec-5-3-3', label: '3. 腰痛', level: 2 },
        { id: 'sec-5-3-4', label: '4. 膝痛', level: 2 },
        { id: 'sec-5-4', label: '四、脏腑病', level: 1 },
        { id: 'sec-5-4-1', label: '1. 胃痛与消化不良', level: 2 },
        { id: 'sec-5-4-2', label: '2. 失眠', level: 2 },
        { id: 'sec-5-4-3', label: '3. 月经不调', level: 2 },
        { id: 'sec-5-4-4', label: '4. 感冒', level: 2 },
        { id: 'sec-5-5', label: '五、情志病', level: 1 },
        { id: 'sec-5-5-1', label: '1. 焦虑与抑郁', level: 2 },
        { id: 'sec-5-5-2', label: '2. 心悸', level: 2 },
        { id: 'sec-5-6', label: '六、综合案例分析', level: 1 },
        { id: 'sec-quiz', label: '📝 章节测验', level: 1 },
    ],

    // ==========================================
    // 测验数据
    // ==========================================
    QUIZZES: [
        {
            id: 'quiz-5-1',
            correctIndex: 2,
            feedbackCorrect: '✅ 正确！临证四步是"诊→断→选→操"——先诊法收集信息，再断法分析判断，然后选经选穴开处方，最后实施操作。这正是前四篇知识的完整串联。',
            feedbackWrong: '❌ 不太对。针灸临证的完整流程是有严格顺序的：先诊（收集信息）→再断（分析判断）→然后选（选经选穴）→最后操（实施针刺/艾灸）。跳过任何一步都可能影响疗效。'
        },
        {
            id: 'quiz-5-2',
            correctIndex: 1,
            feedbackCorrect: '✅ 正确！后头痛循膀胱经分布，应选取膀胱经穴位为主（如天柱、昆仑、后溪等）。这体现了"经脉所过，主治所及"的选经原则——头痛在哪条经的循行区域，就取哪条经的穴位。',
            feedbackWrong: '❌ 后头痛的部位在头后方，对应的是太阳经（膀胱经）的循行区域，而非少阳经或阳明经。记住口诀：前额阳明、侧头少阳、后头太阳、巅顶厥阴。'
        },
        {
            id: 'quiz-5-3',
            correctIndex: 0,
            feedbackCorrect: '✅ 正确！失眠的核心病机是"阳不入阴"——白天阳气在外活动，夜晚应当收敛入阴才能安眠。如果阳气不能顺利入阴（原因可能是心火亢盛、肝气郁结、阴血不足等），就会出现失眠。治疗的关键是调和阴阳、引阳入阴。',
            feedbackWrong: '❌ 失眠不是简单的"脑子想太多"或"缺钙"，中医认为其核心病机是"阳不入阴"。理解这个病机，才能理解为什么针灸失眠要选百会、安眠、神门、三阴交等穴——它们都有调和阴阳的作用。'
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
                    <div class="chapter-label">第五篇</div>
                    <h1>临证治疗：常见病针灸方案</h1>
                    <p class="chapter-intro">
                        经过前四篇的系统学习，我们已经具备了完整的知识链条：理解原理（第一篇）→ 学会诊断（第二篇）→ 掌握选穴（第三篇）→ 熟悉操作（第四篇）。<br><br>
                        现在，是时候把这一切<strong>串联起来</strong>，看看面对一个真实的病人、一个具体的疾病时，针灸医生从头到尾应该怎么思考、怎么行动。<br><br>
                        本篇将以<strong>常见病</strong>为例，展示完整的临证思路和针灸方案。
                    </p>
                </div>

                <!-- ====== 引言 ====== -->
                <div class="content-section" id="sec-intro">
                    <h2>引言：从学知识到看病人</h2>
                    <p>学医和看病是两件事。学医是把知识装进脑子里，看病是把脑子里的知识用出来。很多人书读了不少，面对病人却不知从何下手——这是"知识碎片化"的结果：脉诊是脉诊的，选穴是选穴的，手法是手法的，彼此之间没有打通。</p>
                    <p>本篇的目标就是帮你<strong>打通</strong>。每一个病例，我们都会完整走一遍"诊→断→选→操"的流程，让你看到前四篇的知识是如何环环相扣、协同工作的。</p>

                    <div class="annotation">
                        <div class="annotation-label">⚠️ 重要声明</div>
                        <p>本篇所列的针灸方案，均为<strong>教学示范</strong>，旨在展示临证思维的框架。实际临床中，每个病人的情况千差万别，必须根据具体的诊断结果灵活调整，绝不可照搬套用。<strong>针灸治疗必须由具有执业资格的专业人员实施。</strong></p>
                    </div>
                </div>

                <!-- ====== 一、临证思路 ====== -->
                <div class="content-section" id="sec-5-1">
                    <h2>一、临证思路</h2>
                    <p>在进入具体病例之前，先建立一个清晰的思维框架。无论面对什么疾病，针灸临证的思路都可以归纳为<strong>四个步骤</strong>。</p>
                </div>

                <div class="content-section" id="sec-5-1-1">
                    <h3>1. 四步流程：诊→断→选→操</h3>

                    <div class="key-point">
                        <div class="key-title">临证四步</div>
                        <p><strong>第一步：诊（收集信息）</strong></p>
                        <p>运用第二篇学到的诊法——脉诊、按诊、望诊、问诊、闻诊——尽可能全面地收集患者的身体信息。重点关注：脉象如何？经脉上有无应结？面色舌象如何？症状特征是什么？</p>
                        <p><strong>第二步：断（分析判断）</strong></p>
                        <p>运用第二篇的断法四维——断病位（病在哪里）、断病性（寒热虚实）、断病势（发展趋势）、断病因（致病原因）——对收集到的信息进行综合分析。</p>
                        <p><strong>第三步：选（制定处方）</strong></p>
                        <p>运用第三篇的选经选穴知识——根据病位确定主经，根据病性确定配穴，综合运用经验穴、特定穴等——制定针灸处方。</p>
                        <p><strong>第四步：操（实施操作）</strong></p>
                        <p>运用第四篇的实操技术——精确取穴、选针进针、得气行针、补泻手法、留针出针——完成治疗。</p>
                    </div>

                    <p>这四步的每一步，都对应着前面某一篇的核心知识。可以说，<strong>每一次治疗都是前四篇知识的一次完整演练</strong>。</p>
                </div>

                <div class="content-section" id="sec-5-1-2">
                    <h3>2. 处方结构：主穴+配穴+随证加减</h3>
                    <p>一个完整的针灸处方，通常由三部分构成：</p>

                    <div class="key-point">
                        <div class="key-title">处方三要素</div>
                        <p><strong>主穴</strong>：针对核心病位和病机选取的穴位。这是处方的骨架，无论患者的具体表现如何变化，主穴相对固定。</p>
                        <p><strong>配穴</strong>：根据病性、病因等具体情况，在主穴的基础上增加的穴位。配穴体现的是"辨证施治"——同一种病，寒热虚实不同，配穴也不同。</p>
                        <p><strong>随证加减</strong>：根据患者的伴随症状（如伴有头晕、恶心、口苦等）或特殊体质，灵活增减的穴位。这是处方的"微调"部分。</p>
                    </div>

                    <p>以下各病例的方案，都会按照"主穴→配穴→加减→操作要点"的格式呈现，方便学习和对比。</p>
                </div>

                <!-- ====== 二、头面五官病 ====== -->
                <div class="content-section" id="sec-5-2">
                    <h2>二、头面五官病</h2>
                    <p>头面部是多条<span class="term" data-term="经脉">经脉</span>汇聚之处。人体十二正经中，所有的阳经都上达头面。因此，头面五官的疾病与阳经的关系最为密切。</p>
                </div>

                <!-- 1. 头痛 -->
                <div class="content-section" id="sec-5-2-1">
                    <h3>1. 头痛</h3>
                    <p>头痛是针灸临床中最常见的就诊原因之一，也是最能体现"辨经论治"思路的病症。</p>

                    <div class="key-point">
                        <div class="key-title">头痛的经脉定位（核心）</div>
                        <p>头痛首先要看<strong>痛在哪里</strong>——不同部位的头痛，归属于不同的经脉：</p>
                        <p>🔹 <strong>前额痛、眉棱骨痛</strong> → <strong>阳明经</strong>头痛（胃经为主）</p>
                        <p>🔹 <strong>侧头痛、太阳穴痛</strong> → <strong>少阳经</strong>头痛（胆经为主）</p>
                        <p>🔹 <strong>后头痛、枕部痛</strong> → <strong>太阳经</strong>头痛（膀胱经为主）</p>
                        <p>🔹 <strong>巅顶痛（头顶正中）</strong> → <strong>厥阴经</strong>头痛（肝经为主）</p>
                    </div>

                    <p>这个"定位口诀"极为重要，几乎是针灸治疗头痛的第一步判断。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 阳明经头痛方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>症状</strong>：前额疼痛，或连及眉棱骨、鼻根。</p>
                            <p><strong>主穴</strong>：合谷、内庭、头维、印堂、阳白</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>风寒型（遇风冷加重）加 风池、列缺</li>
                                <li>胃热型（口臭、便秘）加 曲池、足三里</li>
                            </ul>
                            <p><strong>操作</strong>：合谷、内庭用泻法；头维、阳白平刺。实证手法偏重，虚证手法偏轻。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 少阳经头痛方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>症状</strong>：侧头部（太阳穴附近）疼痛，可连及耳部。常见于偏头痛。</p>
                            <p><strong>主穴</strong>：率谷、风池、外关、足临泣、太阳（经外奇穴）</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>肝阳上亢型（面红易怒、脉弦）加 太冲、行间</li>
                                <li>痰湿型（头重如裹、胸闷恶心）加 丰隆、中脘</li>
                            </ul>
                            <p><strong>操作</strong>：率谷平刺，风池针尖朝向对侧眼窝方向斜刺1-1.2寸。外关、足临泣为八脉交会穴配对，增强疗效。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 太阳经头痛方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>症状</strong>：后头部及枕部疼痛，常牵连颈项。多见于风寒外感或颈椎问题。</p>
                            <p><strong>主穴</strong>：天柱、风池、昆仑、后溪</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>风寒型（恶寒发热、鼻塞）加 风府、大椎、列缺</li>
                                <li>瘀血型（痛处固定、夜间加重）加 膈俞、血海</li>
                            </ul>
                            <p><strong>操作</strong>：天柱直刺0.8-1寸（注意深度安全）；昆仑、后溪为远端取穴，体现"经脉所过，主治所及"。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 厥阴经头痛方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>症状</strong>：巅顶（头顶正中）疼痛，甚者连及目系。</p>
                            <p><strong>主穴</strong>：百会、四神聪、太冲、内关</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>肝血不足型（面色苍白、头晕）加 三阴交、足三里</li>
                                <li>肝气上逆型（呕吐、烦躁）加 行间、合谷</li>
                            </ul>
                            <p><strong>操作</strong>：百会平刺，四神聪向百会方向平刺。太冲用泻法（肝气上逆型）或补法（肝血不足型）。</p>
                        </div>
                    </div>
                </div>

                <!-- 2. 面瘫 -->
                <div class="content-section" id="sec-5-2-2">
                    <h3>2. 面瘫</h3>
                    <p>面瘫（周围性面神经麻痹）是针灸的优势病种之一，疗效确切，被世界卫生组织列为针灸推荐治疗的疾病。</p>

                    <div class="key-point">
                        <div class="key-title">面瘫的病机</div>
                        <p>中医认为面瘫多因<strong>正气不足、风寒之邪侵袭面部经脉</strong>，导致经脉气血瘀滞、筋肉失养。面部的经脉主要涉及<strong>阳明经</strong>（胃经、大肠经）和<strong>少阳经</strong>（胆经、三焦经）。</p>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 面瘫针灸方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>（患侧为主）：阳白、四白、颧髎、颊车、地仓、翳风、合谷（健侧）</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>眼睑不能闭合：攒竹、鱼腰、丝竹空</li>
                                <li>鼻唇沟消失：迎香、禾髎</li>
                                <li>人中歪斜：水沟（人中）</li>
                                <li>耳后疼痛：翳风加强、完骨</li>
                                <li>味觉减退：廉泉</li>
                            </ul>
                            <p><strong>分期治疗</strong>：</p>
                            <ul>
                                <li><strong>急性期</strong>（1-2周内）：取穴宜少，手法宜轻，以远端穴位（合谷、足三里）为主，面部穴位少取、浅刺。避免强刺激加重水肿。</li>
                                <li><strong>恢复期</strong>（2周后）：可以增加面部局部穴位，手法适当加强，透刺法效果好（如地仓透颊车、阳白透鱼腰）。</li>
                                <li><strong>后遗症期</strong>：在恢复期基础上加足三里、三阴交以补益气血。</li>
                            </ul>
                            <p><strong>操作要点</strong>：面部穴位多用平刺或斜刺（0.5-1寸），透刺法可增强对面部经筋的刺激。合谷取健侧，取"左病右取、右病左取"之意。</p>
                        </div>
                    </div>
                </div>

                <!-- 3. 牙痛 -->
                <div class="content-section" id="sec-5-2-3">
                    <h3>3. 牙痛</h3>
                    <p>牙痛虽小，疼起来却"要人命"。针灸止牙痛效果迅速，常有"针到痛止"的效果。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 牙痛方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>经脉归属</strong>：上牙属足阳明胃经，下牙属手阳明大肠经。</p>
                            <p><strong>主穴</strong>：合谷（特效穴）、颊车、下关</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>上牙痛加 内庭（足阳明荥穴）</li>
                                <li>下牙痛加 温溜（手阳明郄穴）</li>
                                <li>风火牙痛（红肿热痛、口臭）加 外关、风池</li>
                                <li>虚火牙痛（隐隐作痛、午后加重）加 太溪、行间</li>
                            </ul>
                            <p><strong>操作</strong>：合谷用强刺激泻法，持续行针至痛感减轻。急性牙痛时，单取合谷强刺激即可快速止痛。</p>
                        </div>
                    </div>
                </div>

                <!-- 4. 目疾 -->
                <div class="content-section" id="sec-5-2-4">
                    <h3>4. 目疾</h3>
                    <p>中医认为"目为肝之窍"，同时五脏六腑之精气皆上注于目。因此，目疾的治疗既要关注局部，也要调理脏腑。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 目疾常用方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>：睛明、攒竹、丝竹空、太阳、风池、光明（胆经络穴——治眼病的经验效穴）</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>目赤肿痛（急性结膜炎等）：加 太冲、合谷、行间 → 清泻肝火</li>
                                <li>目涩目昏（视疲劳、干眼）：加 三阴交、肝俞、肾俞 → 滋补肝肾</li>
                                <li>迎风流泪：加 头临泣、承泣</li>
                            </ul>
                            <p><strong>操作</strong>：眼周穴位进针须特别小心——缓慢进针，不做大幅度捻转提插，以免损伤眼球或眶内血管。睛明穴嘱患者闭眼，沿眶壁缓慢直刺0.5-1寸，出针后按压2分钟防止淤青。</p>
                        </div>
                    </div>
                </div>

                <!-- ====== 三、颈肩腰腿痛 ====== -->
                <div class="content-section" id="sec-5-3">
                    <h2>三、颈肩腰腿痛</h2>
                    <p>颈肩腰腿痛是现代人最普遍的健康问题，也是针灸治疗的"拿手好戏"。这类疾病大多属于经脉层面的问题——气血运行不畅、经筋失养——正是针灸的治疗靶区。</p>
                </div>

                <!-- 1. 颈椎病 -->
                <div class="content-section" id="sec-5-3-1">
                    <h3>1. 颈椎病</h3>
                    <p>久坐办公、长期低头看手机——现代人的颈椎承受着前所未有的压力。针灸治疗颈椎病，核心在于<strong>疏通颈项部经脉、缓解肌肉痉挛</strong>。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 颈椎病方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>：风池、天柱、颈夹脊穴（病变节段）、后溪、申脉</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>颈部僵痛为主：加 大椎、肩井（浅刺）</li>
                                <li>上肢麻木放射：加 肩髃、曲池、合谷、外关（循经远取）</li>
                                <li>头晕：加 百会、四神聪、太阳</li>
                                <li>恶心呕吐：加 内关、中脘</li>
                            </ul>
                            <p><strong>操作</strong>：颈夹脊穴向脊柱方向斜刺0.8-1寸。风池穴针尖朝向对侧眼窝斜刺1-1.2寸。<strong>颈部穴位切勿直刺深刺</strong>，以防伤及脊髓。按诊发现的压痛点和应结处为最佳进针点。</p>
                            <p><strong>辅助</strong>：可配合温针灸（在针柄上加艾段燃烧），温通经脉效果更好。</p>
                        </div>
                    </div>
                </div>

                <!-- 2. 肩周炎 -->
                <div class="content-section" id="sec-5-3-2">
                    <h3>2. 肩周炎</h3>
                    <p>肩周炎，俗称"五十肩""冻结肩"，特点是肩关节疼痛和活动受限。针灸治疗的关键在于找准受累的经脉。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 肩周炎方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>经脉定位</strong>（根据疼痛部位）：</p>
                            <ul>
                                <li>肩前痛 → 手阳明大肠经、手太阴肺经</li>
                                <li>肩外侧痛 → 手少阳三焦经</li>
                                <li>肩后痛 → 手太阳小肠经</li>
                            </ul>
                            <p><strong>主穴</strong>：肩髃、肩髎、肩贞、阿是穴（最痛点）</p>
                            <p><strong>配穴</strong>（根据疼痛部位分经取穴）：</p>
                            <ul>
                                <li>肩前痛：合谷、列缺</li>
                                <li>肩外侧痛：外关、中渚</li>
                                <li>肩后痛：后溪、养老</li>
                            </ul>
                            <p><strong>特殊技法</strong>：条口透承山——这是治疗肩周炎的经验效穴组合。在条口穴（胃经，小腿前侧）进针后，针尖向承山方向透刺，同时嘱患者活动患侧肩关节。此法临床效果显著。</p>
                            <p><strong>操作</strong>：肩部穴位可用温针灸或加电针以增强效果。留针期间嘱患者缓慢活动肩关节（"动留针"），有助于松解粘连。</p>
                        </div>
                    </div>
                </div>

                <!-- 3. 腰痛 -->
                <div class="content-section" id="sec-5-3-3">
                    <h3>3. 腰痛</h3>
                    <p>"腰为肾之府"，又是<span class="term" data-term="督脉">督脉</span>和<span class="term" data-term="膀胱经">膀胱经</span>的循行之处。腰痛的病因可以是外伤、受寒、劳损，也可以是肾虚。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 腰痛方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>：肾俞、腰阳关、委中、大肠俞、阿是穴</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>寒湿腰痛（阴雨天加重、腰部冷痛）：加 腰阳关灸、命门灸</li>
                                <li>瘀血腰痛（有外伤史、痛如针刺、位置固定）：加 膈俞、血海、次髎</li>
                                <li>肾虚腰痛（隐隐作痛、腰膝酸软）：加 太溪、志室，用补法</li>
                                <li>腰痛伴下肢放射痛（坐骨神经痛）：加 环跳、阳陵泉、悬钟</li>
                            </ul>
                            <p><strong>操作</strong>：委中穴是"腰背委中求"的经典穴位，对各种腰痛都有效。急性腰扭伤时，可先在委中穴点刺放血（三棱针点刺出血数滴），往往能迅速缓解疼痛。肾俞、大肠俞直刺1-1.5寸，可加温针灸。</p>
                        </div>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">🔑 经典口诀</div>
                        <p>"腰背委中求"——这句出自《四总穴歌》的名句，意思是凡腰背部的疾病，首选委中穴。委中位于膝窝正中，属足太阳膀胱经，而膀胱经正是循行于整个腰背部的经脉。这就是"经脉所过，主治所及"的经典应用。</p>
                    </div>
                </div>

                <!-- 4. 膝痛 -->
                <div class="content-section" id="sec-5-3-4">
                    <h3>4. 膝痛</h3>
                    <p>膝关节是人体最大的关节，也是最容易出问题的关节之一。多条经脉经过膝部，治疗时需要辨别具体涉及哪条经脉。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 膝痛方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>：犊鼻（外膝眼）、内膝眼、梁丘、血海、阳陵泉、足三里</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>膝内侧痛：加 阴陵泉、三阴交（脾经）</li>
                                <li>膝外侧痛：加 阳陵泉加强、膝阳关（胆经）</li>
                                <li>膝后痛：加 委中、承山（膀胱经）</li>
                                <li>风寒湿痹（阴雨天加重）：加灸法，犊鼻、内膝眼温针灸</li>
                                <li>肝肾亏虚（老年退行性变）：加 太溪、三阴交，用补法</li>
                            </ul>
                            <p><strong>操作</strong>：内外膝眼可以向膝关节腔方向斜刺1-1.5寸。膝部穴位特别适合加温针灸或艾灸，温热之力有助于驱散关节中的寒湿。</p>
                        </div>
                    </div>
                </div>

                <!-- ====== 四、脏腑病 ====== -->
                <div class="content-section" id="sec-5-4">
                    <h2>四、脏腑病</h2>
                    <p>脏腑病属于"里证"，不像经脉病那样可以直接在病变部位施针。治疗脏腑病，需要通过体表的穴位来间接调整脏腑功能——这正是第三篇讲到的"俞募配穴""原络配穴"等方法的用武之地。</p>
                </div>

                <!-- 1. 胃痛 -->
                <div class="content-section" id="sec-5-4-1">
                    <h3>1. 胃痛与消化不良</h3>
                    <p>"胃痛"在中医又称"胃脘痛"，泛指上腹部疼痛，常伴有胀满、嗳气、反酸、食欲不振等消化道症状。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 胃痛方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>：中脘（胃之募穴）、足三里（胃经合穴）、内关（止痛要穴）</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>寒邪犯胃（冷痛、得温则减）：加 胃俞（灸）、梁丘、公孙</li>
                                <li>食积停滞（胀痛、嗳腐吞酸）：加 下脘、璇玑、内庭</li>
                                <li>肝气犯胃（胁肋胀痛、嗳气频繁、情绪相关）：加 太冲、期门、阳陵泉</li>
                                <li>脾胃虚弱（隐痛喜按、食后腹胀、便溏）：加 脾俞、胃俞、章门，用补法加灸</li>
                            </ul>
                            <p><strong>操作</strong>：中脘直刺1-1.5寸。足三里直刺1-2寸，得气后行补法（虚证）或泻法（实证）。内关直刺0.5-1寸，对缓解胃痛和恶心效果迅速。</p>
                        </div>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">💡 选穴思路解读</div>
                        <p>中脘是胃的<strong>募穴</strong>（脏腑之气汇聚在腹部的穴位），足三里是胃经的<strong>合穴</strong>（"合治内腑"），两穴一腹一腿、一近一远，构成了治疗胃病的核心组合。再加上内关（心包经络穴，有宽胸理气止痛的作用），三穴联用几乎是所有类型胃痛的基础方。这就是第三篇讲到的"特定穴"知识在临床中的直接应用。</p>
                    </div>
                </div>

                <!-- 2. 失眠 -->
                <div class="content-section" id="sec-5-4-2">
                    <h3>2. 失眠</h3>
                    <p>失眠（不寐）是困扰现代人的常见问题。中医认为失眠的核心病机是<strong>"阳不入阴"</strong>——正常情况下，白天阳气在外主活动，夜晚阳气收敛入阴则安眠。若阳气不能顺利入阴，则辗转难眠。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 失眠方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>：百会、四神聪、安眠穴（经外奇穴）、神门、三阴交</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>心脾两虚型（多梦易醒、心悸健忘、面色萎黄）：加 心俞、脾俞、足三里，用补法加灸</li>
                                <li>肝火扰心型（烦躁易怒、口苦目赤、噩梦纷纭）：加 太冲、行间、风池，用泻法</li>
                                <li>心肾不交型（心烦、腰酸、五心烦热、盗汗）：加 太溪、心俞、肾俞、涌泉</li>
                                <li>痰热内扰型（胸闷脘痞、头重、口苦）：加 丰隆、中脘、内庭</li>
                            </ul>
                            <p><strong>操作</strong>：百会、四神聪平刺。安眠穴位于翳风与风池连线的中点，直刺1-1.5寸。神门直刺0.3-0.5寸，补法。三阴交直刺1-1.5寸，补法。建议在睡前1-2小时治疗，效果更佳。</p>
                        </div>
                    </div>
                </div>

                <!-- 3. 月经不调 -->
                <div class="content-section" id="sec-5-4-3">
                    <h3>3. 月经不调</h3>
                    <p>月经与<span class="term" data-term="冲脉">冲脉</span>、<span class="term" data-term="任脉">任脉</span>关系最为密切。冲为血海，任主胞宫。此外，肝藏血主疏泄、脾统血主运化、肾藏精主生殖，三脏功能的失调都可能影响月经。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 月经不调方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>：关元、三阴交、血海、气海</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>月经先期（提前7天以上）：多为血热或气虚
                                    <br>血热：加 行间、地机 → 清热凉血
                                    <br>气虚：加 足三里、脾俞 → 补气摄血
                                </li>
                                <li>月经后期（推迟7天以上）：多为血寒、血虚或气滞
                                    <br>血寒：加 命门灸、归来 → 温经散寒
                                    <br>血虚：加 肝俞、膈俞 → 养血调经
                                    <br>气滞：加 太冲、期门 → 疏肝理气
                                </li>
                                <li>痛经：加 地机（郄穴，止痛效强）、次髎、十七椎</li>
                            </ul>
                            <p><strong>操作</strong>：关元、气海直刺1-1.5寸。虚寒证加灸。三阴交直刺1-1.5寸，得气后视证型行补法或泻法。<strong>注意：孕妇禁用三阴交、合谷等穴。</strong></p>
                        </div>
                    </div>
                </div>

                <!-- 4. 感冒 -->
                <div class="content-section" id="sec-5-4-4">
                    <h3>4. 感冒</h3>
                    <p>感冒是最常见的外感病。中医将感冒分为<strong>风寒感冒</strong>和<strong>风热感冒</strong>两大类，治疗策略截然不同。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 感冒方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>：大椎、风池、合谷、列缺</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>风寒感冒（恶寒重、发热轻、鼻塞流清涕、身痛）：
                                    <br>加 风门、肺俞（灸或温针灸）→ 散寒解表
                                    <br>操作：大椎灸法效果好，合谷用泻法
                                </li>
                                <li>风热感冒（发热重、恶寒轻、咽喉肿痛、流黄涕）：
                                    <br>加 曲池、外关、少商（点刺放血）→ 清热解表
                                    <br>操作：少商三棱针点刺出血，对咽喉肿痛效果迅速
                                </li>
                                <li>鼻塞严重：加 迎香、上星</li>
                                <li>咳嗽：加 尺泽、天突</li>
                                <li>头痛：参考前述头痛分经取穴</li>
                            </ul>
                            <p><strong>操作要点</strong>：感冒属表证，手法宜快、浅、强，以驱邪外出。留针时间不宜过长（10-15分钟）。风寒感冒可配合灸法驱寒，风热感冒以针刺泻法为主。</p>
                        </div>
                    </div>
                </div>

                <!-- ====== 五、情志病 ====== -->
                <div class="content-section" id="sec-5-5">
                    <h2>五、情志病</h2>
                    <p>情志病在现代社会越来越普遍。中医认为情志失调的根源在于<span class="term" data-term="气机">气机</span>的紊乱——气的升降出入失常，导致脏腑功能失调。针灸通过调畅气机，能够有效改善情志方面的问题。</p>
                </div>

                <!-- 1. 焦虑与抑郁 -->
                <div class="content-section" id="sec-5-5-1">
                    <h3>1. 焦虑与抑郁</h3>
                    <p>在中医看来，焦虑与抑郁虽然表现不同，但核心病机相通——都与<strong>肝气郁结</strong>密切相关。肝主疏泄，负责维持全身气机的顺畅。一旦肝气郁结，气机不畅，就可能出现情绪压抑（抑郁）；郁而化火则出现烦躁不安（焦虑）。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 焦虑/抑郁方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>：百会、印堂、内关、太冲、合谷</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>肝气郁结型（叹息、胸胁胀满、情绪低落）：加 期门、阳陵泉、膻中</li>
                                <li>心脾两虚型（多思善虑、心悸、食欲差、失眠）：加 神门、足三里、脾俞、心俞</li>
                                <li>肝郁化火型（烦躁易怒、口苦、头痛）：加 行间、风池、侠溪</li>
                                <li>痰气郁结型（咽中如有物堵（梅核气）、胸闷）：加 天突、丰隆、列缺</li>
                            </ul>
                            <p><strong>操作</strong>：百会、印堂平刺，有安神定志之功。太冲配合谷称为"四关穴"，是疏肝理气的经典组合——太冲疏肝气，合谷调气机，四穴联用（双侧共四针）开四关以畅气机。内关宁心安神、宽胸理气。</p>
                            <p><strong>疗程</strong>：情志病通常需要较长的疗程。建议每周2-3次，10次为一个疗程，一般需要2-3个疗程。配合心理调适和生活方式调整效果更佳。</p>
                        </div>
                    </div>
                </div>

                <!-- 2. 心悸 -->
                <div class="content-section" id="sec-5-5-2">
                    <h3>2. 心悸</h3>
                    <p>心悸是指患者自觉心中跳动不安，甚则不能自主。中医认为心悸的病位在心，涉及脾、肾、肝等脏。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 心悸方案</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>主穴</strong>：内关、神门、心俞、巨阙（心之募穴）</p>
                            <p><strong>配穴</strong>：</p>
                            <ul>
                                <li>心气不足（气短乏力、自汗）：加 气海、足三里，用补法加灸</li>
                                <li>心阳不振（畏寒肢冷、面色苍白）：加 关元灸、命门灸</li>
                                <li>心血不足（面色无华、头晕、失眠）：加 三阴交、脾俞、膈俞</li>
                                <li>心脉瘀阻（刺痛、胸闷、舌紫暗）：加 膻中、膈俞、血海</li>
                            </ul>
                            <p><strong>操作</strong>：内关直刺0.5-1寸，得气后行捻转补法。神门直刺0.3-0.5寸。心俞斜刺0.5-0.8寸（注意不可深刺，下方为肺脏）。巨阙直刺0.5-1寸。</p>
                        </div>
                    </div>
                </div>

                <!-- ====== 六、综合案例分析 ====== -->
                <div class="content-section" id="sec-5-6">
                    <h2>六、综合案例分析</h2>
                    <p>最后，我们用一个完整的虚拟案例，演示从"诊"到"操"的全过程，将五篇所学知识做一个综合串联。</p>

                    <div class="key-point">
                        <div class="key-title">📖 案例：慢性胃痛伴失眠</div>
                        <p><strong>患者</strong>：女性，45岁，公司管理层。</p>
                        <p><strong>主诉</strong>：上腹部隐痛反复发作3年，近半年失眠加重。</p>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🔍 第一步：诊（收集信息）</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>问诊</strong>：</p>
                            <ul>
                                <li>胃痛以隐痛为主，喜按喜温，饭后稍缓，空腹加重</li>
                                <li>食欲差，食后腹胀，大便偏溏</li>
                                <li>失眠表现为入睡困难，多梦易醒，醒后难以再入睡</li>
                                <li>伴有心悸、健忘，疲倦乏力</li>
                                <li>工作压力大，经常加班，三餐不规律</li>
                                <li>月经量少、色淡</li>
                            </ul>
                            <p><strong>望诊</strong>：面色萎黄，精神疲惫，唇色淡。舌淡胖，边有齿痕，苔薄白。</p>
                            <p><strong>脉诊</strong>：脉细弱，尤其右关（脾胃位置）脉弱明显。</p>
                            <p><strong>按诊</strong>：中脘穴处喜按，足三里下方可触及柔弱感（按之软绵无力），内关穴附近有轻微压痛。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🧠 第二步：断（分析判断）</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>断病位</strong>：</p>
                            <ul>
                                <li>主症在上腹部（中焦），涉及脾胃</li>
                                <li>失眠、心悸、健忘涉及心</li>
                                <li>合并分析：病位在<strong>心</strong>与<strong>脾</strong></li>
                            </ul>
                            <p><strong>断病性</strong>：</p>
                            <ul>
                                <li>隐痛喜按喜温 → 虚证、寒证倾向</li>
                                <li>面色萎黄、脉细弱、舌淡胖齿痕 → 气血不足</li>
                                <li>综合判断：<strong>虚证（气血两虚偏气虚）</strong></li>
                            </ul>
                            <p><strong>断病势</strong>：</p>
                            <ul>
                                <li>病程3年，逐渐加重（近半年新增失眠）→ 病势仍在发展</li>
                                <li>脾虚 → 气血生化不足 → 心血不养 → 失眠心悸（脾病及心的传变）</li>
                            </ul>
                            <p><strong>断病因</strong>：</p>
                            <ul>
                                <li>三餐不规律、工作压力大 → 饮食不节 + 思虑过度</li>
                                <li>"思伤脾" → 脾气亏虚 → 运化失常（胃痛）</li>
                                <li>脾虚日久 → 气血不足 → 心失所养（失眠心悸）</li>
                            </ul>
                            <p><strong>综合诊断</strong>：<em>心脾两虚证</em></p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 第三步：选（制定处方）</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>治法</strong>：补益心脾、养血安神</p>
                            <p><strong>选经</strong>：以脾经、胃经、心经为主</p>
                            <p><strong>处方</strong>：</p>
                            <ul>
                                <li><strong>主穴</strong>：
                                    <br>中脘（胃之募穴，调理脾胃）
                                    <br>足三里（胃经合穴，补益气血之要穴）
                                    <br>三阴交（脾经要穴，健脾养血）
                                    <br>神门（心经原穴，宁心安神）
                                    <br>百会（安神定志）
                                </li>
                                <li><strong>配穴</strong>：
                                    <br>心俞、脾俞（俞穴，直接调理心脾）
                                    <br>气海（补气）
                                    <br>内关（宁心止痛）
                                </li>
                                <li><strong>加减</strong>：
                                    <br>因有月经量少色淡，加 血海、膈俞（养血调经）
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">✋ 第四步：操（实施操作）</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>体位</strong>：先仰卧位针腹部和四肢前侧穴位，后俯卧位针背部穴位。</p>
                            <p><strong>操作</strong>：</p>
                            <ul>
                                <li>中脘：直刺1-1.5寸，得气后行<strong>补法</strong>（轻插重提、小幅慢捻），加温针灸</li>
                                <li>足三里：直刺1.5寸，补法，加温针灸（此穴温补脾胃效果极佳）</li>
                                <li>三阴交：直刺1寸，补法</li>
                                <li>神门：直刺0.3寸，轻柔补法</li>
                                <li>百会：平刺0.5寸</li>
                                <li>内关：直刺0.8寸，平补平泻</li>
                                <li>气海：直刺1寸，补法，加温针灸</li>
                                <li>心俞、脾俞：斜刺0.5-0.8寸，补法</li>
                                <li>血海：直刺1寸，补法</li>
                                <li>膈俞：斜刺0.5寸，补法</li>
                            </ul>
                            <p><strong>留针</strong>：25-30分钟，期间间歇行针2次。</p>
                            <p><strong>疗程</strong>：每周3次，10次为一个疗程。预计2-3个疗程后症状明显改善。</p>
                            <p><strong>生活调理建议</strong>：规律三餐、减少加班、适度运动、睡前避免使用手机。</p>
                        </div>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">🎯 案例总结</div>
                        <p>这个案例完整展示了针灸临证的思维链条：<br>
                        <strong>问诊 + 望诊 + 脉诊 + 按诊</strong>（第二篇诊法）→<br>
                        <strong>断病位（心脾）+ 断病性（虚证）+ 断病势（脾病及心）+ 断病因（饮食不节 + 思虑过度）</strong>（第二篇断法）→<br>
                        <strong>选经（脾经、胃经、心经）+ 选穴（募穴、合穴、原穴、俞穴等特定穴）</strong>（第三篇选穴）→<br>
                        <strong>取穴、进针、得气、补法操作、温针灸</strong>（第四篇实操）<br><br>
                        五篇知识，在一个案例中完整贯通。这就是针灸临证的全貌。</p>
                    </div>
                </div>

                <!-- ====== 章节测验 ====== -->
                <div class="content-section" id="sec-quiz">
                    <h2>📝 章节测验</h2>
                    <p>最后一次测验，检验一下你对临证治疗的理解：</p>

                    <!-- 测验1 -->
                    <div class="quiz-block" id="quiz-5-1">
                        <div class="quiz-title">问题一：针灸临证的四步流程是什么？</div>
                        <div class="quiz-option">A. 望→闻→问→切</div>
                        <div class="quiz-option">B. 选经→选穴→进针→出针</div>
                        <div class="quiz-option">C. 诊（收集信息）→ 断（分析判断）→ 选（制定处方）→ 操（实施操作）</div>
                        <div class="quiz-option">D. 补法→泻法→留针→出针</div>
                        <div class="quiz-feedback"></div>
                    </div>

                    <!-- 测验2 -->
                    <div class="quiz-block" id="quiz-5-2">
                        <div class="quiz-title">问题二：后头痛（枕部疼痛）应主要选取哪条经的穴位？</div>
                        <div class="quiz-option">A. 阳明经（胃经）</div>
                        <div class="quiz-option">B. 太阳经（膀胱经）</div>
                        <div class="quiz-option">C. 少阳经（胆经）</div>
                        <div class="quiz-option">D. 厥阴经（肝经）</div>
                        <div class="quiz-feedback"></div>
                    </div>

                    <!-- 测验3 -->
                    <div class="quiz-block" id="quiz-5-3">
                        <div class="quiz-title">问题三：失眠的核心病机是什么？</div>
                        <div class="quiz-option">A. 阳不入阴——阳气不能收敛入阴，故不能安眠</div>
                        <div class="quiz-option">B. 脑子想太多——纯粹是心理问题</div>
                        <div class="quiz-option">C. 缺钙——需要补钙</div>
                        <div class="quiz-option">D. 肝火太旺——所有失眠都是肝火导致的</div>
                        <div class="quiz-feedback"></div>
                    </div>
                </div>

                <!-- ====== 全书总结 ====== -->
                <div class="content-section" id="sec-summary">
                    <h2>🎓 全书总结</h2>

                    <div class="key-point">
                        <div class="key-title">五篇知识体系回顾</div>
                        <p>📖 <strong>第一篇：认识针灸</strong> — 建立基础认知</p>
                        <ul style="margin-left:var(--spacing-lg); line-height:2;">
                            <li>形与气、正气不平、四大原理（经脉、分形、应象、调气）</li>
                        </ul>
                        <p>🔬 <strong>第二篇：诊断之法</strong> — 学会信息收集与分析</p>
                        <ul style="margin-left:var(--spacing-lg); line-height:2;">
                            <li>诊法（脉诊、按诊、望诊、问诊）→ 断法（断病位、病性、病势、病因）</li>
                        </ul>
                        <p>📍 <strong>第三篇：选穴之道</strong> — 掌握处方设计</p>
                        <ul style="margin-left:var(--spacing-lg); line-height:2;">
                            <li>十二经脉、奇经八脉、特定穴、选经选穴原则、配穴方法</li>
                        </ul>
                        <p>✋ <strong>第四篇：实操入门</strong> — 熟悉动手技能</p>
                        <ul style="margin-left:var(--spacing-lg); line-height:2;">
                            <li>取穴法、进针法、得气、补泻手法、灸法、安全须知</li>
                        </ul>
                        <p>🏥 <strong>第五篇：临证治疗</strong> — 融会贯通，实战应用</p>
                        <ul style="margin-left:var(--spacing-lg); line-height:2;">
                            <li>临证四步流程、常见病针灸方案、综合案例分析</li>
                        </ul>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">🌟 写在最后</div>
                        <p>恭喜你完成了《零起点学针灸》的全部学习！</p>
                        <p>请记住，这只是一个<strong>起点</strong>。书本上的知识只是针灸学问的"骨架"——真正的"血肉"来自反复的临床实践、师承的口传心授，以及在日复一日的感悟中逐渐形成的"指下功夫"和"心中了了"。</p>
                        <p>正如书中所言：针灸之道，至简至深。入门不难，精通不易。愿你带着好奇与敬畏，在这条古老而生生不息的道路上，走出自己的风景。</p>
                        <p style="text-align:right; margin-top:var(--spacing-lg); color:var(--color-primary);">— 学习之路，始于足下 🏮</p>
                    </div>

                    <!-- 完成按钮 -->
                    <div style="text-align:center; margin-top:var(--spacing-2xl);">
                        <button class="modal-btn" id="mark-complete" style="font-size:1rem; padding:var(--spacing-md) var(--spacing-2xl);">
                            🎓 完成全部学习
                        </button>
                        <p id="complete-status" style="margin-top:var(--spacing-md); color:var(--color-text-muted); font-size:0.9rem;"></p>
                    </div>
                </div>

                <!-- ====== 章节导航 ====== -->
                <div class="chapter-nav">
                    <a href="chapter4.html" class="chapter-nav-item">
                        <div class="nav-label">← 上一篇</div>
                        <div class="nav-title">第四篇：实操入门</div>
                    </a>
                    <a href="index.html" class="chapter-nav-item next">
                        <div class="nav-label">返回首页 →</div>
                        <div class="nav-title">📚 全书总览</div>
                    </a>
                </div>

            </div>
        </div>
        `;
    }
};