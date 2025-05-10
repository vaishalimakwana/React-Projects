import React from 'react';
import Logo from '../assets/softsell-logo.png';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
export default function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section brand">
            <div className="logo">
              <img src={Logo} alt="Soft Sell Solutions" />
            </div>
            <p>
              Buy and sell genuine software licenses securely and affordably.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#why-choose-us">Why Choose Us</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact</h3>
            <p>Email: support@softsell.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Soft Sell Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
