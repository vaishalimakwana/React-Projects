# Built with - React + Vite

## 💡 Toggle Bulb & Hanging Lights Switch UI

![Toggle Switch Preview](https://github.com/user-attachments/assets/94a9f108-5c6e-4e4a-8856-e2c098204e5b)
![Toggle Switch Preview](https://github.com/user-attachments/assets/2cf3f448-ca7f-40b1-8c9d-b6e79d76a830)

This is a creative and interactive React project that simulates toggling between a **bulb** and **hanging lights** using a **switch-style UI**. You can flip between the two modes and turn them on or off with grayscale filter effects.

---

## ✨ Features

- Toggle between **Bulb mode** and **Hanging Lights mode**
- Interactive switch button to turn lights ON/OFF
- Uses **CSS grayscale filters** to simulate light OFF/ON effect
- Clean, switchable UI state management using React's `useState`

---

## 🛠 Tech Stack

### 📦 Assets

- **PNG images** for switch toggles (on/off)
- **Two image placeholders**: one for bulb and one for hanging lights (CSS-based)

---

## 🧠 How It Works

### 🔌 Switch Mechanics

- The app uses **three React states**:
  - `isOn` – to toggle the bulb ON/OFF
  - `isActive` – to toggle the hanging lights ON/OFF
  - `hide` – to switch between Bulb or Hanging Lights mode

### 🎨 Visual Effects

- **Bulb and Hanging Lights** are represented with styled `div` blocks.
- A grayscale filter is applied when the light is off, and removed when on:

  ```js
  style={{ filter: isOn ? 'grayscale(0)' : 'grayscale(100%)' }}

  ```

---

# 📄 License

MIT License
Copyright (c) 2025 Vaishali Makwana
Permission is hereby granted, free of charge, to any person obtaining a copy...

# 👩‍💻 Author

Vaishali Makwana
🌐 www.vaishalimakwana.com
📧 vaishali@vaishalimakwana.com
