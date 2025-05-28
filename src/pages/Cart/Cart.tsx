import React from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../../components/Subscribe/Subscribe';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shopping Cart' }
  ];

  return (
    <>
      <div className="head">
        <section className="head__center center">
          <h1 className="head__heading">SHOPPING CART</h1>
          <Breadcrumb items={breadcrumbItems} />
        </section>
      </div>

      <section className="cart-container center">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <div className="cart-item-header">
                  <div className="cart-item-title">
                    <h2 className="cart-item-brand">{item.name.split(' ')[0]}</h2>
                    <p className="cart-item-name">{item.name.split(' ').slice(1).join(' ')}</p>
                  </div>
                  <button 
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </button>
                </div>
                <div className="cart-item-info">
                  <p className="cart-item-price">Price: <span>${item.price.toFixed(2)}</span></p>
                  <p className="cart-item-color">Color: <span>{item.selectedColor}</span></p>
                  <p className="cart-item-size">Size: <span>{item.selectedSize}</span></p>
                  <p className="cart-item-quantity">Quantity: <span>{item.quantity}</span></p>
                </div>
              </div>
            </div>
          ))}
          {cartItems.length > 0 && (
            <div className="cart-buttons">
              <button className="cart-clear" onClick={clearCart}>CLEAR SHOPPING CART</button>
              <Link to="/catalog" className="cart-continue">CONTINUE SHOPPING</Link>
            </div>
          )}
        </div>
        <div className="cart-sidebar">
          <div className="shipping-address">
            <h3>SHIPPING ADDRESS</h3>
            <form>
              <input type="text" placeholder="Bangladesh" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Postcode / Zip" />
              <button type="button" className="get-quote-btn">GET A QUOTE</button>
            </form>
          </div>
          <div className="cart-total-box">
            <div className="subtotal">SUB TOTAL <span>${getTotalPrice().toFixed(2)}</span></div>
            <div className="grand-total">GRAND TOTAL <span>${(getTotalPrice() * 1.0).toFixed(2)}</span></div>
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default Cart; 