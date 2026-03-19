/* ══════════════════════════════════════════
   针灸解剖学基础 · 页面内容数据
   content.js — 修改此文件更新页面内容与知识点
   ══════════════════════════════════════════ */

// ── 搜索索引 ──
const searchData = [
  {t:'针灸解剖学概述',c:'一、导言',tab:0},{t:'针灸安全',c:'一、导言',tab:0},
  {t:'体表标志定义',c:'一、导言',tab:0},{t:'骨性标志',c:'一、导言',tab:0},
  {t:'肌性标志',c:'一、导言',tab:0},
  {t:'乳突',c:'二、体表标志',tab:1},{t:'翼点',c:'二、体表标志',tab:1},
  {t:'枕外隆凸',c:'二、体表标志',tab:1},{t:'眶下孔',c:'二、体表标志',tab:1},
  {t:'咬肌',c:'二、体表标志',tab:1},{t:'面动脉',c:'二、体表标志',tab:1},
  {t:'舌骨',c:'二、体表标志',tab:1},{t:'喉结',c:'二、体表标志',tab:1},
  {t:'胸锁乳突肌',c:'二、体表标志',tab:1},{t:'斜方肌',c:'二、体表标志',tab:1},
  {t:'第7颈椎棘突',c:'二、体表标志',tab:1},{t:'喙突',c:'二、体表标志',tab:1},
  {t:'胸骨角',c:'二、体表标志',tab:1},{t:'剑突',c:'二、体表标志',tab:1},
  {t:'髂前上棘',c:'二、体表标志',tab:1},{t:'腹直肌',c:'二、体表标志',tab:1},
  {t:'肩胛骨',c:'二、体表标志',tab:1},{t:'竖脊肌',c:'二、体表标志',tab:1},
  {t:'第4腰椎棘突',c:'二、体表标志',tab:1},{t:'坐骨结节',c:'二、体表标志',tab:1},
  {t:'梨状肌',c:'二、体表标志',tab:1},{t:'坐骨神经',c:'二、体表标志',tab:1},
  {t:'肱骨内外上髁',c:'二、体表标志',tab:1},{t:'尺骨茎突',c:'二、体表标志',tab:1},
  {t:'股骨大转子',c:'二、体表标志',tab:1},{t:'腓骨小头',c:'二、体表标志',tab:1},
  {t:'胆经解剖',c:'三、经络解剖',tab:2},{t:'膀胱经解剖',c:'三、经络解剖',tab:2},
  {t:'胃经解剖',c:'三、经络解剖',tab:2},{t:'肺经解剖',c:'三、经络解剖',tab:2},
  {t:'心经解剖',c:'三、经络解剖',tab:2},{t:'肾经解剖',c:'三、经络解剖',tab:2},
  {t:'脾经解剖',c:'三、经络解剖',tab:2},{t:'肝经解剖',c:'三、经络解剖',tab:2},
  {t:'心包经解剖',c:'三、经络解剖',tab:2},{t:'三焦经解剖',c:'三、经络解剖',tab:2},
  {t:'大肠经解剖',c:'三、经络解剖',tab:2},{t:'小肠经解剖',c:'三、经络解剖',tab:2},
  {t:'风池',c:'三、经络解剖',tab:2},{t:'足三里',c:'三、经络解剖',tab:2},
  {t:'合谷',c:'三、经络解剖',tab:2},{t:'内关',c:'三、经络解剖',tab:2},
  {t:'委中',c:'三、经络解剖',tab:2},{t:'太溪',c:'三、经络解剖',tab:2},
  {t:'太冲',c:'三、经络解剖',tab:2},{t:'涌泉',c:'三、经络解剖',tab:2},
  {t:'太渊',c:'三、经络解剖',tab:2},{t:'神门',c:'三、经络解剖',tab:2},
  {t:'骨度分寸法',c:'四、穴位取穴',tab:3},{t:'体表标志取穴',c:'四、穴位取穴',tab:3},
  {t:'手指同身寸',c:'四、穴位取穴',tab:3},{t:'简便取穴',c:'四、穴位取穴',tab:3},
];

// ── SVG 人体轮廓图 ──
const BODY_SVG = `
<svg viewBox="0 0 160 400" xmlns="http://www.w3.org/2000/svg" style="width:160px;height:400px">
  <!-- 头部 -->
  <g class="body-region" id="svg-head" onclick="highlightRegion('head')" data-region="head">
    <ellipse cx="80" cy="28" rx="22" ry="26" fill="#c8d8b8" stroke="#7a9a6a" stroke-width="1.5"/>
    <text class="body-label" x="80" y="32" font-size="9" fill="#3d5236" font-family="serif">头面</text>
  </g>
  <!-- 颈部 -->
  <g class="body-region" id="svg-neck" onclick="highlightRegion('neck')" data-region="neck">
    <rect x="68" y="53" width="24" height="18" rx="4" fill="#c8d8b8" stroke="#7a9a6a" stroke-width="1.5"/>
    <text class="body-label" x="80" y="66" font-size="8" fill="#3d5236" font-family="serif">颈</text>
  </g>
  <!-- 胸部 -->
  <g class="body-region" id="svg-chest" onclick="highlightRegion('chest')" data-region="chest">
    <path d="M55,71 Q80,68 105,71 L108,118 Q80,122 52,118 Z" fill="#c8d8b8" stroke="#7a9a6a" stroke-width="1.5"/>
    <text class="body-label" x="80" y="98" font-size="9" fill="#3d5236" font-family="serif">胸部</text>
  </g>
  <!-- 腹部 -->
  <g class="body-region" id="svg-abdomen" onclick="highlightRegion('abdomen')" data-region="abdomen">
    <path d="M52,118 Q80,122 108,118 L106,160 Q80,164 54,160 Z" fill="#c8d8b8" stroke="#7a9a6a" stroke-width="1.5"/>
    <text class="body-label" x="80" y="143" font-size="9" fill="#3d5236" font-family="serif">腹部</text>
  </g>
  <!-- 背/腰骶（背面，用虚线轮廓示意） -->
  <g class="body-region" id="svg-back" onclick="highlightRegion('back')" data-region="back">
    <rect x="58" y="72" width="12" height="85" rx="3" fill="#b8ccaa" stroke="#7a9a6a" stroke-width="1" stroke-dasharray="3,2" opacity="0.7"/>
    <text class="body-label" x="64" y="118" font-size="7" fill="#3d5236" font-family="serif" transform="rotate(-90,64,118)">背·腰</text>
  </g>
  <!-- 上肢左 -->
  <g class="body-region" id="svg-arm" onclick="highlightRegion('arm')" data-region="arm">
    <path d="M52,74 L36,80 L30,130 L38,132 L44,88 L55,85 Z" fill="#c8d8b8" stroke="#7a9a6a" stroke-width="1.5"/>
    <path d="M108,74 L124,80 L130,130 L122,132 L116,88 L105,85 Z" fill="#c8d8b8" stroke="#7a9a6a" stroke-width="1.5"/>
    <text class="body-label" x="34" y="108" font-size="8" fill="#3d5236" font-family="serif">上肢</text>
  </g>
  <!-- 下肢 -->
  <g class="body-region" id="svg-leg" onclick="highlightRegion('leg')" data-region="leg">
    <path d="M54,162 L50,240 L52,300 L66,300 L68,240 L80,220 L92,240 L94,300 L108,300 L110,240 L106,162 Z" fill="#c8d8b8" stroke="#7a9a6a" stroke-width="1.5"/>
    <text class="body-label" x="80" y="270" font-size="9" fill="#3d5236" font-family="serif">下肢</text>
  </g>
  <!-- 足部 -->
  <g class="body-region" id="svg-foot" onclick="highlightRegion('foot')" data-region="foot">
    <ellipse cx="59" cy="314" rx="14" ry="9" fill="#c8d8b8" stroke="#7a9a6a" stroke-width="1.5"/>
    <ellipse cx="101" cy="314" rx="14" ry="9" fill="#c8d8b8" stroke="#7a9a6a" stroke-width="1.5"/>
  </g>
</svg>`;

