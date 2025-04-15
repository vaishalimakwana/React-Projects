# Built with - React + Vite

## ⭐ Star Rating UI with 3D Vintage Car Animation

![Star Rating Preview](https://github.com/user-attachments/assets/09933651-b83d-413c-9c55-9b2d649ef2f3)

This is a stylish and interactive React component that allows users to rate an image using a star-based rating system. It also includes a 3D hover animation effect on a vintage car image, providing a modern and visually appealing user experience.

---

## ✨ Features

- ⭐ Star rating system (1 to 5 stars)
- ⭐ Hover and click effects for rating
- 🚗 3D image flip animation on hover using CSS
- 🎨 Responsive design and dark mode support
- ⚡ Smooth interaction using `useState` and conditional rendering

---

## 🧠 How It Works

### ⭐ Star Rating Logic

- An array `[1, 2, 3, 4, 5]` represents each star.
- When a user hovers over a star, it highlights all previous stars.
- Clicking a star sets the selected rating (`select` state).
- Clicking the same star again will deselect it (toggle).

### 🚗 Vintage Car Animation

- The image is wrapped in a `div` with CSS properties:
  - `perspective`: Gives a 3D viewpoint.
  - `transform-style: preserve-3d`: Maintains 3D transformations.
  - `transform: rotateY`: Rotates the image 180° on hover.
- The transition is smoothened with `ease-in-out` and lasts `3s`.

---

# 📄 License

MIT License
Copyright (c) 2025 Vaishali Makwana
Permission is hereby granted, free of charge, to any person obtaining a copy...

# 👩‍💻 Author

Vaishali Makwana
🌐 www.vaishalimakwana.com
📧 vaishali@vaishalimakwana.com
