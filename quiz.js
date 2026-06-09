/* ════════════════════════════════════════
   PhD CHAOS INDEX — quiz.js
   All questions, scoring, and results
   ════════════════════════════════════════ */

// ── QUESTIONS ──────────────────────────────────────────────────────────────
// Each option has a `chaos` score (0–15). Higher = more unhinged.

const questions = [
  {
    category: "PI Surveillance",
    text: "Your PI just walked into the lab unannounced and is doing that thing where he 'casually' looks over your shoulder at your screen. You:",
    options: [
      { text: "Alt-tab to a paper. A relevant paper. One you've definitely read.", chaos: 2 },
      { text: "Minimize everything and say 'oh I was just about to come find you' with full eye contact.", chaos: 6 },
      { text: "Don't flinch. You have 11 tabs open and one of them is your CV updated with other labs.", chaos: 10 },
      { text: "Look him dead in the eyes, slowly close the laptop, and say nothing. Let him wonder.", chaos: 15 },
    ]
  },
  {
    category: "Lab Life",
    text: "It's 8pm. You've been in the lab since 9am. Your experiment failed for the 4th consecutive time this week. You feel:",
    options: [
      { text: "Frustrated, but methodical. I'll troubleshoot and try again tomorrow.", chaos: 1 },
      { text: "Honestly fine? I've emotionally detached from my data at this point.", chaos: 7 },
      { text: "One more failed replicate away from submitting my resignation via interpretive dance.", chaos: 12 },
      { text: "Nothing. I feel nothing. I am the experiment now.", chaos: 15 },
    ]
  },
  {
    category: "Psychoanalysis Hour",
    text: "Someone asks you to explain your research at a party. You give a 2-minute version. They say 'oh so you're like… a lab technician?' You:",
    options: [
      { text: "Politely clarify that a PhD involves original research and independent thought.", chaos: 2 },
      { text: "Say 'yeah basically' and immediately change the subject. It's not worth it.", chaos: 5 },
      { text: "Spiral internally while smiling externally. You're fine. Totally fine.", chaos: 9 },
      { text: "Ask them what THEY do, and then tell them a lab technician probably makes more than you anyway.", chaos: 14 },
    ]
  },
  {
    category: "On-the-Spot Thinking",
    text: "Your PI surprises you with 'so can you present your progress to the group right now? Just 10 minutes, off the top of your head.'",
    options: [
      { text: "Sure, let me just pull up my slides — I always keep them updated.", chaos: 1 },
      { text: "Nod confidently, open laptop, and frantically arrange figures into something defensible in 4 minutes.", chaos: 8 },
      { text: "My brain empties completely. I forget my own name. I describe my project using only metaphors.", chaos: 13 },
      { text: "Say 'absolutely' with full confidence, make up 60% of it in real time, and somehow it goes well. Chaotic evil.", chaos: 15 },
    ]
  },
  {
    category: "PI Intelligence",
    text: "Your PI emails you at 11pm asking 'where are you with the [thing]?' How do you read this?",
    options: [
      { text: "A genuine check-in. He's invested in my progress and wants to stay informed.", chaos: 1 },
      { text: "He probably just remembered and wanted to document that he asked. Classic.", chaos: 6 },
      { text: "This is surveillance disguised as mentorship. He knows. He always knows.", chaos: 11 },
      { text: "He's building a case. I've already started a reply that I've now deleted 7 times.", chaos: 15 },
    ]
  },
  {
    category: "Emotional State",
    text: "It's the middle of the week. Describe your current relationship with your thesis.",
    options: [
      { text: "We're in a good place. I feel clear on the direction and the timeline is manageable.", chaos: 0 },
      { text: "It's complicated. We're going through a rough patch but we'll be okay.", chaos: 6 },
      { text: "It's a situationship. I'm doing all the work, it gives me nothing back, and I can't leave.", chaos: 12 },
      { text: "We've both said things we can't take back. I'm staying for the stipend.", chaos: 15 },
    ]
  },
  {
    category: "Coping Mechanisms",
    text: "Your grant deadline is in 48 hours, your PI is cc'ing everyone on emails, and your code broke. You cope by:",
    options: [
      { text: "Breaking the problem into small tasks, making a priority list, and executing.", chaos: 1 },
      { text: "Ordering food, putting on a comfort show in one corner, and hyperfocusing until it's done.", chaos: 6 },
      { text: "Texting your labmate a single 'chapped marungi' and hoping they understand. They do.", chaos: 11 },
      { text: "Closing the laptop, lying on the floor of the lab, and staring at the ceiling for exactly 7 minutes before getting up and finishing everything in a fugue state.", chaos: 15 },
    ]
  },
  {
    category: "Final Boss",
    text: "Honestly, how unhinged are you RIGHT NOW, today, as you sit here taking this quiz instead of doing your actual work?",
    options: [
      { text: "I'm procrastinating but I have a plan. This counts as a mental health break.", chaos: 3 },
      { text: "Medium unhinged. I've eaten today but the sleep situation is complicated.", chaos: 8 },
      { text: "I've reread the same paragraph of a paper 4 times. I have a Slack message I haven't opened. I'm fine.", chaos: 12 },
      { text: "I found this quiz through a link chain I can no longer trace. I don't know what time it is.", chaos: 15 },
    ]
  }
];

