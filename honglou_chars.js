/* ═══════════════════════════════════════════════════════════
   红楼梦人物数据库 — 阵营、角色描述、人物关系
   ═══════════════════════════════════════════════════════════ */

var HONGLOU_FACTIONS = {
  '贾府核心': { color: 'rgba(196,156,248,0.12)', border: 'rgba(196,156,248,0.25)', dot: '#C49CF8' },
  '贾府-宁国府': { color: 'rgba(196,156,248,0.08)', border: 'rgba(196,156,248,0.18)', dot: '#B88AE0' },
  '贾府-荣府赦系': { color: 'rgba(196,156,248,0.10)', border: 'rgba(196,156,248,0.22)', dot: '#D4B0FF' },
  '林家': { color: 'rgba(184,201,242,0.15)', border: 'rgba(184,201,242,0.30)', dot: '#B8C9F2' },
  '薛家': { color: 'rgba(252,200,213,0.18)', border: 'rgba(252,200,213,0.35)', dot: '#FCC8D5' },
  '史家': { color: 'rgba(106,226,64,0.10)', border: 'rgba(106,226,64,0.25)', dot: '#6AE240' },
  '甄家': { color: 'rgba(184,201,242,0.10)', border: 'rgba(184,201,242,0.25)', dot: '#A0B8E8' },
  '神话': { color: 'rgba(255,193,7,0.12)', border: 'rgba(255,193,7,0.25)', dot: '#FFC107' },
  '丫鬟仆从': { color: 'rgba(184,201,242,0.08)', border: 'rgba(184,201,242,0.20)', dot: '#9AB4E0' },
  '其他': { color: 'rgba(45,45,45,0.05)', border: 'rgba(45,45,45,0.12)', dot: '#888888' }
};