// ── 页面 HTML ──
const PAGE_HTML = `
<header>
  <div class="logo">针灸解剖学基础</div>
  <div class="header-right">
    <div class="search-wrap">
      <span class="search-icon">🔍</span>
      <input type="text" id="searchInput" placeholder="搜索知识点…">
      <div id="searchResults"></div>
    </div>
    <div class="progress-badge" id="progressBadge">进度 0 / 4</div>
  </div>
</header>

<nav class="tabs-bar" id="tabsBar">
  <button class="tab-btn active" data-tab="0">一、导言<span class="done-dot"></span></button>
  <button class="tab-btn" data-tab="1">二、体表标志<span class="done-dot"></span></button>
  <button class="tab-btn" data-tab="2">三、经络解剖<span class="done-dot"></span></button>
  <button class="tab-btn" data-tab="3">四、穴位取穴<span class="done-dot"></span></button>
</nav>

<!-- ══════════ PANEL 0 · 导言 ══════════ -->
<div class="panel active" id="panel-0">
  <div class="chapter-header">
    <div class="chapter-num">序</div>
    <div>
      <div class="chapter-title">针灸解剖学基础</div>
      <div class="chapter-sub">什么是针灸解剖学 · 为什么要学 · 如何学</div>
    </div>
  </div>

  <div class="intro-box">
    <strong>针灸解剖学</strong>是将人体解剖学知识与针灸经络、腧穴理论相结合的交叉学科。<br><br>
    学习针灸时，了解穴位下方的<strong>神经、血管、肌肉、骨骼</strong>结构，不仅能帮助准确定位穴位、理解针感产生的原理，更是保障针刺安全的基础。
    <div class="quote">「知其解剖，方能安全进针；明其结构，方能理解针效。」</div>
  </div>

  <div class="section-title">本课程学什么</div>
  <div class="cards-grid">
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🗺️</span><span class="card-name">体表标志</span></div>
      <div class="card-preview">骨性、肌性、皮肤标志的识别</div>
      <div class="card-body">
        <strong>体表标志</strong>是人体表面可以看到或触摸到的解剖结构，是穴位定位的重要参考依据。分为三类：<br><br>
        <strong>骨性标志：</strong>骨骼突出处，如乳突、枕外隆凸、肩胛骨、髂前上棘等，位置固定，最为可靠。<br><br>
        <strong>肌性标志：</strong>肌肉轮廓或肌腱，如胸锁乳突肌、竖脊肌、跟腱等，随体位变化而改变。<br><br>
        <strong>皮肤标志：</strong>皮纹、毛发边界、皮下血管等，如腕横纹、肘横纹、发际等。
        <br><br>
        <span class="tag tag-bone">骨性标志</span>
        <span class="tag tag-muscle">肌性标志</span>
        <span class="tag">皮肤标志</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>

    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">🧬</span><span class="card-name">经络与解剖结构</span></div>
      <div class="card-preview">12经脉循行处的神经、血管、肌肉</div>
      <div class="card-body">
        现代研究表明，经络循行路线与以下解剖结构高度相关：<br><br>
        <strong>神经：</strong>许多穴位位于神经干旁或神经分支处，针刺产生的酸麻胀感（得气感）与神经刺激密切相关。<br><br>
        <strong>血管：</strong>穴位常位于动脉搏动处附近，如太渊（桡动脉）、太溪（胫后动脉）等。<br><br>
        <strong>肌肉筋膜：</strong>肌肉间隙、筋膜层是针刺常到达的层次，也是气感产生的重要部位。
        <br><br>
        <span class="tag tag-nerve">神经</span>
        <span class="tag tag-vessel">血管</span>
        <span class="tag tag-muscle">肌肉筋膜</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>

    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">📍</span><span class="card-name">穴位取穴方法</span></div>
      <div class="card-preview">骨度分寸、体表标志、手指同身寸</div>
      <div class="card-body">
        中医有系统的取穴方法，使穴位定位标准化：<br><br>
        <strong>骨度分寸法：</strong>将人体各部位划分为若干等分，每等分为1寸，是最主要的定位方法。<br><br>
        <strong>体表标志法：</strong>以骨性或肌性标志为参照直接定穴，简单直观。<br><br>
        <strong>手指同身寸：</strong>用患者自身手指宽度作为量取标准，适合床旁操作。<br><br>
        <strong>简便取穴：</strong>如两耳尖连线中点取百会，握拳中指尖处取劳宫等。
        <br><br>
        <span class="tag">骨度分寸</span>
        <span class="tag">手指量法</span>
        <span class="tag">简便取穴</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>

    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">⚠️</span><span class="card-name">针刺安全要点</span></div>
      <div class="card-preview">了解解剖是安全针刺的前提</div>
      <div class="card-body">
        解剖知识对针刺安全至关重要：<br><br>
        <strong>避免损伤重要结构：</strong>胸部穴位需注意气胸风险（肺尖、肋间隙）；颈部穴位需了解颈总动脉、迷走神经位置；腰部穴位注意肾脏位置。<br><br>
        <strong>掌握针刺深度：</strong>不同部位的解剖层次决定了安全的进针深度和方向。<br><br>
        <strong>了解危险穴位：</strong>风府、哑门（近延髓）、人迎（颈总动脉旁）、肩井（近肺尖）等需特别谨慎。
        <br><br>
        <span class="tag" style="background:#fdeaea;color:#8a3030;border-color:#f0b0b0">⚠️ 安全第一</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
  </div>

  <div class="section-title">针灸解剖学关键词导图</div>
  <div style="overflow-x:auto">
  <table class="acu-table">
    <tr><th>层次</th><th>解剖结构</th><th>针灸意义</th><th>代表穴位</th></tr>
    <tr><td>皮肤</td><td>表皮、真皮、皮下脂肪</td><td>浅刺、皮内针</td><td>阿是穴、皮部取穴</td></tr>
    <tr><td>筋膜</td><td>浅筋膜、深筋膜、筋膜间隙</td><td>得气感产生层次</td><td>多数穴位</td></tr>
    <tr><td>肌肉</td><td>肌腹、肌腱、肌间隔</td><td>深刺、强刺激</td><td>足三里、合谷</td></tr>
    <tr><td>神经</td><td>皮神经、神经干、神经分支</td><td>针感传导（酸麻胀）</td><td>内关、委中</td></tr>
    <tr><td>血管</td><td>动脉、静脉、毛细血管</td><td>循经感传可能途径</td><td>太渊、太溪</td></tr>
    <tr><td>骨膜/骨</td><td>骨膜、骨面</td><td>骨膜针法、刮骨法</td><td>大杼、悬钟</td></tr>
  </table>
  </div>

  <!-- Quiz 0 -->
  <div class="quiz-section">
    <div class="quiz-header"><span>📝</span>章节小测</div>
    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">1. 针刺产生的"酸麻胀"感（得气感）主要与哪种解剖结构的刺激有关？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q0_1" value="A">A. 皮肤表皮</label>
        <label class="quiz-opt"><input type="radio" name="q0_1" value="B">B. 神经（皮神经或神经干）</label>
        <label class="quiz-opt"><input type="radio" name="q0_1" value="C">C. 骨膜</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">2. 下列哪类体表标志位置最固定、最可靠？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q0_2" value="A">A. 骨性标志（如枕外隆凸、髂前上棘）</label>
        <label class="quiz-opt"><input type="radio" name="q0_2" value="B">B. 肌性标志（如胸锁乳突肌）</label>
        <label class="quiz-opt"><input type="radio" name="q0_2" value="C">C. 皮肤标志（如皮纹）</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">3. 胸部穴位进针时最需警惕的风险是？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q0_3" value="A">A. 损伤心脏</label>
        <label class="quiz-opt"><input type="radio" name="q0_3" value="B">B. 损伤肋骨</label>
        <label class="quiz-opt"><input type="radio" name="q0_3" value="C">C. 气胸（刺破胸膜/肺）</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <button class="quiz-submit" onclick="submitQuiz(this,0)">提交答案</button>
    <div class="quiz-result"></div>
    <button class="mark-done-btn" onclick="markDone(0)">✓ 标记本章已学完</button>
  </div>
</div>

<!-- ══════════ PANEL 1 · 体表标志 ══════════ -->
<div class="panel" id="panel-1">
  <div class="chapter-header">
    <div class="chapter-num">壹</div>
    <div>
      <div class="chapter-title">主要体表标志</div>
      <div class="chapter-sub">点击人体图各区域 · 快速定位对应内容</div>
    </div>
  </div>

  <div class="body-nav-wrap">
    <!-- SVG 人体导航 -->
    <div class="body-svg-col">
      ${BODY_SVG}
      <div class="region-hint">点击区域查看标志</div>
    </div>

    <!-- 内容区 -->
    <div class="body-content-col">

      <div class="region-section" id="region-head">
        <div class="region-header">
          <div class="region-icon">头</div>头面部标志
        </div>
        <div class="cards-grid">
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">乳突</span></div>
            <div class="card-preview">耳后骨性突起，胸锁乳突肌止点</div>
            <div class="card-body">
              <strong>位置：</strong>耳廓后方，颞骨乳突部，用手指在耳后可明显触及的骨性突起。<br><br>
              <strong>解剖层次：</strong>皮肤 → 皮下组织 → 胸锁乳突肌止点 → 乳突骨面<br><br>
              <strong>针灸意义：</strong>胆经<em>完骨穴</em>位于乳突后下方凹陷处，附近有枕小神经走行。<br><br>
              <span class="tag tag-bone">骨性标志</span>
              <span class="tag tag-nerve">枕小神经</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">翼点</span></div>
            <div class="card-preview">颞部最薄处，四骨交汇，重要危险区</div>
            <div class="card-body">
              <strong>位置：</strong>颞部额骨、顶骨、颞骨、蝶骨四骨交汇处，颧弓中点上方约两横指。<br><br>
              <strong>临床意义：</strong>此处骨质最薄，深面有脑膜中动脉前支走行。外力打击易骨折，引起硬膜外血肿。<br><br>
              <strong>针灸注意：</strong>颞部针刺不宜过深，避免损伤颞肌深面的脑膜血管。<br><br>
              <span class="tag tag-bone">四骨交汇</span>
              <span class="tag tag-vessel">脑膜中动脉</span>
              <span class="tag" style="background:#fdeaea;color:#8a3030;border-color:#f0b0b0">⚠️ 危险区</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">枕外隆凸</span></div>
            <div class="card-preview">后头部正中最突出的骨性隆起</div>
            <div class="card-body">
              <strong>位置：</strong>头后部正中线，沿后发际向上触及的骨性隆起，即枕骨外面中央最突出处。<br><br>
              <strong>针灸意义：</strong>督脉<em>脑户穴</em>位于枕外隆凸上缘，<em>风府穴</em>位于其下方凹陷，深面为延髓，<strong>进针需十分谨慎，禁深刺</strong>。<br><br>
              <strong>周围结构：</strong>枕大神经、枕动脉从此区域穿出，<em>天柱</em>等穴的神经基础。<br><br>
              <span class="tag tag-bone">骨性标志</span>
              <span class="tag tag-nerve">枕大神经</span>
              <span class="tag" style="background:#fdeaea;color:#8a3030;border-color:#f0b0b0">⚠️ 禁深刺</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">💡</span><span class="card-name">眶下孔 · 面动脉</span></div>
            <div class="card-preview">面部神经血管出入口</div>
            <div class="card-body">
              <strong>眶下孔：</strong>眶下缘中点下方约1cm处，眶下神经（三叉神经上颌支分支）和眶下动脉由此穿出。<em>四白穴</em>位于其附近。<br><br>
              <strong>面动脉（颜面动脉）：</strong>从咬肌前缘绕下颌骨下缘处可触及搏动，沿鼻唇沟斜向鼻翼、内眦走行。<em>地仓、迎香</em>等穴附近。<br><br>
              <strong>咬肌：</strong>从颧弓到下颌角的强壮肌肉，咬紧牙关时可触及收缩。<em>颊车穴</em>位于咬肌前缘。<br><br>
              <span class="tag tag-nerve">眶下神经</span>
              <span class="tag tag-vessel">面动脉</span>
              <span class="tag tag-muscle">咬肌</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
        </div>
      </div>

      <div class="region-section" id="region-neck">
        <div class="region-header">
          <div class="region-icon">颈</div>颈项部标志
        </div>
        <div class="cards-grid">
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">舌骨 · 喉结</span></div>
            <div class="card-preview">颈前部重要骨性标志</div>
            <div class="card-body">
              <strong>舌骨：</strong>颈前正中，下颌骨下方约3cm，可在颈前皮下触及的U形小骨。相当于第3颈椎水平。是咽旁穴定位参考。<br><br>
              <strong>喉结（甲状软骨）：</strong>男性明显，女性较小。相当于第4~5颈椎水平。<em>人迎穴</em>位于喉结旁1.5寸，胸锁乳突肌前缘，颈总动脉搏动处——<strong>进针忌深，防伤颈总动脉</strong>。<br><br>
              <span class="tag tag-bone">骨性标志</span>
              <span class="tag tag-vessel">颈总动脉旁</span>
              <span class="tag" style="background:#fdeaea;color:#8a3030;border-color:#f0b0b0">⚠️ 人迎慎针</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">💪</span><span class="card-name">胸锁乳突肌</span></div>
            <div class="card-preview">颈部最重要的肌性标志</div>
            <div class="card-body">
              <strong>位置：</strong>从胸骨柄和锁骨内侧端起，斜向后上方止于颞骨乳突。转头时可清楚看到。<br><br>
              <strong>针灸意义：</strong>胆经<em>风池穴</em>（在其后缘）、胃经<em>人迎穴</em>（在其前缘）均以胸锁乳突肌为定位依据。<br><br>
              <strong>深层结构：</strong>肌肉深面有颈总动脉、颈内静脉、迷走神经（颈动脉鞘）。<br><br>
              <span class="tag tag-muscle">肌性标志</span>
              <span class="tag tag-vessel">颈动脉鞘旁</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">第7颈椎棘突</span></div>
            <div class="card-preview">低头时颈背最突出的棘突，计椎定位起点</div>
            <div class="card-body">
              <strong>位置：</strong>低头时，颈背部最突出的棘突即为C7棘突（大椎穴）。其下为第1胸椎棘突，是向下计数胸椎的起点。<br><br>
              <strong>临床意义：</strong>督脉<em>大椎穴</em>位于C7棘突下凹陷，是重要的定位基准穴。<br><br>
              <strong>周围肌肉：</strong>斜方肌、肩胛提肌、斜角肌（前中后）分别止于或起于颈椎横突。<br><br>
              <span class="tag tag-bone">计椎基准</span>
              <span class="tag tag-muscle">斜方肌起点</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
        </div>
      </div>

      <div class="region-section" id="region-chest">
        <div class="region-header">
          <div class="region-icon">胸</div>胸部标志
        </div>
        <div class="cards-grid">
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">胸骨角</span></div>
            <div class="card-preview">胸骨柄与体交界，计肋关键标志</div>
            <div class="card-body">
              <strong>位置：</strong>胸骨正中，胸骨柄与胸骨体连接处略微隆起的横嵴，平第2肋软骨，可清晰触及。<br><br>
              <strong>计肋意义：</strong>第2肋是计肋起点——找到胸骨角旁即为第2肋，向下依次为第3、4、5肋。这是膻中穴（第4肋间隙水平）等胸部穴位定位的基础。<br><br>
              <strong>深面结构：</strong>胸骨角平面是气管分叉处（隆嵴），主动脉弓下缘。<br><br>
              <span class="tag tag-bone">计肋起点</span>
              <span class="tag">第2肋平面</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">喙突 · 锁骨</span></div>
            <div class="card-preview">肩前区重要骨性标志</div>
            <div class="card-body">
              <strong>锁骨：</strong>S形骨，全长均可触及，是胸部与上肢的分界。<em>云门穴</em>位于锁骨下窝，锁骨内外1/3交界点下方。<br><br>
              <strong>喙突：</strong>肩胛骨喙突，锁骨中外1/3交界下方2cm，可触及的骨性突起。有喙肱肌、肱二头肌短头、胸小肌附着。<br><br>
              <strong>针灸意义：</strong>喙突内侧有臂丛神经通过，针刺肩前区穴位时应了解此结构。<br><br>
              <span class="tag tag-bone">骨性标志</span>
              <span class="tag tag-nerve">臂丛内侧</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">剑突 · 肋弓</span></div>
            <div class="card-preview">胸腹交界的重要标志</div>
            <div class="card-body">
              <strong>剑突：</strong>胸骨最下端，形态变异较大（可为软骨或骨），在剑胸结合处下方可触及。中脘、下脘等穴以剑突为参照。<br><br>
              <strong>肋弓：</strong>第8~10肋软骨依次与上一肋连接形成肋弓，构成胸腹边界。第11、12为浮肋，不与肋弓相连。<br><br>
              <strong>针灸应用：</strong>期门穴在乳头直下第6肋间隙，章门穴在第11肋游离端——均以肋骨为定位依据。<br><br>
              <span class="tag tag-bone">胸腹分界</span>
              <span class="tag">浮肋（11、12）</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
        </div>
      </div>

      <div class="region-section" id="region-abdomen">
        <div class="region-header">
          <div class="region-icon">腹</div>腹部标志
        </div>
        <div class="cards-grid">
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">💪</span><span class="card-name">腹直肌外侧缘</span></div>
            <div class="card-preview">腹部穴位的重要参照线</div>
            <div class="card-body">
              <strong>位置：</strong>腹部正中线两侧约2cm处，腹直肌的外侧边界。收腹时可明显看到。<br><br>
              <strong>针灸意义：</strong>胃经腹部穴位（天枢等）位于脐旁2寸，约在腹直肌外侧缘；脾经穴位（大横等）位于脐旁4寸，在腹直肌外侧更远处。<br><br>
              <strong>深层：</strong>腹直肌深面为腹腔，天枢穴处深面为升结肠/降结肠。<br><br>
              <span class="tag tag-muscle">肌性标志</span>
              <span class="tag">胃经定位</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">髂前上棘 · 耻骨结节</span></div>
            <div class="card-preview">下腹部与腹股沟区定位标志</div>
            <div class="card-body">
              <strong>髂前上棘：</strong>髂嵴前端，腹股沟韧带外侧端附着处，侧卧时可清楚触及。是腹部分区和穴位定位的重要参照，也是骨度分寸中"脐至耻骨联合上缘5寸"的参照结构。<br><br>
              <strong>耻骨结节：</strong>耻骨联合两侧的小结节，腹股沟韧带内侧端，腹股沟浅环的标志。<em>曲骨穴</em>在耻骨联合上缘正中。<br><br>
              <span class="tag tag-bone">骨度分寸参照</span>
              <span class="tag">腹股沟韧带</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
        </div>
      </div>

      <div class="region-section" id="region-back">
        <div class="region-header">
          <div class="region-icon">背</div>背部 · 腰骶部标志
        </div>
        <div class="cards-grid">
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">肩胛骨标志</span></div>
            <div class="card-preview">肩胛骨上下角与肩胛冈，计胸椎基准</div>
            <div class="card-body">
              <strong>肩胛骨上角：</strong>平第2胸椎棘突水平，可作为计椎标志。<br><br>
              <strong>肩胛骨下角：</strong>平第7胸椎棘突水平，是重要的计肋和计椎标志——常用"两肩胛下角连线交脊柱处=T7棘突"。<br><br>
              <strong>肩胛冈：</strong>肩胛骨背面横行的骨嵴，从肩峰向内，可触及至肩胛骨脊柱缘。<em>天宗穴</em>位于肩胛冈中点下方。<br><br>
              <span class="tag tag-bone">计椎关键</span>
              <span class="tag">T7水平</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">💪</span><span class="card-name">背部肌群</span></div>
            <div class="card-preview">竖脊肌、菱形肌、后锯肌等</div>
            <div class="card-body">
              <strong>竖脊肌：</strong>脊柱两侧纵行肌群，从骶骨到枕骨。膀胱经背俞穴（肺俞、心俞等）大多位于竖脊肌内侧缘，即脊柱旁1.5寸处。<br><br>
              <strong>菱形肌：</strong>位于斜方肌深面，连接脊柱与肩胛骨内侧缘。肩胛骨内侧缘区域穴位针刺时会到达此肌。<br><br>
              <strong>横突棘肌（夹肌）：</strong>深层肌群，脊神经后支穿出于此，是背俞穴针感传导的重要结构。<br><br>
              <span class="tag tag-muscle">竖脊肌</span>
              <span class="tag tag-muscle">菱形肌</span>
              <span class="tag tag-nerve">脊神经后支</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">腰骶部标志</span></div>
            <div class="card-preview">第4腰椎、髂后上棘、骶后孔、坐骨结节</div>
            <div class="card-body">
              <strong>第4腰椎棘突：</strong>两侧髂嵴最高点连线（雅各比线）与正中线交点，即L4棘突，是定位腰椎的重要标志。<em>腰阳关穴</em>在L4棘突下。<br><br>
              <strong>髂后上棘：</strong>骶骨与髂骨交界附近，皮肤可见浅凹陷（"酒窝"），平第2骶后孔。<br><br>
              <strong>骶后孔：</strong>骶骨背面4对孔，骶神经后支由此穿出。<em>八髎穴</em>（上髎、次髎、中髎、下髎左右各4）即位于骶后孔中。<br><br>
              <strong>坐骨结节：</strong>坐位时承受体重的骨性突起，坐骨神经从梨状肌下孔穿出，经坐骨结节与大转子连线中点下方走行。<br><br>
              <span class="tag tag-bone">L4棘突</span>
              <span class="tag tag-nerve">坐骨神经</span>
              <span class="tag">八髎穴</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">💪</span><span class="card-name">臀部肌群</span></div>
            <div class="card-preview">臀大肌、梨状肌与坐骨神经</div>
            <div class="card-body">
              <strong>臀大肌：</strong>臀部最大肌肉，构成臀部外形。臀部注射通常选择外上象限，避开坐骨神经。<br><br>
              <strong>梨状肌：</strong>深层小肌，起自骶骨，止于大转子。梨状肌上、下孔是臀部神经血管通道。<em>环跳穴</em>位于股骨大转子与骶裂孔连线中外1/3交点，坐骨神经从梨状肌下孔穿出经此处。<br><br>
              <strong>坐骨神经：</strong>人体最粗大的神经，从梨状肌下孔穿出，沿大腿后面下行至腘窝分支。针刺环跳时可出现沿坐骨神经走向的放射感。<br><br>
              <span class="tag tag-muscle">梨状肌</span>
              <span class="tag tag-nerve">坐骨神经</span>
              <span class="tag">环跳穴</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
        </div>
      </div>

      <div class="region-section" id="region-arm">
        <div class="region-header">
          <div class="region-icon">臂</div>上肢标志
        </div>
        <div class="cards-grid">
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">肱骨标志</span></div>
            <div class="card-preview">大结节、内外上髁，上肢计骨分寸基准</div>
            <div class="card-body">
              <strong>肱骨大结节：</strong>肩峰外下方可触及的骨性隆起，三角肌止点区域。<em>肩髃穴</em>位于大结节前方凹陷。<br><br>
              <strong>肱骨内上髁：</strong>肘内侧最突出骨点，尺神经沟位于内上髁后方——尺神经从此绕行，叩击时有"触电感"放射至小指。<br><br>
              <strong>肱骨外上髁：</strong>肘外侧骨点，桡神经分叉处附近，伸肌总腱起点（网球肘位置）。<br><br>
              <span class="tag tag-bone">肘部标志</span>
              <span class="tag tag-nerve">尺神经沟</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">💪</span><span class="card-name">上臂肌群与腕部标志</span></div>
            <div class="card-preview">肱二头肌、桡腕骨茎突，腕部穴位基础</div>
            <div class="card-body">
              <strong>肱二头肌：</strong>屈肘时上臂前面隆起的肌肉，其内外侧沟（肱二头肌沟）是重要的肌性标志。肱动脉在内侧沟走行，正中神经伴行。<br><br>
              <strong>尺骨茎突：</strong>腕尺侧骨性突起。<strong>桡骨茎突：</strong>腕桡侧较大骨性突起，桡动脉从旁走行（太渊穴）。<br><br>
              <strong>腕前区肌腱：</strong>从桡到尺依次为桡侧腕屈肌腱、掌长肌腱（中央）、尺侧腕屈肌腱。<em>内关穴</em>在两腱之间（掌长肌与桡侧腕屈肌之间），正中神经从中穿过。<br><br>
              <span class="tag tag-muscle">肌腱标志</span>
              <span class="tag tag-vessel">桡动脉</span>
              <span class="tag tag-nerve">正中神经</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
        </div>
      </div>

      <div class="region-section" id="region-leg">
        <div class="region-header">
          <div class="region-icon">腿</div>下肢标志
        </div>
        <div class="cards-grid">
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">股骨大转子 · 膝部标志</span></div>
            <div class="card-preview">下肢骨性标志核心</div>
            <div class="card-body">
              <strong>股骨大转子：</strong>大腿外侧最大的骨性突起，与坐骨结节连线中点即为坐骨神经位置。<em>风市穴</em>在大腿外侧，腘横纹上7寸。<br><br>
              <strong>腓骨小头：</strong>膝外下方明显突起，腓总神经绕过腓骨颈此处——是腓总神经最表浅处，受压易造成足下垂。<em>阳陵泉穴</em>在腓骨小头前下方凹陷。<br><br>
              <strong>胫骨粗隆：</strong>胫骨上端前面粗糙突起，髌韧带止点，<em>足三里穴</em>在其下3寸。<br><br>
              <strong>内外踝：</strong>内踝（胫骨下端）和外踝（腓骨下端），多条经脉穴位以此为参照。<br><br>
              <span class="tag tag-bone">下肢基准</span>
              <span class="tag tag-nerve">腓总神经</span>
              <span class="tag">足三里</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">💪</span><span class="card-name">小腿肌群与腘窝</span></div>
            <div class="card-preview">腓肠肌、跟腱、腘窝重要结构</div>
            <div class="card-body">
              <strong>腘窝：</strong>膝后菱形凹陷，内有腘动静脉、胫神经走行，腓总神经沿外侧缘。<em>委中穴</em>在腘横纹中点，腘动脉搏动处旁，针刺可引起下肢放射感（胫神经）。<br><br>
              <strong>腓肠肌：</strong>小腿后面的"小腿肚"，内外两头，足踝跖屈时收缩。<em>承山穴</em>在腓肠肌两头交汇处（人字纹上），<em>承筋穴</em>在腓肠肌肌腹中央。<br><br>
              <strong>跟腱：</strong>腓肠肌和比目鱼肌肌腱合并而成，止于跟骨，是人体最粗壮的肌腱。<br><br>
              <span class="tag tag-muscle">腓肠肌</span>
              <span class="tag tag-vessel">腘动脉</span>
              <span class="tag tag-nerve">胫神经</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
          <div class="card" onclick="toggleCard(this)">
            <div class="card-head"><span class="card-icon">🦴</span><span class="card-name">踝足部标志</span></div>
            <div class="card-preview">踝部神经血管，足底重要穴位</div>
            <div class="card-body">
              <strong>内踝后方：</strong>胫骨后肌腱、趾长屈肌腱、胫后动静脉、胫神经依次经过，构成"踝管"。<em>太溪穴</em>在内踝与跟腱之间，胫后动脉搏动处。<br><br>
              <strong>足背：</strong>足背动脉（胫前动脉延续）走行于第1、2跖骨之间近端，腓深神经伴行。<em>太冲穴</em>在第1、2跖骨结合部前方。<br><br>
              <strong>舟骨粗隆：</strong>足内侧中部可触及的骨性突起，内踝前下方，是足弓测量参考点。<br><br>
              <span class="tag tag-vessel">胫后动脉</span>
              <span class="tag tag-nerve">腓深神经</span>
              <span class="tag">太溪·太冲</span>
            </div>
            <div class="expand-hint">点击展开 ▾</div>
          </div>
        </div>
      </div>

    </div><!-- end body-content-col -->
  </div><!-- end body-nav-wrap -->

  <!-- Quiz 1 -->
  <div class="quiz-section">
    <div class="quiz-header"><span>📝</span>章节小测</div>
    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">1. 两侧肩胛骨下角的连线，对应哪个胸椎棘突水平？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q1_1" value="A">A. 第4胸椎</label>
        <label class="quiz-opt"><input type="radio" name="q1_1" value="B">B. 第7胸椎</label>
        <label class="quiz-opt"><input type="radio" name="q1_1" value="C">C. 第10胸椎</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">2. 两侧髂嵴最高点连线与脊柱的交点，对应哪个椎体棘突？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q1_2" value="A">A. 第2腰椎</label>
        <label class="quiz-opt"><input type="radio" name="q1_2" value="B">B. 第3腰椎</label>
        <label class="quiz-opt"><input type="radio" name="q1_2" value="C">C. 第4腰椎</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">3. 阳陵泉穴位于哪个骨性标志的前下方凹陷？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q1_3" value="A">A. 腓骨小头</label>
        <label class="quiz-opt"><input type="radio" name="q1_3" value="B">B. 内踝</label>
        <label class="quiz-opt"><input type="radio" name="q1_3" value="C">C. 胫骨粗隆</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">4. 颈部人迎穴进针需特别注意哪个重要血管？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q1_4" value="A">A. 颈外静脉</label>
        <label class="quiz-opt"><input type="radio" name="q1_4" value="B">B. 颈总动脉</label>
        <label class="quiz-opt"><input type="radio" name="q1_4" value="C">C. 锁骨下动脉</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">5. 腕前区"内关穴"位于哪两个肌腱之间？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q1_5" value="A">A. 尺侧腕屈肌与掌长肌之间</label>
        <label class="quiz-opt"><input type="radio" name="q1_5" value="B">B. 尺侧腕屈肌与桡侧腕屈肌之间</label>
        <label class="quiz-opt"><input type="radio" name="q1_5" value="C">C. 掌长肌与桡侧腕屈肌之间</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <button class="quiz-submit" onclick="submitQuiz(this,1)">提交答案</button>
    <div class="quiz-result"></div>
    <button class="mark-done-btn" onclick="markDone(1)">✓ 标记本章已学完</button>
  </div>
</div>

<!-- ══════════ PANEL 2 · 经络解剖 ══════════ -->
<div class="panel" id="panel-2">
  <div class="chapter-header">
    <div class="chapter-num">贰</div>
    <div>
      <div class="chapter-title">经络与组织器官结构</div>
      <div class="chapter-sub">十二经脉循行处的神经 · 血管 · 肌肉解剖</div>
    </div>
  </div>

  <div class="intro-box">
    十二经脉各有其循行路线，沿途经过特定的神经、血管和肌肉组织。理解这些解剖关系，有助于解释穴位的针感传导原理、掌握安全进针深度，以及理解针灸治疗效应的现代机制。
  </div>

  <div class="section-title">手太阴 · 手阳明（肺经 · 大肠经）</div>
  <div class="meridian-grid">
    <div class="mer-card" style="background:#f0f4fa;border-color:#a0b8d8;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-lung)">肺</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-lung)">手太阴肺经</div>
          <div class="mer-alias">起于中府，止于少商 · 11穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-lung)">神经</span><span><span class="mer-acupoint">鱼际</span>桡神经浅支；前臂：前臂外侧皮神经</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-lung)">血管</span><span><span class="mer-acupoint">太渊</span>桡动脉搏动处，是"寸口脉"切脉位置</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-lung)">肌肉</span><span>前臂：肱桡肌内侧；鱼际：鱼际肌群</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-lung)">要穴</span><span><span class="mer-acupoint">太渊</span>桡动脉旁，切脉脉位；<span class="mer-acupoint">列缺</span>腕上1.5寸，桡骨茎突上方</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-lung)">注意</span><span>太渊针刺需避开桡动脉，宜在动脉尺侧进针</span></div>
      </div>
    </div>
    <div class="mer-card" style="background:#f2f7ee;border-color:#a8d090;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-li)">大肠</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-li)">手阳明大肠经</div>
          <div class="mer-alias">起于商阳，止于迎香 · 20穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-li)">神经</span><span><span class="mer-acupoint">合谷</span>桡神经浅支；<span class="mer-acupoint">曲池</span>前臂背侧皮神经；前臂：桡神经深支</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-li)">肌肉</span><span><span class="mer-acupoint">手三里·曲池</span>：肱桡肌；上臂：<span class="mer-acupoint">臂臑</span>：肱二头肌止点区</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-li)">要穴</span><span><span class="mer-acupoint">合谷</span>第1、2掌骨间，桡神经浅支；<span class="mer-acupoint">曲池</span>肘横纹桡侧端，肱桡肌起点</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-li)">注意</span><span>合谷针感可沿桡神经传至拇指；孕妇禁针合谷</span></div>
      </div>
    </div>
  </div>

  <div class="section-title">足阳明 · 足太阴（胃经 · 脾经）</div>
  <div class="meridian-grid">
    <div class="mer-card" style="background:#fdf8ec;border-color:#e0c870;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-st)">胃</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-st)">足阳明胃经</div>
          <div class="mer-alias">起于承泣，止于厉兑 · 45穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-st)">面部</span><span><span class="mer-acupoint">四白</span>眶下动静脉、眶下神经；<span class="mer-acupoint">大迎</span>面动脉；<span class="mer-acupoint">人迎</span>颈总动脉、迷走神经⚠️</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-st)">下肢</span><span><span class="mer-acupoint">伏兔</span>股四头肌；<span class="mer-acupoint">足三里</span>胫骨前肌、腓深神经、胫前动脉</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-st)">足背</span><span><span class="mer-acupoint">解溪·冲阳</span>足背动脉；趾长伸肌腱间</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-st)">要穴</span><span><span class="mer-acupoint">足三里</span>胫骨粗隆下3寸，是针灸最重要穴位之一，深层为腓深神经、胫前动脉</span></div>
      </div>
    </div>
    <div class="mer-card" style="background:#fdf3ec;border-color:#e0a870;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-sp)">脾</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-sp)">足太阴脾经</div>
          <div class="mer-alias">起于隐白，止于大包 · 21穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-sp)">血管</span><span><span class="mer-acupoint">血海</span>股动脉内侧支；全程与大隐静脉伴行</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-sp)">神经</span><span>隐神经（股神经皮支）与脾经下肢段伴行</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-sp)">肌肉</span><span>小腿内侧：比目鱼肌内缘；大腿：缝匠肌后方</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-sp)">要穴</span><span><span class="mer-acupoint">三阴交</span>内踝上3寸，胫骨内侧缘后方，脾肝肾三经交汇</span></div>
      </div>
    </div>
  </div>

  <div class="section-title">手少阴 · 手太阳（心经 · 小肠经）</div>
  <div class="meridian-grid">
    <div class="mer-card" style="background:#fdf0f0;border-color:#e09090;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-ht)">心</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-ht)">手少阴心经</div>
          <div class="mer-alias">起于极泉，止于少冲 · 9穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-ht)">神经</span><span><span class="mer-acupoint">神门</span>尺神经；前臂内侧皮神经贯穿心经下肢段</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-ht)">血管</span><span><span class="mer-acupoint">神门</span>尺动脉；<span class="mer-acupoint">极泉</span>腋动脉旁</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-ht)">要穴</span><span><span class="mer-acupoint">神门</span>腕横纹尺侧端，尺侧腕屈肌腱桡侧，尺动脉内侧</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-ht)">注意</span><span>神门针刺时宜贴肌腱桡侧进针，避免刺伤尺动脉</span></div>
      </div>
    </div>
    <div class="mer-card" style="background:#fdf0f5;border-color:#e090b0;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-si)">小肠</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-si)">手太阳小肠经</div>
          <div class="mer-alias">起于少泽，止于听宫 · 19穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-si)">神经</span><span><span class="mer-acupoint">后溪·小海</span>尺神经；肩部：腋神经分支</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-si)">肌肉</span><span>前臂尺侧：尺侧腕屈肌；上臂：肱三头肌内侧头</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-si)">要穴</span><span><span class="mer-acupoint">后溪</span>第5掌骨头尺侧，握拳掌横纹尺侧端赤白肉际</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-si)">注意</span><span>小海在肘内侧，尺神经沟处，叩击可引起小指麻</span></div>
      </div>
    </div>
  </div>

  <div class="section-title">足太阳 · 足少阴（膀胱经 · 肾经）</div>
  <div class="meridian-grid">
    <div class="mer-card" style="background:#eef4fa;border-color:#90b8d8;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-bl)">膀胱</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-bl)">足太阳膀胱经</div>
          <div class="mer-alias">起于睛明，止于至阴 · 67穴（最多）</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-bl)">背部</span><span>竖脊肌两侧；脊神经后支（内侧支）支配背俞穴区</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-bl)">下肢</span><span><span class="mer-acupoint">委中</span>腘动静脉、胫神经；<span class="mer-acupoint">承山</span>胫后动静脉；小隐静脉伴行下肢段</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-bl)">头部</span><span><span class="mer-acupoint">睛明</span>滑车上神经；眼内角内侧，内眦动脉⚠️禁捻转</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-bl)">要穴</span><span><span class="mer-acupoint">委中</span>腘横纹中点，膀胱经合穴，深刺可触及胫神经引发放射感</span></div>
      </div>
    </div>
    <div class="mer-card" style="background:#eeeefa;border-color:#9090d0;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-ki)">肾</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-ki)">足少阴肾经</div>
          <div class="mer-alias">起于涌泉，止于俞府 · 27穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-ki)">足部</span><span><span class="mer-acupoint">涌泉</span>足底内外侧动脉、足底内外侧神经（足底中央凹陷）</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-ki)">踝部</span><span><span class="mer-acupoint">太溪</span>胫后动脉搏动处、胫神经；内踝后方踝管区</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-ki)">要穴</span><span><span class="mer-acupoint">太溪</span>内踝高点与跟腱之间，胫后动脉旁，可切脉；<span class="mer-acupoint">涌泉</span>足底第2、3跖趾关节近端</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-ki)">注意</span><span>太溪针刺宜贴跟腱前缘，避开胫后动脉</span></div>
      </div>
    </div>
  </div>

  <div class="section-title">手厥阴 · 手少阳（心包经 · 三焦经）</div>
  <div class="meridian-grid">
    <div class="mer-card" style="background:#f5f0fa;border-color:#c0a0e0;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-pc)">心包</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-pc)">手厥阴心包经</div>
          <div class="mer-alias">起于天池，止于中冲 · 9穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-pc)">神经</span><span><span class="mer-acupoint">内关·间使</span>正中神经（两腱之间），针感沿正中神经向指端传导</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-pc)">血管</span><span>尺动脉-骨间前动脉；前臂正中静脉</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-pc)">要穴</span><span><span class="mer-acupoint">内关</span>腕上2寸，掌长肌腱与桡侧腕屈肌腱之间，正中神经从此通过；治心悸、失眠、恶心</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-pc)">注意</span><span>内关深刺可刺及正中神经，引起手指麻电感；临床以针感传至中指为宜</span></div>
      </div>
    </div>
    <div class="mer-card" style="background:#eef8f4;border-color:#90d0b8;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-sj)">三焦</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-sj)">手少阳三焦经</div>
          <div class="mer-alias">起于关冲，止于丝竹空 · 23穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-sj)">神经</span><span><span class="mer-acupoint">外关</span>桡神经深支（骨间后神经）；面部：<span class="mer-acupoint">翳风</span>面神经干⚠️</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-sj)">血管</span><span>尺动脉-骨间后动脉走行于背侧骨间肌间</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-sj)">淋巴</span><span>有研究认为三焦经部分循行与淋巴管分布相关</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-sj)">要穴</span><span><span class="mer-acupoint">外关</span>腕背上2寸，尺桡骨之间；<span class="mer-acupoint">翳风</span>耳垂后凹陷，面神经从腮腺穿出处旁</span></div>
      </div>
    </div>
  </div>

  <div class="section-title">足少阳 · 足厥阴（胆经 · 肝经）</div>
  <div class="meridian-grid">
    <div class="mer-card" style="background:#f0f8f0;border-color:#90c090;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-gb)">胆</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-gb)">足少阳胆经</div>
          <div class="mer-alias">起于瞳子髎，止于足窍阴 · 44穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-gb)">头部</span><span><span class="mer-acupoint">风池</span>枕大神经（胆经穴）；<span class="mer-acupoint">完骨</span>枕小神经；<span class="mer-acupoint">阳白</span>眶上神经</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-gb)">下肢</span><span><span class="mer-acupoint">风市</span>阔筋膜张肌、髂胫束；<span class="mer-acupoint">阳陵泉</span>腓浅神经</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-gb)">小腿</span><span>腓骨长短肌外侧；腓浅神经在小腿外侧皮下走行</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-gb)">要穴</span><span><span class="mer-acupoint">风池</span>枕骨下，斜方肌与胸锁乳突肌之间，枕大/小神经穿出处；<span class="mer-acupoint">阳陵泉</span>腓骨小头前下方，腓总神经绕腓骨颈处</span></div>
      </div>
    </div>
    <div class="mer-card" style="background:#edf5ea;border-color:#80b070;" onclick="toggleMer(this)">
      <div class="mer-head">
        <div class="mer-badge" style="background:var(--c-lv)">肝</div>
        <div class="mer-info">
          <div class="mer-name" style="color:var(--c-lv)">足厥阴肝经</div>
          <div class="mer-alias">起于大敦，止于期门 · 14穴</div>
        </div><span>▾</span>
      </div>
      <div class="mer-body">
        <div class="mer-row"><span class="mer-key" style="color:var(--c-lv)">血管</span><span>大隐静脉沿内踝前方上行，与肝经下肢段伴行</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-lv)">神经</span><span>隐神经（股神经皮支）；<span class="mer-acupoint">太冲</span>腓深神经</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-lv)">胸腹</span><span><span class="mer-acupoint">期门</span>第6肋间神经；乳头直下第6肋间隙</span></div>
        <div class="mer-row"><span class="mer-key" style="color:var(--c-lv)">要穴</span><span><span class="mer-acupoint">太冲</span>第1、2跖骨结合部前方，腓深神经及足背动脉分支旁；肝经原穴，治疗肝胆、情志疾患</span></div>
      </div>
    </div>
  </div>

  <!-- Quiz 2 -->
  <div class="quiz-section">
    <div class="quiz-header"><span>📝</span>章节小测</div>
    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">1. 太渊穴是哪条动脉的切脉位置（寸口脉）？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q2_1" value="A">A. 尺动脉</label>
        <label class="quiz-opt"><input type="radio" name="q2_1" value="B">B. 桡动脉</label>
        <label class="quiz-opt"><input type="radio" name="q2_1" value="C">C. 肱动脉</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">2. 内关穴两腱之间深层走行的重要神经是？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q2_2" value="A">A. 尺神经</label>
        <label class="quiz-opt"><input type="radio" name="q2_2" value="B">B. 桡神经</label>
        <label class="quiz-opt"><input type="radio" name="q2_2" value="C">C. 正中神经</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">3. 风池穴的针感（酸胀向头顶传导）主要与哪条神经有关？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q2_3" value="A">A. 枕大神经</label>
        <label class="quiz-opt"><input type="radio" name="q2_3" value="B">B. 面神经</label>
        <label class="quiz-opt"><input type="radio" name="q2_3" value="C">C. 三叉神经</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">4. 委中穴位于腘横纹中点，深刺时可刺及哪条神经引起下肢放射感？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q2_4" value="A">A. 腓总神经</label>
        <label class="quiz-opt"><input type="radio" name="q2_4" value="B">B. 胫神经</label>
        <label class="quiz-opt"><input type="radio" name="q2_4" value="C">C. 隐神经</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">5. 太溪穴在内踝后方，是哪条动脉的切脉位置？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q2_5" value="A">A. 足背动脉</label>
        <label class="quiz-opt"><input type="radio" name="q2_5" value="B">B. 腓动脉</label>
        <label class="quiz-opt"><input type="radio" name="q2_5" value="C">C. 胫后动脉</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <button class="quiz-submit" onclick="submitQuiz(this,2)">提交答案</button>
    <div class="quiz-result"></div>
    <button class="mark-done-btn" onclick="markDone(2)">✓ 标记本章已学完</button>
  </div>
</div>

<!-- ══════════ PANEL 3 · 穴位取穴 ══════════ -->
<div class="panel" id="panel-3">
  <div class="chapter-header">
    <div class="chapter-num">叁</div>
    <div>
      <div class="chapter-title">穴位定位方法</div>
      <div class="chapter-sub">骨度分寸 · 体表标志 · 手指同身寸 · 简便取穴</div>
    </div>
  </div>

  <div class="intro-box">
    准确的穴位定位是针灸疗效的基础。中医发展出四种主要的取穴方法，在临床中常常联合使用，互相印证，以确保取穴准确。
  </div>

  <div class="section-title">四种取穴方法</div>
  <div class="method-grid">
    <div class="method-card">
      <div class="method-num">一</div>
      <div class="method-name">骨度分寸法</div>
      <div class="method-desc">将人体各部位两骨端之间的距离，规定为一定的寸数，以此折算穴位的距离。这是最主要、最标准的取穴方法，不受身高胖瘦影响。</div>
      <div class="method-example">💡 两乳头间距 = 8寸；脐至耻骨联合上缘 = 5寸</div>
    </div>
    <div class="method-card">
      <div class="method-num">二</div>
      <div class="method-name">解剖标志法</div>
      <div class="method-desc">以体表可见或可触摸到的解剖结构（骨性突起、肌腱、皮纹等）为参照直接定穴。简单直观，适合初学者。</div>
      <div class="method-example">💡 两眉中间取印堂；脐中取神阙；乳头下第6肋间取期门</div>
    </div>
    <div class="method-card">
      <div class="method-num">三</div>
      <div class="method-name">手指同身寸法</div>
      <div class="method-desc">用患者自身手指的宽度作为取穴的度量标准，适合床旁操作。分为中指同身寸、拇指同身寸和横指同身寸（一夫法）。</div>
      <div class="method-example">💡 中指屈曲时中节两端纹头距离 = 1寸；四指并拢宽度 = 3寸（一夫法）</div>
    </div>
    <div class="method-card">
      <div class="method-num">四</div>
      <div class="method-name">简便取穴法</div>
      <div class="method-desc">利用特殊姿势或简单方法快速找到穴位，适合教学示范。是临床中辅助记忆、验证穴位的实用方法。</div>
      <div class="method-example">💡 两耳尖连线中点取百会；自然下垂中指尖取风市</div>
    </div>
  </div>

  <div class="section-title">骨度分寸速查表</div>
  <div style="overflow-x:auto">
  <table class="acu-table">
    <tr><th>部位</th><th>起止点</th><th>折量寸数</th><th>常用穴位参考</th></tr>
    <tr><td>头部</td><td>前发际正中 → 后发际正中</td><td>12寸</td><td>百会（前7寸）</td></tr>
    <tr><td>胸部</td><td>两乳头之间（横寸）</td><td>8寸</td><td>膻中（两乳间）</td></tr>
    <tr><td>胸腹</td><td>胸骨上窝 → 胸剑联合</td><td>9寸</td><td>天突、璇玑、华盖</td></tr>
    <tr><td>上腹</td><td>胸剑联合 → 脐中</td><td>8寸</td><td>中脘（脐上4寸）</td></tr>
    <tr><td>下腹</td><td>脐中 → 耻骨联合上缘</td><td>5寸</td><td>关元（脐下3寸）</td></tr>
    <tr><td>背部（横）</td><td>两肩胛骨内侧缘之间</td><td>6寸</td><td>背俞穴（旁开1.5/3寸）</td></tr>
    <tr><td>上臂</td><td>腋前纹头 → 肘横纹</td><td>9寸</td><td>臂臑（腋下3寸）</td></tr>
    <tr><td>前臂</td><td>肘横纹 → 腕横纹</td><td>12寸</td><td>内关（腕上2寸）</td></tr>
    <tr><td>股部</td><td>臀横纹 → 腘横纹</td><td>14寸</td><td>殷门（臀下6寸）</td></tr>
    <tr><td>小腿</td><td>腘横纹 → 外踝尖</td><td>16寸</td><td>足三里（膝下3寸）</td></tr>
    <tr><td>内踝上</td><td>内踝尖 → 腘横纹（内）</td><td>13寸</td><td>三阴交（内踝上3寸）</td></tr>
  </table>
  </div>

  <div class="section-title">结合体表标志的取穴示例</div>
  <div class="cards-grid">
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">📍</span><span class="card-name">足三里取穴</span></div>
      <div class="card-preview">膝下3寸，胫骨旁开1横指</div>
      <div class="card-body">
        <strong>方法1（骨度法）：</strong>外膝眼（犊鼻）直下3寸，胫骨前嵴外1横指（约1寸）处。<br><br>
        <strong>方法2（体表标志）：</strong>先找到胫骨粗隆（髌韧带止点），其下约3寸、外侧1寸。<br><br>
        <strong>解剖层次：</strong>皮肤 → 皮下 → 胫骨前肌（或肌间隔）→ 腓深神经、胫前动脉<br><br>
        <strong>验证：</strong>按压时局部酸胀，深层可能有沿小腿前面向下的放射感。<br><br>
        <span class="tag tag-nerve">腓深神经</span><span class="tag tag-vessel">胫前动脉</span><span class="tag tag-muscle">胫骨前肌</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">📍</span><span class="card-name">内关取穴</span></div>
      <div class="card-preview">腕横纹上2寸，两腱之间</div>
      <div class="card-body">
        <strong>方法：</strong>腕掌侧横纹上2寸（3横指），掌长肌腱与桡侧腕屈肌腱之间。<br><br>
        <strong>找腱方法：</strong>握拳屈腕时，腕前正中可见两条平行肌腱——靠桡侧为桡侧腕屈肌腱，靠尺侧为掌长肌腱（约10%人缺如），穴在两腱之间。<br><br>
        <strong>解剖层次：</strong>皮肤 → 皮下 → 两腱间 → 正中神经（深层），指浅屈肌<br><br>
        <strong>针感：</strong>得气时有麻电感向中指放射（正中神经支配）。<br><br>
        <span class="tag tag-nerve">正中神经</span><span class="tag tag-muscle">指浅屈肌</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">📍</span><span class="card-name">合谷取穴</span></div>
      <div class="card-preview">第1、2掌骨间，近第2掌骨中点</div>
      <div class="card-body">
        <strong>方法1（简便）：</strong>拇指、示指张开，另一手拇指横纹压在虎口上，拇指尖所到之处即是。<br><br>
        <strong>方法2（精确）：</strong>第2掌骨桡侧中点处，按压有酸胀感。<br><br>
        <strong>解剖层次：</strong>皮肤 → 第1骨间背侧肌 → 拇收肌（斜头）→ 深层有桡神经深支<br><br>
        <strong>针感：</strong>局部酸胀，可向拇指、示指放射（桡神经浅支分布区）。<br><br>
        <strong>注意：</strong>孕妇禁针——合谷有催产作用。<br><br>
        <span class="tag tag-nerve">桡神经浅支</span><span class="tag tag-muscle">骨间背侧肌</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
    <div class="card" onclick="toggleCard(this)">
      <div class="card-head"><span class="card-icon">📍</span><span class="card-name">八髎穴取穴</span></div>
      <div class="card-preview">骶后孔中，髂后上棘为参照</div>
      <div class="card-body">
        <strong>参照标志：</strong>髂后上棘连线约平第2骶后孔（次髎），这是最重要的参照点。<br><br>
        <strong>上髎：</strong>第1骶后孔，髂后上棘上内方约1横指。<br>
        <strong>次髎：</strong>第2骶后孔，髂后上棘内下方，是临床最常用的髎穴。<br>
        <strong>中髎：</strong>第3骶后孔。<br>
        <strong>下髎：</strong>第4骶后孔，骶管裂孔旁开约1寸。<br><br>
        <strong>解剖：</strong>骶神经后支从各骶后孔穿出，针刺八髎可产生向会阴部、下腹部的放射感。<br><br>
        <span class="tag tag-nerve">骶神经后支</span><span class="tag tag-bone">骶后孔</span>
      </div>
      <div class="expand-hint">点击展开 ▾</div>
    </div>
  </div>

  <!-- Quiz 3 -->
  <div class="quiz-section">
    <div class="quiz-header"><span>📝</span>章节小测</div>
    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">1. 骨度分寸法中，腘横纹至外踝尖是多少寸？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q3_1" value="A">A. 13寸</label>
        <label class="quiz-opt"><input type="radio" name="q3_1" value="B">B. 16寸</label>
        <label class="quiz-opt"><input type="radio" name="q3_1" value="C">C. 12寸</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="A">
      <div class="quiz-q-text">2. 四指并拢（一夫法）的宽度等于多少寸？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q3_2" value="A">A. 3寸</label>
        <label class="quiz-opt"><input type="radio" name="q3_2" value="B">B. 4寸</label>
        <label class="quiz-opt"><input type="radio" name="q3_2" value="C">C. 2寸</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="C">
      <div class="quiz-q-text">3. 取足三里穴时，从外膝眼（犊鼻）向下量多少寸？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q3_3" value="A">A. 2寸</label>
        <label class="quiz-opt"><input type="radio" name="q3_3" value="B">B. 4寸</label>
        <label class="quiz-opt"><input type="radio" name="q3_3" value="C">C. 3寸</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <div class="quiz-q" data-answer="B">
      <div class="quiz-q-text">4. 髂后上棘连线约平第几骶后孔，是次髎穴的重要取穴参照？</div>
      <div class="quiz-options">
        <label class="quiz-opt"><input type="radio" name="q3_4" value="A">A. 第1骶后孔</label>
        <label class="quiz-opt"><input type="radio" name="q3_4" value="B">B. 第2骶后孔</label>
        <label class="quiz-opt"><input type="radio" name="q3_4" value="C">C. 第3骶后孔</label>
      </div>
      <div class="quiz-feedback"></div>
    </div>
    <button class="quiz-submit" onclick="submitQuiz(this,3)">提交答案</button>
    <div class="quiz-result"></div>
    <button class="mark-done-btn" onclick="markDone(3)">✓ 标记本章已学完</button>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('app').innerHTML = PAGE_HTML;
  initApp();
});
