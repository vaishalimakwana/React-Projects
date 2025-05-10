import React from 'react';
import { motion as Motion } from 'framer-motion';
export default function HeroSection() {
  return (
    <div className="hero-section" id="home">
      <Motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Welcome to SoftSell</h1>
        <h2>Your one-stop solution for all your software needs</h2>
        <Motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Get a Quote
        </Motion.button>
      </Motion.div>
    </div>
  );
}
