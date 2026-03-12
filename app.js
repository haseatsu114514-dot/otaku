// ===== QUESTIONS DATA =====
const QUESTIONS = [
  // Axis 1: L/N (Live/Net)
  { text: "聖地巡礼やイベントに実際に足を運ぶのが好きだ", axis: "LN", direction: "L" },
  { text: "自分の部屋やネット空間が最強の基地だと思う", axis: "LN", direction: "N" },
  { text: "「生で見る」「現地に行く」ことに特別な価値を感じる", axis: "LN", direction: "L" },
  { text: "情報収集はSNSやネットが中心で、出かけなくても満足できる", axis: "LN", direction: "N" },

  // Axis 2: S/D (Spread/Deep)
  { text: "良いものを見つけたら、すぐ人に勧めたくなる", axis: "SD", direction: "S" },
  { text: "一人で黙々と楽しむ時間が至福だ", axis: "SD", direction: "D" },
  { text: "オタク仲間と感想を共有するのが楽しい", axis: "SD", direction: "S" },
  { text: "グッズや資料を集めて、自分だけのコレクションを作るのが好きだ", axis: "SD", direction: "D" },

  // Axis 3: P/U (Oshi/World)
  { text: "特定の「推し」がいて、その人のことなら何でも知りたい", axis: "PU", direction: "P" },
  { text: "作品やジャンルの世界観に惹かれることが多い", axis: "PU", direction: "U" },
  { text: "好きな人やキャラの出演情報は絶対チェックする", axis: "PU", direction: "P" },
  { text: "MAD動画や二次創作でコンテンツの世界が広がるのが好きだ", axis: "PU", direction: "U" },

  // Axis 4: R/W (Research/Wave)
  { text: "Wikiや設定資料集を読み込むのが好きだ", axis: "RW", direction: "R" },
  { text: "理屈より「なんか好き」という直感を信じる", axis: "RW", direction: "W" },
  { text: "気になったら徹底的に調べないと気が済まない", axis: "RW", direction: "R" },
  { text: "ミームやネタで盛り上がるのが好きだ", axis: "RW", direction: "W" },
];

// ===== CHARACTER IMAGES BY QUADRANT =====
const CHAR_IMAGES = {
  "LP": "char_live_push.png",
  "NP": "char_net_push.png",
  "LU": "char_live_universe.png",
  "NU": "char_net_universe.png",
};

// ===== TYPE GROUP CONFIG =====
const GROUP_CONFIG = {
  "LP": { label: "現場の一途勢", color: "#e07b39" },
  "NP": { label: "ネットの一途勢", color: "#d64d7e" },
  "LU": { label: "現場の探検家", color: "#3baa7e" },
  "NU": { label: "ネットの住人", color: "#7b61c4" },
};

function getGroup(code) {
  return code[1] + code[2];
}

function getCharImage(code) {
  return CHAR_IMAGES[getGroup(code)] || "char_net_universe.png";
}

