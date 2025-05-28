import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import PageTransition from './components/PageTransition/PageTransition';
import { CartProvider } from './context/CartContext';
import './App.css';

// Компонент для анимированных переходов
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/catalog" element={<PageTransition><Catalog /></PageTransition>} />
        <Route path="/product/:id" element={<PageTransition><Product /></PageTransition>} />
        <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
        <Route path="/registration" element={<PageTransition><Registration /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router basename="/react-js-luxfashion">
        <div className="top">
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
