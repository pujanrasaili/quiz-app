import { useState } from "react";
import "./App.css";

const questions = [
  { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { q: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: "Mercury" },
  { q: "What is 12 × 12?", options: ["132", "144", "156", "124"], answer: "144" },
  { q: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], answer: "Da Vinci" },
  { q: "What is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
  { q: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"], answer: "CO2" },
  { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
  { q: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "100,000 km/s"], answer: "300,000 km/s" },
  { q: "Which country invented pizza?", options: ["France", "USA", "Italy", "Greece"], answer: "Italy" },
  { q: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au" },
];

const EMOJIS = ["😢", "😕", "🙂", "😊", "🤩"];

export default function App() {
  const [screen, setScreen] = useState("start");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(15);
  const [timerInterval, setTimerInterval] = useState(null);

  const startQuiz = () => {
    setCurrent(0); setScore(0); setSelected(null);
    setAnswers([]); setScreen("quiz");
    startTimer();
  };

  const startTimer = () => {
    setTimer(15);
    clearInterval(timerInterval);
    const id = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) { clearInterval(id); handleNext(null); return 0; }
        return t - 1;
      });
    }, 1000);
    setTimerInterval(id);
  };

  const handleSelect = (opt) => {
    if (selected) return;
    clearInterval(timerInterval);
    setSelected(opt);
    const correct = opt === questions[current].answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, { q: questions[current].q, selected: opt, correct: questions[current].answer, isCorrect: correct }]);
  };

  const handleNext = (opt) => {
    const next = current + 1;
    if (next >= questions.length) {
      clearInterval(timerInterval);
      setScreen("result");
    } else {
      setCurrent(next);
      setSelected(null);
      startTimer();
    }
  };

  const getEmoji = () => {
    const pct = score / questions.length;
    if (pct <= 0.2) return EMOJIS[0];
    if (pct <= 0.4) return EMOJIS[1];
    if (pct <= 0.6) return EMOJIS[2];
    if (pct <= 0.8) return EMOJIS[3];
    return EMOJIS[4];
  };

  const progress = ((current) / questions.length) * 100;

  if (screen === "start") return (
    <div className="app">
      <div className="card start-card">
        <div className="start-emoji">🧠</div>
        <h1>Quiz App</h1>
        <p>Test your knowledge with 10 questions.<br />You have <strong>15 seconds</strong> per question!</p>
        <div className="stats-row">
          <div className="stat"><span>10</span>Questions</div>
          <div className="stat"><span>15s</span>Per Question</div>
          <div className="stat"><span>🏆</span>Top Score</div>
        </div>
        <button className="btn-primary" onClick={startQuiz}>Start Quiz →</button>
      </div>
    </div>
  );

  if (screen === "result") return (
    <div className="app">
      <div className="card result-card">
        <div className="result-emoji">{getEmoji()}</div>
        <h2>Quiz Complete!</h2>
        <div className="score-display">
          <span className="score-num">{score}</span>
          <span className="score-total">/ {questions.length}</span>
        </div>
        <p className="score-msg">
          {score === questions.length ? "Perfect score! You're a genius! 🎉" :
           score >= 7 ? "Great job! Almost perfect!" :
           score >= 5 ? "Good effort! Keep practicing!" :
           "Keep studying, you'll do better!"}
        </p>
        <div className="answers-review">
          <h3>Review Answers</h3>
          {answers.map((a, i) => (
            <div key={i} className={`review-item ${a.isCorrect ? "correct" : "wrong"}`}>
              <div className="review-q">Q{i+1}: {a.q}</div>
              <div className="review-a">
                Your answer: <strong>{a.selected}</strong>
                {!a.isCorrect && <span> → Correct: <strong>{a.correct}</strong></span>}
              </div>
            </div>
          ))}
        </div>
        <button className="btn-primary" onClick={startQuiz}>Play Again →</button>
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="card quiz-card">
        <div className="quiz-header">
          <span className="q-counter">Q{current + 1} / {questions.length}</span>
          <div className={`timer ${timer <= 5 ? "danger" : ""}`}>⏱ {timer}s</div>
          <span className="q-score">⭐ {score}</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
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
          <button className="btn-primary next-btn" onClick={handleNext}>
            {current + 1 === questions.length ? "See Results →" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
}