// 王者荣耀攻略站 - 主逻辑（完整版）

// 英雄数据（20+ 英雄）
const heroData = {
  // ========== 战士 ==========
  '亚瑟': {
    icon: '⚔️', role: '战士', difficulty: '简单', lane: '对抗路',
    desc: '亚瑟是一名经典的战士英雄，拥有较高的生存能力和持续输出能力。技能简单易懂，非常适合新手玩家使用。',
    skills: [
      { name: '被动 - 圣光守护', desc: '每2秒回复自身最大生命值1%' },
      { name: '一技能 - 誓约之盾', desc: '举盾冲锋，增加移速并沉默敌人' },
      { name: '二技能 - 回旋打击', desc: '圣盾围绕自身旋转，持续造成伤害' },
      { name: '大招 - 圣剑裁决', desc: '跳跃至目标位置，造成伤害并击飞' }
    ],
    build: ['🔥', '👢', '🪓', '❄️', '🧙', '🛡️'],
    buildNames: ['红莲斗篷', '抵抗之靴', '暗影战斧', '冰痕之握', '魔女斗篷', '不祥征兆'],
    buildDesc: '以肉装为主，兼顾冷却缩减',
    runes: ['📗', '📘', '📙'],
    runeNames: ['异变 x10', '鹰眼 x10', '隐匿 x10'],
    runeDesc: '物理攻击 +29，物理穿透 +100，移速 +10%',
    tips: [
      { title: '对线技巧', content: '利用被动回复消耗对手，一技能沉默后接二技能连招' },
      { title: '团战思路', content: '大招先手开团，跳入后排吸收伤害' }
    ]
  },
  '吕布': {
    icon: '🗡️', role: '战士', difficulty: '中等', lane: '对抗路',
    desc: '吕布是一名真实伤害战士，拥有强大的护盾和回复能力，是前排坦克的克星。',
    skills: [
      { name: '被动 - 饕餮血统', desc: '普攻和技能命中回复生命值' },
      { name: '一技能 - 方天画戟', desc: '挥舞方天画戟，造成真实伤害' },
      { name: '二技能 - 贪狼之握', desc: '抓取敌人，造成伤害并减速' },
      { name: '大招 - 魔神降世', desc: '跳起砸下，击飞范围内敌人并获得护盾' }
    ],
    build: ['👢', '🪓', '⚡', '🛡️', '❄️', '💀'],
    buildNames: ['抵抗之靴', '破军', '极寒风暴', '不死鸟之眼', '暴烈之甲', '血魔之怒'],
    buildDesc: '半肉半输出，利用真实伤害克制坦克',
    runes: ['📗', '📘', '📙'],
    runeNames: ['传承 x10', '虚空 x10', '隐匿 x10'],
    runeDesc: '物理攻击 +25，生命值 +600，移速 +10%',
    tips: [
      { title: '对线技巧', content: '一技能真实伤害消耗，二技能抓取后接普攻' },
      { title: '团战思路', content: '大招跳入人群，利用护盾和回复持续作战' }
    ]
  },
  '花木兰': {
    icon: '🌸', role: '战士', difficulty: '困难', lane: '对抗路',
    desc: '花木兰是一名双形态战士，轻剑形态灵活高伤害，重剑形态霸体高爆发。',
    skills: [
      { name: '被动 - 花木兰', desc: '轻剑灵活，重剑霸体高爆发' },
      { name: '一技能 - 空裂斩', desc: '轻剑突进，重剑蓄力斩' },
      { name: '二技能 - 旋舞之华', desc: '轻剑扔剑，重剑旋转攻击' },
      { name: '大招 - 绽放刀锋', desc: '切换形态' }
    ],
    build: ['👟', '🗡️', '⚡', '💀', '🛡️', '🔮'],
    buildNames: ['抵抗之靴', '暗影战斧', '破军', '碎星锤', '名刀', '宗师之力'],
    buildDesc: '穿透爆发流，最大化重剑伤害',
    runes: ['📗', '📘', '📙'],
    runeNames: ['异变 x10', '鹰眼 x10', '隐匿 x10'],
    runeDesc: '物理攻击 +29，物理穿透 +100，移速 +10%',
    tips: [
      { title: '对线技巧', content: '轻剑消耗，找机会切换重剑打爆发' },
      { title: '连招技巧', content: '轻剑2技能 → 1技能 → 大切重剑 → 1技能蓄力' }
    ]
  },
  '关羽': {
    icon: '🐴', role: '战士', difficulty: '困难', lane: '对抗路',
    desc: '关羽是一名高机动性战士，需要保持冲锋状态，擅长绕后开团和支援。',
    skills: [
      { name: '被动 - 一骑当千', desc: '移动积攒冲锋值，冲锋状态技能增强' },
      { name: '一技能 - 单刀赴会', desc: '冲锋状态劈砍，造成高额伤害' },
      { name: '二技能 - 青龙偃月', desc: '冲锋状态击退敌人' },
      { name: '大招 - 刀锋铁骑', desc: '冲锋状态击飞敌人，非冲锋状态加速' }
    ],
    build: ['👢', '🪓', '⚡', '💀', '🛡️', '🔮'],
    buildNames: ['疾步之靴', '暗影战斧', '破军', '碎星锤', '魔女斗篷', '宗师之力'],
    buildDesc: '高爆发穿透流，一套秒杀脆皮',
    runes: ['📗', '📘', '📙'],
    runeNames: ['异变 x10', '鹰眼 x10', '隐匿 x10'],
    runeDesc: '物理攻击 +29，物理穿透 +100，移速 +10%',
    tips: [
      { title: '游走支援', content: '保持冲锋状态快速游走，绕后切后排' },
      { title: '团战思路', content: '找机会从侧面或后面冲锋开团' }
    ]
  },

  // ========== 法师 ==========
  '安琪拉': {
    icon: '🔮', role: '法师', difficulty: '简单', lane: '中路',
    desc: '安琪拉是一名高爆发法师，拥有强大的控制和瞬间秒杀能力。',
    skills: [
      { name: '被动 - 咒术火焰', desc: '技能命中叠加灼烧，最多3层' },
      { name: '一技能 - 火球术', desc: '释放5颗火球造成法术伤害' },
      { name: '二技能 - 混沌火种', desc: '释放火种，眩晕命中敌人' },
      { name: '大招 - 炽热光辉', desc: '释放强力光束，持续高额伤害' }
    ],
    build: ['📖', '👟', '🔮', '💀', '🎩', '📕'],
    buildNames: ['秘法之靴', '噬神之书', '回响之杖', '博学者之怒', '虚无法杖', '贤者之书'],
    buildDesc: '全法术输出，一套秒杀',
    runes: ['📕', '📘', '📗'],
    runeNames: ['梦魇 x10', '心眼 x10', '狩猎 x10'],
    runeDesc: '法术攻击 +53，法术穿透 +88，攻速 +10%',
    tips: [
      { title: '对线技巧', content: '2技能控制后接大招秒杀' },
      { title: '团战思路', content: '等敌人聚集后释放大招' }
    ]
  },
  '妲己': {
    icon: '🦊', role: '法师', difficulty: '简单', lane: '中路',
    desc: '妲己是一名控制型法师，拥有稳定的眩晕技能，是新手法师首选。',
    skills: [
      { name: '被动 - 失心', desc: '技能命中减少敌人法术防御' },
      { name: '一技能 - 灵魂冲击', desc: '释放狐火，造成法术伤害' },
      { name: '二技能 - 偶像魅力', desc: '眩晕命中的敌人' },
      { name: '大招 - 女王崇拜', desc: '召唤5只攻击敌人，造成大量伤害' }
    ],
    build: ['👟', '📖', '🔮', '💀', '🎩', '📕'],
    buildNames: ['秘法之靴', '噬神之书', '回响之杖', '博学者之怒', '虚无法杖', '贤者之书'],
    buildDesc: '法术爆发流，一套带走脆皮',
    runes: ['📕', '📘', '📗'],
    runeNames: ['梦魇 x10', '心眼 x10', '狩猎 x10'],
    runeDesc: '法术攻击 +53，法术穿透 +88，攻速 +10%',
    tips: [
      { title: '对线技巧', content: '2技能眩晕后接1技能和大招' },
      { title: '团战思路', content: '瞄准后排C位，一套秒杀' }
    ]
  },
  '貂蝉': {
    icon: '💃', role: '法师', difficulty: '中等', lane: '中路',
    desc: '貂蝉是一名持续输出法师，技能命中可以回血，团战收割能力强。',
    skills: [
      { name: '被动 - 语·花印', desc: '技能命中叠加印记，4层引爆回血' },
      { name: '一技能 - 缘心结', desc: '扔出花球，造成伤害' },
      { name: '二技能 - 缘心结', desc: '位移并造成伤害，命中减少冷却' },
      { name: '大招 - 语·花舞', desc: '释放法阵，减少技能冷却' }
    ],
    build: ['👟', '📖', '🔮', '💀', '🎩', '📕'],
    buildNames: ['秘法之靴', '噬神之书', '回响之杖', '博学者之怒', '虚无法杖', '贤者之书'],
    buildDesc: '冷却法术流，持续输出回血',
    runes: ['📕', '📘', '📗'],
    runeNames: ['梦魇 x10', '心眼 x10', '狩猎 x10'],
    runeDesc: '法术攻击 +53，法术穿透 +88，攻速 +10%',
    tips: [
      { title: '对线技巧', content: '利用2技能位移躲避技能，持续消耗' },
      { title: '团战思路', content: '在大招范围内持续输出，利用被动回血' }
    ]
  },
  '诸葛亮': {
    icon: '🪶', role: '法师', difficulty: '中等', lane: '中路',
    desc: '诸葛亮是一名灵活法师，拥有多段位移，擅长收割残血敌人。',
    skills: [
      { name: '被动 - 策谋之刻', desc: '技能命中叠加印记，5层触发法球' },
      { name: '一技能 - 东风破袭', desc: '发射3颗法球，造成伤害' },
      { name: '二技能 - 时空穿梭', desc: '位移并造成伤害，最多3次' },
      { name: '大招 - 元素奔涌', desc: '发射元气弹，血量越低伤害越高' }
    ],
    build: ['👟', '📖', '🔮', '💀', '🎩', '📕'],
    buildNames: ['秘法之靴', '噬神之书', '回响之杖', '博学者之怒', '虚无法杖', '贤者之书'],
    buildDesc: '高爆发法术流，收割残血',
    runes: ['📕', '📘', '📗'],
    runeNames: ['梦魇 x10', '心眼 x10', '狩猎 x10'],
    runeDesc: '法术攻击 +53，法术穿透 +88，攻速 +10%',
    tips: [
      { title: '对线技巧', content: '1技能消耗，2技能位移躲避技能' },
      { title: '团战思路', content: '等敌人残血后用大招收割' }
    ]
  },

  // ========== 射手 ==========
  '鲁班七号': {
    icon: '🤖', role: '射手', difficulty: '简单', lane: '发育路',
    desc: '鲁班七号是一名高输出射手，拥有超远距离攻击和极高的持续输出能力。',
    skills: [
      { name: '被动 - 扫射', desc: '每3次普攻后扫射，造成范围伤害' },
      { name: '一技能 - 河豚手雷', desc: '投掷手雷，伤害并减速' },
      { name: '二技能 - 空中支援', desc: '召唤支援，伤害并减速' },
      { name: '大招 - 火力压制', desc: '发射火箭弹，高额伤害' }
    ],
    build: ['🏹', '👢', '⚡', '🗡️', '💀', '🛡️'],
    buildNames: ['急速战靴', '闪电匕首', '无尽战刃', '破晓', '泣血之刃', '名刀'],
    buildDesc: '攻速暴击流，后期伤害爆炸',
    runes: ['📗', '📘', '📙'],
    runeNames: ['无双 x10', '鹰眼 x10', '夺萃 x10'],
    runeDesc: '暴击率 +7%，暴击效果 +36%，物理吸血 +16%',
    tips: [
      { title: '对线技巧', content: '利用射程优势消耗，注意站位' },
      { title: '团战思路', content: '站在后排持续输出，注意走位' }
    ]
  },
  '后羿': {
    icon: '🏹', role: '射手', difficulty: '简单', lane: '发育路',
    desc: '后羿是一名持续输出射手，攻速极快，团战输出能力强。',
    skills: [
      { name: '被动 - 惩戒射击', desc: '普攻叠加攻速，最多3层' },
      { name: '一技能 - 多重箭矢', desc: '普攻射出3支箭，造成范围伤害' },
      { name: '二技能 - 落日余晖', desc: '短暂蓄力后射出强力一箭' },
      { name: '大招 - 炽热追踪', desc: '射出火焰箭，追踪并眩晕敌人' }
    ],
    build: ['🏹', '👢', '⚡', '🗡️', '💀', '🛡️'],
    buildNames: ['急速战靴', '闪电匕首', '无尽战刃', '破晓', '泣血之刃', '名刀'],
    buildDesc: '攻速暴击流，持续输出',
    runes: ['📗', '📘', '📙'],
    runeNames: ['无双 x10', '鹰眼 x10', '夺萃 x10'],
    runeDesc: '暴击率 +7%，暴击效果 +36%，物理吸血 +16%',
    tips: [
      { title: '对线技巧', content: '利用1技能快速清兵，保持发育' },
      { title: '团战思路', content: '大招先手控制，持续普攻输出' }
    ]
  },
  '孙尚香': {
    icon: '💥', role: '射手', difficulty: '中等', lane: '发育路',
    desc: '孙尚香是一名灵活射手，拥有位移技能，爆发伤害高。',
    skills: [
      { name: '被动 - 活力迸发', desc: '普攻减少1技能冷却' },
      { name: '一技能 - 翻滚突袭', desc: '翻滚并强化下一次普攻' },
      { name: '二技能 - 红莲爆弹', desc: '投掷炸弹，造成伤害并减速' },
      { name: '大招 - 无尽火力', desc: '发射火箭弹，造成高额伤害' }
    ],
    build: ['👟', '🗡️', '⚡', '💀', '🛡️', '🔮'],
    buildNames: ['急速战靴', '无尽战刃', '宗师之力', '破晓', '泣血之刃', '名刀'],
    buildDesc: '爆发暴击流，一套带走脆皮',
    runes: ['📗', '📘', '📙'],
    runeNames: ['无双 x10', '鹰眼 x10', '夺萃 x10'],
    runeDesc: '暴击率 +7%，暴击效果 +36%，物理吸血 +16%',
    tips: [
      { title: '对线技巧', content: '1技能翻滚躲避技能，强化普攻消耗' },
      { title: '团战思路', content: '利用1技能灵活走位，找机会输出' }
    ]
  },
  '马可波罗': {
    icon: '🔫', role: '射手', difficulty: '中等', lane: '发育路',
    desc: '马可波罗是一名真伤射手，攻速越快伤害越高，是坦克克星。',
    skills: [
      { name: '被动 - 连锁反应', desc: '攻速越快，真伤越高' },
      { name: '一技能 - 华丽左轮', desc: '发射多颗子弹，造成伤害' },
      { name: '二技能 - 漫游之枪', desc: '位移并造成伤害' },
      { name: '大招 - 狂热弹幕', desc: '持续发射子弹，造成大量真伤' }
    ],
    build: ['🏹', '👢', '⚡', '🗡️', '💀', '🛡️'],
    buildNames: ['急速战靴', '末世', '纯净苍穹', '破晓', '泣血之刃', '名刀'],
    buildDesc: '攻速真伤流，克制坦克',
    runes: ['📗', '📘', '📙'],
    runeNames: ['红月 x10', '鹰眼 x10', '夺萃 x10'],
    runeDesc: '攻速 +26%，物理穿透 +64%，物理吸血 +16%',
    tips: [
      { title: '对线技巧', content: '1技能消耗，2技能位移保命' },
      { title: '团战思路', content: '大招进场持续输出真伤' }
    ]
  },

  // ========== 刺客 ==========
  '孙悟空': {
    icon: '🐒', role: '刺客', difficulty: '中等', lane: '打野',
    desc: '孙悟空是一名灵活刺客，拥有多段位移和高爆发，擅长切后排。',
    skills: [
      { name: '被动 - 大圣神威', desc: '技能后强化普攻' },
      { name: '一技能 - 七十二变', desc: '突进并造成伤害' },
      { name: '二技能 - 斗战冲锋', desc: '跳跃并造成伤害' },
      { name: '大招 - 如意金箍', desc: '击飞范围内敌人' }
    ],
    build: ['👟', '🗡️', '⚡', '💀', '🛡️', '🔮'],
    buildNames: ['疾步之靴', '暗影战斧', '无尽战刃', '破军', '名刀', '宗师之力'],
    buildDesc: '暴击穿透流，一套秒杀脆皮',
    runes: ['📗', '📘', '📙'],
    runeNames: ['无双 x10', '鹰眼 x10', '夺萃 x10'],
    runeDesc: '暴击率 +7%，暴击效果 +36%，物理吸血 +16%',
    tips: [
      { title: '打野技巧', content: '快速刷野，找机会抓人' },
      { title: '团战思路', content: '找机会切入后排秒杀脆皮' }
    ]
  },
  '李白': {
    icon: '⚔️', role: '刺客', difficulty: '困难', lane: '打野',
    desc: '李白是一名飘逸刺客，需要刷野解锁大招，操作上限极高。',
    skills: [
      { name: '被动 - 侠客行', desc: '普攻4次解锁大招' },
      { name: '一技能 - 将进酒', desc: '向前突进，可释放3次' },
      { name: '二技能 - 神来之笔', desc: '释放剑气，造成伤害' },
      { name: '大招 - 青莲剑歌', desc: '释放剑气，造成高额伤害' }
    ],
    build: ['👟', '🗡️', '⚡', '💀', '🛡️', '🔮'],
    buildNames: ['急速战靴', '暗影战斧', '无尽战刃', '碎星锤', '名刀', '宗师之力'],
    buildDesc: '穿透暴击流，秀操作必备',
    runes: ['📗', '📘', '📙'],
    runeNames: ['异变 x10', '鹰眼 x10', '隐匿 x10'],
    runeDesc: '物理攻击 +29，物理穿透 +100，移速 +10%',
    tips: [
      { title: '打野技巧', content: '快速刷野刷被动，找机会进场' },
      { title: '连招技巧', content: '1技能进场 → 普攻刷被动 → 大招 → 1技能撤退' }
    ]
  },
  '韩信': {
    icon: '🗡️', role: '刺客', difficulty: '困难', lane: '打野',
    desc: '韩信是一名高机动打野，拥有多段位移，是节奏大师。',
    skills: [
      { name: '被动 - 杀意之枪', desc: '技能命中减少冷却' },
      { name: '一技能 - 无情冲锋', desc: '突进并挑飞敌人' },
      { name: '二技能 - 背水一战', desc: '向后跳跃并强化普攻' },
      { name: '大招 - 国士无双', desc: '击退周围敌人并造成伤害' }
    ],
    build: ['👟', '🗡️', '⚡', '💀', '🛡️', '🔮'],
    buildNames: ['疾步之靴', '暗影战斧', '无尽战刃', '破军', '名刀', '宗师之力'],
    buildDesc: '高爆发穿透流，快速抓人',
    runes: ['📗', '📘', '📙'],
    runeNames: ['异变 x10', '鹰眼 x10', '隐匿 x10'],
    runeDesc: '物理攻击 +29，物理穿透 +100，移速 +10%',
    tips: [
      { title: '打野技巧', content: '快速刷野，抓人建立优势' },
      { title: '团战思路', content: '找机会切入后排，秒杀脆皮' }
    ]
  },
  '兰陵王': {
    icon: '👤', role: '刺客', difficulty: '简单', lane: '打野',
    desc: '兰陵王是一名隐身刺客，擅长偷袭脆皮，是后排噩梦。',
    skills: [
      { name: '被动 - 秘技·极意', desc: '隐身状态靠近敌人获得加速' },
      { name: '一技能 - 秘技·分身', desc: '投掷匕首，造成伤害' },
      { name: '二技能 - 秘技·影蚀', desc: '标记敌人，延迟后造成伤害' },
      { name: '大招 - 秘技·隐袭', desc: '进入隐身状态' }
    ],
    build: ['👟', '🗡️', '⚡', '💀', '🛡️', '🔮'],
    buildNames: ['疾步之靴', '暗影战斧', '无尽战刃', '破军', '名刀', '宗师之力'],
    buildDesc: '高爆发穿透流，一套秒杀',
    runes: ['📗', '📘', '📙'],
    runeNames: ['异变 x10', '鹰眼 x10', '隐匿 x10'],
    runeDesc: '物理攻击 +29，物理穿透 +100，移速 +10%',
    tips: [
      { title: '抓人技巧', content: '大招隐身靠近，2技能标记后1技能秒杀' },
      { title: '团战思路', content: '找机会偷袭后排脆皮' }
    ]
  },

  // ========== 坦克 ==========
  '张飞': {
    icon: '🛡️', role: '坦克', difficulty: '中等', lane: '对抗路',
    desc: '张飞是一名强力坦克，大招变身护盾保护队友，是团战利器。',
    skills: [
      { name: '被动 - 咆哮', desc: '普攻积攒狂意，满狂意大招变强' },
      { name: '一技能 - 黑暗潜袭', desc: '冲锋并击退敌人' },
      { name: '二技能 - 守护机关', desc: '跳向队友，提供护盾' },
      { name: '大招 - 狂兽血性', desc: '变身，获得护盾并击退敌人' }
    ],
    build: ['👢', '🛡️', '❄️', '🧙', '❤️', '🔥'],
    buildNames: ['抵抗之靴', '救赎之翼', '极寒风暴', '魔女斗篷', '不死鸟之眼', '红莲斗篷'],
    buildDesc: '纯肉装，最大化保护能力',
    runes: ['📗', '📘', '📙'],
    runeNames: ['调和 x10', '虚空 x10', '宿命 x10'],
    runeDesc: '生命值 +600，冷却缩减 +6%，每5秒回血 +52',
    tips: [
      { title: '保护技巧', content: '用2技能保护队友，大招关键时刻释放' },
      { title: '团战思路', content: '大招变身吸收伤害，保护后排' }
    ]
  },
  '程咬金': {
    icon: '🪓', role: '坦克', difficulty: '简单', lane: '对抗路',
    desc: '程咬金是一名回血坦克，被动回血让他抗压能力极强。',
    skills: [
      { name: '被动 - 舍生', desc: '血量越低，攻击力越高' },
      { name: '一技能 - 爆裂双斧', desc: '挥舞双斧，造成伤害并减速' },
      { name: '二技能 - 正义豪腕', desc: '旋转攻击，造成伤害并回血' },
      { name: '大招 - 激活潜能', desc: '持续回复生命值' }
    ],
    build: ['👢', '🛡️', '❄️', '🧙', '❤️', '🔥'],
    buildNames: ['抵抗之靴', '红莲斗篷', '极寒风暴', '魔女斗篷', '不死鸟之眼', '暴烈之甲'],
    buildDesc: '肉装回血流，抗压能力强',
    runes: ['📗', '📘', '📙'],
    runeNames: ['调和 x10', '虚空 x10', '宿命 x10'],
    runeDesc: '生命值 +600，冷却缩减 +6%，每5秒回血 +52',
    tips: [
      { title: '对线技巧', content: '利用被动回血持续消耗，抗压发育' },
      { title: '团战思路', content: '冲入人群吸收伤害，大招持续回血' }
    ]
  },
  '白起': {
    icon: '⚔️', role: '坦克', difficulty: '中等', lane: '对抗路',
    desc: '白起是一名团控坦克，大招嘲讽是强力开团技能。',
    skills: [
      { name: '被动 - 反击之镰', desc: '受到伤害增加护甲' },
      { name: '一技能 - 血之回响', desc: '旋转镰刀，造成伤害并回血' },
      { name: '二技能 - 死神之钩', desc: '钩中敌人，造成伤害' },
      { name: '大招 - 傲慢嘲讽', desc: '嘲讽范围内敌人' }
    ],
    build: ['👢', '🛡️', '❄️', '🧙', '❤️', '🔥'],
    buildNames: ['抵抗之靴', '救赎之翼', '极寒风暴', '魔女斗篷', '不死鸟之眼', '红莲斗篷'],
    buildDesc: '纯肉控制流，团战开团',
    runes: ['📗', '📘', '📙'],
    runeNames: ['调和 x10', '虚空 x10', '宿命 x10'],
    runeDesc: '生命值 +600，冷却缩减 +6%，每5秒回血 +52',
    tips: [
      { title: '开团技巧', content: '2技能钩中敌人后大招嘲讽' },
      { title: '团战思路', content: '大招嘲讽多人，为队友创造输出空间' }
    ]
  },
  '廉颇': {
    icon: '🗿', role: '坦克', difficulty: '简单', lane: '对抗路',
    desc: '廉颇是一名控制坦克，技能多控制，是前排担当。',
    skills: [
      { name: '被动 - 勇士之魂', desc: '释放技能获得减伤' },
      { name: '一技能 - 勇往直前', desc: '冲锋并击飞敌人' },
      { name: '二技能 - 断罪', desc: '蓄力后造成范围伤害' },
      { name: '大招 - 万夫莫开', desc: '跳跃砸下，击飞范围内敌人' }
    ],
    build: ['👢', '🛡️', '❄️', '🧙', '❤️', '🔥'],
    buildNames: ['抵抗之靴', '救赎之翼', '极寒风暴', '魔女斗篷', '不死鸟之眼', '红莲斗篷'],
    buildDesc: '纯肉控制流，前排担当',
    runes: ['📗', '📘', '📙'],
    runeNames: ['调和 x10', '虚空 x10', '宿命 x10'],
    runeDesc: '生命值 +600，冷却缩减 +6%，每5秒回血 +52',
    tips: [
      { title: '对线技巧', content: '1技能冲锋消耗，2技能蓄力伤害' },
      { title: '团战思路', content: '大招开团击飞多人' }
    ]
  },

  // ========== 辅助 ==========
  '蔡文姬': {
    icon: '🎵', role: '辅助', difficulty: '简单', lane: '发育路',
    desc: '蔡文姬是一名强力辅助，拥有优秀的治疗和保护能力。',
    skills: [
      { name: '被动 - 长歌行', desc: '受伤后增加移速' },
      { name: '一技能 - 思无邪', desc: '弹射音波，伤害并减速' },
      { name: '二技能 - 胡笳乐', desc: '为队友回复生命值' },
      { name: '大招 - 忘忧曲', desc: '释放护盾，免疫控制，持续回血' }
    ],
    build: ['👢', '📖', '🛡️', '❤️', '🔮', '📕'],
    buildNames: ['疾步之靴', '极寒风暴', '救赎之翼', '不死鸟之眼', '魔女斗篷', '近卫荣耀'],
    buildDesc: '纯肉辅助装，最大化保护',
    runes: ['📗', '📘', '📙'],
    runeNames: ['调和 x10', '虚空 x10', '宿命 x10'],
    runeDesc: '生命值 +600，冷却缩减 +6%，每5秒回血 +52',
    tips: [
      { title: '保护技巧', content: '2技能持续治疗，大招关键时刻释放' },
      { title: '团战思路', content: '紧跟射手，持续治疗保护' }
    ]
  },
  '大乔': {
    icon: '🌊', role: '辅助', difficulty: '困难', lane: '发育路',
    desc: '大乔是一名传送辅助，可以召唤队友，战术多变。',
    skills: [
      { name: '被动 - 川流不息', desc: '移速提升，增加附近队友移速' },
      { name: '一技能 - 鲤跃之潮', desc: '释放水浪，击退敌人' },
      { name: '二技能 - 宿命之海', desc: '释放传送门，传送队友' },
      { name: '大招 - 漩涡之门', desc: '召唤队友到身边' }
    ],
    build: ['👢', '📖', '🛡️', '❤️', '🔮', '📕'],
    buildNames: ['疾步之靴', '极寒风暴', '救赎之翼', '不死鸟之眼', '魔女斗篷', '近卫荣耀'],
    buildDesc: '冷却辅助装，频繁使用技能',
    runes: ['📗', '📘', '📙'],
    runeNames: ['调和 x10', '虚空 x10', '宿命 x10'],
    runeDesc: '生命值 +600，冷却缩减 +6%，每5秒回血 +52',
    tips: [
      { title: '支援技巧', content: '用大招快速支援队友' },
      { title: '团战思路', content: '2技能传送队友，1技能击退保护' }
    ]
  },
  '瑶': {
    icon: '🧚', role: '辅助', difficulty: '简单', lane: '发育路',
    desc: '瑶是一名附身辅助，可以附身队友提供保护，新手友好。',
    skills: [
      { name: '被动 - 山鬼·白鹿', desc: '被控制后变鹿，获得免伤' },
      { name: '一技能 - 若有人兮', desc: '释放能量，造成伤害并眩晕' },
      { name: '二技能 - 风飒木萧', desc: '释放风刃，造成伤害' },
      { name: '大招 - 独立兮山之上', desc: '附身队友，提供护盾' }
    ],
    build: ['👢', '📖', '🛡️', '❤️', '🔮', '📕'],
    buildNames: ['疾步之靴', '极寒风暴', '救赎之翼', '不死鸟之眼', '魔女斗篷', '近卫荣耀'],
    buildDesc: '纯肉辅助装，附身保护',
    runes: ['📗', '📘', '📙'],
    runeNames: ['调和 x10', '虚空 x10', '宿命 x10'],
    runeDesc: '生命值 +600，冷却缩减 +6%，每5秒回血 +52',
    tips: [
      { title: '附身技巧', content: '大招附身核心输出，持续保护' },
      { title: '团战思路', content: '附身射手或法师，提供护盾保护' }
    ]
  },
  '鬼谷子': {
    icon: '👁️', role: '辅助', difficulty: '中等', lane: '发育路',
    desc: '鬼谷子是一名隐身辅助，擅长开团和视野控制。',
    skills: [
      { name: '被动 - 先知', desc: '脱战后进入隐身' },
      { name: '一技能 - 先知·神隐', desc: '隐身并加速，攻击后现身' },
      { name: '二技能 - 纵横兵法', desc: '释放能量，眩晕范围内敌人' },
      { name: '大招 - 先知·雾隐', desc: '大范围隐身，队友获得加速' }
    ],
    build: ['👢', '📖', '🛡️', '❤️', '🔮', '📕'],
    buildNames: ['疾步之靴', '极寒风暴', '救赎之翼', '不死鸟之眼', '魔女斗篷', '近卫荣耀'],
    buildDesc: '冷却辅助装，频繁开团',
    runes: ['📗', '📘', '📙'],
    runeNames: ['调和 x10', '虚空 x10', '宿命 x10'],
    runeDesc: '生命值 +600，冷却缩减 +6%，每5秒回血 +52',
    tips: [
      { title: '开团技巧', content: '大招隐身接近，2技能眩晕开团' },
      { title: '游走技巧', content: '利用隐身游走，配合打野抓人' }
    ]
  }
};

