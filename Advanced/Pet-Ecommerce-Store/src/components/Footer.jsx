import React from 'react';
import { Link } from 'react-router-dom';
import WagHavenLogo from '../assets/Wag-Haven-Logo.png';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from 'react-icons/fa';
import Perks from '../components/Perks';
const Footer = () => {
  return (
    <>
      <Perks />
      <footer className="bg-brandcolor text-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
          {' '}
          <div className="mb-6 md:mb-0">
            <Link to="/">
              <img src={WagHavenLogo} alt="" className="w-44" />
            </Link>
            <p className="mt-2 text-sm">
              Premium, sustainable pet essentials crafted for quality and value.
            </p>
            <p className="mt-2 text-sm">Address: </p>
            <p className="text-sm">Email: support@waghaven.com</p>
            <p className="text-sm">Phone: (123) xxx-xxxx</p>
          </div>
          {/* customer service link */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Customer Service</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li>Contact Us</li>
              <li>Shipping & Returns</li>
              <li>FAQs</li>
              <li>Order Tracking</li>
              <li>Size Guide</li>
            </ul>
          </div>
          {/* social media links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <FaFacebook />
              <FaInstagram />
              <FaTwitterSquare />
              <FaPinterest />
            </div>
          </div>
          {/* newsletter subscription */}
          <div>
            <h3 className="text-xl font-semibold">Stay in the Loop</h3>
            <p className="mt-2 text-sm">
              Subscribe to get special offers, free giveaways, and more
            </p>
            <form action="" className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* bottom section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()}
            <span className="text-brandnamecolor"> Wag Haven </span> All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
