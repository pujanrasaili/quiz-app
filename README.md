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

### 🏆 Leaderboard
- 👤 **Player name entry** before starting
- 🏆 **Top 20 leaderboard** saved locally
- 🥇🥈🥉 **Gold, silver, bronze** for top 3
- 📊 Shows category, difficulty & date for each entry

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
- localStorage — leaderboard & score persistence

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
5. Answer before the **timer** runs out
6. Questions & answers **shuffle every game!**
7. Check your rank on the **🏆 Leaderboard**

## ⚡ Difficulty Levels

| Level | Questions | Time per Q |
|-------|-----------|------------|
| Easy | 5 | 20 seconds |
| Medium | 8 | 15 seconds |
| Hard | 10 | 10 seconds |

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