// ===== 16 TYPES DATA =====
const TYPES = {
  // ──── Live × Oshi（現場の一途勢）────
  "SLPR": {
    name: "遠征の軍師",
    description: "好きなもののために遠征計画を完璧に立てる戦略家。チケット確保、交通手段、コラボカフェの予約まで抜かりがない。仲間に「今度のイベントどう行く？」と聞かれたら秒で最適ルートを出す頼れる存在。",
    aruaru: [
      "遠征の計画を立てるのが異常に得意",
      "交通費は「必要経費」と本気で思っている",
      "コラボカフェの予約開始時刻を正確に把握している",
    ],
    compatGood: "SNPR",
    compatBad: "DNUW",
    emoji: "🎫"
  },
  "SLPW": {
    name: "現場バフの使い手",
    description: "イベント会場で一番テンションが高い人。周りの気分まで上げてしまう天性のバフ持ち。コラボカフェでも即売会でもオフ会でも、この人がいると場の空気が変わる。帰り道の感想戦まで含めてオタ活。",
    aruaru: [
      "イベント帰りの感想戦が本番まである",
      "会場で偶然会った人とすぐ意気投合する",
      "「楽しかった」だけで1週間は生きられる",
    ],
    compatGood: "SLUW",
    compatBad: "DNPR",
    emoji: "🎉"
  },
  "DLPR": {
    name: "ソロ活の巨匠",
    description: "一人でコラボカフェに行き、一人で即売会を回り、一人で聖地を巡る。単独行動こそ最高効率。コレクションの整理にはこだわりがあって、好きなものの情報は細部まで正確に覚えている。",
    aruaru: [
      "ソロ参戦が最も効率良いと知っている",
      "グッズは自分ルールで綺麗に並べたい",
      "好きなものの情報は聞かれたら即答できる",
    ],
    compatGood: "DNPR",
    compatBad: "SNUW",
    emoji: "🏛️"
  },
  "DLPW": {
    name: "深夜の錬金術師",
    description: "イベントやコラボカフェで受けた感動を、帰ってから作品に変える夜行性タイプ。現場で感情が満タンになると創作衝動が止まらない。気づけば朝で「寝なきゃ」が口癖。好きを形にしないと落ち着かない。",
    aruaru: [
      "現場の感動を帰ってすぐ作品にする",
      "「もう寝る」のあとに新作が生まれる",
      "保存してある下書きが大量にある",
    ],
    compatGood: "DNPW",
    compatBad: "SLUR",
    emoji: "🌙"
  },

  // ──── Net × Oshi（ネットの一途勢）────
  "SNPR": {
    name: "布教の大司教",
    description: "「ここがすごい」を語らせたら止まらない。好きなものの魅力を的確にまとめて拡散するのが得意。新しいポストや動画が出たら即RTで応援。友達が自分の好きなものを好きになってくれると世界一嬉しい。",
    aruaru: [
      "好きなものの魅力を語ると30分止まらない",
      "友達を沼に引きずり込んだ実績がある",
      "新しい投稿や動画は即RTで応援する",
    ],
    compatGood: "SLPR",
    compatBad: "DLUW",
    emoji: "📢"
  },
  "SNPW": {
    name: "語彙力消失マシン",
    description: "好きなものの新情報が出るたびに語彙力が消える。「無理」「好き」「しんどい」しか出てこなくなる。感情の振り幅がタイムラインのバロメーターで、好きが溢れすぎてポストの文字数が毎回足りない。",
    aruaru: [
      "新ビジュアルが出ると「無理」しか言えない",
      "「好き」と「しんどい」で感想が完結する",
      "スクショフォルダの容量がヤバい",
    ],
    compatGood: "SLPW",
    compatBad: "DNUR",
    emoji: "🫠"
  },
  "DNPR": {
    name: "情報の守護者（ガーディアン）",
    description: "好きなものについての情報量が異常。聞かれたらすぐに正確な答えが出てくる。記憶力と調査力が武器で、「それ、あの時の○○で言ってたよ」が自然に出る。間違った情報がTLに流れると黙っていられない。",
    aruaru: [
      "好きなものの情報は聞かれたら即答",
      "誤情報がTLに流れるとソースを貼ってしまう",
      "公式の発言をだいたい覚えている",
    ],
    compatGood: "DLPR",
    compatBad: "SLPW",
    emoji: "🛡️"
  },
  "DNPW": {
    name: "お気持ち表明マシン",
    description: "好きなものに対して良いことも悪いことも全力で言う辛口オタク。熱量がすごいからこそ、褒める時は全力で褒めるし、納得いかない時はお気持ちを表明する。感想が長文になるのは愛の深さの証。",
    aruaru: [
      "感想が毎回長文になる。まとめられない",
      "良いところも悪いところも正直に言う",
      "「好きだから言うんだけど」が口癖",
    ],
    compatGood: "DLPW",
    compatBad: "SLUR",
    emoji: "🔥"
  },

  // ──── Live × World（現場の探検家）────
  "SLUR": {
    name: "聖地巡礼の修験者",
    description: "作品の舞台やモデルになった場所を調べ上げて実際に訪れる派。「現地に行くと見え方が変わる」が持論で、フィールドワークこそオタ活の醍醐味。旅行先が自然と聖地になっている。",
    aruaru: [
      "どこが聖地か調べまくって全部知っている",
      "聖地に着くとテンションが異常に上がる",
      "旅行のついでに聖地に寄るのが定番",
    ],
    compatGood: "SNUR",
    compatBad: "DLPW",
    emoji: "🏔️"
  },
  "SLUW": {
    name: "ジャンルの越境者（ボーダー）",
    description: "コミケ、コラボカフェ、オフ会、上映会。色んなイベントに顔を出すフットワークの軽い人。ジャンルの壁を軽々と越えて「今日はこっち、明日はあっち」が日常。どこに行っても知り合いがいる。",
    aruaru: [
      "年間の交通費がエグい",
      "「行ける？」「行く」のやり取りが秒",
      "どのジャンルにも知り合いがいる",
    ],
    compatGood: "SLPW",
    compatBad: "DNPR",
    emoji: "🌐"
  },
  "DLUR": {
    name: "伏線回収マシン",
    description: "作品の世界観や設定を徹底的に調べ上げる考察好き。「あのシーンの意味、実は…」を見つけた時が一番テンションが上がる。設定資料集やインタビューは隅々まで読み込む派。",
    aruaru: [
      "さりげないセリフに伏線を見出す",
      "設定資料集やインタビューを何度も読み返す",
      "考察を語り出すと止まらなくなる",
    ],
    compatGood: "DNUR",
    compatBad: "SNPW",
    emoji: "🔍"
  },
  "DLUW": {
    name: "作品に住んでる人",
    description: "ハマった世界から出てこないタイプ。映画館に何度も足を運んだり、コラボカフェに一人で通い詰めたり、現場で体感してこそのめり込める派。「あともう1回だけ」が永遠に終わらない。",
    aruaru: [
      "ハマると同じ作品を何周もする",
      "コラボカフェに一人で黙々と通う",
      "没入しすぎて時間の感覚がなくなる",
    ],
    compatGood: "DNUW",
    compatBad: "SNPR",
    emoji: "🏠"
  },

  // ──── Net × World（ネットの住人）────
  "SNUR": {
    name: "弾幕アーティスト",
    description: "コメント欄や配信で場を盛り上げるのが得意な人。大喜利センスが高くて、コメントで笑いを取れる。好きなジャンルの面白さを広めるのが上手く、想像力が豊かでMAD動画の元ネタも全部わかる。",
    aruaru: [
      "コメントで場を盛り上げるのが得意",
      "大喜利系のネタを思いつくのが速い",
      "「○○好きならこれも観て」が口癖",
    ],
    compatGood: "SLUR",
    compatBad: "DNPW",
    emoji: "🎨"
  },
  "SNUW": {
    name: "例のアレの住人",
    description: "ネットミーム・MAD・語録を自然に使いこなす住人。やろうと思えばミームだけで会話が成立する。元ネタの聖地巡礼も辞さない行動力を持ち、知らない人に元ネタの解説を始めると止まらない。",
    aruaru: [
      "ミームだけで会話を成立させたことがある",
      "初見の人に元ネタを語るのが楽しい",
      "MAD動画の新作を誰よりも早く見つける",
    ],
    compatGood: "SLUW",
    compatBad: "DLPR",
    emoji: "🃏"
  },
  "DNUR": {
    name: "有識者（自称）",
    description: "ジャンルの知識量で右に出る者がいない古参。誰かが困っていたらすぐに正確な情報を出せる。Wikiを読み込むのが趣味で、「それ、ここに書いてあるよ」が口癖。",
    aruaru: [
      "質問されたら秒でソース付きの回答を出す",
      "「テンプレ読んで」が口癖",
      "調べた情報が頭の中に全部入っている",
    ],
    compatGood: "DLUR",
    compatBad: "SNPW",
    emoji: "🧐"
  },
  "DNUW": {
    name: "おすすめ欄の奴隷",
    description: "アルゴリズムに従って夜な夜なコンテンツを消費し続ける存在。おすすめ→関連→関連→気づけば朝。「今日こそ早く寝る」が毎日の目標だが達成率は低い。",
    aruaru: [
      "「おすすめ」から新しい沼に落ちた回数が二桁",
      "気づいたらYouTubeが知らない動画を再生してた",
      "「今日こそ早く寝る」が日課のフリ",
    ],
    compatGood: "DLUW",
    compatBad: "SLPR",
    emoji: "⛓️"
  },
};

