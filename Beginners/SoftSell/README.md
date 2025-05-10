# React + Vite

# Soft Sell Project

Soft Sell is a web-based platform designed to assist users with licensing-related inquiries, offering an interactive chatbot, user-friendly interfaces, and helpful sections like "How It Works" and "Why Choose Us". The project is built using React and includes several components that offer a comprehensive, engaging user experience.

## Project Structure

### Components

- **`ChatWidget.jsx`**: A live chatbot widget that allows users to ask questions and receive AI-powered responses.
- **`Footer.jsx`**: Displays the footer section with copyright and contact information.
- **`Header.jsx`**: Displays the header section, including the navigation bar and branding elements.
- **`HeroSection.jsx`**: The hero section of the homepage, showcasing key messaging or branding visuals.
- **`HowItWorks.jsx`**: Describes how the platform works and provides user instructions.
- **`WhyChooseUs.jsx`**: Section explaining why users should choose the platform, including its unique value propositions.
- **`CustomerTestimonials.jsx`**: Displays user testimonials or reviews to help build trust with visitors.
- **`ContactForm.jsx`**: A form where users can submit inquiries or get in touch with support.

### Pages

- **`HomePage.jsx`**: The main landing page of the application, composed of sections like Hero Section, How It Works, Why Choose Us, Customer Testimonials, and the Contact Form.

### CSS

- **`Index.css`**: General styles for the app, including layouts, typography, and component-specific styles.

### Main Application File

- **`App.jsx`**: The root component where all components are imported and rendered. It includes:
  - **Header**
  - **HomePage**
  - **Footer**
  - **ChatWidget**

---

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone <repository_url>
   cd <project_name>
   ```

2. **Install Dependencies**

```npm install
   npm install react-icons
   npm install openai
```

3. **Run the Development Server**

```
   npm run dev
```

## Folder Structure

src/
│
├── components/
│ ├── ChatWidget.jsx
│ ├── ContactForm.jsx
│ ├── CustomerTestimonials.jsx
│ ├── Footer.jsx
│ ├── Header.jsx
│ ├── HeroSection.jsx
│ ├── HowItWorks.jsx
│ └── WhyChooseUs.jsx
│
├── pages/
│ └── HomePage.jsx
│
├── App.jsx
└── index.css

## ✨ Features

✅ Single-page application (SPA)

💬 Interactive chatbot with hardcoded license FAQs

🧠 Sections: How It Works, Why Choose Us, Testimonials, Contact

📱 Responsive design

🧾 Contact form for lead collection or support

🔽 Minimizable chat widget

## 💡 Future Improvements

Integrate with OpenAI or LangChain for dynamic chatbot answers.

Add backend integration for the contact form.

Add admin panel to manage inquiries and chatbot responses.

Add routing for other pages (e.g., About, FAQ).

Implement dark mode.

## 🛠️ Tech Stack

Frontend: React

Styling: CSS (index.css)

State Management: React useState

Chatbot: Local state with hardcoded logic (no API key required)

## 🙌 Acknowledgements

Images from FreePik
Thanks to all open-source contributors and tools that made this project possible.

## 📄 License

MIT License
Copyright (c) 2025 Vaishali Makwana
Permission is hereby granted, free of charge, to any person obtaining a copy...

# 👩‍💻 Author

Vaishali Makwana
🌐 www.vaishalimakwana.com
📧 vaishali@vaishalimakwana.com
