# 🧠 Quiz App

A sleek, feature-rich quiz app built with React + Vite.

## ✨ Features

- 🔬📜⚽🌍 **4 Categories** — Science, History, Sports, Geography
- ⚡ **3 Difficulty Levels** — Easy (20s), Medium (15s), Hard (10s)
- ⏱ **Countdown Timer** per question with danger animation
- ⭐ **Live score tracking** during the quiz
- 🏆 **High score tracking** saved locally per category & difficulty
- 🔊 **Sound effects** with mute toggle
- ✅ **Instant answer feedback** (green = correct, red = wrong)
- 📋 **Full answer review** at the end
- 🎯 **Performance emoji** based on your score
- 💫 **Smooth animations** & modern glassmorphism UI

## 🚀 Live Demo

👉 [quiz-app on Vercel](https://quiz-app.vercel.app)

## 🛠 Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — lightning-fast bundler
- Web Audio API — for sound effects
- CSS Glassmorphism — for modern styling

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
5. See instant feedback after each answer
6. Review all answers & beat your **high score**!

## ⚡ Difficulty Levels

| Level | Time per Question | 
|-------|------------------|
| Easy | 20 seconds |
| Medium | 15 seconds |
| Hard | 10 seconds |

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