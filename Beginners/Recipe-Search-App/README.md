# Built with - React + Vite

## 🥘 Instant Recipe Finder App

![Recipe Search App Preview](Beginners\Recipe-Search-App\public\Recipe-Preview.png)

A recipe search app that allows users to find recipes by name and explore detailed information such as ingredients, preparation time, servings, and more. Built using **React.js** and styled with custom **CSS**.

---

## 🚀 Features

- 🔍 Search recipes by name
- 🍲 Display detailed information for each recipe, including ingredients, prep time, cook time, and instructions
- 🌱 Dynamic error handling for failed data fetching
- 💡 User-friendly UI with sticky search bar
- 🖼️ Displays recipe images

---

## 🛠 How It Works?

1. **Fetching Recipes**:

   - On component mount (`useEffect`), the app fetches a list of recipes from `https://dummyjson.com/recipes`.
   - The recipes are stored in the `recipe` state and initially displayed in the `filterRecipe` state.

2. **Searching Recipes**:

   - The search bar allows users to filter recipes by name.
   - As the user types, the `searchRecipe` function filters the recipe list based on the input, updating the UI with matching recipes.
   - If the input is empty, the app will display all recipes.

3. **Displaying Recipes**:

   - Each recipe displays its name, image, ingredients, prep time, cook time, servings, difficulty, cuisine, and calories per serving.
   - If no recipe matches the search input, a message is shown to indicate no results.

4. **Error Handling**:
   - In case of a failure during the fetching process, an error message is displayed.

---

## 🎨 Styling

Custom CSS is used to style the app and ensure responsiveness:

- **Sticky Search Bar**: The search bar remains fixed at the top of the page.
- **Flexbox Layout**: A responsive layout with flexbox to display recipe details and images side by side on larger screens and stacked on smaller screens.
- **Hover Effects**: Images zoom in when hovered over.
- **Responsive Design**: The app adjusts layout based on screen size using media queries.

---

# 📄 License

MIT License
Copyright (c) 2025 Vaishali Makwana
Permission is hereby granted, free of charge, to any person obtaining a copy...

# 👩‍💻 Author

Vaishali Makwana
🌐 www.vaishalimakwana.com
📧 vaishali@vaishalimakwana.com