// ── RESULT TIERS ────────────────────────────────────────────────────────────

const results = [
  {
    min: 0, max: 20,
    title: "Suspiciously Functional",
    tagline: "Either you're very okay, or you're very good at pretending. We respect both.",
    score_label: "Low",
    ring_color: "#1A8A5A",
    diagnosis: "Your chaos index registers at a concerningly low level. You make to-do lists and — here's the alarming part — you actually do them. Your methods section is organised. You've read papers this week that weren't just the abstract. Science needs people like you. Please don't leave.",
    pi: "LOW THREAT. Your PI's surveillance activities yield nothing of interest. He has started trying to find flaws in your work out of pure boredom. He cannot find them. This makes him more nosy.",
    survival: "Honestly? You don't need one. But watch your back — high-functioning PhD students tend to get voluntarily 'assigned' the new rotation students to mentor. This is how they get you.",
    roast: "You took a procrastination quiz and still somehow made it productive by treating it as a mindfulness exercise. You're the person in the group project who finishes their part early and 'doesn't mind' reviewing everyone else's. Your colleagues fear and adore you. You're low-key insufferable and entirely too okay for this environment.",
    citation: "Functional, S. (2024). A rare case of intact executive function in the third year of a PhD programme. Journal of Inexplicable Coping, 1(1), 1–3. DOI: 10.0000/how"
  },
  {
    min: 21, max: 45,
    title: "Academically Questionable",
    tagline: "Holding it together. But 'together' is doing a lot of work in that sentence.",
    score_label: "Moderate",
    ring_color: "#F59E0B",
    diagnosis: "You're in the zone where everything is technically fine but you've started narrating your own life in third person when you're very tired. You know what you need to do. You're just not doing it yet. The deadline isn't until Thursday. It's Tuesday. You're fine. You're so fine.",
    pi: "MODERATE THREAT. Your PI asks questions in a tone that suggests he already knows the answer. He schedules 'quick check-ins' that last 47 minutes. You've started maintaining a mental log of which days he waters the plants because those are his good days.",
    survival: "Rule 1: Always have one slide ready to show. Doesn't matter what it is. A figure, a half-made table, a flow chart. The appearance of progress is sometimes all you need. Rule 2: 'I'm finalising the analysis' means everything and nothing. Deploy freely.",
    roast: "You've described your thesis as 'almost there' for approximately six months. You have a complex relationship with your to-do list — you write things on it that you've already done, just for the satisfaction of crossing them off. You've explained your research to your parents so many times that they now give inaccurate summaries of it to relatives, and you've stopped correcting them.",
    citation: "Questionable, A. (2024). Functional dissociation as a sustainable PhD strategy: A mixed-methods self-study. Proceedings of the Annual Conference on Getting Through It, 4(2), 22–29."
  },
  {
    min: 46, max: 68,
    title: "Professionally Unravelling",
    tagline: "Chapped marungi mode: partial activation.",
    score_label: "High",
    ring_color: "#E8304A",
    diagnosis: "You are in a full situationship with your research. You've stopped being surprised when things go wrong and started being surprised when they go right. Your coping mechanisms have coping mechanisms. The lab is both your prison and your comfort zone, which is a psychological flag someone should probably look into.",
    pi: "HIGH THREAT. He is not just nosy — he is omniscient. He will mention, in your next meeting, something you thought in the shower. You've started conducting an internal audit before every interaction with him. You smile a specific way that means 'I hear you and I will address this' that doesn't mean you'll address it.",
    survival: "The Unravelling Protocol: (1) Eat something that isn't vending machine adjacent. (2) Close one — just ONE — browser tab. (3) Write down one true thing you know about your project. (4) Text a labmate. They are also unravelling. Misery plus company equals slightly less miserable. This is peer-reviewed.",
    roast: "You've read the same methods section of a paper four times and retained nothing. You have a draft email to your PI that you've edited so many times it now contradicts itself. Your inner monologue at this point is basically a live commentary of your own deterioration, and somehow you find it kind of funny? That's not a bad sign, actually. It means you're still in there.",
    citation: "Unravelling, P. (2024). Systematic collapse with preserved sense of humour: A longitudinal case study. International Journal of Okay But Actually Are You Okay, 3(1), 44–51. DOI: 10.0000/send-help"
  },
  {
    min: 69, max: 85,
    title: "Full Chapped Marungi Mode",
    tagline: "We see you. We understand. There are no words, only solidarity.",
    score_label: "Critical",
    ring_color: "#9333EA",
    diagnosis: "You have entered a state that cannot be adequately captured in academic language. Your relationship with time has become abstract. Your PI's name now triggers a physiological stress response. You've started referring to your thesis in the third person as 'the document.' The document is not cooperating. You are aware of this. You are choosing to take a quiz about it.",
    pi: "CRITICAL THREAT. Your PI is not a person at this point. He is a force of nature. A weather event. He doesn't knock. He emails at 11pm. He says 'as discussed' in reference to things that were never discussed. You have compiled a complete psychological profile of his behaviour patterns. This is not healthy but it is extremely accurate.",
    survival: "EMERGENCY PROTOCOL: (1) You are allowed to have a bad week. A bad month. Science is hard. You are one person. (2) The fact that you're still here means you're more stubborn than your worst day. (3) Close the laptop. Not to give up. To come back to it tomorrow. (4) Someone in your life thinks you're brilliant. They're not wrong. They also want you to eat something.",
    roast: "You took a quiz called the PhD Chaos Index and your result was FULL CHAPPED MARUNGI MODE. You knew this before you started. You took it for the validation. We're not judging — we ARE the quiz — and even we are a little concerned. You're funny about it, which is good. You're still showing up, which is impressive. But please, genuinely, have a glass of water and text someone back.",
    citation: "Marungi, C. (2024). Terminal chaos and its discontents: A first-person account with no control group. I Cannot Believe I'm Still Here: A Journal, 7(4), 1–1. DOI: 10.0000/chapped"
  },
  {
    min: 86, max: 120,
    title: "Beyond Classification",
    tagline: "The diagnostic tool cannot diagnose you. You have defeated the quiz.",
    score_label: "Transcendent",
    ring_color: "#0D1B2A",
    diagnosis: "You have achieved a state of chaos so complete that it has looped back into a kind of zen. You are not stressed. You are not fine. You are something else entirely — a being of pure deadline and spite, sustained by the sheer audacity of continuing to exist in academia. Your chaos index reads as an error. This is a feature, not a bug.",
    pi: "THREAT LEVEL: IRRELEVANT. You and your PI have entered a silent mutual understanding that can only be forged in the crucible of shared suffering. He is nosy. You are ungovernable. It balances out. Neither of you will speak of it.",
    survival: "There is no survival protocol for where you are. There is only the next thing. And then the next thing. And somehow you will do it — because you always do — because whatever this version of you is, it's stubborn and weird and surprisingly resilient. Chapped marungi fully activated. You're still here. That means something.",
    roast: "The irony is that you answered a quiz about losing your mind with the answers of someone who has already made peace with it. You're not chaotic — you're post-chaotic. You've been through the loop and come out the other side with a dry sense of humour and absolutely zero patience for anyone's nonsense. Honestly? Iconic. Terrible coping strategies, iconic personality.",
    citation: "Beyond, C. (2024). I transcended the chaos scale and all I got was this result. Unpublished. It will never be published. That's fine. That's okay. Journal of Things That Will Never Be Submitted, ∞."
  }
];

