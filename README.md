# 🧠 Quiz App

A sleek, feature-rich quiz app built with React + Vite.

## ✨ Features

### 🎮 Gameplay
- 🔬📜⚽🌍 **4 Categories** — Science, History, Sports, Geography
- ❓ **20 questions per category** — 80 total questions
- 🎲 **Random shuffle every game** — never the same round twice!
- 🔀 **Answer options shuffled** — no memorizing positions
- ⚡ **3 Difficulty Levels** — Easy (5Q/20s), Medium (8Q/15s), Hard (10Q/10s)
- ⏱ **Countdown Timer** with danger animation when low
- ⭐ **Live score tracking** during the quiz
- ✅ **Instant answer feedback** (green = correct, red = wrong)
- ⏱ **Auto skip** when timer runs out
- 🏳️ **Forfeit** — quit anytime and save your score

### 🔥 Streak System
- 🔥 **Streak counter** — tracks consecutive correct answers
- ⚡ **Combo bonus points** — get extra points for streaks!
  - 3 in a row → +1 bonus
  - 4 in a row → +2 bonus
  - 5+ in a row → +3 bonus
- 💥 **Bonus popup animation** when streak triggers
- 🏆 **Best streak** shown on result screen

### 💡 Lifelines (2 per game)
- **50/50** — removes 2 wrong answers instantly
- **⏭ Skip** — skip a question without penalty
- Both are one-time use per game

### 🏆 Leaderboard
- 👤 **Player name entry** before starting
- 🏆 **Top 20 leaderboard** saved locally
- 🥇🥈🥉 **Gold, silver, bronze** for top 3
- 📊 Shows category, difficulty & date

### 🎨 UI
- 📋 **Full answer review** at the end
- 💫 **Smooth animations** & modern glassmorphism UI
- 🎯 **Performance emoji** based on your score

## 🚀 Live Demo

👉 [Your Vercel URL here]

## 🛠 Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — lightning-fast bundler
- CSS Glassmorphism — modern styling
- localStorage — leaderboard persistence

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎮 How to Play

1. Enter your **name** for the leaderboard
2. Select a **category** (Science, History, Sports, Geography)
3. Choose a **difficulty** (Easy, Medium, Hard)
4. Click **Start Quiz**
5. Build a **streak** for bonus points 🔥
6. Use **lifelines** wisely — only 1 of each per game!
7. **Forfeit** anytime if you want to stop early
8. Check your rank on the **🏆 Leaderboard**

## ⚡ Difficulty Levels

| Level | Questions | Time per Q |
|-------|-----------|------------|
| Easy | 5 | 20 seconds |
| Medium | 8 | 15 seconds |
| Hard | 10 | 10 seconds |

## 🔥 Streak Bonuses

| Streak | Bonus Points |
|--------|-------------|
| 3 in a row | +1 |
| 4 in a row | +2 |
| 5+ in a row | +3 |

## 💡 Lifelines

| Lifeline | Effect |
|----------|--------|
| 50/50 | Removes 2 wrong answers |
| ⏭ Skip | Skips question, no penalty |

## 📁 Project Structure
quiz-app/
├── src/
│   ├── App.jsx      # Main component & quiz logic
│   ├── App.css      # Styles & animations
│   └── main.jsx     # Entry point
├── index.html
└── package.json

## 📄 License

MIT

## 👨‍💻 Author
**Pujan Rasaili**
