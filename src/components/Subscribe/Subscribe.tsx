import React from 'react';
import './Subscribe.css';

const Subscribe: React.FC = () => {
  return (
    <div className="sub_container center">
      <div className="testimonial">
        <img src="/img/Intersect.png" alt="User Image" />
        <p>"Vestibulum quis porttitor dui! Quisque viverra nunc mi, <em>a pulvinar purus condimentum</em>"</p>
      </div>
      <div className="subscribe">
        <h2>SUBSCRIBE</h2>
        <p>FOR OUR NEWSLETTER AND PROMOTION</p>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe; 