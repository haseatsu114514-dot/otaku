// ===== QUESTIONS DATA =====
const QUESTIONS = [
  // Axis 1: L/N (Live/Net) - questions 0-3
  { text: "好きなコンテンツのイベントがあったら、現地に行きたくなる", axis: "LN", direction: "L" },
  { text: "自分の部屋（ネット空間）が最強の基地だと思う", axis: "LN", direction: "N" },
  { text: "「生で見る」ことに特別な価値を感じる", axis: "LN", direction: "L" },
  { text: "情報収集はSNSやネット掲示板が中心だ", axis: "LN", direction: "N" },
  
  // Axis 2: S/D (Spread/Deep) - questions 4-7
  { text: "良いものを見つけたら、すぐ人に勧めたくなる", axis: "SD", direction: "S" },
  { text: "一人で黙々と楽しむ時間が至福だ", axis: "SD", direction: "D" },
  { text: "オタク仲間は多い方がいい", axis: "SD", direction: "S" },
  { text: "自分だけの解釈や発見を大切にしている", axis: "SD", direction: "D" },
  
  // Axis 3: P/U (Push/Universe) - questions 8-11
  { text: "特定の「推し」がいて、その人のためなら何でもする", axis: "PU", direction: "P" },
  { text: "ジャンルごと好きになるタイプだ", axis: "PU", direction: "U" },
  { text: "推しの髪型が変わったら即座に気づく自信がある", axis: "PU", direction: "P" },
  { text: "ストーリーや世界観に惹かれることが多い", axis: "PU", direction: "U" },
  
  // Axis 4: R/W (Research/Wave) - questions 12-15
  { text: "好きなことについて分析や考察をするのが好きだ", axis: "RW", direction: "R" },
  { text: "理屈より「なんか好き」という直感を信じる", axis: "RW", direction: "W" },
  { text: "攻略情報やデータを調べてから行動する", axis: "RW", direction: "R" },
  { text: "ミームやネタで盛り上がるのが好きだ", axis: "RW", direction: "W" },
];

// ===== CHARACTER IMAGES BY QUADRANT =====
const CHAR_IMAGES = {
  "LP": "char_live_push.png",   // Live × Push
  "NP": "char_net_push.png",    // Net × Push
  "LU": "char_live_universe.png", // Live × Universe
  "NU": "char_net_universe.png",  // Net × Universe
};

function getCharImage(code) {
  // Code format: [S/D][L/N][P/U][R/W]
  const field = code[1]; // L or N
  const focus = code[2]; // P or U
  return CHAR_IMAGES[field + focus] || "char_net_universe.png";
}

