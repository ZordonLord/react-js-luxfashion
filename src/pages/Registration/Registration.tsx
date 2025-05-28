import React from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../../components/Subscribe/Subscribe';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './Registration.css';

const Registration: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Registration', path: `/registration/` }
  ];
  return (
    <>
      <div className="head">
        <section className="head__center center">
          <h1 className="head__heading">REGISTRATION</h1>
          <Breadcrumb items={breadcrumbItems} />
        </section>
      </div>

      <section className="reg-container-wrapper center">
        <div className="reg-form-container">
          <h2>Your Name</h2>
          <input type="text" name="first-name" placeholder="First Name" required />
          <input type="text" name="last-name" placeholder="Last Name" required />
          <div className="reg-gender">
            <label><input type="radio" name="gender" value="male" /> Male</label>
            <label><input type="radio" name="gender" value="female" /> Female</label>
          </div>
          <br />
          <h2>Login details</h2>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <small>Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters.</small>
          <button type="submit">JOIN NOW →</button>
        </div>
        <div className="reg-perks-container">
          <h2>LOYALTY HAS ITS PERKS</h2>
          <p>Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
          <ul>
            <li>15% off welcome offer</li>
            <li>Free shipping, returns and exchanges on all orders</li>
            <li>$10 off a purchase on your birthday</li>
            <li>Early access to products</li>
            <li>Exclusive offers & rewards</li>
          </ul>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default Registration; 