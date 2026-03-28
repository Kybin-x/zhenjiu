/* ============================================
   零起点学针灸 — 第二篇：诊断之法（内容数据）
   ============================================ */

const Chapter2Data = {

    // ==========================================
    // 章节元信息
    // ==========================================
    META: {
        id: 'chapter2',
        number: '贰',
        title: '诊断之法',
        subtitle: '诊法 · 断法',
        prevChapter: { url: 'chapter1.html', title: '第一篇：认识针灸' },
        nextChapter: { url: 'chapter3.html', title: '第三篇：选穴之道' },
        totalSections: 8
    },

    // ==========================================
    // 侧边栏目录
    // ==========================================
    SIDEBAR_NAV: [
        { id: 'sec-intro', label: '引言', level: 1 },
        { id: 'sec-2-1', label: '一、诊法概述', level: 1 },
        { id: 'sec-2-1-1', label: '1. 脉诊', level: 2 },
        { id: 'sec-2-1-2', label: '2. 按诊', level: 2 },
        { id: 'sec-2-1-3', label: '3. 望诊与舌诊', level: 2 },
        { id: 'sec-2-1-4', label: '4. 问诊与闻诊', level: 2 },
        { id: 'sec-2-2', label: '二、断法', level: 1 },
        { id: 'sec-2-2-1', label: '1. 断病位', level: 2 },
        { id: 'sec-2-2-2', label: '2. 断病性', level: 2 },
        { id: 'sec-2-2-3', label: '3. 断病势', level: 2 },
        { id: 'sec-2-2-4', label: '4. 断病因', level: 2 },
        { id: 'sec-quiz', label: '📝 章节测验', level: 1 },
    ],

    // ==========================================
    // 测验数据
    // ==========================================
    QUIZZES: [
        {
            id: 'quiz-2-1',
            correctIndex: 1,
            feedbackCorrect: '✅ 正确！脉诊在针灸诊断中的核心作用是判断气血的运行状态——哪条经脉的气血出了问题、是太过还是不及。这为后续的选经选穴提供了直接依据。',
            feedbackWrong: '❌ 不完全正确。脉诊在针灸中不仅仅是判断脏腑功能或疾病名称，更核心的是通过脉象了解气血在经脉中的运行状态，为选经选穴提供依据。'
        },
        {
            id: 'quiz-2-2',
            correctIndex: 2,
            feedbackCorrect: '✅ 正确！"断病位"回答的是"病在哪里"的问题——是在表还是在里、在上还是在下、在哪条经脉或哪个脏腑。确定病位是选经选穴的前提。',
            feedbackWrong: '❌ 不太对。"断病位"的核心任务不是判断疾病的严重程度或病因，而是确定疾病的部位——病在何处？这直接决定了后续治疗的方向。'
        },
        {
            id: 'quiz-2-3',
            correctIndex: 0,
            feedbackCorrect: '✅ 正确！按诊中发现的"应结"（如结节、条索、僵硬等异常结构）是气血瘀滞在体表的反映。这些异常既是诊断的依据，往往也是针灸治疗的重要靶点。',
            feedbackWrong: '❌ 应结不是正常的生理结构，而是经脉气血运行异常时在体表形成的病理反应。常见形态包括结节、条索、僵硬、柔弱、凹陷和压痛等。'
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
                    <div class="chapter-label">第二篇</div>
                    <h1>诊断之法：诊法与断法</h1>
                    <p class="chapter-intro">
                        在第一篇中，我们建立了对针灸的基本认识——理解了"形与气"、"正气不平"以及四大原理。
                        本篇进入实践的第一步：<strong>如何诊断？</strong>通过"诊法"收集信息，再通过"断法"分析判断，
                        为后续的选经选穴奠定基础。
                    </p>
                </div>

                <!-- ====== 引言 ====== -->
                <div class="content-section" id="sec-intro">
                    <h2>引言：诊断在针灸中的特殊地位</h2>
                    <p>在现代医学中，诊断往往依赖各种仪器检查——抽血化验、CT、核磁共振等。而在传统针灸中，诊断主要依赖医生的感官和经验——眼看、耳听、口问、手摸。</p>
                    <p>这并不意味着针灸诊断不"科学"。恰恰相反，针灸诊断关注的是<span class="term" data-term="气血">气血</span>的运行状态、<span class="term" data-term="经脉">经脉</span>的通畅与否——这些信息，目前的仪器还很难完全捕捉。而有经验的医生通过脉诊、按诊等方法，能够直接感知这些微妙的变化。</p>

                    <div class="key-point">
                        <div class="key-title">诊断的两个阶段</div>
                        <p><strong>诊法</strong>（收集信息）：通过脉诊、按诊、望诊、问诊、闻诊等方法，获取患者身体状况的第一手资料。</p>
                        <p><strong>断法</strong>（分析判断）：对收集到的信息进行综合分析，判断病位（病在哪里）、病性（病的性质）、病势（病的发展趋势）和病因（致病因素）。</p>
                    </div>

                    <p>诊与断是不可分割的。"诊而不断"等于白诊——收集了一堆信息却不知道意味着什么；"断而不诊"等于乱断——没有依据就下结论，更是危险。</p>

                    <div class="annotation">
                        <div class="annotation-label">💡 学习提示</div>
                        <p>本篇内容涉及较多的实践技能（尤其是脉诊和按诊），仅靠文字阅读难以完全掌握。建议将本篇作为理论框架的建立，日后有机会跟随有经验的老师实际操作，才能真正领会其中的微妙之处。</p>
                    </div>
                </div>

                <!-- ====== 第一章 诊法 ====== -->
                <div class="content-section" id="sec-2-1">
                    <h2>一、诊法概述</h2>
                    <p>中医传统将诊法归纳为"四诊"：<strong>望、闻、问、切</strong>。在针灸临床中，这四种诊法都会用到，但侧重点与内科有所不同。</p>
                    <p>针灸诊断最为倚重的两种方法是<strong>脉诊</strong>和<strong>按诊</strong>。脉诊帮助我们从整体上把握<span class="term" data-term="气血">气血</span>的运行状态；按诊则在局部寻找经脉上的异常反应点。两者一宏观、一微观，相互印证，构成针灸诊断的核心。</p>
                </div>

                <!-- 1. 脉诊 -->
                <div class="content-section" id="sec-2-1-1">
                    <h3>1. 脉诊</h3>
                    <p>脉诊，俗称"号脉"或"把脉"，是中医最具标志性的诊法之一。医生将手指按在患者手腕的桡动脉搏动处（寸口），通过感受脉搏的各种特征来判断体内的状况。</p>

                    <div class="key-point">
                        <div class="key-title">脉诊在针灸中的核心意义</div>
                        <p>在内科中，脉诊主要用于辨别<span class="term" data-term="脏腑">脏腑</span>的功能状态。而在针灸中，脉诊的核心意义在于：<strong>判断十二经脉中气血的盛衰虚实</strong>。</p>
                        <p>也就是说，通过脉诊，我们要回答一个关键问题：<em>哪条经脉（或哪几条经脉）的气血运行出了问题？是气血太过（实），还是气血不足（虚）？</em></p>
                    </div>

                    <h4>寸口脉的基本定位</h4>
                    <p>寸口脉位于手腕内侧桡动脉搏动处，分为三个部位：</p>
                    <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
                        <li><strong>寸</strong>（最靠近手掌的一段）——反映上焦（心、肺）的状况</li>
                        <li><strong>关</strong>（中间一段）——反映中焦（脾、胃、肝、胆）的状况</li>
                        <li><strong>尺</strong>（最靠近手肘的一段）——反映下焦（肾、膀胱、大小肠）的状况</li>
                    </ul>
                    <p>左手和右手的寸关尺所对应的脏腑略有不同。初学者不必急于记忆所有对应关系，先建立一个基本概念即可。</p>

                    <h4>常见脉象简介</h4>
                    <p>脉象是指医生指下感受到的脉搏特征。常见的脉象包括：</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🔍 浮脉与沉脉</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>浮脉</strong>：手指轻按即可感到明显脉动，重按反而减弱。一般提示病在<span class="term" data-term="表里">表</span>（体表、肌肤层面），常见于外感初期。</p>
                            <p><strong>沉脉</strong>：手指轻按不明显，重按才感到脉动。一般提示病在<span class="term" data-term="表里">里</span>（脏腑层面），常见于内伤疾病。</p>
                            <p>浮与沉反映的是病位的深浅。这在针灸中非常重要——病在表，取穴和手法都偏于浅层；病在里，则需要选择更能影响深层气血的穴位和手法。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🔍 迟脉与数脉</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>迟脉</strong>：脉搏跳动缓慢，一息（一次呼吸）不到四至（跳动不到四次）。一般提示<span class="term" data-term="寒热">寒证</span>——体内阳气不足，推动力减弱。</p>
                            <p><strong>数脉</strong>：脉搏跳动较快，一息五至以上。一般提示<span class="term" data-term="寒热">热证</span>——体内有热，气血运行加速。</p>
                            <p>迟与数反映的是病性的寒热。在针灸中，寒证多用补法、留针，以温通气血；热证多用泻法、浅刺，以疏泄邪热。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🔍 虚脉与实脉</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>虚脉</strong>：脉来无力，按之空虚。提示<span class="term" data-term="虚实">虚证</span>——<span class="term" data-term="正气">正气</span>不足。</p>
                            <p><strong>实脉</strong>：脉来有力，按之充实。提示<span class="term" data-term="虚实">实证</span>——<span class="term" data-term="邪气">邪气</span>有余。</p>
                            <p>虚与实直接决定了针灸的<span class="term" data-term="补泻">补泻</span>策略：虚则补之，实则泻之。</p>
                        </div>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">📖 给零基础读者的话</div>
                        <p>脉诊是中医最难掌握的技能之一，有"脉诊十年功"的说法。初学者不必追求一步到位，先理解脉诊的基本逻辑（判断表里、寒热、虚实），日后通过大量实践慢慢提高指下的感觉。</p>
                    </div>
                </div>

                <!-- 2. 按诊 -->
                <div class="content-section" id="sec-2-1-2">
                    <h3>2. 按诊</h3>
                    <p>如果说脉诊是从"整体"感知气血运行状态，那么按诊就是在"局部"寻找病变的蛛丝马迹。</p>
                    <p>按诊，是通过手指在患者体表的按压、循摸，发现指下存在的异常结构（在本书中称为"应结"），以及患者出现的压痛等现象，来判断病变反应的确切部位及性质。</p>

                    <div class="key-point">
                        <div class="key-title">什么是"应结"？</div>
                        <p>"应结"是气血瘀滞在经脉循行部位产生的异常反应。它们可以被医生的手指触摸到，是经脉气血运行异常的客观证据。应结既是诊断的依据（告诉我们哪里出了问题），往往也是治疗的靶点（在应结处施针可以直接疏通气血）。</p>
                    </div>

                    <h4>应结的六种常见形态</h4>
                    <p>根据书中的描述，临床常见的应结大致可分为以下六种：</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">① 结节</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>结节是最常见的应结形态，尤其多见于四肢内侧。大小形态不一，从芝麻大小的细碎小结节到条状大结节不等。触之有硬感，多为气血长期瘀滞所致。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">② 条索</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>条索呈线状或带状，顺着经脉循行方向分布。触之如绳索，滑动感较差。条索的出现常提示该经脉长期气血运行不畅。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">③ 僵硬</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>僵硬指的是某个区域的皮肤和皮下组织失去正常的弹性和柔软度，触之板硬。常见于颈肩部和腰背部，提示该区域的气血严重瘀滞。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">④ 柔弱</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>与僵硬相反，柔弱指的是某个区域过于松软、缺乏弹性，按之凹陷不能即时恢复。这通常提示该处的<span class="term" data-term="气血">气血</span>不足（虚证表现）。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">⑤ 凹陷</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>凹陷是指在经脉循行路线上发现局部凹陷的现象，周围组织正常而此处明显低洼。这也是气血亏虚的表现，提示该经脉的气血不能充盈此处。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">⑥ 压痛</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>压痛是按诊中最直观的发现——按压某一点时，患者出现明显的疼痛反应（有时患者自己都不知道这里痛，按了才发现）。压痛点往往就是气血瘀滞最明显的地方，也常常是针灸治疗的最佳靶点，中医称之为"阿是穴"。</p>
                        </div>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">🔍 临床价值</div>
                        <p>按诊在针灸临床中的价值怎么强调都不过分。很多时候，经验丰富的针灸医生仅凭按诊就能迅速定位问题所在经脉和穴位。建议初学者在日常生活中多在自己和家人身上练习循按，培养指下的敏感度。</p>
                    </div>
                </div>

                <!-- 3. 望诊与舌诊 -->
                <div class="content-section" id="sec-2-1-3">
                    <h3>3. 望诊与舌诊</h3>
                    <p>望诊，是通过观察患者的外在表现来判断内在状况的方法。中医有句话叫"<strong>望而知之谓之神</strong>"，说的是高明的医生一看就能大致判断病情。</p>

                    <h4>望诊的主要内容</h4>
                    <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
                        <li><strong>望神</strong>：观察患者的精神状态、眼神是否有光彩。神是<span class="term" data-term="正气">正气</span>的外在表现，有神说明正气尚足，无神说明正气衰弱。</li>
                        <li><strong>望色</strong>：观察面部和全身皮肤的颜色变化。面色红润为气血充盈，面色苍白为气血不足，面色发青为寒凝或气滞，面色发黄为脾虚湿困等。</li>
                        <li><strong>望形态</strong>：观察患者的体型、姿态、步态等。体型偏胖多痰湿，偏瘦多阴虚；弯腰驼背可能提示背部经脉问题等。</li>
                        <li><strong>望局部</strong>：观察发病部位的外观变化，如肿胀、发红、青紫等，可以直接判断局部的气血状态。</li>
                    </ul>

                    <h4>舌诊</h4>
                    <p>舌诊是望诊中最重要的一环，也是初学者最容易入门的诊法之一。舌头是人体内部状况的一面"镜子"，舌体的颜色、形状以及舌苔的厚薄、颜色都能反映体内的<span class="term" data-term="寒热">寒热</span><span class="term" data-term="虚实">虚实</span>。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🔍 舌诊速查要点</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>舌体颜色</strong>：</p>
                            <ul>
                                <li>淡红色 — 正常</li>
                                <li>淡白色 — 气血不足（虚证）</li>
                                <li>红色 — 有热</li>
                                <li>暗红/紫色 — 有瘀血</li>
                            </ul>
                            <p style="margin-top:var(--spacing-md);"><strong>舌苔</strong>：</p>
                            <ul>
                                <li>薄白苔 — 正常</li>
                                <li>白厚苔 — 寒湿</li>
                                <li>黄苔 — 有热</li>
                                <li>黄腻苔 — 湿热</li>
                                <li>无苔 — 阴虚</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 4. 问诊与闻诊 -->
                <div class="content-section" id="sec-2-1-4">
                    <h3>4. 问诊与闻诊</h3>
                    <p>问诊，就是通过询问患者来获取信息。看似简单，其实大有学问——会不会问、问什么、怎么问，直接影响诊断的准确性。</p>

                    <h4>问诊要点</h4>
                    <p>在针灸临床中，问诊通常关注以下几个方面：</p>
                    <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
                        <li><strong>主诉</strong>：患者最主要的不适是什么？持续多长时间？</li>
                        <li><strong>疼痛特征</strong>：如果有痛，是胀痛、刺痛、隐痛还是灼痛？位置固定还是游走？</li>
                        <li><strong>寒热偏好</strong>：怕冷还是怕热？喜欢温饮还是冷饮？</li>
                        <li><strong>饮食与二便</strong>：食欲如何？大便通畅还是溏泄？小便颜色？</li>
                        <li><strong>睡眠情绪</strong>：睡眠好不好？情绪是否易怒、抑郁？</li>
                        <li><strong>既往病史</strong>：以前有过什么重大疾病或长期用药？</li>
                    </ul>

                    <div class="annotation">
                        <div class="annotation-label">💡 问诊技巧</div>
                        <p>问诊时要注意避免"引导性提问"。比如不要问"你是不是怕冷？"（患者容易顺着你说"是"），而要问"你平时怕冷还是怕热？"让患者自己描述。好的问诊应该像"开放式的聊天"，让患者充分表达，医生从中提取关键信息。</p>
                    </div>

                    <h4>闻诊</h4>
                    <p>闻诊包括"听声音"和"嗅气味"两个方面。在针灸临床中，闻诊的使用相对较少，但有时也能提供重要线索：</p>
                    <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
                        <li>声音洪亮有力 → 多属实证</li>
                        <li>声音低微无力 → 多属虚证</li>
                        <li>咳嗽声重浊 → 多属痰湿</li>
                        <li>口中有异味 → 多属胃热或食积</li>
                    </ul>
                </div>

                <!-- ====== 第二章 断法 ====== -->
                <div class="content-section" id="sec-2-2">
                    <h2>二、断法</h2>
                    <p>通过"诊法"收集了大量信息后，接下来的关键问题是：<strong>如何把这些零散的信息整合起来，做出准确的判断？</strong></p>
                    <p>这就是"断法"的任务。断法是针灸诊断中分析、判断、决策的过程。作者将其归纳为四个维度：<strong>断病位、断病性、断病势、断病因</strong>。</p>

                    <div class="key-point">
                        <div class="key-title">断法四维</div>
                        <p>🎯 <strong>断病位</strong> — 病在哪里？（表里、上下、经脉、脏腑）<br>
                        🔬 <strong>断病性</strong> — 病是什么性质？（寒热、虚实）<br>
                        📈 <strong>断病势</strong> — 病的发展趋势如何？（进展、稳定、好转）<br>
                        🔎 <strong>断病因</strong> — 病是什么原因引起的？（外感、内伤、不内外因）</p>
                    </div>
                </div>

                <!-- 断病位 -->
                <div class="content-section" id="sec-2-2-1">
                    <h3>1. 断病位</h3>
                    <p>"断病位"回答的是"<strong>病在哪里？</strong>"的问题。这是针灸诊断中最重要的判断，因为病位直接决定了你要选哪条经、取哪个穴。</p>

                    <h4>病位的三个层次</h4>
                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">第一层：表里定位</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>首先判断疾病是在"<span class="term" data-term="表里">表</span>"还是在"<span class="term" data-term="表里">里</span>"。</p>
                            <p><strong>表证</strong>的特点：起病急、病程短、常有发热恶寒、头身疼痛等症状，多见于外感疾病初期。</p>
                            <p><strong>里证</strong>的特点：病程较长，症状多涉及脏腑功能（如消化不良、失眠、情绪异常等），脉象多沉。</p>
                            <p>表证与里证的治疗策略完全不同：表证宜浅刺、快速，以驱邪外出；里证宜选穴精准，以调整脏腑气血。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">第二层：上下定位</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>确定了表里之后，进一步判断病在"上"还是在"下"。</p>
                            <p>上焦（膈以上）— 涉及心、肺、头面</p>
                            <p>中焦（膈以下脐以上）— 涉及脾、胃、肝、胆</p>
                            <p>下焦（脐以下）— 涉及肾、膀胱、大小肠、子宫等</p>
                            <p>上下定位有助于缩小选经选穴的范围。比如判断"病在上焦"，则重点关注手太阴（肺经）和手少阴（心经）。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">第三层：经脉/脏腑定位</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>最精确的定位是判断病在哪条经脉或哪个脏腑。这需要综合脉诊（哪个寸关尺位置有异常）、按诊（哪条经脉上有应结）、症状分析（症状与哪条经脉的循行路线吻合）等多方面信息。</p>
                            <p>例如：侧头痛沿少阳经循行路线分布，脉弦，颞部有压痛 → 病位定在<strong>少阳经</strong>。</p>
                        </div>
                    </div>
                </div>

                <!-- 断病性 -->
                <div class="content-section" id="sec-2-2-2">
                    <h3>2. 断病性</h3>
                    <p>"断病性"回答的是"<strong>病是什么性质？</strong>"的问题。中医将疾病的性质归纳为两对基本属性：<span class="term" data-term="寒热">寒热</span>和<span class="term" data-term="虚实">虚实</span>。</p>

                    <h4>寒与热</h4>
                    <p><strong>寒证</strong>：怕冷、肢凉、喜温喜热、面色苍白或暗淡、脉迟。本质上是体内阳气不足或阴寒内盛。</p>
                    <p><strong>热证</strong>：怕热、口渴、面红、烦躁、小便黄、脉数。本质上是体内阳热亢盛或阴液不足。</p>

                    <h4>虚与实</h4>
                    <p><strong>虚证</strong>：<span class="term" data-term="正气">正气</span>不足的表现。疲乏无力、气短懒言、面色淡白、脉虚无力。治疗以"补"为主——补益正气。</p>
                    <p><strong>实证</strong>：<span class="term" data-term="邪气">邪气</span>有余的表现。胀满疼痛（拒按）、声高气粗、脉实有力。治疗以"泻"为主——祛除邪气。</p>

                    <div class="key-point">
                        <div class="key-title">寒热虚实的组合</div>
                        <p>临床实际中，寒热虚实往往不是单独出现的，而是组合出现。常见的组合包括：</p>
                        <p>• <strong>虚寒</strong>（阳虚）— 正气不足 + 寒象 → 需温补</p>
                        <p>• <strong>虚热</strong>（阴虚）— 阴液不足 + 虚热 → 需滋阴</p>
                        <p>• <strong>实寒</strong> — 寒邪侵袭 + 实象 → 需散寒</p>
                        <p>• <strong>实热</strong> — 热邪炽盛 + 实象 → 需清热</p>
                        <p>判断属于哪种组合，直接决定了针灸的<span class="term" data-term="补泻">补泻</span>方向和手法选择。</p>
                    </div>
                </div>

                <!-- 断病势 -->
                <div class="content-section" id="sec-2-2-3">
                    <h3>3. 断病势</h3>
                    <p>"断病势"回答的是"<strong>病在往哪个方向发展？</strong>"的问题。疾病不是静态的，它像一条河流，时刻在变化。</p>
                    <p>判断病势的意义在于：<strong>治疗不仅要应对当前的状态，还要预判未来的走向</strong>，做到"治未病"（在疾病发展到下一阶段之前就加以干预）。</p>

                    <h4>病势的几种走向</h4>
                    <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
                        <li><strong>由表入里</strong>：外感病不及时治疗，可能从体表深入脏腑。此时应果断祛邪，阻止病势深入。</li>
                        <li><strong>由里出表</strong>：体内的病邪通过发汗、出疹等方式向外排出，这是正气驱邪外出的好现象，不应阻止。</li>
                        <li><strong>由实转虚</strong>：长期的实证（如反复发炎）耗伤正气，逐渐变为虚证。治疗需从"泻"转为"补"。</li>
                        <li><strong>由虚致实</strong>：正气虚弱导致气血运行无力，继而产生瘀滞等实性病理产物。治疗需扶正与祛邪并举。</li>
                    </ul>

                    <div class="annotation">
                        <div class="annotation-label">🧠 思维方式</div>
                        <p>断病势考验的是医生的"动态思维"——不是像照相一样拍下当前的状态，而是像录像一样看到疾病从哪里来、往哪里去。这种思维方式需要在大量临床经验中逐渐培养。</p>
                    </div>
                </div>

                <!-- 断病因 -->
                <div class="content-section" id="sec-2-2-4">
                    <h3>4. 断病因</h3>
                    <p>"断病因"回答的是"<strong>病是怎么来的？</strong>"的问题。找到病因，治疗才能有的放矢。</p>
                    <p>中医将病因大致分为三类：</p>

                    <h4>（一）外感六淫</h4>
                    <p><span class="term" data-term="六淫">六淫</span>即风、寒、暑、湿、燥、火，是来自自然环境的致病因素。各有特点：</p>
                    <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
                        <li><strong>风</strong>：善行数变（症状游走不定、变化迅速），常与其他邪气合并致病</li>
                        <li><strong>寒</strong>：收引凝滞（引起收缩、疼痛），多见冬季</li>
                        <li><strong>暑</strong>：炎热耗气（中暑、出汗过多），仅见夏季</li>
                        <li><strong>湿</strong>：重浊粘滞（身体沉重、病程缠绵），多见长夏（夏秋之交）</li>
                        <li><strong>燥</strong>：干涩伤津（皮肤干燥、口干咽干），多见秋季</li>
                        <li><strong>火</strong>：炎上灼伤（高热、红肿），性质最为猛烈</li>
                    </ul>

                    <h4>（二）内伤七情</h4>
                    <p>七情即喜、怒、忧、思、悲、恐、惊，是情绪因素导致的内在失调。中医认为：</p>
                    <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
                        <li>怒伤肝 — 大怒使肝气上逆（头痛、面红、高血压）</li>
                        <li>喜伤心 — 过喜使心气涣散（注意力不集中、心悸）</li>
                        <li>思伤脾 — 过度思虑使脾气郁结（食欲差、消化不良）</li>
                        <li>悲忧伤肺 — 过度悲伤使肺气消耗（气短、易感冒）</li>
                        <li>恐伤肾 — 过度恐惧使肾气下陷（遗尿、腰膝酸软）</li>
                    </ul>

                    <div class="annotation">
                        <div class="annotation-label">📌 临床意义</div>
                        <p>在现代社会中，情绪因素致病的比例越来越高。很多"怎么都治不好"的慢性病，根源往往不在身体而在情绪。针灸在调节情绪方面有独特的优势——通过调整相关经脉的气血运行，可以缓解情绪失调带来的躯体症状。</p>
                    </div>

                    <h4>（三）不内外因</h4>
                    <p>既非外感也非情绪导致的致病因素，包括：饮食不节、劳逸失度、外伤、虫兽伤等。在现代生活中，最常见的不内外因大概是<strong>久坐不动</strong>和<strong>饮食无度</strong>了。</p>
                </div>

                <!-- ====== 章节测验 ====== -->
                <div class="content-section" id="sec-quiz">
                    <h2>📝 章节测验</h2>
                    <p>检验一下你对本篇内容的理解：</p>

                    <!-- 测验1 -->
                    <div class="quiz-block" id="quiz-2-1">
                        <div class="quiz-title">问题一：脉诊在针灸中的核心作用是什么？</div>
                        <div class="quiz-option">A. 判断具体是什么病（如感冒、胃炎等）</div>
                        <div class="quiz-option">B. 判断十二经脉中气血的运行状态（盛衰虚实）</div>
                        <div class="quiz-option">C. 判断患者的体质类型</div>
                        <div class="quiz-option">D. 判断患者的寿命长短</div>
                        <div class="quiz-feedback"></div>
                    </div>

                    <!-- 测验2 -->
                    <div class="quiz-block" id="quiz-2-2">
                        <div class="quiz-title">问题二："断病位"主要回答的是什么问题？</div>
                        <div class="quiz-option">A. 病有多严重？</div>
                        <div class="quiz-option">B. 病是什么原因引起的？</div>
                        <div class="quiz-option">C. 病在哪里？（表里、上下、哪条经脉）</div>
                        <div class="quiz-option">D. 病会不会传染？</div>
                        <div class="quiz-feedback"></div>
                    </div>

                    <!-- 测验3 -->
                    <div class="quiz-block" id="quiz-2-3">
                        <div class="quiz-title">问题三：按诊中发现的"应结"是什么？</div>
                        <div class="quiz-option">A. 气血瘀滞在体表的异常反应（结节、条索、压痛等）</div>
                        <div class="quiz-option">B. 正常的肌肉和骨骼结构</div>
                        <div class="quiz-option">C. 穴位的标准位置标志</div>
                        <div class="quiz-option">D. 患者的心理紧张导致的肌肉痉挛</div>
                        <div class="quiz-feedback"></div>
                    </div>
                </div>

                <!-- ====== 本章小结 ====== -->
                <div class="content-section" id="sec-summary">
                    <h2>本篇小结</h2>
                    <div class="key-point">
                        <div class="key-title">核心要点回顾</div>
                        <p>📋 <strong>诊法</strong>是信息收集的过程，针灸最重视<strong>脉诊</strong>（判断经脉气血盛衰）和<strong>按诊</strong>（寻找经脉应结）。</p>
                        <p>🔬 <strong>断法</strong>是分析判断的过程，从四个维度展开：</p>
                        <ul style="margin-left: var(--spacing-lg); line-height: 2;">
                            <li><strong>断病位</strong>：表里 → 上下 → 具体经脉/脏腑</li>
                            <li><strong>断病性</strong>：寒热、虚实及其组合</li>
                            <li><strong>断病势</strong>：疾病的发展方向与趋势</li>
                            <li><strong>断病因</strong>：外感六淫、内伤七情、不内外因</li>
                        </ul>
                        <p>🎯 诊断的最终目标是为<strong>选经选穴</strong>提供明确依据——知道了"哪里的问题、什么性质、怎么来的"，才能决定"治哪里、怎么治"。</p>
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
                    <a href="chapter1.html" class="chapter-nav-item">
                        <div class="nav-label">← 上一篇</div>
                        <div class="nav-title">第一篇：认识针灸</div>
                    </a>
                    <a href="chapter3.html" class="chapter-nav-item next">
                        <div class="nav-label">下一篇 →</div>
                        <div class="nav-title">第三篇：选穴之道</div>
                    </a>
                </div>

            </div>
        </div>
        `;
    }
};