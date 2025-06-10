import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand and Tagline */}
        <div className="footer-brand">
          <h3 className="footer-logo">ResumeGenie</h3>
          <p>AI-powered resume builder to help you land your dream job faster.</p>
        </div>

        {/* Features */}
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>📝 Resume Builder</li>
            <li>📄 Cover Letter Generator</li>
            <li>📊 Resume Score Analyzer</li>
            <li>🧠 AI Job Matcher</li>
            <li>🎨 Professional Templates
              <ul className="sub-features">
                <li>Modern</li>
                <li>Traditional</li>
                <li>Creative</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        {/* Contact and Legal */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: support@resumegenie.ai</li>
            <li>Phone: +254 712 345 678</li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ResumeGenie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