// ===== AXIS CONFIG =====
const AXIS_CONFIG = {
  "LN": {
    left: { code: "L", label: "Live（現場）", color: "#e07b39" },
    right: { code: "N", label: "Net（ネット）", color: "#7b61c4" },
    gradient: "linear-gradient(90deg, #e07b39, #7b61c4)"
  },
  "SD": {
    left: { code: "S", label: "Spread（共有）", color: "#d4a017" },
    right: { code: "D", label: "Deep（没入）", color: "#d64d7e" },
    gradient: "linear-gradient(90deg, #d4a017, #d64d7e)"
  },
  "PU": {
    left: { code: "P", label: "Oshi（推し）", color: "#e05a6e" },
    right: { code: "U", label: "World（世界）", color: "#3baa7e" },
    gradient: "linear-gradient(90deg, #e05a6e, #3baa7e)"
  },
  "RW": {
    left: { code: "R", label: "Research（研究）", color: "#2e8b8b" },
    right: { code: "W", label: "Wave（ノリ）", color: "#e0923e" },
    gradient: "linear-gradient(90deg, #2e8b8b, #e0923e)"
  }
};

// ===== STATE =====
let currentQuestion = 0;
let scores = { LN: 0, SD: 0, PU: 0, RW: 0 };

// ===== DOM REFS =====
const pageLanding = document.getElementById('page-landing');
const pageQuiz = document.getElementById('page-quiz');
const pageResult = document.getElementById('page-result');
const quizProgress = document.getElementById('quiz-progress');
const quizAxis = document.getElementById('quiz-axis');
const quizProgressFill = document.getElementById('quiz-progress-fill');
const quizQuestionText = document.getElementById('quiz-question-text');
const quizQuestionArea = document.getElementById('quiz-question-area');
const resultHero = document.getElementById('result-hero');
const resultCode = document.getElementById('result-code');
const resultName = document.getElementById('result-name');
const resultGroupLabel = document.getElementById('result-group-label');
const resultDescription = document.getElementById('result-description');
const resultAruaruList = document.getElementById('result-aruaru-list');
const resultAxes = document.getElementById('result-axes');
const resultCharImg = document.getElementById('result-char-img');
const compatGood = document.getElementById('compat-good');
const compatBad = document.getElementById('compat-bad');