// ===== 16 TYPES DATA =====
const TYPES = {
  // ---- Live × Push (現場 × 推し型) ----
  "SLPR": {
    name: "整番の錬金術師",
    description: "チケット戦争の生存者。整理番号・入場順・座席配置を完全攻略し、推しに最も近い場所を確保する。遠征ルートの最適化が趣味で、物販列は始発集合が礼儀。",
    compatGood: "SNPR",
    compatBad: "DNUW",
    emoji: "🎫"
  },
  "SLPW": {
    name: "コールの人間兵器",
    description: "ライブ会場に響き渡る声の持ち主。UO・コール・振りコピ全開で、周囲を巻き込む現場の台風の目。推しのためなら声帯が壊れても本望。打ち上げまでがオタ活。",
    compatGood: "SLUW",
    compatBad: "DNPR",
    emoji: "📣"
  },
  "DLPR": {
    name: "痛バの建築家",
    description: "推しグッズの配置に黄金比を適用する匠。痛バッグ・祭壇・コレクションの構築は建築レベル。推しの情報は全て年表にまとめ、出演歴は暗唱できる。",
    compatGood: "DNPR",
    compatBad: "SNUW",
    emoji: "🏗️"
  },
  "DLPW": {
    name: "深夜の錬金術師",
    description: "推しへの感情をSSやイラストに変換する夜行性クリエイター。朝6時の「寝なきゃ」が口癖。感情の純度が高すぎて、作品に昇華するしかない。",
    compatGood: "DNPW",
    compatBad: "SLUR",
    emoji: "🌙"
  },

  // ---- Net × Push (ネット × 推し型) ----
  "SNPR": {
    name: "布教の大司教",
    description: "プレゼン資料レベルの推し紹介スレッドを量産。入門編〜上級編まで完備。新規ファンの獲得数が生きがいで、布教成功率は異常に高い。",
    compatGood: "SLPR",
    compatBad: "DLUW",
    emoji: "📢"
  },
  "SNPW": {
    name: "TLの怪文書製造機",
    description: "推しへの狂気じみた愛をツイートし続ける。「推しが呼吸してる…ありがとう…」で3000いいね。感情の振れ幅がTLのバイタルモニター。",
    compatGood: "SLPW",
    compatBad: "DNUR",
    emoji: "📝"
  },
  "DNPR": {
    name: "推しの年表職人",
    description: "推しのWiki・プロフィール・出演歴を完全管理。「それ、2019年3月の配信で言ってましたね」が口癖。推しに関するクイズは全問正解が当然。",
    compatGood: "DLPR",
    compatBad: "SLPW",
    emoji: "📋"
  },
  "DNPW": {
    name: "お気持ち表明マシン",
    description: "推しの新情報が出るたびに感情が決壊する。泣きながらスクショを撮り、泣きながら加工し、泣きながら投稿する。TLが自分のお気持ちで埋まるのは仕様。",
    compatGood: "DLPW",
    compatBad: "SLUR",
    emoji: "💢"
  },

  // ---- Live × Universe (現場 × 沼型) ----
  "SLUR": {
    name: "聖地巡礼の修験者",
    description: "作品の舞台・即売会・聖地を巡る求道者。フィールドワークこそオタ活の本質。「行かないと分からないことがある」が信条。遠征費は必要経費。",
    compatGood: "SNUR",
    compatBad: "DLPW",
    emoji: "🏔️"
  },
  "SLUW": {
    name: "現場の渡り鳥",
    description: "コミケ・即売会・上映会・オフ会を渡り歩く永久機関。「今日ここ、明日あそこ」のノリで日本縦断。フットワークの軽さが異常で、体力だけは無限にある。",
    compatGood: "SLPW",
    compatBad: "DNPR",
    emoji: "🕊️"
  },
  "DLUR": {
    name: "伏線回収マシン",
    description: "世界観・設定資料・時系列を徹底解析する考察の鬼。「3巻のあのセリフ、実は12巻の伏線」を発見するのが快感。結論が出るまで寝ない。",
    compatGood: "DNUR",
    compatBad: "SNPW",
    emoji: "🔍"
  },
  "DLUW": {
    name: "沼底の住人",
    description: "ジャンルの沼に深く潜り、気づけば2000時間。一気見・一気読み・周回の無限ループ。「あともう1話だけ」が朝5時まで続く。浮上する気がない。",
    compatGood: "DNUW",
    compatBad: "SNPR",
    emoji: "🫧"
  },

  // ---- Net × Universe (ネット × 沼型) ----
  "SNUR": {
    name: "弾幕アーティスト",
    description: "ニコニコ・配信の考察コメント・解説動画で知識を拡散。ジャンルの入口を作る案内人。「ここから入る人多いよね」と言われるコンテンツを作る。",
    compatGood: "SLUR",
    compatBad: "DNPW",
    emoji: "🎨"
  },
  "SNUW": {
    name: "例のアレの住人",
    description: "ネットミーム・MAD・語録文化を呼吸するように生きている。元ネタの聖地巡礼も辞さない行動力。日常会話がネットスラングで構成されており、元ネタの説明を始めると3時間コース。",
    compatGood: "SLUW",
    compatBad: "DLPR",
    emoji: "🃏"
  },
  "DNUR": {
    name: "有識者（自称）",
    description: "Wikiやまとめサイトに知識を蓄積し続ける古参の知恵袋。質問が来たら即座に正確な回答を返す。「それテンプレに書いてあるよ」が口癖。ジャンルの生き字引。",
    compatGood: "DLUR",
    compatBad: "SNPW",
    emoji: "🧐"
  },
  "DNUW": {
    name: "おすすめ欄の奴隷",
    description: "アルゴリズムに導かれるまま、夜な夜なコンテンツを消費し続ける存在。おすすめ→関連→関連→気づけば明け方。太陽は敵。浮上は年に数回。",
    compatGood: "DLUW",
    compatBad: "SLPR",
    emoji: "⛓️"
  },
};

