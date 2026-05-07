import { useState } from "react";
import "./App.css";

const allQuestions = {
  Science: {
    emoji: "🔬",
    color: "#00b4d8",
    questions: [
      { q: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"], answer: "CO2" },
      { q: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "100,000 km/s"], answer: "300,000 km/s" },
      { q: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au" },
      { q: "How many bones are in the human body?", options: ["196", "206", "216", "226"], answer: "206" },
      { q: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: "Mercury" },
      { q: "What is the atomic number of Carbon?", options: ["4", "6", "8", "12"], answer: "6" },
      { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi"], answer: "Mitochondria" },
      { q: "Which particle has no charge?", options: ["Proton", "Electron", "Neutron", "Quark"], answer: "Neutron" },
      { q: "What is H2O commonly known as?", options: ["Salt", "Water", "Sugar", "Acid"], answer: "Water" },
      { q: "How many chambers does the human heart have?", options: ["2", "3", "4", "5"], answer: "4" },
      { q: "What planet is known as the Red Planet?", options: ["Venus", "Jupiter", "Saturn", "Mars"], answer: "Mars" },
      { q: "What is the largest organ in the human body?", options: ["Liver", "Brain", "Skin", "Lungs"], answer: "Skin" },
      { q: "Which element is needed for combustion?", options: ["Nitrogen", "Oxygen", "Hydrogen", "Helium"], answer: "Oxygen" },
      { q: "What force keeps planets in orbit?", options: ["Magnetism", "Friction", "Gravity", "Nuclear"], answer: "Gravity" },
      { q: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], answer: "8" },
      { q: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "CO2", "Nitrogen", "Argon"], answer: "Nitrogen" },
      { q: "What part of the plant conducts photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" },
      { q: "What is the boiling point of water?", options: ["90°C", "95°C", "100°C", "105°C"], answer: "100°C" },
      { q: "Which vitamin does sunlight provide?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
      { q: "What is DNA short for?", options: ["Deoxyribonucleic Acid", "Dioxin Acid", "Dinitrogen Acid", "Dipeptide Acid"], answer: "Deoxyribonucleic Acid" },
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
      { q: "In what year was the Magna Carta signed?", options: ["1215", "1315", "1415", "1515"], answer: "1215" },
      { q: "Who was the last Pharaoh of Egypt?", options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Berenice"], answer: "Cleopatra" },
      { q: "Which empire was ruled by Genghis Khan?", options: ["Ottoman", "Roman", "Mongol", "Persian"], answer: "Mongol" },
      { q: "Who was the first man on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"], answer: "Neil Armstrong" },
      { q: "In which year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], answer: "1912" },
      { q: "Who invented the telephone?", options: ["Edison", "Tesla", "Bell", "Marconi"], answer: "Bell" },
      { q: "Which country was Adolf Hitler born in?", options: ["Germany", "Austria", "Poland", "Switzerland"], answer: "Austria" },
      { q: "What year did World War I begin?", options: ["1912", "1913", "1914", "1915"], answer: "1914" },
      { q: "Who wrote Romeo and Juliet?", options: ["Dickens", "Shakespeare", "Austen", "Chaucer"], answer: "Shakespeare" },
      { q: "Which ancient wonder was in Alexandria?", options: ["Colossus", "Lighthouse", "Hanging Gardens", "Pyramids"], answer: "Lighthouse" },
      { q: "Who was the first female Prime Minister of the UK?", options: ["May", "Thatcher", "Blair", "Churchill"], answer: "Thatcher" },
      { q: "Which country dropped the atomic bomb in 1945?", options: ["Russia", "UK", "USA", "France"], answer: "USA" },
      { q: "Who discovered America in 1492?", options: ["Vespucci", "Magellan", "Columbus", "Drake"], answer: "Columbus" },
      { q: "What was the name of the first artificial satellite?", options: ["Vostok", "Apollo", "Sputnik", "Explorer"], answer: "Sputnik" },
      { q: "Which wall divided East and West Berlin?", options: ["Iron Curtain", "Berlin Wall", "Maginot Line", "Hadrian's Wall"], answer: "Berlin Wall" },
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
      { q: "How long is a marathon?", options: ["40km", "41km", "42.195km", "43km"], answer: "42.195km" },
      { q: "In which sport do you use a puck?", options: ["Football", "Ice Hockey", "Baseball", "Polo"], answer: "Ice Hockey" },
      { q: "Who has won the most Grand Slam titles?", options: ["Federer", "Nadal", "Djokovic", "Sampras"], answer: "Djokovic" },
      { q: "How many points is a try worth in rugby?", options: ["3", "4", "5", "6"], answer: "5" },
      { q: "Which country hosted the 2016 Olympics?", options: ["China", "UK", "Brazil", "Japan"], answer: "Brazil" },
      { q: "How many players are in a basketball team?", options: ["4", "5", "6", "7"], answer: "5" },
      { q: "What is the diameter of a basketball hoop in inches?", options: ["16", "18", "20", "22"], answer: "18" },
      { q: "In which sport is a shuttlecock used?", options: ["Tennis", "Squash", "Badminton", "Racquetball"], answer: "Badminton" },
      { q: "How many holes are in a standard golf course?", options: ["9", "12", "18", "21"], answer: "18" },
      { q: "Which country invented basketball?", options: ["USA", "Canada", "UK", "France"], answer: "USA" },
      { q: "How long is an Olympic swimming pool?", options: ["25m", "50m", "75m", "100m"], answer: "50m" },
      { q: "Which sport uses a pommel horse?", options: ["Athletics", "Gymnastics", "Equestrian", "Polo"], answer: "Gymnastics" },
      { q: "How many sets are in a standard tennis match (men)?", options: ["3", "5", "4", "2"], answer: "5" },
      { q: "Which country won the first Cricket World Cup?", options: ["Australia", "India", "West Indies", "England"], answer: "West Indies" },
      { q: "How many minutes in a standard football match?", options: ["80", "85", "90", "95"], answer: "90" },
      { q: "In which sport can you score a 'hat-trick'?", options: ["Only football", "Only cricket", "Both football & cricket", "Only hockey"], answer: "Both football & cricket" },
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
      { q: "Which country has the most natural lakes?", options: ["USA", "Russia", "Brazil", "Canada"], answer: "Canada" },
      { q: "What is the capital of Kazakhstan?", options: ["Almaty", "Astana", "Bishkek", "Tashkent"], answer: "Astana" },
      { q: "Which is the deepest lake in the world?", options: ["Caspian Sea", "Lake Superior", "Lake Baikal", "Lake Tanganyika"], answer: "Lake Baikal" },
      { q: "What is the highest capital city?", options: ["Kathmandu", "Quito", "La Paz", "Bogota"], answer: "La Paz" },
      { q: "Which country has the longest coastline?", options: ["USA", "Russia", "Australia", "Canada"], answer: "Canada" },
      { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
      { q: "Which is the largest desert in the world?", options: ["Sahara", "Arabian", "Antarctic", "Gobi"], answer: "Antarctic" },
      { q: "What is the capital of Nepal?", options: ["Pokhara", "Kathmandu", "Bhaktapur", "Lalitpur"], answer: "Kathmandu" },
      { q: "Which country has the most population?", options: ["USA", "India", "China", "Russia"], answer: "India" },
      { q: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Everest", "Lhotse"], answer: "Everest" },
      { q: "Which ocean is the smallest?", options: ["Atlantic", "Indian", "Arctic", "Southern"], answer: "Arctic" },
      { q: "What is the largest country by area?", options: ["China", "USA", "Canada", "Russia"], answer: "Russia" },
      { q: "Which continent is the largest?", options: ["Africa", "Asia", "Europe", "North America"], answer: "Asia" },
      { q: "What is the capital of Japan?", options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"], answer: "Tokyo" },
      { q: "Which country is known as the Land of the Rising Sun?", options: ["China", "Korea", "Japan", "Thailand"], answer: "Japan" },
    ],
  },
};

const DIFFICULTIES = ["Easy", "Medium", "Hard"];
const DIFF_COLORS = { Easy: "#2dc653", Medium: "#f4a261", Hard: "#e94560" };
const DIFF_TIMES = { Easy: 20, Medium: 15, Hard: 10 };
const DIFF_COUNT = { Easy: 5, Medium: 8, Hard: 10 };

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function getQuestions(cat, diff) {
  return shuffle(allQuestions[cat].questions).slice(0, DIFF_COUNT[diff]).map(q => ({ ...q, options: shuffle(q.options) }));
}

export default function App() {
  const [screen, setScreen] = useState("name");
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(15);
  const [timerInterval, setTimerInterval] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [leaderboard, setLeaderboard] = useState(() => JSON.parse(localStorage.getItem("quizLeaderboard") || "[]"));
  const [lifelines, setLifelines] = useState({ fifty: true, skip: true });
  const [eliminated, setEliminated] = useState([]);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [showBonus, setShowBonus] = useState(false);

  const saveToLeaderboard = (finalScore) => {
    const entry = { name: playerName || "Anonymous", score: finalScore, total: questions.length, category, difficulty, date: new Date().toLocaleDateString() };
    const updated = [...leaderboard, entry].sort((a, b) => b.score - a.score).slice(0, 20);
    setLeaderboard(updated);
    localStorage.setItem("quizLeaderboard", JSON.stringify(updated));
  };

  const startQuiz = (cat, diff) => {
    const qs = getQuestions(cat, diff);
    setCategory(cat); setDifficulty(diff); setQuestions(qs);
    setCurrent(0); setScore(0); setSelected(null);
    setAnswers([]); setScreen("quiz");
    setLifelines({ fifty: true, skip: true });
    setEliminated([]);
    setStreak(0); setBestStreak(0); setBonus(0);
    startTimer(diff);
  };

  const startTimer = (diff) => {
    const time = DIFF_TIMES[diff || difficulty];
    setTimer(time);
    clearInterval(timerInterval);
    const id = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) { clearInterval(id); handleNext(true); return 0; }
        return t - 1;
      });
    }, 1000);
    setTimerInterval(id);
  };

  const handleSelect = (opt) => {
    if (selected || eliminated.includes(opt)) return;
    clearInterval(timerInterval);
    setSelected(opt);
    const isCorrect = opt === questions[current].answer;
    let newScore = score;
    if (isCorrect) {
      newScore = score + 1;
      setScore(newScore);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
      if (newStreak >= 3) {
        const b = newStreak >= 5 ? 3 : newStreak >= 4 ? 2 : 1;
        setBonus(b);
        setShowBonus(true);
        newScore = newScore + b;
        setScore(newScore);
        setTimeout(() => setShowBonus(false), 1500);
      }
    } else {
      setStreak(0);
    }
    setAnswers((a) => [...a, { q: questions[current].q, selected: opt, correct: questions[current].answer, isCorrect }]);
  };

  const handleNext = (auto = false, skipped = false) => {
    if (skipped) {
      setAnswers((a) => [...a, { q: questions[current].q, selected: "⏭ Skipped", correct: questions[current].answer, isCorrect: false }]);
    } else if (auto && !selected) {
      setAnswers((a) => [...a, { q: questions[current].q, selected: "⏱ Time up!", correct: questions[current].answer, isCorrect: false }]);
    }
    const next = current + 1;
    if (next >= questions.length) {
      clearInterval(timerInterval);
      saveToLeaderboard(score);
      setScreen("result");
    } else {
      setCurrent(next); setSelected(null); setEliminated([]); startTimer();
    }
  };

  const useFiftyFifty = () => {
    if (!lifelines.fifty || selected) return;
    const q = questions[current];
    const wrong = q.options.filter(o => o !== q.answer);
    setEliminated(shuffle(wrong).slice(0, 2));
    setLifelines(l => ({ ...l, fifty: false }));
  };

  const useSkip = () => {
    if (!lifelines.skip || selected) return;
    clearInterval(timerInterval);
    setLifelines(l => ({ ...l, skip: false }));
    setEliminated([]);
    setStreak(0);
    handleNext(false, true);
  };

  const forfeit = () => {
    clearInterval(timerInterval);
    saveToLeaderboard(score);
    setScreen("result");
  };

  const color = category ? allQuestions[category].color : "#e94560";
  const diffColor = difficulty ? DIFF_COLORS[difficulty] : "#e94560";
  const progress = questions.length ? (current / questions.length) * 100 : 0;

  if (screen === "name") return (
    <div className="app">
      <div className="card start-card">
        <div className="start-emoji">👤</div>
        <h1>Quiz App</h1>
        <p>Enter your name to appear on the leaderboard! 🏆</p>
        <input className="name-input" type="text" placeholder="Your name..."
          value={nameInput} onChange={(e) => setNameInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { setPlayerName(nameInput.trim() || "Anonymous"); setScreen("start"); }}}
          maxLength={20} autoFocus />
        <button className="btn-primary" style={{ marginTop: "1rem" }}
          onClick={() => { setPlayerName(nameInput.trim() || "Anonymous"); setScreen("start"); }}>Let's Go! →</button>
        <button className="btn-secondary" style={{ marginTop: "0.5rem" }}
          onClick={() => { setPlayerName("Anonymous"); setScreen("start"); }}>Skip</button>
      </div>
    </div>
  );

  if (screen === "leaderboard") return (
    <div className="app">
      <div className="card result-card">
        <div className="result-emoji">🏆</div>
        <h2>Leaderboard</h2>
        <p className="score-msg">Top 20 scores across all categories</p>
        {leaderboard.length === 0 ? (
          <div className="lb-empty">No scores yet! Play a game first. 🎮</div>
        ) : (
          <div className="lb-list">
            {leaderboard.map((e, i) => (
              <div key={i} className={`lb-item ${i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : ""}`}>
                <span className="lb-rank">{i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`}</span>
                <div className="lb-info">
                  <span className="lb-name">{e.name}</span>
                  <span className="lb-meta">{allQuestions[e.category]?.emoji} {e.category} • ⚡ {e.difficulty} • {e.date}</span>
                </div>
                <span className="lb-score" style={{ color: allQuestions[e.category]?.color }}>{e.score}/{e.total}</span>
              </div>
            ))}
          </div>
        )}
        <div className="result-btns" style={{ marginTop: "1rem" }}>
          <button className="btn-primary" onClick={() => setScreen("start")}>Back to Menu</button>
          {leaderboard.length > 0 && (
            <button className="btn-secondary" onClick={() => { setLeaderboard([]); localStorage.removeItem("quizLeaderboard"); }}>Clear Leaderboard</button>
          )}
        </div>
      </div>
    </div>
  );

  if (screen === "start") return (
    <div className="app">
      <div className="card start-card">
        <div className="start-header">
          <div>
            <div className="start-emoji">🧠</div>
            <h1>Quiz App</h1>
          </div>
          <div className="start-actions">
            <button className="icon-btn" onClick={() => setScreen("leaderboard")} title="Leaderboard">🏆</button>
            <button className="icon-btn" onClick={() => setScreen("name")} title="Change name">👤</button>
          </div>
        </div>
        {playerName && <div className="player-greeting">👋 Hey, <strong>{playerName}</strong>!</div>}
        <p>Questions shuffle every game 🎲 • 2 lifelines 💡 • Streak bonus 🔥</p>

        <h3 className="section-label">📚 Category</h3>
        <div className="categories">
          {Object.entries(allQuestions).map(([name, data]) => (
            <button key={name} className={`category-btn ${category === name ? "selected" : ""}`}
              style={{ "--cat-color": data.color }} onClick={() => setCategory(name)}>
              <span className="cat-emoji">{data.emoji}</span>
              <span className="cat-name">{name}</span>
              <span className="cat-hs">🏆 {leaderboard.filter(e => e.category === name).reduce((max, e) => Math.max(max, e.score || 0), 0)}/{DIFF_COUNT[difficulty || "Easy"]}</span>
            </button>
          ))}
        </div>

        <h3 className="section-label">⚡ Difficulty</h3>
        <div className="difficulties">
          {DIFFICULTIES.map((d) => (
            <button key={d} className={`diff-btn ${difficulty === d ? "selected" : ""}`}
              style={{ "--diff-color": DIFF_COLORS[d] }} onClick={() => setDifficulty(d)}>
              <span>{d}</span>
              <span className="diff-time">⏱ {DIFF_TIMES[d]}s • {DIFF_COUNT[d]}Q</span>
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
          <span style={{ color }}>{allQuestions[category].emoji} {category}</span>
          <span style={{ color: diffColor }}>⚡ {difficulty}</span>
        </div>
        <h2>Quiz Complete!</h2>
        <div className="score-display">
          <span className="score-num" style={{ color }}>{score}</span>
          <span className="score-total">/ {questions.length}</span>
        </div>
        <div className="hs-banner">🏆 Best: {leaderboard.filter(e => e.category === category && e.difficulty === difficulty).reduce((max, e) => Math.max(max, e.score || 0), 0)} / {questions.length}</div>
        {bestStreak > 0 && <div className="streak-banner">🔥 Best Streak: {bestStreak} in a row!</div>}
        <p className="score-msg">
          {score === questions.length ? "Perfect! Genius! 🎉" :
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
          <button className="btn-primary" style={{ background: color }} onClick={() => startQuiz(category, difficulty)}>Play Again 🎲</button>
          <button className="btn-secondary" onClick={() => setScreen("leaderboard")}>🏆 Leaderboard</button>
          <button className="btn-secondary" onClick={() => setScreen("start")}>Change Category</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="card quiz-card" style={{ position: "relative" }}>
        <div className="quiz-header">
          <span className="q-counter" style={{ color }}>{allQuestions[category].emoji} Q{current + 1}/{questions.length}</span>
          <div className={`timer ${timer <= 5 ? "danger" : ""}`}>⏱ {timer}s</div>
          <div className="score-streak">
            <span className="q-score">⭐ {score}</span>
            {streak >= 2 && <span className="streak-badge">🔥 x{streak}</span>}
          </div>
        </div>

        {showBonus && <div className="bonus-popup">+{bonus} Bonus! 🔥</div>}

        <div className="lifelines-row">
          <button className={`lifeline-btn ${!lifelines.fifty ? "used" : ""}`}
            onClick={useFiftyFifty} disabled={!lifelines.fifty || !!selected}>
            {lifelines.fifty ? "💡 50/50" : "✗ 50/50"}
          </button>
          <div className="diff-badge" style={{ color: diffColor, borderColor: diffColor }}>⚡ {difficulty}</div>
          <button className={`lifeline-btn ${!lifelines.skip ? "used" : ""}`}
            onClick={useSkip} disabled={!lifelines.skip || !!selected}>
            {lifelines.skip ? "⏭ Skip" : "✗ Skip"}
          </button>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%`, background: color }} />
        </div>

        <div className="question">{questions[current].q}</div>

        <div className="options">
          {questions[current].options.map((opt) => {
            let cls = "option";
            if (eliminated.includes(opt)) cls += " eliminated";
            else if (selected) {
              if (opt === questions[current].answer) cls += " correct";
              else if (opt === selected) cls += " wrong";
            }
            return (
              <button key={opt} className={cls} onClick={() => handleSelect(opt)}
                disabled={!!selected || eliminated.includes(opt)}>
                {eliminated.includes(opt) ? "—" : opt}
              </button>
            );
          })}
        </div>

        {selected && (
          <button className="btn-primary next-btn" style={{ background: color }} onClick={() => handleNext()}>
            {current + 1 === questions.length ? "See Results →" : "Next →"}
          </button>
        )}

        <button className="forfeit-btn" onClick={forfeit}>🏳️ Forfeit Game</button>
      </div>
    </div>
  );
}