// ===== FUNCTIONS =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  page.classList.add('active');
  window.scrollTo(0, 0);
}

function startQuiz() {
  currentQuestion = 0;
  scores = { LN: 0, SD: 0, PU: 0, RW: 0 };
  showPage(pageQuiz);
  displayQuestion();
}

function displayQuestion() {
  const q = QUESTIONS[currentQuestion];
  const axisConfig = AXIS_CONFIG[q.axis];
  quizProgress.textContent = `${currentQuestion + 1} / ${QUESTIONS.length}`;
  quizAxis.textContent = `${axisConfig.left.code} / ${axisConfig.right.code}`;
  quizAxis.style.background = axisConfig.gradient;
  quizAxis.style.webkitBackgroundClip = 'text';
  quizAxis.style.webkitTextFillColor = 'transparent';
  quizAxis.style.backgroundClip = 'text';
  quizProgressFill.style.width = `${(currentQuestion / QUESTIONS.length) * 100}%`;
  quizProgressFill.style.background = axisConfig.gradient;
  quizQuestionArea.classList.remove('fade-in');
  void quizQuestionArea.offsetWidth;
  quizQuestionArea.classList.add('fade-in');
  quizQuestionText.textContent = q.text;
}

function selectAnswer(value) {
  const q = QUESTIONS[currentQuestion];
  const leftSide = q.axis[0];
  const scoreValue = value - 3;
  if (q.direction === leftSide) {
    scores[q.axis] += scoreValue;
  } else {
    scores[q.axis] -= scoreValue;
  }
  currentQuestion++;
  if (currentQuestion >= QUESTIONS.length) {
    showResult();
  } else {
    setTimeout(() => displayQuestion(), 150);
  }
}

