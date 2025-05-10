import React from 'react';
import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    license: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.license) newErrors.license = 'Please select a license type';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // You can send the form data here to your backend
      setFormData({
        name: '',
        email: '',
        company: '',
        license: '',
        message: '',
      });
    }
  };

  return (
    <div id="contact">
      <section className="contact-form-section">
        <h2 className="color-white">Contact Us</h2>
        <Motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            Company
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            {errors.company && <span className="error">{errors.company}</span>}
          </label>

          <label>
            License Type
            <select
              name="license"
              value={formData.license}
              onChange={handleChange}
            >
              <option value="">Select a license type</option>
              <option value="personal">Personal</option>
              <option value="commercial">Commercial</option>
              <option value="enterprise">Enterprise</option>
            </select>
            {errors.license && <span className="error">{errors.license}</span>}
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </label>

          <button type="submit">Submit</button>
        </Motion.form>
      </section>
    </div>
  );
}
