import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Copyright &copy; {currentYear} |  All Rights Reserved. Design By Faisal Khan.</p>
      </div>
      <div className="footer-right">
        <div className="contact-item">
          <FaEnvelope size={24} className="contact-icon" />
          <a href="mailto:khanfaisal900413@gmail.com" className="contact-link">khanfaisal900413@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaPhone size={24} className="contact-icon" />
          <a href="tel:+919004131045" className="contact-link">+91 9004131045</a>
        </div>
      </div>
    </footer>
  );
}
