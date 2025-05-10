import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import CustomerTestimonials from '../components/CustomerTestimonials';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <div className="main-wrapper">
        <HowItWorks />
        <WhyChooseUs />
      </div>
      <CustomerTestimonials />
      <ContactForm />
    </div>
  );
}
