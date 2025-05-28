import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import productsData from '../../data/products.json';
import './Product.css';

const Product: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<typeof productsData.products[0] | null>(null);
  const [selectedColor, setSelectedColor] = useState('Red');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = productsData.products.find(p => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, selectedSize, selectedColor);
    }
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Catalog', path: '/catalog' },
    { label: 'New Arrivals', path: `/product/${id}` }
  ];

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="head">
        <section className="head__center center">
          <h1 className="head__heading">NEW ARRIVALS</h1>
          <Breadcrumb items={breadcrumbItems} />
        </section>
      </div>

      <div className="slider center">
        <div className="slider__arrow slider__arrow_left">
          ❮
        </div>
        <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} />
        <div className="slider__arrow slider__arrow_right">
          ❯
        </div>
      </div>

      <div className="product-card center">
        <div className="collection">WOMEN COLLECTION</div>
        <div className="brand">{product.name}</div>
        <div className="description">
          {product.description}
        </div>
        <div className="price">${product.price.toFixed(2)}</div>
        <div className="option-group-box">
          <div className="option-group">
            <div className="option-label">CHOOSE COLOR</div>
            <select 
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="Red">Red</option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="White">White</option>
            </select>
          </div>
          <div className="option-group">
            <div className="option-label">CHOOSE SIZE</div>
            <select 
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="option-group">
            <div className="option-label">QUANTITY</div>
            <input 
              type="number" 
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            />
          </div>
        </div>
        <button 
          className="add-to-cart"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Product; 