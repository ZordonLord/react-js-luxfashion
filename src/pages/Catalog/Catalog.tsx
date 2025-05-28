import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../../components/Subscribe/Subscribe';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { useCart } from '../../context/CartContext';
import './Catalog.css';
import productsData from '../../data/products.json';

const Catalog: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<{ id: number; size: string; color: string } | null>(null);
  const { addToCart } = useCart();

  const filteredProducts = selectedSize
    ? productsData.products.filter(product => product.sizes.includes(selectedSize))
    : productsData.products;

  const handleAddToCart = (product: typeof productsData.products[0]) => {
    if (!selectedProduct || selectedProduct.id !== product.id) {
      setSelectedProduct({ id: product.id, size: product.sizes[0], color: 'Red' });
      return;
    }
    
    addToCart(product, selectedProduct.size, selectedProduct.color);
    setSelectedProduct(null);
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Catalog', path: '/catalog' },
    { label: 'New Arrivals' }
  ];

  return (
    <>
      <div className="head">
        <section className="head__center center">
          <h1 className="head__heading">NEW ARRIVALS</h1>
          <Breadcrumb items={breadcrumbItems} />
        </section>
      </div>

      <div className="filter-box center">
        <div className="filter">
          <details>
            <summary className="filter__summary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 6H17M5 10H15M8 14H12" stroke="black" stroke-width="2"></path>
              </svg>
              <span>FILTER CATEGORY</span>
            </summary>
            <div className="filter__box">
              <ul>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Bags</a></li>
                <li><a href="#">Denim</a></li>
                <li><a href="#">Hoodies & Sweatshirts</a></li>
                <li><a href="#">Jackets & Coats</a></li>
                <li><a href="#">Polos</a></li>
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Sweaters & Knits</a></li>
                <li><a href="#">T-Shirts</a></li>
                <li><a href="#">Tanks</a></li>
              </ul>
            </div>
          </details>
        </div>
        <div className="filter-sort">
          <div className="sort">
            <details className="sort__details">
              <summary className="sort__summary">
                <span>TRENDING NOW ▼</span>
              </summary>
              <div className="sort__content">
                <a href="#">Price: Low to High</a>
                <a href="#">Price: High to Low</a>
                <a href="#">Newest</a>
                <a href="#">Oldest</a>
              </div>
            </details>
          </div>
          <div className="sort">
            <details className="sort__details">
              <summary className="sort__summary">
                <span>SIZE ▼</span>
              </summary>
              <div className="sort__content size-filter">
                {['XS', 'S', 'M', 'L'].map((size) => (
                  <label key={size} className="size-label">
                    <input
                      type="checkbox"
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(selectedSize === size ? null : size)}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>

      <section className="product-box center">
        <div className="product-box__content">
          {filteredProducts.map((product) => (
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
        <div className="pagination">
          <a href="#" className="prev">&#60;</a>
          <a href="#" className="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <span className="dots">.....</span>
          <a href="#">20</a>
          <a href="#" className="next">&#62;</a>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default Catalog;