// ── STATE ────────────────────────────────────────────────────────────────────
let currentQ   = 0;
let totalChaos = 0;
let selected   = null;
const maxPossible = questions.reduce((sum, q) =>
  sum + Math.max(...q.options.map(o => o.chaos)), 0);

// ── DOM REFS ─────────────────────────────────────────────────────────────────
const screens   = { intro: null, quiz: null, result: null };
const elFill    = () => document.getElementById('chaos-fill');
const elValue   = () => document.getElementById('chaos-value');
const elQTag    = () => document.getElementById('q-tag');
const elQCat    = () => document.getElementById('q-category');
const elQText   = () => document.getElementById('q-text');
const elOptions = () => document.getElementById('options-grid');
const elCard    = () => document.getElementById('q-card');
const elBtnNext = () => document.getElementById('btn-next');

// ── SCREEN MANAGEMENT ────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── CHAOS METER ──────────────────────────────────────────────────────────────
function updateMeter(chaosScore) {
  const pct = Math.round((chaosScore / maxPossible) * 100);
  const fill = elFill();
  const val  = elValue();

  fill.style.width = pct + '%';
  fill.style.backgroundPosition = `${100 - pct}% 50%`;
  val.textContent = pct + '%';

  // shake when very chaotic
  if (pct >= 70) {
    fill.classList.add('shaking');
  } else {
    fill.classList.remove('shaking');
  }

  // color the percentage label
  if (pct < 35)      val.style.color = 'var(--chaos-low)';
  else if (pct < 65) val.style.color = 'var(--chaos-mid)';
  else               val.style.color = 'var(--chaos-high)';
}

