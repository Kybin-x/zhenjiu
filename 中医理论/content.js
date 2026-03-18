/* ══════════════════════════════════════════
   中医基础理论学习页 · 页面内容数据
   content.js  ── 修改此文件来更新页面内容
   ══════════════════════════════════════════ */

// ── 搜索索引数据 ──
// ── SEARCH DATA ──
const searchData = [
  {t:'整体观念',c:'一、基本特点',tab:0}, {t:'辨证论治',c:'一、基本特点',tab:0},
  {t:'同病异治',c:'一、基本特点',tab:0}, {t:'异病同治',c:'一、基本特点',tab:0},
  {t:'阴阳概念',c:'二、阴阳理论',tab:1}, {t:'交感互藏',c:'二、阴阳理论',tab:1},
  {t:'对立制约',c:'二、阴阳理论',tab:1}, {t:'互根互用',c:'二、阴阳理论',tab:1},
  {t:'消长平衡',c:'二、阴阳理论',tab:1}, {t:'阴阳转化',c:'二、阴阳理论',tab:1},
  {t:'阴平阳秘',c:'二、阴阳理论',tab:1}, {t:'阴阳失调',c:'二、阴阳理论',tab:1},
  {t:'五行特性',c:'三、五行理论',tab:2}, {t:'相生相克',c:'三、五行理论',tab:2},
  {t:'相乘相侮',c:'三、五行理论',tab:2}, {t:'母病及子',c:'三、五行理论',tab:2},
  {t:'五行归类',c:'三、五行理论',tab:2}, {t:'木曰曲直',c:'三、五行理论',tab:2},
  {t:'心藏象',c:'四、藏象学说',tab:3}, {t:'肝藏象',c:'四、藏象学说',tab:3},
  {t:'脾藏象',c:'四、藏象学说',tab:3}, {t:'肺藏象',c:'四、藏象学说',tab:3},
  {t:'肾藏象',c:'四、藏象学说',tab:3}, {t:'六腑功能',c:'四、藏象学说',tab:3},
  {t:'先天之本',c:'四、藏象学说',tab:3}, {t:'后天之本',c:'四、藏象学说',tab:3},
  {t:'元气',c:'五、气血津液',tab:4}, {t:'宗气',c:'五、气血津液',tab:4},
  {t:'营气',c:'五、气血津液',tab:4}, {t:'卫气',c:'五、气血津液',tab:4},
  {t:'气的功能',c:'五、气血津液',tab:4}, {t:'气为血之帅',c:'五、气血津液',tab:4},
  {t:'血为气之母',c:'五、气血津液',tab:4},
  {t:'十二经脉',c:'六、经络理论',tab:5}, {t:'奇经八脉',c:'六、经络理论',tab:5},
  {t:'督脉',c:'六、经络理论',tab:5}, {t:'任脉',c:'六、经络理论',tab:5},
  {t:'冲脉',c:'六、经络理论',tab:5}, {t:'经络功能',c:'六、经络理论',tab:5},
  {t:'得气感',c:'六、经络理论',tab:5},
];

