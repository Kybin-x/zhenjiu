/* ============================================
   零起点学针灸 — 第三篇：选穴之道（内容数据）
   ============================================ */

const Chapter3Data = {

    // ==========================================
    // 章节元信息
    // ==========================================
    META: {
        id: 'chapter3',
        number: '叁',
        title: '选穴之道',
        subtitle: '选经 · 选穴 · 配穴',
        prevChapter: { url: 'chapter2.html', title: '第二篇：诊断之法' },
        nextChapter: { url: 'chapter4.html', title: '第四篇：实操入门' },
        totalSections: 12
    },

    // ==========================================
    // 侧边栏目录
    // ==========================================
    SIDEBAR_NAV: [
        { id: 'sec-intro', label: '引言', level: 1 },
        { id: 'sec-3-1', label: '一、选经', level: 1 },
        { id: 'sec-3-1-1', label: '1. 手三阴经', level: 2 },
        { id: 'sec-3-1-2', label: '2. 足三阴经', level: 2 },
        { id: 'sec-3-1-3', label: '3. 手三阳经', level: 2 },
        { id: 'sec-3-1-4', label: '4. 足三阳经', level: 2 },
        { id: 'sec-3-1-5', label: '5. 奇经八脉', level: 2 },
        { id: 'sec-3-1-6', label: '6. 选经的方法', level: 2 },
        { id: 'sec-3-2', label: '二、选穴', level: 1 },
        { id: 'sec-3-2-1', label: '1. 五输穴', level: 2 },
        { id: 'sec-3-2-2', label: '2. 特定穴', level: 2 },
        { id: 'sec-3-2-3', label: '3. 经验穴', level: 2 },
        { id: 'sec-3-3', label: '三、配穴', level: 1 },
        { id: 'sec-3-3-1', label: '1. 配穴原则', level: 2 },
        { id: 'sec-3-3-2', label: '2. 配穴方法', level: 2 },
        { id: 'sec-3-3-3', label: '3. 处方示例', level: 2 },
        { id: 'sec-quiz', label: '📝 章节测验', level: 1 },
    ],

    // ==========================================
    // 测验数据
    // ==========================================
    QUIZZES: [
        {
            id: 'quiz-3-1',
            correctIndex: 2,
            feedbackCorrect: '✅ 正确！选经的核心依据是诊断结果——通过"断病位"确定病在哪条经脉或哪个脏腑，然后选择对应的经脉进行治疗。这就是"诊断指导治疗"的具体体现。',
            feedbackWrong: '❌ 不完全正确。选经不是凭感觉或查表，而是基于对病位的准确判断。第二篇中学到的"断病位"直接决定了选哪条经。'
        },
        {
            id: 'quiz-3-2',
            correctIndex: 1,
            feedbackCorrect: '✅ 正确！五输穴是分布在四肢肘膝以下的特定穴位，以水流从小到大来比喻经气由浅入深的过程：井（指趾末端）→ 荥 → 输 → 经 → 合（肘膝附近）。',
            feedbackWrong: '❌ 五输穴不是分布在全身各处，而是特指四肢肘膝以下的穴位。它们以"井、荥、输、经、合"命名，比喻经气如水流般由小到大、由浅入深的过程。'
        },
        {
            id: 'quiz-3-3',
            correctIndex: 0,
            feedbackCorrect: '✅ 正确！"远近配穴"是最基本也最常用的配穴方法——在病变局部取穴（近部取穴）的同时，在远端经脉上也取穴（远部取穴），形成上下呼应，增强疗效。',
            feedbackWrong: '❌ "远近配穴"不是只取远端或只取近端，而是两者兼取。近部取穴直接作用于病变区域，远部取穴则通过经脉的联系调整气血运行，两者配合效果更佳。'
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
                    <div class="chapter-label">第三篇</div>
                    <h1>选穴之道：选经·选穴·配穴</h1>
                    <p class="chapter-intro">
                        经过前两篇的学习，我们已经知道了针灸的基本原理（第一篇）和如何诊断（第二篇）。
                        现在，诊断已经明确——我们知道了"病在哪里、什么性质"。
                        接下来的问题是：<strong>该选哪条经？取哪个穴？怎么组合搭配？</strong>
                        这就是本篇要解决的核心问题。
                    </p>
                </div>

                <!-- ====== 引言 ====== -->
                <div class="content-section" id="sec-intro">
                    <h2>引言：从诊断到治疗的桥梁</h2>
                    <p>如果把针灸治疗比作打仗，那么诊断就是侦察敌情，而选经选穴就是制定作战方案。侦察再精确，如果作战方案不对，仗也打不赢。</p>
                    <p>选经选穴的过程遵循一个严密的逻辑链条：</p>

                    <div class="key-point">
                        <div class="key-title">选穴三步走</div>
                        <p><strong>第一步：选经</strong> — 根据诊断确定的病位，选择对应的<span class="term" data-term="经脉">经脉</span>。（病在哪条经，就选哪条经）</p>
                        <p><strong>第二步：选穴</strong> — 在已选定的经脉上，选择最合适的穴位。（哪个穴最能解决当前问题）</p>
                        <p><strong>第三步：配穴</strong> — 将多个穴位组合搭配，形成完整的"针灸处方"。（单穴像单味药，配穴像方剂）</p>
                    </div>

                    <p>这三步是层层递进的关系：选经是大方向，选穴是具体落点，配穴是整体布局。任何一步出错，都可能影响疗效。</p>
                </div>

                <!-- ====== 第一章 选经 ====== -->
                <div class="content-section" id="sec-3-1">
                    <h2>一、选经</h2>
                    <p>"选经"是针灸处方的第一步，也是最关键的一步。方向对了，即使穴位选得不太精确，也能有一定效果；方向错了，穴位选得再好也是白费力气。</p>
                    <p>人体有<strong>十二正经</strong>和<strong>奇经八脉</strong>，我们先逐一了解十二正经的基本特征和主治范围，再讨论选经的方法。</p>

                    <div class="annotation">
                        <div class="annotation-label">📖 阅读建议</div>
                        <p>以下十二经脉的内容信息量较大。初次阅读时不必强求记住所有细节，重点理解每条经脉的<strong>走向</strong>和<strong>主治特点</strong>。随着后续章节的学习和反复查阅，这些内容会逐渐内化。</p>
                    </div>
                </div>

                <!-- 1. 手三阴经 -->
                <div class="content-section" id="sec-3-1-1">
                    <h3>1. 手三阴经</h3>
                    <p>手三阴经从胸走手，分布在上肢内侧，包括<strong>手太阴肺经、手厥阴心包经、手少阴心经</strong>。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🫁 手太阴肺经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于中焦（胃），向下联络大肠，回过来沿胃上行穿过膈肌，入属于肺。从肺系（气管、喉咙）横出腋下，沿上臂内侧前缘下行，过肘窝，沿前臂内侧桡骨一侧，入寸口（脉诊处），过鱼际，直出拇指内侧端。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>呼吸系统疾病：咳嗽、气喘、胸闷</li>
                                <li>咽喉疾病：咽痛、声音嘶哑</li>
                                <li>上肢前外侧疼痛</li>
                                <li>皮肤疾病（肺主皮毛）</li>
                            </ul>
                            <p><strong>常用穴位</strong>：尺泽、列缺、太渊、鱼际、少商</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">💜 手厥阴心包经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于胸中，出属心包，向下穿过膈肌，依次联络上、中、下三焦。其分支从胸中出走胁部，沿上臂内侧中线下行，过肘窝，沿前臂中线入掌中，至中指尖端。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>心血管疾病：心悸、胸闷、心痛</li>
                                <li>精神神志疾病：失眠、烦躁、癫狂</li>
                                <li>胃病（心包经与胃有密切联系）</li>
                                <li>上肢内侧中线疼痛</li>
                            </ul>
                            <p><strong>常用穴位</strong>：曲泽、郄门、间使、内关、大陵、劳宫</p>
                            <p><em>提示：心包被称为"心之外卫"，代心受邪。临床上很多原本属于心的病症，实际操作时常取心包经的穴位。内关穴是全身最常用的穴位之一。</em></p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">❤️ 手少阴心经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于心中，出属心系，下穿膈肌联络小肠。其支脉从心系上挟咽喉，系目系。直行主干从心系至肺，下出腋下，沿上臂内侧后缘下行，过肘，沿前臂内侧尺骨一侧，到手掌后小指侧，出小指内侧端。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>心系疾病：心悸、心痛</li>
                                <li>精神神志：失眠、健忘、精神恍惚</li>
                                <li>上肢内侧后缘疼痛</li>
                                <li>手心热、口渴</li>
                            </ul>
                            <p><strong>常用穴位</strong>：极泉、少海、通里、神门、少冲</p>
                        </div>
                    </div>
                </div>

                <!-- 2. 足三阴经 -->
                <div class="content-section" id="sec-3-1-2">
                    <h3>2. 足三阴经</h3>
                    <p>足三阴经从足走腹（胸），分布在下肢内侧，包括<strong>足太阴脾经、足厥阴肝经、足少阴肾经</strong>。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🟡 足太阴脾经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于足大趾末端，沿大趾内侧赤白肉际上行，过内踝前缘，沿小腿内侧正中线上行，在内踝上8寸处交出足厥阴肝经前面，沿膝股内侧前缘上行，进入腹部，入属于脾，联络于胃。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>消化系统：腹胀、腹泻、食欲不振、消化不良</li>
                                <li>水液代谢：水肿、湿重</li>
                                <li>妇科疾病（脾统血）</li>
                                <li>下肢内侧前缘疼痛</li>
                                <li>肌肉无力、倦怠乏力</li>
                            </ul>
                            <p><strong>常用穴位</strong>：隐白、太白、公孙、三阴交、阴陵泉、血海</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🌿 足厥阴肝经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于足大趾背部毫毛处，沿足背上行至内踝前1寸处，上行至内踝上8寸处交出足太阴脾经后面，沿膝股内侧中线上行，绕阴器，入少腹，挟胃，属肝络胆，上贯膈，布胁肋，沿喉咙上行，连目系。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>肝胆疾病：胁痛、口苦、黄疸</li>
                                <li>情志疾病：抑郁、易怒、烦躁</li>
                                <li>生殖泌尿系统：月经不调、疝气、小便不利</li>
                                <li>眼科疾病（肝开窍于目）</li>
                                <li>巅顶头痛</li>
                            </ul>
                            <p><strong>常用穴位</strong>：大敦、行间、太冲、中封、蠡沟、曲泉</p>
                            <p><em>提示：太冲穴是临床使用频率极高的穴位，尤其在情绪相关的疾病中常用。"太冲配合谷"（四关穴）是经典配伍。</em></p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">💧 足少阴肾经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于小趾下方，斜向足心（涌泉），出于舟骨粗隆下，沿内踝后方，分支入足跟中，上行沿小腿内侧后缘，沿大腿内侧后缘上行，贯脊入属于肾，联络膀胱。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>泌尿生殖系统：遗精、阳痿、月经不调、不孕</li>
                                <li>水液代谢：水肿、小便异常</li>
                                <li>呼吸系统（肾主纳气）：气喘（呼多吸少型）</li>
                                <li>腰膝酸软、耳鸣耳聋（肾开窍于耳）</li>
                                <li>咽喉干痛（经脉循喉咙）</li>
                            </ul>
                            <p><strong>常用穴位</strong>：涌泉、然谷、太溪、照海、复溜</p>
                        </div>
                    </div>
                </div>

                <!-- 3. 手三阳经 -->
                <div class="content-section" id="sec-3-1-3">
                    <h3>3. 手三阳经</h3>
                    <p>手三阳经从手走头，分布在上肢外侧，包括<strong>手阳明大肠经、手少阳三焦经、手太阳小肠经</strong>。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🟠 手阳明大肠经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于食指末端（商阳），沿食指桡侧上行，出第一、二掌骨之间（合谷），沿前臂外侧前缘上行，至肘外侧（曲池），沿上臂外侧前缘上行至肩，经颈部至面颊，入下齿中，旁出挟口鼻。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>头面五官疾病：牙痛、鼻塞、咽喉肿痛、面瘫</li>
                                <li>发热、感冒（阳明多气多血）</li>
                                <li>肠道疾病：腹痛、腹泻、便秘</li>
                                <li>上肢外侧前缘疼痛</li>
                                <li>皮肤疾病（与肺经表里相合）</li>
                            </ul>
                            <p><strong>常用穴位</strong>：商阳、合谷、阳溪、手三里、曲池、肩髃、迎香</p>
                            <p><em>提示：合谷穴被称为"面口合谷收"，是治疗头面部疾病的第一要穴。曲池穴退热效果显著。</em></p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🔥 手少阳三焦经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于无名指末端（关冲），沿手背上行，经腕背、前臂外侧中线、肘尖，沿上臂外侧中线上行，经肩，入缺盆，分布于膻中，联络心包，下穿膈肌，依次属上、中、下<span class="term" data-term="三焦">三焦</span>。其支脉上行至耳后，经耳上方至面颊。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>侧头痛、耳部疾病：耳鸣、耳聋、中耳炎</li>
                                <li>眼科疾病（经脉至目外眦）</li>
                                <li>咽喉肿痛</li>
                                <li>水肿、小便不利（三焦主水道）</li>
                                <li>上肢外侧中线疼痛</li>
                            </ul>
                            <p><strong>常用穴位</strong>：关冲、中渚、阳池、外关、支沟、翳风、丝竹空</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">☀️ 手太阳小肠经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于小指外侧末端（少泽），沿手背尺侧上行，经腕、前臂外侧后缘、肘内侧（过肘尖与肱骨内上髁之间），沿上臂外侧后缘上行，出肩关节，绕行肩胛部，交于大椎，入缺盆，联络心脏，沿食管下行穿过膈肌，到胃，下行属小肠。其支脉上行至面颊，到目外眦，进入耳中。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>头面疾病：目痛、耳聋、咽喉肿痛</li>
                                <li>精神神志：癫狂</li>
                                <li>肩臂外侧后缘疼痛</li>
                                <li>颈椎病（经脉过颈项部）</li>
                                <li>哺乳期乳汁不通（少泽穴）</li>
                            </ul>
                            <p><strong>常用穴位</strong>：少泽、后溪、阳谷、小海、天宗、听宫</p>
                        </div>
                    </div>
                </div>

                <!-- 4. 足三阳经 -->
                <div class="content-section" id="sec-3-1-4">
                    <h3>4. 足三阳经</h3>
                    <p>足三阳经从头走足，分布在下肢外侧和躯干的前、侧、后面，包括<strong>足阳明胃经、足少阳胆经、足太阳膀胱经</strong>。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🌾 足阳明胃经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于鼻旁（迎香），上行至鼻根，旁入目眶，下行沿鼻外侧入上齿中，环绕嘴唇，沿下颌角前方，经面部上行至额角。其直行主干从下颌沿颈前外侧下行，经锁骨上窝，沿胸前正中线旁开4寸下行，过腹部，沿大腿前侧、膝盖外侧、小腿前外侧下行，至足背，入足第二趾外侧端。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>消化系统（核心主治）：胃痛、呕吐、腹胀、腹泻、便秘</li>
                                <li>头面五官：前额头痛、牙痛、面瘫、目赤</li>
                                <li>发热性疾病（阳明多气多血）</li>
                                <li>精神疾病：狂躁</li>
                                <li>下肢前外侧疼痛</li>
                            </ul>
                            <p><strong>常用穴位</strong>：四白、地仓、颊车、下关、头维、天枢、足三里、上巨虚、丰隆、解溪、内庭</p>
                            <p><em>提示：足三里是全身最重要的保健穴之一，民间有"常灸足三里，胜吃老母鸡"的说法。天枢穴是治疗肠道疾病的要穴。</em></p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">🌙 足少阳胆经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于目外眦（瞳子髎），上行至额角，下行至耳后，沿颈侧下行至肩上，入缺盆。其直行主干从耳后入耳中出耳前，至目外眦后方。另一分支从缺盆下行经胸胁侧面，过季肋，沿大腿外侧中线下行，经膝外侧、小腿外侧，至足背，入足第四趾外侧端。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>侧头痛、偏头痛（经脉循行路线）</li>
                                <li>眼科：目赤肿痛、视物模糊</li>
                                <li>耳部：耳鸣、耳聋</li>
                                <li>胁肋疼痛、口苦</li>
                                <li>情绪疾病：抑郁、易怒（与肝经相表里）</li>
                                <li>下肢外侧疼痛</li>
                            </ul>
                            <p><strong>常用穴位</strong>：瞳子髎、听会、率谷、风池、肩井、日月、环跳、风市、阳陵泉、悬钟、足临泣、侠溪</p>
                            <p><em>提示：风池穴是治疗头部疾病的要穴。阳陵泉是筋会穴，治疗一切与筋（肌腱、韧带）相关的疾病。</em></p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">💠 足太阳膀胱经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>走向</strong>：起于目内眦（睛明），上行至额，交会于巅顶（百会）。其直行主干从巅顶入络脑，沿颈后下行，沿脊柱两旁下行（分两线，一线旁开1.5寸，一线旁开3寸），经腰、臀、大腿后侧、膝后（委中），沿小腿后侧下行，经外踝后方，沿足背外侧至小趾外侧端。</p>
                            <p><strong>主治特点</strong>：</p>
                            <ul>
                                <li>后背疼痛：颈椎病、腰背痛、坐骨神经痛</li>
                                <li>头项疾病：后头痛、项强（落枕）</li>
                                <li>脏腑疾病（背俞穴）：各脏腑对应的背俞穴可以治疗相应脏腑的疾病</li>
                                <li>泌尿系统：小便不利、遗尿</li>
                                <li>眼科：目痛、流泪</li>
                                <li>精神疾病：癫痫、癫狂</li>
                            </ul>
                            <p><strong>常用穴位</strong>：睛明、攒竹、天柱、大杼、风门、肺俞、心俞、膈俞、肝俞、脾俞、胃俞、肾俞、大肠俞、委中、承山、昆仑、申脉、至阴</p>
                            <p><em>提示：膀胱经是全身穴位最多的经脉（67穴），其背俞穴系统是针灸治疗脏腑病的重要工具。"腰背委中求"是选穴名言。</em></p>
                        </div>
                    </div>
                </div>

                <!-- 5. 奇经八脉 -->
                <div class="content-section" id="sec-3-1-5">
                    <h3>5. 奇经八脉</h3>
                    <p>除了十二正经，人体还有八条"奇经"——<strong>任脉、督脉、冲脉、带脉、阴维脉、阳维脉、阴跷脉、阳跷脉</strong>。</p>
                    <p>奇经八脉不像十二正经那样有固定的脏腑络属关系，它们的作用更像是"湖泊"或"水库"——对十二正经的<span class="term" data-term="气血">气血</span>起到蓄积、调节和溢流的作用。</p>

                    <div class="key-point">
                        <div class="key-title">临床最常用的两条奇经</div>
                        <p><strong>任脉</strong>：行于腹部正中线，为"阴脉之海"，总督一身之阴经。主治腹部、生殖、泌尿系统疾病。常用穴位：中极、关元、气海、神阙、中脘、膻中。</p>
                        <p><strong>督脉</strong>：行于背部正中线，为"阳脉之海"，总督一身之阳经。主治腰背、头脑、精神疾病。常用穴位：长强、命门、大椎、百会、人中。</p>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">💡 简化记忆</div>
                        <p>初学者可以先抓住一个简单的规律：<strong>任脉管前面（腹），督脉管后面（背）</strong>。前面的问题找任脉的穴，后面的问题找督脉的穴。其余六条奇经在临床中使用相对较少，可以在进阶学习时再深入了解。</p>
                    </div>
                </div>

                <!-- 6. 选经的方法 -->
                <div class="content-section" id="sec-3-1-6">
                    <h3>6. 选经的方法</h3>
                    <p>了解了各条经脉的基本特征后，关键问题是：<strong>面对一个具体的病人，如何确定选哪条经？</strong></p>
                    <p>作者在书中归纳了三种主要的选经方法：</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">方法一：循经辨证选经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>这是最基本也最常用的方法。核心思路是：<strong>病在哪条经脉的循行路线上，就选哪条经。</strong></p>
                            <p>例如：</p>
                            <ul>
                                <li>前额头痛 → 足阳明胃经循行经过前额 → 选胃经</li>
                                <li>侧头痛 → 足少阳胆经循行经过侧头 → 选胆经</li>
                                <li>后头痛 → 足太阳膀胱经循行经过后头 → 选膀胱经</li>
                                <li>巅顶头痛 → 足厥阴肝经的经脉上达巅顶 → 选肝经</li>
                            </ul>
                            <p>仅仅一个"头痛"，根据部位不同，选经就完全不同。这就是为什么第一篇要强调"理解原理比记住穴位更重要"。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">方法二：脏腑辨证选经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>当疾病主要表现为脏腑功能失调时，根据<strong>病变脏腑所对应的经脉</strong>来选经。</p>
                            <p>例如：</p>
                            <ul>
                                <li>咳嗽气喘（肺的问题）→ 选手太阴肺经</li>
                                <li>胃痛呕吐（胃的问题）→ 选足阳明胃经</li>
                                <li>心悸失眠（心的问题）→ 选手少阴心经 或 手厥阴心包经</li>
                                <li>腰膝酸软、耳鸣（肾的问题）→ 选足少阴肾经</li>
                            </ul>
                            <p>此方法的关键在于准确的脏腑辨证——你必须先判断清楚"病在哪个脏腑"，然后再选择对应的经脉。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">方法三：表里经选经</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>十二经脉中，每两条经脉构成一对"表里关系"：</p>
                            <ul>
                                <li>肺经（太阴）↔ 大肠经（阳明）</li>
                                <li>心经（少阴）↔ 小肠经（太阳）</li>
                                <li>心包经（厥阴）↔ 三焦经（少阳）</li>
                                <li>脾经（太阴）↔ 胃经（阳明）</li>
                                <li>肾经（少阴）↔ 膀胱经（太阳）</li>
                                <li>肝经（厥阴）↔ 胆经（少阳）</li>
                            </ul>
                            <p>表里经之间的气血是相通的。因此，当一条经的穴位不方便取用，或者效果不理想时，可以取其<strong>表里经的穴位</strong>作为替代或补充。</p>
                            <p>例如：肺经的问题，除了取肺经穴位，还可以配合大肠经的穴位（如合谷、曲池），往往能增强疗效。</p>
                        </div>
                    </div>

                    <div class="key-point">
                        <div class="key-title">选经的核心原则</div>
                        <p>无论用哪种方法，选经的核心原则只有一个：<strong>哪条经脉与当前疾病关系最密切，就选哪条经。</strong></p>
                        <p>实际临床中，三种方法往往综合运用。例如一个"胃痛伴侧头痛"的患者，既要选足阳明胃经（脏腑辨证），又要选足少阳胆经（循经辨证），两条经结合治疗。</p>
                    </div>
                </div>

                <!-- ====== 第二章 选穴 ====== -->
                <div class="content-section" id="sec-3-2">
                    <h2>二、选穴</h2>
                    <p>确定了经脉之后，下一步就是在该经脉上选择具体的穴位。一条经脉上通常有数十个穴位，应该选哪个？</p>
                    <p>这就需要了解穴位的分类和各类穴位的特性。</p>
                </div>

                <!-- 1. 五输穴 -->
                <div class="content-section" id="sec-3-2-1">
                    <h3>1. 五输穴</h3>
                    <p>五输穴是分布在四肢<strong>肘膝关节以下</strong>的五个特定穴位，是针灸选穴的核心穴组。</p>
                    <p>古人以水流来比喻<span class="term" data-term="经脉">经脉</span>中<span class="term" data-term="气">气</span>的运行，从指（趾）端到肘（膝），经气如水流般由小到大、由浅入深：</p>

                    <div class="key-point">
                        <div class="key-title">五输穴：井 → 荥 → 输 → 经 → 合</div>
                        <p><strong>井穴</strong>（指/趾末端）— 如泉水初出。经气所出之处，气势最微。急救、开窍常用。</p>
                        <p><strong>荥穴</strong>（指/趾后）— 如水流尚微。经气初出，气势渐增。主治热证（"荥主身热"）。</p>
                        <p><strong>输穴</strong>（掌/跗后）— 如水流渐盛。经气灌注之处。主治关节痛和时令病。五脏经的输穴即是原穴。</p>
                        <p><strong>经穴</strong>（腕踝上方）— 如水流通畅。经气通行之处。主治咳喘、寒热。</p>
                        <p><strong>合穴</strong>（肘/膝附近）— 如百川归海。经气汇合深入之处。主治脏腑病（"合治内府"）。</p>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">📖 简化理解</div>
                        <p>初学者可以这样理解：穴位越靠近指尖，治疗越偏"急症"和"浅表"；越靠近肘膝，治疗越偏"慢性"和"深部脏腑"。这个规律与第一篇中"经脉原理"所讲的气血运行方向是一致的。</p>
                    </div>
                </div>

                <!-- 2. 特定穴 -->
                <div class="content-section" id="sec-3-2-2">
                    <h3>2. 特定穴</h3>
                    <p>除了五输穴，还有一些具有特殊功能的穴位，被称为"特定穴"。了解这些特定穴的功能，能大大提高选穴的效率。</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">原穴</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>原穴是脏腑原气经过和留止的穴位，每条经脉各有一个原穴，多分布在腕踝附近。</p>
                            <p><strong>功能</strong>：诊断和治疗本经脏腑的疾病。原穴既能补虚，又能泻实，是该经脏腑最具代表性的穴位。</p>
                            <p>例如：太渊（肺经原穴）、太冲（肝经原穴）、太溪（肾经原穴）。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">络穴</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>络穴是<span class="term" data-term="络脉">络脉</span>从经脉分出处的穴位，每条经脉各有一个络穴。</p>
                            <p><strong>功能</strong>：沟通表里两经。当表里两经同时有问题时，取络穴往往能同时兼顾。</p>
                            <p>经典配伍："原络配穴法"——在病变经脉取原穴，在其表里经取络穴，两穴配合使用。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">背俞穴与募穴</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>背俞穴</strong>：分布在背部膀胱经上，每个脏腑各有一个对应的背俞穴。如肺俞、心俞、肝俞、脾俞、肾俞等。主要用于治疗相应脏腑的疾病，尤其适合<strong>慢性</strong>和<strong>虚证</strong>。</p>
                            <p><strong>募穴</strong>：分布在胸腹部，也是每个脏腑各有一个对应的募穴。如中府（肺之募穴）、中脘（胃之募穴）、关元（小肠之募穴）等。主要用于治疗相应脏腑的疾病，尤其适合<strong>急性</strong>和<strong>实证</strong>。</p>
                            <p>经典配伍："俞募配穴法"——前面取募穴，后面取背俞穴，前后夹击，适用于脏腑疾病。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">八会穴</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>八会穴是指<span class="term" data-term="气血">气、血</span>、筋、脉、骨、髓、脏、腑八种组织精气聚会的穴位：</p>
                            <ul>
                                <li>脏会 — 章门（肝经）</li>
                                <li>腑会 — 中脘（任脉）</li>
                                <li>气会 — 膻中（任脉）</li>
                                <li>血会 — 膈俞（膀胱经）</li>
                                <li>筋会 — 阳陵泉（胆经）</li>
                                <li>脉会 — 太渊（肺经）</li>
                                <li>骨会 — 大杼（膀胱经）</li>
                                <li>髓会 — 悬钟（胆经）</li>
                            </ul>
                            <p>凡与某种组织相关的疾病，可以优先选用对应的八会穴。例如：一切与"筋"（肌腱、韧带）有关的问题，首选阳陵泉。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">郄穴</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>郄穴是经脉上气血深聚的穴位，每条经脉各有一个。</p>
                            <p><strong>功能</strong>：主治本经的急症和痛证。阴经的郄穴多治血证（如出血），阳经的郄穴多治急性疼痛。</p>
                            <p>例如：孔最（肺经郄穴）— 治咯血、咽喉肿痛急症；郄门（心包经郄穴）— 治急性心痛。</p>
                        </div>
                    </div>
                </div>

                <!-- 3. 经验穴 -->
                <div class="content-section" id="sec-3-2-3">
                    <h3>3. 经验穴</h3>
                    <p>除了根据穴位分类来选穴，历代医家在长期临床实践中还总结出了一些"经验穴"——某些穴位对某些疾病有特别好的疗效，虽然理论上不一定能完全解释清楚，但确实屡用屡效。</p>

                    <div class="key-point">
                        <div class="key-title">经典选穴歌诀</div>
                        <p>古人将常用经验穴编成歌诀便于记忆，最著名的是<strong>《四总穴歌》</strong>：</p>
                        <blockquote>
                            肚腹三里留，<br>
                            腰背委中求，<br>
                            头项寻列缺，<br>
                            面口合谷收。
                        </blockquote>
                        <p>这四句话概括了四大穴位的主治范围：</p>
                        <ul>
                            <li><strong>足三里</strong>（胃经）— 治疗一切腹部疾病</li>
                            <li><strong>委中</strong>（膀胱经）— 治疗一切腰背疾病</li>
                            <li><strong>列缺</strong>（肺经）— 治疗一切头项疾病</li>
                            <li><strong>合谷</strong>（大肠经）— 治疗一切面口疾病</li>
                        </ul>
                    </div>

                    <div class="annotation">
                        <div class="annotation-label">💡 学以致用</div>
                        <p>经验穴是前人留下的宝贵财富，但使用时不能机械套用。比如"面口合谷收"，合谷确实擅治面口疾病，但如果辨证发现问题不在阳明经而在少阳经，则合谷的效果就未必最佳。经验穴要在辨证论治的框架下灵活运用，才能发挥最大价值。</p>
                    </div>
                </div>

                <!-- ====== 第三章 配穴 ====== -->
                <div class="content-section" id="sec-3-3">
                    <h2>三、配穴</h2>
                    <p>如果说选经是确定"哪条路"，选穴是确定"哪个点"，那么配穴就是将这些"点"有机地组合起来，形成一个完整的<strong>针灸处方</strong>。</p>
                    <p>配穴的水平，很大程度上体现了一个针灸医生的功力。高明的配穴如同高明的用药——每一味药（每一个穴）都有其用意，相互配合，增强疗效，减少副作用。</p>
                </div>

                <!-- 1. 配穴原则 -->
                <div class="content-section" id="sec-3-3-1">
                    <h3>1. 配穴原则</h3>

                    <div class="key-point">
                        <div class="key-title">配穴三大原则</div>
                        <p><strong>① 少而精</strong>：穴位不是越多越好。穴位太多，气血分散，反而影响疗效。一般一次治疗取穴5-10个为宜，精简而有力。</p>
                        <p><strong>② 主次分明</strong>：处方中应有主穴（直接针对核心病机的穴位）和配穴（辅助增强效果或兼顾次要症状的穴位），主次分明，目的明确。</p>
                        <p><strong>③ 因人因时因地制宜</strong>：同样的疾病，在不同的人身上、不同的季节、不同的地域，配穴可能需要做调整。</p>
                    </div>
                </div>

                <!-- 2. 配穴方法 -->
                <div class="content-section" id="sec-3-3-2">
                    <h3>2. 配穴方法</h3>
                    <p>常用的配穴方法有以下几种：</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">① 远近配穴（最常用）</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>在病变<strong>局部</strong>（近部）取穴的同时，在<strong>远端</strong>经脉上也取穴，形成上下呼应。</p>
                            <p><strong>近部取穴</strong>：在疾病发生部位及其附近取穴，直接作用于病变区域。</p>
                            <p><strong>远部取穴</strong>：在远离病变部位的经脉上取穴（通常在四肢），通过经脉的联系来调节气血。</p>
                            <p>例如：治疗胃痛</p>
                            <ul>
                                <li>近部取穴：中脘（腹部，胃之募穴）</li>
                                <li>远部取穴：足三里（小腿，胃经合穴）</li>
                            </ul>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">② 前后配穴（俞募配穴）</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>前面取<strong>募穴</strong>，后面取<strong>背俞穴</strong>，前后夹击，特别适合治疗脏腑疾病。</p>
                            <p>例如：治疗哮喘</p>
                            <ul>
                                <li>前面：中府（肺之募穴）</li>
                                <li>后面：肺俞（肺之背俞穴）</li>
                            </ul>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">③ 上下配穴</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>上肢和下肢各取穴位，使上下经气互相贯通。</p>
                            <p>例如：治疗口角歪斜（面瘫）</p>
                            <ul>
                                <li>上取：合谷（手阳明大肠经）</li>
                                <li>下取：太冲（足厥阴肝经）</li>
                            </ul>
                            <p>合谷 + 太冲 合称"四关穴"，是最经典的上下配穴，具有行气活血、疏肝理气的作用，应用极广。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">④ 左右配穴</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>左右同名穴同时取用，或者"左病取右、右病取左"（缪刺法），利用经脉左右对称的特点来调节气血。</p>
                            <p>大多数情况下，针灸取穴都是双侧同取。但有时左右单侧取穴也有特殊的临床意义。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">⑤ 表里经配穴</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p>在相表里的两条经脉上各取穴位，利用表里经之间气血相通的关系来增强疗效。</p>
                            <p>最经典的是<strong>"原络配穴法"</strong>：</p>
                            <ul>
                                <li>在病经取<strong>原穴</strong>（治疗本经问题）</li>
                                <li>在表里经取<strong>络穴</strong>（沟通两经气血）</li>
                            </ul>
                            <p>例如：肺经有病 → 取太渊（肺经原穴）+ 偏历（大肠经络穴）</p>
                        </div>
                    </div>
                </div>

                <!-- 3. 处方示例 -->
                <div class="content-section" id="sec-3-3-3">
                    <h3>3. 处方示例</h3>
                    <p>将选经、选穴、配穴综合运用，我们来看几个完整的针灸处方示例：</p>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 示例一：风寒感冒</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>诊断</strong>：恶寒重发热轻，鼻塞流清涕，头痛，身痛，脉浮紧 → 风寒表证</p>
                            <p><strong>选经思路</strong>：病在表（太阳经为首），兼有肺系症状（鼻塞） → 选膀胱经、肺经</p>
                            <p><strong>处方</strong>：</p>
                            <ul>
                                <li><strong>风池</strong>（胆经）— 疏风散寒的要穴</li>
                                <li><strong>大椎</strong>（督脉）— 退热、振奋阳气</li>
                                <li><strong>风门</strong>（膀胱经）— 祛风散寒</li>
                                <li><strong>列缺</strong>（肺经）— 宣通肺气、通鼻窍</li>
                                <li><strong>合谷</strong>（大肠经）— 疏散表邪</li>
                            </ul>
                            <p><strong>配穴逻辑</strong>：风池+大椎+风门（近部取穴，直接作用于颈背部），列缺+合谷（远部取穴，通过经脉疏散表邪）。远近配合，上下兼顾。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 示例二：肝气郁结型失眠</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>诊断</strong>：入睡困难，多梦易醒，情绪烦躁，胁肋胀满，脉弦 → 肝气郁结</p>
                            <p><strong>选经思路</strong>：病在肝（脏腑辨证）→ 选肝经为主，配心经/心包经（心主神明）</p>
                            <p><strong>处方</strong>：</p>
                            <ul>
                                <li><strong>太冲</strong>（肝经原穴）— 疏肝理气</li>
                                <li><strong>合谷</strong>（大肠经）— 与太冲组成"四关穴"，行气解郁</li>
                                <li><strong>神门</strong>（心经原穴）— 安神定志</li>
                                <li><strong>内关</strong>（心包经络穴）— 宽胸理气、宁心安神</li>
                                <li><strong>百会</strong>（督脉）— 升阳安神</li>
                                <li><strong>安眠</strong>（经外奇穴）— 直接治疗失眠的经验穴</li>
                            </ul>
                            <p><strong>配穴逻辑</strong>：太冲+合谷（四关穴疏肝理气），神门+内关（安神定志），百会+安眠（直接针对失眠症状）。既治本（疏肝解郁），又治标（安神助眠）。</p>
                        </div>
                    </div>

                    <div class="expand-block">
                        <div class="expand-header">
                            <span class="expand-title">📋 示例三：脾胃虚弱型消化不良</span>
                            <span class="expand-icon">▶</span>
                        </div>
                        <div class="expand-body">
                            <p><strong>诊断</strong>：食欲不振，餐后腹胀，大便溏薄，面色萎黄，倦怠乏力，脉缓无力 → 脾胃虚弱</p>
                            <p><strong>选经思路</strong>：病在脾胃 → 选脾经、胃经为主</p>
                            <p><strong>处方</strong>：</p>
                            <ul>
                                <li><strong>足三里</strong>（胃经合穴）— 健脾和胃，扶正培元</li>
                                <li><strong>中脘</strong>（任脉，胃之募穴）— 调理中焦</li>
                                <li><strong>天枢</strong>（胃经）— 调理肠道</li>
                                <li><strong>脾俞</strong>（膀胱经）— 健脾益气</li>
                                <li><strong>胃俞</strong>（膀胱经）— 和胃消滞</li>
                                <li><strong>太白</strong>（脾经原穴）— 补脾益气</li>
                            </ul>
                            <p><strong>配穴逻辑</strong>：中脘+脾俞+胃俞（前后配穴/俞募配穴），足三里+太白（远部取穴，分别从胃经和脾经补益），天枢（局部取穴调理肠道）。以补法为主。</p>
                        </div>
                    </div>
                </div>

                <!-- ====== 章节测验 ====== -->
                <div class="content-section" id="sec-quiz">
                    <h2>📝 章节测验</h2>
                    <p>检验一下你对本篇内容的理解：</p>

                    <!-- 测验1 -->
                    <div class="quiz-block" id="quiz-3-1">
                        <div class="quiz-title">问题一：选经的核心依据是什么？</div>
                        <div class="quiz-option">A. 凭医生的经验和直觉</div>
                        <div class="quiz-option">B. 查表对照症状</div>
                        <div class="quiz-option">C. 诊断结果——通过"断病位"确定病在哪条经脉或脏腑</div>
                        <div class="quiz-option">D. 按固定的模板套用</div>
                        <div class="quiz-feedback"></div>
                    </div>

                    <!-- 测验2 -->
                    <div class="quiz-block" id="quiz-3-2">
                        <div class="quiz-title">问题二：关于五输穴，以下说法正确的是？</div>
                        <div class="quiz-option">A. 五输穴分布在全身各处</div>
                        <div class="quiz-option">B. 五输穴分布在四肢肘膝以下，以水流比喻经气由浅入深</div>
                        <div class="quiz-option">C. 五输穴只有五个穴位</div>
                        <div class="quiz-option">D. 五输穴只用于治疗四肢疾病</div>
                        <div class="quiz-feedback"></div>
                    </div>

                    <!-- 测验3 -->
                    <div class="quiz-block" id="quiz-3-3">
                        <div class="quiz-title">问题三："远近配穴"的含义是？</div>
                        <div class="quiz-option">A. 在病变局部取穴（近部）的同时在远端经脉取穴（远部），上下呼应</div>
                        <div class="quiz-option">B. 只在远离病变部位的地方取穴</div>
                        <div class="quiz-option">C. 在两个距离很远的穴位之间连线</div>
                        <div class="quiz-option">D. 先在近处扎针，再在远处扎针</div>
                        <div class="quiz-feedback"></div>
                    </div>
                </div>

                <!-- ====== 本章小结 ====== -->
                <div class="content-section" id="sec-summary">
                    <h2>本篇小结</h2>
                    <div class="key-point">
                        <div class="key-title">核心要点回顾</div>
                        <p>🧭 <strong>选经</strong>是方向——根据诊断结果（病位），通过循经辨证、脏腑辨证、表里经三种方法确定治疗经脉。</p>
                        <p>📍 <strong>选穴</strong>是落点——了解五输穴、特定穴（原穴、络穴、背俞穴、募穴、八会穴、郄穴）和经验穴的特性，在已选经脉上选择最合适的穴位。</p>
                        <p>🧩 <strong>配穴</strong>是组合——遵循"少而精、主次分明、因人制宜"的原则，运用远近配穴、前后配穴、上下配穴、表里经配穴等方法，组成完整的针灸处方。</p>
                        <p>💡 <strong>核心逻辑链</strong>：诊断（病位+病性） → 选经 → 选穴 → 配穴 → 针灸处方</p>
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
                    <a href="chapter2.html" class="chapter-nav-item">
                        <div class="nav-label">← 上一篇</div>
                        <div class="nav-title">第二篇：诊断之法</div>
                    </a>
                    <a href="chapter4.html" class="chapter-nav-item next">
                        <div class="nav-label">下一篇 →</div>
                        <div class="nav-title">第四篇：实操入门</div>
                    </a>
                </div>

            </div>
        </div>
        `;
    }
};