// 移动端菜单切换
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// 英雄筛选功能
function filterHeroes(role) {
  const heroCards = document.querySelectorAll('.hero-card');
  const filterTags = document.querySelectorAll('.filter-tag');

  filterTags.forEach(tag => {
    tag.classList.remove('active');
    if (tag.textContent.includes(role) || (role === 'all' && tag.textContent === '全部')) {
      tag.classList.add('active');
    }
  });

  heroCards.forEach(card => {
    if (role === 'all' || card.dataset.role === role) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// 加载英雄详情数据
function loadHeroData(heroName) {
  const data = heroData[heroName];
  if (!data) {
    document.getElementById('heroName').textContent = heroName;
    document.getElementById('heroDesc').textContent = '暂无该英雄的详细攻略数据';
    return;
  }

  document.getElementById('heroIcon').textContent = data.icon;
  document.getElementById('heroName').textContent = heroName;
  document.getElementById('heroRole').textContent = data.role;
  document.getElementById('heroDifficulty').textContent = '难度：' + data.difficulty;
  document.getElementById('heroLane').textContent = '位置：' + data.lane;
  document.getElementById('heroDesc').textContent = data.desc;

  const skillsList = document.getElementById('skillsList');
  skillsList.innerHTML = data.skills.map(skill => `
    <div class="skill-card">
      <h4 class="skill-name">${skill.name}</h4>
      <p class="card-desc">${skill.desc}</p>
    </div>
  `).join('');

  const buildItems = document.getElementById('buildItems');
  buildItems.innerHTML = data.build.map((item, i) => `
    <div class="build-item" title="${data.buildNames[i]}">${item}</div>
  `).join('');

  document.title = heroName + ' - 王者荣耀攻略站';
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 页面加载初始化
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease';
    });
  });
});