// ── 页面 HTML 内容（注入到 #app） ──
const PAGE_HTML = `
<header>
  <div class="logo">中医基础理论</div>
  <div class="header-right">
    <div class="search-wrap">
      <span class="search-icon">🔍</span>
      <input type="text" id="searchInput" placeholder="搜索知识点…">
      <div id="searchResults"></div>
    </div>
    <div class="progress-badge" id="progressBadge">进度 0 / 6</div>
  </div>
</header>

<nav class="tabs-bar" id="tabsBar">
  <button class="tab-btn active" data-tab="0">一、基本特点<span class="done-dot"></span></button>
  <button class="tab-btn" data-tab="1">二、阴阳理论<span class="done-dot"></span></button>
  <button class="tab-btn" data-tab="2">三、五行理论<span class="done-dot"></span></button>
  <button class="tab-btn" data-tab="3">四、藏象学说<span class="done-dot"></span></button>
  <button class="tab-btn" data-tab="4">五、气血津液<span class="done-dot"></span></button>
  <button class="tab-btn" data-tab="5">六、经络理论<span class="done-dot"></span></button>
</nav>

<!-- ═══════════════════ PANEL 0 ═══════════════════ -->
<div class="panel active" id="panel-0">
  <div class="chapter-header">
    <div class="chapter-num">壹</div>
    <div>
      <div class="chapter-title">中医学的基本特点</div>
      <div class="chapter-sub">整体观念 · 辨证论治</div>
    </div>
  </div>

  <div class="intro-box">
    中医学是以<strong>整体观念</strong>为主导思想，以<strong>辨证论治</strong>为诊疗特点的医学体系。
    它将人体视为一个有机整体，并与自然界紧密相连。
  </div>

  <div class="section-title">整体观念</div>
  <div class="cards-grid">
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🧍</span><span class="card-name">人体是有机整体</span></div>
      <div class="card-preview">五脏六腑、形体官窍相互联系</div>
      <div class="card-body">
        人体由<strong>五脏（心、肝、脾、肺、肾）</strong>为中心，通过经络将六腑、五体、五官、九窍联系成一个有机整体。
        <br><br>各脏腑功能相互协调、相互制约。某一脏腑的病变，可影响其他脏腑。
        <br><br>
        <span class="card-tag">五脏中心论</span>
        <span class="card-tag">形神合一</span>
        <span class="card-tag">表里相关</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🌿</span><span class="card-name">人与自然的统一</span></div>
      <div class="card-preview">天人合一，顺应四时变化</div>
      <div class="card-body">
        中医认为人与自然界是<strong>统一的整体</strong>（"天人合一"）。
        <br><br>自然界的四时变化、昼夜交替、地理环境，都对人体的生理和病理产生影响。
        <br><br>例如：春生、夏长、秋收、冬藏，人体也应顺应四季进行养生调摄。
        <br><br>
        <span class="card-tag">天人合一</span>
        <span class="card-tag">四时养生</span>
        <span class="card-tag">因时制宜</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
  </div>

  <div class="section-title">辨证论治</div>
  <div class="intro-box">
    <strong>辨证论治</strong>是中医认识疾病和治疗疾病的基本原则。<br>
    「证」是机体在疾病发展过程中某一阶段的<strong>病理概括</strong>，包括病位、病因、病性及邪正关系。
    <div class="quote">「辨证」— 将四诊（望闻问切）所收集的资料加以分析综合，判断疾病的病因、性质、部位</div>
    <div class="quote">「论治」— 根据辨证的结果，确定相应的治疗原则和方法</div>
  </div>

  <div class="cards-grid">
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🔀</span><span class="card-name">同病异治</span></div>
      <div class="card-preview">相同疾病，证不同则治不同</div>
      <div class="card-body">
        同一种疾病，由于发病时间、地区，患者体质不同，或处于疾病发展的不同阶段，证候不同，<strong>治法亦不同</strong>。
        <br><br>例如：同为感冒，风寒证用辛温解表，风热证用辛凉解表。
        <br><br>
        <span class="card-tag">以证为纲</span>
        <span class="card-tag">个体化治疗</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🔗</span><span class="card-name">异病同治</span></div>
      <div class="card-preview">不同疾病，证相同则治法相同</div>
      <div class="card-body">
        不同的疾病，在其发展过程中，出现了<strong>相同的证候</strong>，可以采用同一治法。
        <br><br>例如：久泻、脱肛、子宫下垂，均为中气下陷证，可同用补中益气汤治疗。
        <br><br>
        <span class="card-tag">异病同证</span>
        <span class="card-tag">证同治同</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
  </div>

  <!-- QUIZ 0 -->
  <div class="quiz-section">
    <div class="quiz-header"><span class="quiz-icon">📝</span>章节小测</div>

    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">1. 中医学认为人体是一个以什么为中心的有机整体？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q0_1" value="A">A. 大脑</label>
        <label class="quiz-opt"><input type="radio" name="q0_1" value="B">B. 五脏</label>
        <label class="quiz-opt"><input type="radio" name="q0_1" value="C">C. 经络</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">2. 以下关于"辨证论治"说法正确的是？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q0_2" value="A">A. 辨证就是辨别疾病的名称</label>
        <label class="quiz-opt"><input type="radio" name="q0_2" value="B">B. 证是疾病某一阶段的病理概括，包括病位、病因、病性</label>
        <label class="quiz-opt"><input type="radio" name="q0_2" value="C">C. 同一种病必须使用同一种治法</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">3. 感冒患者甲属风寒证，患者乙属风热证，两者治法不同，这体现了中医的哪一原则？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q0_3" value="A">A. 同病异治</label>
        <label class="quiz-opt"><input type="radio" name="q0_3" value="B">B. 异病同治</label>
        <label class="quiz-opt"><input type="radio" name="q0_3" value="C">C. 整体观念</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <button class="quiz-submit" onclick="submitQuiz(this, 0)">提交答案</button>
    <div class="quiz-result"></div>
    <button class="mark-done-btn" onclick="markDone(0)">✓ 标记本章已学完</button>
  </div>
</div>

<!-- ═══════════════════ PANEL 1 ═══════════════════ -->
<div class="panel" id="panel-1">
  <div class="chapter-header">
    <div class="chapter-num">贰</div>
    <div>
      <div class="chapter-title">阴阳理论</div>
      <div class="chapter-sub">阴阳概念 · 交感互藏 · 对立制约 · 互根互用 · 消长平衡 · 相互转化</div>
    </div>
  </div>

  <div class="intro-box">
    阴阳，是对自然界<strong>相互关联的某些事物和现象对立双方</strong>的概括，是我国古代朴素的哲学思想。
    <br>阴阳既可代表两个相互对立的事物，也可代表同一事物内部相互对立的两个方面。
    <div class="quote">《素问·阴阳应象大论》："阴阳者，天地之道也，万物之纲纪，变化之父母，生杀之本始，神明之府也。"</div>
  </div>

  <div class="section-title">阴阳属性划分</div>
  <table class="tcm-table">
    <tr><th>属阳</th><th>属阴</th></tr>
    <tr><td>天、日、昼、春夏、热、动、上、外</td><td>地、月、夜、秋冬、寒、静、下、内</td></tr>
    <tr><td>功能、气化、兴奋、亢进</td><td>物质、形质、抑制、衰退</td></tr>
    <tr><td>脏腑之腑（六腑）</td><td>脏腑之脏（五脏）</td></tr>
    <tr><td>体表、背部</td><td>内脏、腹部</td></tr>
  </table>

  <div class="section-title">阴阳关系（点击展开）</div>
  <div class="cards-grid">
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">☯</span><span class="card-name">交感互藏</span></div>
      <div class="card-preview">阴中有阳，阳中有阴</div>
      <div class="card-body">
        <strong>交感</strong>：阴阳二气在运动中相互感应而交合，是宇宙万物赖以生成和变化的根源。<br><br>
        <strong>互藏</strong>：相互对立的阴阳双方中，任何一方都包含着另一方，即阴中有阳，阳中有阴。<br><br>
        太极图中"阴鱼"含白点、"阳鱼"含黑点，正是互藏的形象表达。
        <br><br>
        <span class="card-tag">阴中有阳</span><span class="card-tag">阳中有阴</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">⚖️</span><span class="card-name">对立制约</span></div>
      <div class="card-preview">阴平阳秘，保持动态平衡</div>
      <div class="card-body">
        阴阳双方相互对立，又相互制约，使事物取得<strong>动态平衡</strong>。<br><br>
        <strong>生理上</strong>：阴阳对立制约维持人体物质与功能的动态平衡，即「阴平阳秘，精神乃治」。<br><br>
        <strong>病理上</strong>：对立制约关系破坏 → 「阴阳失调」→ 出现偏盛偏衰病变。
        <br><br>
        <span class="card-tag">阴平阳秘</span><span class="card-tag">阴阳失调</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🔄</span><span class="card-name">互根互用</span></div>
      <div class="card-preview">阴生阳长，阳生阴长</div>
      <div class="card-body">
        阴阳双方各以对方为自己存在的前提，任何一方都不能脱离另一方单独存在（<strong>互根</strong>）。<br><br>
        阴阳双方不断地滋生、促进、助长对方（<strong>互用</strong>）：阴生阳长，阳生阴长。<br><br>
        <strong>病理</strong>：互根互用关系失常 → 「阴阳互损」（阴损及阳、阳损及阴）→ 「阴阳离决」。
        <br><br>
        <span class="card-tag">互为根基</span><span class="card-tag">阴阳互损</span><span class="card-tag">阴阳离决</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">📈</span><span class="card-name">消长平衡</span></div>
      <div class="card-preview">此长彼消，绝对运动中的相对平衡</div>
      <div class="card-body">
        阴阳的消长是<strong>绝对的运动</strong>，平衡是<strong>相对的静止</strong>。<br><br>
        <strong>消长形式</strong>：<br>
        ① 此长彼消（阴长阳消 / 阳长阴消）<br>
        ② 此消彼长（阴虚则阳亢 / 阳虚则阴盛）<br>
        ③ 此长彼长（气旺血旺 / 气虚血虚）<br><br>
        阴阳消长含有「量变」的含义。
        <br><br>
        <span class="card-tag">量变</span><span class="card-tag">动态平衡</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🔃</span><span class="card-name">相互转化</span></div>
      <div class="card-preview">物极必反，量变引发质变</div>
      <div class="card-body">
        在<strong>一定条件</strong>下，阴可转化为阳，阳可转化为阴（「物极必反」）。<br><br>
        ① 阴阳转化必须具备内部和外部条件<br>
        ② 阴阳转化是消长的结果（量变→质变）<br><br>
        <strong>临床应用</strong>：寒极生热，热极生寒；实证转虚证，虚证转实证。
        <br><br>
        <span class="card-tag">质变</span><span class="card-tag">物极必反</span><span class="card-tag">寒热转化</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
  </div>

  <div class="section-title">阴阳理论在医学中的应用</div>
  <div class="intro-box">
    <strong>说明人体结构：</strong>上为阳，下为阴；背为阳，腹为阴；六腑属阳，五脏属阴。<br><br>
    <strong>分析病理变化：</strong>阳盛则热（实热证）；阴盛则寒（实寒证）；阳虚则寒（虚寒证）；阴虚则热（虚热证）。<br><br>
    <strong>指导疾病诊断：</strong>色泽鲜明属阳，色泽晦暗属阴；脉象浮、数、实属阳，沉、迟、虚属阴。<br><br>
    <strong>确立治疗原则：</strong>「寒者热之，热者寒之」；「损其有余，补其不足」。
  </div>

  <!-- QUIZ 1 -->
  <div class="quiz-section">
    <div class="quiz-header"><span class="quiz-icon">📝</span>章节小测</div>

    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">1. 下列属于"阴"的是？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q1_1" value="A">A. 功能亢进</label>
        <label class="quiz-opt"><input type="radio" name="q1_1" value="B">B. 物质（形质）</label>
        <label class="quiz-opt"><input type="radio" name="q1_1" value="C">C. 六腑</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">2. "阴损及阳，阳损及阴"体现了阴阳的哪种关系？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q1_2" value="A">A. 对立制约</label>
        <label class="quiz-opt"><input type="radio" name="q1_2" value="B">B. 消长平衡</label>
        <label class="quiz-opt"><input type="radio" name="q1_2" value="C">C. 互根互用</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">3. "热极生寒，寒极生热"体现了阴阳的？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q1_3" value="A">A. 相互转化</label>
        <label class="quiz-opt"><input type="radio" name="q1_3" value="B">B. 消长平衡</label>
        <label class="quiz-opt"><input type="radio" name="q1_3" value="C">C. 对立制约</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">4. 阳盛则产生什么病变？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q1_4" value="A">A. 虚寒证</label>
        <label class="quiz-opt"><input type="radio" name="q1_4" value="B">B. 实热证</label>
        <label class="quiz-opt"><input type="radio" name="q1_4" value="C">C. 虚热证</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <button class="quiz-submit" onclick="submitQuiz(this, 1)">提交答案</button>
    <div class="quiz-result"></div>
    <button class="mark-done-btn" onclick="markDone(1)">✓ 标记本章已学完</button>
  </div>
</div>

<!-- ═══════════════════ PANEL 2 ═══════════════════ -->
<div class="panel" id="panel-2">
  <div class="chapter-header">
    <div class="chapter-num">叁</div>
    <div>
      <div class="chapter-title">五行理论</div>
      <div class="chapter-sub">五行特性 · 归类 · 相生相克 · 相乘相侮</div>
    </div>
  </div>

  <div class="intro-box">
    五行即指<strong>木、火、土、金、水</strong>五种物质的运动变化。五行之间存在相生相克关系，以此阐明事物之间错综复杂的联系，指导中医的生理、病理、诊断和治疗。
  </div>

  <div class="section-title">五行特性（点击卡片展开）</div>
  <div class="wuxing-grid">
    <div class="wx-card wx-mu" onclick="toggleWx(this)">
      <span class="wx-char">木</span>
      <div class="wx-label">曲直</div>
      <div class="wx-detail">
        <strong>木曰曲直</strong><br>凡具有<em>生长、升发、条达、舒畅</em>等性质的事物，均归属于木。<br><br>
        对应：肝、胆、春、青色、酸味、风气、东方、筋、目
      </div>
    </div>
    <div class="wx-card wx-huo" onclick="toggleWx(this)">
      <span class="wx-char">火</span>
      <div class="wx-label">炎上</div>
      <div class="wx-detail">
        <strong>火曰炎上</strong><br>凡具有<em>温热、向上、光明</em>等性质的事物，均归属于火。<br><br>
        对应：心、小肠、夏、赤色、苦味、暑气、南方、脉、舌
      </div>
    </div>
    <div class="wx-card wx-tu" onclick="toggleWx(this)">
      <span class="wx-char">土</span>
      <div class="wx-label">稼穑</div>
      <div class="wx-detail">
        <strong>土爰稼穑</strong><br>凡具有<em>生化、承载、受纳</em>等性质的事物，均归属于土。<br><br>
        对应：脾、胃、长夏、黄色、甘味、湿气、中央、肉、口
      </div>
    </div>
    <div class="wx-card wx-jin" onclick="toggleWx(this)">
      <span class="wx-char">金</span>
      <div class="wx-label">从革</div>
      <div class="wx-detail">
        <strong>金曰从革</strong><br>凡具有<em>沉降、肃杀、收敛</em>等性质的事物，均归属于金。<br><br>
        对应：肺、大肠、秋、白色、辛味、燥气、西方、皮、鼻
      </div>
    </div>
    <div class="wx-card wx-shui" onclick="toggleWx(this)">
      <span class="wx-char">水</span>
      <div class="wx-label">润下</div>
      <div class="wx-detail">
        <strong>水曰润下</strong><br>凡具有<em>滋润、下行、寒凉、闭藏</em>等性质的事物，均归属于水。<br><br>
        对应：肾、膀胱、冬、黑色、咸味、寒气、北方、骨、耳
      </div>
    </div>
  </div>

  <div class="section-title">五行归类表</div>
  <div style="overflow-x:auto">
  <table class="tcm-table">
    <tr><th>五行</th><th>五脏</th><th>六腑</th><th>五季</th><th>五色</th><th>五味</th><th>五气</th><th>五方</th><th>五志</th><th>五体</th><th>五窍</th></tr>
    <tr><td style="color:#2e7d52;font-weight:700">木</td><td>肝</td><td>胆</td><td>春</td><td>青</td><td>酸</td><td>风</td><td>东</td><td>怒</td><td>筋</td><td>目</td></tr>
    <tr><td style="color:#c0392b;font-weight:700">火</td><td>心</td><td>小肠</td><td>夏</td><td>赤</td><td>苦</td><td>暑</td><td>南</td><td>喜</td><td>脉</td><td>舌</td></tr>
    <tr><td style="color:#b8840a;font-weight:700">土</td><td>脾</td><td>胃</td><td>长夏</td><td>黄</td><td>甘</td><td>湿</td><td>中</td><td>思</td><td>肉</td><td>口</td></tr>
    <tr><td style="color:#666;font-weight:700">金</td><td>肺</td><td>大肠</td><td>秋</td><td>白</td><td>辛</td><td>燥</td><td>西</td><td>忧</td><td>皮</td><td>鼻</td></tr>
    <tr><td style="color:#1a5fa8;font-weight:700">水</td><td>肾</td><td>膀胱</td><td>冬</td><td>黑</td><td>咸</td><td>寒</td><td>北</td><td>恐</td><td>骨</td><td>耳</td></tr>
  </table>
  </div>

  <div class="section-title">相生相克关系</div>
  <div class="shenke-wrap">
    <div class="sk-box">
      <div class="sk-title"><span class="sk-dot dot-green"></span>五行相生（资生助长）</div>
      <div class="sk-row"><span style="color:#2e7d52">木</span> → 生 → <span style="color:#c0392b">火</span></div>
      <div class="sk-row"><span style="color:#c0392b">火</span> → 生 → <span style="color:#b8840a">土</span></div>
      <div class="sk-row"><span style="color:#b8840a">土</span> → 生 → <span style="color:#666">金</span></div>
      <div class="sk-row"><span style="color:#666">金</span> → 生 → <span style="color:#1a5fa8">水</span></div>
      <div class="sk-row"><span style="color:#1a5fa8">水</span> → 生 → <span style="color:#2e7d52">木</span></div>
      <div style="margin-top:.6rem; font-size:.8rem; color:var(--ink3)">《难经》：生我者为母，我生者为子</div>
    </div>
    <div class="sk-box">
      <div class="sk-title"><span class="sk-dot dot-red"></span>五行相克（克制制约）</div>
      <div class="sk-row"><span style="color:#2e7d52">木</span> → 克 → <span style="color:#b8840a">土</span></div>
      <div class="sk-row"><span style="color:#b8840a">土</span> → 克 → <span style="color:#1a5fa8">水</span></div>
      <div class="sk-row"><span style="color:#1a5fa8">水</span> → 克 → <span style="color:#c0392b">火</span></div>
      <div class="sk-row"><span style="color:#c0392b">火</span> → 克 → <span style="color:#666">金</span></div>
      <div class="sk-row"><span style="color:#666">金</span> → 克 → <span style="color:#2e7d52">木</span></div>
      <div style="margin-top:.6rem; font-size:.8rem; color:var(--ink3)">《内经》：克我者为所不胜，我克者为所胜</div>
    </div>
  </div>

  <div class="section-title">相生相克的反常</div>
  <div class="cards-grid">
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">⚡</span><span class="card-name">相乘</span></div>
      <div class="card-preview">过度克制（克制太过）</div>
      <div class="card-body">
        五行中的某一行对其<strong>所胜一行的过度克制</strong>，即按相克方向的异常克制。<br><br>
        例如：木气过盛 → 过度克制土 → 肝木乘脾土（情志不畅导致消化问题）。<br><br>
        <span class="card-tag">克制太过</span><span class="card-tag">相克方向</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🔙</span><span class="card-name">相侮（反侮）</span></div>
      <div class="card-preview">反向克制，以强凌弱的逆克</div>
      <div class="card-body">
        五行中的某一行对其<strong>所不胜一行的反向克制</strong>，即逆相克方向的异常克制（反克）。<br><br>
        例如：金气不足 → 木反来侮金 → 肺金虚弱时，肝木反克肺金。<br><br>
        <span class="card-tag">逆克</span><span class="card-tag">反相克方向</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">👨‍👩‍👧</span><span class="card-name">母病及子 / 子病及母</span></div>
      <div class="card-preview">相生关系中的传变</div>
      <div class="card-body">
        <strong>母病及子</strong>：某一行异常，累及其"子"行，导致母子两行皆异常。<br>例：肾水不足 → 不能涵养肝木 → 肝阴不足（水不涵木）。<br><br>
        <strong>子病及母</strong>：某一行异常，累及其"母"行，导致母子两行皆异常。<br>例：心火过旺 → 消耗肝阴（母） → 肝火随之旺盛。<br><br>
        <span class="card-tag">相生传变</span><span class="card-tag">母子关系</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
  </div>

  <!-- QUIZ 2 -->
  <div class="quiz-section">
    <div class="quiz-header"><span class="quiz-icon">📝</span>章节小测</div>

    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">1. 五行相生的顺序是？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q2_1" value="A">A. 木→土→水→火→金</label>
        <label class="quiz-opt"><input type="radio" name="q2_1" value="B">B. 木→金→水→火→土</label>
        <label class="quiz-opt"><input type="radio" name="q2_1" value="C">C. 木→火→土→金→水</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">2. 情志不畅导致胃痛（肝木过亢克伐脾土），属于五行的？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q2_2" value="A">A. 相克</label>
        <label class="quiz-opt"><input type="radio" name="q2_2" value="B">B. 相乘</label>
        <label class="quiz-opt"><input type="radio" name="q2_2" value="C">C. 相侮</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">3. 肾属五行中的哪一行？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q2_3" value="A">A. 水</label>
        <label class="quiz-opt"><input type="radio" name="q2_3" value="B">B. 金</label>
        <label class="quiz-opt"><input type="radio" name="q2_3" value="C">C. 土</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">4. 肾水不足，不能涵养肝木（水不涵木），属于？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q2_4" value="A">A. 相侮</label>
        <label class="quiz-opt"><input type="radio" name="q2_4" value="B">B. 子病及母</label>
        <label class="quiz-opt"><input type="radio" name="q2_4" value="C">C. 母病及子</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <button class="quiz-submit" onclick="submitQuiz(this, 2)">提交答案</button>
    <div class="quiz-result"></div>
    <button class="mark-done-btn" onclick="markDone(2)">✓ 标记本章已学完</button>
  </div>
</div>

<!-- ═══════════════════ PANEL 3 ═══════════════════ -->
<div class="panel" id="panel-3">
  <div class="chapter-header">
    <div class="chapter-num">肆</div>
    <div>
      <div class="chapter-title">藏象学说</div>
      <div class="chapter-sub">五脏 · 六腑 · 奇恒之腑</div>
    </div>
  </div>

  <div class="intro-box">
    <strong>藏象</strong>，"藏"指藏于体内的内脏，"象"指表现于外的生理、病理现象。藏象学说是研究人体脏腑的生理功能、病理变化及其相互关系的学说。
    <br><br>
    <strong>五脏</strong>（心肝脾肺肾）：藏精气而不泻，「藏而不泻、满而不能实」<br>
    <strong>六腑</strong>（胆胃小肠大肠膀胱三焦）：传化物而不藏，「泻而不藏、实而不能满」
  </div>

  <div class="section-title">五脏详解（点击展开）</div>
  <div class="zang-grid">
    <div class="zang-card zang-heart" onclick="toggleZang(this)">
      <div class="zang-head"><span class="zang-emoji">❤️</span><div class="zang-info"><div class="zang-name">心</div><div class="zang-tagline">五脏之君主，神明之官</div></div><span>▾</span></div>
      <div class="zang-body">
        <div class="zang-row"><span class="zang-key">主功能</span><span>主血脉、主神志</span></div>
        <div class="zang-row"><span class="zang-key">五行</span><span>火</span></div>
        <div class="zang-row"><span class="zang-key">相表里</span><span>心与小肠相表里</span></div>
        <div class="zang-row"><span class="zang-key">开窍</span><span>开窍于舌（舌为心之苗）</span></div>
        <div class="zang-row"><span class="zang-key">其华</span><span>其华在面（面色反映心功能）</span></div>
        <div class="zang-row"><span class="zang-key">在志</span><span>在志为喜（过喜伤心）</span></div>
        <div class="zang-row"><span class="zang-key">在液</span><span>在液为汗（汗为心之液）</span></div>
        <div class="zang-row"><span class="zang-key">养生</span><span>夏季养生应护心，省苦增辛以养肺气</span></div>
      </div>
    </div>
    <div class="zang-card zang-liver" onclick="toggleZang(this)">
      <div class="zang-head"><span class="zang-emoji">🟢</span><div class="zang-info"><div class="zang-name">肝</div><div class="zang-tagline">将军之官，谋虑出焉</div></div><span>▾</span></div>
      <div class="zang-body">
        <div class="zang-row"><span class="zang-key">主功能</span><span>主藏血、主疏泄</span></div>
        <div class="zang-row"><span class="zang-key">五行</span><span>木</span></div>
        <div class="zang-row"><span class="zang-key">相表里</span><span>肝与胆相表里</span></div>
        <div class="zang-row"><span class="zang-key">开窍</span><span>开窍于目（目为肝之窍）</span></div>
        <div class="zang-row"><span class="zang-key">其华</span><span>其华在爪（爪甲荣枯反映肝血）</span></div>
        <div class="zang-row"><span class="zang-key">在志</span><span>在志为怒（大怒伤肝）</span></div>
        <div class="zang-row"><span class="zang-key">在液</span><span>在液为泪</span></div>
        <div class="zang-row"><span class="zang-key">养生</span><span>春季养肝，省酸增甘以养脾气</span></div>
      </div>
    </div>
    <div class="zang-card zang-spleen" onclick="toggleZang(this)">
      <div class="zang-head"><span class="zang-emoji">🟡</span><div class="zang-info"><div class="zang-name">脾</div><div class="zang-tagline">后天之本，气血生化之源</div></div><span>▾</span></div>
      <div class="zang-body">
        <div class="zang-row"><span class="zang-key">主功能</span><span>主运化、统血、主肌肉四肢</span></div>
        <div class="zang-row"><span class="zang-key">五行</span><span>土</span></div>
        <div class="zang-row"><span class="zang-key">相表里</span><span>脾与胃相表里</span></div>
        <div class="zang-row"><span class="zang-key">开窍</span><span>开窍于口（口味反映脾胃功能）</span></div>
        <div class="zang-row"><span class="zang-key">其华</span><span>其华在唇（口唇荣枯见脾气盛衰）</span></div>
        <div class="zang-row"><span class="zang-key">在志</span><span>在志为思（思虑过度伤脾）</span></div>
        <div class="zang-row"><span class="zang-key">在液</span><span>在液为涎</span></div>
        <div class="zang-row"><span class="zang-key">养生</span><span>长夏养脾，省甘增咸以养肾气</span></div>
      </div>
    </div>
    <div class="zang-card zang-lung" onclick="toggleZang(this)">
      <div class="zang-head"><span class="zang-emoji">🫁</span><div class="zang-info"><div class="zang-name">肺</div><div class="zang-tagline">相傅之官，治节出焉</div></div><span>▾</span></div>
      <div class="zang-body">
        <div class="zang-row"><span class="zang-key">主功能</span><span>主气司呼吸、主行水、朝百脉主治节</span></div>
        <div class="zang-row"><span class="zang-key">五行</span><span>金</span></div>
        <div class="zang-row"><span class="zang-key">相表里</span><span>肺与大肠相表里</span></div>
        <div class="zang-row"><span class="zang-key">开窍</span><span>开窍于鼻</span></div>
        <div class="zang-row"><span class="zang-key">其华</span><span>其华在毛（皮毛荣枯见肺气）</span></div>
        <div class="zang-row"><span class="zang-key">在志</span><span>在志为悲（悲忧伤肺）</span></div>
        <div class="zang-row"><span class="zang-key">在液</span><span>在液为涕</span></div>
        <div class="zang-row"><span class="zang-key">养生</span><span>秋季养肺，省辛增酸以养肝气</span></div>
      </div>
    </div>
    <div class="zang-card zang-kidney" onclick="toggleZang(this)">
      <div class="zang-head"><span class="zang-emoji">💧</span><div class="zang-info"><div class="zang-name">肾</div><div class="zang-tagline">先天之本，水火之宅</div></div><span>▾</span></div>
      <div class="zang-body">
        <div class="zang-row"><span class="zang-key">主功能</span><span>藏精、主水液、主骨生髓通脑、司二便</span></div>
        <div class="zang-row"><span class="zang-key">五行</span><span>水</span></div>
        <div class="zang-row"><span class="zang-key">相表里</span><span>肾与膀胱相表里</span></div>
        <div class="zang-row"><span class="zang-key">开窍</span><span>开窍于耳和二阴（腰为肾之府）</span></div>
        <div class="zang-row"><span class="zang-key">其华</span><span>其华在发（发为肾之华）</span></div>
        <div class="zang-row"><span class="zang-key">在志</span><span>在志为恐（恐伤肾）</span></div>
        <div class="zang-row"><span class="zang-key">在液</span><span>在液为唾</span></div>
        <div class="zang-row"><span class="zang-key">养生</span><span>冬季养肾，省咸增苦以养心气</span></div>
      </div>
    </div>
  </div>

  <div class="section-title">六腑功能速览</div>
  <table class="tcm-table">
    <tr><th>腑</th><th>主要功能</th><th>特点</th></tr>
    <tr><td><strong>胆</strong></td><td>储存和排泄胆汁，助消化；主决断</td><td>奇恒之腑之一</td></tr>
    <tr><td><strong>胃</strong></td><td>受纳腐熟水谷（初步消化），为"水谷之海"</td><td>主通降，以降为和</td></tr>
    <tr><td><strong>小肠</strong></td><td>受盛化物（进一步消化）；泌清别浊（分清吸收）</td><td>主津</td></tr>
    <tr><td><strong>大肠</strong></td><td>传导糟粕，吸收水分，排泄大便</td><td>传导之官</td></tr>
    <tr><td><strong>膀胱</strong></td><td>储尿排尿（排泄小便）</td><td>需肾气化才能排尿</td></tr>
    <tr><td><strong>三焦</strong></td><td>水道之通路，概括消化吸收排泄全过程</td><td>最大的腑，孤腑</td></tr>
  </table>

  <!-- QUIZ 3 -->
  <div class="quiz-section">
    <div class="quiz-header"><span class="quiz-icon">📝</span>章节小测</div>

    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">1. "先天之本"是指哪一脏？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q3_1" value="A">A. 脾</label>
        <label class="quiz-opt"><input type="radio" name="q3_1" value="B">B. 肾</label>
        <label class="quiz-opt"><input type="radio" name="q3_1" value="C">C. 心</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">2. 中医认为"汗为心之液"，过度出汗会损耗？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q3_2" value="A">A. 心气/心血</label>
        <label class="quiz-opt"><input type="radio" name="q3_2" value="B">B. 肺气</label>
        <label class="quiz-opt"><input type="radio" name="q3_2" value="C">C. 脾气</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">3. 肝开窍于？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q3_3" value="A">A. 鼻</label>
        <label class="quiz-opt"><input type="radio" name="q3_3" value="B">B. 耳</label>
        <label class="quiz-opt"><input type="radio" name="q3_3" value="C">C. 目</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">4. "泌清别浊"（分清吸收、去浊排泄）是哪个腑的功能？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q3_4" value="A">A. 大肠</label>
        <label class="quiz-opt"><input type="radio" name="q3_4" value="B">B. 小肠</label>
        <label class="quiz-opt"><input type="radio" name="q3_4" value="C">C. 胃</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">5. 肺的主要功能是？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q3_5" value="A">A. 主气司呼吸、主行水、朝百脉</label>
        <label class="quiz-opt"><input type="radio" name="q3_5" value="B">B. 主藏血、主疏泄</label>
        <label class="quiz-opt"><input type="radio" name="q3_5" value="C">C. 主运化、统血</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <button class="quiz-submit" onclick="submitQuiz(this, 3)">提交答案</button>
    <div class="quiz-result"></div>
    <button class="mark-done-btn" onclick="markDone(3)">✓ 标记本章已学完</button>
  </div>
</div>

<!-- ═══════════════════ PANEL 4 ═══════════════════ -->
<div class="panel" id="panel-4">
  <div class="chapter-header">
    <div class="chapter-num">伍</div>
    <div>
      <div class="chapter-title">气血津液</div>
      <div class="chapter-sub">元气·宗气·营气·卫气 · 血 · 津液</div>
    </div>
  </div>

  <div class="intro-box">
    气血津液是构成和维持人体生命活动的基本物质。<br>
    <strong>气</strong>是不断运动的精微物质；<strong>血</strong>是循行脉中的红色液态物质；<strong>津液</strong>是人体一切正常水液的总称。
  </div>

  <div class="section-title">气的功能</div>
  <div class="cards-grid">
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🚀</span><span class="card-name">推动作用</span></div>
      <div class="card-preview">激发和推动人体的生命活动</div>
      <div class="card-body">气具有激发和推动作用，包括：<br>• 促进人体生长发育与生殖<br>• 推动脏腑经络的生理活动<br>• 推动血液运行<br>• 推动津液输布与排泄<br><br><span class="card-tag">气行则血行</span><span class="card-tag">气行则水行</span></div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🌡️</span><span class="card-name">温煦作用</span></div>
      <div class="card-preview">产生热量，温煦机体</div>
      <div class="card-body">阳气有产生热量、温煦机体的作用：<br>• 维持恒定体温<br>• 维持全身组织器官的生理活动<br>• 维持血、津液等液态物质的正常运行<br><br><span class="card-tag">阳气温煦</span><span class="card-tag">气虚则寒</span></div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🛡️</span><span class="card-name">防御作用</span></div>
      <div class="card-preview">防卫肌肤，抗御外邪</div>
      <div class="card-body">气有防卫肌肤、抗御邪气的作用：<br>• 防御外邪侵入（卫气护表）<br>• 驱邪外出（正气抗邪）<br><br>「正气存内，邪不可干；邪之所凑，其气必虚」<br><br><span class="card-tag">卫气护表</span><span class="card-tag">正气抗邪</span></div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">📌</span><span class="card-name">固摄作用</span></div>
      <div class="card-preview">统摄液态物质，防止流失</div>
      <div class="card-body">气对体内液态物质具有固护、统摄作用：<br>• 固摄血液（防溢出脉外）<br>• 固摄汗液、尿液（有节制排出）<br>• 固摄唾液、胃肠液（防丧失）<br>• 固摄精液（防妄泄）<br>• 固摄内脏（防下垂）<br><br><span class="card-tag">气摄血</span><span class="card-tag">气虚出血</span></div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🌾</span><span class="card-name">营养作用</span></div>
      <div class="card-preview">为脏腑组织提供营养</div>
      <div class="card-body">气（尤指营气）是具有营养作用的精微物质，营养全身各脏腑组织器官，维持其生理功能。<br><br><span class="card-tag">营气化血</span><span class="card-tag">营养全身</span></div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">⚗️</span><span class="card-name">气化作用</span></div>
      <div class="card-preview">精气血津液的转化与代谢</div>
      <div class="card-body">气的运动产生各种变化，即气化：<br>• 精、气、血、津液等物质的新陈代谢<br>• 各种物质之间的相互转化<br><br>例：饮食→水谷精微→气血；津液→汗、尿。<br><br><span class="card-tag">物质转化</span><span class="card-tag">新陈代谢</span></div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
  </div>

  <div class="section-title">四种气的分类</div>
  <div class="qi-grid">
    <div class="qi-card" onclick="toggleQi(this)">
      <div class="qi-head">元气<span class="qi-toggle">▾</span></div>
      <div class="qi-body">
        <div class="qi-badge">又名：原气、真气</div><br>
        人体的<strong>原始之气、根本之气</strong>，为生命活动的原动力。<br><br>
        <strong>生成</strong>：禀受于父母（先天精气）+ 脾胃水谷精气（后天滋养）<br>
        <strong>分布</strong>：藏于肾中，通过三焦循行全身<br>
        <strong>功能</strong>：推动人体生长发育与生殖；激发各脏腑功能
      </div>
    </div>
    <div class="qi-card" onclick="toggleQi(this)">
      <div class="qi-head">宗气<span class="qi-toggle">▾</span></div>
      <div class="qi-body">
        <div class="qi-badge">又名：大气</div><br>
        聚于<strong>胸中</strong>之气，后天根本之气。<br><br>
        <strong>生成</strong>：肺吸入的自然清气 + 脾胃水谷精气<br>
        <strong>分布</strong>：聚于胸中（膻中），贯注心肺<br>
        <strong>功能</strong>：走息道司呼吸（影响言语声音）；贯心脉行气血（影响心跳、血运）
      </div>
    </div>
    <div class="qi-card" onclick="toggleQi(this)">
      <div class="qi-head">营气<span class="qi-toggle">▾</span></div>
      <div class="qi-body">
        <div class="qi-badge">行于脉中</div><br>
        行于<strong>脉中</strong>，具有营养作用之气。<br><br>
        <strong>生成</strong>：脾胃水谷精气（精华部分）<br>
        <strong>分布</strong>：行于脉内，循十二经脉运行全身<br>
        <strong>功能</strong>：化生血液；营养全身脏腑组织
      </div>
    </div>
    <div class="qi-card" onclick="toggleQi(this)">
      <div class="qi-head">卫气<span class="qi-toggle">▾</span></div>
      <div class="qi-body">
        <div class="qi-badge">行于脉外</div><br>
        行于<strong>脉外</strong>，具有护卫作用之气。<br><br>
        <strong>生成</strong>：脾胃水谷之悍气<br>
        <strong>分布</strong>：行于脉外，昼行于阳、夜行于阴<br>
        <strong>功能</strong>：防御外邪侵入；温养肌肤腠理；控制汗孔开合（调节体温）
      </div>
    </div>
  </div>

  <div class="section-title">气与血的关系</div>
  <div class="shenke-wrap">
    <div class="sk-box">
      <div class="sk-title"><span class="sk-dot dot-green"></span>气为血之帅</div>
      <div class="sk-row">• <strong>气能生血</strong>：气旺则血足，气虚则血虚</div>
      <div class="sk-row">• <strong>气能行血</strong>：气行则血行，气滞则血瘀</div>
      <div class="sk-row">• <strong>气能摄血</strong>：气虚不摄血 → 出血</div>
    </div>
    <div class="sk-box">
      <div class="sk-title"><span class="sk-dot dot-red"></span>血为气之母</div>
      <div class="sk-row">• <strong>血能生气</strong>：血足则气旺，血虚则气虚</div>
      <div class="sk-row">• <strong>血能载气</strong>：气存于血中，依附血运行</div>
      <div class="sk-row">• 血脱则气散（气随血脱）</div>
    </div>
  </div>

  <!-- QUIZ 4 -->
  <div class="quiz-section">
    <div class="quiz-header"><span class="quiz-icon">📝</span>章节小测</div>

    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">1. 行于脉外、具有护卫作用的气是？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q4_1" value="A">A. 元气</label>
        <label class="quiz-opt"><input type="radio" name="q4_1" value="B">B. 营气</label>
        <label class="quiz-opt"><input type="radio" name="q4_1" value="C">C. 卫气</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">2. 宗气聚于何处？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q4_2" value="A">A. 肾中</label>
        <label class="quiz-opt"><input type="radio" name="q4_2" value="B">B. 胸中（膻中）</label>
        <label class="quiz-opt"><input type="radio" name="q4_2" value="C">C. 丹田</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">3. "气虚不能摄血"可能导致什么病理变化？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q4_3" value="A">A. 出血（血不循经）</label>
        <label class="quiz-opt"><input type="radio" name="q4_3" value="B">B. 血瘀</label>
        <label class="quiz-opt"><input type="radio" name="q4_3" value="C">C. 气滞</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <button class="quiz-submit" onclick="submitQuiz(this, 4)">提交答案</button>
    <div class="quiz-result"></div>
    <button class="mark-done-btn" onclick="markDone(4)">✓ 标记本章已学完</button>
  </div>
</div>

<!-- ═══════════════════ PANEL 5 ═══════════════════ -->
<div class="panel" id="panel-5">
  <div class="chapter-header">
    <div class="chapter-num">陆</div>
    <div>
      <div class="chapter-title">经络理论</div>
      <div class="chapter-sub">十二经脉 · 奇经八脉 · 经络功能</div>
    </div>
  </div>

  <div class="intro-box">
    <strong>经络</strong>是运行气血、联系脏腑体表及全身各部的通道，是人体功能的调控系统。<br><br>
    「经」— 经脉，纵行的主干；「络」— 络脉，横行的分支，如网络遍布全身。
  </div>

  <div class="section-title">经络系统组成</div>
  <div class="intro-box">
    <strong>经脉</strong>：十二经脉（正经）、奇经八脉、十二经别、十二经筋、十二皮部<br>
    <strong>络脉</strong>：十五络脉、孙络、浮络
  </div>

  <div class="section-title">十二经脉循行规律</div>
  <div class="intro-box">
    <div class="quote">手之三阴胸走手，手之三阳手外头，足之三阳头外足，足之三阴足内走。</div>
    <br>
    <strong>手三阴经</strong>：从胸走向手（手太阴肺经 / 手厥阴心包经 / 手少阴心经）<br>
    <strong>手三阳经</strong>：从手走向头（手阳明大肠经 / 手少阳三焦经 / 手太阳小肠经）<br>
    <strong>足三阳经</strong>：从头走向足（足阳明胃经 / 足少阳胆经 / 足太阳膀胱经）<br>
    <strong>足三阴经</strong>：从足走向腹胸（足太阴脾经 / 足厥阴肝经 / 足少阴肾经）
  </div>

  <div class="section-title">十二经脉 · 表里络属</div>
  <div style="overflow-x:auto">
  <table class="tcm-table">
    <tr><th>阴经（属脏·里）</th><th>阳经（属腑·表）</th><th>循行部位</th></tr>
    <tr><td>手太阴肺经</td><td>手阳明大肠经</td><td>上肢</td></tr>
    <tr><td>手厥阴心包经</td><td>手少阳三焦经</td><td>上肢</td></tr>
    <tr><td>手少阴心经</td><td>手太阳小肠经</td><td>上肢</td></tr>
    <tr><td>足太阴脾经</td><td>足阳明胃经</td><td>下肢/腹</td></tr>
    <tr><td>足厥阴肝经</td><td>足少阳胆经</td><td>下肢/侧</td></tr>
    <tr><td>足少阴肾经</td><td>足太阳膀胱经</td><td>下肢/背</td></tr>
  </table>
  </div>

  <div class="section-title">奇经八脉</div>
  <div class="meridian-grid">
    <div class="mer-item"><div class="mer-name">督脉</div><div class="mer-detail">行于背正中，总督一身之阳气，称"阳脉之海"</div></div>
    <div class="mer-item"><div class="mer-name">任脉</div><div class="mer-detail">行于腹正中，总任一身之阴气，称"阴脉之海"，主胞胎</div></div>
    <div class="mer-item"><div class="mer-name">冲脉</div><div class="mer-detail">为"十二经脉之海"，也称"血海"，与生殖密切相关</div></div>
    <div class="mer-item"><div class="mer-name">带脉</div><div class="mer-detail">横行腰腹，约束纵行诸脉，如腰带状</div></div>
    <div class="mer-item"><div class="mer-name">阴维脉</div><div class="mer-detail">维系联络阴经，主一身之表</div></div>
    <div class="mer-item"><div class="mer-name">阳维脉</div><div class="mer-detail">维系联络阳经，主一身之里</div></div>
    <div class="mer-item"><div class="mer-name">阴蹻脉</div><div class="mer-detail">主眼睑开合、下肢运动（内侧）</div></div>
    <div class="mer-item"><div class="mer-name">阳蹻脉</div><div class="mer-detail">主眼睑开合、下肢运动（外侧）</div></div>
  </div>

  <div class="section-title">经络的基本功能</div>
  <div class="cards-grid">
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🕸️</span><span class="card-name">联络沟通作用</span></div>
      <div class="card-preview">网络全身，沟通表里内外</div>
      <div class="card-body">经络纵横交错，沟通脏腑与肢节、脏腑与官窍之间的联系，使人体成为有机整体。<br><br><span class="card-tag">表里联系</span><span class="card-tag">上下沟通</span></div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🌊</span><span class="card-name">运行气血作用</span></div>
      <div class="card-preview">气血运行的通道</div>
      <div class="card-body">经络是气血运行的通道，将气血输送到全身各处，营养脏腑组织，维持正常生理活动。<br><br><span class="card-tag">气血运行</span><span class="card-tag">营养全身</span></div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">📡</span><span class="card-name">感应传导作用</span></div>
      <div class="card-preview">对刺激产生感应并传导</div>
      <div class="card-body">经气是感应传导的物质基础，对脏腑病变、病邪侵袭、针灸等刺激均能产生感应并传导。<br><br>针刺的「得气感」（酸麻胀感）正是经络感应传导的体现。<br><br><span class="card-tag">得气感</span><span class="card-tag">针灸原理</span></div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">⚙️</span><span class="card-name">调节机能活动</span></div>
      <div class="card-preview">双向调节，维持动态平衡</div>
      <div class="card-body">经络具有调节机能活动的作用，包括经络自身的调节和对治疗的调节作用。<br><br>针灸治病即通过刺激经络穴位，调整脏腑气血功能，使之恢复平衡。<br><br><span class="card-tag">双向调节</span><span class="card-tag">平衡阴阳</span></div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
  </div>

  <!-- QUIZ 5 -->
  <div class="quiz-section">
    <div class="quiz-header"><span class="quiz-icon">📝</span>章节小测</div>

    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">1. 十二经脉中，手三阴经的走向是？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q5_1" value="A">A. 从手走向胸</label>
        <label class="quiz-opt"><input type="radio" name="q5_1" value="B">B. 从胸走向手</label>
        <label class="quiz-opt"><input type="radio" name="q5_1" value="C">C. 从头走向手</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">2. 被称为"阳脉之海"的是？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q5_2" value="A">A. 督脉</label>
        <label class="quiz-opt"><input type="radio" name="q5_2" value="B">B. 任脉</label>
        <label class="quiz-opt"><input type="radio" name="q5_2" value="C">C. 冲脉</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">3. 肺经与哪条经脉相表里？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q5_3" value="A">A. 手太阳小肠经</label>
        <label class="quiz-opt"><input type="radio" name="q5_3" value="B">B. 手少阳三焦经</label>
        <label class="quiz-opt"><input type="radio" name="q5_3" value="C">C. 手阳明大肠经</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">4. 针刺穴位产生的酸麻胀感（得气感）体现了经络的什么功能？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q5_4" value="A">A. 联络沟通作用</label>
        <label class="quiz-opt"><input type="radio" name="q5_4" value="B">B. 感应传导作用</label>
        <label class="quiz-opt"><input type="radio" name="q5_4" value="C">C. 运行气血作用</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>

    <button class="quiz-submit" onclick="submitQuiz(this, 5)">提交答案</button>
    <div class="quiz-result"></div>
    <button class="mark-done-btn" onclick="markDone(5)">✓ 标记本章已学完</button>
  </div>
</div>
`;

// 将内容注入页面
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('app').innerHTML = PAGE_HTML;
  initApp(); // 初始化交互逻辑（定义在 app.js）
});
