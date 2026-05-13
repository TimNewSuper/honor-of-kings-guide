// 王者荣耀攻略站 - 主逻辑

// 英雄数据
const heroData = {
  '亚瑟': {
    icon: '⚔️',
    role: '战士',
    difficulty: '简单',
    lane: '对抗路',
    desc: '亚瑟是一名经典的战士英雄，拥有较高的生存能力和持续输出能力。技能简单易懂，非常适合新手玩家使用。被动技能提供持续回复，让他在对线期有很强的续航能力。',
    skills: [
      { name: '被动 - 圣光守护', desc: '亚瑟获得圣光守护，每2秒回复自身最大生命值1%' },
      { name: '一技能 - 誓约之盾', desc: '亚瑟举盾冲锋，增加移速并强化下一次普攻，造成沉默效果' },
      { name: '二技能 - 回旋打击', desc: '亚瑟召唤圣盾围绕自身旋转，对周围敌人持续造成伤害' },
      { name: '大招 - 圣剑裁决', desc: '亚瑟跳跃至目标位置，对范围内敌人造成伤害并击飞' }
    ],
    build: ['🔥', '👢', '🪓', '❄️', '🧙', '🛡️'],
    buildNames: ['红莲斗篷', '抵抗之靴', '暗影战斧', '冰痕之握', '魔女斗篷', '不祥征兆'],
    buildDesc: '以肉装为主，兼顾冷却缩减，提升生存能力和技能释放频率',
    runes: ['📗', '📘', '📙'],
    runeNames: ['异变 x10', '鹰眼 x10', '隐匿 x10'],
    runeDesc: '物理攻击 +29，物理穿透 +100，移速 +10%'
  },
  '安琪拉': {
    icon: '🔮',
    role: '法师',
    difficulty: '简单',
    lane: '中路',
    desc: '安琪拉是一名高爆发法师，拥有强大的控制和瞬间秒杀能力。二技能命中后接大招可以轻松秒杀脆皮英雄，是新手法师的最佳选择。',
    skills: [
      { name: '被动 - 咒术火焰', desc: '技能命中敌人会叠加灼烧效果，最多叠加3层，造成持续伤害' },
      { name: '一技能 - 火球术', desc: '安琪拉释放5颗火球，对敌人造成法术伤害' },
      { name: '二技能 - 混沌火种', desc: '安琪拉释放火种，对命中的敌人造成眩晕效果' },
      { name: '大招 - 炽热光辉', desc: '安琪拉释放强力光束，持续对路径上敌人造成高额法术伤害' }
    ],
    build: ['📖', '👟', '🔮', '💀', '🎩', '📕'],
    buildNames: ['秘法之靴', '噬神之书', '回响之杖', '博学者之怒', '虚无法杖', '贤者之书'],
    buildDesc: '全法术输出装，最大化技能伤害，二技能命中后一套秒杀',
    runes: ['📕', '📘', '📗'],
    runeNames: ['梦魇 x10', '心眼 x10', '狩猎 x10'],
    runeDesc: '法术攻击 +53，法术穿透 +88，攻速 +10%'
  },
  '鲁班七号': {
    icon: '🤖',
    role: '射手',
    difficulty: '简单',
    lane: '发育路',
    desc: '鲁班七号是一名高输出射手，拥有超远距离的攻击范围和极高的持续输出能力。虽然没有位移技能，但伤害爆炸，是团战收割机。',
    skills: [
      { name: '被动 - 扫射', desc: '每3次普攻后，下一次普攻会扫射，造成范围伤害' },
      { name: '一技能 - 河豚手雷', desc: '投掷手雷，对命中敌人造成伤害并减速' },
      { name: '二技能 - 空中支援', desc: '召唤空中支援，对区域内敌人造成伤害并减速' },
      { name: '大招 - 火力压制', desc: '向指定方向发射火箭弹，对路径上敌人造成高额伤害' }
    ],
    build: ['🏹', '👢', '⚡', '🗡️', '💀', '🛡️'],
    buildNames: ['急速战靴', '闪电匕首', '无尽战刃', '破晓', '泣血之刃', '名刀'],
    buildDesc: '攻速暴击流出装，最大化持续输出能力，后期伤害爆炸',
    runes: ['📗', '📘', '📙'],
    runeNames: ['无双 x10', '鹰眼 x10', '夺萃 x10'],
    runeDesc: '暴击率 +7%，暴击效果 +36%，物理吸血 +16%'
  },
  '孙悟空': {
    icon: '🐒',
    role: '刺客',
    difficulty: '中等',
    lane: '打野',
    desc: '孙悟空是一名灵活的刺客英雄，拥有多段位移和高爆发伤害。擅长切入敌方后排秒杀脆皮，操作上限很高。',
    skills: [
      { name: '被动 - 大圣神威', desc: '释放技能后强化下一次普攻，造成额外伤害' },
      { name: '一技能 - 七十二变', desc: '孙悟空向前突进，对路径上敌人造成伤害' },
      { name: '二技能 - 斗战冲锋', desc: '孙悟空跳跃至目标位置，对范围内敌人造成伤害' },
      { name: '大招 - 如意金箍', desc: '孙悟空将金箍棒变大砸下，对范围内敌人造成伤害并击飞' }
    ],
    build: ['👟', '🗡️', '⚡', '💀', '🛡️', '🔮'],
    buildNames: ['疾步之靴', '暗影战斧', '无尽战刃', '破军', '名刀', '宗师之力'],
    buildDesc: '暴击穿透流出装，最大化爆发伤害，一套秒杀脆皮',
    runes: ['📗', '📘', '📙'],
    runeNames: ['无双 x10', '鹰眼 x10', '夺萃 x10'],
    runeDesc: '暴击率 +7%，暴击效果 +36%，物理吸血 +16%'
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

  // 更新标签状态
  filterTags.forEach(tag => {
    tag.classList.remove('active');
    if (tag.textContent.includes(role) || (role === 'all' && tag.textContent === '全部')) {
      tag.classList.add('active');
    }
  });

  // 筛选英雄卡片
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
    return;
  }

  // 更新基本信息
  document.getElementById('heroIcon').textContent = data.icon;
  document.getElementById('heroName').textContent = heroName;
  document.getElementById('heroRole').textContent = data.role;
  document.getElementById('heroDifficulty').textContent = '难度：' + data.difficulty;
  document.getElementById('heroLane').textContent = '位置：' + data.lane;
  document.getElementById('heroDesc').textContent = data.desc;

  // 更新技能列表
  const skillsList = document.getElementById('skillsList');
  skillsList.innerHTML = data.skills.map(skill => `
    <div class="skill-card">
      <h4 class="skill-name">${skill.name}</h4>
      <p class="card-desc">${skill.desc}</p>
    </div>
  `).join('');

  // 更新出装
  const buildItems = document.getElementById('buildItems');
  buildItems.innerHTML = data.build.map((item, i) => `
    <div class="build-item" title="${data.buildNames[i]}">${item}</div>
  `).join('');

  // 更新页面标题
  document.title = heroName + ' - 王者荣耀攻略站';
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
  // 添加卡片点击动画
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease';
    });
  });
});
