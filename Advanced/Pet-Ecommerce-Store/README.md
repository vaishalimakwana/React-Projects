# React + Vite + Tailwind

# 🐾 Pet E-commerce Store

An elegant and fully responsive pet e-commerce web app built using **React**, **React Router**, and **Tailwind CSS**. This store allows users to browse various categories of pet products including Food & Treats, Health & Grooming, Toys & Accessories, and Clothing.

---

## 🌟 Features

- 🏠 **Home Page**: Highlighted banners, exclusive offers, spotlight sections, and curated product showcases.
- 🐶 **Food & Treats Page**: Filtered food items rendered dynamically from context.
- 🧴 **Health & Grooming**: Showcases health products from grooming collection.
- 🧸 **Toys & Accessories**: Fun and interactive toy listings.
- 👕 **Dog Clothing**: Displays pet clothing using tailored product data.
- 🛒 **Cart Page**: TODO - View and manage selected items.
- 🔐 **Login Page**: TODO - Entry point for user authentication.
- 📦 **Reusable Components**: Includes Navbar, Footer, ScrollToTop, and more.
- 🌀 **Smooth Navigation**: Powered by `react-router-dom` and scroll resets.
- ⚡ **Responsive Design**: Tailored UI for all devices using Tailwind CSS.

---

## 📁 Folder Structure

src
├── assets/ # Images and static banners
├── components/ # Reusable UI components (Navbar, Footer, ScrollToTop, etc.)
├── Context/ # Global state management (ShopContextProvider, ShopContext)
├── Pages/ # Route pages (Home, FoodAndTreats, HealthAndGrooming, ToysAndAccessories, DogClothing)
├── Utils/ # Product data files
│ ├── allproducts.js
│ ├── clothingcollection.js
│ └── groomingproducts.js
├── App.jsx # Main App with routing (RouterProvider setup)
├── main.jsx # Entry point (ReactDOM.render)
└── index.css # Tailwind base styles

---

## 🚀 Tech Stack

- **React.js**
- **React Router DOM**
- **Tailwind CSS**
- **Context API**
- **Vite** (assumed based on structure)
- **ESLint + Prettier** (recommended)

---

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pet-ecommerce-store.git
   cd pet-ecommerce-store
   ```
2. **Install dependencies**
   npm install

   ### Reference: https://www.geeksforgeeks.org/how-to-install-tailwind-css-with-create-react-app/

3. **Run the development server**
   npm run dev

## 📷 UI Highlights

Tailored landing experience with banners

Dynamic rendering of products

Scroll-to-top on route change

Fully mobile-first responsive layout

## Future Enhancements

Add search and filter functionality

Integrate payment gateway

Implement user authentication

Add product detail pages

# 📄 License

MIT License
Copyright (c) 2025 Vaishali Makwana
Permission is hereby granted, free of charge, to any person obtaining a copy...

# 👩‍💻 Author

Vaishali Makwana
🌐 www.vaishalimakwana.com
📧 vaishali@vaishalimakwana.com

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
