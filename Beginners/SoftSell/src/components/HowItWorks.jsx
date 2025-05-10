import React from 'react';
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';
export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload />,
      title: 'Upload License',
      description: 'Securely upload your license details to start the process.',
    },
    {
      icon: <FaSearchDollar />,
      title: 'Get Valuation',
      description:
        'We analyze your information and provide an instant valuation.',
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Get Paid',
      description:
        'Receive your payment quickly through your preferred method.',
    },
  ];
  return (
    <div id="how-it-works">
      <h2>How It Works</h2>
      <Motion.div
        className="steps"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </Motion.div>
    </div>
  );
}
