import React from 'react';

const CartPage = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} - {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
