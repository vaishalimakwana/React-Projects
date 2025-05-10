import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaClock,
  FaThumbsUp,
  FaUserFriends,
} from 'react-icons/fa';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaShieldAlt />,
      title: 'Secure & Private',
      description:
        'Your data is encrypted and handled with strict confidentiality.',
    },
    {
      icon: <FaClock />,
      title: 'Quick Turnaround',
      description:
        'Get results fast with our optimized process and automation.',
    },
    {
      icon: <FaThumbsUp />,
      title: 'Trusted by Thousands',
      description: 'Our platform is trusted by a wide base of satisfied users.',
    },
    {
      icon: <FaUserFriends />,
      title: 'Dedicated Support',
      description: 'Get help from real people whenever you need assistance.',
    },
  ];
  return (
    <div>
      <section className="why-choose-us" id="why-choose-us">
        <h2>Why Choose Us</h2>
        <Motion.div
          className="tiles"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {reasons.map((item, index) => (
            <div className="tile" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </Motion.div>
      </section>
    </div>
  );
}
