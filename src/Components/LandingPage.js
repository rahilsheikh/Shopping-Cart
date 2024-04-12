import React from 'react';
import Product from './Product';

const LandingPage = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2>CARS</h2>
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default LandingPage;
