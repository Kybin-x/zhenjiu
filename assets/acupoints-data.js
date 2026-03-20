/* ═══════════════════════════════════════════════════
   针灸入门学习网站 · 穴位数据库
   acupoints-data.js — 十四经脉完整穴位数据
   数据结构：{ id, name, pinyin, code, meridian, meridianKey,
               location, treat, anatomy, memo, tags }
   注：此文件为数据占位版本，完整数据将在穴位图谱页制作时填充
   ═══════════════════════════════════════════════════ */

// 经脉元数据
const MERIDIANS = [
  { key:'lu',  name:'手太阴肺经',   alias:'肺经',  color:'var(--c-lu)',  count:11, start:'中府', end:'少商', abbr:'LU'  },
  { key:'li',  name:'手阳明大肠经', alias:'大肠经', color:'var(--c-li)',  count:20, start:'商阳', end:'迎香', abbr:'LI'  },
  { key:'st',  name:'足阳明胃经',   alias:'胃经',  color:'var(--c-st)',  count:45, start:'承泣', end:'厉兑', abbr:'ST'  },
  { key:'sp',  name:'足太阴脾经',   alias:'脾经',  color:'var(--c-sp)',  count:21, start:'隐白', end:'大包', abbr:'SP'  },
  { key:'ht',  name:'手少阴心经',   alias:'心经',  color:'var(--c-ht)',  count:9,  start:'极泉', end:'少冲', abbr:'HT'  },
  { key:'si',  name:'手太阳小肠经', alias:'小肠经', color:'var(--c-si)',  count:19, start:'少泽', end:'听宫', abbr:'SI'  },
  { key:'bl',  name:'足太阳膀胱经', alias:'膀胱经', color:'var(--c-bl)',  count:67, start:'睛明', end:'至阴', abbr:'BL'  },
  { key:'ki',  name:'足少阴肾经',   alias:'肾经',  color:'var(--c-ki)',  count:27, start:'涌泉', end:'俞府', abbr:'KI'  },
  { key:'pc',  name:'手厥阴心包经', alias:'心包经', color:'var(--c-pc)',  count:9,  start:'天池', end:'中冲', abbr:'PC'  },
  { key:'sj',  name:'手少阳三焦经', alias:'三焦经', color:'var(--c-sj)',  count:23, start:'关冲', end:'丝竹空', abbr:'SJ' },
  { key:'gb',  name:'足少阳胆经',   alias:'胆经',  color:'var(--c-gb)',  count:44, start:'瞳子髎', end:'足窍阴', abbr:'GB'},
  { key:'lv',  name:'足厥阴肝经',   alias:'肝经',  color:'var(--c-lv)',  count:14, start:'大敦', end:'期门', abbr:'LV'  },
  { key:'du',  name:'督脉',         alias:'督脉',  color:'var(--c-du)',  count:28, start:'长强', end:'龈交', abbr:'GV'  },
  { key:'ren', name:'任脉',         alias:'任脉',  color:'var(--c-ren)', count:24, start:'会阴', end:'承浆', abbr:'CV'  },
];

