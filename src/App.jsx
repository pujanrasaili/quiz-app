import { useState, useEffect, useRef } from "react";
import "./App.css";

const categories = {
  Science: {
    emoji: "🔬", color: "#00b4d8",
    Easy:   [
      { q: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"], answer: "CO2" },
      { q: "What planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: "Mercury" },
      { q: "What is H2O?", options: ["Salt", "Water", "Sugar", "Acid"], answer: "Water" },
    ],
    Medium: [
      { q: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au" },
      { q: "How many bones in the human body?", options: ["196", "206", "216", "226"], answer: "206" },
      { q: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "100,000 km/s"], answer: "300,000 km/s" },
    ],
    Hard: [
      { q: "What is the atomic number of Carbon?", options: ["4", "6", "8", "12"], answer: "6" },
      { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi"], answer: "Mitochondria" },
      { q: "Which particle has no charge?", options: ["Proton", "Electron", "Neutron", "Quark"], answer: "Neutron" },
    ],
  },
  History: {
    emoji: "📜", color: "#f4a261",
    Easy:   [
      { q: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], answer: "Da Vinci" },
      { q: "Which country invented pizza?", options: ["France", "USA", "Italy", "Greece"], answer: "Italy" },
      { q: "Who was the first US President?", options: ["Lincoln", "Washington", "Jefferson", "Adams"], answer: "Washington" },
    ],
    Medium: [
      { q: "In which year did WW2 end?", options: ["1943", "1944", "1945", "1946"], answer: "1945" },
      { q: "Where were the first Olympics held?", options: ["Rome", "Athens", "Sparta", "Cairo"], answer: "Athens" },
      { q: "Who was the first man on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"], answer: "Neil Armstrong" },
    ],
    Hard: [
      { q: "In what year was the Magna Carta signed?", options: ["1215", "1315", "1415", "1515"], answer: "1215" },
      { q: "Who was the last Pharaoh of Egypt?", options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Berenice"], answer: "Cleopatra" },
      { q: "Which empire was ruled by Genghis Khan?", options: ["Ottoman", "Roman", "Mongol", "Persian"], answer: "Mongol" },
    ],
  },
  Sports: {
    emoji: "⚽", color: "#2dc653",
    Easy:   [
      { q: "How many players in a football team?", options: ["9", "10", "11", "12"], answer: "11" },
      { q: "How many rings on the Olympic flag?", options: ["4", "5", "6", "7"], answer: "5" },
      { q: "Which sport is played at Wimbledon?", options: ["Cricket", "Tennis", "Badminton", "Squash"], answer: "Tennis" },
    ],
    Medium: [
      { q: "Which country won the most FIFA World Cups?", options: ["Germany", "Argentina", "Italy", "Brazil"], answer: "Brazil" },
      { q: "How long is a marathon?", options: ["40km", "41km", "42.195km", "43km"], answer: "42.195km" },
      { q: "In which sport do you use a puck?", options: ["Football", "Ice Hockey", "Baseball", "Polo"], answer: "Ice Hockey" },
    ],
    Hard: [
      { q: "Who has won the most Grand Slam titles?", options: ["Federer", "Nadal", "Djokovic", "Sampras"], answer: "Djokovic" },
      { q: "In what year were women first allowed in Olympics?", options: ["1896", "1900", "1920", "1928"], answer: "1900" },
      { q: "How many points is a try worth in rugby?", options: ["3", "4", "5", "6"], answer: "5" },
    ],
  },
  Geography: {
    emoji: "🌍", color: "#9b5de5",
    Easy:   [
      { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
      { q: "What is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
      { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    ],
    Medium: [
      { q: "Which is the longest river?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
      { q: "What is the smallest country?", options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"], answer: "Vatican City" },
      { q: "Which country has the most natural lakes?", options: ["USA", "Russia", "Brazil", "Canada"], answer: "Canada" },
    ],
    Hard: [
      { q: "What is the capital of Kazakhstan?", options: ["Almaty", "Astana", "Bishkek", "Tashkent"], answer: "Astana" },
      { q: "Which is the deepest lake in the world?", options: ["Caspian Sea", "Lake Superior", "Lake Baikal", "Lake Tanganyika"], answer: "Lake Baikal" },
      { q: "What is the highest capital city?", options: ["Kathmandu", "Quito", "La Paz", "Bogota"], answer: "La Paz" },
    ],
  },
};

const DIFFICULTIES = ["Easy", "Medium", "Hard"];
const DIFF_COLORS = { Easy: "#2dc653", Medium: "#f4a261", Hard: "#e94560" };
const DIFF_TIMES = { Easy: 20, Medium: 15, Hard: 10 };

function playSound(type) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  if (type === "correct") { o.frequency.setValueAtTime(520, ctx.currentTime); o.frequency.setValueAtTime(660, ctx.currentTime + 0.1); g.gain.setValueAtTime(0.3, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4); }
  if (type === "wrong") { o.frequency.setValueAtTime(200, ctx.currentTime); g.gain.setValueAtTime(0.3, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3); }
  if (type === "tick") { o.frequency.setValueAtTime(800, ctx.currentTime); g.gain.setValueAtTime(0.05, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05); }
  if (type === "complete") { [440,550,660,880].forEach((f,i) => { o.frequency.setValueAtTime(f, ctx.currentTime + i*0.1); }); g.gain.setValueAtTime(0.3, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6); }
  o.start(); o.stop(ctx.currentTime + 0.6);
}

export default function App() {
  const [screen, setScreen] = useState("start");
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(15);
  const [timerInterval, setTimerInterval] = useState(null);
  const [highScores, setHighScores] = useState(() => JSON.parse(localStorage.getItem("quizHighScores") || "{}"));
  const [soundOn, setSoundOn] = useState(true);

  const sound = (type) => { if (soundOn) try { playSound(type); } catch(e) {} };

  const startQuiz = (cat, diff) => {
    setCategory(cat); setDifficulty(diff);
    setCurrent(0); setScore(0); setSelected(null);
    setAnswers([]); setScreen("quiz");
    startTimer(diff);
  };

  const startTimer = (diff) => {
    const time = DIFF_TIMES[diff || difficulty];
    setTimer(time);
    clearInterval(timerInterval);
    const id = setInterval(() => {
      setTimer((t) => {
        if (t <= 3) sound("tick");
        if (t <= 1) { clearInterval(id); handleNext(true); return 0; }
        return t - 1;
      });
    }, 1000);
    setTimerInterval(id);
  };

  const handleSelect = (opt) => {
    if (selected) return;
    clearInterval(timerInterval);
    setSelected(opt);
    const q = categories[category][difficulty][current];
    const isCorrect = opt === q.answer;
    if (isCorrect) { setScore((s) => s + 1); sound("correct"); }
    else sound("wrong");
    setAnswers((a) => [...a, { q: q.q, selected: opt, correct: q.answer, isCorrect }]);
  };

  const handleNext = (auto = false) => {
    if (auto && !selected) {
      const q = categories[category][difficulty][current];
      setAnswers((a) => [...a, { q: q.q, selected: "⏱ Time up!", correct: q.answer, isCorrect: false }]);
    }
    const next = current + 1;
    const total = categories[category][difficulty].length;
    if (next >= total) {
      clearInterval(timerInterval);
      sound("complete");
      const key = `${category}-${difficulty}`;
      const prev = highScores[key] || 0;
      if (score + (selected && selected === categories[category][difficulty][current]?.answer ? 1 : 0) > prev) {
        const updated = { ...highScores, [key]: score };
        setHighScores(updated);
        localStorage.setItem("quizHighScores", JSON.stringify(updated));
      }
      setScreen("result");
    } else {
      setCurrent(next); setSelected(null); startTimer();
    }
  };

  const questions = category && difficulty ? categories[category][difficulty] : [];
  const progress = (current / (questions.length || 1)) * 100;
  const color = category ? categories[category].color : "#e94560";
  const diffColor = difficulty ? DIFF_COLORS[difficulty] : "#e94560";

  if (screen === "start") return (
    <div className="app">
      <div className="card start-card">
        <div className="top-controls">
          <button className="sound-btn" onClick={() => setSoundOn(s => !s)}>{soundOn ? "🔊" : "🔇"}</button>
        </div>
        <div className="start-emoji">🧠</div>
        <h1>Quiz App</h1>
        <p>Choose a category & difficulty!</p>

        <h3 className="section-label">📚 Category</h3>
        <div className="categories">
          {Object.entries(categories).map(([name, data]) => (
            <button key={name} className={`category-btn ${category === name ? "selected" : ""}`}
              style={{ "--cat-color": data.color }} onClick={() => setCategory(name)}>
              <span className="cat-emoji">{data.emoji}</span>
              <span className="cat-name">{name}</span>
              <span className="cat-hs">🏆 {highScores[`${name}-${difficulty || "Easy"}`] || 0}/{data.Easy.length}</span>
            </button>
          ))}
        </div>

        <h3 className="section-label">⚡ Difficulty</h3>
        <div className="difficulties">
          {DIFFICULTIES.map((d) => (
            <button key={d} className={`diff-btn ${difficulty === d ? "selected" : ""}`}
              style={{ "--diff-color": DIFF_COLORS[d] }} onClick={() => setDifficulty(d)}>
              <span>{d}</span>
              <span className="diff-time">⏱ {DIFF_TIMES[d]}s</span>
            </button>
          ))}
        </div>

        <button className="btn-primary" disabled={!category || !difficulty}
          style={{ background: category ? color : "#444", opacity: !category || !difficulty ? 0.5 : 1 }}
          onClick={() => startQuiz(category, difficulty)}>
          {!category ? "Select a Category" : !difficulty ? "Select Difficulty" : `Start ${category} Quiz →`}
        </button>
      </div>
    </div>
  );

  if (screen === "result") return (
    <div className="app">
      <div className="card result-card">
        <div className="result-emoji">{score === questions.length ? "🏆" : score >= questions.length * 0.6 ? "🎉" : "😊"}</div>
        <div className="result-badges">
          <span style={{ color }}>{categories[category].emoji} {category}</span>
          <span style={{ color: diffColor }}>⚡ {difficulty}</span>
        </div>
        <h2>Quiz Complete!</h2>
        <div className="score-display">
          <span className="score-num" style={{ color }}>{score}</span>
          <span className="score-total">/ {questions.length}</span>
        </div>
        <div className="hs-banner">
          🏆 Best: {highScores[`${category}-${difficulty}`] || 0} / {questions.length}
        </div>
        <p className="score-msg">
          {score === questions.length ? "Perfect! You're a genius! 🎉" :
           score >= questions.length * 0.6 ? "Great job! Almost perfect!" :
           "Keep practicing, you'll get better!"}
        </p>
        <div className="answers-review">
          <h3>Review Answers</h3>
          {answers.map((a, i) => (
            <div key={i} className={`review-item ${a.isCorrect ? "correct" : "wrong"}`}>
              <div className="review-q">Q{i + 1}: {a.q}</div>
              <div className="review-a">
                Your answer: <strong>{a.selected}</strong>
                {!a.isCorrect && <span> → <strong>{a.correct}</strong></span>}
              </div>
            </div>
          ))}
        </div>
        <div className="result-btns">
          <button className="btn-primary" style={{ background: color }} onClick={() => startQuiz(category, difficulty)}>Play Again →</button>
          <button className="btn-secondary" onClick={() => setScreen("start")}>Change Category</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="card quiz-card">
        <div className="quiz-header">
          <span className="q-counter" style={{ color }}>
            {categories[category].emoji} Q{current + 1}/{questions.length}
          </span>
          <div className={`timer ${timer <= 5 ? "danger" : ""}`}>⏱ {timer}s</div>
          <span className="q-score">⭐ {score}</span>
        </div>
        <div className="diff-badge" style={{ color: diffColor, borderColor: diffColor }}>⚡ {difficulty}</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%`, background: color }} />
        </div>
        <div className="question">{questions[current].q}</div>
        <div className="options">
          {questions[current].options.map((opt) => {
            let cls = "option";
            if (selected) {
              if (opt === questions[current].answer) cls += " correct";
              else if (opt === selected) cls += " wrong";
            }
            return (
              <button key={opt} className={cls} onClick={() => handleSelect(opt)} disabled={!!selected}>{opt}</button>
            );
          })}
        </div>
        {selected && (
          <button className="btn-primary next-btn" style={{ background: color }} onClick={() => handleNext()}>
            {current + 1 === questions.length ? "See Results →" : "Next →"}
          </button>
        )}
      </div>
    </div>
  );
}