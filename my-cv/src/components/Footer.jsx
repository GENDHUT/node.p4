import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
