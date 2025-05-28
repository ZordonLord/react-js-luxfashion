import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Subscribe from '../../components/Subscribe/Subscribe';
import './Home.css';
import productsData from '../../data/products.json';

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ id: number; size: string; color: string } | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof productsData.products[0]) => {
    if (!selectedProduct || selectedProduct.id !== product.id) {
      setSelectedProduct({ id: product.id, size: product.sizes[0], color: 'Red' });
      return;
    }
    
    addToCart(product, selectedProduct.size, selectedProduct.color);
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="promo">
        <div className="promo__img">
          <img src="img/promo.png" alt="photo promo" />
        </div>
        <div className="promo__content">
          <div className="promo__info">
            <h1 className="promo__title">THE BRAND</h1>
            <h2 className="promo__heading">OF LUXERIOUS <span>FASHION</span></h2>
          </div>
        </div>
      </section>

      <section className="sale center">
        <div className="sale__item">
          <img src="img/si1.jpg" alt="sale image" />
          <Link to="/catalog" className="sale__content">
            <p className="sale__text">30% OFF</p>
            <h3 className="sale__heading">FOR WOMEN</h3>
          </Link>
        </div>
        <div className="sale__item">
          <img src="img/si2.jpg" alt="sale image" />
          <Link to="/catalog" className="sale__content">
            <p className="sale__text">HOT DEAL</p>
            <h3 className="sale__heading">FOR MEN</h3>
          </Link>
        </div>
        <div className="sale__item">
          <img src="img/si3.jpg" alt="sale image" />
          <Link to="/catalog" className="sale__content">
            <p className="sale__text">NEW ARRIVALS</p>
            <h3 className="sale__heading">FOR KIDS</h3>
          </Link>
        </div>
        <div className="sale__item sale__item_big">
          <img src="img/sibig.jpg" alt="sale image" />
          <Link to="/catalog" className="sale__content">
            <p className="sale__text">LUXIROUS & TRENDY</p>
            <h3 className="sale__heading">ACCESORIES</h3>
          </Link>
        </div>
      </section>

      <section className="product-box center">
        <h2 className="product-box__heading">Fetured Items</h2>
        <p className="product-box__text">Shop for items based on what we featured in this week</p>
        <div className="product-box__content">
          {productsData.products.slice(0, 6).map((product) => (
            <div key={product.id} className="product">
              <img className="product__img" src={product.image} alt={product.name} />
              <div className="product__content">
                <Link to={`/product/${product.id}`} className="product__heading">{product.name}</Link>
                <p className="product__text">{product.description}</p>
                <p className="product__price">${product.price.toFixed(2)}</p>
                {selectedProduct?.id === product.id && (
                  <div className="product__options">
                    <select
                      value={selectedProduct.size}
                      onChange={(e) => setSelectedProduct({ ...selectedProduct, size: e.target.value })}
                    >
                      {product.sizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                    <select
                      value={selectedProduct.color}
                      onChange={(e) => setSelectedProduct({ ...selectedProduct, color: e.target.value })}
                    >
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                      <option value="Black">Black</option>
                      <option value="White">White</option>
                    </select>
                  </div>
                )}
              </div>
              <button 
                className="product__add"
                onClick={() => handleAddToCart(product)}
              >
                {selectedProduct?.id === product.id ? 'Confirm' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
        <div className="all_product_button">
          <Link to="/catalog">Browse All Products</Link>
        </div>
      </section>

      <div className="advantages center">
        <article className="advantages__item">
          <img className="advantages__img" src="/img/advantages-img.svg" alt="" />
          <h3 className="advantages__heading">Free Delivery</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img className="advantages__img" src="/img/advantages-img.svg" alt="" />
          <h3 className="advantages__heading">Sales & discounts</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img className="advantages__img" src="/img/advantages-img.svg" alt="" />
          <h3 className="advantages__heading">Quality assurance</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </p>
        </article>
      </div>

      <Subscribe />
    </>
  );
};

export default Home; 