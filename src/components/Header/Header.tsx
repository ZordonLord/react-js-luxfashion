import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header center">
      <div className="header__left">
        <Link to="/"><img src="/img/logo.png" alt="logo" /></Link>
        <a href="#"><img src="/img/search.svg" alt="search" /></a>
      </div>
      <nav className="header__right">
        <button 
          className="header__menu-button" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src="/img/menu.svg" alt="menu" />
        </button>
        <Link className="header__link-site" to="/registration">
          <img src="/img/reg.svg" alt="reg" />
        </Link>
        <Link className="header__link-site" to="/cart">
          <img src="/img/cart.svg" alt="cart" />
        </Link>
      </nav>
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <h3 className="mobile-menu__heading">MENU</h3>
        <div className="mobile-menu__box">
          <div className="mobile-menu__item">
            <Link to="/catalog" className="mobile-menu__title">MAN</Link>
            <ul className="mobile-menu__list">
              <li><Link className="mobile-menu__link" to="/catalog">Accessories</Link></li>
              <li><Link className="mobile-menu__link" to="/catalog">Bags</Link></li>
              <li><Link className="mobile-menu__link" to="/catalog">Denim</Link></li>
              <li><Link className="mobile-menu__link" to="/catalog">T-Shirts</Link></li>
            </ul>
          </div>
          <div className="mobile-menu__item">
            <Link to="/catalog" className="mobile-menu__title">WOMAN</Link>
            <ul className="mobile-menu__list">
              <li><Link className="mobile-menu__link" to="/catalog">Accessories</Link></li>
              <li><Link className="mobile-menu__link" to="/catalog">Bags</Link></li>
              <li><Link className="mobile-menu__link" to="/catalog">Denim</Link></li>
              <li><Link className="mobile-menu__link" to="/catalog">T-Shirts</Link></li>
            </ul>
          </div>
          <div className="mobile-menu__item">
            <Link to="/catalog" className="mobile-menu__title">KIDS</Link>
            <ul className="mobile-menu__list">
              <li><Link className="mobile-menu__link" to="/catalog">Accessories</Link></li>
              <li><Link className="mobile-menu__link" to="/catalog">Bags</Link></li>
              <li><Link className="mobile-menu__link" to="/catalog">Denim</Link></li>
              <li><Link className="mobile-menu__link" to="/catalog">T-Shirts</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 