// ===== AXIS CONFIG =====
const AXIS_CONFIG = {
  "LN": {
    left: { code: "L", label: "Live", color: "#ff6b35" },
    right: { code: "N", label: "Net", color: "#7b61ff" },
    gradient: "linear-gradient(90deg, #ff6b35, #7b61ff)"
  },
  "SD": {
    left: { code: "S", label: "Spread", color: "#ffd23f" },
    right: { code: "D", label: "Deep", color: "#ee4266" },
    gradient: "linear-gradient(90deg, #ffd23f, #ee4266)"
  },
  "PU": {
    left: { code: "P", label: "Push", color: "#ff6b9d" },
    right: { code: "U", label: "Universe", color: "#3bceac" },
    gradient: "linear-gradient(90deg, #ff6b9d, #3bceac)"
  },
  "RW": {
    left: { code: "R", label: "Research", color: "#0ead69" },
    right: { code: "W", label: "Wave", color: "#ffa62b" },
    gradient: "linear-gradient(90deg, #0ead69, #ffa62b)"
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
const resultCode = document.getElementById('result-code');
const resultName = document.getElementById('result-name');
const resultDescription = document.getElementById('result-description');
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
  
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.classList.remove('selected');
  });
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
    setTimeout(() => {
      displayQuestion();
    }, 150);
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
  
  if (!typeInfo) {
    console.error("Unknown type:", typeCode);
    return;
  }
  
  showPage(pageResult);
  
  // Character image
  resultCharImg.src = getCharImage(typeCode);
  resultCharImg.alt = typeInfo.name;
  
  // Set result content
  resultCode.textContent = typeCode;
  
  resultName.textContent = typeInfo.name;
  resultDescription.textContent = typeInfo.description;
  
  // Compatibility
  const goodType = TYPES[typeInfo.compatGood];
  const badType = TYPES[typeInfo.compatBad];
  compatGood.textContent = `${typeInfo.compatGood}：${goodType.name}`;
  compatBad.textContent = `${typeInfo.compatBad}：${badType.name}`;
  
  // Axis bars
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
    
    if (isLeft) {
      fill.style.left = '50%';
      fill.style.right = 'auto';
      fill.style.transformOrigin = 'left';
    } else {
      fill.style.right = '50%';
      fill.style.left = 'auto';
      fill.style.transformOrigin = 'right';
    }
    
    bar.appendChild(fill);
    
    const centerLine = document.createElement('div');
    centerLine.style.cssText = 'position:absolute;left:50%;top:0;bottom:0;width:1px;background:rgba(255,255,255,0.15);';
    bar.appendChild(centerLine);
    
    const rightLabel = document.createElement('span');
    rightLabel.className = 'result-axis-label';
    rightLabel.textContent = config.right.code;
    rightLabel.style.color = config.right.color;
    
    row.appendChild(leftLabel);
    row.appendChild(bar);
    row.appendChild(rightLabel);
    resultAxes.appendChild(row);
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fill.style.width = `${percentage / 2}%`;
      });
    });
  });
}

function shareToX() {
  const typeCode = getTypeCode();
  const typeInfo = TYPES[typeCode];
  const code = resultCode.textContent;
  const name = typeInfo.name;
  
  const text = `あなたのオタタイプは…\n\n【${code}：${name}】${typeInfo.emoji}\n\n${typeInfo.description.split('。')[0]}。\n\n#OTATYPE #オタタイプ診断`;
  
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'width=550,height=420');
}

function retryQuiz() {
  currentQuestion = 0;
  scores = { LN: 0, SD: 0, PU: 0, RW: 0 };
  showPage(pageLanding);
}
