import React, { useState } from 'react';
import LandingPage from './Components/LandingPage';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckoutPage';
import PaymentPage from './Components/PaymentPage';

const productsData = [
  { id: 1, model: 'Creta', price: 1600000 },
  { id: 2, model: 'Venue', price: 1500000 },
  { id: 3, model: 'Jeep Campass', price: 2000000 }
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState('landing');

  const handleAddToCart = product => {
    setCart([...cart, product]);
    setStep('cart'); // Navigate to cart page after adding to cart
  };

  const handleProceedToCheckout = () => {
    setStep('checkout');
  };

  const handleSubmitCheckout = formData => {
    console.log('Form submitted:', formData);
    setStep('payment');
  };

  const handlePayment = () => {
    console.log('Payment successful!');
    setCart([]);
    setStep('landing');
  };

  return (
    <div>
      {step === 'landing' && (
        <LandingPage products={productsData} onAddToCart={handleAddToCart} />
      )}
      {step === 'cart' && (
        <div>
          <CartPage cart={cart} />
          <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
      {step === 'checkout' && <CheckoutPage onSubmit={handleSubmitCheckout} />}
      {step === 'payment' && <PaymentPage total={calculateTotal(cart)} onPayment={handlePayment} />}
    </div>
  );
};

const calculateTotal = cart => {
  return cart.reduce((acc, item) => acc + item.price, 0);
};

export default App;