var HONGLOU_CHAR_DB = {
  // ── 神话 ──
  '茫茫大士': { faction: '神话', role: '癞头和尚', desc: '度脱顽石入红尘' },
  '渺渺真人': { faction: '神话', role: '跛足道人', desc: '与茫茫大士一同携石入世' },
  '空空道人': { faction: '神话', role: '抄录石头记', desc: '青埂峰下发现顽石记' },
  '跛足道人': { faction: '神话', role: '度人出世', desc: '唱好了歌度化甄士隐' },
  '癞头和尚': { faction: '神话', role: '茫茫大士化身', desc: '携通灵宝玉入世' },
  '警幻仙子': { faction: '神话', role: '太虚幻境主', desc: '掌管痴情司、薄命司' },

  // ── 甄家 ──
  '甄士隐': { faction: '甄家', role: '姑苏乡绅', desc: '谐音"真事隐"，全书叙事框架' },
  '封氏': { faction: '甄家', role: '甄士隐之妻', desc: '性情贤淑' },
  '英莲': { faction: '甄家', role: '甄士隐之女', desc: '后改名香菱，被拐卖入薛家' },
  '甄英莲': { faction: '甄家', role: '英莲原名', desc: '四岁被拐，命运多舛' },
  '甄宝玉': { faction: '甄家', role: '甄家公子', desc: '与贾宝玉相貌性情酷似' },

  // ── 贾府核心 ──
  '贾母': { faction: '贾府核心', role: '史太君', desc: '贾府最高长辈，史侯之女' },
  '贾政': { faction: '贾府核心', role: '贾母次子', desc: '工部员外郎，宝玉之父' },
  '王夫人': { faction: '贾府核心', role: '贾政之妻', desc: '王熙凤姑妈，薛姨妈之姐' },
  '贾宝玉': { faction: '贾府核心', role: '贾政次子', desc: '衔玉而生，前世神瑛侍者' },
  '贾元春': { faction: '贾府核心', role: '宝玉长姐', desc: '加封贤德妃，贾府靠山' },
  '探春': { faction: '贾府核心', role: '贾政庶女', desc: '三姑娘，精明能干，有抱负' },
  '惜春': { faction: '贾府核心', role: '贾珍之妹', desc: '四姑娘，后出家为尼' },
  '贾环': { faction: '贾府核心', role: '贾政庶子', desc: '赵姨娘所生，品行不端' },
  '贾兰': { faction: '贾府核心', role: '贾珠之子', desc: '李纨之子，后中举' },
  '赵姨娘': { faction: '贾府核心', role: '贾政之妾', desc: '贾环、探春生母' },
  '贾代儒': { faction: '贾府核心', role: '义学塾师', desc: '贾府老辈' },
  '贾蔷': { faction: '贾府-宁国府', role: '贾珍之侄', desc: '风流俊秀，与龄官相恋' },
  '贾芸': { faction: '贾府核心', role: '贾府族侄', desc: '认宝玉为父，勤勉干练' },
  '贾迎春': { faction: '贾府-荣府赦系', role: '贾赦之女', desc: '同迎春，二小姐' },

  // ── 贾府-宁国府 ──
  '贾珍': { faction: '贾府-宁国府', role: '宁国府族长', desc: '袭三品爵威烈将军' },
  '尤氏': { faction: '贾府-宁国府', role: '贾珍之妻', desc: '宁府当家奶奶' },
  '贾蓉': { faction: '贾府-宁国府', role: '贾珍之子', desc: '秦可卿之夫' },
  '秦可卿': { faction: '贾府-宁国府', role: '贾蓉之妻', desc: '兼具钗黛之美，早逝' },
  '秦钟': { faction: '贾府-宁国府', role: '秦可卿之弟', desc: '与宝玉交好' },
  '贾敬': { faction: '贾府-宁国府', role: '贾珍之父', desc: '好道炼丹，不问家事' },

  // ── 贾府-荣府赦系 ──
  '贾赦': { faction: '贾府-荣府赦系', role: '贾母长子', desc: '袭一等将军，好色贪婪' },
  '邢夫人': { faction: '贾府-荣府赦系', role: '贾赦之妻', desc: '性情愚弱，好敛财' },
  '贾琏': { faction: '贾府-荣府赦系', role: '贾赦之子', desc: '王熙凤之夫，好风月' },
  '王熙凤': { faction: '贾府-荣府赦系', role: '贾琏之妻', desc: '荣府实际管家，精明泼辣' },
  '迎春': { faction: '贾府-荣府赦系', role: '贾赦之女', desc: '二小姐，懦弱老实，嫁孙绍祖' },
  '贾瑞': { faction: '贾府-荣府赦系', role: '贾府子弟', desc: '觊觎凤姐，死于相思局' },
  '巧姐': { faction: '贾府-荣府赦系', role: '贾琏之女', desc: '刘姥姥取名，后嫁入农家' },
  '贾巧姐': { faction: '贾府-荣府赦系', role: '贾琏之女', desc: '同巧姐' },
  '秋桐': { faction: '贾府-荣府赦系', role: '贾琏之妾', desc: '贾赦所赐' },

  // ── 林家 ──
  '林如海': { faction: '林家', role: '巡盐御史', desc: '林黛玉之父，贾敏之夫' },
  '贾敏': { faction: '林家', role: '林黛玉之母', desc: '贾母最疼爱之女' },
  '林黛玉': { faction: '林家', role: '林如海之女', desc: '前世绛珠仙草，寄居贾府' },

  // ── 薛家 ──
  '薛姨妈': { faction: '薛家', role: '王夫人之妹', desc: '薛蟠、宝钗之母' },
  '薛宝钗': { faction: '薛家', role: '薛姨妈之女', desc: '金锁配玉，端庄大方' },
  '薛蟠': { faction: '薛家', role: '薛姨妈之子', desc: '呆霸王，好惹是非' },
  '夏金桂': { faction: '薛家', role: '薛蟠之妻', desc: '悍妇，搅闹薛家' },
  '薛宝琴': { faction: '薛家', role: '薛蟠堂妹', desc: '才貌双全，见识广博' },
  '香菱': { faction: '薛家', role: '薛蟠之妾', desc: '即英莲，被夏金桂欺凌' },
  '宝蟾': { faction: '薛家', role: '夏金桂陪嫁丫鬟', desc: '后为薛蟠之妾' },

  // ── 史家 ──
  '史湘云': { faction: '史家', role: '贾母侄孙女', desc: '心直口快，才思敏捷' },

  // ── 丫鬟仆从 ──
  '袭人': { faction: '丫鬟仆从', role: '宝玉大丫鬟', desc: '本名花蕊珠，温柔和顺' },
  '花袭人': { faction: '丫鬟仆从', role: '同袭人', desc: '花家出身，本名蕊珠' },
  '晴雯': { faction: '丫鬟仆从', role: '宝玉丫鬟', desc: '心比天高，风流灵巧' },
  '紫鹃': { faction: '丫鬟仆从', role: '黛玉丫鬟', desc: '本名鹦哥，忠心耿耿' },
  '莺儿': { faction: '丫鬟仆从', role: '宝钗丫鬟', desc: '本名黄金莺，手巧善编' },
  '黄金莺': { faction: '丫鬟仆从', role: '同莺儿', desc: '宝钗贴身丫鬟' },
  '平儿': { faction: '丫鬟仆从', role: '凤姐陪嫁丫鬟', desc: '贾琏之妾，处事公正' },
  '鸳鸯': { faction: '丫鬟仆从', role: '贾母贴身丫鬟', desc: '抗婚拒嫁，刚烈忠诚' },
  '麝月': { faction: '丫鬟仆从', role: '宝玉丫鬟', desc: '踏实本分，最后留侍' },
  '小红': { faction: '丫鬟仆从', role: '宝玉院丫鬟', desc: '本名林红玉，后归凤姐' },
  '金钏': { faction: '丫鬟仆从', role: '王夫人丫鬟', desc: '被逐后投井，引发风波' },
  '玉钏': { faction: '丫鬟仆从', role: '金钏之妹', desc: '王夫人丫鬟' },
  '白玉钏': { faction: '丫鬟仆从', role: '同玉钏', desc: '金钏之妹' },
  '司棋': { faction: '丫鬟仆从', role: '迎春丫鬟', desc: '与潘又安私通被逐' },
  '彩云': { faction: '丫鬟仆从', role: '王夫人丫鬟', desc: '与贾环交好' },
  '彩霞': { faction: '丫鬟仆从', role: '王夫人丫鬟', desc: '同彩云' },
  '雪雁': { faction: '丫鬟仆从', role: '黛玉丫鬟', desc: '从扬州带来的小丫鬟' },
  '翠缕': { faction: '丫鬟仆从', role: '史湘云丫鬟', desc: '主仆论阴阳' },
  '茗烟': { faction: '丫鬟仆从', role: '宝玉小厮', desc: '机灵顽皮' },
  '兴儿': { faction: '丫鬟仆从', role: '贾琏小厮', desc: '向尤二姐述贾府事' },
  '坠儿': { faction: '丫鬟仆从', role: '小红同伴', desc: '拾虾须镯被逐' },
  '傻大姐': { faction: '丫鬟仆从', role: '贾母院粗使丫鬟', desc: '拾绣春囊引发抄检' },
  '春燕': { faction: '丫鬟仆从', role: '宝玉院丫鬟', desc: '何婆之女' },
  '五儿': { faction: '丫鬟仆从', role: '柳五儿', desc: '欲进宝玉院未成' },
  '柳五儿': { faction: '丫鬟仆从', role: '同五儿', desc: '体弱多病' },
  '芳官': { faction: '丫鬟仆从', role: '梨香院戏子', desc: '后归宝玉院' },
  '蕊官': { faction: '丫鬟仆从', role: '梨香院戏子', desc: '后归宝钗' },
  '藕官': { faction: '丫鬟仆从', role: '梨香院戏子', desc: '后归黛玉' },
  '龄官': { faction: '丫鬟仆从', role: '梨香院戏子', desc: '暗恋贾蔷，划蔷痴情' },
  '智能儿': { faction: '丫鬟仆从', role: '水月庵小尼', desc: '与秦钟私情' },
  '林之孝': { faction: '丫鬟仆从', role: '荣府管事', desc: '林红玉之父' },
  '赖大': { faction: '丫鬟仆从', role: '荣府大管家', desc: '其子赖尚荣得官' },
  '周瑞家的': { faction: '丫鬟仆从', role: '王夫人陪房', desc: '管事婆子' },
  '王善保家的': { faction: '丫鬟仆从', role: '邢夫人陪房', desc: '抄检大观园急先锋' },
  '宋嬷嬷': { faction: '丫鬟仆从', role: '宝玉院婆子', desc: '' },
  '来旺妇': { faction: '丫鬟仆从', role: '凤姐陪房', desc: '替凤姐放高利贷' },
  '何婆': { faction: '丫鬟仆从', role: '春燕之母', desc: '大观园管事婆子' },
  '鲍二家的': { faction: '丫鬟仆从', role: '贾琏私通之妇', desc: '事发后自缢' },
  '马道婆': { faction: '丫鬟仆从', role: '贾宝玉寄名干娘', desc: '魇魔法害宝玉' },

  // ── 其他 ──
  '贾雨村': { faction: '其他', role: '应天府尹', desc: '谐音"假语存"，受甄士隐资助后发迹' },
  '冷子兴': { faction: '其他', role: '古董商', desc: '演说荣国府，凤姐陪房周瑞女婿' },
  '刘姥姥': { faction: '其他', role: '乡间老妪', desc: '三进荣国府，见证贾府兴衰' },
  '北静王': { faction: '其他', role: '王爷', desc: '水溶，与宝玉交好' },
  '西平王': { faction: '其他', role: '王爷', desc: '贾府被抄时相助' },
  '冯紫英': { faction: '其他', role: '神武将军之子', desc: '与宝玉交好' },
  '柳湘莲': { faction: '其他', role: '世家子弟', desc: '与尤三姐定情后又悔婚' },
  '蒋玉菡': { faction: '其他', role: '琪官', desc: '戏子，与宝玉交好，后娶袭人' },
  '妙玉': { faction: '其他', role: '栊翠庵尼', desc: '气质高洁，命运多舛' },
  '孙绍祖': { faction: '其他', role: '迎春之夫', desc: '"中山狼"，虐待迎春至死' },
  '邢岫烟': { faction: '其他', role: '邢夫人侄女', desc: '许配薛蝌，安贫守分' },
  '李纨': { faction: '其他', role: '贾珠之妻', desc: '青年守寡，课子读书' },
  '李纹': { faction: '其他', role: '李纨堂妹', desc: '寄居贾府' },
  '李绮': { faction: '其他', role: '李纨堂妹', desc: '寄居贾府' },
  '李贵': { faction: '其他', role: '宝玉奶兄', desc: '李嬷嬷之子' },
  '李十儿': { faction: '其他', role: '贾政长随', desc: '怂恿贾政贪赃' },
  '尤二姐': { faction: '其他', role: '贾琏之妾', desc: '尤氏异母妹，被凤姐逼死' },
  '尤三姐': { faction: '其他', role: '尤二姐之妹', desc: '刚烈自刎' },
  '尤老娘': { faction: '其他', role: '尤二姐三姐之母', desc: '尤氏继母' },
  '门子': { faction: '其他', role: '葫芦庙小沙弥', desc: '给贾雨村出主意判葫芦案' },
  '倪二': { faction: '其他', role: '市井泼皮', desc: '"醉金刚"，借钱给贾芸' },
  '冯渊': { faction: '其他', role: '乡绅之子', desc: '买英莲被薛蟠打死' },
  '张太医': { faction: '其他', role: '名医', desc: '为秦可卿诊病' },
  '张道士': { faction: '其他', role: '清虚观住持', desc: '为宝玉提亲' },
  '王道士': { faction: '其他', role: '天齐庙道士', desc: '给宝玉开疗妒汤' },
  '王仁': { faction: '其他', role: '王熙凤之兄', desc: '卖巧姐' },
  '王子腾': { faction: '其他', role: '王夫人之弟', desc: '京营节度使，贾府外援' },
  '净虚': { faction: '其他', role: '水月庵尼姑', desc: '托凤姐拆散张金哥婚事' },
  '水月庵尼姑': { faction: '其他', role: '净虚徒弟', desc: '' },
  '金荣': { faction: '其他', role: '贾府义学学生', desc: '与秦钟起冲突' },
  '金寡妇': { faction: '其他', role: '金荣之母', desc: '' },
  '潘又安': { faction: '其他', role: '司棋表弟', desc: '与司棋私通' },
  '包勇': { faction: '其他', role: '甄家旧仆', desc: '后投贾府' },
  '胡庸医': { faction: '其他', role: '庸医', desc: '误诊晴雯' },
  '胡君荣': { faction: '其他', role: '太医', desc: '为尤二姐误诊' },
  '赵堂官': { faction: '其他', role: '锦衣府', desc: '抄检贾府' },
  '何三': { faction: '其他', role: '赌徒', desc: '勾结盗贼劫妙玉' }
};

