# Built with - React + Vite

## Accordion

![Accordion Preview](https://github.com/user-attachments/assets/f60f1de3-76d9-4811-8a66-2773149283cf)

# 📚 Quotes Accordion App

A simple and elegant React component that displays famous quotes fetched from a public API using an accordion interface. Users can expand and collapse quotes by clicking on the author's name.

### API example:

{
"id": 1,
"quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
"author": "Nelson Mandela"
}

---

## ✨ Features

- 🔁 Fetches quotes from the [DummyJSON Quotes API](https://dummyjson.com/quotes)
- 🎛 Interactive accordion functionality to show/hide quotes
- 📜 Displays author names and their respective quotes
- ⚠️ Handles loading and error states gracefully

---

## 🚀 How It Works

- On component mount, it makes a `fetch` request to `https://dummyjson.com/quotes`.
- The quotes are displayed in an expandable list format.
- Clicking an author toggles the visibility of their quote.
- Only one quote is shown at a time; clicking the same author again collapses it.

---

## 🛠 Tech Stack

- **React** (with Hooks: `useState`, `useEffect`)
- Basic **CSS** for styling the accordion (you can add your own styles)

---

# 📄 License

MIT License
Copyright (c) 2025 Vaishali Makwana
Permission is hereby granted, free of charge, to any person obtaining a copy...

# 👩‍💻 Author

Vaishali Makwana
🌐 www.vaishalimakwana.com
📧 vaishali@vaishalimakwana.com
