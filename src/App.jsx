import { useState } from "react";
import "./App.css";

const categories = {
  Science: {
    emoji: "🔬",
    color: "#00b4d8",
    questions: [
      { q: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"], answer: "CO2" },
      { q: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "100,000 km/s"], answer: "300,000 km/s" },
      { q: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au" },
      { q: "How many bones are in the human body?", options: ["196", "206", "216", "226"], answer: "206" },
      { q: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: "Mercury" },
    ],
  },
  History: {
    emoji: "📜",
    color: "#f4a261",
    questions: [
      { q: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], answer: "Da Vinci" },
      { q: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: "1945" },
      { q: "Which country invented pizza?", options: ["France", "USA", "Italy", "Greece"], answer: "Italy" },
      { q: "Who was the first US President?", options: ["Lincoln", "Washington", "Jefferson", "Adams"], answer: "Washington" },
      { q: "Where were the first Olympics held?", options: ["Rome", "Athens", "Sparta", "Cairo"], answer: "Athens" },
    ],
  },
  Sports: {
    emoji: "⚽",
    color: "#2dc653",
    questions: [
      { q: "How many players are in a football team?", options: ["9", "10", "11", "12"], answer: "11" },
      { q: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Italy", "Brazil"], answer: "Brazil" },
      { q: "How many rings are on the Olympic flag?", options: ["4", "5", "6", "7"], answer: "5" },
      { q: "Which sport is played at Wimbledon?", options: ["Cricket", "Tennis", "Badminton", "Squash"], answer: "Tennis" },
      { q: "How long is a marathon in km?", options: ["40km", "41km", "42.195km", "43km"], answer: "42.195km" },
    ],
  },
  Geography: {
    emoji: "🌍",
    color: "#9b5de5",
    questions: [
      { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
      { q: "What is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
      { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
      { q: "Which is the longest river?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
      { q: "What is the smallest country?", options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"], answer: "Vatican City" },
    ],
  },
};

const EMOJIS = ["😢", "😕", "🙂", "😊", "🤩"];

export default function App() {
  const [screen, setScreen] = useState("start");
  const [category, setCategory] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(15);
  const [timerInterval, setTimerInterval] = useState(null);

  const startQuiz = (cat) => {
    setCategory(cat);
    setCurrent(0); setScore(0); setSelected(null);
    setAnswers([]); setScreen("quiz");
    startTimer();
  };

  const startTimer = () => {
    setTimer(15);
    clearInterval(timerInterval);
    const id = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) { clearInterval(id); handleNext(); return 0; }
        return t - 1;
      });
    }, 1000);
    setTimerInterval(id);
  };

  const handleSelect = (opt) => {
    if (selected) return;
    clearInterval(timerInterval);
    setSelected(opt);
    const correct = opt === categories[category].questions[current].answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, {
      q: categories[category].questions[current].q,
      selected: opt,
      correct: categories[category].questions[current].answer,
      isCorrect: correct
    }]);
  };

  const handleNext = () => {
    const next = current + 1;
    const total = categories[category].questions.length;
    if (next >= total) {
      clearInterval(timerInterval);
      setScreen("result");
    } else {
      setCurrent(next);
      setSelected(null);
      startTimer();
    }
  };

  const getEmoji = () => {
    const pct = score / categories[category].questions.length;
    if (pct <= 0.2) return EMOJIS[0];
    if (pct <= 0.4) return EMOJIS[1];
    if (pct <= 0.6) return EMOJIS[2];
    if (pct <= 0.8) return EMOJIS[3];
    return EMOJIS[4];
  };

  const questions = category ? categories[category].questions : [];
  const progress = (current / questions.length) * 100;
  const color = category ? categories[category].color : "#e94560";

  if (screen === "start") return (
    <div className="app">
      <div className="card start-card">
        <div className="start-emoji">🧠</div>
        <h1>Quiz App</h1>
        <p>Choose a category and test your knowledge!<br />You have <strong>15 seconds</strong> per question.</p>
        <div className="categories">
          {Object.entries(categories).map(([name, data]) => (
            <button
              key={name}
              className="category-btn"
              style={{ "--cat-color": data.color }}
              onClick={() => startQuiz(name)}
            >
              <span className="cat-emoji">{data.emoji}</span>
              <span className="cat-name">{name}</span>
              <span className="cat-count">{data.questions.length} questions</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  if (screen === "result") return (
    <div className="app">
      <div className="card result-card">
        <div className="result-emoji">{getEmoji()}</div>
        <div className="result-category" style={{ color }}>
          {categories[category].emoji} {category}
        </div>
        <h2>Quiz Complete!</h2>
        <div className="score-display">
          <span className="score-num" style={{ color }}>{score}</span>
          <span className="score-total">/ {questions.length}</span>
        </div>
        <p className="score-msg">
          {score === questions.length ? "Perfect score! You're a genius! 🎉" :
           score >= 4 ? "Great job! Almost perfect!" :
           score >= 3 ? "Good effort! Keep practicing!" :
           "Keep studying, you'll do better!"}
        </p>
        <div className="answers-review">
          <h3>Review Answers</h3>
          {answers.map((a, i) => (
            <div key={i} className={`review-item ${a.isCorrect ? "correct" : "wrong"}`}>
              <div className="review-q">Q{i + 1}: {a.q}</div>
              <div className="review-a">
                Your answer: <strong>{a.selected}</strong>
                {!a.isCorrect && <span> → Correct: <strong>{a.correct}</strong></span>}
              </div>
            </div>
          ))}
        </div>
        <div className="result-btns">
          <button className="btn-primary" onClick={() => startQuiz(category)}>Play Again →</button>
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
            {categories[category].emoji} {category} • Q{current + 1}/{questions.length}
          </span>
          <div className={`timer ${timer <= 5 ? "danger" : ""}`}>⏱ {timer}s</div>
          <span className="q-score">⭐ {score}</span>
        </div>

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
              <button key={opt} className={cls} onClick={() => handleSelect(opt)} disabled={!!selected}>
                {opt}
              </button>
            );
          })}
        </div>

        {selected && (
          <button className="btn-primary next-btn" style={{ background: color }} onClick={handleNext}>
            {current + 1 === questions.length ? "See Results →" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}