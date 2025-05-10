import React from 'react';
import { motion as Motion } from 'framer-motion';
export default function CustomerTestimonials() {
  return (
    <div id="customer-testimonials">
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <Motion.div
          className="testimonial-cards"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="testimonial-card">
            <p>
              "The process was smooth and hassle-free. I uploaded my license and
              got a fair valuation in no time!"
            </p>
            <h4>Jane Doe</h4>
            <span>Operations Manager, TechNova Inc.</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Incredible service! Quick turnaround and professional support. I
              highly recommend them!"
            </p>
            <h4>John Smith</h4>
            <span>Freelance Developer, CodeLab</span>
          </div>
          <div className="testimonial-card">
            <p>
              "The process was smooth and hassle-free. I uploaded my license and
              got a fair valuation in no time!"
            </p>
            <h4>Jane Doe</h4>
            <span>Operations Manager, TechNova Inc.</span>
          </div>
          <div className="testimonial-card">
            <p>
              "Incredible service! Quick turnaround and professional support. I
              highly recommend them!"
            </p>
            <h4>John Smith</h4>
            <span>Freelance Developer, CodeLab</span>
          </div>
        </Motion.div>
      </section>
    </div>
  );
}