// 常用穴位（60个代表穴，完整数据待填充）
const ACUPOINTS = [
  // ── 手太阴肺经 LU ──
  { id:'lu1',  name:'中府', py:'Zhōng Fǔ', code:'LU1',  mk:'lu', loc:'锁骨下窝外侧，前正中线旁开6寸',                    treat:'咳嗽、气喘、胸痛；肺系疾患', memo:'肺之募穴', tags:['募穴'] },
  { id:'lu5',  name:'尺泽', py:'Chǐ Zé',   code:'LU5',  mk:'lu', loc:'肘横纹中，肱二头肌腱桡侧凹陷',                     treat:'咳嗽咯血、潮热；肘臂挛痛',   memo:'肺经合穴，清肺热', tags:['合穴'] },
  { id:'lu7',  name:'列缺', py:'Liè Quē',  code:'LU7',  mk:'lu', loc:'腕横纹上1.5寸，桡骨茎突上方',                      treat:'伤风头痛、咳嗽；颈项痛',     memo:'「头项寻列缺」，八脉交会穴', tags:['络穴','八脉交会'] },
  { id:'lu9',  name:'太渊', py:'Tài Yuān', code:'LU9',  mk:'lu', loc:'腕横纹桡侧端，桡动脉搏动处',                       treat:'咳嗽、气喘；无脉症',         memo:'肺经原穴，脉之会穴，寸口切脉处', tags:['原穴','八会穴'] },
  { id:'lu11', name:'少商', py:'Shào Shāng',code:'LU11',mk:'lu', loc:'拇指末节桡侧，指甲角旁0.1寸',                      treat:'咽喉肿痛、高热、昏迷',       memo:'肺经井穴，点刺放血治咽痛', tags:['井穴'] },

  // ── 手阳明大肠经 LI ──
  { id:'li4',  name:'合谷', py:'Hé Gǔ',    code:'LI4',  mk:'li', loc:'第1、2掌骨间，近第2掌骨中点',                      treat:'头面五官疾患；发汗解表；止痛', memo:'「面口合谷收」，孕妇禁针', tags:['原穴'] },
  { id:'li10', name:'手三里',py:'Shǒu Sān Lǐ',code:'LI10',mk:'li',loc:'肘横纹下2寸',                                   treat:'上肢不遂；腹痛腹泻；齿痛',   memo:'类似足三里，调理肠胃', tags:[] },
  { id:'li11', name:'曲池', py:'Qū Chí',   code:'LI11', mk:'li', loc:'肘横纹外侧端，屈肘时肘横纹桡侧端凹陷',              treat:'热病；上肢痿痹；高血压；皮肤病', memo:'大肠经合穴，清热要穴', tags:['合穴'] },
  { id:'li15', name:'肩髃', py:'Jiān Yú',  code:'LI15', mk:'li', loc:'三角肌上，肩峰端下缘，举臂有凹陷',                  treat:'肩臂痛；半身不遂',           memo:'治肩周炎要穴', tags:[] },
  { id:'li20', name:'迎香', py:'Yíng Xiāng',code:'LI20',mk:'li', loc:'鼻翼外缘中点旁，鼻唇沟中',                         treat:'鼻塞、鼻炎；面瘫',           memo:'「鼻塞不通迎香穴」', tags:[] },

  // ── 足阳明胃经 ST ──
  { id:'st36', name:'足三里',py:'Zú Sān Lǐ',code:'ST36',mk:'st', loc:'外膝眼下3寸，胫骨前嵴外一横指',                   treat:'胃痛腹胀、呕吐腹泻；下肢痿痹；强壮', memo:'「常灸足三里，胜吃老母鸡」', tags:['合穴','胃下合穴'] },
  { id:'st25', name:'天枢', py:'Tiān Shū', code:'ST25', mk:'st', loc:'肚脐旁开2寸',                                     treat:'腹痛腹泻、便秘；月经不调',   memo:'大肠募穴，双向调节肠道', tags:['募穴'] },
  { id:'st40', name:'丰隆', py:'Fēng Lóng',code:'ST40', mk:'st', loc:'外踝高点上8寸，条口穴外1寸',                      treat:'痰多咳嗽；癫狂；头痛眩晕',   memo:'祛痰要穴，「痰之根丰隆」', tags:['络穴'] },
  { id:'st44', name:'内庭', py:'Nèi Tíng', code:'ST44', mk:'st', loc:'足背，第2、3趾间，趾蹼缘后方',                    treat:'齿痛、咽喉痛；胃热口臭',     memo:'胃经荥穴，清胃热', tags:['荥穴'] },

  // ── 足太阴脾经 SP ──
  { id:'sp6',  name:'三阴交',py:'Sān Yīn Jiāo',code:'SP6',mk:'sp',loc:'内踝高点上3寸，胫骨内侧缘后方',                  treat:'脾胃、肝肾疾患；妇科病；安神', memo:'脾肝肾三经交汇，妇科要穴（孕妇禁针）', tags:[] },
  { id:'sp10', name:'血海', py:'Xuè Hǎi',  code:'SP10', mk:'sp', loc:'髌骨内上缘上2寸，股内侧肌隆起处',                  treat:'月经不调；皮肤病；下肢痿痹', memo:'「治血要穴」，治风先治血', tags:[] },
  { id:'sp9',  name:'阴陵泉',py:'Yīn Líng Quán',code:'SP9',mk:'sp',loc:'胫骨内侧髁下方凹陷',                           treat:'腹胀、水肿；小便不利；带下', memo:'脾经合穴，利湿要穴', tags:['合穴'] },

  // ── 手少阴心经 HT ──
  { id:'ht7',  name:'神门', py:'Shén Mén', code:'HT7',  mk:'ht', loc:'腕横纹尺侧端，尺侧腕屈肌腱桡侧凹陷',               treat:'失眠、心悸、健忘；癫狂',    memo:'心经原穴，安神要穴', tags:['原穴'] },
  { id:'ht3',  name:'少海', py:'Shào Hǎi', code:'HT3',  mk:'ht', loc:'肘横纹内侧端与肱骨内上髁之间',                    treat:'心痛、癫狂；肘臂挛痛',       memo:'心经合穴，处于尺神经沟旁', tags:['合穴'] },

  // ── 手太阳小肠经 SI ──
  { id:'si3',  name:'后溪', py:'Hòu Xī',   code:'SI3',  mk:'si', loc:'第5掌骨头尺侧，握拳掌横纹尺侧端',                  treat:'头项强痛；腰背痛；癫狂',    memo:'八脉交会穴（通督脉），「腰背后溪督脉连」', tags:['八脉交会'] },
  { id:'si19', name:'听宫', py:'Tīng Gōng',code:'SI19', mk:'si', loc:'耳屏前，下颌骨髁状突后缘，张口有凹陷',             treat:'耳鸣耳聋；龋齿',            memo:'耳疾要穴', tags:[] },

  // ── 足太阳膀胱经 BL ──
  { id:'bl40', name:'委中', py:'Wěi Zhōng',code:'BL40', mk:'bl', loc:'腘横纹中点，腘动脉搏动处旁',                      treat:'腰背痛；下肢痿痹；小便不利', memo:'「腰背委中求」，膀胱经合穴', tags:['合穴'] },
  { id:'bl23', name:'肾俞', py:'Shèn Shū', code:'BL23', mk:'bl', loc:'第2腰椎棘突下，旁开1.5寸',                        treat:'腰痛；肾虚诸证；耳鸣耳聋',   memo:'肾的背俞穴，补肾要穴', tags:['背俞穴'] },
  { id:'bl57', name:'承山', py:'Chéng Shān',code:'BL57',mk:'bl', loc:'腓肠肌两肌腹间凹陷顶端（人字纹上）',              treat:'腰腿痛；痔疾；便秘',         memo:'治痔疮要穴，小腿痉挛', tags:[] },
  { id:'bl67', name:'至阴', py:'Zhì Yīn',  code:'BL67', mk:'bl', loc:'足小趾末节外侧，指甲角旁0.1寸',                   treat:'头痛、目痛；胎位不正',       memo:'灸之可矫正胎位，膀胱经井穴', tags:['井穴'] },
  { id:'bl2',  name:'攒竹', py:'Cuán Zhú', code:'BL2',  mk:'bl', loc:'眉头凹陷，眶上切迹处',                            treat:'头痛；目疾；面瘫；呃逆',     memo:'治呃逆点按有效', tags:[] },

  // ── 足少阴肾经 KI ──
  { id:'ki1',  name:'涌泉', py:'Yǒng Quán',code:'KI1',  mk:'ki', loc:'足底，卷足时足前部凹陷处',                        treat:'昏迷急救；头痛；失眠；高血压', memo:'肾经井穴，急救要穴', tags:['井穴'] },
  { id:'ki3',  name:'太溪', py:'Tài Xī',   code:'KI3',  mk:'ki', loc:'内踝高点与跟腱之间，胫后动脉搏动处',               treat:'肾虚诸证；咽喉痛；失眠',    memo:'肾经原穴，滋阴补肾要穴', tags:['原穴'] },
  { id:'ki6',  name:'照海', py:'Zhào Hǎi', code:'KI6',  mk:'ki', loc:'内踝高点下1寸',                                  treat:'失眠；咽喉干痛；月经不调',   memo:'八脉交会穴（通阴跷脉）', tags:['八脉交会'] },

  // ── 手厥阴心包经 PC ──
  { id:'pc6',  name:'内关', py:'Nèi Guān', code:'PC6',  mk:'pc', loc:'腕横纹上2寸，掌长肌腱与桡侧腕屈肌腱之间',          treat:'心悸、失眠；恶心呕吐；胃痛', memo:'八脉交会穴，晕车晕船首选', tags:['络穴','八脉交会'] },
  { id:'pc7',  name:'大陵', py:'Dà Líng',  code:'PC7',  mk:'pc', loc:'腕横纹中央，两腱之间',                            treat:'心痛、心悸；口臭；腕关节痛', memo:'心包经原穴，清心热', tags:['原穴'] },
  { id:'pc8',  name:'劳宫', py:'Láo Gōng', code:'PC8',  mk:'pc', loc:'手掌，第2、3掌骨间（握拳中指尖处）',               treat:'中风昏迷；心痛；口疮',       memo:'心包经荥穴，清心泻热', tags:['荥穴'] },

  // ── 手少阳三焦经 SJ ──
  { id:'sj5',  name:'外关', py:'Wài Guān', code:'SJ5',  mk:'sj', loc:'腕背横纹上2寸，尺桡骨之间',                       treat:'热病；头痛耳鸣；上肢痿痹',   memo:'八脉交会穴（通阳维脉）', tags:['络穴','八脉交会'] },
  { id:'sj17', name:'翳风', py:'Yì Fēng',  code:'SJ17', mk:'sj', loc:'耳垂后，乳突前下方凹陷',                          treat:'耳鸣耳聋；面瘫；腮腺炎',    memo:'面神经穿出腮腺处旁，治面瘫', tags:[] },
  { id:'sj23', name:'丝竹空',py:'Sī Zhú Kōng',code:'SJ23',mk:'sj',loc:'眉梢凹陷',                                     treat:'头痛；目疾；癫痫',           memo:'三焦经终穴', tags:[] },

  // ── 足少阳胆经 GB ──
  { id:'gb20', name:'风池', py:'Fēng Chí', code:'GB20', mk:'gb', loc:'枕骨下，斜方肌与胸锁乳突肌之间凹陷',               treat:'头痛、颈项痛；感冒；目疾',   memo:'「风从颈入，池能驱风」', tags:[] },
  { id:'gb21', name:'肩井', py:'Jiān Jǐng',code:'GB21', mk:'gb', loc:'肩上，大椎与肩峰连线中点',                        treat:'颈肩痛；乳痈；难产',         memo:'孕妇禁针，深部为肺尖', tags:[] },
  { id:'gb30', name:'环跳', py:'Huán Tiào',code:'GB30', mk:'gb', loc:'股骨大转子与骶裂孔连线外1/3处',                   treat:'腰腿痛；坐骨神经痛；半身不遂', memo:'坐骨神经旁，治坐骨神经痛', tags:[] },
  { id:'gb34', name:'阳陵泉',py:'Yáng Líng Quán',code:'GB34',mk:'gb',loc:'腓骨小头前下方凹陷',                        treat:'膝痛；胁肋痛；口苦黄疸',    memo:'筋之会穴，胆经合穴，治筋病', tags:['合穴','八会穴'] },
  { id:'gb39', name:'悬钟', py:'Xuán Zhōng',code:'GB39',mk:'gb', loc:'外踝高点上3寸，腓骨前缘',                         treat:'颈项强痛；下肢痿痹',         memo:'髓之会穴，治骨髓病', tags:['八会穴'] },
  { id:'gb41', name:'足临泣',py:'Zú Lín Qì',code:'GB41',mk:'gb', loc:'足背，第4、5跖骨结合部前方',                      treat:'头痛；乳房疾患；胁肋痛',    memo:'八脉交会穴（通带脉）', tags:['八脉交会'] },

  // ── 足厥阴肝经 LV ──
  { id:'lv3',  name:'太冲', py:'Tài Chōng',code:'LV3',  mk:'lv', loc:'足背，第1、2跖骨结合部前方凹陷',                  treat:'头痛眩晕；肝胆疾患；情志病', memo:'肝经原穴，「四关穴」之一', tags:['原穴'] },
  { id:'lv14', name:'期门', py:'Qī Mén',   code:'LV14', mk:'lv', loc:'乳头直下，第6肋间隙',                            treat:'胸胁胀满；肝炎；乳腺疾患',   memo:'肝之募穴，终穴', tags:['募穴'] },
  { id:'lv8',  name:'曲泉', py:'Qū Quán',  code:'LV8',  mk:'lv', loc:'腘横纹内侧端，半腱肌腱内侧',                      treat:'膝痛；肝肾虚证；妇科病',    memo:'肝经合穴，补肝要穴', tags:['合穴'] },

  // ── 督脉 GV ──
  { id:'du4',  name:'命门', py:'Mìng Mén', code:'GV4',  mk:'du', loc:'第2腰椎棘突下',                                  treat:'腰痛；肾虚；阳痿遗精',       memo:'生命之门，温补肾阳要穴', tags:[] },
  { id:'du14', name:'大椎', py:'Dà Zhuī',  code:'GV14', mk:'du', loc:'第7颈椎棘突下',                                  treat:'热病、感冒；颈肩痛；癫痫',   memo:'诸阳之会，退热要穴', tags:[] },
  { id:'du20', name:'百会', py:'Bǎi Huì',  code:'GV20', mk:'du', loc:'两耳尖连线与前后正中线交点',                       treat:'头痛眩晕；神志疾患；脏器下垂', memo:'诸阳之会，升阳举陷', tags:[] },
  { id:'du26', name:'水沟', py:'Shuǐ Gōu', code:'GV26', mk:'du', loc:'人中沟上1/3与中1/3交点',                         treat:'昏迷急救；腰脊强痛',         memo:'「人中」，急救要穴', tags:[] },

  // ── 任脉 CV ──
  { id:'cv4',  name:'关元', py:'Guān Yuán',code:'CV4',  mk:'ren',loc:'脐下3寸',                                        treat:'泌尿生殖系疾患；元气虚脱',   memo:'小肠募穴，强壮保健要穴', tags:['募穴'] },
  { id:'cv6',  name:'气海', py:'Qì Hǎi',   code:'CV6',  mk:'ren',loc:'脐下1.5寸',                                     treat:'气虚下陷；腹痛腹泻；遗精',   memo:'「气之海」，补气要穴', tags:[] },
  { id:'cv12', name:'中脘', py:'Zhōng Wǎn',code:'CV12', mk:'ren',loc:'脐上4寸',                                        treat:'胃痛、腹胀、呕吐；食积',    memo:'胃之募穴，腑之会穴', tags:['募穴','八会穴'] },
  { id:'cv17', name:'膻中', py:'Dàn Zhōng',code:'CV17', mk:'ren',loc:'两乳头连线中点，平第4肋间隙',                    treat:'咳嗽气喘；胸痛；乳少',       memo:'气之会穴，心包募穴', tags:['八会穴','募穴'] },
  { id:'cv22', name:'天突', py:'Tiān Tū',  code:'CV22', mk:'ren',loc:'胸骨上窝中央',                                   treat:'咳嗽气喘；咽喉肿痛；噎嗝',  memo:'针刺须沿胸骨后壁向下斜刺', tags:[] },

  // ── 经外奇穴 EX ──
  { id:'ex1',  name:'印堂', py:'Yìn Táng', code:'EX-HN3',mk:'ex',loc:'两眉头连线中点',                                 treat:'头痛；失眠；鼻炎',           memo:'常用奇穴，安神定志', tags:['奇穴'] },
  { id:'ex2',  name:'太阳', py:'Tài Yáng', code:'EX-HN5',mk:'ex',loc:'眉梢与目外眦之间向后1寸',                        treat:'偏头痛；目疾；面瘫',         memo:'头面四大奇穴之一', tags:['奇穴'] },
  { id:'ex3',  name:'腰痛点',py:'Yāo Tòng Diǎn',code:'EX-UE7',mk:'ex',loc:'手背第2、3与第4、5掌骨间，腕背横纹与掌指关节连线中点（两处）', treat:'急性腰扭伤',   memo:'急性腰痛特效穴', tags:['奇穴'] },
];

// 快捷查找函数
function getAcuByCode(code) {
  return ACUPOINTS.find(a => a.code === code);
}
function getAcuByMeridian(mk) {
  return ACUPOINTS.filter(a => a.mk === mk);
}
function searchAcu(query) {
  const q = query.toLowerCase();
  return ACUPOINTS.filter(a =>
    a.name.includes(q) ||
    a.py.toLowerCase().includes(q) ||
    a.code.toLowerCase().includes(q) ||
    a.treat.includes(q) ||
    (a.memo && a.memo.includes(q))
  );
}
function getMeridianColor(mk) {
  const m = MERIDIANS.find(m => m.key === mk);
  return m ? m.color : 'var(--text-3)';
}
function getMeridianName(mk) {
  const m = MERIDIANS.find(m => m.key === mk);
  return m ? m.alias : mk;
}