/* ═══════════════════════════════════════════════════════════
   人物关系（双向，只需定义一次）
   type: 关系类型 | strength: 连线粗细(1-3)
   ═══════════════════════════════════════════════════════════ */
var HONGLOU_RELATIONS = [
  // 甄家
  { a:'甄士隐', b:'封氏', type:'夫妻', strength:3 },
  { a:'甄士隐', b:'英莲', type:'父女', strength:3 },
  { a:'甄士隐', b:'甄英莲', type:'父女', strength:3 },
  { a:'封氏', b:'英莲', type:'母女', strength:3 },
  { a:'封氏', b:'甄英莲', type:'母女', strength:3 },
  { a:'英莲', b:'甄英莲', type:'同人', strength:3 },
  { a:'英莲', b:'香菱', type:'同人', strength:3 },
  { a:'甄英莲', b:'香菱', type:'同人', strength:3 },
  { a:'甄士隐', b:'贾雨村', type:'资助赶考', strength:2 },
  { a:'甄士隐', b:'跛足道人', type:'随其出家', strength:2 },
  { a:'跛足道人', b:'癞头和尚', type:'同道', strength:2 },
  { a:'茫茫大士', b:'渺渺真人', type:'同道', strength:2 },
  { a:'茫茫大士', b:'癞头和尚', type:'化身', strength:2 },
  { a:'渺渺真人', b:'跛足道人', type:'化身', strength:2 },
  { a:'空空道人', b:'茫茫大士', type:'顽石传说', strength:1 },
  { a:'空空道人', b:'渺渺真人', type:'顽石传说', strength:1 },

  // 林家
  { a:'林如海', b:'贾敏', type:'夫妻', strength:3 },
  { a:'林如海', b:'林黛玉', type:'父女', strength:3 },
  { a:'贾敏', b:'林黛玉', type:'母女', strength:3 },
  { a:'贾敏', b:'贾母', type:'母女', strength:3 },
  { a:'林黛玉', b:'贾宝玉', type:'表兄妹·木石前盟', strength:3 },
  { a:'林如海', b:'贾雨村', type:'荐举复职', strength:2 },

  // 贾府核心
  { a:'贾母', b:'贾政', type:'母子', strength:3 },
  { a:'贾母', b:'贾赦', type:'母子', strength:3 },
  { a:'贾母', b:'贾敏', type:'母女', strength:3 },
  { a:'贾母', b:'贾宝玉', type:'祖孙', strength:3 },
  { a:'贾母', b:'史湘云', type:'姑祖母', strength:2 },
  { a:'贾政', b:'王夫人', type:'夫妻', strength:3 },
  { a:'贾政', b:'赵姨娘', type:'妾室', strength:2 },
  { a:'贾政', b:'贾宝玉', type:'父子', strength:3 },
  { a:'王夫人', b:'贾宝玉', type:'母子', strength:3 },
  { a:'王夫人', b:'贾元春', type:'母女', strength:3 },
  { a:'贾宝玉', b:'贾元春', type:'姐弟', strength:2 },
  { a:'贾宝玉', b:'探春', type:'兄妹', strength:2 },
  { a:'贾宝玉', b:'贾环', type:'兄弟', strength:2 },
  { a:'贾政', b:'探春', type:'父女', strength:2 },
  { a:'赵姨娘', b:'贾环', type:'母子', strength:3 },
  { a:'赵姨娘', b:'探春', type:'母女', strength:2 },
  { a:'贾宝玉', b:'贾兰', type:'叔侄', strength:1 },
  { a:'贾宝玉', b:'薛宝钗', type:'表姐弟·金玉良缘', strength:3 },
  { a:'王夫人', b:'薛姨妈', type:'姐妹', strength:2 },
  { a:'王夫人', b:'王熙凤', type:'姑侄', strength:2 },
  { a:'王夫人', b:'王子腾', type:'姐弟', strength:2 },
  { a:'王夫人', b:'金钏', type:'主仆', strength:1 },
  { a:'王夫人', b:'玉钏', type:'主仆', strength:1 },
  { a:'王夫人', b:'彩云', type:'主仆', strength:1 },
  { a:'王夫人', b:'彩霞', type:'主仆', strength:1 },
  { a:'金钏', b:'玉钏', type:'姐妹', strength:2 },
  { a:'玉钏', b:'白玉钏', type:'同人', strength:3 },
  { a:'彩云', b:'彩霞', type:'同人', strength:2 },
  { a:'彩云', b:'贾环', type:'私情', strength:1 },

  // 宁国府
  { a:'贾珍', b:'尤氏', type:'夫妻', strength:3 },
  { a:'贾珍', b:'贾蓉', type:'父子', strength:3 },
  { a:'贾蓉', b:'秦可卿', type:'夫妻', strength:3 },
  { a:'贾珍', b:'秦可卿', type:'公公与儿媳', strength:2 },
  { a:'秦可卿', b:'秦钟', type:'姐弟', strength:2 },
  { a:'贾敬', b:'贾珍', type:'父子', strength:2 },
  { a:'尤氏', b:'尤二姐', type:'异母姐妹', strength:2 },
  { a:'尤氏', b:'尤三姐', type:'异母姐妹', strength:2 },
  { a:'尤二姐', b:'尤三姐', type:'姐妹', strength:3 },
  { a:'尤二姐', b:'尤老娘', type:'母女', strength:2 },
  { a:'尤三姐', b:'尤老娘', type:'母女', strength:2 },
  { a:'秦钟', b:'贾宝玉', type:'同窗好友', strength:2 },
  { a:'秦钟', b:'智能儿', type:'私情', strength:1 },

  // 荣府赦系
  { a:'贾赦', b:'邢夫人', type:'夫妻', strength:3 },
  { a:'贾赦', b:'贾琏', type:'父子', strength:3 },
  { a:'贾赦', b:'迎春', type:'父女', strength:2 },
  { a:'贾琏', b:'王熙凤', type:'夫妻', strength:3 },
  { a:'贾琏', b:'平儿', type:'妾室', strength:2 },
  { a:'贾琏', b:'秋桐', type:'妾室', strength:1 },
  { a:'贾琏', b:'尤二姐', type:'妾室', strength:2 },
  { a:'王熙凤', b:'巧姐', type:'母女', strength:3 },
  { a:'王熙凤', b:'贾巧姐', type:'母女', strength:3 },
  { a:'巧姐', b:'贾巧姐', type:'同人', strength:3 },
  { a:'王熙凤', b:'平儿', type:'主仆', strength:2 },
  { a:'王熙凤', b:'来旺妇', type:'主仆', strength:1 },
  { a:'王熙凤', b:'小红', type:'主仆', strength:1 },
  { a:'贾琏', b:'鲍二家的', type:'私通', strength:1 },
  { a:'迎春', b:'孙绍祖', type:'夫妻', strength:3 },
  { a:'迎春', b:'贾迎春', type:'同人', strength:3 },
  { a:'贾迎春', b:'孙绍祖', type:'夫妻', strength:3 },
  { a:'贾瑞', b:'王熙凤', type:'觊觎', strength:1 },

  // 薛家
  { a:'薛姨妈', b:'薛宝钗', type:'母女', strength:3 },
  { a:'薛姨妈', b:'薛蟠', type:'母子', strength:3 },
  { a:'薛蟠', b:'夏金桂', type:'夫妻', strength:3 },
  { a:'薛蟠', b:'香菱', type:'妾室', strength:2 },
  { a:'夏金桂', b:'宝蟾', type:'主仆', strength:1 },
  { a:'薛宝琴', b:'薛宝钗', type:'堂姐妹', strength:2 },
  { a:'薛宝琴', b:'薛蟠', type:'堂兄妹', strength:1 },

  // 丫鬟主仆
  { a:'贾宝玉', b:'袭人', type:'主仆', strength:2 },
  { a:'贾宝玉', b:'花袭人', type:'主仆', strength:2 },
  { a:'袭人', b:'花袭人', type:'同人', strength:3 },
  { a:'贾宝玉', b:'晴雯', type:'主仆', strength:2 },
  { a:'贾宝玉', b:'麝月', type:'主仆', strength:1 },
  { a:'贾宝玉', b:'茗烟', type:'主仆', strength:2 },
  { a:'林黛玉', b:'紫鹃', type:'主仆', strength:2 },
  { a:'林黛玉', b:'雪雁', type:'主仆', strength:1 },
  { a:'薛宝钗', b:'莺儿', type:'主仆', strength:2 },
  { a:'薛宝钗', b:'黄金莺', type:'主仆', strength:2 },
  { a:'莺儿', b:'黄金莺', type:'同人', strength:3 },
  { a:'贾母', b:'鸳鸯', type:'主仆', strength:2 },
  { a:'贾母', b:'傻大姐', type:'主仆', strength:1 },
  { a:'贾宝玉', b:'芳官', type:'主仆', strength:1 },
  { a:'薛宝钗', b:'蕊官', type:'主仆', strength:1 },
  { a:'林黛玉', b:'藕官', type:'主仆', strength:1 },
  { a:'贾宝玉', b:'春燕', type:'主仆', strength:1 },
  { a:'春燕', b:'何婆', type:'母女', strength:2 },
  { a:'五儿', b:'柳五儿', type:'同人', strength:3 },
  { a:'林之孝', b:'小红', type:'父女', strength:2 },
  { a:'司棋', b:'潘又安', type:'表兄妹·私情', strength:2 },
  { a:'迎春', b:'司棋', type:'主仆', strength:2 },
  { a:'周瑞家的', b:'冷子兴', type:'岳母与女婿', strength:1 },

  // 其他关系
  { a:'刘姥姥', b:'王熙凤', type:'受周济', strength:2 },
  { a:'刘姥姥', b:'巧姐', type:'恩人·取名', strength:2 },
  { a:'贾宝玉', b:'北静王', type:'交好', strength:1 },
  { a:'贾宝玉', b:'蒋玉菡', type:'交好', strength:1 },
  { a:'贾宝玉', b:'柳湘莲', type:'交好', strength:1 },
  { a:'贾宝玉', b:'冯紫英', type:'交好', strength:1 },
  { a:'袭人', b:'蒋玉菡', type:'后成婚', strength:1 },
  { a:'柳湘莲', b:'尤三姐', type:'定情·悔婚', strength:2 },
  { a:'薛蟠', b:'冯渊', type:'人命官司', strength:1 },
  { a:'薛蟠', b:'香菱', type:'买为妾', strength:1 },
  { a:'薛蟠', b:'柳湘莲', type:'结拜', strength:1 },
  { a:'冷子兴', b:'贾雨村', type:'旧交', strength:1 },
  { a:'贾雨村', b:'门子', type:'主仆', strength:1 },
  { a:'贾雨村', b:'贾赦', type:'趋附', strength:1 },
  { a:'贾蔷', b:'龄官', type:'相恋', strength:2 },
  { a:'贾蔷', b:'贾珍', type:'侄子', strength:1 },
  { a:'贾芸', b:'贾宝玉', type:'认父', strength:1 },
  { a:'贾芸', b:'倪二', type:'借款', strength:1 },
  { a:'邢岫烟', b:'薛宝琴', type:'同住', strength:1 },
  { a:'李纨', b:'贾兰', type:'母子', strength:3 },
  { a:'李纨', b:'李纹', type:'堂姐妹', strength:1 },
  { a:'李纨', b:'李绮', type:'堂姐妹', strength:1 },
  { a:'李纹', b:'李绮', type:'姐妹', strength:2 },
  { a:'妙玉', b:'贾宝玉', type:'暗慕', strength:1 },
  { a:'王仁', b:'王熙凤', type:'兄妹', strength:2 },
  { a:'王仁', b:'巧姐', type:'舅父·卖甥女', strength:1 },
  { a:'净虚', b:'王熙凤', type:'托办事', strength:1 },
  { a:'金荣', b:'秦钟', type:'同窗·冲突', strength:1 },
  { a:'金荣', b:'金寡妇', type:'母子', strength:2 },
  { a:'赵姨娘', b:'马道婆', type:'合谋魇魔', strength:1 },
  { a:'贾宝玉', b:'甄宝玉', type:'镜像', strength:1 }
];

