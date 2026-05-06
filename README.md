# 🧠 Quiz App

A sleek, feature-rich quiz app built with React + Vite.

## ✨ Features

- 🔬📜⚽🌍 **4 Categories** — Science, History, Sports, Geography
- ❓ **20 questions per category** — 80 total questions
- 🎲 **Random shuffle every game** — never the same round twice!
- 🔀 **Answer options shuffled** — no memorizing positions
- ⚡ **3 Difficulty Levels** — Easy (5Q/20s), Medium (8Q/15s), Hard (10Q/10s)
- ⏱ **Countdown Timer** per question with danger animation
- ⭐ **Live score tracking** during the quiz
- 🏆 **High score tracking** saved per category & difficulty
- ✅ **Instant answer feedback** (green = correct, red = wrong)
- ⏱ **Time up handling** — auto moves to next question
- 📋 **Full answer review** at the end
- 🎯 **Performance emoji** based on your score
- 💫 **Smooth animations** & modern glassmorphism UI

## 🚀 Live Demo

👉 [Your Vercel URL here]

## 🛠 Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — lightning-fast bundler
- CSS Glassmorphism — modern styling
- localStorage — high score persistence

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

1. Select a **category** (Science, History, Sports, Geography)
2. Choose a **difficulty** (Easy, Medium, Hard)
3. Click **Start Quiz**
4. Answer before the **timer** runs out
5. Questions & answers **shuffle every game!**
6. Review answers & beat your **high score** 🏆

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