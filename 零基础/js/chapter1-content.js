/* ============================================
   零起点学针灸 — 第一篇内容数据
   本文件只包含内容模板和数据，不包含任何功能逻辑
   ============================================ */

var defined = defined || {};

var defined = defined || {};

var Chapter1Data = (function () {
    'use strict';

    // ==========================================
    // 章节元信息
    // ==========================================
    const META = {
        id: 'chapter1',
        number: '壹',
        label: '第一篇',
        title: '认识针灸：针道与针理',
        intro: '在学习具体的穴位和手法之前，我们首先要回答一个根本性的问题：<strong>针灸为什么能治病？</strong>本篇分为"针道"和"针理"两大部分，前者从哲学层面建立认知框架，后者从原理层面阐明其机制。',
        prevPage: { url: 'index.html', label: '返回', title: '首页' },

        nextPage: { url: 'chapter2.html', label: '下一篇', title: '第二篇：诊断之法' },

        totalSections: 5
    };

    // ==========================================
    // 侧边栏导航数据
    // ==========================================
    const SIDEBAR_NAV = [
        { id: 'sec-intro', label: '引言', level: 1 },
        { id: 'sec-1-1', label: '一、针道', level: 1 },
        { id: 'sec-1-1-1', label: '1. 人体：形气之辨', level: 2 },
        { id: 'sec-1-1-2', label: '2. 疾病：正气不平', level: 2 },
        { id: 'sec-1-1-3', label: '3. 医生：无为而治', level: 2 },
        { id: 'sec-1-2', label: '二、针理', level: 1 },
        { id: 'sec-1-2-1', label: '1. 经脉原理', level: 2 },
        { id: 'sec-1-2-2', label: '2. 分形原理', level: 2 },
        { id: 'sec-1-2-3', label: '3. 应象原理', level: 2 },
        { id: 'sec-1-2-4', label: '4. 调气', level: 2 },
        { id: 'sec-quiz', label: '📝 章节测验', level: 1 },
    ];

    // ==========================================
    // 测验数据
    // ==========================================
    const QUIZZES = [
        {
            id: 'quiz-1',
            question: '1. 中医认为疾病的本质是什么？',
            options: [
                'A. 细菌或病毒的入侵',
                'B. 器官结构的损坏',
                'C. 正气的不平衡',
                'D. 营养物质的缺乏'
            ],
            correctIndex: 2,
            feedbackCorrect: '✅ 正确！中医认为疾病的本质是"正气不平"——气的运行失去了平衡。',
            feedbackWrong: '❌ 不太对。中医认为疾病的本质是"正气不平"（选项C）。虽然细菌、损伤等也是致病因素，但中医更关注正气的状态。'
        },
        {
            id: 'quiz-2',
            question: '2. "无为而治"在针灸中的含义是？',
            options: [
                'A. 不需要做任何治疗',
                'B. 不妄为，顺应人体自愈力，适度干预',
                'C. 只用最简单的治疗方法',
                'D. 让患者自己恢复，医生不干预'
            ],
            correctIndex: 1,
            feedbackCorrect: '✅ 正确！"无为"不是不做，而是不妄为，顺应人体自身的规律来施治。',
            feedbackWrong: '❌ "无为而治"不是不治疗，而是不妄为——顺应人体自愈力，恰到好处地干预（选项B）。'
        },
        {
            id: 'quiz-3',
            question: '3. 针灸能够治疗内脏疾病，主要依赖于哪个原理？',
            options: [
                'A. 分形原理',
                'B. 应象原理',
                'C. 经脉原理——经脉内连脏腑、外络肢节',
                'D. 心理暗示'
            ],
            correctIndex: 2,
            feedbackCorrect: '✅ 正确！经脉"内连脏腑，外络肢节"，是体表与内脏之间的桥梁，这是针灸治疗内脏病的理论基础。',
            feedbackWrong: '❌ 正确答案是C。经脉内连脏腑、外络肢节，是针灸能够通过体表穴位影响内脏功能的核心依据。'
        },
        {
            id: 'quiz-4',
            question: '4. "分形原理"在针灸中的应用是？',
            options: [
                'A. 只能在生病的部位扎针',
                'B. 身体局部可以反映整体信息，因此可以在耳朵、手等局部治疗全身疾病',
                'C. 需要在全身所有穴位都扎针才有效',
                'D. 分形与针灸无关'
            ],
            correctIndex: 1,
            feedbackCorrect: '✅ 正确！分形原理说明身体局部可以反映整体信息，这是耳针、头针等疗法的理论基础。',
            feedbackWrong: '❌ 正确答案是B。分形原理的核心是"局部反映整体"，因此可以通过耳朵、手等局部来治疗全身疾病。'
        }
    ];

    // ==========================================
    // 各节内容HTML模板
    // ==========================================
    const SECTIONS = {};

    // ---------- 引言 ----------
    SECTIONS['sec-intro'] = `
        <h2>引言：为什么要先学"道"？</h2>
        <p>很多人学针灸，一开始就想知道"哪个穴治头痛"、"哪个穴治失眠"。这种急于求成的心态可以理解，但这样学到的知识是零散的、僵化的。</p>
        <p>想象一下：如果你只知道"合谷穴治头痛"，那么当患者告诉你"我头痛，但按合谷没用"的时候，你就束手无策了。但如果你理解了针灸治病的<em>原理</em>，你就能分析这个头痛是什么原因引起的、应该走哪条经、用哪个穴、怎么操作。</p>

        <div class="key-point">
            <div class="key-title">本篇学习目标</div>
            <p>✅ 理解中医对人体的基本认识（形与气）<br>
            ✅ 理解疾病的本质（正气不平）<br>
            ✅ 理解医生的角色（无为而治）<br>
            ✅ 掌握针灸四大原理（经脉、分形、应象、调气）</p>
        </div>
    `;

    // ---------- 一、针道 ----------
    SECTIONS['sec-1-1'] = `
        <h2>一、针道</h2>
        <p>"道"是中国哲学中最根本的概念，指的是事物运行的根本规律。"针道"，就是针灸之道——关于针灸最根本、最核心的认识。</p>
        <p>作者将"针道"浓缩为三个问题：<strong>认识人体</strong>、<strong>认识疾病</strong>、<strong>认识医生的角色</strong>。这三个问题看似简单，实则是整本书的哲学根基。</p>
    `;

    // ---------- 1.1 人体：形气之辨 ----------
    SECTIONS['sec-1-1-1'] = `
        <h3>1. 人体：形气之辨</h3>
        <p>要理解针灸，首先要理解中医是怎样看待人体的。中医认为，人体由两大部分组成：<span class="term" data-term="形">形</span>和<span class="term" data-term="气">气</span>。</p>

        <div class="key-point">
            <div class="key-title">核心概念：形与气</div>
            <p><strong>形</strong>，是人体有形的物质结构——肌肉、骨骼、血液、脏腑等一切看得见、摸得着的实体。</p>
            <p><strong>气</strong>，是维持人体生命活动的无形动力——它推动血液运行、温暖肢体、防御外邪、维持脏腑功能。</p>
        </div>

        <p>打个比方：如果把人体比作一辆汽车，"形"就是车身、轮胎、发动机等零件，"气"就是让这辆车跑起来的电力或燃油动力。零件再完整，没有动力也跑不起来；反过来，有动力但零件损坏了，车也开不了。</p>

        <div class="annotation">
            <div class="annotation-label">🔍 零基础注释</div>
            <p>这里的"气"不是我们日常说的空气，而是中医特有的概念。你可以暂时把它理解为"人体的能量"或"生命的动力"。虽然不完全等同，但作为入门理解已经足够。</p>
        </div>

        <p>书中进一步指出，<span class="term" data-term="形">形</span>和<span class="term" data-term="气">气</span>之间的关系是：<strong>形为气之宅，气为形之用</strong>。也就是说：</p>
        <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
            <li><strong>形是气的住所</strong>——气必须依附于形体才能存在和发挥作用</li>
            <li><strong>气是形的功能</strong>——形体必须有气的推动才能进行生命活动</li>
        </ul>

        <p>理解了形与气的关系，我们就能理解一个重要的临床问题：<strong>针灸主要调的是"气"，而不是"形"。</strong></p>
        <p>当一个人骨折了（形的损伤），你需要接骨、打石膏，这是外科的范畴。但当一个人气血运行不畅、脏腑功能失调（气的问题），针灸就大有用武之地了。</p>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：日常生活中的"形气之辨"</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>作者在书中用了一个非常生动的例子来说明形与气的关系——<strong>人一天的生活</strong>：</p>
                <p>早晨醒来，是<span class="term" data-term="气">气</span>由内向外"升发"的过程，人从沉睡（气收藏于内）转为清醒（气向外运动）。</p>
                <p>白天活动、思考、说话、工作，都是气在不断向外运作的表现。</p>
                <p>到了晚上，人困倦了，是气消耗后需要收敛回藏的信号。睡眠就是气回归内里、修复身体的过程。</p>
                <p>吃饭是给身体补充物质基础（形），消化吸收后转化为气血。排便则是排出代谢废物（形的更新）。</p>
                <p>所以中医看一个人是否健康，很关注这些基本生活状态：<em>睡眠好不好？吃饭香不香？大小便正不正常？</em>——这些都是观察"气"运行是否正常的窗口。</p>
            </div>
        </div>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：形气之辨——中西医对话</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>书中附文《形气之辨，对话中西》用对话体探讨了一个深刻的问题：<strong>结构和功能，到底谁先谁后？</strong></p>
                <p>西医的思路是"先有结构，后有功能"——有了心脏这个器官（结构），才有泵血的功能。</p>
                <p>中医的思路则是"先有气聚，后有形成"——一颗受精卵发育为胎儿的过程中，是DNA引导的"聚集功能"在先，心肺等实体结构在后。正如书中所比喻：DNA更像一个"笔记本"，记录的信息（功能）比本子的材质（结构）更为根本。</p>
                <p>这个差异直接影响到对疾病的认识：西医看到的是器质性病变（结构异常），中医看到的是气的异常聚集（功能失调）。两种视角各有所长，但针灸治疗主要基于后者的认知框架。</p>
            </div>
        </div>
    `;

    // ---------- 1.2 疾病：正气不平 ----------
    SECTIONS['sec-1-1-2'] = `
        <h3>2. 疾病：正气不平</h3>
        <p>理解了人体的基本构成，下一个问题是：<strong>疾病是什么？</strong></p>
        <p>中医的回答非常简洁：<strong>疾病的本质，就是<span class="term" data-term="正气">正气</span>的不平衡。</strong></p>

        <div class="key-point">
            <div class="key-title">核心观点：正气不平</div>
            <p>健康的状态，是正气在体内<strong>平衡、和谐地运行</strong>——该升的升，该降的降，该出的出，该入的入。</p>
            <p>疾病的状态，就是这种平衡被打破了——<strong>气的运行出现了偏差</strong>，或太过，或不及，或该升而降，或该降反升。</p>
        </div>

        <p>这个认识非常重要，因为它直接决定了针灸治疗的思路：<strong>既然疾病是气的不平衡，那治疗就是让气重新恢复平衡。</strong></p>

        <p>打个比方：正常人的气像平静流淌的河水，各条支流分布均匀，流速适中。生病了，就好比某条支流被堵住了，或者某处水流太急、某处太缓。治疗要做的，不是往河里"加水"或"放水"，而是<strong>疏通堵塞、调节流速</strong>，让河流恢复自然流淌的状态。</p>

        <div class="annotation">
            <div class="annotation-label">🔍 零基础注释</div>
            <p>你可能会问：那<span class="term" data-term="邪气">邪气</span>呢？比如感冒是"受了风寒"，不是外来的邪气入侵吗？<br>
            没错，中医也重视邪气的因素。但书中强调的核心观点是：<strong>邪气之所以能侵入，根本原因是正气出了问题</strong>（"正气存内，邪不可干"）。就好比一座城墙，只有城墙自身出现了裂缝（正气不足），外敌才能乘虚而入。所以治疗的关键，还是在于调整正气。</p>
        </div>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：常见病的"气不平"解读</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>用"正气不平"的视角来看几种常见情况：</p>
                <p><strong>头痛：</strong>往往是气上行太过（"上冲"），或者说气聚集在头部而不能顺利下行、分散。所以很多针灸治头痛的方法是"引气下行"。</p>
                <p><strong>失眠：</strong>正常情况下，晚上人的气应该收敛入里（阳入阴），这样才能安眠。失眠往往是气浮在外面、收不回去（"阳不入阴"）。</p>
                <p><strong>胃痛：</strong>胃气正常应该是"降"的，食物从上往下走。如果胃气上逆（该降反升），就会出现胃痛、恶心、呕吐等症状。</p>
                <p><strong>手脚冰凉：</strong>气有温煦的功能。四肢冰冷说明气到达四肢末端的力量不足（气不够或者通路不畅），温煦功能在局部打了折扣。</p>
            </div>
        </div>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：虚实辨别——气不平的两种类型</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>气的不平衡，归纳起来不外乎两大类：</p>
                <p><strong><span class="term" data-term="虚实">虚</span>——正气不足。</strong>好比河水水位下降，流量减少。表现为乏力、面白、气短、怕冷等。治疗方向是"补"——帮助正气充盈。</p>
                <p><strong><span class="term" data-term="虚实">实</span>——邪气有余或气的壅滞。</strong>好比河道堵塞，水流不畅。表现为疼痛（通则不痛，痛则不通）、胀满、发热等。治疗方向是"泻"——疏通壅滞，排出邪气。</p>
                <p>当然，临床中很多情况是虚实夹杂的——既有正气不足，又有邪气留滞。这就需要更精细的辨别和灵活的治疗策略，在后面的"断法"章节会详细讲解。</p>
            </div>
        </div>
    `;

    // ---------- 1.3 医生：无为而治 ----------
    SECTIONS['sec-1-1-3'] = `
        <h3>3. 医生：无为而治</h3>
        <p>理解了人体和疾病之后，第三个关键问题来了：<strong>医生（针灸师）的角色是什么？</strong></p>
        <p>作者给出了一个看似"消极"实则深刻的答案：<strong>无为而治</strong>。</p>

        <div class="key-point">
            <div class="key-title">核心理念：无为而治</div>
            <p><strong>"无为"不是"不做"，而是"不妄为"。</strong></p>
            <p>医生的工作不是把自己的意志强加给人体，而是<strong>顺应人体自身的规律</strong>，帮助它恢复正常的气血运行。人体本身有强大的自我修复能力，医生要做的是<strong>为这种自愈力创造条件、清除障碍</strong>。</p>
        </div>

        <p>这个理念在针灸治疗中非常重要。一根细小的银针，它本身并没有什么药效，不含任何化学成分。那它怎么治病？</p>
        <p>答案是：<strong>针只是一个"信号"或"刺激"</strong>，它通过刺激穴位，传递一个信息给人体的调控系统（在中医看来就是经络系统），提醒身体"这里有问题，需要调整"。之后，<strong>真正完成治疗的，是人体自己</strong>。</p>

        <blockquote>
            针灸医生就像一个经验丰富的交通指挥员：他不需要自己去搬运货物（那是气血的工作），也不需要修路（那是身体自我修复的事），他只需要在关键路口做出正确的指挥（选准穴位、用对手法），交通就能恢复通畅。
        </blockquote>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：为什么"无为"比"有为"更难？</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>"无为而治"意味着医生必须有极高的认知水平。你必须：</p>
                <p><strong>第一</strong>，清楚地知道人体正常时应该是什么状态（知常）</p>
                <p><strong>第二</strong>，准确地判断当前的状态偏离了正常多少、偏在哪里（知变）</p>
                <p><strong>第三</strong>，了解身体自身想要恢复的方向是什么（知势）</p>
                <p><strong>第四</strong>，恰到好处地给予帮助，不多不少（知度）</p>
                <p>这就好比治水：大禹之所以伟大，不是因为他比父亲鲧更卖力，而是他选择了"疏"而不是"堵"——他顺应了水的本性。针灸的"无为而治"，正是这种智慧的体现。</p>
            </div>
        </div>

        <div class="annotation">
            <div class="annotation-label">💡 编者扩展</div>
            <p>书中提到的"无为而治"理念，与现代医学中的"最小干预原则"（Minimal Intervention）有异曲同工之妙。现代循证医学也越来越强调：不要过度治疗，要尊重人体的自愈能力。只是中医在两千多年前就提出了这一思想，令人惊叹。</p>
        </div>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：书中原文的"剑宗与气宗"之辩</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>作者在附文中以金庸小说《笑傲江湖》中华山派"剑宗与气宗"之争为比喻，讨论了针灸学习中的一个重要问题：</p>
                <p><strong>剑宗</strong>——重视具体的招式（穴位处方、针刺手法），追求速成，"来一个病治一个病"。</p>
                <p><strong>气宗</strong>——重视内功修炼（基础理论、辨证思维），讲求循序渐进，"理通则法明"。</p>
                <p>作者的立场很明确：初学者应该走"气宗"路线，先把"道"和"理"搞清楚，再学具体操作。否则就会"知其然而不知其所以然"，遇到变化就不知所措。这也正是本书把"针道"和"针理"放在最前面的原因。</p>
            </div>
        </div>
    `;

    // ---------- 二、针理 ----------
    SECTIONS['sec-1-2'] = `
        <h2>二、针理</h2>
        <p>如果说"针道"解决的是<em>世界观</em>问题——怎样看待人体、疾病和医疗，那么"针理"解决的就是<em>方法论</em>问题——针灸具体是通过什么原理来发挥作用的。</p>
        <p>作者将针灸的原理概括为四个方面：<strong>经脉原理</strong>、<strong>分形原理</strong>、<strong>应象原理</strong>和<strong>调气</strong>。</p>
    `;

    // ---------- 2.1 经脉原理 ----------
    SECTIONS['sec-1-2-1'] = `
        <h3>1. 经脉原理</h3>
        <p><span class="term" data-term="经脉">经脉</span>是针灸学最核心的概念之一。简单来说，经脉就是<span class="term" data-term="气血">气血</span>在体内运行的主要通道。</p>

        <div class="key-point">
            <div class="key-title">经脉的基本认识</div>
            <p>人体有<strong>十二条正经</strong>，分别对应心、肝、脾、肺、肾等<span class="term" data-term="脏腑">脏腑</span>，在体内外形成一个网络系统。经脉<strong>内连脏腑，外络肢节</strong>，将人体连接成一个有机整体。</p>
        </div>

        <p>经脉原理的核心要点是：<strong>经脉是联系体表与脏腑的桥梁</strong>。正因为有了这条"桥梁"，我们才能通过在体表的穴位上扎针，来影响体内脏腑的功能。</p>

        <p>举个例子：胃有问题时，为什么可以扎小腿上的"足三里"穴？因为足三里所在的"足阳明胃经"这条经脉，从头面部一直延伸到脚趾，中间经过胸腹部时正好联系着胃。所以刺激这条经脉上的穴位，"信号"就能沿经脉传导到胃，帮助调整胃的功能。</p>

        <div class="annotation">
            <div class="annotation-label">🔍 零基础注释</div>
            <p>你可能会问：经脉到底是什么物质？能看见吗？这个问题至今仍在探讨之中。目前主流观点认为，经脉不是一条像血管那样的实体管道，而更像是一种<strong>功能性的路径</strong>——气血倾向于沿特定路线运行的规律。这个话题在本书后面的"杂谈"章节有更深入的讨论。</p>
        </div>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：十二经脉速览</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>十二经脉按<span class="term" data-term="阴阳">阴阳</span>属性和所属脏腑分为：</p>
                <p><strong>手三阴经：</strong>手太阴肺经、手厥阴心包经、手少阴心经</p>
                <p><strong>手三阳经：</strong>手阳明大肠经、手少阳三焦经、手太阳小肠经</p>
                <p><strong>足三阴经：</strong>足太阴脾经、足厥阴肝经、足少阴肾经</p>
                <p><strong>足三阳经：</strong>足阳明胃经、足少阳胆经、足太阳膀胱经</p>
                <p>其中，<strong>阴经属脏、阳经属腑</strong>。每一对脏腑通过经脉的络属关系构成表里关系。比如肺（阴）与大肠（阳）相表里，它们的经脉在手指端交接。</p>
            </div>
        </div>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：经脉的流注顺序</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>十二经脉中的气血按照一定的顺序依次流注，形成一个循环，称为<strong>"经脉流注"</strong>：</p>
                <p>肺经 → 大肠经 → 胃经 → 脾经 → 心经 → 小肠经 → 膀胱经 → 肾经 → 心包经 → 三焦经 → 胆经 → 肝经 → 再回到肺经……</p>
                <p>这个循环在24小时内完成一周。中医据此形成了"子午流注"理论——认为一天中的不同时辰，气血分别旺盛于不同的经脉。比如：</p>
                <p>• 寅时（凌晨3-5点）：气血旺于肺经。所以有些肺病患者容易在此时段咳嗽加重。</p>
                <p>• 辰时（上午7-9点）：气血旺于胃经。所以此时吃早餐最有利于消化吸收。</p>
                <p>• 子时（夜晚23-1点）：气血旺于胆经。中医建议此时应当已经入睡，有利于胆汁分泌和身体修复。</p>
            </div>
        </div>
    `;

    // ---------- 2.2 分形原理 ----------
    SECTIONS['sec-1-2-2'] = `
        <h3>2. 分形原理</h3>
        <p><span class="term" data-term="分形">分形</span>是一个源自数学的概念，指的是<strong>局部与整体具有自相似性</strong>。自然界中有很多分形现象：一棵大树的树枝形态与整棵树相似，一朵花椰菜的每一小块与整朵花椰菜形态相同。</p>

        <div class="key-point">
            <div class="key-title">分形原理在针灸中的体现</div>
            <p>人体也具有分形特征：<strong>身体的某个局部可以反映整体的信息</strong>。</p>
            <p>最典型的例子是<strong>耳朵</strong>——把耳朵看成一个倒置的胎儿，耳垂对应头部，耳轮对应脊柱，各个区域对应不同的身体部位和脏腑。这就是耳穴疗法的理论基础。</p>
        </div>

        <p>这一原理在针灸中有重要的实用价值：</p>
        <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
            <li>耳朵是人体的一个"分形"，可以通过耳穴治疗全身疾病</li>
            <li>手和脚也是分形的体现——手掌/脚掌可以反映全身信息</li>
            <li>头面部同样具有这种全息映射的特点</li>
        </ul>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：从分形到全息——理解"以小见大"</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>分形原理有时也被称为"全息原理"或"生物全息律"，由山东大学的张颖清教授在上世纪80年代提出。</p>
                <p>他发现人体的每一个相对独立的部分（如第二掌骨侧、前臂、小腿等）都包含着整体的信息。在每一个局部，都可以找到与全身各部位对应的反应点。</p>
                <p>虽然这一理论在学术界仍有争议，但在临床上，基于分形/全息原理的治疗方法（如耳针、头针、腕踝针等）确实取得了不少疗效，已被广泛应用。</p>
                <p>理解了分形原理，你就能理解为什么有时候脚疼可以扎手上的穴位——因为手和脚在身体的"分形地图"上有着对应关系。</p>
            </div>
        </div>

        <div class="annotation">
            <div class="annotation-label">💡 编者扩展</div>
            <p>分形的概念由数学家本华·曼德博（Benoît Mandelbrot）在1975年正式提出。他发现，自然界中的海岸线、云朵、雪花、血管分支等都具有分形特征——在不同尺度上呈现出自相似性。将分形思维引入人体认识，是中医取象类比思维与现代科学一个有趣的交汇点。</p>
        </div>
    `;

    // ---------- 2.3 应象原理 ----------
    SECTIONS['sec-1-2-3'] = `
        <h3>3. 应象原理</h3>
        <p><span class="term" data-term="应象">应象</span>，顾名思义，就是通过"象"（外在表现、特征）来建立事物之间的对应关系。</p>

        <div class="key-point">
            <div class="key-title">什么是"取象类比"</div>
            <p>中医有一种独特的思维方式叫<strong>"取象类比"</strong>——如果两个事物具有相似的"象"（特征），就认为它们之间存在某种关联或对应关系。</p>
            <p>这是一种<strong>以象测藏</strong>的方法：通过观察外在的"象"，来推测内在的变化。</p>
        </div>

        <p>举几个例子帮助理解：</p>
        <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
            <li><strong>核桃仁</strong>形似大脑——中医认为核桃能补脑（以形补形的民间说法虽不完全科学，但反映了应象思维）</li>
            <li><strong>面色发红</strong>——对应体内有"热"的象</li>
            <li><strong>脉象弦紧</strong>——像紧绷的弦，对应体内有"寒"或"痛"的状态</li>
        </ul>

        <p>在针灸中，应象原理的应用非常广泛。比如：</p>
        <p><strong>穴位的命名</strong>往往蕴含着"象"的信息——"合谷"意为两山合抱的谷地（拇指和食指之间的虎口），"太溪"意为大的溪流（对应肾经气血如溪水流淌），这些名称暗示了穴位的位置特征和功能属性。</p>

        <div class="annotation">
            <div class="annotation-label">💡 编者扩展</div>
            <p>应象思维在现代看来可能显得"不够科学"，但它其实是一种<strong>模式识别</strong>的方法。现代科学也大量使用类比和模式识别——物理学中的"类比推理"、生物学中的"趋同进化"、人工智能中的"模式匹配"，都是类似的思维方式。区别只在于：中医的"象"更加感性和整体化，现代科学的模式更加量化和分析化。两种思维各有所长。</p>
        </div>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：五行应象</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p><span class="term" data-term="五行">五行</span>学说是"应象"思维最系统的体现。古人将自然界万事万物按照木、火、土、金、水五种属性进行归类：</p>
                <p><strong>木</strong> → 春天、东方、风、肝、胆、青色、酸味、怒……具有生长、升发、条达的特性</p>
                <p><strong>火</strong> → 夏天、南方、暑、心、小肠、红色、苦味、喜……具有温热、上升的特性</p>
                <p><strong>土</strong> → 长夏、中央、湿、脾、胃、黄色、甘味、思……具有承载、生化的特性</p>
                <p><strong>金</strong> → 秋天、西方、燥、肺、大肠、白色、辛味、悲……具有收敛、清洁的特性</p>
                <p><strong>水</strong> → 冬天、北方、寒、肾、膀胱、黑色、咸味、恐……具有寒冷、向下、润藏的特性</p>
                <p>这种归类看似粗糙，但它提供了一个<strong>系统化的关联思维框架</strong>。比如：肝属木，木的特性是条达舒展，所以肝的功能也是"主疏泄"——保持气血通畅。如果肝的疏泄功能失常（"木气郁结"），人就会出现情绪抑郁、胸肋胀闷等症状。</p>
            </div>
        </div>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：五行生克与疾病传变</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>五行之间存在<strong>相生</strong>和<strong>相克</strong>两种基本关系：</p>
                <p><strong>相生：</strong>木生火、火生土、土生金、金生水、水生木——依次促进、滋养。</p>
                <p><strong>相克：</strong>木克土、土克水、水克火、火克金、金克木——依次制约、抑制。</p>
                <p>这种关系在临床中用来解释疾病的传变。比如：</p>
                <p>• "肝木克脾土"：情绪不畅（肝）→ 影响食欲消化（脾胃）。生气后吃不下饭，就是典型的"木克土"。</p>
                <p>• "肾水不足，不能涵木"：肾阴虚 → 肝阳上亢 → 头痛头晕高血压。治疗时除了平肝，还要补肾（"滋水涵木"）。</p>
                <p>理解五行生克，就能理解为什么治一个脏的病，有时候要从另一个脏入手——这是"治未病"和整体思维的体现。</p>
            </div>
        </div>
    `;

    // ---------- 2.4 调气 ----------
    SECTIONS['sec-1-2-4'] = `
        <h3>4. 调气</h3>
        <p>前面我们说了，疾病是"<span class="term" data-term="正气">正气</span>不平"，治疗就是让正气恢复平衡。那么，针灸具体是怎样"调气"的呢？</p>

        <div class="key-point">
            <div class="key-title">调气——针灸治疗的核心目标</div>
            <p><span class="term" data-term="调气">调气</span>，就是通过针刺等方法，调整人体<span class="term" data-term="气">气</span>的运行状态，使之恢复正常的<strong>升降出入</strong>。</p>
            <p>气的基本运动形式有四种：<strong>升</strong>（向上）、<strong>降</strong>（向下）、<strong>出</strong>（向外）、<strong>入</strong>（向内）。健康时这四种运动处于动态平衡；生病时，某种运动太过或不及。</p>
        </div>

        <p>调气的具体方法，就涉及到后面章节要学的<span class="term" data-term="补泻">补泻</span>手法：</p>
        <ul style="margin: var(--spacing-md) 0 var(--spacing-md) var(--spacing-xl); line-height: 2.2;">
            <li><strong>补法</strong>：增强不足的气（气虚了，让它充实起来）</li>
            <li><strong>泻法</strong>：消减有余的气（气壅滞了，让它疏散开来）</li>
        </ul>

        <p>如何判断是该"补"还是该"泻"？这就需要后面学习的"诊法"和"断法"来解决了。</p>

        <p>这里还有一个重要的概念——<strong><span class="term" data-term="得气">得气</span></strong>。得气是针刺的关键标志：当针刺入穴位后，如果患者感到酸、麻、胀、重等感觉，就说明"得气"了——针已经激发了经气，身体开始响应这个"信号"。</p>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：针灸是怎样发出"信号"的？</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>现代研究对针灸的作用机制有一些初步的解释，虽然还不完全，但可以帮助理解：</p>
                <p><strong>神经系统角度：</strong>针刺刺激皮肤和肌肉中的感受器，通过神经传导到脊髓和大脑，引发一系列调节反应（如释放内啡肽、调节自律神经等）。</p>
                <p><strong>内分泌角度：</strong>针刺可以影响多种激素和神经递质的分泌，从而调节免疫、消炎、镇痛。</p>
                <p><strong>筋膜系统角度：</strong>近年研究发现，针刺引起的机械刺激可以沿筋膜网络传导，影响远处组织的功能——这与中医"经络"的描述有相似之处。</p>
                <p>总的来说，现代科学的解释还是碎片化的，没有形成像中医经络理论那样的统一体系。但越来越多的研究证实：<strong>针灸确实能够调节人体的多种生理功能</strong>，不是"安慰剂效应"那么简单。</p>
            </div>
        </div>

        <div class="expand-block">
            <div class="expand-header">
                <span class="expand-title">📚 深入了解：气的升降出入与脏腑的关系</span>
                <span class="expand-icon">▶</span>
            </div>
            <div class="expand-body">
                <p>每个脏腑都有其气机运动的特定方向：</p>
                <p><strong>肝气主升</strong>——肝的疏泄功能向上、向外，推动气血运行。如果肝气升发太过（肝阳上亢），会头痛头晕；升发不及（肝气郁结），会胸闷抑郁。</p>
                <p><strong>肺气主降</strong>——肺的肃降功能向下、向内，推动水液下行。如果肺气不降反升（肺气上逆），会咳嗽气喘。</p>
                <p><strong>脾气主升</strong>——脾的运化功能将营养物质上输。脾气不升则泄泻，或"中气下陷"（内脏下垂等）。</p>
                <p><strong>胃气主降</strong>——胃的受纳功能将食物向下传送。胃气不降则呕恶、嗳气。</p>
                <p><strong>肾气主藏</strong>——肾主封藏精气。肾气不固则遗精、遗尿、腰膝酸软。</p>
                <p><strong>心气主散</strong>——心主血脉，推动气血向全身散布。</p>
                <p>针灸调气，就是在判断哪个脏腑的气机出了问题之后，通过选择相应的经脉和穴位，帮助恢复其正常的升降出入。</p>
            </div>
        </div>

        <div class="annotation">
            <div class="annotation-label">📌 本节小结</div>
            <p><strong>经脉原理</strong>告诉我们"通过什么路径"来治疗——经脉是体表与脏腑的桥梁。<br>
            <strong>分形原理</strong>告诉我们"可以在哪里取穴"——局部可以反映整体。<br>
            <strong>应象原理</strong>告诉我们"如何理解和关联"——通过"象"的类比来认识事物。<br>
            <strong>调气</strong>告诉我们"治疗的目标是什么"——调整气的升降出入，恢复平衡。<br>
            这四个原理相互配合，共同构成了针灸治疗的理论基础。</p>
        </div>
    `;

    // ---------- 章节测验 ----------
    SECTIONS['sec-quiz'] = `
        <h2>📝 章节小测验</h2>
        <p>来检验一下本章的学习效果吧！</p>
    `;

    // ==========================================
    // 公开 API
    // ==========================================
    return {
        META: META,
        SIDEBAR_NAV: SIDEBAR_NAV,
        QUIZZES: QUIZZES,
        SECTIONS: SECTIONS
    };

})();