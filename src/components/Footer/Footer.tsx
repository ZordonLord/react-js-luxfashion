import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="center">
      <p>© 2024 Brand All Rights Reserved.</p>
      <div className="social-icons">
        <a href="#"><div className="social-icons-container"><img src={`${process.env.PUBLIC_URL}/img/facebook-f-brands.png`} alt="Facebook"/></div></a>
        <a href="#"><div className="social-icons-container twt"><img src={`${process.env.PUBLIC_URL}/img/instagram-brands.png`} alt="Instagram"/></div></a>
        <a href="#"><div className="social-icons-container"><img src={`${process.env.PUBLIC_URL}/img/pinterest-p-brands.png`} alt="Pinterest"/></div></a>
        <a href="#"><div className="social-icons-container"><img src={`${process.env.PUBLIC_URL}/img/twitter-brands.png`} alt="Twitter"/></div></a>
      </div>
    </footer>
  );
};

export default Footer; 