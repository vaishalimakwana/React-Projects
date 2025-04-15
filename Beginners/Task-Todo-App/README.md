# Built with - React + Vite

## React Todo List App 📝

![Todo List Preview](https://github.com/user-attachments/assets/47db5f36-cc62-45a2-a60f-514c1e80cf93)

A clean, responsive and interactive Todo List application built using **ReactJS** and **CSS3**. This app helps users to manage daily tasks with options to add, delete, mark tasks as done, and reset the list entirely with a confirmation warning.

---

## 🚀 Features

- ✅ Add new tasks
- ❌ Delete individual tasks
- 🔁 Reset the entire task list with a confirmation warning
- ✔️ Mark tasks as done (with strikethrough effect)
- 🕐 Timestamp shown for each task added
- 📅 Displays current date
- 🎯 Keyboard `Enter` support to add tasks
- 📱 Fully responsive and mobile-friendly UI
- 💅 Clean and modern UI using custom CSS

---

## 🛠 How it Works?

The app uses React's `useState` hook to manage:

- `value`: The current input value from the user.
- `message`: Error prompt when input is empty.
- `todo`: Array storing all tasks as objects `{ text, dateadded, done }`.
- `warning`: Confirmation message before resetting the task list.

### 💡 Flow:

1. **User adds a task:**

   - Enters text in input box.
   - Clicks "Add!" button or presses `Enter`.
   - If input is valid, a new task is added to the list with the current timestamp.

2. **Mark as Done:**

   - Clicking the checkbox toggles the `done` state.
   - A strikethrough style is applied if `done` is true.

3. **Delete a Task:**

   - Clicking "Delete" removes the respective task from the list.

4. **Reset List:**

   - Clicking "Reset" shows a warning box.
   - Confirming deletes all tasks.
   - Cancel hides the warning box.

5. **Date Display:**
   - Shows today’s date at the top using `toLocaleString()`.

---

## 🎨 Styling

Custom CSS is used with media queries to support:

- Desktop and Mobile Layouts
- Theming with dark/light scheme
- Scrollbar hiding for a cleaner look
- Task animation effects

---

## 🖼️ Background

A scenic image is used as a background: `nature_bg.jpg` located in the `/assets` folder.

---

# 📄 License

MIT License
Copyright (c) 2025 Vaishali Makwana
Permission is hereby granted, free of charge, to any person obtaining a copy...

# 👩‍💻 Author

Vaishali Makwana
🌐 www.vaishalimakwana.com
📧 vaishali@vaishalimakwana.com