// ── RENDER QUESTION ──────────────────────────────────────────────────────────
function renderQuestion() {
  const q     = questions[currentQ];
  const total = questions.length;
  const keys  = ['A', 'B', 'C', 'D'];

  elQTag().textContent      = `QUESTION ${String(currentQ + 1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
  elQCat().textContent      = q.category;
  elQText().textContent     = q.text;

  const grid = elOptions();
  grid.innerHTML = '';

  // shuffle display order each time (chaos should feel random)
  const shuffled = [...q.options].map((opt, i) => ({ ...opt, origIndex: i }));
  shuffled.sort(() => Math.random() - 0.5);

  shuffled.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-key">${keys[i]}</span>${opt.text}`;
    btn.dataset.chaos = opt.chaos;
    btn.addEventListener('click', () => selectOption(btn));
    grid.appendChild(btn);
  });

  selected = null;
  elBtnNext().disabled = true;
}

function selectOption(el) {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  selected = parseInt(el.dataset.chaos, 10);
  elBtnNext().disabled = false;
}

// ── ADVANCE ──────────────────────────────────────────────────────────────────
function advance() {
  if (selected === null) return;
  totalChaos += selected;
  updateMeter(totalChaos);

  if (currentQ < questions.length - 1) {
    const card = elCard();
    card.classList.add('fade-out');
    setTimeout(() => {
      currentQ++;
      card.classList.remove('fade-out');
      renderQuestion();
    }, 250);
  } else {
    showResult();
  }
}

// ── SHOW RESULT ───────────────────────────────────────────────────────────────
function showResult() {
  const pct = Math.round((totalChaos / maxPossible) * 100);
  const tier = results.find(r => pct >= r.min && pct <= r.max) || results[results.length - 1];

  // populate result UI
  document.getElementById('result-title').textContent    = tier.title;
  document.getElementById('result-tagline').textContent  = tier.tagline;
  document.getElementById('result-diagnosis').textContent = tier.diagnosis;
  document.getElementById('result-pi').textContent       = tier.pi;
  document.getElementById('result-survival').textContent = tier.survival;
  document.getElementById('result-roast').textContent    = tier.roast;
  document.getElementById('result-citation').textContent = tier.citation;

  // animate ring
  const ring   = document.getElementById('ring-fill');
  const numEl  = document.getElementById('ring-number');
  const circum = 327; // 2π × 52
  ring.style.stroke = tier.ring_color;
  ring.style.strokeDashoffset = circum - (circum * pct / 100);

  // count-up animation
  let count = 0;
  const target = pct;
  const step = Math.max(1, Math.floor(target / 60));
  const timer = setInterval(() => {
    count = Math.min(count + step, target);
    numEl.textContent = count;
    if (count >= target) clearInterval(timer);
  }, 20);

  showScreen('result');
}

// ── RESET ─────────────────────────────────────────────────────────────────────
function resetQuiz() {
  currentQ   = 0;
  totalChaos = 0;
  selected   = null;
  updateMeter(0);
  renderQuestion();
  showScreen('quiz');
}

// ── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-start').addEventListener('click', () => {
    showScreen('quiz');
    renderQuestion();
  });

  document.getElementById('btn-next').addEventListener('click', advance);
  document.getElementById('btn-restart').addEventListener('click', resetQuiz);
});