/* ═══════════════════════════════════════════════════════════
   辅助函数
   ═══════════════════════════════════════════════════════════ */
function honglouGetCharInfo(name) {
  return HONGLOU_CHAR_DB[name] || { faction: '其他', role: '', desc: '' };
}

function honglouGetFactionStyle(faction) {
  return HONGLOU_FACTIONS[faction] || HONGLOU_FACTIONS['其他'];
}

function honglouGetRelations(chars) {
  // 返回当前章回人物中的所有关系
  var charSet = {};
  chars.forEach(function(c) { charSet[c] = true; });
  var result = [];
  HONGLOU_RELATIONS.forEach(function(r) {
    if (charSet[r.a] && charSet[r.b]) {
      result.push(r);
    }
  });
  return result;
}

function honglouGetFactionGroups(chars) {
  // 按阵营分组
  var groups = {};
  chars.forEach(function(c) {
    var info = honglouGetCharInfo(c);
    var f = info.faction || '其他';
    if (!groups[f]) groups[f] = [];
    groups[f].push(c);
  });
  return groups;
}

/* ═══════════════════════════════════════════════════════════
   渲染：人物关系导图（SVG）
   ═══════════════════════════════════════════════════════════ */
function renderHonglouCharMap(chars) {
  var nodes = chars.map(function(name, i) {
    var info = honglouGetCharInfo(name);
    return { name: name, info: info, id: i, degree: 0 };
  });

  var edges = honglouGetRelations(chars);

  // 计算每个节点的度（连接数）
  edges.forEach(function(e) {
    var ai = chars.indexOf(e.a);
    var bi = chars.indexOf(e.b);
    if (ai >= 0) nodes[ai].degree++;
    if (bi >= 0) nodes[bi].degree++;
  });

  // 按度数排序，度数最高的放中心
  nodes.sort(function(a, b) { return b.degree - a.degree; });

  var n = nodes.length;
  if (n === 0) return '';

  // 重新映射ID
  var nameToNode = {};
  nodes.forEach(function(nd, i) { nd.newIdx = i; nameToNode[nd.name] = nd; });
  edges.forEach(function(e) {
    e.fromIdx = nameToNode[e.a].newIdx;
    e.toIdx = nameToNode[e.b].newIdx;
  });

  // 布局：圆形 + 中心节点
  var hasCenter = n >= 4 && nodes[0].degree >= 2;
  var layoutNodes = [];

  if (hasCenter && n <= 9) {
    // 中心 + 环形
    var ringNodes = nodes.slice(1);
    var ringN = ringNodes.length;
    var ringRadius = Math.max(130, 50 + ringN * 22);
    layoutNodes.push({ x: 0, y: 0, node: nodes[0], isCenter: true });
    ringNodes.forEach(function(nd, i) {
      var angle = (i / ringN) * 2 * Math.PI - Math.PI / 2;
      layoutNodes.push({ x: ringRadius * Math.cos(angle), y: ringRadius * Math.sin(angle), node: nd, isCenter: false });
    });
  } else {
    // 纯环形
    var radius = n <= 3 ? 80 : Math.max(100, 40 + n * 20);
    nodes.forEach(function(nd, i) {
      var angle = (i / n) * 2 * Math.PI - Math.PI / 2;
      layoutNodes.push({ x: radius * Math.cos(angle), y: radius * Math.sin(angle), node: nd, isCenter: false });
    });
  }

  // SVG尺寸
  var maxR = 0;
  layoutNodes.forEach(function(ln) {
    var r = Math.sqrt(ln.x * ln.x + ln.y * ln.y);
    if (r > maxR) maxR = r;
  });
  var pad = 75;
  var svgSize = (maxR + pad) * 2;
  var center = svgSize / 2;

  // 关系线颜色
  var edgeColors = {
    '夫妻': '#FCC8D5',
    '父女': '#C49CF8',
    '母子': '#C49CF8',
    '母女': '#C49CF8',
    '父子': '#C49CF8',
    '祖孙': '#C49CF8',
    '兄妹': '#B8C9F2',
    '姐弟': '#B8C9F2',
    '兄弟': '#B8C9F2',
    '姐妹': '#B8C9F2',
    '表兄妹·木石前盟': '#FCC8D5',
    '表姐弟·金玉良缘': '#FCC8D5',
    '妾室': '#FCC8D5',
    '主仆': '#B8C9F2',
    '交好': '#6AE240'
  };

  var svg = '<div style="overflow-x:auto;"><svg viewBox="' + (-center) + ' ' + (-center) + ' ' + svgSize + ' ' + svgSize + '" style="width:100%;max-width:' + svgSize + 'px;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">';

  // 定义箭头
  svg += '<defs><marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><circle cx="3" cy="3" r="2" fill="rgba(45,45,45,0.25)"/></marker></defs>';

  // 绘制连线
  edges.forEach(function(e) {
    var fromLn = layoutNodes[e.fromIdx];
    var toLn = layoutNodes[e.toIdx];
    if (!fromLn || !toLn) return;

    var x1 = fromLn.x, y1 = fromLn.y;
    var x2 = toLn.x, y2 = toLn.y;
    var color = edgeColors[e.type] || 'rgba(45,45,45,0.2)';
    var sw = e.strength >= 3 ? 2 : e.strength >= 2 ? 1.5 : 1;
    var opacity = e.strength >= 3 ? 0.7 : e.strength >= 2 ? 0.5 : 0.35;

    // 曲线（如果两个节点都不在圆心）
    var midX = (x1 + x2) / 2;
    var midY = (y1 + y2) / 2;
    var dx = x2 - x1, dy = y2 - y1;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var curveOffset = dist > 60 ? 8 : 0;
    var perpX = dist > 0 ? -dy / dist * curveOffset : 0;
    var perpY = dist > 0 ? dx / dist * curveOffset : 0;

    svg += '<path d="M' + x1 + ' ' + y1 + ' Q' + (midX + perpX) + ' ' + (midY + perpY) + ' ' + x2 + ' ' + y2 + '" fill="none" stroke="' + color + '" stroke-width="' + sw + '" opacity="' + opacity + '" />';

    // 关系标签
    var labelX = midX + perpX * 0.8;
    var labelY = midY + perpY * 0.8;
    var label = e.type.length > 6 ? e.type.substring(0, 6) + '..' : e.type;
    svg += '<g transform="translate(' + labelX + ',' + labelY + ')">';
    svg += '<rect x="' + (-(label.length * 5 + 4)) + '" y="-8" width="' + (label.length * 10 + 8) + '" height="16" rx="8" fill="#FFFFFF" stroke="' + color + '" stroke-width="0.5" opacity="0.95"/>';
    svg += '<text text-anchor="middle" dominant-baseline="central" font-size="8" fill="#2D2D2D" font-family="DM Sans, sans-serif">' + label + '</text>';
    svg += '</g>';
  });

  // 绘制节点
  layoutNodes.forEach(function(ln) {
    var nd = ln.node;
    var fStyle = honglouGetFactionStyle(nd.info.faction);
    var r = ln.isCenter ? 32 : 26;
    var fontSize = ln.isCenter ? 11 : 9.5;

    // 节点背景圆
    svg += '<circle cx="' + ln.x + '" cy="' + ln.y + '" r="' + r + '" fill="' + fStyle.color + '" stroke="' + fStyle.border + '" stroke-width="1.5"/>';

    // 阵营色点
    svg += '<circle cx="' + (ln.x + r * 0.6) + '" cy="' + (ln.y - r * 0.6) + '" r="4" fill="' + fStyle.dot + '" opacity="0.8"/>';

    // 人物名
    svg += '<text x="' + ln.x + '" y="' + ln.y + '" text-anchor="middle" dominant-baseline="central" font-size="' + fontSize + '" fill="#2D2D2D" font-family="Fraunces, serif" font-weight="600">' + nd.name + '</text>';
  });

  svg += '</svg></div>';

  return svg;
}

