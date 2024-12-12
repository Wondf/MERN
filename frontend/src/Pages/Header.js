import React from 'react';
import { PhoneInTalk, Email, LocationOn } from '@mui/icons-material'; // Import Material UI Icons
import '../CSS/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <span><PhoneInTalk /> 6091</span>
        <span><Email /> digitalequb@gmail.com</span>
        <span><LocationOn /> Kazanchis, Bloom Tower 4th Floor</span>
      </div>
      <nav className="navbar">
        <div className="logo">DIGITAL EQUb</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>How to Start</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <button className="join-btn">Join Now</button>
      </nav>
      <div className="hero">
        <h1>Start Equb</h1>
        <p>
          <strong>“Equb made nobodies into somebodies.”</strong> 
          We modernize the traditional sense of Equb with accountability and transparency.
        </p>
        <button className="cta-btn">Start Equb</button>
      </div>
    </header>
  );
}

export default Header;
