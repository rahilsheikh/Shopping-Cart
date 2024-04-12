import React from 'react';

const Product = ({ product, onAddToCart }) => {
  const convertToINR = price => {

//     // const conversionRate = 0.013; 
//     return (price * conversionRate).toFixed(2);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{convertToINR(product.price)} (click to Proceed)</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;