/* ═══════════════════════════════════════════════════════════
   渲染：带底色的人物卡片（按阵营分组）
   ═══════════════════════════════════════════════════════════ */
function renderHonglouCharCards(chars) {
  var groups = honglouGetFactionGroups(chars);
  var html = '';

  // 按阵营顺序排列
  var factionOrder = ['神话', '甄家', '贾府核心', '贾府-宁国府', '贾府-荣府赦系', '林家', '薛家', '史家', '丫鬟仆从', '其他'];
  var hasContent = false;

  factionOrder.forEach(function(faction) {
    if (!groups[faction]) return;
    hasContent = true;
    var fStyle = honglouGetFactionStyle(faction);
    var members = groups[faction];

    html += '<div style="margin-bottom:14px;">';
    html += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">';
    html += '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:' + fStyle.dot + ';"></span>';
    html += '<span style="font-size:0.72rem;color:#2D2D2D;font-weight:600;font-family:var(--font-mono);text-transform:uppercase;letter-spacing:0.04em;">' + faction + '</span>';
    html += '<span style="font-size:0.68rem;color:#2D2D2D;opacity:0.4;">(' + members.length + '人)</span>';
    html += '</div>';
    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';

    members.forEach(function(name) {
      var info = honglouGetCharInfo(name);
      html += '<div style="flex:1;min-width:120px;max-width:200px;padding:10px 14px;background:' + fStyle.color + ';border:1px solid ' + fStyle.border + ';border-radius:var(--radius-sm);transition:all 0.2s var(--ease-out);cursor:default;" onmouseover="this.style.transform=\'translateY(-2px)\';this.style.boxShadow=\'0 2px 8px rgba(45,45,45,0.08)\'" onmouseout="this.style.transform=\'\';this.style.boxShadow=\'\'">';
      html += '<div style="font-family:var(--font-display);font-size:0.9rem;font-weight:600;color:#2D2D2D;">' + name + '</div>';
      if (info.role) {
        html += '<div style="font-size:0.68rem;color:#2D2D2D;opacity:0.55;margin-top:3px;font-family:var(--font-mono);">' + info.role + '</div>';
      }
      if (info.desc) {
        html += '<div style="font-size:0.72rem;color:#2D2D2D;opacity:0.6;margin-top:4px;line-height:1.5;">' + info.desc + '</div>';
      }
      html += '</div>';
    });

    html += '</div></div>';
  });

  if (!hasContent) {
    html = '<p style="color:#2D2D2D;opacity:0.5;font-size:0.85rem;">暂无人物信息</p>';
  }

  return html;
}

/* ═══════════════════════════════════════════════════════════
   渲染：图例
   ═══════════════════════════════════════════════════════════ */
function renderHonglouLegend() {
  var html = '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:16px;padding:10px 14px;background:rgba(45,45,45,0.02);border-radius:var(--radius-sm);border:1px solid var(--rule);">';
  var factions = ['神话', '甄家', '贾府核心', '贾府-宁国府', '贾府-荣府赦系', '林家', '薛家', '史家', '丫鬟仆从', '其他'];
  factions.forEach(function(f) {
    var s = honglouGetFactionStyle(f);
    html += '<div style="display:flex;align-items:center;gap:4px;">';
    html += '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:' + s.dot + ';border:1px solid ' + s.border + ';"></span>';
    html += '<span style="font-size:0.65rem;color:#2D2D2D;opacity:0.7;">' + f + '</span>';
    html += '</div>';
  });
  html += '</div>';
  return html;
}
