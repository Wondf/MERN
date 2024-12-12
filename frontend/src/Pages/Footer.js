import React from 'react';
import '../CSS/Footer.css'; // Import styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-logo">DIGITAL <span>Equb</span></h3>
          <p className="footer-description">
            We provide innovative and reliable equb services tailored to meet users’ capacities.
            <br />
            Guarantee is our difference!
          </p>
          <button className="call-button">Let's Call</button>
        </div>

        <div className="footer-center">
          <h4>Company</h4>
          <ul>
            <li>ማህበረሰብ</li>
            <li>እብት አባላት</li>
            <li>ተሞላው</li>
            <li>ሴክላኛ</li>
            <li>በማዕከላዊ</li>
          </ul>
          <h4>Opening Hours</h4>
          <ul>
            <li>Mon - Fri (08.30 AM - 05.30 PM)</li>
            <li>Sat (08.30 AM - 12.30 AM)</li>
            <li>Free Call: 6091 (24/7)</li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Office</h4>
          <ul>
            <li>Kazanchis, Bloom Tower 4th Floor</li>
            <li>(+251) 96 091 0000</li>
            <li>digitalequb@gmail.com</li>
          </ul>
          <div className="social-media">
            <a href="https://facebook.com" className="social-icon">FB</a>
            <a href="https://linkedin.com" className="social-icon">LI</a>
            <a href="https://instagram.com" className="social-icon">IG</a>
            <a href="https://twitter.com" className="social-icon">TW</a>
          </div>
          <div className="app-download">
            <a href="https://play.google.com" className="app-link">Google Play</a>
            <a href="https://www.apple.com/app-store/" className="app-link">App Store</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2024, Digital Equb Financial Technology. All Rights Reserved.</p>
        <ul className="footer-bottom-links">
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy and Policy</a></li>
          <li><a href="#">Back to Top</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
