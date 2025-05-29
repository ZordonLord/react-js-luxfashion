import React from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../../components/Subscribe/Subscribe';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './NotFound.css';

const NotFound: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: '404' }
  ];
  return (
    <>
    <div className="head">
        <section className="head__center center">
          <h1 className="head__heading">404 not found</h1>
          <Breadcrumb items={breadcrumbItems} />
        </section>
      </div>
    <div className="not-found center">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link to="/" className="not-found__button">
        Вернуться на главную
      </Link>
    </div>
    <Subscribe />
    </>
  );
};

export default NotFound; 