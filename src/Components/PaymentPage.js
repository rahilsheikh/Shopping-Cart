import React from 'react';

const PaymentPage = ({ total, onPayment }) => {
  const handlePayment = () => {
  
    onPayment();
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Total: {total}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