function getTypeCode() {
  const ln = scores.LN > 0 ? 'L' : (scores.LN < 0 ? 'N' : (Math.random() > 0.5 ? 'L' : 'N'));
  const sd = scores.SD > 0 ? 'S' : (scores.SD < 0 ? 'D' : (Math.random() > 0.5 ? 'S' : 'D'));
  const pu = scores.PU > 0 ? 'P' : (scores.PU < 0 ? 'U' : (Math.random() > 0.5 ? 'P' : 'U'));
  const rw = scores.RW > 0 ? 'R' : (scores.RW < 0 ? 'W' : (Math.random() > 0.5 ? 'R' : 'W'));
  return sd + ln + pu + rw;
}

function showResult() {
  const typeCode = getTypeCode();
  const typeInfo = TYPES[typeCode];
  if (!typeInfo) { console.error("Unknown type:", typeCode); return; }
  const group = getGroup(typeCode);
  const groupInfo = GROUP_CONFIG[group];
  showPage(pageResult);

  resultHero.dataset.group = group;
  resultCharImg.src = getCharImage(typeCode);
  resultCharImg.alt = typeInfo.name;
  resultCode.textContent = typeCode;
  resultCode.style.color = groupInfo.color;
  resultName.textContent = `${typeInfo.emoji} ${typeInfo.name}`;
  resultGroupLabel.textContent = groupInfo.label;
  resultGroupLabel.style.background = groupInfo.color;
  resultDescription.textContent = typeInfo.description;

  resultAruaruList.innerHTML = '';
  typeInfo.aruaru.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    resultAruaruList.appendChild(li);
  });

  const goodType = TYPES[typeInfo.compatGood];
  const badType = TYPES[typeInfo.compatBad];
  compatGood.textContent = `${typeInfo.compatGood}：${goodType.name}`;
  compatBad.textContent = `${typeInfo.compatBad}：${badType.name}`;

  renderAxisBars();
}

function renderAxisBars() {
  resultAxes.innerHTML = '';
  const axisOrder = ['LN', 'SD', 'PU', 'RW'];
  const maxScore = 8;
  axisOrder.forEach(axisKey => {
    const config = AXIS_CONFIG[axisKey];
    const score = scores[axisKey];
    const percentage = Math.min(Math.abs(score) / maxScore * 100, 100);
    const isLeft = score >= 0;
    const row = document.createElement('div');
    row.className = 'result-axis-row';
    const leftLabel = document.createElement('span');
    leftLabel.className = 'result-axis-label';
    leftLabel.textContent = config.left.code;
    leftLabel.style.color = config.left.color;
    const bar = document.createElement('div');
    bar.className = 'result-axis-bar';
    const fill = document.createElement('div');
    fill.className = `result-axis-fill ${isLeft ? 'left' : 'right'}`;
    fill.style.background = isLeft ? config.left.color : config.right.color;
    fill.style.width = '0%';
    if (isLeft) { fill.style.left = '50%'; fill.style.right = 'auto'; }
    else { fill.style.right = '50%'; fill.style.left = 'auto'; }
    bar.appendChild(fill);
    const center = document.createElement('div');
    center.style.cssText = 'position:absolute;left:50%;top:0;bottom:0;width:1px;background:rgba(0,0,0,0.1);';
    bar.appendChild(center);
    const rightLabel = document.createElement('span');
    rightLabel.className = 'result-axis-label';
    rightLabel.textContent = config.right.code;
    rightLabel.style.color = config.right.color;
    row.appendChild(leftLabel);
    row.appendChild(bar);
    row.appendChild(rightLabel);
    resultAxes.appendChild(row);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { fill.style.width = `${percentage / 2}%`; });
    });
  });
}

function shareToX() {
  const typeCode = resultCode.textContent;
  const typeInfo = TYPES[typeCode];
  const name = typeInfo.name;
  const desc = typeInfo.description.split('。')[0] + '。';
  const text = `あなたのオタクタイプは…\n\n【${typeCode}：${name}】${typeInfo.emoji}\n\n${desc}\n\n#OTATYPE #オタクタイプ診断`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'width=550,height=420');
}

function retryQuiz() {
  currentQuestion = 0;
  scores = { LN: 0, SD: 0, PU: 0, RW: 0 };
  showPage(pageLanding);
}
